import React, { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleTravelWhatsApp = () => {
    const phoneNumber = '918679333355'; // Travel number
    const message = encodeURIComponent('Hello! I am interested in your travel packages. Can you please help me?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setShowOptions(false);
  };

  const handleEventsWhatsApp = () => {
    const phoneNumber = '918679333354'; // Events number
    const message = encodeURIComponent('Hello! I am interested in your wedding/event planning services. Can you please help me?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setShowOptions(false);
  };

  const [isCallHovered, setIsCallHovered] = useState(false);

  return (
    <>
      {/* Mobile Sticky Enquire Now / WhatsApp Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 to-green-500 shadow-2xl border-t-2 border-green-400">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="flex-1 flex items-center justify-center gap-3 bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-green-50 transition-all transform active:scale-95 shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="text-lg">Enquire Now</span>
          </button>
          <a
            href="tel:+918679333354"
            className="ml-3 bg-white text-blue-600 p-3 rounded-lg hover:bg-blue-50 transition-all transform active:scale-95 shadow-lg"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
        
        {/* Service Options for Mobile */}
        {showOptions && (
          <div className="absolute bottom-full left-0 right-0 bg-white shadow-2xl p-4 mb-2 mx-4 rounded-lg animate-fade-scale">
            <h3 className="text-gray-800 font-bold mb-3 text-center">Choose Service</h3>
            
            <button
              onClick={handleTravelWhatsApp}
              className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg mb-2 transition-colors"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Travel & Tours</div>
                <div className="text-sm text-gray-600">+91 8679333355</div>
              </div>
            </button>
            
            <button
              onClick={handleEventsWhatsApp}
              className="w-full flex items-center space-x-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Weddings & Events</div>
                <div className="text-sm text-gray-600">+91 8679333354</div>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Desktop Floating Buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-4">
      {/* Call Now Button */}
      <div 
        className="relative"
        onMouseEnter={() => setIsCallHovered(true)}
        onMouseLeave={() => setIsCallHovered(false)}
      >
        {/* Call Tooltip */}
        {isCallHovered && (
          <div className="absolute bottom-16 right-0 mb-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-fade-scale">
            Call Now: +91 8679333354
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        )}

        <a
          href="tel:+918679333354"
          className="w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group"
          aria-label="Call Now: +91 8679333354"
        >
          <div className="relative">
            <Phone className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping"></div>
          </div>
        </a>

        {/* Background Shadow */}
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-xl transform scale-75"></div>
      </div>

      {/* WhatsApp Button Section */}
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Service Options */}
        {showOptions && (
          <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl p-4 min-w-[280px] animate-fade-scale">
            <h3 className="text-gray-800 font-bold mb-3 text-center">Choose Service</h3>
            
            <button
              onClick={handleTravelWhatsApp}
              className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg mb-2 transition-colors"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Travel & Tours</div>
                <div className="text-sm text-gray-600">+91 8679333355</div>
              </div>
            </button>
            
            <button
              onClick={handleEventsWhatsApp}
              className="w-full flex items-center space-x-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Weddings & Events</div>
                <div className="text-sm text-gray-600">+91 8679333354</div>
              </div>
            </button>
          </div>
        )}

        {/* Tooltip */}
        {isHovered && !showOptions && (
          <div className="absolute bottom-16 right-0 mb-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-fade-scale">
            Chat with us on WhatsApp!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={() => setShowOptions(!showOptions)}
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

        {/* Background Shadow */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 blur-xl transform scale-75"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;