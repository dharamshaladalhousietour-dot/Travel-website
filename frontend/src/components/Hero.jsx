import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Users, MapPin } from 'lucide-react';

const Hero = () => {
  const [enquiryData, setEnquiryData] = useState({
    destination: '',
    startDate: '',
    pax: '',
    phone: '',
    message: ''
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [searchError, setSearchError] = useState('');

  // Destination to page mapping (case-insensitive, partial match)
  const destinationMapping = [
    { keywords: ['dharam', 'dharamshala'], url: '/tour-packages' },
    { keywords: ['dalhousie'], url: '/tour-packages' },
    { keywords: ['jaipur'], url: '/tour-packages' },
    { keywords: ['jaisalmer'], url: '/tour-packages' },
    { keywords: ['shimla'], url: '/tour-packages' },
    { keywords: ['manali'], url: '/tour-packages' },
    { keywords: ['kashmir', 'srinagar'], url: '/tour-packages' },
    { keywords: ['leh', 'ladakh', 'leh-ladakh'], url: '/tour-packages' },
    { keywords: ['goa'], url: '/tour-packages' },
    { keywords: ['kerala'], url: '/tour-packages' },
    { keywords: ['rajasthan'], url: '/tour-packages' },
    { keywords: ['wedding', 'events', 'event'], url: '/events-weddings' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchError('');
    console.log('Homepage search submitted:', enquiryData);
    
    // Check if destination is provided
    if (!enquiryData.destination || enquiryData.destination.trim() === '') {
      setSearchError('Please enter a destination to search.');
      return;
    }

    // Search for matching destination (case-insensitive, partial match)
    const searchTerm = enquiryData.destination.toLowerCase().trim();
    const match = destinationMapping.find(mapping => 
      mapping.keywords.some(keyword => searchTerm.includes(keyword) || keyword.includes(searchTerm))
    );

    if (match) {
      // Track search with Meta Pixel
      if (window.fbq) {
        window.fbq('trackCustom', 'PackageSearch', {
          search_term: enquiryData.destination,
          matched_url: match.url
        });
      }
      
      // Redirect to matched page
      console.log(`✅ Redirecting to: ${match.url} for destination: ${enquiryData.destination}`);
      window.location.href = match.url;
    } else {
      // No match found - show error message
      setSearchError('No matching packages found.');
      console.log(`❌ No match found for: ${enquiryData.destination}`);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Single Hero Banner */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source 
            srcSet="/assets/hero-banner.webp" 
            type="image/webp"
          />
          <img
            src="/assets/hero-banner.webp"
            alt="Pretty Planet Travels - Destination Weddings and Tours in Himachal Pradesh"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
            width="1200"
            height="1599"
          />
        </picture>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-playfair text-center" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 6px rgba(0, 0, 0, 0.9)' }}>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Create</span>
            <br className="sm:hidden" />
            <span className="animate-pulse" style={{ color: '#FFFFFF', textShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 1)' }}> Unforgettable </span>
            <br className="sm:hidden" />
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Moments</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 max-w-3xl mx-auto leading-relaxed text-center px-4" style={{ textShadow: '0 3px 8px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.9)' }}>
            From magical destinations to seamless corporate events and dream weddings, 
            we turn your vision into extraordinary experiences.
          </p>
          
          {/* Premium Tagline with Badge Style */}
          <div className="mb-8 flex justify-center px-4">
            <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/20 backdrop-blur-lg border-2 border-amber-400/50 rounded-full px-6 py-3 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              
              {/* Trust Icon */}
              <span className="text-3xl animate-pulse">🏆</span>
              
              {/* Tagline Text */}
              <p className="relative z-10 text-base sm:text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 font-playfair tracking-wide">
                Trusted Event & Wedding Planners in Dharamshala
              </p>
              
              {/* Divider */}
              <span className="text-amber-300 text-xl">|</span>
              
              {/* Brand Name */}
              <p className="relative z-10 text-base sm:text-lg md:text-xl font-bold text-white font-montserrat">
                Pretty Planet Travels & Events
              </p>
              
              {/* Star decoration */}
              <span className="text-2xl animate-pulse">⭐</span>
            </div>
          </div>
          
          {/* WhatsApp Expert Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-10 py-5 text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
              onClick={() => {
                if (window.fbq) {
                  window.fbq('trackCustom', 'WhatsAppTravelClick', {
                    button_name: 'Get My Customized Travel Plan',
                    location: 'Hero Section'
                  });
                }
                const message = "Hi! I want to get my customized travel plan.";
                window.open(`https://wa.me/918679333355?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              ✈️ Get My Customized Travel Plan
            </Button>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 sm:px-10 py-5 text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
              onClick={() => {
                if (window.fbq) {
                  window.fbq('trackCustom', 'WhatsAppWeddingClick', {
                    button_name: 'Plan My Dream Wedding Now',
                    location: 'Hero Section'
                  });
                }
                const message = "Hi! I want to plan my dream wedding with Pretty Planet.";
                window.open(`https://wa.me/918679333354?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              💍 Plan My Dream Wedding Now
            </Button>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="bg-white/75 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl max-w-4xl mx-4 sm:mx-auto">
          {showThankYou && (
            <div className="mb-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
              <p className="font-semibold text-base">Thank you! Your travel enquiry has been received. Our team will get back to you within 1 hour.</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              {/* Destination */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  Destination
                </label>
                <Input 
                  type="text" 
                  className="h-9"
                  placeholder="e.g. Dharamshala, Manali..."
                  value={enquiryData.destination}
                  onChange={(e) => {
                    setEnquiryData({...enquiryData, destination: e.target.value});
                    setSearchError('');
                  }}
                />
                {searchError && (
                  <p className="text-xs text-red-600 mt-1">{searchError}</p>
                )}
              </div>

              {/* Start Date */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Start Date
                </label>
                <Input 
                  type="date" 
                  className="h-9"
                  value={enquiryData.startDate}
                  onChange={(e) => setEnquiryData({...enquiryData, startDate: e.target.value})}
                />
              </div>

              {/* No. of Pax */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  No. of Pax
                </label>
                <Input 
                  type="text" 
                  className="h-9"
                  placeholder="e.g. 2 Adults, 1 Kid"
                  value={enquiryData.pax}
                  onChange={(e) => setEnquiryData({...enquiryData, pax: e.target.value})}
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
                  📱 Phone
                </label>
                <Input 
                  type="tel" 
                  className="h-9"
                  placeholder="+91 9999999999"
                  value={enquiryData.phone}
                  onChange={(e) => setEnquiryData({...enquiryData, phone: e.target.value})}
                />
              </div>
            </div>
            
            {/* Message - Full Width */}
            <div className="mt-2 space-y-1">
              <label className="text-xs font-medium text-gray-700 flex items-center gap-1">
                💬 Message (Optional)
              </label>
              <Input 
                type="text" 
                className="h-9"
                placeholder="Any specific requirements..."
                value={enquiryData.message}
                onChange={(e) => setEnquiryData({...enquiryData, message: e.target.value})}
              />
            </div>
            
            {/* Submit Button */}
            <div className="mt-3 text-center">
              <Button 
                type="submit"
                size="sm" 
                className="w-full md:w-auto bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-2 text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                ✈️ Plan My Trip
              </Button>
            </div>
          </form>
          
          {/* Response Time Note */}
          <p className="text-center text-xs italic text-gray-600 mt-2">
            Our team will get back to you within 1 hour of your enquiry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;