import React, { useState } from 'react';
import { Star, Clock, Users, MapPin, Heart, Filter } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { mockPackages } from '../data/mockData';

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [favorites, setFavorites] = useState(new Set());

  const categories = ['All', 'Luxury', 'Honeymoon', 'Family', 'Adventure', 'Cultural'];
  
  const filteredPackages = activeFilter === 'All' 
    ? mockPackages 
    : mockPackages.filter(pkg => pkg.category === activeFilter);

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
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
    <section id="packages" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-6">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Popular Packages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked collection of extraordinary experiences, 
            carefully crafted to create memories that last a lifetime.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-white rounded-full p-2 shadow-lg">
            <Filter className="h-5 w-5 text-gray-500 ml-3" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-6 transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-blue-900 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <Card key={pkg.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(pkg.category)} text-white border-0 px-3 py-1 font-semibold`}>
                      {pkg.category}
                    </Badge>
                  </div>
                  
                  {/* Favorite Button */}
                  <button 
                    onClick={() => toggleFavorite(pkg.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/30"
                  >
                    <Heart 
                      className={`h-5 w-5 transition-colors ${
                        favorites.has(pkg.id) ? 'text-red-500 fill-current' : 'text-white'
                      }`} 
                    />
                  </button>
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white rounded-lg p-3 shadow-lg">
                      <div className="text-2xl font-bold text-blue-900">{pkg.price}</div>
                      {pkg.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{pkg.originalPrice}</div>
                      )}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  {/* Rating and Reviews */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="font-semibold text-gray-900">{pkg.rating}</span>
                      <span className="text-gray-500">({pkg.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {pkg.duration}
                    </div>
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-blue-50 text-blue-700 border border-blue-200">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white group-hover:shadow-lg transition-all duration-300">
                    View Details
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8"
          >
            Load More Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;