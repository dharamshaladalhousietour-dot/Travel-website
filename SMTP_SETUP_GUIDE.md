# SMTP Email Configuration Guide - Pretty Planet Travels

## Current Status: ⚠️ Credentials Not Accepted by Gmail

### Error Message:
```
535, b'5.7.8 Username and Password not accepted. For more information, go to
5.7.8  https://support.google.com/mail/?p=BadCredentials'
```

---

## ✅ What's Already Configured

The backend system is fully set up to send emails. SMTP credentials have been added to `/app/backend/.env`:

```env
SMTP_SERVER="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USERNAME="info@prettyplanettravels.com"
SMTP_PASSWORD="butxdshmdodchey"
```

**The issue:** Gmail is rejecting these credentials.

---

## 🔧 How to Fix Gmail Authentication

### Option 1: Generate a New Gmail App Password (Recommended)

1. **Verify 2-Step Verification is Enabled:**
   - Go to: https://myaccount.google.com/security
   - Under "How you sign in to Google," ensure "2-Step Verification" is ON
   - If not enabled, enable it first

2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Sign in with your Google account (info@prettyplanettravels.com)
   - Select "Mail" as the app
   - Select "Other" as the device and name it "Pretty Planet Website"
   - Click "Generate"
   - Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

3. **Update the .env File:**
   - Remove all spaces from the app password
   - Example: If password is `abcd efgh ijkl mnop`, use `abcdefghijklmnop`
   
4. **Restart Backend:**
   ```bash
   sudo supervisorctl restart backend
   ```

---

### Option 2: Use a Different Email Service

If Gmail continues to have issues, consider using:

#### **SendGrid (Free tier: 100 emails/day)**
```env
SMTP_SERVER="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USERNAME="apikey"
SMTP_PASSWORD="your-sendgrid-api-key"
```

#### **Mailgun (Free tier: 5000 emails/month)**
```env
SMTP_SERVER="smtp.mailgun.org"
SMTP_PORT="587"
SMTP_USERNAME="postmaster@your-domain.mailgun.org"
SMTP_PASSWORD="your-mailgun-password"
```

#### **AWS SES (Very reliable for production)**
```env
SMTP_SERVER="email-smtp.us-east-1.amazonaws.com"
SMTP_PORT="587"
SMTP_USERNAME="your-ses-username"
SMTP_PASSWORD="your-ses-password"
```

---

## 🧪 Testing Email After Configuration

### Method 1: Using the Test Script
```bash
python3 /tmp/test_email.py
```

### Method 2: Submit a Real Form
1. Go to: http://localhost:3000/events-weddings
2. Scroll to "Plan Your Perfect Event" form
3. Fill in details and submit
4. Check backend logs:
   ```bash
   tail -f /var/log/supervisor/backend.err.log
   ```
   
Look for:
- ✅ `✅ Email sent successfully to info@prettyplanettravels.com`
- ❌ `❌ Error sending email notification: ...`

---

## 📧 Current Email Notification Flow

When a customer submits any enquiry form:

1. ✅ Form data sent to backend API: `/api/enquiry`
2. ✅ Data saved to MongoDB database
3. ⚠️ Backend attempts to send email to `info@prettyplanettravels.com`
4. ✅ WhatsApp link opens with pre-filled message
5. ✅ Success confirmation shown to user

**Note:** Even if email fails, the enquiry is still saved and WhatsApp works.

---

## 🔍 Troubleshooting Gmail Issues

### Common Problems & Solutions

**Problem:** "Username and Password not accepted"
- ✅ Ensure 2-Step Verification is enabled
- ✅ Generate a NEW app password (old ones may expire)
- ✅ Remove ALL spaces from the app password
- ✅ Use the correct email: `info@prettyplanettravels.com`

**Problem:** "Please log in via your web browser"
- ✅ This means "Less secure app access" needs to be enabled
- ✅ However, Google has deprecated this. Use App Passwords instead.

**Problem:** "Too many login attempts"
- ✅ Wait 15-30 minutes before trying again
- ✅ Gmail may temporarily block after multiple failed attempts

**Problem:** Email sent but goes to SPAM
- ✅ Add your website domain to Gmail's SPF record
- ✅ Set up DKIM and DMARC records for your domain
- ✅ Ask recipient to mark as "Not Spam"

---

## 📝 What to Send Me for Help

If you continue having issues, please provide:

1. ✅ Screenshot of Gmail App Password generation screen
2. ✅ Confirmation that 2-Step Verification is enabled
3. ✅ The exact error message from backend logs
4. ✅ Whether you're using a Google Workspace account or regular Gmail

---

## 🚀 Once Working - Production Deployment

After email is working locally:

1. **Update Live Server `.env`:**
   - Copy the working SMTP credentials to live server's `.env` file
   - Location: `/app/backend/.env`

2. **Restart Live Server:**
   ```bash
   sudo supervisorctl restart backend
   ```

3. **Test on Live Site:**
   - Submit a test enquiry
   - Verify email arrives at `info@prettyplanettravels.com`

---

## 📊 Email Template Preview

When an enquiry is submitted, `info@prettyplanettravels.com` receives:

**Subject:** New Travel Enquiry from [Customer Name]

**Body:**
- 🌍 Header: "New Travel Enquiry"
- **Customer Details:** Name, Email, Phone
- **Trip Details:** Destination, Dates, Duration, Travelers, Budget
- **Customer Message:** Full message text
- **Metadata:** Timestamp, Enquiry ID
- Professional HTML formatting with Pretty Planet branding

---

## ⚙️ Current System Architecture

```
Customer fills form
       ↓
Frontend React Component
       ↓
POST /api/enquiry
       ↓
FastAPI Backend
       ↓
   ├─→ Save to MongoDB (✅ Working)
   ├─→ Send Email via SMTP (⚠️ Needs valid credentials)
   └─→ Return success to frontend
       ↓
Frontend opens WhatsApp (✅ Working)
```

---

## 📞 Need Help?

If you need assistance configuring SMTP:
1. Try generating a new Gmail App Password first
2. If that doesn't work, consider using SendGrid or Mailgun
3. For urgent setup, you can temporarily disable email by commenting out the `send_enquiry_email()` call in server.py (though not recommended)

---

**Remember:** The enquiry system is fully functional even without email. Customers can still submit enquiries via WhatsApp and form data is saved to the database. Email is an additional notification channel.
