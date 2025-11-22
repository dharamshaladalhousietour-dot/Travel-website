import React, { useState } from 'react';
import { Heart, Users, MapPin, Star, Send, Phone, Mail, Calendar, Mountain, Sparkles, Building2, Award, ArrowRight, Check, X } from 'lucide-react';
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
      altText: "Best luxury resort wedding in Dharamshala - Top wedding planner in Himachal - Pretty Planet Travels & Events",
      fileName: "luxury-resort-wedding.jpg"
    },
    {
      id: 2,
      title: "Dharamshala Destination Wedding",
      description: "Exchange vows with the stunning Dhauladhar ranges as your backdrop, combining traditional Himachali warmth with modern elegance for an unforgettable celebration.",
      customText: "Customized wedding package designed around your dreams",
      features: ["Mountain View Venue", "300-500 Guests", "3-Day Celebration", "Traditional Meets Modern", "Complete Event Management", "Luxury Guest Accommodations"],
      image: "/assets/hero-dharamshala.jpg",
      altText: "Destination wedding planner in Himachal Pradesh - Dharamshala mountain wedding by best event planner Pretty Planet",
      fileName: "dharamshala-destination-wedding.jpg"
    },
    {
      id: 3,
      title: "Mountain View Ceremony",
      description: "Intimate and breathtaking, celebrate your special day with panoramic Himalayan vistas in an elegantly curated setting designed for cherished memories.",
      customText: "Personalized to create your perfect intimate celebration",
      features: ["Scenic Himalayan Location", "100-200 Guests", "2-Day Intimate Event", "Bespoke Décor Design", "Personalized Service", "Gourmet Catering"],
      image: "/assets/portfolio1.jpg",
      altText: "Mountain view wedding ceremony Dharamshala - Best wedding decorator in Dharamshala Pretty Planet Events",
      fileName: "mountain-view-wedding-ceremony.jpg"
    },
    {
      id: 4,
      title: "Intimate Eco Wedding",
      description: "Embrace sustainability without compromising elegance. Celebrate love in harmony with nature at our eco-conscious venues surrounded by pristine Himalayan beauty.",
      customText: "Crafted with care for you and the environment",
      features: ["Eco-Friendly Venue", "50-100 Guests", "1-2 Day Celebration", "Organic Farm-to-Table Catering", "Nature-Inspired Décor", "Sustainable Practices"],
      image: "/assets/portfolio3.jpg",
      altText: "Eco-friendly luxury wedding Himachal - Top event planner Dharamshala - Pretty Planet sustainable weddings",
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
        title="Best Wedding Planner in Dharamshala | Top Event Planner in Himachal | Pretty Planet Travels & Events"
        description="Pretty Planet Travels & Events - Best wedding decorator in Dharamshala. Luxury destination wedding planner in Himachal Pradesh. Top-rated event planner for unforgettable celebrations."
        keywords="best wedding planner in Dharamshala, event planner in Dharamshala, luxury weddings in Dharamshala, destination wedding planner in Himachal, Pretty Planet Travels & Events Dharamshala, best wedding decorator in Dharamshala, top wedding planner in Himachal, top event planner in Dharamshala, Dharamshala wedding venues, Himachal Pradesh destination wedding"
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
              alt="Best wedding planner in Dharamshala - Luxury destination wedding by top event planner Pretty Planet Travels"
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
                Best Wedding Planner in Dharamshala
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-normal mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s', color: '#2D2D2D' }}>
                Top Event Planner in Himachal | Luxury Destination Weddings
              </h2>
              <p className="text-lg md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md italic animate-fade-in-up" style={{ animationDelay: '0.4s', lineHeight: '1.5' }}>
                "Pretty Planet Travels & Events - Your trusted wedding decorator in Dharamshala for unforgettable celebrations"
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

        {/* Your Wedding Journey Starts Here Section - Enhanced with Gradient Blush Background */}
        <section className="py-16 px-4 animate-fade-in-up" style={{ background: 'linear-gradient(135deg, #FFE8EC 0%, #FFF0F3 25%, #FFF9F7 50%, #FFE8EC 100%)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4" style={{ color: '#2D2D2D' }}>
              Luxury Wedding Planning in Dharamshala | Pretty Planet
            </h2>
            
            {/* Thin Gold Divider Under Title */}
            <div className="w-32 h-px mx-auto mb-8" style={{ background: 'linear-gradient(90deg, transparent 0%, #D9B38C 50%, transparent 100%)' }}></div>
            
            <p className="text-lg md:text-xl font-montserrat font-light mb-12 max-w-3xl mx-auto" style={{ color: '#3B3B3B', lineHeight: '1.5' }}>
              Your dream wedding deserves meticulous care and effortless planning.<br />
              Explore our exclusive wedding proposal and secure your date with Pretty Planet Travels & Events.
            </p>

            {/* Refined Buttons with Mini Icons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <button
                onClick={() => setIsProposalOpen(true)}
                className="inline-flex items-center justify-center font-montserrat font-semibold px-8 py-4 text-base rounded-full transform hover:scale-105 transition-all duration-300 group"
                style={{ 
                  background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)',
                  color: '#2D2D2D',
                  boxShadow: '0 8px 20px rgba(248, 199, 204, 0.3)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 30px rgba(217, 179, 140, 0.5)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(248, 199, 204, 0.3)'}
              >
                <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                View Full Wedding Proposal
              </button>

              <button
                onClick={() => {
                  const enquiryForm = document.getElementById('enquiry-form');
                  if (enquiryForm) {
                    enquiryForm.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center font-montserrat font-semibold px-8 py-4 text-base rounded-full transform hover:scale-105 transition-all duration-300 group"
                style={{ 
                  background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)',
                  color: '#2D2D2D',
                  boxShadow: '0 8px 20px rgba(248, 199, 204, 0.3)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 30px rgba(217, 179, 140, 0.5)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(248, 199, 204, 0.3)'}
              >
                <Star className="w-5 h-5 mr-2" fill="currentColor" />
                Secure Your Date – Book Now
              </button>
            </div>

            {/* Subtext Below Buttons */}
            <p className="text-sm font-montserrat font-light max-w-2xl mx-auto" style={{ color: '#666', lineHeight: '1.6' }}>
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
                Destination Wedding Packages in Himachal Pradesh
              </h2>
              <p className="text-lg md:text-xl font-montserrat font-light max-w-3xl mx-auto" style={{ color: '#3B3B3B', lineHeight: '1.5' }}>
                Best wedding decorator in Dharamshala crafting luxury celebrations in enchanting Himalayan settings
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
                Why Choose Dharamshala for Your Destination Wedding
              </h2>
              <p className="text-lg md:text-xl font-montserrat font-light max-w-3xl mx-auto" style={{ color: '#3B3B3B', lineHeight: '1.5' }}>
                Experience luxury wedding planning in Dharamshala with the best event planner in Himachal Pradesh
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

            {/* Descriptive Text Block - Centered with Gold Divider */}
            <div className="text-center max-w-4xl mx-auto mt-12 px-6 py-8 bg-gradient-to-r from-rose-50/50 via-amber-50/50 to-rose-50/50 rounded-2xl border border-amber-200/30 animate-fade-in-up">
              {/* Top Gold Divider */}
              <div className="w-24 h-0.5 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, transparent 0%, #D9B38C 50%, transparent 100%)' }}></div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light italic font-playfair">
                "Dharamshala offers the perfect canvas for your love story — where mountain charm, luxury resorts, and soulful moments come together in harmony."
              </p>
              
              {/* Bottom Gold Divider */}
              <div className="w-24 h-0.5 mx-auto mt-6" style={{ background: 'linear-gradient(90deg, transparent 0%, #D9B38C 50%, transparent 100%)' }}></div>
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

        {/* Wedding Décor Gallery Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white via-rose-50/30 to-white">
          <div className="max-w-7xl mx-auto">
            {/* Main Showcase Title */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-3" style={{ color: '#CBA135' }}>
                Best Wedding Decorator in Dharamshala - Portfolio
              </h2>
              <p className="text-xl md:text-2xl font-montserrat font-light italic mb-8" style={{ color: '#E7C5A0' }}>
                Luxury wedding décor by Pretty Planet - Top event planner in Himachal
              </p>
              <div className="w-32 h-1 mx-auto" style={{ background: 'linear-gradient(90deg, #CBA135 0%, #E7C5A0 100%)' }}></div>
            </div>

            {/* Gallery Subsection 1: A Glimpse of Our Dream Weddings */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-playfair font-semibold mb-4" style={{ color: '#2D2D2D' }}>
                  A Glimpse of Our Dream Weddings
                </h3>
                <p className="text-lg font-montserrat font-light max-w-3xl mx-auto" style={{ color: '#3B3B3B' }}>
                  Experience the artistry and elegance of our signature wedding décor, crafted with love for celebrations in the Himalayas
                </p>
              </div>

              {/* 2-Column Grid Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {/* Image 1: Blue & White Arch Décor */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/61lsv454_IMG_1513%20%281%29.JPG"
                  alt="Best wedding decorator Dharamshala - Elegant floral arch by top wedding planner in Himachal"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-playfair font-semibold mb-2" style={{ color: '#CBA135' }}>Blue & White Arch Décor</h3>
                  <p className="font-montserrat">Elegant floral arch for Dharamshala mountain wedding</p>
                </div>
              </div>

              {/* Image 2: Red Mountain Theme */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/fa5cll3o_IMG_1510%20%281%29.JPG"
                  alt="Top event planner Dharamshala - Vibrant wedding décor in Himachal Pradesh by Pretty Planet"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-playfair font-semibold mb-2" style={{ color: '#CBA135' }}>Red Mountain Theme</h3>
                  <p className="font-montserrat">Vibrant Himachal wedding décor with red and orange flowers</p>
                </div>
              </div>

              {/* Image 3: Traditional Pichwai Décor */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/dtz9gv5h_IMG_1504%20%281%29.JPG"
                  alt="Vibrant Pichwai-inspired wedding setup with floral detailing"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-playfair font-semibold mb-2" style={{ color: '#CBA135' }}>Traditional Pichwai Décor</h3>
                  <p className="font-montserrat">Vibrant Pichwai-inspired wedding setup with floral detailing</p>
                </div>
              </div>

              {/* Image 4: Sacred Shrinathji Mandap */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/k31jqf5e_IMG_1495.JPG"
                  alt="Spiritual wedding décor with Shrinathji idol and floral mandap design"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-playfair font-semibold mb-2" style={{ color: '#CBA135' }}>Sacred Shrinathji Mandap</h3>
                  <p className="font-montserrat">Spiritual wedding décor with Shrinathji idol and floral mandap design</p>
                </div>
              </div>

              {/* Image 5: Night Chandelier Décor - Full Width */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/8e8ttsmv_IMG_1499.JPG"
                  alt="Luxury wedding decorator Dharamshala - Evening chandeliers by best wedding planner Himachal"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-playfair font-semibold mb-2" style={{ color: '#CBA135' }}>Night Chandelier Décor</h3>
                  <p className="font-montserrat">Luxury evening wedding with chandeliers and candles</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link to="/events-weddings#packages">
                <Button 
                  className="font-montserrat font-semibold px-10 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                  style={{ 
                    background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)',
                    color: '#2D2D2D',
                    boxShadow: '0 8px 20px rgba(248, 199, 204, 0.3)'
                  }}
                >
                  View Wedding Packages
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            </div>
          </div>
        </section>

        {/* Timeless Wedding Inspirations Gallery Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-rose-50/30 via-amber-50/20 to-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4" style={{ color: '#2D2D2D' }}>
                Timeless Wedding Inspirations
              </h2>
              <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #D9B38C 0%, #F8C7CC 100%)' }}></div>
              <p className="text-lg md:text-xl font-montserrat font-light max-w-3xl mx-auto italic" style={{ color: '#3B3B3B' }}>
                "From sacred rituals to glamorous evenings — we design celebrations that reflect your story."
              </p>
            </div>

            {/* 2-Column Grid Gallery with Lightbox */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image 1: Traditional Pichwai Décor */}
              <div 
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => {
                  const modal = document.getElementById('lightbox-modal');
                  const modalImg = document.getElementById('lightbox-img');
                  const caption = document.getElementById('lightbox-caption');
                  modal.style.display = 'flex';
                  modalImg.src = 'https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/qhauf7tw_IMG_1483.JPG';
                  caption.innerHTML = '<h3 class="text-2xl font-playfair font-semibold mb-2" style="color: #CBA135;">Traditional Pichwai Décor</h3><p>Vibrant Pichwai-inspired wedding setup with floral detailing</p>';
                }}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/qhauf7tw_IMG_1483.JPG"
                  alt="Vibrant Pichwai-inspired wedding setup with floral detailing"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <p className="text-lg font-semibold">Click to View</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-playfair font-semibold mb-1" style={{ color: '#CBA135' }}>Traditional Pichwai Décor</h3>
                  <p className="text-sm font-montserrat">Vibrant Pichwai-inspired wedding setup with floral detailing</p>
                </div>
              </div>

              {/* Image 2: Sacred Shrinathji Mandap */}
              <div 
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => {
                  const modal = document.getElementById('lightbox-modal');
                  const modalImg = document.getElementById('lightbox-img');
                  const caption = document.getElementById('lightbox-caption');
                  modal.style.display = 'flex';
                  modalImg.src = 'https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/6mmjht4l_IMG_1489.JPG';
                  caption.innerHTML = '<h3 class="text-2xl font-playfair font-semibold mb-2" style="color: #CBA135;">Sacred Shrinathji Mandap</h3><p>Spiritual wedding décor with Shrinathji idol and floral mandap design</p>';
                }}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/6mmjht4l_IMG_1489.JPG"
                  alt="Spiritual wedding décor with Shrinathji idol and floral mandap design"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <p className="text-lg font-semibold">Click to View</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-playfair font-semibold mb-1" style={{ color: '#CBA135' }}>Sacred Shrinathji Mandap</h3>
                  <p className="text-sm font-montserrat">Spiritual wedding décor with Shrinathji idol and floral mandap design</p>
                </div>
              </div>

              {/* Image 3: Sangeet Night Glam */}
              <div 
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => {
                  const modal = document.getElementById('lightbox-modal');
                  const modalImg = document.getElementById('lightbox-img');
                  const caption = document.getElementById('lightbox-caption');
                  modal.style.display = 'flex';
                  modalImg.src = 'https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/c09ne97a_IMG_1480.JPG';
                  caption.innerHTML = '<h3 class="text-2xl font-playfair font-semibold mb-2" style="color: #CBA135;">Sangeet Night Glam</h3><p>Modern sangeet celebration with elegant golden backdrop and stage lights</p>';
                }}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/c09ne97a_IMG_1480.JPG"
                  alt="Modern sangeet celebration with elegant golden backdrop and stage lights"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <p className="text-lg font-semibold">Click to View</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-playfair font-semibold mb-1" style={{ color: '#CBA135' }}>Sangeet Night Glam</h3>
                  <p className="text-sm font-montserrat">Modern sangeet celebration with elegant golden backdrop and stage lights</p>
                </div>
              </div>

              {/* Image 4: Sangeet Night Glam */}
              <div 
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => {
                  const modal = document.getElementById('lightbox-modal');
                  const modalImg = document.getElementById('lightbox-img');
                  const caption = document.getElementById('lightbox-caption');
                  modal.style.display = 'flex';
                  modalImg.src = 'https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/ae3x8fjs_IMG_1477.JPG';
                  caption.innerHTML = '<h3 class="text-2xl font-playfair font-semibold mb-2" style="color: #CBA135;">Sangeet Night Glam</h3><p>Modern sangeet celebration with elegant golden backdrop and stage lights</p>';
                }}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/ae3x8fjs_IMG_1477.JPG"
                  alt="Modern sangeet celebration with elegant golden backdrop and stage lights"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <p className="text-lg font-semibold">Click to View</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-playfair font-semibold mb-1" style={{ color: '#CBA135' }}>Sangeet Night Glam</h3>
                  <p className="text-sm font-montserrat">Modern sangeet celebration with elegant golden backdrop and stage lights</p>
                </div>
              </div>

              {/* Image 5: Luxury Evening Stage - Full Width */}
              <div 
                className="md:col-span-2 group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => {
                  const modal = document.getElementById('lightbox-modal');
                  const modalImg = document.getElementById('lightbox-img');
                  const caption = document.getElementById('lightbox-caption');
                  modal.style.display = 'flex';
                  modalImg.src = 'https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/c2co11fh_IMG_1458.JPG';
                  caption.innerHTML = '<h3 class="text-2xl font-playfair font-semibold mb-2" style="color: #CBA135;">Luxury Evening Stage</h3><p>Elegant evening wedding setup with chandeliers and floral arch</p>';
                }}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/c2co11fh_IMG_1458.JPG"
                  alt="Elegant evening wedding setup with chandeliers and floral arch"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <p className="text-lg font-semibold">Click to View</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-playfair font-semibold mb-1" style={{ color: '#CBA135' }}>Luxury Evening Stage</h3>
                  <p className="text-sm font-montserrat">Elegant evening wedding setup with chandeliers and floral arch</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elegant Wedding Décor Inspirations Gallery Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white via-amber-50/20 to-rose-50/30">
          <div className="max-w-7xl mx-auto">
            {/* Tagline */}
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl font-montserrat font-light italic max-w-4xl mx-auto" style={{ color: '#D9B38C' }}>
                "From vibrant haldi mornings to elegant evening receptions — every celebration deserves timeless décor."
              </p>
            </div>

            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4" style={{ color: '#2D2D2D' }}>
                Elegant Wedding Décor Inspirations
              </h2>
              <div className="w-24 h-1 mx-auto" style={{ background: 'linear-gradient(90deg, #D9B38C 0%, #F8C7CC 100%)' }}></div>
            </div>

            {/* 2-Column Grid Gallery with Lightbox */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image 1: Hanging Lantern Lights */}
              <div 
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-2 border-amber-100"
                onClick={() => {
                  const modal = document.getElementById('lightbox-modal');
                  const modalImg = document.getElementById('lightbox-img');
                  const caption = document.getElementById('lightbox-caption');
                  modal.style.display = 'flex';
                  modalImg.src = 'https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/oumegv8a_IMG_1461.JPG';
                  caption.innerHTML = '<h3 class="text-2xl font-playfair font-semibold mb-2" style="color: #CBA135;">Hanging Lantern Lights</h3><p>Dreamy outdoor wedding décor with elegant lantern lighting on trees</p>';
                }}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/oumegv8a_IMG_1461.JPG"
                  alt="Dreamy outdoor wedding décor with elegant lantern lighting on trees"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <p className="text-lg font-semibold">Click to View</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-amber-900/90 to-transparent">
                  <h3 className="text-xl font-playfair font-semibold mb-1" style={{ color: '#CBA135' }}>Hanging Lantern Lights</h3>
                  <p className="text-sm font-montserrat">Dreamy outdoor wedding décor with elegant lantern lighting on trees</p>
                </div>
              </div>

              {/* Image 2: Golden Haldi Setup */}
              <div 
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-2 border-amber-100"
                onClick={() => {
                  const modal = document.getElementById('lightbox-modal');
                  const modalImg = document.getElementById('lightbox-img');
                  const caption = document.getElementById('lightbox-caption');
                  modal.style.display = 'flex';
                  modalImg.src = 'https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/nlqfjzkt_IMG_1424.JPG';
                  caption.innerHTML = '<h3 class="text-2xl font-playfair font-semibold mb-2" style="color: #CBA135;">Golden Haldi Setup</h3><p>Bright haldi ceremony décor with marigold flowers and traditional yellow theme</p>';
                }}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/nlqfjzkt_IMG_1424.JPG"
                  alt="Bright haldi ceremony décor with marigold flowers and traditional yellow theme"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <p className="text-lg font-semibold">Click to View</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-amber-900/90 to-transparent">
                  <h3 className="text-xl font-playfair font-semibold mb-1" style={{ color: '#CBA135' }}>Golden Haldi Setup</h3>
                  <p className="text-sm font-montserrat">Bright haldi ceremony décor with marigold flowers and traditional yellow theme</p>
                </div>
              </div>

              {/* Image 3: Luxury Bar Setup */}
              <div 
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-2 border-amber-100"
                onClick={() => {
                  const modal = document.getElementById('lightbox-modal');
                  const modalImg = document.getElementById('lightbox-img');
                  const caption = document.getElementById('lightbox-caption');
                  modal.style.display = 'flex';
                  modalImg.src = 'https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/on1ijzbs_IMG_1423.JPG';
                  caption.innerHTML = '<h3 class="text-2xl font-playfair font-semibold mb-2" style="color: #CBA135;">Luxury Bar Setup</h3><p>Indoor wedding bar setup with mirrored patterns and chandelier lighting</p>';
                }}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/on1ijzbs_IMG_1423.JPG"
                  alt="Indoor wedding bar setup with mirrored patterns and chandelier lighting"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <p className="text-lg font-semibold">Click to View</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-amber-900/90 to-transparent">
                  <h3 className="text-xl font-playfair font-semibold mb-1" style={{ color: '#CBA135' }}>Luxury Bar Setup</h3>
                  <p className="text-sm font-montserrat">Indoor wedding bar setup with mirrored patterns and chandelier lighting</p>
                </div>
              </div>

              {/* Image 4: Tropical Mehendi Backdrop */}
              <div 
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-2 border-amber-100"
                onClick={() => {
                  const modal = document.getElementById('lightbox-modal');
                  const modalImg = document.getElementById('lightbox-img');
                  const caption = document.getElementById('lightbox-caption');
                  modal.style.display = 'flex';
                  modalImg.src = 'https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/4f0qv7th_IMG_1510.JPG';
                  caption.innerHTML = '<h3 class="text-2xl font-playfair font-semibold mb-2" style="color: #CBA135;">Tropical Mehendi Backdrop</h3><p>Boho-chic mehendi setup with yellow florals and geometric panels</p>';
                }}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/4f0qv7th_IMG_1510.JPG"
                  alt="Boho-chic mehendi setup with yellow florals and geometric panels"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <p className="text-lg font-semibold">Click to View</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-amber-900/90 to-transparent">
                  <h3 className="text-xl font-playfair font-semibold mb-1" style={{ color: '#CBA135' }}>Tropical Mehendi Backdrop</h3>
                  <p className="text-sm font-montserrat">Boho-chic mehendi setup with yellow florals and geometric panels</p>
                </div>
              </div>

              {/* Image 5: Blue & White Royal Stage - Full Width */}
              <div 
                className="md:col-span-2 group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-2 border-amber-100"
                onClick={() => {
                  const modal = document.getElementById('lightbox-modal');
                  const modalImg = document.getElementById('lightbox-img');
                  const caption = document.getElementById('lightbox-caption');
                  modal.style.display = 'flex';
                  modalImg.src = 'https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/3iubbrhc_IMG_1513.JPG';
                  caption.innerHTML = '<h3 class="text-2xl font-playfair font-semibold mb-2" style="color: #CBA135;">Blue & White Royal Stage</h3><p>Elegant blue and white wedding stage décor inspired by Mughal design</p>';
                }}
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_pretty-planet-travel/artifacts/3iubbrhc_IMG_1513.JPG"
                  alt="Elegant blue and white wedding stage décor inspired by Mughal design"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <p className="text-lg font-semibold">Click to View</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-amber-900/90 to-transparent">
                  <h3 className="text-xl font-playfair font-semibold mb-1" style={{ color: '#CBA135' }}>Blue & White Royal Stage</h3>
                  <p className="text-sm font-montserrat">Elegant blue and white wedding stage décor inspired by Mughal design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <div 
          id="lightbox-modal" 
          className="fixed inset-0 z-50 hidden bg-black/95 items-center justify-center p-4"
          style={{ display: 'none' }}
          onClick={(e) => {
            if (e.target.id === 'lightbox-modal') {
              document.getElementById('lightbox-modal').style.display = 'none';
            }
          }}
        >
          <button
            onClick={() => document.getElementById('lightbox-modal').style.display = 'none'}
            className="absolute top-4 right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8 text-white" />
          </button>
          
          <div className="max-w-6xl w-full">
            <img 
              id="lightbox-img"
              src=""
              alt=""
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div 
              id="lightbox-caption" 
              className="text-white text-center mt-6 font-montserrat"
            ></div>
          </div>
        </div>

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
                          <SelectItem value="₹10–20 Lakhs">₹10–20 Lakhs</SelectItem>
                          <SelectItem value="₹20–35 Lakhs">₹20–35 Lakhs</SelectItem>
                          <SelectItem value="₹35–50 Lakhs">₹35–50 Lakhs</SelectItem>
                          <SelectItem value="₹50 Lakhs – 1 Crore">₹50 Lakhs – 1 Crore</SelectItem>
                          <SelectItem value="₹1 Crore – 2 Crores">₹1 Crore – 2 Crores</SelectItem>
                          <SelectItem value="₹2 Crores+">₹2 Crores+</SelectItem>
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

        {/* Our Wedding Decor & Moments Gallery Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white via-rose-50/30 to-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-3" style={{ color: '#CBA135' }}>
                Our Wedding Decor & Moments
              </h2>
              <p className="text-xl md:text-2xl font-montserrat font-light italic mb-8" style={{ color: '#E7C5A0' }}>
                Captured Memories from Our Beautiful Celebrations
              </p>
              <div className="w-32 h-1 mx-auto" style={{ background: 'linear-gradient(90deg, #CBA135 0%, #E7C5A0 100%)' }}></div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Photo 1 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_755c6f10-3caa-480e-a9ee-33d257ddbaaf/artifacts/s7761bes_IMG_1387.png"
                  alt="Beautiful wedding decor by Pretty Planet Travels & Events in Dharamshala"
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Photo 2 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_755c6f10-3caa-480e-a9ee-33d257ddbaaf/artifacts/qcjnp0iy_PHOTO-2025-05-01-15-22-29.jpeg"
                  alt="Elegant wedding setup by top event planner in Himachal Pradesh"
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Photo 3 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_755c6f10-3caa-480e-a9ee-33d257ddbaaf/artifacts/bcfr7n7r_IMG_8205.jpeg"
                  alt="Stunning wedding moments captured at Dharamshala destination wedding"
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Photo 4 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_755c6f10-3caa-480e-a9ee-33d257ddbaaf/artifacts/w0rgcsrx_0F4A7193.jpeg"
                  alt="Luxury wedding decor and setup by Pretty Planet in Himachal"
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Photo 5 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_755c6f10-3caa-480e-a9ee-33d257ddbaaf/artifacts/3ns3l5v1_1732257183187.655.jpeg"
                  alt="Wedding celebration moments by best wedding planner in Dharamshala"
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Photo 6 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_755c6f10-3caa-480e-a9ee-33d257ddbaaf/artifacts/053rts78_IMG_1418.jpeg"
                  alt="Beautiful wedding decor and celebration moments in Dharamshala"
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Photo 7 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_755c6f10-3caa-480e-a9ee-33d257ddbaaf/artifacts/6l3m0rn8_PHOTO-2025-05-01-15-57-51.jpeg"
                  alt="Stunning wedding photography by Pretty Planet Events in Himachal"
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Photo 8 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_755c6f10-3caa-480e-a9ee-33d257ddbaaf/artifacts/4qsd4l77_IMG_0991.jpeg"
                  alt="Elegant wedding venue setup by top event planner in Dharamshala"
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Photo 9 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_755c6f10-3caa-480e-a9ee-33d257ddbaaf/artifacts/dla6gj4k_IMG_0996.jpeg"
                  alt="Luxury wedding decor and ambiance by Pretty Planet in Himachal Pradesh"
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Photo 10 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src="https://customer-assets.emergentagent.com/job_755c6f10-3caa-480e-a9ee-33d257ddbaaf/artifacts/n7knzkn5_IMG_0959.jpeg"
                  alt="Wedding celebration and special moments captured by Pretty Planet Events"
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

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
