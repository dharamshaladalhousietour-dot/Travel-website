import React from 'react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Terms & Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">1. Booking & Confirmation</h2>
            <p className="text-gray-700">
              All bookings with Pretty Planet Travels and Events require advance payment or full payment as specified. 
              Bookings are confirmed only upon receipt of payment and written confirmation from our team.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">2. Payment Terms</h2>
            <p className="text-gray-700">
              We accept payments via bank transfer, credit/debit cards, UPI, and other digital payment methods. 
              All prices are in Indian Rupees (₹) and inclusive of applicable taxes unless stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">3. Cancellation Policy</h2>
            <p className="text-gray-700 mb-2">
              Cancellation charges apply as follows:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>30+ days before travel: 25% of total cost</li>
              <li>15-29 days before travel: 50% of total cost</li>
              <li>7-14 days before travel: 75% of total cost</li>
              <li>Less than 7 days: 100% of total cost (No refund)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">4. Travel Insurance</h2>
            <p className="text-gray-700">
              We strongly recommend travel insurance to cover medical emergencies, trip cancellations, and other unforeseen circumstances. 
              Travel insurance is mandatory for adventure activities and international tours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">5. Responsibilities & Liabilities</h2>
            <p className="text-gray-700">
              Pretty Planet Travels acts as an agent for various service providers. We are not liable for delays, 
              cancellations, or changes in itinerary due to weather, natural disasters, political situations, or force majeure events.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">6. Contact Information</h2>
            <div className="text-gray-700">
              <p><strong>Email:</strong> info@prettyplanettravels.com</p>
              <p><strong>Travel Queries:</strong> +91 8679333355</p>
              <p><strong>Event Queries:</strong> +91 8679333354</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;