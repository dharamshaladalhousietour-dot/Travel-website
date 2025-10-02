import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Users, MapPin, Search } from 'lucide-react';

const Hero = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  });

  const handleSearch = () => {
    console.log('Search data:', searchData);
    // Mock search functionality
    alert('Search functionality coming soon!');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* Primary background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1758351820488-8cadd8fde79d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbnN8ZW58MHx8fHwxNzU5NDAxMjg0fDA&ixlib=rb-4.1.0&q=85)'
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Create
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"> Unforgettable </span>
            Moments
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            From magical destinations to seamless corporate events and dream weddings, 
            we turn your vision into extraordinary experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Plan Your Trip
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Book an Event
            </Button>
          </div>
        </div>

        {/* Search Widget */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
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
                  <SelectItem value="paris">Paris, France</SelectItem>
                  <SelectItem value="bali">Bali, Indonesia</SelectItem>
                  <SelectItem value="maldives">Maldives</SelectItem>
                  <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                  <SelectItem value="dubai">Dubai, UAE</SelectItem>
                  <SelectItem value="santorini">Santorini, Greece</SelectItem>
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