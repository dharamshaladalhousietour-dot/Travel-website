import React, { useEffect } from 'react';

const ThankYouPopup = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Auto-close after 4 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4">
      {/* Soft blur background */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />
      
      {/* Popup box */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border-2 border-yellow-400 animate-slideUp">
        {/* Content */}
        <div className="text-center space-y-4">
          {/* Main heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Thank You for Your Enquiry!
          </h2>
          
          {/* Main message */}
          <div className="space-y-2 text-gray-700">
            <p className="text-lg font-medium">
              We've received your details.
            </p>
            <p className="text-lg font-medium">
              Our team will get in touch with you within 1 hour.
            </p>
          </div>
          
          {/* Divider */}
          <div className="pt-4 border-t border-gray-200 mt-6">
            <p className="text-sm text-gray-600">
              For urgent help, feel free to call or WhatsApp us anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPopup;
