import React from 'react';

const PaymentIcons = () => {
  // SVG Icons for payment methods
  const VisaIcon = () => (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#1434CB"/>
      <text x="24" y="20" textAnchor="middle" className="fill-white text-xs font-bold">VISA</text>
    </svg>
  );

  const MasterCardIcon = () => (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#EB001B"/>
      <circle cx="18" cy="16" r="8" fill="#FF5F00"/>
      <circle cx="30" cy="16" r="8" fill="#F79E1B"/>
    </svg>
  );

  const RuPayIcon = () => (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#00A651"/>
      <text x="24" y="20" textAnchor="middle" className="fill-white text-xs font-bold">RuPay</text>
    </svg>
  );

  const UPIIcon = () => (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#FF6600"/>
      <text x="24" y="20" textAnchor="middle" className="fill-white text-xs font-bold">UPI</text>
    </svg>
  );

  const RazorpayIcon = () => (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#528FF0"/>
      <text x="24" y="20" textAnchor="middle" className="fill-white text-xs font-bold">Razorpay</text>
    </svg>
  );

  const PaytmIcon = () => (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#00BAF2"/>
      <text x="24" y="20" textAnchor="middle" className="fill-white text-xs font-bold">Paytm</text>
    </svg>
  );

  const NetBankingIcon = () => (
    <svg viewBox="0 0 48 32" className="w-12 h-8">
      <rect width="48" height="32" rx="4" fill="#4CAF50"/>
      <text x="24" y="14" textAnchor="middle" className="fill-white text-xs font-bold">Net</text>
      <text x="24" y="26" textAnchor="middle" className="fill-white text-xs font-bold">Banking</text>
    </svg>
  );

  const paymentMethods = [
    { name: 'Visa', icon: <VisaIcon />, id: 'visa' },
    { name: 'MasterCard', icon: <MasterCardIcon />, id: 'mastercard' },
    { name: 'RuPay', icon: <RuPayIcon />, id: 'rupay' },
    { name: 'UPI', icon: <UPIIcon />, id: 'upi' },
    { name: 'Razorpay', icon: <RazorpayIcon />, id: 'razorpay' },
    { name: 'Paytm', icon: <PaytmIcon />, id: 'paytm' },
    { name: 'Net Banking', icon: <NetBankingIcon />, id: 'netbanking' }
  ];

  return (
    <div className="payment-methods-container">
      <div className="text-center mb-6 pb-6 border-b border-blue-700/50">
        <div className="flex flex-col items-center space-y-3">
          <span className="text-blue-200 text-sm font-medium">💳 We Accept:</span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {paymentMethods.map((method) => (
              <div 
                key={method.id}
                className="payment-icon-container group cursor-pointer bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                title={method.name}
              >
                <div className="grayscale group-hover:grayscale-0 transition-all duration-300">
                  {method.icon}
                </div>
              </div>
            ))}
          </div>
          <p className="text-blue-300 text-xs mt-2">
            🔒 Secure payments powered by industry-leading encryption
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentIcons;