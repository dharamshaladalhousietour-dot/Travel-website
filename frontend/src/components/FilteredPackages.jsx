import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Star, Clock, MapPin, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { mockPackages } from '../data/mockData';

const FilteredPackages = () => {
  const [searchParams] = useSearchParams();
  const destinationQuery = searchParams.get('destination') || '';
  const [expandedItinerary, setExpandedItinerary] = useState(null);

  // Filter packages based on destination (case-insensitive, partial match)
  const filteredPackages = mockPackages.filter(pkg => {
    if (!destinationQuery) return true;
    
    const query = destinationQuery.toLowerCase();
    const title = pkg.title.toLowerCase();
    const description = pkg.description?.toLowerCase() || '';
    const highlights = pkg.highlights?.join(' ').toLowerCase() || '';
    
    return title.includes(query) || 
           description.includes(query) || 
           highlights.includes(query);
  });

  const toggleItinerary = (id) => {
    setExpandedItinerary(expandedItinerary === id ? null : id);
  };

  const getCategoryColor = (category) => {
    const colors = {
      Luxury: 'bg-gradient-to-r from-purple-500 to-purple-600',
      Honeymoon: 'bg-gradient-to-r from-rose-500 to-rose-600',
      Family: 'bg-gradient-to-r from-green-500 to-green-600',
      Adventure: 'bg-gradient-to-r from-orange-500 to-orange-600',
      Cultural: 'bg-gradient-to-r from-indigo-500 to-indigo-600'
    };
    return colors[category] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-6">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            {destinationQuery ? `Packages for ${destinationQuery}` : 'All Packages'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {filteredPackages.length > 0 
              ? `Found ${filteredPackages.length} package${filteredPackages.length > 1 ? 's' : ''} matching your search`
              : 'Discover our handpicked collection of extraordinary experiences'}
          </p>
        </div>

        {/* No Results Message */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <MapPin className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              No packages found for this destination.
            </h3>
            <p className="text-gray-600 mb-8">
              Try searching for a different destination or browse all our packages.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white"
            >
              ← Back to Home
            </Button>
          </div>
        )}

        {/* Package Cards Grid */}
        {filteredPackages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white"
              >
                {/* Package Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(pkg.category)} text-white px-3 py-1 text-sm font-semibold shadow-lg`}>
                      {pkg.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
                      <Heart className="h-5 w-5 text-rose-500" />
                    </button>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="ml-1 text-sm font-semibold text-gray-700">{pkg.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({pkg.reviews} reviews)</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {pkg.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Hotels */}
                  {pkg.hotels && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                        🏨 Hotels (3★)
                      </p>
                      <div className="text-xs text-gray-600 space-y-1">
                        {Object.entries(pkg.hotels).map(([location, hotel], idx) => (
                          <p key={idx}>
                            <span className="font-medium capitalize">{location}:</span> {hotel}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                    <span className="text-sm text-gray-400 line-through">{pkg.originalPrice}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button 
                      onClick={() => toggleItinerary(pkg.id)}
                      variant="outline"
                      className="w-full border-blue-900 text-blue-900 hover:bg-blue-50"
                    >
                      {expandedItinerary === pkg.id ? 'Hide Details' : 'View Details'}
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        onClick={() => {
                          const message = `Hi! I'm interested in ${pkg.title}`;
                          window.open(`https://wa.me/918679333355?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                        className="bg-green-600 hover:bg-green-700 text-white text-sm"
                      >
                        Call Now
                      </Button>
                      <Button 
                        className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white text-sm"
                      >
                        View Itinerary
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Itinerary */}
                  {expandedItinerary === pkg.id && pkg.itinerary && (
                    <div className="mt-6 pt-6 border-t border-gray-200 space-y-4 animate-fadeIn">
                      {/* Day-wise Itinerary */}
                      <div>
                        <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                          🗓️ Day-wise Itinerary
                        </h4>
                        <div className="space-y-2">
                          {pkg.itinerary.map((day) => (
                            <div key={day.day} className="text-sm">
                              <span className="font-semibold text-gray-700">Day {day.day}: {day.title}</span>
                              <p className="text-gray-600 ml-4">{day.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Inclusions & Exclusions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pkg.inclusions && (
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2 flex items-center gap-1">
                              ✅ Inclusions
                            </h5>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {pkg.inclusions.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {pkg.exclusions && (
                          <div>
                            <h5 className="font-semibold text-red-700 mb-2 flex items-center gap-1">
                              ❌ Exclusions
                            </h5>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {pkg.exclusions.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FilteredPackages;
