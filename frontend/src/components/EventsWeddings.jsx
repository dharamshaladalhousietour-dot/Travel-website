import React, { useState } from 'react';
import { Heart, Users, MapPin, Star, Send, Phone, Mail, Calendar, Mountain, Sparkles, Building2, Award, ArrowRight, Check } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

const EventsWeddingsLuxury = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    packageName: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    venue: '',
    message: ''
  });

  // Wedding Packages with elegant descriptions
  const weddingPackages = [
    {
      id: 1,
      title: "Luxury Resort Wedding",
      description: "Indulge in opulence with our premium 5-star resort weddings featuring exquisite cuisine, luxury accommodations, and world-class service amidst the majestic Himalayas.",
      customText: "Tailored to your vision and guest experience",
      features: ["5-Star Resort Venue", "400-600 Guests", "4-Day Grand Celebration", "Premium Décor & Styling", "Spa & Wellness Facilities", "Professional Photography & Videography"],
      image: "/assets/portfolio2.jpg",
      altText: "Luxury resort wedding in Dharamshala with 5-star hospitality and décor by Pretty Planet Travels & Events",
      fileName: "luxury-resort-wedding.jpg"
    },
    {
      id: 2,
      title: "Dharamshala Destination Wedding",
      description: "Exchange vows with the stunning Dhauladhar ranges as your backdrop, combining traditional Himachali warmth with modern elegance for an unforgettable celebration.",
      customText: "Customized wedding package designed around your dreams",
      features: ["Mountain View Venue", "300-500 Guests", "3-Day Celebration", "Traditional Meets Modern", "Complete Event Management", "Luxury Guest Accommodations"],
      image: "/assets/hero-dharamshala.jpg",
      altText: "Destination wedding in Dharamshala with Dhauladhar mountain views by Pretty Planet Travels & Events",
      fileName: "dharamshala-destination-wedding.jpg"
    },
    {
      id: 3,
      title: "Mountain View Ceremony",
      description: "Intimate and breathtaking, celebrate your special day with panoramic Himalayan vistas in an elegantly curated setting designed for cherished memories.",
      customText: "Personalized to create your perfect intimate celebration",
      features: ["Scenic Himalayan Location", "100-200 Guests", "2-Day Intimate Event", "Bespoke Décor Design", "Personalized Service", "Gourmet Catering"],
      image: "/assets/portfolio1.jpg",
      altText: "Mountain-view wedding ceremony in Dharamshala with floral décor by Pretty Planet Travels & Events",
      fileName: "mountain-view-wedding-ceremony.jpg"
    },
    {
      id: 4,
      title: "Intimate Eco Wedding",
      description: "Embrace sustainability without compromising elegance. Celebrate love in harmony with nature at our eco-conscious venues surrounded by pristine Himalayan beauty.",
      customText: "Crafted with care for you and the environment",
      features: ["Eco-Friendly Venue", "50-100 Guests", "1-2 Day Celebration", "Organic Farm-to-Table Catering", "Nature-Inspired Décor", "Sustainable Practices"],
      image: "/assets/portfolio3.jpg",
      altText: "Eco-friendly mountain wedding in Himachal Pradesh by Pretty Planet Travels & Events",
      fileName: "eco-friendly-mountain-wedding.jpg"
    }
  ];

  // Destination Highlights
  const destinationHighlights = [
    {
      title: "Accessible Yet Exclusive",
      description: "Just 10 km from Gaggal Airport and well-connected by road, Dharamshala offers the perfect blend of accessibility and exclusivity for your dream wedding.",
      icon: <MapPin className="h-8 w-8 text-rose-500" />,
      image: "/assets/portfolio4.jpg"
    },
    {
      title: "Luxury Heritage Venues",
      description: "Choose from stunning colonial-era estates, modern luxury resorts, and boutique properties that blend Himalayan charm with contemporary elegance.",
      icon: <Building2 className="h-8 w-8 text-amber-500" />,
      image: "/assets/portfolio1.jpg"
    },
    {
      title: "Year-Round Destination",
      description: "Experience magical weddings in every season — from spring blooms to winter wonderlands, Dharamshala offers breathtaking beauty throughout the year.",
      icon: <Star className="h-8 w-8 text-teal-500" />,
      image: "/assets/portfolio2.jpg"
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEnquireNow = (packageTitle) => {
    setFormData(prev => ({
      ...prev,
      packageName: packageTitle,
      eventType: 'Wedding'
    }));
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const enquiryData = {
        destination: formData.venue || 'Dharamshala, Himachal Pradesh',
        start_date: formData.eventDate || 'TBD',
        end_date: formData.eventDate || 'TBD',
        adults: formData.guestCount || '0',
        kids: '0',
        days: '1',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        budget: formData.budget,
        message: formData.message,
        formatted_message: `Package: ${formData.packageName}\nEvent Type: ${formData.eventType}\nDate: ${formData.eventDate}\nGuests: ${formData.guestCount}\nVenue: ${formData.venue}\nMessage: ${formData.message}`
      };

      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      await fetch(`${backendUrl}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiryData)
      });

      const whatsappMessage = `Hello! I'm interested in ${formData.packageName || 'destination wedding planning'} services in Dharamshala.
    
Details:
- Name: ${formData.name}
- Package: ${formData.packageName}
- Event Type: ${formData.eventType}
- Date: ${formData.eventDate}
- Guests: ${formData.guestCount}
- Budget: ${formData.budget}
- Venue: ${formData.venue}
- Message: ${formData.message}

Looking forward to creating unforgettable memories with Pretty Planet!`;
      
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/918679333354?text=${encodedMessage}`, '_blank');

      alert('✅ Thank you! Your enquiry has been submitted. Our wedding planning team will contact you within 24 hours.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        packageName: '',
        eventDate: '',
        guestCount: '',
        budget: '',
        venue: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('There was an issue submitting your enquiry. Please try again or contact us directly at +91 8679333354.');
    }
  };

  return (
    <>
      <SEOHead 
        title="Luxury & Destination Weddings in Dharamshala | Pretty Planet Travels & Events"
        description="Plan your dream wedding in Dharamshala with Pretty Planet Travels & Events. From luxury resort weddings to eco-friendly celebrations, we craft unforgettable Himalayan experiences."
        keywords="wedding planners in Dharamshala, destination weddings in Himachal, luxury wedding packages, mountain view wedding ceremony, eco-friendly wedding, heritage wedding venues, Pretty Planet Travels & Events, Dharamshala destination wedding planner"
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-rose-50/20 to-amber-50/20">
        
        {/* Hero Section with Background Image and Overlay */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/assets/portfolio1.jpg"
              alt="Bride and groom celebrating destination wedding in Dharamshala with Pretty Planet Travels & Events"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1920" height="700"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23ec4899;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23f472b6;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g)" width="1920" height="700"/%3E%3C/svg%3E';
              }}
            />
            {/* Softened Pink-Orange Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400/70 via-pink-400/65 to-orange-300/55"></div>
            
            {/* Subtle Mountain Silhouette Overlay */}
            <div className="absolute inset-0 opacity-40">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 700" className="w-full h-full">
                <path d="M0,700 L0,400 Q200,300 400,350 Q600,400 800,300 Q1000,200 1200,280 Q1400,360 1600,320 Q1800,280 1920,350 L1920,700 Z" fill="white" opacity="0.1"/>
              </svg>
            </div>
          </div>

          {/* Content with Fade-in Animation */}
          <div className="relative h-full flex items-center justify-center text-center text-white px-4 animate-fade-in">
            <div className="max-w-5xl">
              {/* Animated Heart Icon */}
              <div className="inline-block mb-6 animate-bounce">
                <Heart className="h-16 w-16 md:h-20 md:w-20 fill-white opacity-90" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg animate-fade-in-up">
                Dream Weddings in Dharamshala
              </h1>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Crafted with Love, Luxury, and Himalayan Charm
              </h2>
              <p className="text-lg md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md italic animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                "Your love story deserves the magic of the mountains — let's begin your journey today."
              </p>

              {/* CTA Buttons with Animation */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Button 
                  onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-rose-300 via-pink-300 to-amber-300 hover:from-rose-400 hover:to-amber-400 text-rose-900 font-bold px-10 py-5 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                  style={{ boxShadow: '0 10px 40px rgba(236, 72, 153, 0.3)' }}
                >
                  Start Planning Today
                </Button>
                <Button 
                  onClick={() => window.location.href = '/tour-packages'}
                  className="bg-transparent border-2 border-white/80 hover:bg-white/10 text-white font-semibold px-10 py-5 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Explore Honeymoon Packages
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Packages Section */}
        <section id="packages" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0D3B66] mb-6">
                Explore Our Signature Wedding Packages
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Each package is thoughtfully curated to create unforgettable memories in the most enchanting settings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {weddingPackages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl bg-gradient-to-b from-white to-rose-50/30"
                  style={{ boxShadow: '0 4px 20px rgba(236, 72, 153, 0.1)' }}
                >
                  {/* Package Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={pkg.image}
                      alt={pkg.altText}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      style={{ filter: 'sepia(10%) saturate(110%) brightness(105%)' }}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23fce7f3" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle" font-family="serif" font-size="24"%3E' + encodeURIComponent(pkg.title) + '%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    {/* Soft Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent"></div>
                    
                    {/* Custom Text Badge */}
                    <div className="absolute top-6 right-6 bg-gradient-to-br from-rose-300/95 via-pink-300/95 to-amber-200/95 px-5 py-3 rounded-full shadow-xl backdrop-blur-sm">
                      <span className="text-rose-900 font-semibold text-xs tracking-wide">{pkg.customText}</span>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-3xl font-serif font-semibold text-[#0D3B66] mb-4">{pkg.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed font-light text-base">
                      {pkg.description}
                    </p>
                    
                    {/* Features with Check Icons */}
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm font-light">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      onClick={() => handleEnquireNow(pkg.title)}
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Get a Custom Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Destination Highlights Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-amber-50/30 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0D3B66] mb-6">
                Why Dharamshala is the Perfect Wedding Destination
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Where Himalayan grandeur meets unparalleled luxury and timeless romance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {destinationHighlights.map((highlight, idx) => (
                <Card 
                  key={idx}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100 rounded-2xl bg-white"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={highlight.image}
                      alt={`Heritage wedding venues in Dharamshala by Pretty Planet Travels & Events - ${highlight.title}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 flex justify-center">
                      {highlight.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[#0D3B66] mb-4">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Heart className="h-14 w-14 mx-auto mb-8 fill-white animate-pulse" />
            
            <p className="text-xl md:text-2xl font-serif font-light mb-6 italic">
              "Your love story deserves the magic of the mountains — let's begin your journey today."
            </p>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight">
              Plan Your Dharamshala Wedding
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-amber-300 via-rose-300 to-pink-300 hover:from-amber-400 hover:to-pink-400 text-rose-900 font-bold px-10 py-5 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white"
              >
                Start Planning Today
                <ArrowRight className="h-6 w-6 ml-2" />
              </Button>

              <Link to="/tour-packages">
                <Button className="bg-white hover:bg-rose-50 text-rose-600 font-bold px-10 py-5 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Explore Honeymoon Packages
                  <ArrowRight className="h-6 w-6 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <section id="enquiry-form" className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0D3B66] mb-6">
                Let's Create Magic Together
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-light">
                Share your wedding vision with us, and our expert planners will bring it to life
              </p>
            </div>

            <Card className="shadow-2xl border-2 border-rose-100 rounded-2xl overflow-hidden">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-[#0D3B66] font-semibold mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your name"
                        required
                        className="border-gray-300 focus:border-rose-500 rounded-lg"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-[#0D3B66] font-semibold mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="border-gray-300 focus:border-rose-500 rounded-lg"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-[#0D3B66] font-semibold mb-2 block">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 9876543210"
                        required
                        className="border-gray-300 focus:border-rose-500 rounded-lg"
                      />
                    </div>

                    <div>
                      <Label htmlFor="eventType" className="text-[#0D3B66] font-semibold mb-2 block">
                        Event Type *
                      </Label>
                      <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-rose-500 rounded-lg">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Wedding">Destination Wedding</SelectItem>
                          <SelectItem value="Pre-Wedding">Pre-Wedding Ceremony</SelectItem>
                          <SelectItem value="Reception">Reception</SelectItem>
                          <SelectItem value="Anniversary">Anniversary Celebration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="eventDate" className="text-[#0D3B66] font-semibold mb-2 block">
                        Preferred Wedding Date
                      </Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange('eventDate', e.target.value)}
                        className="border-gray-300 focus:border-rose-500 rounded-lg"
                      />
                    </div>

                    <div>
                      <Label htmlFor="guestCount" className="text-[#0D3B66] font-semibold mb-2 block">
                        Guest Count
                      </Label>
                      <Input
                        id="guestCount"
                        type="text"
                        value={formData.guestCount}
                        onChange={(e) => handleInputChange('guestCount', e.target.value)}
                        placeholder="e.g., 200-300"
                        className="border-gray-300 focus:border-rose-500 rounded-lg"
                      />
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-[#0D3B66] font-semibold mb-2 block">
                        Budget Range
                      </Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-rose-500 rounded-lg">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="₹3-5 Lakhs">₹3-5 Lakhs</SelectItem>
                          <SelectItem value="₹5-8 Lakhs">₹5-8 Lakhs</SelectItem>
                          <SelectItem value="₹8-12 Lakhs">₹8-12 Lakhs</SelectItem>
                          <SelectItem value="₹12-20 Lakhs">₹12-20 Lakhs</SelectItem>
                          <SelectItem value="₹20+ Lakhs">₹20+ Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="venue" className="text-[#0D3B66] font-semibold mb-2 block">
                        Preferred Venue
                      </Label>
                      <Input
                        id="venue"
                        type="text"
                        value={formData.venue}
                        onChange={(e) => handleInputChange('venue', e.target.value)}
                        placeholder="e.g., Resort, Heritage Property"
                        className="border-gray-300 focus:border-rose-500 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#0D3B66] font-semibold mb-2 block">
                      Tell Us About Your Dream Wedding
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Share your wedding vision, special requirements, or any questions..."
                      rows={5}
                      className="border-gray-300 focus:border-rose-500 rounded-lg"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold py-5 text-lg rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-[#0D3B66] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-10 w-10 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Call Us</h4>
                <p className="text-sm opacity-90">Events: +91 8679333354</p>
                <p className="text-sm opacity-90">Travel: +91 8679333355</p>
              </div>
              <div>
                <Mail className="h-10 w-10 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Email Us</h4>
                <p className="text-sm opacity-90">holidays@prettyplanettravels.com</p>
              </div>
              <div>
                <MapPin className="h-10 w-10 mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">Visit Us</h4>
                <p className="text-sm opacity-90">Corporate House, Potala Marg</p>
                <p className="text-sm opacity-90">Dharamshala, Himachal Pradesh - 176215</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventsWeddingsLuxury;
