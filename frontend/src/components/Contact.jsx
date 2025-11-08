import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    destination: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill in all required fields: First Name, Last Name, Email, and Message');
      return;
    }

    try {
      // Create formatted message for WhatsApp
      const fullName = `${formData.firstName} ${formData.lastName}`;
      const formattedMessage = `📩 New Contact Form Enquiry

👤 Name: ${fullName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone || 'Not provided'}

🎯 Service: ${formData.service || 'Not specified'}
📍 Destination/Venue: ${formData.destination || 'Not specified'}
💰 Budget: ${formData.budget || 'Not specified'}

💬 Message: ${formData.message}`;

      // Submit to backend API first (for email notification)
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      
      const response = await fetch(`${backendUrl}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          destination: formData.destination || 'Contact Form Enquiry',
          start_date: new Date().toISOString().split('T')[0],
          end_date: new Date().toISOString().split('T')[0],
          adults: '1',
          kids: '0',
          days: 'Contact Form',
          budget: formData.budget || 'Not specified',
          message: formData.message,
          formatted_message: formattedMessage
        })
      });

      if (response.ok) {
        console.log('✅ Contact form enquiry submitted to backend');
        
        // Send WhatsApp message with full details
        const whatsappMessage = encodeURIComponent(formattedMessage);
        const whatsappUrl = `https://wa.me/918679333355?text=${whatsappMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        console.log('✅ WhatsApp message sent from contact form');
      } else {
        console.error('❌ Failed to submit contact form to backend');
      }
    } catch (error) {
      console.error('❌ Error submitting contact form:', error);
    }

    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        destination: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Our Office",
      details: ["Corporate House, Potala Marg", "Dharamshala, H.P - 176215", "India"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["Travel & Tours: +91 8679333355 | +91 9816154248", "Weddings & Events: +91 8679333354", "General Inquiry: +91-86793-33355"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["holidays@prettyplanettravels.com", "events.prettyplanettravels@gmail.com", "info@prettyplanettravels.com"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday: 10:00 AM - 5:00 PM", "Sunday: 12:00 PM - 4:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to create your perfect experience? Let's discuss your vision 
            and turn your dreams into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-600 mb-4">
                      ✅ Thank you for your enquiry! Our team will contact you soon.
                    </h4>
                    <p className="text-gray-600">
                      Your enquiry has been sent to WhatsApp and Email successfully!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="John"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Doe"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@example.com"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="h-12"
                        />
                      </div>
                    </div>

                    {/* Service and Destination */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">
                          Service Interested In *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="travel">Travel & Tours</SelectItem>
                            <SelectItem value="corporate">Corporate Events</SelectItem>
                            <SelectItem value="wedding">Weddings & Celebrations</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-medium text-gray-700">
                          Preferred Destination/Venue
                        </Label>
                        <Input
                          value={formData.destination}
                          onChange={(e) => handleInputChange('destination', e.target.value)}
                          placeholder="Paris, Bali, Local venue, etc."
                          className="h-12"
                        />
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">
                        Budget Range
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-25k">Under ₹25,000</SelectItem>
                          <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                          <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="100k-200k">₹1,00,000 - ₹2,00,000</SelectItem>
                          <SelectItem value="200k-plus">₹2,00,000+</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Tell Us About Your Vision *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Share details about your dream experience, special requirements, dates, or any questions you have..."
                        required
                        className="min-h-[120px] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white py-4 font-semibold"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg flex items-center justify-center text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-3">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Google Maps Embed - Pretty Planet Travels and Events, Dharamshala */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.286760293723!2d76.31938487393774!3d32.223444412073235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5123f086151d%3A0x78e2a4a7cd142d1d!2sPretty%20Planet%20Travels%20and%20Events!5e0!3m2!1sen!2sin!4v1762614274033!5m2!1sen!2sin" 
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pretty Planet Travels and Events Location - Dharamshala"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;