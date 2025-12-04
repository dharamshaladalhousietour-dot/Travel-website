from fastapi import FastAPI, APIRouter, HTTPException
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

# MongoDB connection with Atlas support
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'test_database')

# Configure MongoDB client with appropriate settings for both local and Atlas
client = AsyncIOMotorClient(
    mongo_url,
    serverSelectionTimeoutMS=5000,  # 5 second timeout
    connectTimeoutMS=10000,  # 10 second connection timeout
    socketTimeoutMS=10000,  # 10 second socket timeout
    maxPoolSize=50,  # Connection pool size
    minPoolSize=10,
    retryWrites=True,  # Enable retryable writes for Atlas
    w='majority'  # Write concern for Atlas
)
db = client[db_name]

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

# Email configuration
def send_enquiry_email(enquiry_data):
    """Send enquiry notification email to info@prettyplanettravels.com"""
    try:
        # Email settings - using Gmail SMTP with app password
        smtp_server = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_username = os.environ.get('SMTP_USERNAME', '')
        smtp_password = os.environ.get('SMTP_PASSWORD', '')
        recipient_email = smtp_username  # Send to same Gmail account
        
        # If SMTP credentials not configured, just log
        if not smtp_username or not smtp_password:
            logger.info(f"📧 EMAIL NOTIFICATION TO {recipient_email}")
            logger.info(f"Subject: New Travel Enquiry from {enquiry_data.name}")
            logger.info(f"Content: {enquiry_data.formatted_message}")
            logger.warning("⚠️ SMTP credentials not configured. Email logged only.")
            return True
        
        # Create email message
        msg = MIMEMultipart('alternative')
        msg['From'] = smtp_username
        msg['To'] = recipient_email
        msg['Subject'] = f"New Travel Enquiry from {enquiry_data.name}"
        
        # HTML email body
        html_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
                <h2 style="color: #1e40af; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">
                    🌍 New Travel Enquiry
                </h2>
                
                <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
                    <h3 style="color: #1e40af;">Customer Details:</h3>
                    <p><strong>Name:</strong> {enquiry_data.name}</p>
                    <p><strong>Email:</strong> {enquiry_data.email}</p>
                    <p><strong>Phone:</strong> {enquiry_data.phone}</p>
                    
                    <h3 style="color: #1e40af; margin-top: 20px;">Trip Details:</h3>
                    <p><strong>Destination:</strong> {enquiry_data.destination}</p>
                    <p><strong>Travel Dates:</strong> {enquiry_data.start_date} to {enquiry_data.end_date}</p>
                    <p><strong>Duration:</strong> {enquiry_data.days} days</p>
                    <p><strong>Travelers:</strong> {enquiry_data.adults} Adults, {enquiry_data.kids} Kids</p>
                    <p><strong>Budget:</strong> {enquiry_data.budget}</p>
                    
                    <h3 style="color: #1e40af; margin-top: 20px;">Message:</h3>
                    <p style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
                        {enquiry_data.message if enquiry_data.message else 'No additional message'}
                    </p>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 4px;">
                    <p style="margin: 0;"><strong>📅 Received:</strong> {enquiry_data.timestamp.strftime('%d %B %Y at %I:%M %p')}</p>
                    <p style="margin: 5px 0 0 0;"><strong>🆔 Enquiry ID:</strong> {enquiry_data.id}</p>
                </div>
                
                <p style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
                    This is an automated notification from Pretty Planet Travels & Events
                </p>
            </div>
        </body>
        </html>
        """
        
        # Attach HTML body
        msg.attach(MIMEText(html_body, 'html'))
        
        # Send email
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.send_message(msg)
        
        logger.info(f"✅ Email sent successfully to {recipient_email}")
        return True
        
    except Exception as e:
        logger.error(f"❌ Error sending email notification: {str(e)}")
        # Don't fail the request if email fails
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

# Payment Endpoints
@api_router.post("/create-payment-order", response_model=dict)
async def create_payment_order(order: PaymentOrderCreate):
    try:
        # Create Razorpay order
        razorpay_order = razorpay_client.order.create({
            "amount": order.amount,  # Amount in paise
            "currency": order.currency,
            "payment_capture": 1
        })
        
        # Store order in database
        order_data = {
            "id": str(uuid.uuid4()),
            "razorpay_order_id": razorpay_order["id"],
            "amount": order.amount,
            "name": order.name,
            "email": order.email,
            "phone": order.phone,
            "package_name": order.package_name,
            "status": "created",
            "timestamp": datetime.utcnow()
        }
        
        await db.payment_orders.insert_one(order_data)
        
        logger.info(f"Payment order created: {razorpay_order['id']} for ₹{order.amount/100}")
        
        return {
            "order_id": razorpay_order["id"],
            "amount": order.amount,
            "currency": order.currency,
            "key_id": os.environ.get('RAZORPAY_KEY_ID')
        }
        
    except Exception as e:
        logger.error(f"Error creating payment order: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create payment order")

@api_router.post("/payment-success", response_model=PaymentSuccess)
async def handle_payment_success(payment: PaymentSuccessCreate):
    try:
        # Verify payment signature
        params_dict = {
            'razorpay_order_id': payment.razorpay_order_id,
            'razorpay_payment_id': payment.razorpay_payment_id,
            'razorpay_signature': payment.razorpay_signature
        }
        
        # LIVE MODE: Verify payment signature for security
        try:
            razorpay_client.utility.verify_payment_signature(params_dict)
            logger.info(f"✅ Payment signature verified for payment: {payment.razorpay_payment_id}")
        except Exception as signature_error:
            logger.error(f"❌ Payment signature verification failed: {str(signature_error)}")
            raise HTTPException(status_code=400, detail="Invalid payment signature")
        
        # Save payment success to database
        payment_dict = payment.dict()
        payment_obj = PaymentSuccess(**payment_dict)
        
        await db.payment_success.insert_one(payment_obj.dict())
        
        # Send notifications
        await send_payment_notifications(payment_obj)
        
        logger.info(f"✅ Payment successful: {payment.razorpay_payment_id} for ₹{payment.amount/100}")
        
        return payment_obj
        
    except Exception as e:
        logger.error(f"❌ Error handling payment success: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process payment")

async def send_payment_notifications(payment: PaymentSuccess):
    """Send payment confirmation via email and WhatsApp"""
    try:
        # Format payment notification message
        payment_date = payment.timestamp.strftime("%d %B %Y, %I:%M %p")
        
        formatted_message = f"""💳 New Payment Received
