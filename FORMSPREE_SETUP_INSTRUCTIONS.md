# Formspree Setup Instructions

## Overview
All enquiry forms on the Pretty Planet Travels website have been integrated with Formspree for reliable form handling. This eliminates the need for a backend form processing system.

## Setup Steps

### 1. Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (allows 50 submissions per month)
3. For higher volume, consider upgrading to a paid plan

### 2. Create a New Form
1. In your Formspree dashboard, click "New Form"
2. Enter form name: "Pretty Planet Enquiries" 
3. Copy the form endpoint URL (looks like: `https://formspree.io/f/xzbqklmn`)

### 3. Update Form ID in Code
Replace `yourformid` in the following files with your actual Formspree form ID:

**Files to update:**
- `/frontend/src/config/formspree.js` - Line 4: `FORM_ENDPOINT`
- `/frontend/src/components/PackageDetail.jsx` - Line in handleSubmit function
- `/frontend/src/components/EventsWeddings.jsx` - Line in handleSubmit function  
- `/frontend/src/components/TourPackages.jsx` - Line in handleEmailEnquiry function

**Example:**
```javascript
// Change this:
'https://formspree.io/f/yourformid'

// To this (with your actual form ID):
'https://formspree.io/f/xzbqklmn'
```

### 4. Configure Form Settings in Formspree Dashboard

#### Email Notifications:
- **Recipient Email**: info@prettyplanettravels.com
- **Email Subject**: New enquiry from Pretty Planet Travels website
- **Enable email notifications**: Yes

#### Form Settings:
- **Thank You Page**: Use default or create custom page
- **Spam Protection**: Enable reCAPTCHA (recommended)
- **File Uploads**: Enable if needed for future features

#### Webhook Integration (Optional):
If you want real-time notifications, set up webhooks to:
- Send data to your CRM
- Trigger automated responses
- Integrate with WhatsApp Business API

### 5. Test Form Submissions

After updating the form ID:
1. Rebuild the frontend: `cd frontend && yarn build`
2. Test each form type:
   - Individual package enquiry forms
   - Events & weddings enquiry form
   - Quick enquiry buttons on package cards

### 6. Form Data Structure

Each form submission includes:
```json
{
  "name": "Customer Name",
  "email": "customer@example.com", 
  "phone": "+91 9876543210",
  "message": "Customer message",
  "formType": "Package Enquiry|Events & Weddings Enquiry|Quick Package Enquiry",
  "submittedAt": "2024-03-15T10:30:00.000Z"
}
```

**Additional fields based on form type:**
- **Package Enquiries**: `package`, `duration`, `travelMonth`
- **Events Enquiries**: `eventType`, `destination`, `guests`

### 7. Form Features

✅ **Spam Protection**: Built-in Formspree spam filtering
✅ **Email Notifications**: Automatic notifications to your email
✅ **Form Validation**: Client-side validation with required fields
✅ **Success/Error Handling**: User-friendly messages
✅ **WhatsApp Integration**: Automatic WhatsApp notification after submission
✅ **Form Reset**: Forms clear after successful submission

### 8. Monthly Limits & Upgrades

**Free Plan**: 50 submissions/month
**Gold Plan**: 1,000 submissions/month ($10/month)
**Platinum Plan**: 5,000 submissions/month ($40/month)

Monitor your usage in the Formspree dashboard and upgrade as needed.

### 9. Backup Contact Methods

If Formspree fails, forms fall back to:
- Direct WhatsApp contact: +91 8679333355
- Email contact: info@prettyplanettravels.com
- Error message guides users to contact directly

## Support

For technical issues with Formspree integration:
1. Check Formspree dashboard for delivery status
2. Verify form ID is correct in all files
3. Check browser console for JavaScript errors
4. Test with different browsers/devices

For Formspree service issues:
- Contact Formspree support: help@formspree.io
- Check Formspree status page: status.formspree.io