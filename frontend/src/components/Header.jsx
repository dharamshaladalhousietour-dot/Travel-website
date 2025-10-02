import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>Travel: +91 8679333355 | +91 9816154248</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>Events: +91 8679333354</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>prettyplanettravels@hotmail.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>Corporate House, Potala Marg, Dharamshala, H.P - 176215</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
              <img 
                src="https://customer-assets.emergentagent.com/job_wanderlust-web-3/artifacts/gj7j2eju_image.png" 
                alt="Pretty Planet Travels and Events Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl font-bold font-playfair whitespace-nowrap">
                <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">Pretty Planet</span>
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent ml-2">Travels & Events</span>
              </h1>
              <p className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent animate-pulse">
                ✨ Travel · Corporate Events · Weddings ✨
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Services</a>
            <a href="#packages" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Packages</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Gallery</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/918679333355?text=Hello!%20I%20want%20to%20book%20travel%20with%20an%20expert.%20Please%20help%20me%20plan%20my%20trip."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-4 py-2 text-sm shadow-lg transform hover:scale-105 transition-all duration-300">
                🏔️ Book with Expert
              </Button>
            </a>
            <a
              href="https://wa.me/918679333354?text=Hello!%20I%20want%20to%20book%20wedding/event%20services.%20Please%20help%20me%20plan%20my%20event."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold px-4 py-2 text-sm shadow-lg transform hover:scale-105 transition-all duration-300">
                💒 Book with Events
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Services</a>
              <a href="#packages" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Packages</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Gallery</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contact</a>
              <div className="pt-3 flex flex-col space-y-2">
                <a
                  href="https://wa.me/918679333355?text=Hello!%20I%20want%20to%20book%20travel%20with%20an%20expert.%20Please%20help%20me%20plan%20my%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full font-bold">
                    🏔️ Book with Expert
                  </Button>
                </a>
                <a
                  href="https://wa.me/918679333354?text=Hello!%20I%20want%20to%20book%20wedding/event%20services.%20Please%20help%20me%20plan%20my%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white w-full font-bold">
                    💒 Book with Events
                  </Button>
                </a>
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;