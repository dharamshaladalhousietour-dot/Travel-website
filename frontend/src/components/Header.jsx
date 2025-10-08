import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import MobileHeader from './MobileHeader';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header - Only visible on mobile */}
      <MobileHeader />
      
      {/* Desktop Header - Hidden on mobile */}
      <header className="hidden md:block bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info - Desktop Only */}
      <div className="hidden md:block bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>Travel: +91 8679333355</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>Events: +91 8679333354</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span className="hidden lg:inline">holidays@prettyplanettravels.com</span>
              <span className="lg:hidden">Contact Us</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>Corporate House, Potala Marg, Dharamshala, H.P - 176215</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-3 md:py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="min-w-0">
              <h1 className="text-sm sm:text-lg md:text-2xl font-bold font-playfair leading-tight">
                <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">Pretty Planet</span>
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent ml-1 sm:ml-2">Travels and Events</span>
              </h1>
              <p className="hidden sm:block text-xs md:text-sm font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent animate-pulse">
                ✨ Travel · Events · Weddings ✨
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 flex-grow justify-center">
            <a href="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Services</a>
            <a href="/tour-packages" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Tour Packages</a>
            <a href="/events-weddings" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Events & Weddings</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <Button 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-6 py-2.5 text-sm shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
              onClick={() => alert('Razorpay integration will be activated once API keys are provided')}
            >
              💳 Pay Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-blue-900 p-2 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Services</a>
              <a href="#packages" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Packages</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Gallery</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Contact</a>
              <div className="pt-4 flex flex-col space-y-3">
                <Button 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white w-full font-bold py-3"
                  onClick={() => alert('Razorpay integration will be activated once API keys are provided')}
                >
                  💳 Pay Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
};

export default Header;