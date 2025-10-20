from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, ValidationError
from typing import List, Optional
import uuid
from datetime import datetime, timezone

# Import models and services
from models.contact import ContactSubmission, ContactSubmissionCreate
from services.email_service import MockEmailService


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Initialize mock email service
CONTACT_EMAIL = os.environ.get('CONTACT_EMAIL', 'nikhilagarwal.20.na@gmail.com')
email_service = MockEmailService(recipient_email=CONTACT_EMAIL)

# Create the main app without a prefix
app = FastAPI(title="Nikhil Agarwal Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# ==================== CONTACT FORM ENDPOINTS ====================

@api_router.post("/contact")
async def submit_contact_form(submission: ContactSubmissionCreate):
    """
    Handle contact form submission.
    Saves submission to database and sends mock email notification.
    """
    try:
        # Create contact submission object
        contact_obj = ContactSubmission(
            name=submission.name,
            email=submission.email,
            message=submission.message
        )
        
        # Save to database
        doc = contact_obj.model_dump()
        doc['submitted_at'] = doc['submitted_at'].isoformat()
        await db.contact_submissions.insert_one(doc)
        logger.info(f"Contact submission saved: {contact_obj.id} from {contact_obj.email}")
        
        # Send mock email notification
        email_sent = await email_service.send_contact_form_email(
            name=contact_obj.name,
            sender_email=contact_obj.email,
            message=contact_obj.message
        )
        
        # Send auto-reply to sender (optional)
        await email_service.send_auto_reply(
            recipient_email=contact_obj.email,
            name=contact_obj.name
        )
        
        if not email_sent:
            logger.warning("Mock email notification failed, but submission was saved")
        
        return JSONResponse(
            status_code=200,
            content={
                "success": True,
                "message": "Thank you for your message! I'll get back to you soon.",
                "submission_id": contact_obj.id
            }
        )
        
    except ValidationError as e:
        logger.error(f"Validation error: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))
    
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An error occurred while processing your request. Please try again later."
        )


@api_router.get("/contact")
async def get_all_contact_submissions(skip: int = 0, limit: int = 50):
    """
    Get all contact form submissions (for admin view).
    """
    try:
        submissions = await db.contact_submissions.find({}, {"_id": 0}).sort("submitted_at", -1).skip(skip).limit(limit).to_list(limit)
        count = await db.contact_submissions.count_documents({})
        
        # Convert ISO string timestamps back to datetime objects
        for sub in submissions:
            if isinstance(sub['submitted_at'], str):
                sub['submitted_at'] = datetime.fromisoformat(sub['submitted_at'])
        
        return JSONResponse(
            status_code=200,
            content={
                "success": True,
                "count": count,
                "submissions": [ContactSubmission(**sub).model_dump(mode='json') for sub in submissions]
            }
        )
    except Exception as e:
        logger.error(f"Error fetching contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Error fetching submissions")


@api_router.get("/contact/{submission_id}")
async def get_contact_submission(submission_id: str):
    """
    Get a specific contact submission by ID.
    """
    try:
        submission = await db.contact_submissions.find_one({"id": submission_id}, {"_id": 0})
        
        if not submission:
            raise HTTPException(status_code=404, detail="Submission not found")
        
        # Convert ISO string timestamp back to datetime object
        if isinstance(submission['submitted_at'], str):
            submission['submitted_at'] = datetime.fromisoformat(submission['submitted_at'])
        
        return JSONResponse(
            status_code=200,
            content={
                "success": True,
                "submission": ContactSubmission(**submission).model_dump(mode='json')
            }
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching contact submission: {str(e)}")
        raise HTTPException(status_code=500, detail="Error fetching submission")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()