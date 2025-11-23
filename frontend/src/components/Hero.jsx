import React from 'react';
import { Button } from './ui/button';

const Hero = () => {

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
      </div>
    </section>
  );
};

export default Hero;