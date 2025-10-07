import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const PrivacyPolicy = () => {
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full mb-6">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is very important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Content */}
        <Card className="shadow-2xl bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Information We Collect</h3>
                <div className="space-y-4 text-gray-700">
                  <p>We collect information you provide directly to us, such as:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Name, email address, and phone number when you contact us</li>
                    <li>• Travel preferences and requirements when booking services</li>
                    <li>• Payment information for processing bookings</li>
                    <li>• Feedback and reviews about our services</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">How We Use Your Information</h3>
                <div className="space-y-4 text-gray-700">
                  <p>We use the information we collect to:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Provide and improve our travel services</li>
                    <li>• Process your bookings and handle payments</li>
                    <li>• Communicate with you about your trips and services</li>
                    <li>• Send you promotional offers and travel updates (with your consent)</li>
                    <li>• Comply with legal obligations and resolve disputes</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Information Sharing</h3>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <p className="text-green-800 font-medium mb-3">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                  </p>
                  <p className="text-green-700">
                    We may share your information with trusted partners who assist us in operating our business, 
                    such as hotels, transport providers, and payment processors, but only to the extent necessary 
                    to provide our services.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Data Security</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. This includes:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>• Secure data transmission using encryption technology</li>
                    <li>• Restricted access to personal information on a need-to-know basis</li>
                    <li>• Regular security assessments and updates</li>
                    <li>• Secure payment processing through trusted providers</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Your Rights</h3>
                <div className="space-y-4 text-gray-700">
                  <p>You have the right to:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Access and review your personal information</li>
                    <li>• Request corrections to inaccurate information</li>
                    <li>• Request deletion of your personal information</li>
                    <li>• Opt-out of promotional communications</li>
                    <li>• File a complaint with relevant data protection authorities</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Cookies and Tracking</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our website uses cookies to enhance your browsing experience and analyze website traffic. 
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-blue-800 mb-3">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-blue-700">
                    <p>Email: info@prettyplanettravels.com</p>
                    <p>Phone: +91 8679333355</p>
                    <p>Address: Dharamshala, Himachal Pradesh</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Policy Updates</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                    with an updated revision date. We encourage you to review this policy periodically.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </section>

            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Have questions about our privacy practices? We're here to help.
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

export default PrivacyPolicy;