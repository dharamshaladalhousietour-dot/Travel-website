import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I book a tour package?",
      answer: "You can enquire through our website forms on individual package pages or contact us directly via WhatsApp at +91 8679333355 or email at info@prettyplanettravels.com. Our team will help you choose the right package and complete the booking process."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Our cancellation policy varies based on the timing of cancellation. For detailed information including refund percentages, please refer to our Cancellation & Refund Policy page."
    },
    {
      question: "What documents do I need for travel?",
      answer: "For domestic travel, you need a valid government-issued photo ID (Aadhaar, PAN, Driving License, etc.). For international destinations, a valid passport and visa (if required) are mandatory. We'll provide a detailed document checklist after booking confirmation."
    },
    {
      question: "Are meals included in the packages?",
      answer: "Meal inclusions vary by package. Most packages include breakfast and dinner (MAP - Modified American Plan). Lunch and other meals are usually not included unless specifically mentioned. Check individual package details for exact inclusions."
    },
    {
      question: "Can I customize a tour package?",
      answer: "Yes! We offer customized tour packages based on your preferences, budget, and travel dates. Contact our team to discuss your requirements and we'll create a personalized itinerary for you."
    },
    {
      question: "What type of accommodation is provided?",
      answer: "We provide comfortable accommodation in hotels ranging from 3-star to 5-star categories as mentioned in each package. Rooms are typically on twin/double sharing basis. Single occupancy can be arranged with additional charges."
    },
    {
      question: "Is travel insurance recommended?",
      answer: "Yes, we highly recommend travel insurance to protect against unforeseen circumstances like medical emergencies, trip cancellations, or lost baggage. Contact us for travel insurance options."
    },
    {
      question: "What is your payment policy?",
      answer: "We require an advance payment to confirm bookings. The balance amount should be paid before the trip starts or as per agreed terms. We accept payments via bank transfer, UPI, or as discussed with our team."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our travel packages and services.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg text-blue-900 pr-4">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <Card className="shadow-2xl bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our friendly customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100"
                onClick={() => window.open('https://wa.me/918679333355?text=Hello! I have a question about your travel services.', '_blank')}
              >
                WhatsApp Us
              </Button>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;