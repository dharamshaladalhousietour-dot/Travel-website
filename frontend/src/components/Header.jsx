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
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_wanderlust-web-3/artifacts/gj7j2eju_image.png" 
                alt="Pretty Planet Travels and Events Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
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

          {/* Social Media & CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 mr-4">
              <a
                href="https://www.facebook.com/share/1BafLWD3au/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com/prettyplanettravelsandevents?igsh=MWtoYzZucmtwZGl0Mw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
            </div>
            <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
              Get Quote
            </Button>
            <a
              href="https://wa.me/918679333355?text=Hello!%20I%20want%20to%20book%20with%20an%20expert.%20Please%20help%20me%20plan%20my%20trip."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-6 py-2 shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse">
                📞 Book with Expert
              </Button>
            </a>
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
              Book Now
            </Button>
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
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 w-full">
                  Get Quote
                </Button>
                <a
                  href="https://wa.me/918679333355?text=Hello!%20I%20want%20to%20book%20with%20an%20expert.%20Please%20help%20me%20plan%20my%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-full font-bold">
                    📞 Book with Expert
                  </Button>
                </a>
                <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white w-full">
                  Book Now
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