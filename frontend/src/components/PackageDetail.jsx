import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { MapPin, Clock, Users, Star, Phone, Mail, Calendar, Check, X } from 'lucide-react';
import RazorpayCheckout from './RazorpayCheckout';
import SimpleEnquiryForm from './SimpleEnquiryForm';

const PackageDetail = () => {
  const { packageSlug } = useParams();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [packageData, setPackageData] = useState(null);

  // Package database - this would typically come from an API
  const packageDatabase = {
    'kashmir-honeymoon-5n6d': {
      title: 'Kashmir Honeymoon Special',
      duration: '5 Nights / 6 Days',
      price: 'Price on Demand',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d',
      highlights: [
        'Shikara ride in Dal Lake',
        'Romantic houseboat stay',
        'Gulmarg cable car ride',
        'Pahalgam sightseeing',
        'Mughal gardens visit'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Srinagar',
          description: 'Airport pickup and transfer to houseboat. Evening Shikara ride on Dal Lake. Overnight stay in houseboat.'
        },
        {
          day: 2,
          title: 'Srinagar Local Sightseeing',
          description: 'Visit Mughal Gardens - Nishat, Shalimar, Chashme Shahi. Explore local markets. Overnight in Srinagar.'
        },
        {
          day: 3,
          title: 'Srinagar to Gulmarg',
          description: 'Drive to Gulmarg. Gondola cable car ride to Khilanmarg. Enjoy snow activities. Overnight in Gulmarg.'
        },
        {
          day: 4,
          title: 'Gulmarg to Pahalgam',
          description: 'Scenic drive to Pahalgam via Anantnag. Visit Betaab Valley and Aru Valley. Overnight in Pahalgam.'
        },
        {
          day: 5,
          title: 'Pahalgam Sightseeing',
          description: 'Full day exploring Pahalgam. Visit Chandanwari and enjoy river rafting. Shopping time. Overnight stay.'
        },
        {
          day: 6,
          title: 'Departure',
          description: 'Check out and drive to Srinagar airport for departure flight. End of memorable Kashmir honeymoon.'
        }
      ],
      inclusions: [
        'Accommodation in premium hotels/houseboats',
        'Daily breakfast and dinner',
        'Private cab for all transfers and sightseeing',
        'Shikara ride in Dal Lake',
        'Gondola cable car tickets',
        'All permits and toll taxes'
      ],
      exclusions: [
        'Airfare to/from destination',
        'Lunch during the trip',
        'Personal expenses and shopping',
        'Travel insurance',
        'Tips to driver and guide',
        'Any activity not mentioned in inclusions'
      ],
      hotels: [
        {
          location: 'Srinagar',
          name: 'Premium Houseboat',
          category: '4-Star',
          amenities: ['AC Rooms', 'Attached Bath', 'Room Service', 'WiFi']
        },
        {
          location: 'Gulmarg',
          name: 'Hotel Highlands Park or Similar',
          category: '3-Star',
          amenities: ['Heater', 'Restaurant', 'Room Service', 'Mountain View']
        },
        {
          location: 'Pahalgam',
          name: 'Hotel Heevan or Similar',
          category: '3-Star',
          amenities: ['Valley View', 'Restaurant', 'WiFi', 'Travel Desk']
        }
      ]
    },
    'manali-honeymoon-4n5d': {
      title: 'Manali Honeymoon Delight',
      duration: '4 Nights / 5 Days',
      price: '₹25,999',
      rating: 4.7,
      reviews: 203,
      image: 'https://images.pexels.com/photos/2961109/pexels-photo-2961109.jpeg',
      highlights: [
        'Rohtang Pass adventure',
        'Solang Valley activities',
        'Old Manali exploration',
        'Hadimba Temple visit',
        'Mall Road shopping'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Manali',
          description: 'Arrive in Manali, check-in to hotel. Evening visit to Mall Road for shopping and local cuisine. Overnight stay in Manali.'
        },
        {
          day: 2,
          title: 'Manali Local Sightseeing',
          description: 'Visit Hadimba Temple, Manu Temple, Vashisht Hot Springs. Explore Old Manali and Club House. Overnight in Manali.'
        },
        {
          day: 3,
          title: 'Solang Valley Excursion',
          description: 'Full day at Solang Valley. Enjoy paragliding, zorbing, and other adventure activities. Evening at leisure. Overnight stay.'
        },
        {
          day: 4,
          title: 'Rohtang Pass (Subject to Weather)',
          description: 'Excursion to Rohtang Pass. Enjoy snow activities and scenic views. Return to Manali. Evening free for shopping.'
        },
        {
          day: 5,
          title: 'Departure',
          description: 'Check out from hotel. Transfer to Manali bus stand or airport for onward journey. End of memorable trip.'
        }
      ],
      inclusions: [
        'Accommodation in 3/4-star hotel',
        'Daily breakfast',
        'Private cab for sightseeing',
        'Driver allowances and toll taxes',
        'All applicable taxes'
      ],
      exclusions: [
        'Airfare/train fare',
        'Lunch and dinner',
        'Personal expenses',
        'Adventure activities charges',
        'Travel insurance',
        'Tips and gratuities'
      ],
      hotels: [
        {
          location: 'Manali',
          name: 'Hotel Snow Valley or Similar',
          category: '3-Star',
          amenities: ['Mountain View', 'Restaurant', 'Room Service', 'WiFi', 'Heater']
        }
      ]
    }
  };

  useEffect(() => {
    const data = packageDatabase[packageSlug];
    if (data) {
      setPackageData(data);
    }
  }, [packageSlug]);

  if (!packageData) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Package Not Found</h1>
          <p className="text-gray-600 mt-4">The requested package could not be found.</p>
          <Button 
            onClick={() => window.history.back()}
            className="mt-6 bg-blue-600 hover:bg-blue-700"
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${packageData.image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{packageData.title}</h1>
            <p className="text-xl mb-4">{packageData.duration}</p>
            <div className="flex items-center justify-center space-x-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
                {packageData.price}
              </span>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1">{packageData.rating} ({packageData.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Package Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Highlights</h2>
              <div className="grid md:grid-cols-2 gap-2">
                {packageData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-wise Itinerary */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Day-wise Itinerary</h2>
              <Accordion type="single" collapsible className="w-full">
                {packageData.itinerary.map((day) => (
                  <AccordionItem key={day.day} value={`day-${day.day}`}>
                    <AccordionTrigger className="text-left">
                      <div>
                        <span className="font-semibold">Day {day.day}:</span> {day.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{day.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  Inclusions
                </h3>
                <ul className="space-y-2">
                  {packageData.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <X className="h-5 w-5 text-red-500 mr-2" />
                  Exclusions
                </h3>
                <ul className="space-y-2">
                  {packageData.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hotel Details */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hotel Details</h2>
              <div className="space-y-4">
                {packageData.hotels.map((hotel, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-800">{hotel.name}</h3>
                        <p className="text-gray-600">{hotel.location} - {hotel.category}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {packageData.price}
                </div>
                <p className="text-gray-600">per couple</p>
              </div>

              <div className="space-y-4">
                {/* Book Package Button */}
                <RazorpayCheckout
                  amount={50000} // Default amount for booking
                  name="Customer"
                  email="customer@example.com"
                  phone="9999999999"
                  packageName={packageData.title}
                >
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 text-lg font-bold">
                    💳 Book This Package
                  </Button>
                </RazorpayCheckout>

                {/* Send Enquiry Button */}
                <Button 
                  variant="outline"
                  className="w-full py-3"
                  onClick={() => setShowEnquiryForm(true)}
                >
                  📧 Send Enquiry
                </Button>

                {/* Contact Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/918679333355?text=Hi!%20I'm%20interested%20in%20the%20Kashmir%20Honeymoon%20package.%20Please%20share%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full text-sm">
                      <Phone className="h-4 w-4 mr-1" />
                      WhatsApp
                    </Button>
                  </a>
                  <Button variant="outline" className="w-full text-sm">
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </Button>
                </div>
              </div>

              {/* Package Info */}
              <div className="mt-6 pt-6 border-t space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Duration: {packageData.duration}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Best Time: March to June, Sept to Nov
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Ideal for: Couples, Honeymoon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <SimpleEnquiryForm
              packageTitle={packageData.title}
              onClose={() => setShowEnquiryForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetail;