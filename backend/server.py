from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import razorpay


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Initialize Razorpay client
razorpay_client = razorpay.Client(auth=(
    os.environ.get('RAZORPAY_KEY_ID'),
    os.environ.get('RAZORPAY_KEY_SECRET')
))

# Email configuration (placeholder - will be updated with real credentials)
def send_enquiry_email(enquiry_data):
    """Send enquiry notification email to info@prettyplanettravels.com"""
    try:
        # For now, just log the email content
        # TODO: Implement actual email sending once SMTP credentials are provided
        logger.info(f"📧 EMAIL NOTIFICATION TO info@prettyplanettravels.com")
        logger.info(f"Subject: New Travel Enquiry from {enquiry_data.name}")
        logger.info(f"Content: {enquiry_data.formatted_message}")
        logger.info("✅ Email notification logged (SMTP integration pending)")
        return True
    except Exception as e:
        logger.error(f"❌ Error sending email notification: {str(e)}")
        return False


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class EnquiryForm(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    destination: str
    start_date: str
    end_date: str
    adults: str
    kids: str
    days: str
    name: str = ""
    email: str = ""
    phone: str = ""
    budget: str = ""
    message: str = ""
    formatted_message: str = ""
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class EnquiryFormCreate(BaseModel):
    destination: str
    start_date: str
    end_date: str
    adults: str
    kids: str
    days: str
    name: str = ""
    email: str = ""
    phone: str = ""
    budget: str = ""
    message: str = ""
    formatted_message: str = ""

# Payment Models
class PaymentOrder(BaseModel):
    amount: int  # Amount in paise (multiply rupees by 100)
    currency: str = "INR"
    name: str = ""
    email: str = ""
    phone: str = ""
    package_name: str = ""

class PaymentOrderCreate(BaseModel):
    amount: int
    currency: str = "INR"
    name: str = ""
    email: str = ""
    phone: str = ""
    package_name: str = ""

class PaymentSuccess(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str
    amount: int
    name: str
    email: str
    phone: str
    package_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class PaymentSuccessCreate(BaseModel):
    razorpay_order_id: str
    razorpay_payment_id: str
    razorpay_signature: str
    amount: int
    name: str
    email: str
    phone: str
    package_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/enquiry", response_model=EnquiryForm)
async def create_enquiry(input: EnquiryFormCreate):
    try:
        enquiry_dict = input.dict()
        enquiry_obj = EnquiryForm(**enquiry_dict)
        
        # Save to database
        _ = await db.enquiries.insert_one(enquiry_obj.dict())
        
        # Send email notification
        send_enquiry_email(enquiry_obj)
        
        logger.info(f"✅ Enquiry processed: {enquiry_obj.destination} from {enquiry_obj.name}")
        logger.info(f"📱 WhatsApp message will be sent from frontend")
        
        return enquiry_obj
    except Exception as e:
        logger.error(f"❌ Error creating enquiry: {str(e)}")
        raise

@api_router.get("/enquiry", response_model=List[EnquiryForm])
async def get_enquiries():
    enquiries = await db.enquiries.find().to_list(1000)
    return [EnquiryForm(**enquiry) for enquiry in enquiries]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
