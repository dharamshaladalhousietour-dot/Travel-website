import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Luxury Travel Packages', href: '#packages' },
    { name: 'Corporate Events', href: '#services' },
    { name: 'Destination Weddings', href: '#services' },
    { name: 'Honeymoon Packages', href: '#packages' },
    { name: 'Group Tours', href: '#packages' },
    { name: 'Event Planning', href: '#services' }
  ];

  const destinations = [
    { name: 'Kashmir Valley Tours', href: '#packages' },
    { name: 'Shimla Hill Station', href: '#packages' },
    { name: 'Manali Adventures', href: '#packages' },
    { name: 'Leh Ladakh Expedition', href: '#packages' },
    { name: 'Dharamshala Retreats', href: '#packages' },
    { name: 'Himachal Luxury', href: '#packages' }
  ];

  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#about' },
    { name: 'Careers', href: '#contact' },
    { name: 'Press & Media', href: '#contact' },
    { name: 'Partner With Us', href: '#contact' },
    { name: 'Testimonials', href: '#testimonials' }
  ];

  const support = [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQ', href: '#contact' },
    { name: 'Travel Insurance', href: '#contact' },
    { name: 'Terms & Conditions', href: '#contact' },
    { name: 'Privacy Policy', href: '#contact' },
    { name: 'Refund Policy', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/share/1BafLWD3au/' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/prettyplanettravelsandevents?igsh=MWtoYzZucmtwZGl0Mw==' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { name: 'YouTube', icon: <Youtube className="h-5 w-5" />, href: '#' }
  ];

  const wedmeGoodLinks = [
    { 
      name: 'Destination Weddings & Honeymoon', 
      href: 'https://www.wedmegood.com/profile/Destination-Weddings-And-Honeymoon-1743009',
      icon: '💒'
    },
    { 
      name: 'Pretty Planet Travels and Events', 
      href: 'https://www.wedmegood.com/profile/Pretty-Planet-Travels-and-Events-4367953',
      icon: '💍'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Stay Connected with Pretty Planet Travels and Events
              </h3>
              <p className="text-blue-200 text-lg leading-relaxed">
                Subscribe to our newsletter for exclusive travel deals, event planning tips, 
                and inspiring destination stories delivered to your inbox.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 h-12 bg-white border-0 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-amber-400"
                />
                <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 h-12 font-semibold">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-blue-300">
                Join 25,000+ travelers and event planners. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">PP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-playfair">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">Pretty Planet</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300 ml-1">Travels & Events</span>
                </h3>
                <p className="text-sm text-amber-300 font-medium">✨ Travel • Events • Weddings ✨</p>
              </div>
            </div>
            
            <p className="text-blue-200 mb-6 leading-relaxed">
              Creating unforgettable journeys, seamless corporate events, and magical weddings 
              since 2008. Your trusted partner for extraordinary experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-blue-200">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>Corporate House, Potala Marg, Dharamshala, H.P - 176215</span>
              </div>
              <div className="flex flex-col space-y-1 text-blue-200">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span>Travel: +91 8679333355 | +91 9816154248</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span>Events: +91 8679333354</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <Mail className="h-4 w-4 text-amber-400" />
                <span>prettyplanettravels@hotmail.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-blue-200 hover:text-amber-400 transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-white mb-6">Top Destinations</h4>
            <ul className="space-y-3">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <a 
                    href={destination.href} 
                    className="text-blue-200 hover:text-amber-400 transition-colors text-sm"
                  >
                    {destination.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-blue-200 hover:text-amber-400 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-blue-200 hover:text-amber-400 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-blue-200 text-sm">
              <span>© {currentYear} Pretty Planet Travels and Events. Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>All rights reserved.</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-blue-200 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;