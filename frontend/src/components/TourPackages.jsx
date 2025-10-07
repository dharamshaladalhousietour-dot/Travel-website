import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Download, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const TourPackages = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const tourPackages = [
    // Kashmir
    {
      id: 1,
      title: "Kashmir Honeymoon Special",
      duration: "5 Nights / 6 Days",
      region: "Kashmir",
      image: "https://images.unsplash.com/photo-1708179070772-abf3a1d16b74",
      highlights: ["Houseboats", "Shikara Rides", "Gulmarg Snow", "Pahalgam Valley"],
      itinerary: [
        { day: 1, title: "Arrival Srinagar", description: "Airport pickup, Dal Lake evening walk" },
        { day: 2, title: "Srinagar Local", description: "Mughal Gardens, Houseboat stay" },
        { day: 3, title: "Gulmarg Day Trip", description: "Gondola ride, snow activities" },
        { day: 4, title: "Pahalgam Excursion", description: "Betaab Valley, Aru Valley" },
        { day: 5, title: "Shopping & Leisure", description: "Local markets, last minute shopping" },
        { day: 6, title: "Departure", description: "Checkout and airport drop" }
      ],
      inclusions: ["Accommodation", "Transfers", "Breakfast", "Sightseeing"],
      exclusions: ["Flights", "Lunch/Dinner", "Personal Expenses", "Adventure Activities"],
      price: "Price on Demand",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      title: "Kashmir Short Escape", 
      duration: "4 Nights / 5 Days",
      region: "Kashmir",
      image: "https://images.unsplash.com/photo-1708186320869-0a527e67023d",
      highlights: ["Dal Lake", "Gulmarg", "Local Markets", "Shikara Rides"],
      itinerary: [
        { day: 1, title: "Arrival Srinagar", description: "Airport pickup, hotel check-in" },
        { day: 2, title: "Srinagar Sightseeing", description: "Mughal Gardens, Dal Lake" },
        { day: 3, title: "Gulmarg Day Trip", description: "Cable car ride, scenic views" },
        { day: 4, title: "Local Exploration", description: "Markets, handicrafts shopping" },
        { day: 5, title: "Departure", description: "Checkout and airport transfer" }
      ],
      inclusions: ["Hotels", "Transfers", "Breakfast", "Sightseeing"],
      exclusions: ["Airfare", "Meals", "Personal Expenses"],
      price: "Price on Demand",
      rating: 4.7,
      reviews: 89
    },
    
    // Himachal
    {
      id: 3,
      title: "Manali Honeymoon Delight",
      duration: "4 Nights / 5 Days", 
      region: "Himachal",
      image: "https://images.unsplash.com/photo-1620720970374-5b7e67e1e610",
      highlights: ["Solang Valley", "Atal Tunnel", "Hadimba Temple", "Mall Road"],
      itinerary: [
        { day: 1, title: "Arrival Manali", description: "Private transfer & check-in; evening Mall Road" },
        { day: 2, title: "Romantic Solang", description: "Solang Valley day trip; candle-light dinner" },
        { day: 3, title: "Atal Tunnel & Sissu", description: "Photo stops at Sissu (weather permitting)" },
        { day: 4, title: "Manali Local", description: "Hadimba Temple, Old Manali cafés" },
        { day: 5, title: "Departure", description: "Checkout & drop" }
      ],
      inclusions: ["Accommodation", "Transfers", "Breakfast", "Sightseeing"],
      exclusions: ["Flights", "Lunch/Dinner", "Adventure Activities"],
      price: "Price on Demand",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 4,
      title: "Shimla Weekend Getaway",
      duration: "2 Nights / 3 Days",
      region: "Himachal", 
      image: "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2",
      highlights: ["Toy Train", "Mall Road", "Jakhu Temple", "Ridge Walk"],
      itinerary: [
        { day: 1, title: "Arrival Shimla", description: "Check-in, evening Mall Road walk" },
        { day: 2, title: "Shimla Sightseeing", description: "Jakhu Temple, Ridge, local markets" },
        { day: 3, title: "Departure", description: "Checkout and departure" }
      ],
      inclusions: ["Hotels", "Transfers", "Breakfast", "Sightseeing"],
      exclusions: ["Transport to Shimla", "Meals", "Personal Expenses"],
      price: "Price on Demand",
      rating: 4.6,
      reviews: 78
    },
    
    // Rajasthan
    {
      id: 5,
      title: "Jaipur Ajmer Pushkar Tour",
      duration: "4 Nights / 5 Days",
      region: "Rajasthan",
      image: "https://images.unsplash.com/photo-1599661046289-e31897b6a1ba",
      highlights: ["Pink City", "Ajmer Sharif", "Pushkar Lake", "Amber Fort"],
      itinerary: [
        { day: 1, title: "Arrival Jaipur", description: "Airport pickup, city introduction" },
        { day: 2, title: "Jaipur Sightseeing", description: "Amber Fort, City Palace, Hawa Mahal" },
        { day: 3, title: "Ajmer Excursion", description: "Ajmer Sharif Dargah visit" },
        { day: 4, title: "Pushkar Day Trip", description: "Pushkar Lake, Brahma Temple" },
        { day: 5, title: "Departure", description: "Shopping and departure" }
      ],
      inclusions: ["Accommodation", "Transfers", "Breakfast", "Sightseeing"],
      exclusions: ["Flights", "Meals", "Personal Expenses"],
      price: "Price on Demand",
      rating: 4.8,
      reviews: 102
    },
    
    // Uttarakhand  
    {
      id: 6,
      title: "Rishikesh Yoga & Adventure",
      duration: "3 Nights / 4 Days",
      region: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      highlights: ["River Rafting", "Yoga Sessions", "Ganga Aarti", "Beatles Ashram"],
      itinerary: [
        { day: 1, title: "Arrival Rishikesh", description: "Check-in, Ganga Aarti evening" },
        { day: 2, title: "Adventure Day", description: "River rafting, bungee jumping" },
        { day: 3, title: "Spiritual Experience", description: "Yoga session, Beatles Ashram visit" },
        { day: 4, title: "Departure", description: "Morning yoga, checkout" }
      ],
      inclusions: ["Hotels", "Transfers", "Breakfast", "Activities"],
      exclusions: ["Transport to Rishikesh", "Meals", "Personal Expenses"],
      price: "Price on Demand", 
      rating: 4.7,
      reviews: 91
    }
  ];

  const regions = ['All', 'Kashmir', 'Himachal', 'Rajasthan', 'Uttarakhand', 'South India'];
  
  const filteredPackages = selectedRegion === 'All' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.region === selectedRegion);

  const PackageCard = ({ pkg }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative">
          <img 
            src={pkg.image} 
            alt={pkg.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-blue-600 text-white">{pkg.region}</Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-600 text-white">{pkg.price}</Badge>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="font-semibold">{pkg.rating}</span>
              <span className="text-gray-500 text-sm">({pkg.reviews} reviews)</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {pkg.duration}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-blue-900 mb-3">{pkg.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {pkg.highlights.slice(0, 3).map((highlight, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {highlight}
              </Badge>
            ))}
            {pkg.highlights.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{pkg.highlights.length - 3} more
              </Badge>
            )}
          </div>

          <div className="flex space-x-2 mb-4">
            <Button 
              onClick={() => setShowDetails(!showDetails)}
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              {showDetails ? 'Hide Details' : 'View Details'}
            </Button>
            <Button variant="outline" className="flex-1">
              <Send className="h-4 w-4 mr-2" />
              Enquire Now
            </Button>
          </div>

          {showDetails && (
            <div className="border-t pt-4 space-y-4">
              <div>
                <h4 className="font-bold text-green-600 mb-2">Inclusions</h4>
                <ul className="text-sm space-y-1">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-red-600 mb-2">Exclusions</h4>
                <ul className="text-sm space-y-1">
                  {pkg.exclusions.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="itinerary">
                  <AccordionTrigger>Day-wise Itinerary</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {pkg.itinerary.map((day, index) => (
                        <div key={index} className="border-l-2 border-blue-200 pl-4">
                          <h5 className="font-semibold text-blue-900">
                            Day {day.day}: {day.title}
                          </h5>
                          <p className="text-sm text-gray-600">{day.description}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <a 
                    href="https://wa.me/918679333355?text=Hi! I'm interested in the tour package: "
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white no-underline"
                  >
                    WhatsApp Enquiry
                  </a>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="tour-packages" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-6">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Tour Packages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our handcrafted tour packages across Kashmir, Himachal Pradesh, 
            Rajasthan, Uttarakhand, and South India with expert local guidance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-white rounded-full p-2 shadow-lg">
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedRegion(region)}
                className={`rounded-full px-6 transition-all duration-300 ${
                  selectedRegion === region 
                    ? 'bg-blue-900 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50'
                }`}
              >
                {region}
              </Button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Can't Find Your Perfect Trip?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We create custom itineraries tailored to your preferences. Contact our travel experts 
            for a personalized tour package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8">
              Custom Package Request
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8">
              Talk to Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;