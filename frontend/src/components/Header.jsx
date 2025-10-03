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
              <span>holidays@prettyplanettravels.com | events.prettyplanettravels@gmail.com</span>
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
              <h1 className="text-lg md:text-2xl font-bold font-playfair">
                <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">Pretty Planet</span>
                <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent sm:ml-2">Travels and Events</span>
              </h1>
              <p className="text-xs md:text-sm font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent animate-pulse">
                ✨ Travel · Events · Weddings ✨
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 flex-grow justify-center">
            <a href="#home" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Services</a>
            <a href="#packages" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Packages</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Gallery</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <a
              href="https://wa.me/918679333355?text=Hello!%20I%20want%20to%20book%20tour%20with%20an%20expert.%20Please%20help%20me%20plan%20my%20trip."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-5 py-2.5 text-sm shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                🏔️ Book Tour with Expert
              </Button>
            </a>
            <a
              href="https://wa.me/918679333354?text=Hello!%20I%20want%20to%20book%20events%20with%20an%20expert.%20Please%20help%20me%20plan%20my%20event."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold px-5 py-2.5 text-sm shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                💒 Book Events with Expert
              </Button>
            </a>
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
                <a
                  href="https://wa.me/918679333355?text=Hello!%20I%20want%20to%20book%20tour%20with%20an%20expert.%20Please%20help%20me%20plan%20my%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white w-full font-bold py-3">
                    🏔️ Book Tour with Expert
                  </Button>
                </a>
                <a
                  href="https://wa.me/918679333354?text=Hello!%20I%20want%20to%20book%20events%20with%20an%20expert.%20Please%20help%20me%20plan%20my%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white w-full font-bold py-3">
                    💒 Book Events with Expert
                  </Button>
                </a>
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 w-full py-3">
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