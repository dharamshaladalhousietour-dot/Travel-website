import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    destination: '',
    exCity: '',
    travelDate: '',
    pax: '',
    duration: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Build query parameters
    const params = new URLSearchParams();
    if (searchData.destination) params.append('destination', searchData.destination);
    if (searchData.duration) params.append('duration', searchData.duration);
    if (searchData.exCity) params.append('exCity', searchData.exCity);
    if (searchData.travelDate) params.append('date', searchData.travelDate);
    if (searchData.pax) params.append('pax', searchData.pax);
    
    // Navigate to tour packages page with query params
    navigate(`/tour-packages?${params.toString()}`);
  };

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
            
            {/* 1. Destination */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">Destination</label>
              <Select 
                value={searchData.destination} 
                onValueChange={(value) => handleInputChange('destination', value)}
              >
                <SelectTrigger className="h-10 rounded-lg border border-gray-300 hover:border-blue-500 focus:border-blue-500 transition-colors">
                  <SelectValue placeholder="Where to?" />
                </SelectTrigger>
                <SelectContent className="max-h-64">
                  <SelectItem value="Kashmir">Kashmir</SelectItem>
                  <SelectItem value="Himachal">Himachal Pradesh</SelectItem>
                  <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                  <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                  <SelectItem value="Goa">Goa</SelectItem>
                  <SelectItem value="Kerala">Kerala</SelectItem>
                  <SelectItem value="Karnataka">Karnataka</SelectItem>
                  <SelectItem value="West Bengal">West Bengal</SelectItem>
                  <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                  <SelectItem value="International">International</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 2. Ex-City (Leaving From) */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">Leaving From</label>
              <Select 
                value={searchData.exCity} 
                onValueChange={(value) => handleInputChange('exCity', value)}
              >
                <SelectTrigger className="h-10 rounded-lg border border-gray-300 hover:border-blue-500 focus:border-blue-500 transition-colors">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent className="max-h-64">
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Mumbai">Mumbai</SelectItem>
                  <SelectItem value="Bangalore">Bangalore</SelectItem>
                  <SelectItem value="Kolkata">Kolkata</SelectItem>
                  <SelectItem value="Chennai">Chennai</SelectItem>
                  <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="Pune">Pune</SelectItem>
                  <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                  <SelectItem value="Jaipur">Jaipur</SelectItem>
                  <SelectItem value="Chandigarh">Chandigarh</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 3. Travel Date */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">Travel Date</label>
              <input
                type="date"
                value={searchData.travelDate}
                onChange={(e) => handleInputChange('travelDate', e.target.value)}
                className="w-full h-10 px-3 rounded-lg border border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none transition-colors text-sm"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* 4. No. of Pax */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">Travelers</label>
              <Select 
                value={searchData.pax} 
                onValueChange={(value) => handleInputChange('pax', value)}
              >
                <SelectTrigger className="h-10 rounded-lg border border-gray-300 hover:border-blue-500 focus:border-blue-500 transition-colors">
                  <SelectValue placeholder="People" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Person</SelectItem>
                  <SelectItem value="2">2 People</SelectItem>
                  <SelectItem value="3">3 People</SelectItem>
                  <SelectItem value="4">4 People</SelectItem>
                  <SelectItem value="5">5 People</SelectItem>
                  <SelectItem value="6">6 People</SelectItem>
                  <SelectItem value="7+">7+ People</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 5. Trip Duration */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-600">Duration</label>
              <Select 
                value={searchData.duration} 
                onValueChange={(value) => handleInputChange('duration', value)}
              >
                <SelectTrigger className="h-10 rounded-lg border border-gray-300 hover:border-blue-500 focus:border-blue-500 transition-colors">
                  <SelectValue placeholder="Days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-3">2-3 Days</SelectItem>
                  <SelectItem value="4-5">4-5 Days</SelectItem>
                  <SelectItem value="6-7">6-7 Days</SelectItem>
                  <SelectItem value="8-10">8-10 Days</SelectItem>
                  <SelectItem value="11+">11+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Button - Now inside grid on large screens */}
          <div className="col-span-1 md:col-span-3 lg:col-span-1 flex items-end">
            <Button
              type="submit"
              className="w-full h-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
