// WhatsApp Integration Configuration
export const WHATSAPP_CONFIG = {
  // Phone numbers (with country code, no + symbol for WhatsApp API)
  NUMBERS: {
    TOURS: '918679333355',
    EVENTS: '918679333355', // Using same number as provided
  },
  
  // Pre-formatted messages
  MESSAGES: {
    TOURS: 'Hello, I want to enquire about your travel packages.',
    EVENTS: 'Hello, I want to enquire about your wedding and event services.',
    PACKAGE_ENQUIRY: (packageName) => `Hello, I want to enquire about the "${packageName}" package.`,
    GENERAL: 'Hello, I want to enquire about your services.',
    FORM_NOTIFICATION: (customerName, formType) => `New ${formType} enquiry received from ${customerName}. Please follow up.`
  },

  // Base WhatsApp URL
  BASE_URL: 'https://wa.me/',
  
  // Helper function to create WhatsApp URL
  createWhatsAppURL: (number, message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${number}?text=${encodedMessage}`;
  },

  // Helper function to open WhatsApp
  openWhatsApp: (number, message) => {
    const url = WHATSAPP_CONFIG.createWhatsAppURL(number, message);
    window.open(url, '_blank');
  }
};

// Quick access functions
export const openToursWhatsApp = (message = WHATSAPP_CONFIG.MESSAGES.TOURS) => {
  WHATSAPP_CONFIG.openWhatsApp(WHATSAPP_CONFIG.NUMBERS.TOURS, message);
};

export const openEventsWhatsApp = (message = WHATSAPP_CONFIG.MESSAGES.EVENTS) => {
  WHATSAPP_CONFIG.openWhatsApp(WHATSAPP_CONFIG.NUMBERS.EVENTS, message);
};

export const openPackageWhatsApp = (packageName) => {
  const message = WHATSAPP_CONFIG.MESSAGES.PACKAGE_ENQUIRY(packageName);
  WHATSAPP_CONFIG.openWhatsApp(WHATSAPP_CONFIG.NUMBERS.TOURS, message);
};