import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Users, MapPin, Search } from 'lucide-react';

const Hero = () => {
  const [enquiryData, setEnquiryData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    adults: '',
    kids: '',
    days: ''
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry data:', enquiryData);
    // Show thank you message
    setShowThankYou(true);
    // Reset form
    setEnquiryData({
      destination: '',
      startDate: '',
      endDate: '',
      adults: '',
      kids: '',
      days: ''
    });
    // Hide thank you message after 5 seconds
    setTimeout(() => setShowThankYou(false), 5000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* Primary background image - Himachal Pradesh Mountains */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1648034902541-b239c599114e)'
            }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-transparent"></div>
          
          {/* Secondary overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-playfair text-center">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Create</span>
            <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 animate-pulse"> Unforgettable </span>
            <br className="sm:hidden" />
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Moments</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed text-center px-4">
            From magical destinations to seamless corporate events and dream weddings, 
            we turn your vision into extraordinary experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center mb-16 px-4">
            <a
              href="https://wa.me/918679333355?text=Hello!%20I%20want%20to%20book%20tour%20with%20an%20expert.%20Please%20help%20me%20plan%20my%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse"
              >
                🏔️ Book Tour with Expert
              </Button>
            </a>
            <a
              href="https://wa.me/918679333354?text=Hello!%20I%20want%20to%20book%20events%20with%20an%20expert.%20Please%20help%20me%20plan%20my%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse"
              >
                💒 Book Events with Expert
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Plan Your Trip
            </Button>
          </div>
        </div>

        {/* Search Widget */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-2xl max-w-4xl mx-4 sm:mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Destination */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Destination
              </label>
              <Select onValueChange={(value) => setSearchData({...searchData, destination: value})}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Where to?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shimla">Shimla, Himachal Pradesh</SelectItem>
                  <SelectItem value="kashmir">Kashmir Valley</SelectItem>
                  <SelectItem value="manali">Manali, Himachal Pradesh</SelectItem>
                  <SelectItem value="dharamshala">Dharamshala, Himachal Pradesh</SelectItem>
                  <SelectItem value="srinagar">Srinagar, Kashmir</SelectItem>
                  <SelectItem value="leh-ladakh">Leh Ladakh</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Check-in Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Check-in
              </label>
              <Input 
                type="date" 
                className="h-12"
                value={searchData.checkIn}
                onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
              />
            </div>

            {/* Check-out Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Check-out
              </label>
              <Input 
                type="date" 
                className="h-12"
                value={searchData.checkOut}
                onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
              />
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <Users className="h-4 w-4" />
                Guests
              </label>
              <Select onValueChange={(value) => setSearchData({...searchData, guests: value})}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3-5">3-5 Guests</SelectItem>
                  <SelectItem value="6-10">6-10 Guests</SelectItem>
                  <SelectItem value="10+">10+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Search Button */}
          <div className="mt-6">
            <Button 
              onClick={handleSearch}
              size="lg" 
              className="w-full md:w-auto bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-12 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Search className="h-5 w-5 mr-2" />
              Search Experiences
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;