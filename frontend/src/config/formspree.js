// Formspree Configuration
// Replace 'yourformid' with your actual Formspree form ID

export const FORMSPREE_CONFIG = {
  // Main enquiry form endpoint
  FORM_ENDPOINT: 'https://formspree.io/f/yourformid',
  
  // Form submission settings
  SETTINGS: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  },
  
  // Success/Error messages
  MESSAGES: {
    SUCCESS: 'Thank you! Your enquiry has been submitted successfully. We will contact you soon.',
    ERROR: 'Sorry, there was an error submitting your enquiry. Please try again or contact us directly at +91 8679333355'
  },
  
  // Contact details
  CONTACT: {
    PHONE: '+91 8679333355',
    EMAIL: 'info@prettyplanettravels.com',
    WHATSAPP: '918679333355'
  }
};

// Helper function to submit form data
export const submitToFormspree = async (formData, formType = 'General Enquiry') => {
  try {
    const response = await fetch(FORMSPREE_CONFIG.FORM_ENDPOINT, {
      ...FORMSPREE_CONFIG.SETTINGS,
      body: JSON.stringify({
        ...formData,
        formType,
        submittedAt: new Date().toISOString()
      }),
    });

    if (response.ok) {
      return { success: true, message: FORMSPREE_CONFIG.MESSAGES.SUCCESS };
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, message: FORMSPREE_CONFIG.MESSAGES.ERROR };
  }
};