👤 Name: {payment.name}
📦 Package: {payment.package_name}
💰 Amount: ₹{payment.amount/100}
📅 Date: {payment_date}
📧 Email: {payment.email}
📱 Phone: {payment.phone}
🆔 Payment ID: {payment.razorpay_payment_id}
🆔 Order ID: {payment.razorpay_order_id}"""
        
        # Log email notification (actual SMTP integration pending)
        logger.info(f"📧 PAYMENT EMAIL NOTIFICATION TO info@prettyplanettravels.com")
        logger.info(f"Subject: New Payment Received - ₹{payment.amount/100}")
        logger.info(f"Content: {formatted_message}")
        logger.info("✅ Payment email notification logged (SMTP integration pending)")
        
        # Log WhatsApp notification (actual WhatsApp API integration pending)
        logger.info(f"📱 PAYMENT WHATSAPP NOTIFICATION TO +91 8679333355")
        logger.info(f"Message: {formatted_message}")
        logger.info("✅ Payment WhatsApp notification logged (API integration pending)")
        
        return True
        
    except Exception as e:
        logger.error(f"❌ Error sending payment notifications: {str(e)}")
        return False

@api_router.get("/health")
async def health_check():
    """Health check endpoint with MongoDB connectivity test"""
    health_status = {
        "status": "healthy",
        "service": "prettyplanet-api",
        "database": "unknown"
    }
    
    try:
        # Test MongoDB connection
        await client.admin.command('ping')
        health_status["database"] = "connected"
        logger.debug("Health check: MongoDB connection OK")
    except Exception as e:
        health_status["status"] = "degraded"
        health_status["database"] = "disconnected"
        health_status["error"] = str(e)
        logger.warning(f"Health check: MongoDB connection failed - {str(e)}")
    
    return health_status

# Chatbot Models
from typing import Optional

class ChatMessage(BaseModel):
    session_id: str
    message: str
    user_name: Optional[str] = None
    user_email: Optional[str] = None
    user_phone: Optional[str] = None
    service_type: Optional[str] = None
    event_date: Optional[str] = None
    guest_count: Optional[str] = None

class ChatResponse(BaseModel):
    response: str
    session_id: str

# Chatbot Endpoints
@api_router.post("/chat", response_model=ChatResponse)
async def chat(chat_message: ChatMessage):
    """AI Chatbot endpoint for Pretty Planet Travels"""
    try:
        from emergentintegrations.llm.chat import LlmChat, UserMessage
        
        # Get API key from environment
        api_key = os.environ.get('EMERGENT_LLM_KEY', 'sk-emergent-9458a7296Ad065bA72')
        
        # System message with context about Pretty Planet Travels
        system_message = """You are an AI assistant for Pretty Planet Travels & Events, specializing in Dharamshala-based services.

**Our Services:**
1. **Dharamshala Weddings** - Destination weddings in Dharamshala with stunning Himalayan backdrops
2. **Events in Dharamshala** - Corporate events, conferences, team outings in Dharamshala
3. **Travel & Tour Packages** - Tours to Kashmir, Shimla, Manali, Leh Ladakh, Dharamshala, Himachal, and select destinations

