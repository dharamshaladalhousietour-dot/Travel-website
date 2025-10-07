import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const TermsConditions = () => {
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Terms & Conditions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
        </div>

        {/* Content */}
        <Card className="shadow-2xl bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">1. Booking Policy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>All bookings must be made with valid details (Name, Contact, Travel Dates, Number of Passengers).</li>
                  <li>A minimum advance payment is required to confirm the tour package / event.</li>
                  <li>Balance payment must be cleared before the start of the journey or as per agreed terms.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">2. Inclusions & Exclusions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Packages include only the services clearly mentioned in the itinerary.</li>
                  <li>Additional services, personal expenses, entry tickets, or activities not mentioned will be chargeable directly.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">3. Hotels & Transport</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Hotels will be provided on a twin/double sharing basis (or as per package).</li>
                  <li>If mentioned hotels are not available, equivalent/similar category hotels will be arranged.</li>
                  <li>Vehicle provided will be as per itinerary and cannot be used at disposal.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">4. Travel Documents</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Guests must carry valid ID proof at all times.</li>
                  <li>For international travel, passport and visa validity is the responsibility of the traveler.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">5. Liability Disclaimer</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Pretty Planet Travels is not responsible for delays, cancellations, or changes caused by natural calamities, strikes, weather conditions, or circumstances beyond our control.</li>
                  <li>Any additional expenses arising due to such situations must be borne by the client.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">6. Governing Law</h3>
                <p className="text-gray-700">
                  All disputes are subject to jurisdiction of courts in Dharamshala / Himachal Pradesh.
                </p>
              </section>

            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Have questions about our terms? Feel free to contact us.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;