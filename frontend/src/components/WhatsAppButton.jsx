import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '918679333355'; // Your phone number without + and spaces
    const message = encodeURIComponent('Hello! I am interested in your travel packages. Can you please help me?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-16 right-0 mb-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-fade-scale">
            Chat with us on WhatsApp!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp Icon */}
          <div className="relative">
            <MessageCircle className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
          </div>

          {/* Online Indicator */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </button>

        {/* Ripple Effect on Click */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-active:opacity-20 group-active:animate-ping pointer-events-none"></div>
      </div>

      {/* Background Shadow */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 blur-xl transform scale-75"></div>
    </div>
  );
};

export default WhatsAppButton;