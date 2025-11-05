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
import WeddingProposalViewer from './WeddingProposalViewer';

const EventsWeddingsLuxury = () => {
  const [isProposalOpen, setIsProposalOpen] = useState(false);
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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;600;700&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        
        /* Floating Petals Animation */
        @keyframes float-petals {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          25% { transform: translateY(-20px) rotate(90deg); opacity: 0.9; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 0.5; }
          75% { transform: translateY(-30px) rotate(270deg); opacity: 0.8; }
        }
        
        .petal {
          position: absolute;
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50% 0 50% 50%;
          animation: float-petals 8s infinite ease-in-out;
        }
        
        .petal:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
        .petal:nth-child(2) { top: 20%; left: 80%; animation-delay: 2s; }
        .petal:nth-child(3) { top: 60%; left: 15%; animation-delay: 4s; }
        .petal:nth-child(4) { top: 80%; left: 70%; animation-delay: 6s; }
        .petal:nth-child(5) { top: 40%; left: 50%; animation-delay: 1s; }
        .petal:nth-child(6) { top: 70%; left: 30%; animation-delay: 3s; }
        
        /* Light Flare Animation */
        @keyframes flare {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        .flare {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
          animation: flare 3s infinite ease-in-out;
        }
        
        /* Fade-in-up Animation */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        /* Card Hover Zoom */
        .card-hover-zoom {
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        
        .card-hover-zoom:hover {
          transform: scale(1.03);
          box-shadow: 0 20px 60px rgba(248, 199, 204, 0.3);
        }
        
        /* Gradient Connector */
        .gradient-connector {
          height: 60px;
          width: 2px;
          background: linear-gradient(180deg, #F8C7CC 0%, #D9B38C 50%, #F8C7CC 100%);
          margin: 0 auto;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-white via-[#FDF8F6] to-[#FFF9F7] font-montserrat">
        
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
            
            {/* Floating Petals */}
            <div className="petal"></div>
            <div className="petal"></div>
            <div className="petal"></div>
            <div className="petal"></div>
            <div className="petal"></div>
            <div className="petal"></div>
            
            {/* Light Flares */}
            <div className="flare" style={{ width: '200px', height: '200px', top: '15%', left: '10%', animationDelay: '0s' }}></div>
            <div className="flare" style={{ width: '150px', height: '150px', top: '60%', right: '15%', animationDelay: '1.5s' }}></div>
          </div>

          {/* Content with Fade-in Animation */}
          <div className="relative h-full flex items-center justify-center text-center text-white px-4 animate-fade-in">
            <div className="max-w-5xl">
              {/* Animated Heart Icon */}
              <div className="inline-block mb-6 animate-bounce">
                <Heart className="h-16 w-16 md:h-20 md:w-20 fill-white opacity-90" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-6 leading-tight drop-shadow-lg animate-fade-in-up" style={{ color: '#3B3B3B' }}>
                Dream Weddings in Dharamshala
              </h1>
              <h2 className="text-4xl md:text-5xl font-playfair font-normal mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Crafted with Love, Luxury, and Himalayan Charm
              </h2>
              <p className="text-lg md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md italic animate-fade-in-up" style={{ animationDelay: '0.4s', lineHeight: '1.5' }}>
                "Your love story deserves the magic of the mountains — let's begin your journey today."
              </p>

              {/* CTA Buttons with Animation - Unified Sizing */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Button 
                  onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-montserrat font-bold px-10 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
                  style={{ 
                    background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)',
                    color: '#3B3B3B',
                    boxShadow: '0 10px 40px rgba(248, 199, 204, 0.4), 0 0 20px rgba(217, 179, 140, 0.3)',
                    minWidth: '250px'
                  }}
                >
                  Start Planning Today
                </Button>
                <Button 
                  onClick={() => window.location.href = '/tour-packages'}
                  className="bg-transparent border-2 font-montserrat font-semibold px-10 py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{ borderColor: 'rgba(255,255,255,0.8)', color: 'white', minWidth: '250px' }}
                >
                  Explore Honeymoon Packages
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Your Wedding Journey Starts Here Section - Enhanced Styling */}
        <section className="py-16 px-4 animate-fade-in-up" style={{ background: 'linear-gradient(180deg, #FFE8EC 0%, #FFF9F7 100%)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4" style={{ color: '#2D2D2D' }}>
              Your Wedding Journey Starts Here
            </h2>
            
            {/* Thin Gold Divider Under Title */}
            <div className="w-32 h-px mx-auto mb-8" style={{ background: 'linear-gradient(90deg, transparent 0%, #D9B38C 50%, transparent 100%)' }}></div>
            
            <p className="text-lg md:text-xl font-lato font-light mb-12 max-w-3xl mx-auto" style={{ color: '#3B3B3B', lineHeight: '1.5' }}>
              Your dream wedding deserves meticulous care and effortless planning.<br />
              Explore our exclusive wedding proposal and secure your date with Pretty Planet Travels & Events.
            </p>

            {/* Refined Buttons with Icons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <button
                onClick={() => setIsProposalOpen(true)}
                className="inline-flex items-center justify-center font-lato font-semibold px-6 py-3 text-base rounded-full transform hover:scale-105 transition-all duration-300 group"
                style={{ 
                  background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)',
                  color: '#2D2D2D',
                  boxShadow: '0 8px 20px rgba(248, 199, 204, 0.3)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 30px rgba(217, 179, 140, 0.5)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(248, 199, 204, 0.3)'}
              >
                {/* Ring Icon */}
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                💍 View Full Wedding Proposal
              </button>

              <button
                onClick={() => window.open('/pay', '_blank')}
                className="inline-flex items-center justify-center font-lato font-semibold px-6 py-3 text-base rounded-full transform hover:scale-105 transition-all duration-300 group"
                style={{ 
                  background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)',
                  color: '#2D2D2D',
                  boxShadow: '0 8px 20px rgba(248, 199, 204, 0.3)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 30px rgba(217, 179, 140, 0.5)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(248, 199, 204, 0.3)'}
              >
                {/* Ring Icon */}
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Pay Now – Secure Booking
              </button>
            </div>

            {/* Subtext Below Buttons */}
            <p className="text-sm font-lato font-light max-w-2xl mx-auto" style={{ color: '#666', lineHeight: '1.6' }}>
              Click to view our comprehensive wedding proposal with detailed timeline, inclusions, and pricing.<br />
              Payments are processed securely through our official gateway.
            </p>
          </div>
        </section>

        {/* Gold Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D9B38C] to-transparent my-8"></div>

        {/* Wedding Packages Section */}
        <section id="packages" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6" style={{ color: '#2D2D2D' }}>
                Explore Our Signature Wedding Packages
              </h2>
              <p className="text-lg md:text-xl font-lato font-light max-w-3xl mx-auto" style={{ color: '#3B3B3B', lineHeight: '1.5' }}>
                Each package is thoughtfully curated to create unforgettable memories in the most enchanting settings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {weddingPackages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className="overflow-hidden card-hover-zoom rounded-2xl bg-gradient-to-b from-white to-rose-50/30"
                  style={{ boxShadow: '0 4px 20px rgba(236, 72, 153, 0.1)' }}
                >
                  {/* Package Image - Reduced Height */}
                  <div className="relative h-64 overflow-hidden group">
                    <img 
                      src={pkg.image}
                      alt={pkg.altText}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ filter: 'sepia(10%) saturate(110%) brightness(105%)' }}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect fill="%23fce7f3" width="800" height="400"/%3E%3Ctext x="50%25" y="50%25" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle" font-family="serif" font-size="24"%3E' + encodeURIComponent(pkg.title) + '%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    {/* Soft Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-transparent to-transparent"></div>
                    
                    {/* Custom Text Badge - Reduced Padding */}
                    <div className="absolute top-4 right-4 bg-gradient-to-br from-rose-300/95 via-pink-300/95 to-amber-200/95 px-4 py-2 rounded-full shadow-xl backdrop-blur-sm">
                      <span className="text-rose-900 font-semibold text-sm">{pkg.customText}</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Title - Font Size 22px */}
                    <h3 className="font-playfair font-semibold mb-3 group-hover:text-[#D9B38C] transition-colors duration-300" style={{ fontSize: '22px', color: '#2D2D2D' }}>
                      {pkg.title}
                    </h3>
                    
                    {/* Description - Limited to 2-3 Lines */}
                    <p className="text-gray-600 mb-4 leading-relaxed font-montserrat line-clamp-3" style={{ fontSize: '15px', lineHeight: '1.4', color: '#555555' }}>
                      {pkg.description}
                    </p>
                    
                    {/* Features - With Icons */}
                    <div className="space-y-2 mb-6">
                      {pkg.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Sparkles className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#D9B38C' }} />
                          <span className="text-gray-700 font-montserrat" style={{ fontSize: '14px' }}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      onClick={() => handleEnquireNow(pkg.title)}
                      className="w-full font-montserrat font-semibold py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                      style={{ 
                        background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)',
                        color: '#2D2D2D'
                      }}
                    >
                      Explore Full Package
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gold Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent my-12"></div>

        {/* Destination Highlights Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-amber-50/30 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6" style={{ color: '#2D2D2D' }}>
                Why Dharamshala is the Perfect Wedding Destination
              </h2>
              <p className="text-lg md:text-xl font-lato font-light max-w-3xl mx-auto" style={{ color: '#3B3B3B', lineHeight: '1.5' }}>
                Where Himalayan grandeur meets unparalleled luxury and timeless romance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
              {destinationHighlights.map((highlight, idx) => (
                <Card 
                  key={idx}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl bg-white"
                  style={{ boxShadow: '0 4px 15px rgba(217, 119, 6, 0.1)' }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={idx === 1 ? "/assets/portfolio2.jpg" : highlight.image}
                      alt={`Heritage wedding venues in Dharamshala by Pretty Planet Travels & Events - ${highlight.title}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      style={{ filter: 'sepia(8%) saturate(105%) brightness(105%)' }}
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
                    <h3 className="text-2xl font-serif font-semibold text-[#0D3B66] mb-4">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Descriptive Text Block */}
            <div className="text-center max-w-4xl mx-auto mt-12 px-6 py-8 bg-gradient-to-r from-rose-50/50 via-amber-50/50 to-rose-50/50 rounded-2xl border border-amber-200/30">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light italic">
                "Dharamshala offers the perfect canvas for your love story — where mountain charm, luxury resorts, and soulful moments come together in harmony."
              </p>
            </div>
          </div>
        </section>

        {/* Gold Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent my-12"></div>

        {/* CTA Banner Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 text-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Heart className="h-14 w-14 mx-auto mb-8 fill-white animate-pulse" />
            
            <p className="text-xl md:text-2xl font-serif font-light mb-8 italic">
              "Your love story deserves the magic of the mountains — let's begin your journey today."
            </p>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight">
              Plan Your Dharamshala Wedding
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 hover:from-rose-300 hover:to-amber-300 text-rose-900 font-bold px-10 py-5 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
                style={{ boxShadow: '0 20px 50px rgba(255, 255, 255, 0.5), 0 0 30px rgba(236, 72, 153, 0.4)' }}
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

        {/* Floating WhatsApp & Call Buttons - Event Expert Only */}
        <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-4 animate-bounce-slow">
          {/* Call Button - Event Expert */}
          <a
            href="tel:+918679333354"
            className="group relative flex items-center justify-center rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
            style={{ 
              width: '55px', 
              height: '55px',
              backgroundColor: '#4A90E2',
              boxShadow: '0 8px 25px rgba(74, 144, 226, 0.4)'
            }}
          >
            <Phone className="h-6 w-6 text-white" />
            <span 
              className="absolute right-16 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
              style={{ minWidth: 'max-content' }}
            >
              📞 Call Event Expert +91 86793 33354
            </span>
          </a>

          {/* WhatsApp Button - Event Expert */}
          <a
            href="https://wa.me/918679333354?text=Hello!%20I'm%20interested%20in%20planning%20a%20destination%20wedding%20in%20Dharamshala%20with%20Pretty%20Planet%20Travels%20%26%20Events."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
            style={{ 
              width: '55px', 
              height: '55px',
              backgroundColor: '#25D366',
              boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)'
            }}
          >
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span 
              className="absolute right-16 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
              style={{ minWidth: 'max-content' }}
            >
              💬 Chat with Event Expert on WhatsApp
            </span>
          </a>
        </div>

        {/* Wedding Proposal Viewer Modal */}
        <WeddingProposalViewer 
          isOpen={isProposalOpen} 
          onClose={() => setIsProposalOpen(false)} 
        />
      </div>
    </>
  );
};

export default EventsWeddingsLuxury;
