import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const RefundPolicy = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="bg-white hover:bg-gray-50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full mb-6">
            <CreditCard className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Cancellation & Refund Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
        </div>

        {/* Content */}
        <Card className="shadow-2xl bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Refund Schedule</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="font-bold text-green-700 min-w-0 flex-1">
                      30 days or more before travel date:
                    </div>
                    <div className="text-green-600 font-semibold">
                      80% refund of advance payment
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <div className="font-bold text-yellow-700 min-w-0 flex-1">
                      15–29 days before travel date:
                    </div>
                    <div className="text-yellow-600 font-semibold">
                      50% refund of advance payment
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <div className="font-bold text-orange-700 min-w-0 flex-1">
                      7–14 days before travel date:
                    </div>
                    <div className="text-orange-600 font-semibold">
                      25% refund of advance payment
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div className="font-bold text-red-700 min-w-0 flex-1">
                      Less than 7 days before travel date:
                    </div>
                    <div className="text-red-600 font-semibold">
                      No refund
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div className="font-bold text-red-700 min-w-0 flex-1">
                      No Show / Early Departure:
                    </div>
                    <div className="text-red-600 font-semibold">
                      No refund
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    Cancellation refunds will be processed within 7–10 working days after deduction of applicable charges.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Special Note</h3>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                    <ul className="space-y-3 text-amber-800">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2 mt-1">•</span>
                        <span>Some hotels, flights, and special event bookings may have non-refundable policies. In such cases, those charges will be applicable.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2 mt-1">•</span>
                        <span>In case of natural calamities / government restrictions, refunds will be subject to service providers (hotel, transport, airline).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need clarification on our cancellation policy? Contact our support team.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;