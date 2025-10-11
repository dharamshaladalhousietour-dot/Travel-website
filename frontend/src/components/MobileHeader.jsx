import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden bg-white shadow-lg sticky top-0 z-50">
      {/* Mobile Header */}
      <div className="px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div>
            <h1 className="text-base font-bold font-playfair leading-tight">
              <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Pretty Planet</span>
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent">Travels and Events</span>
            </h1>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 rounded-lg hover:bg-blue-50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-blue-900" /> : <Menu className="h-6 w-6 text-blue-900" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white">
          <div className="px-4 py-6 space-y-6">
            {/* Navigation Links */}
            <div className="space-y-4">
              <Link to="/" className="block text-lg font-medium text-gray-700 hover:text-blue-900 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <a href="/#about" className="block text-lg font-medium text-gray-700 hover:text-blue-900 py-2" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="/#services" className="block text-lg font-medium text-gray-700 hover:text-blue-900 py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
              <Link to="/tour-packages" className="block text-lg font-medium text-gray-700 hover:text-blue-900 py-2" onClick={() => setIsMenuOpen(false)}>Tour Packages</Link>
              <Link to="/events-weddings" className="block text-lg font-medium text-gray-700 hover:text-blue-900 py-2" onClick={() => setIsMenuOpen(false)}>Events & Weddings</Link>
              <a href="/#gallery" className="block text-lg font-medium text-gray-700 hover:text-blue-900 py-2" onClick={() => setIsMenuOpen(false)}>Gallery</a>
              <a href="/#contact" className="block text-lg font-medium text-gray-700 hover:text-blue-900 py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>

            {/* Contact Info */}
            <div className="border-t border-gray-200 pt-6 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>Tours: +91 8679333355</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>Events: +91 8679333354</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 text-lg font-bold"
                onClick={() => alert('Razorpay integration will be activated once API keys are provided')}
              >
                💳 Pay Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;