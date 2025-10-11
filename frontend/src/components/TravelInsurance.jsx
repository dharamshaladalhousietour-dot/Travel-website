import React from 'react';

const TravelInsurance = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Travel Insurance</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Why Travel Insurance?</h2>
            <p className="text-gray-700 mb-4">
              Travel insurance provides financial protection against unexpected events during your trip. 
              It's essential for peace of mind and is mandatory for certain destinations and adventure activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Coverage Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Medical Coverage:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Emergency medical expenses</li>
                  <li>Hospital accommodation</li>
                  <li>Emergency evacuation</li>
                  <li>Repatriation of mortal remains</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Trip Coverage:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Trip cancellation/interruption</li>
                  <li>Flight delays & missed connections</li>
                  <li>Baggage loss/delay</li>
                  <li>Personal liability</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Insurance Plans</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-blue-700 mb-2">Domestic Basic</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">₹299</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Medical: ₹1,00,000</li>
                  <li>• Baggage: ₹10,000</li>
                  <li>• Trip delay: ₹2,500</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4 border-blue-500">
                <h3 className="font-semibold text-blue-700 mb-2">International Standard</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">₹1,999</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Medical: $50,000</li>
                  <li>• Baggage: $1,500</li>
                  <li>• Trip cancellation: $2,500</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-blue-700 mb-2">Premium Adventure</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">₹4,999</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Medical: $100,000</li>
                  <li>• Adventure sports covered</li>
                  <li>• Emergency evacuation</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Mandatory Insurance Destinations</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Required for:</h3>
              <ul className="text-yellow-700 space-y-1">
                <li>• All Schengen countries (Europe)</li>
                <li>• Adventure activities (Trekking, Rafting, Skiing)</li>
                <li>• High-altitude destinations (Ladakh, Spiti Valley)</li>
                <li>• International tours over 7 days</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">How to Purchase</h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Easy 3-Step Process:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-gray-700">Contact our team with your travel details</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-gray-700">Choose appropriate insurance plan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-gray-700">Make payment and receive policy instantly</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Contact for Insurance</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Email:</strong> info@prettyplanettravels.com</p>
              <p><strong>Phone:</strong> +91 8679333355</p>
              <p><strong>WhatsApp:</strong> Chat with our insurance expert</p>
              <div className="mt-4">
                <a 
                  href="https://wa.me/918679333355?text=Hi!%20I%20need%20travel%20insurance%20for%20my%20upcoming%20trip.%20Please%20help%20me%20choose%20the%20right%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  💬 Get Insurance Quote on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TravelInsurance;