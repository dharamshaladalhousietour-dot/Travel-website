import React from 'react';
import { Button } from './ui/button';
import RazorpayCheckout from './RazorpayCheckout';

const PayNowButton = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-playfair">
          Ready to Start Your Journey?
        </h2>
        <p className="text-gray-600 mb-6 text-base md:text-lg">
          Secure your booking with us today and experience unforgettable moments
        </p>
        <RazorpayCheckout
          amount={5000} // ₹50 default amount
          name="Customer"
          email="customer@email.com"
          phone="+91 9876543210"
          packageName="General Travel Booking"
          onSuccess={(response) => {
            console.log('✅ Payment successful:', response);
            if (window.fbq) {
              window.fbq('track', 'Purchase', {
                value: 50,
                currency: 'INR',
                content_name: 'Travel Booking Payment'
              });
            }
          }}
          onError={(error) => {
            console.error('❌ Payment error:', error);
          }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-6 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
            onClick={() => {
              if (window.fbq) {
                window.fbq('trackCustom', 'PayNowClick', {
                  button_name: 'Pay Now',
                  location: 'Above Footer'
                });
              }
            }}
          >
            💳 Pay Now - Live Mode
          </Button>
        </RazorpayCheckout>
        <p className="text-xs text-gray-500 mt-4">
          Secure payment powered by Razorpay
        </p>
      </div>
    </section>
  );
};

export default PayNowButton;
