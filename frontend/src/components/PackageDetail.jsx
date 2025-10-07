import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, MapPin, Download, Send, Star, Users, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { getPackageBySlug } from '../data/packageDetails';

const PackageDetail = () => {
  const { packageSlug } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelMonth: '',
    message: ''
  });

  const packageData = getPackageBySlug(packageSlug);

  if (!packageData) {
    return (
      <div className="py-20 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Package Not Found</h1>
          <p className="text-gray-600 mb-8">The package you're looking for doesn't exist or may have been moved.</p>
          <Link to="/tour-packages">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Packages
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/yourformid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          travelMonth: formData.travelMonth,
          message: formData.message,
          package: packageData.title,
          duration: packageData.duration,
          formType: 'Package Enquiry'
        }),
      });

      if (response.ok) {
        alert('Thank you! Your enquiry has been submitted successfully. We will contact you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          travelMonth: '',
          message: ''
        });
        
        // Also send WhatsApp notification for instant contact
        const whatsappMessage = `New enquiry received for "${packageData.title}". Customer: ${formData.name}, Phone: ${formData.phone}`;
        window.open(`https://wa.me/918679333355?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('Sorry, there was an error submitting your enquiry. Please try again or contact us directly at +91 8679333355');
      console.error('Form submission error:', error);
    }
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
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/tour-packages">
            <Button variant="outline" className="bg-white hover:bg-gray-50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Packages
            </Button>
          </Link>
        </div>
        
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
              
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto" method="POST">
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