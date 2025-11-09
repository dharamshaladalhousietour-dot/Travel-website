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
    name: '',
    phone: '',
    serviceType: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to get a personalized quote for my trip/event in Dharamshala.";
    window.open(`https://wa.me/918679333355?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Simplified form submitted:', formData);

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.serviceType) {
      alert('Please fill in all fields: Name, Phone, and Service Type');
      return;
    }

    try {
      // Create formatted message for WhatsApp
      const formattedMessage = `📩 Quick Enquiry - Contact Form

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
🎯 Service Type: ${formData.serviceType}

💬 Request: I'd like to get a personalized quote.`;

      // Submit to backend API first (for email notification)
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      
      const response = await fetch(`${backendUrl}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: 'contact@form.com', // placeholder for simplified form
          phone: formData.phone,
          destination: formData.serviceType,
          start_date: new Date().toISOString().split('T')[0],
          end_date: new Date().toISOString().split('T')[0],
          adults: '1',
          kids: '0',
          days: 'Quick Enquiry',
          budget: 'To be discussed',
          message: `Service Type: ${formData.serviceType}`,
          formatted_message: formattedMessage
        })
      });

      if (response.ok) {
        console.log('✅ Simplified contact form submitted to backend');
        
        // Send WhatsApp message with full details
        const whatsappMessage = encodeURIComponent(formattedMessage);
        // Choose WhatsApp number based on service type
        const whatsappNumber = formData.serviceType.includes('Wedding') || formData.serviceType.includes('Event') 
          ? '918679333354' 
          : '918679333355';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        
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
        name: '',
        phone: '',
        serviceType: ''
      });
    }, 3000);
  };
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
    <section id="contact" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-4">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 font-playfair">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-rose-600 font-semibold max-w-3xl mx-auto leading-relaxed font-montserrat">
            💖 We'd love to help plan your perfect trip or wedding in Dharamshala.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Simplified Contact Form - Above the Fold on Mobile */}
          <div className="lg:col-span-2 order-1 lg:order-1">
            <Card className="shadow-2xl border-2 border-rose-100 overflow-hidden bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 font-playfair">
                    Quick Enquiry Form
                  </h3>
                  <p className="text-gray-600 font-montserrat text-sm md:text-base">
                    Fill in your details and we'll contact you within 1 hour! ⚡
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 animate-bounce">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-600 mb-4 font-playfair">
                      ✅ Thank You!
                    </h4>
                    <p className="text-gray-600 font-montserrat">
                      Our team will contact you very soon with your personalized quote!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-semibold text-gray-800 font-montserrat">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="h-14 text-lg border-2 border-gray-300 focus:border-blue-500 transition-all"
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-semibold text-gray-800 font-montserrat">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 9876543210"
                        required
                        className="h-14 text-lg border-2 border-gray-300 focus:border-blue-500 transition-all"
                      />
                    </div>

                    {/* Service Type Dropdown */}
                    <div className="space-y-2">
                      <Label className="text-base font-semibold text-gray-800 font-montserrat">
                        I'm Interested In *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('serviceType', value)} required>
                        <SelectTrigger className="h-14 text-lg border-2 border-gray-300 focus:border-blue-500">
                          <SelectValue placeholder="Select your service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dharamshala Wedding Planning">💍 Dharamshala Wedding Planning</SelectItem>
                          <SelectItem value="Destination Wedding">💐 Destination Wedding</SelectItem>
                          <SelectItem value="Himachal Travel Package">✈️ Himachal Travel Package</SelectItem>
                          <SelectItem value="Corporate Event">🏢 Corporate Event</SelectItem>
                          <SelectItem value="Dharamshala Tour">🏔️ Dharamshala Tour</SelectItem>
                          <SelectItem value="Honeymoon Package">💕 Honeymoon Package</SelectItem>
                          <SelectItem value="Other">🎯 Other Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Emotional CTA Button */}
                    <div className="pt-4 space-y-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-16 text-lg md:text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-montserrat"
                      >
                        <Send className="mr-3 h-6 w-6" />
                        💖 Get My Personalized Quote
                      </Button>

                      {/* WhatsApp Button */}
                      <Button
                        type="button"
                        onClick={handleWhatsAppClick}
                        size="lg"
                        className="w-full h-16 text-lg md:text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 font-montserrat"
                      >
                        <svg className="mr-3 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        💬 Chat on WhatsApp Now
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
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