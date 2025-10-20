# API Contracts & Integration Plan

## Overview
Backend implementation for Nikhil Agarwal's portfolio website with contact form functionality and mock email service.

## Current Mock Data Location
- **File**: `/app/frontend/src/data/mock.js`
- **Mocked Sections**: All portfolio data (personalInfo, skills, projects, experience, testimonials)
- **Mock Functionality**: Contact form submission (frontend only with toast notification)

## Backend Implementation Plan

### 1. Database Models (MongoDB)

#### ContactSubmission Model
```python
{
    "id": str (auto-generated UUID),
    "name": str (required),
    "email": str (required, email validation),
    "message": str (required),
    "submitted_at": datetime (auto-generated),
    "status": str (default: "new", enum: ["new", "read", "replied"])
}
```

### 2. API Endpoints

#### POST /api/contact
**Purpose**: Handle contact form submissions and send mock email

**Request Body**:
```json
{
    "name": "string",
    "email": "string (email format)",
    "message": "string"
}
```

**Response (Success - 200)**:
```json
{
    "success": true,
    "message": "Thank you for your message! I'll get back to you soon.",
    "submission_id": "uuid"
}
```

**Response (Error - 400)**:
```json
{
    "success": false,
    "error": "Validation error message"
}
```

**Response (Error - 500)**:
```json
{
    "success": false,
    "error": "Internal server error"
}
```

#### GET /api/contact (Optional - for admin view)
**Purpose**: Retrieve all contact submissions

**Response (Success - 200)**:
```json
{
    "success": true,
    "count": 10,
    "submissions": [
        {
            "id": "uuid",
            "name": "string",
            "email": "string",
            "message": "string",
            "submitted_at": "ISO datetime",
            "status": "new"
        }
    ]
}
```

#### GET /api/contact/{id}
**Purpose**: Get specific contact submission

**Response (Success - 200)**:
```json
{
    "success": true,
    "submission": {
        "id": "uuid",
        "name": "string",
        "email": "string",
        "message": "string",
        "submitted_at": "ISO datetime",
        "status": "new"
    }
}
```

### 3. Mock Email Service

**Implementation**: Create a mock email service that logs email details instead of actually sending
- Log recipient: nikhilagarwal.20.na@gmail.com
- Log subject: "New Contact Form Submission from {name}"
- Log body: Formatted message with sender details
- Return success after logging

### 4. Frontend Integration Changes

#### File: `/app/frontend/src/components/Contact.jsx`

**Current Implementation**:
```javascript
// Mock submission with setTimeout
await new Promise(resolve => setTimeout(resolve, 1500));
```

**New Implementation**:
```javascript
// Actual API call
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
```

**Error Handling**:
- Network errors
- Validation errors (400)
- Server errors (500)
- Display appropriate toast messages

### 5. Backend File Structure

```
/app/backend/
├── server.py (main FastAPI app)
├── models/
│   └── contact.py (ContactSubmission model)
├── services/
│   └── email_service.py (mock email service)
└── .env (environment variables)
```

### 6. Environment Variables

**Backend .env additions**:
```
# Already exists
MONGO_URL=mongodb://...
DB_NAME=portfolio_db

# Add if needed
CONTACT_EMAIL=nikhilagarwal.20.na@gmail.com
```

### 7. Validation Rules

**Name**: 
- Required
- Min length: 2 characters
- Max length: 100 characters

**Email**:
- Required
- Valid email format
- Max length: 255 characters

**Message**:
- Required
- Min length: 10 characters
- Max length: 2000 characters

### 8. Integration Testing Checklist

- [ ] Backend server starts without errors
- [ ] POST /api/contact accepts valid submissions
- [ ] Data is saved to MongoDB
- [ ] Mock email service logs correctly
- [ ] Validation errors return proper 400 responses
- [ ] Frontend form submits successfully
- [ ] Success toast displays on frontend
- [ ] Error toast displays on validation failure
- [ ] Form clears after successful submission
- [ ] Network error handling works

### 9. Mock Data Removal Plan

**Files to Update**: None for now
- Portfolio data (skills, projects, experience) remains in frontend mock.js
- Only contact form will be connected to backend

**Reason**: Portfolio data is static content that doesn't require database storage
