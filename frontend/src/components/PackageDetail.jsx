import React, { useState } from 'react';
import { Clock, MapPin, Download, Send, Star, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

// Sample package data - this would come from props or API in real implementation
const packageDetails = {
  "manali-honeymoon-4n5d": {
    title: "Manali Honeymoon Delight",
    duration: "4 Nights / 5 Days",
    heroImage: "https://source.unsplash.com/1600x500/?manali,honeymoon",
    price: "Price on Demand",
    itinerary: [
      {
        day: 1,
        title: "Arrival Manali",
        description: "Private transfer & check-in; evening Mall Road.",
        overnight: "Manali"
      },
      {
        day: 2,
        title: "Romantic Solang",
        description: "Solang Valley day trip; candle-light dinner.",
        overnight: "Manali"
      },
      {
        day: 3,
        title: "Atal Tunnel & Sissu",
        description: "Photo stops at Sissu (weather permitting).",
        overnight: "Manali"
      },
      {
        day: 4,
        title: "Manali Local",
        description: "Hadimba Temple, Old Manali cafés.",
        overnight: "Manali"
      },
      {
        day: 5,
        title: "Departure",
        description: "Checkout & drop."
      }
    ],
    hotels: [
      {
        location: "Manali (4N)",
        description: "Honeymoon decor room – Snow Valley / similar"
      }
    ],
    inclusions: [
      "Assistance on Arrival/Departure",
      "Accommodation with Breakfast & Dinner (MAP)",
      "Private transport for transfers & sightseeing",
      "Driver allowances, tolls, parking & fuel",
      "Price on Demand (no dates/pax shown)"
    ],
    exclusions: [
      "Air/Train/Bus fare",
      "Lunch & personal expenses",
      "Entry fees, guide/camera charges; union cabs where applicable",
      "Adventure activities (rafting, paragliding, gondola etc.)",
      "Anything not mentioned in inclusions"
    ]
  }
};

const PackageDetail = ({ packageSlug = "manali-honeymoon-4n5d" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelMonth: '',
    message: ''
  });

  const packageData = packageDetails[packageSlug];

  if (!packageData) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl text-gray-600">Package not found</h1>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send to Email
    const subject = `Tour Package Enquiry: ${packageData.title}`;
    const emailBody = `
Package: ${packageData.title}
Duration: ${packageData.duration}

Customer Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Travel Month: ${formData.travelMonth}
Message: ${formData.message}
    `;
    const emailUrl = `mailto:info@prettyplanettravels.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Send to WhatsApp
    const whatsappMessage = `Hi! I'm interested in "${packageData.title}" (${packageData.duration}). 
Name: ${formData.name}
Phone: ${formData.phone}
Travel Month: ${formData.travelMonth}
Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918679333355?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open both
    window.location.href = emailUrl;
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  const handleDownloadPDF = () => {
    // This would link to actual PDF once provided by client
    alert('PDF will be available soon. Please contact us for detailed itinerary.');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header 
        className="relative h-96 flex items-center justify-center text-white text-center"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('${packageData.heroImage}') center/cover no-repeat`
        }}
      >
        <div className="z-10">
          <h1 className="text-5xl font-bold mb-4">{packageData.title}</h1>
          <p className="text-xl mb-4">{packageData.duration}</p>
          <Badge className="bg-green-600 text-white text-lg px-4 py-2">
            {packageData.price}
          </Badge>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        {/* Main Content Card */}
        <Card className="shadow-2xl bg-white">
          <CardContent className="p-8">
            
            {/* Day-wise Itinerary */}
            <section className="mb-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-blue-900">Day-wise Itinerary</h2>
              </div>
              
              <Accordion type="single" collapsible defaultValue="day-1" className="w-full">
                {packageData.itinerary.map((day) => (
                  <AccordionItem key={day.day} value={`day-${day.day}`}>
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold">
                        Day {day.day < 10 ? `0${day.day}` : day.day}: {day.title}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-gray-700 mb-2">{day.description}</p>
                        {day.overnight && (
                          <p className="text-sm font-medium text-blue-600">
                            <strong>Overnight:</strong> {day.overnight}
                          </p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Hotels */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Hotels (or Similar)</h2>
              <ul className="space-y-2">
                {packageData.hotels.map((hotel, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-semibold text-blue-600 mr-2">{hotel.location}:</span>
                    <span className="text-gray-700">{hotel.description}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <section>
                <h2 className="text-2xl font-bold text-green-600 mb-4">Inclusions</h2>
                <ul className="space-y-2">
                  {packageData.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-red-600 mb-4">Exclusions</h2>
                <ul className="space-y-2">
                  {packageData.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">✗</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Action Buttons */}
            <div className="text-center mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  onClick={() => document.getElementById('enquiryForm')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get a Quote
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={handleDownloadPDF}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>

            {/* Enquiry Form */}
            <section id="enquiryForm" className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Enquire Now</h2>
              
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Email" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Phone Number" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Travel Month</label>
                    <input 
                      type="text" 
                      name="travelMonth"
                      value={formData.travelMonth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., March 2024"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any special requirements or questions..."
                  />
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 px-12 py-4 text-lg"
                  >
                    Submit Enquiry
                  </Button>
                </div>
              </form>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PackageDetail;