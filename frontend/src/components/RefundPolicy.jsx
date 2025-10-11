import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Refund & Cancellation Policy</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Cancellation Policy</h2>
            <div className="text-gray-700">
              <h3 className="font-semibold mb-2">Domestic Tours:</h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li><strong>30+ days before departure:</strong> 25% cancellation charges</li>
                <li><strong>21-30 days before departure:</strong> 35% cancellation charges</li>
                <li><strong>15-20 days before departure:</strong> 50% cancellation charges</li>
                <li><strong>7-14 days before departure:</strong> 75% cancellation charges</li>
                <li><strong>0-6 days before departure:</strong> 100% cancellation charges (No Refund)</li>
              </ul>

              <h3 className="font-semibold mb-2">International Tours:</h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li><strong>45+ days before departure:</strong> 30% cancellation charges</li>
                <li><strong>31-44 days before departure:</strong> 50% cancellation charges</li>
                <li><strong>15-30 days before departure:</strong> 75% cancellation charges</li>
                <li><strong>0-14 days before departure:</strong> 100% cancellation charges (No Refund)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Refund Process</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Refunds will be processed within 15-21 working days from the date of cancellation</li>
              <li>Refund amount will be credited to the same payment method used for booking</li>
              <li>Bank charges, if any, will be deducted from the refund amount</li>
              <li>Partial refunds are available for unused services with prior notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Event & Wedding Cancellations</h2>
            <div className="text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>90+ days before event:</strong> 20% cancellation charges</li>
                <li><strong>60-89 days before event:</strong> 40% cancellation charges</li>
                <li><strong>30-59 days before event:</strong> 60% cancellation charges</li>
                <li><strong>15-29 days before event:</strong> 80% cancellation charges</li>
                <li><strong>0-14 days before event:</strong> 100% cancellation charges (No Refund)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Force Majeure</h2>
            <p className="text-gray-700">
              In case of cancellations due to natural disasters, political unrest, pandemic, or government restrictions, 
              Pretty Planet Travels will provide credit notes valid for 12 months or process refunds as per supplier policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Contact for Cancellations</h2>
            <div className="text-gray-700">
              <p><strong>Email:</strong> info@prettyplanettravels.com</p>
              <p><strong>Phone:</strong> +91 8679333355 (Travel) | +91 8679333354 (Events)</p>
              <p><strong>Support Hours:</strong> 9:00 AM - 7:00 PM (Mon-Sat)</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;