import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>info@prettyplanettravels.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>123 Travel Street, City, State 12345</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">PP</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Pretty Planet</h1>
              <p className="text-sm text-amber-600 font-medium">Travel · Corporate Events · Weddings</p>
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
            <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
              Get Quote
            </Button>
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