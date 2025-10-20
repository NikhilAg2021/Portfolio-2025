import logging
from datetime import datetime

logger = logging.getLogger(__name__)

class MockEmailService:
    """
    Mock email service that logs email details instead of actually sending emails.
    This can be replaced with a real email service (SendGrid, AWS SES, etc.) in the future.
    """
    
    def __init__(self, recipient_email: str):
        self.recipient_email = recipient_email
        logger.info(f"MockEmailService initialized with recipient: {recipient_email}")
    
    async def send_contact_form_email(self, name: str, sender_email: str, message: str) -> bool:
        """
        Mock sending of contact form email.
        
        Args:
            name: Name of the person sending the message
            sender_email: Email address of the sender
            message: The message content
            
        Returns:
            bool: True if email was "sent" successfully, False otherwise
        """
        try:
            email_subject = f"New Contact Form Submission from {name}"
            email_body = f"""
            ============================================
            NEW CONTACT FORM SUBMISSION
            ============================================
            
            From: {name}
            Email: {sender_email}
            Time: {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S UTC')}
            
            Message:
            {message}
            
            ============================================
            """
            
            # Log the email details (mock sending)
            logger.info("=" * 50)
            logger.info("MOCK EMAIL SERVICE - Email Details")
            logger.info("=" * 50)
            logger.info(f"To: {self.recipient_email}")
            logger.info(f"Subject: {email_subject}")
            logger.info(f"Body:\n{email_body}")
            logger.info("=" * 50)
            logger.info("Email 'sent' successfully (mocked)")
            logger.info("=" * 50)
            
            return True
            
        except Exception as e:
            logger.error(f"Error in mock email service: {str(e)}")
            return False
    
    async def send_auto_reply(self, recipient_email: str, name: str) -> bool:
        """
        Mock sending of auto-reply to the person who submitted the contact form.
        
        Args:
            recipient_email: Email of the person who submitted the form
            name: Name of the person
            
        Returns:
            bool: True if auto-reply was "sent" successfully
        """
        try:
            email_subject = "Thank you for contacting Nikhil Agarwal"
            email_body = f"""
            Hi {name},
            
            Thank you for reaching out! I have received your message and will get back to you as soon as possible.
            
            Best regards,
            Nikhil Agarwal
            Advanced Application Systems Engineer
            """
            
            logger.info("=" * 50)
            logger.info("MOCK EMAIL SERVICE - Auto Reply")
            logger.info("=" * 50)
            logger.info(f"To: {recipient_email}")
            logger.info(f"Subject: {email_subject}")
            logger.info(f"Body:\n{email_body}")
            logger.info("=" * 50)
            logger.info("Auto-reply 'sent' successfully (mocked)")
            logger.info("=" * 50)
            
            return True
            
        except Exception as e:
            logger.error(f"Error sending auto-reply: {str(e)}")
            return False
