import React, { useState } from 'react';
import { Phone, MessageCircle, CreditCard } from 'lucide-react';
import RazorpayCheckout from './RazorpayCheckout';

const FloatingCTAButtons = () => {
  const [expandedButton, setExpandedButton] = useState(null);

  const handleMouseEnter = (buttonId) => {
    setExpandedButton(buttonId);
  };

  const handleMouseLeave = () => {
    setExpandedButton(null);
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+918679333355';
    if (window.fbq) {
      window.fbq('trackCustom', 'CallButtonClick', {
        button_name: 'Floating Call CTA',
        location: 'Right Sidebar'
      });
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Hi! I want to inquire about your services.";
    window.open(`https://wa.me/918679333354?text=${encodeURIComponent(message)}`, '_blank');
    if (window.fbq) {
      window.fbq('trackCustom', 'WhatsAppButtonClick', {
        button_name: 'Floating WhatsApp CTA',
        location: 'Right Sidebar'
      });
    }
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* Call Now Button */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter('call')}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          if (expandedButton !== 'call') {
            setExpandedButton('call');
            setTimeout(() => setExpandedButton(null), 3000);
          }
        }}
      >
        <button
          onClick={handleCallClick}
          className={`flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-l-full overflow-hidden group ${
            expandedButton === 'call' ? 'pr-6 pl-4' : 'pr-4 pl-4'
          }`}
          style={{
            minHeight: '56px',
            width: expandedButton === 'call' ? 'auto' : '56px'
          }}
        >
          <Phone className="h-6 w-6 flex-shrink-0" />
          <span
            className={`whitespace-nowrap font-semibold text-sm transition-all duration-300 overflow-hidden ${
              expandedButton === 'call' ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
            }`}
          >
            Call Now
          </span>
        </button>
      </div>

      {/* WhatsApp Chat Button */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter('whatsapp')}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          if (expandedButton !== 'whatsapp') {
            setExpandedButton('whatsapp');
            setTimeout(() => setExpandedButton(null), 3000);
          }
        }}
      >
        <button
          onClick={handleWhatsAppClick}
          className={`flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-l-full overflow-hidden group ${
            expandedButton === 'whatsapp' ? 'pr-6 pl-4' : 'pr-4 pl-4'
          }`}
          style={{
            minHeight: '56px',
            width: expandedButton === 'whatsapp' ? 'auto' : '56px'
          }}
        >
          <MessageCircle className="h-6 w-6 flex-shrink-0" />
          <span
            className={`whitespace-nowrap font-semibold text-sm transition-all duration-300 overflow-hidden ${
              expandedButton === 'whatsapp' ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
            }`}
          >
            WhatsApp Chat
          </span>
        </button>
      </div>

      {/* Pay Now Button */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter('pay')}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          if (expandedButton !== 'pay') {
            setExpandedButton('pay');
            setTimeout(() => setExpandedButton(null), 3000);
          }
        }}
      >
        <RazorpayCheckout
          amount={5000}
          name="Customer"
          email="customer@email.com"
          phone="+91 9876543210"
          packageName="General Travel Booking"
          onSuccess={(response) => {
            console.log('✅ Payment successful from floating CTA:', response);
            if (window.fbq) {
              window.fbq('track', 'Purchase', {
                value: 50,
                currency: 'INR',
                content_name: 'Floating CTA Payment'
              });
            }
          }}
          onError={(error) => {
            console.error('❌ Payment error:', error);
          }}
        >
          <button
            className={`flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-l-full overflow-hidden group ${
              expandedButton === 'pay' ? 'pr-6 pl-4' : 'pr-4 pl-4'
            }`}
            style={{
              minHeight: '56px',
              width: expandedButton === 'pay' ? 'auto' : '56px'
            }}
            onClick={() => {
              if (window.fbq) {
                window.fbq('trackCustom', 'PayNowFloatingClick', {
                  button_name: 'Floating Pay Now CTA',
                  location: 'Right Sidebar'
                });
              }
            }}
          >
            <CreditCard className="h-6 w-6 flex-shrink-0" />
            <span
              className={`whitespace-nowrap font-semibold text-sm transition-all duration-300 overflow-hidden ${
                expandedButton === 'pay' ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
              }`}
            >
              Pay Now
            </span>
          </button>
        </RazorpayCheckout>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .fixed {
            right: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingCTAButtons;