**What We Offer:**
- Dharamshala is our specialty and main focus
- Customized wedding planning and event management in Dharamshala
- Tour packages across Himachal Pradesh and select destinations
- 3-star hotels with upgrades available
- Complete travel planning and coordination

**Your Role:**
1. Present 3 main options: Dharamshala Weddings, Events in Dharamshala, Travel & Tour Packages
2. Answer ONLY based on services we actually provide on our website
3. Keep responses SHORT, CLEAR, and PROFESSIONAL (2-3 sentences max)
4. Collect: Name, Service Type, Date, Guest Count, Contact Number
5. Guide users to WhatsApp, Call, or Email for bookings

**Contact Information:**
- Email: holidays@prettyplanettravels.com
- WhatsApp/Call: +91 8679333355
- Main Focus: Dharamshala

**Communication Rules:**
- NO long paragraphs - keep it brief and actionable
- NO generic travel advice - only our actual services
- For Weddings/Events: ONLY Dharamshala (not Goa, Shimla, Manali, etc.)
- For Travel: ONLY packages listed on our website
- Always provide next steps (Share Details, WhatsApp, Call, Email)

**Response Format:**
- Start with 2-3 sentence answer
- End with: "How would you like to proceed: Share Details | WhatsApp Us | Call Now | Email Us"

Collect lead info and tell them: "Thank you! Our team will contact you within 1 hour at holidays@prettyplanettravels.com or +91 8679333355" """

        # Create LlmChat instance
        chat_instance = LlmChat(
            api_key=api_key,
            session_id=chat_message.session_id,
            system_message=system_message
        ).with_model("openai", "gpt-4o-mini")
        
        # Add user context if provided
        user_context = ""
        if chat_message.user_name:
            user_context += f"\nUser Name: {chat_message.user_name}"
        if chat_message.user_email:
            user_context += f"\nUser Email: {chat_message.user_email}"
        if chat_message.user_phone:
            user_context += f"\nUser Phone: {chat_message.user_phone}"
        if chat_message.service_type:
            user_context += f"\nService Type: {chat_message.service_type}"
        if chat_message.event_date:
            user_context += f"\nEvent Date: {chat_message.event_date}"
        if chat_message.guest_count:
            user_context += f"\nGuest Count: {chat_message.guest_count}"
        
        message_text = chat_message.message
        if user_context:
            message_text += user_context
        
        # Send message and get response
        user_message = UserMessage(text=message_text)
        response = await chat_instance.send_message(user_message)
        
        # Store chat history in database
        chat_history = {
            "id": str(uuid.uuid4()),
            "session_id": chat_message.session_id,
            "user_message": chat_message.message,
            "bot_response": response,
            "user_name": chat_message.user_name,
            "user_email": chat_message.user_email,
            "user_phone": chat_message.user_phone,
            "service_type": chat_message.service_type,
            "event_date": chat_message.event_date,
            "guest_count": chat_message.guest_count,
            "timestamp": datetime.utcnow()
        }
        await db.chat_history.insert_one(chat_history)
        
        logger.info(f"Chat message processed for session: {chat_message.session_id}")
        
        return ChatResponse(
            response=response,
            session_id=chat_message.session_id
        )
        
    except Exception as e:
        logger.error(f"Error in chat endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Chat service error: {str(e)}")

@api_router.get("/chat-history/{session_id}")
async def get_chat_history(session_id: str):
    """Get chat history for a session"""
    try:
        history = await db.chat_history.find(
            {"session_id": session_id},
            {"_id": 0}
        ).sort("timestamp", 1).to_list(100)
        
        return {"session_id": session_id, "messages": history}
    except Exception as e:
        logger.error(f"Error fetching chat history: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch chat history")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    """Test MongoDB connection on startup"""
    try:
        # Test the connection by running a simple command
        await client.admin.command('ping')
        logger.info(f"✅ Successfully connected to MongoDB: {db_name}")
        
        # Log connection type
        if 'mongodb.net' in mongo_url or 'mongodb+srv' in mongo_url:
            logger.info("🌐 Connected to MongoDB Atlas (Cloud)")
        else:
            logger.info("💻 Connected to MongoDB (Local)")
            
    except Exception as e:
        logger.error(f"❌ Failed to connect to MongoDB: {str(e)}")
        logger.error(f"MongoDB URL pattern: {mongo_url.split('@')[0] if '@' in mongo_url else 'local'}")
        # Don't raise exception, let the app start but log the error
        # This allows health checks to work even if DB is temporarily unavailable

@app.on_event("shutdown")
async def shutdown_db_client():
    """Close MongoDB connection on shutdown"""
    try:
        client.close()
        logger.info("✅ MongoDB connection closed successfully")
    except Exception as e:
        logger.error(f"❌ Error closing MongoDB connection: {str(e)}")
