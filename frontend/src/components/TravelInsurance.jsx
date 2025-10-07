import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const TravelInsurance = () => {
  const benefits = [
    "Medical emergencies and hospitalization coverage",
    "Trip cancellation and interruption protection",
    "Lost or delayed baggage compensation",
    "Flight delays and missed connections",
    "Emergency evacuation and repatriation",
    "Personal accident coverage",
    "24/7 emergency assistance worldwide"
  ];

  const exclusions = [
    "Pre-existing medical conditions (unless declared)",
    "Adventure sports without coverage add-on",
    "Travel to high-risk countries without approval",
    "Incidents under influence of alcohol/drugs",
    "War, terrorism, or civil unrest situations"
  ];

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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Travel Insurance
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your journey with comprehensive travel insurance coverage for peace of mind while exploring the world.
          </p>
        </div>

        {/* Introduction */}
        <Card className="shadow-xl bg-white mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Travel Insurance?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Travel insurance protects you against unexpected events that could disrupt or cancel your trip. 
              Whether it's a medical emergency, flight cancellation, or lost luggage, having the right coverage 
              ensures you can focus on enjoying your journey without worrying about unforeseen expenses.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Pretty Planet Travels, we strongly recommend all our travelers to secure comprehensive 
              travel insurance before embarking on their adventure.
            </p>
          </CardContent>
        </Card>

        {/* Coverage Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                What's Covered
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center">
                <AlertCircle className="h-6 w-6 mr-2" />
                Common Exclusions
              </h3>
              <ul className="space-y-3">
                {exclusions.map((exclusion, index) => (
                  <li key={index} className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{exclusion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Insurance Types */}
        <Card className="shadow-xl bg-white mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Types of Coverage</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Domestic Travel</h4>
                <p className="text-sm text-blue-800">
                  Basic coverage for trips within India including medical emergencies and trip cancellations.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-900 mb-3">International Travel</h4>
                <p className="text-sm text-green-800">
                  Comprehensive coverage for overseas travel with higher medical limits and worldwide assistance.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-purple-900 mb-3">Adventure Sports</h4>
                <p className="text-sm text-purple-800">
                  Specialized coverage for adventure activities like trekking, skiing, and water sports.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Buy */}
        <Card className="shadow-xl bg-gradient-to-r from-blue-900 to-blue-800 text-white mb-8">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Protected?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our travel experts can help you choose the right insurance plan for your journey. 
              Contact us for personalized recommendations and competitive quotes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100"
                onClick={() => window.open('https://wa.me/918679333355?text=Hello! I want to enquire about travel insurance options.', '_blank')}
              >
                Get Insurance Quote
              </Button>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Contact Expert
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Important Note */}
        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-amber-900 mb-2">Important Note</h4>
              <p className="text-amber-800">
                Travel insurance should be purchased as soon as you book your trip for maximum coverage benefits. 
                Some benefits like pre-existing medical condition coverage require insurance to be purchased within 
                a specific time frame of your initial trip deposit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelInsurance;