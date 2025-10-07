import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Download, Send, Mail, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const TourPackages = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');

  // All packages data based on the HTML files
  const tourPackages = [
    // Kashmir
    { 
      id: 1, 
      title: "Kashmir Honeymoon Special", 
      duration: "5 Nights / 6 Days", 
      region: "Kashmir", 
      slug: "kashmir-honeymoon-5n6d",
      image: "https://source.unsplash.com/600x400/?kashmir,dal-lake"
    },
    { 
      id: 2, 
      title: "Kashmir Short Escape", 
      duration: "4 Nights / 5 Days", 
      region: "Kashmir", 
      slug: "kashmir-short-4n5d",
      image: "https://source.unsplash.com/600x400/?srinagar,houseboat"
    },
    
    // Himachal
    { 
      id: 3, 
      title: "Dalhousie Short Break", 
      duration: "2 Nights / 3 Days", 
      region: "Himachal", 
      slug: "dalhousie-2n3d",
      image: "https://source.unsplash.com/600x400/?dalhousie,himachal"
    },
    { 
      id: 4, 
      title: "Dalhousie Extended Tour", 
      duration: "4 Nights / 5 Days", 
      region: "Himachal", 
      slug: "dalhousie-4n5d",
      image: "https://source.unsplash.com/600x400/?dalhousie,mountains"
    },
    { 
      id: 5, 
      title: "Dharamshala Short Break", 
      duration: "2 Nights / 3 Days", 
      region: "Himachal", 
      slug: "dharamshala-2n3d",
      image: "https://source.unsplash.com/600x400/?dharamshala,mcleodganj"
    },
    { 
      id: 6, 
      title: "Dharamshala Extended Tour", 
      duration: "4 Nights / 5 Days", 
      region: "Himachal", 
      slug: "dharamshala-4n5d",
      image: "https://source.unsplash.com/600x400/?dharamshala,tibet"
    },
    { 
      id: 7, 
      title: "Dharamshala Spiritual Retreat", 
      duration: "3 Nights / 4 Days", 
      region: "Himachal", 
      slug: "dharamshala-spiritual-3n4d",
      image: "https://source.unsplash.com/600x400/?dharamshala,monastery"
    },
    { 
      id: 8, 
      title: "Kasol & Manikaran Short Break", 
      duration: "2 Nights / 3 Days", 
      region: "Himachal", 
      slug: "kasol-manikaran-2n3d",
      image: "https://source.unsplash.com/600x400/?kasol,parvati"
    },
    { 
      id: 9, 
      title: "Manali Adventure Tour", 
      duration: "4 Nights / 5 Days", 
      region: "Himachal", 
      slug: "manali-adventure-4n5d",
      image: "https://source.unsplash.com/600x400/?manali,adventure"
    },
    { 
      id: 10, 
      title: "Manali Family Package", 
      duration: "4 Nights / 5 Days", 
      region: "Himachal", 
      slug: "manali-family-4n5d",
      image: "https://source.unsplash.com/600x400/?manali,family"
    },
    { 
      id: 11, 
      title: "Manali Honeymoon Delight", 
      duration: "4 Nights / 5 Days", 
      region: "Himachal", 
      slug: "manali-honeymoon-4n5d",
      image: "https://source.unsplash.com/600x400/?manali,honeymoon"
    },
    { 
      id: 12, 
      title: "Manali with Kasol Combo", 
      duration: "5 Nights / 6 Days", 
      region: "Himachal", 
      slug: "manali-kasol-5n6d",
      image: "https://source.unsplash.com/600x400/?manali,kasol"
    },
    { 
      id: 13, 
      title: "Shimla Weekend Getaway", 
      duration: "2 Nights / 3 Days", 
      region: "Himachal", 
      slug: "shimla-weekend-2n3d",
      image: "https://source.unsplash.com/600x400/?shimla,toy-train"
    },
    { 
      id: 14, 
      title: "Spiti Valley Adventure", 
      duration: "7 Nights / 8 Days", 
      region: "Himachal", 
      slug: "spiti-valley-7n8d",
      image: "https://source.unsplash.com/600x400/?spiti,ladakh"
    },
    { 
      id: 15, 
      title: "Triund Trek Weekend", 
      duration: "2 Nights / 3 Days", 
      region: "Himachal", 
      slug: "triund-trek-2n3d",
      image: "https://source.unsplash.com/600x400/?triund,trek"
    },
    
    // Rajasthan
    { 
      id: 16, 
      title: "Jaipur Ajmer Pushkar Tour", 
      duration: "4 Nights / 5 Days", 
      region: "Rajasthan", 
      slug: "jaipur-ajmer-pushkar-4n5d",
      image: "https://source.unsplash.com/600x400/?jaipur,pushkar"
    },
    { 
      id: 17, 
      title: "Jaisalmer Desert Safari", 
      duration: "3 Nights / 4 Days", 
      region: "Rajasthan", 
      slug: "jaisalmer-desert-3n4d",
      image: "https://source.unsplash.com/600x400/?jaisalmer,desert"
    },
    { 
      id: 18, 
      title: "Udaipur Romantic Getaway", 
      duration: "3 Nights / 4 Days", 
      region: "Rajasthan", 
      slug: "udaipur-romantic-3n4d",
      image: "https://source.unsplash.com/600x400/?udaipur,romantic"
    },
    
    // Uttarakhand
    { 
      id: 19, 
      title: "Mussoorie Hill Station Tour", 
      duration: "3 Nights / 4 Days", 
      region: "Uttarakhand", 
      slug: "mussoorie-3n4d",
      image: "https://source.unsplash.com/600x400/?mussoorie,hills"
    },
    { 
      id: 20, 
      title: "Nainital Honeymoon Special", 
      duration: "4 Nights / 5 Days", 
      region: "Uttarakhand", 
      slug: "nainital-honeymoon-4n5d",
      image: "https://source.unsplash.com/600x400/?nainital,lake"
    },
    { 
      id: 21, 
      title: "Rishikesh Yoga & Adventure", 
      duration: "3 Nights / 4 Days", 
      region: "Uttarakhand", 
      slug: "rishikesh-yoga-3n4d",
      image: "https://source.unsplash.com/600x400/?rishikesh,ganga"
    },
    
    // South India
    { 
      id: 22, 
      title: "Kerala – Munnar & Backwaters", 
      duration: "5 Nights / 6 Days", 
      region: "South India", 
      slug: "kerala-munnar-backwaters-5n6d",
      image: "https://source.unsplash.com/600x400/?kerala,backwaters"
    },
    { 
      id: 23, 
      title: "Ooty Mysore Coorg Triangle", 
      duration: "5 Nights / 6 Days", 
      region: "South India", 
      slug: "ooty-mysore-coorg-5n6d",
      image: "https://source.unsplash.com/600x400/?ooty,coorg"
    }
  ];

  const regions = ['All', 'Kashmir', 'Himachal', 'Rajasthan', 'Uttarakhand', 'South India'];
  
  const filteredPackages = selectedRegion === 'All' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.region === selectedRegion);

  // Contact form handlers
  const handleWhatsAppEnquiry = (packageTitle) => {
    const message = `Hi! I'm interested in the "${packageTitle}" package. Please share more details.`;
    const whatsappUrl = `https://wa.me/918679333355?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailEnquiry = (packageTitle) => {
    const subject = `Enquiry for ${packageTitle}`;
    const body = `Hi,\n\nI'm interested in the "${packageTitle}" package. Please share more details including itinerary, pricing, and availability.\n\nThanks!`;
    const emailUrl = `mailto:info@prettyplanettravels.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
  };

  const PackageCard = ({ pkg }) => {
    return (
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
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
            <Badge className="bg-green-600 text-white">Price on Demand</Badge>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {pkg.duration}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-blue-900 mb-4">{pkg.title}</h3>
          
          <div className="space-y-3">
            <Link to={`/tour-packages/${pkg.slug}`}>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
              >
                View Details
              </Button>
            </Link>
            
            <div className="flex space-x-2">
              <Button 
                onClick={() => handleEmailEnquiry(pkg.title)}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Enquiry
              </Button>
              <Button 
                onClick={() => handleWhatsAppEnquiry(pkg.title)}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                <Send className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full border-gray-300 hover:bg-gray-50"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="text-center mb-16 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-6">
          <MapPin className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          All Tour Packages
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore our handcrafted tour packages across Kashmir, Himachal Pradesh, 
          Rajasthan, Uttarakhand, and South India. Best travel agent in Dharamshala & Himachal.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
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

        {/* Packages by Region */}
        {regions.filter(r => r !== 'All').map(region => {
          const regionPackages = tourPackages.filter(pkg => pkg.region === region);
          if (selectedRegion !== 'All' && selectedRegion !== region) return null;
          
          return (
            <div key={region} className="mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">{region}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regionPackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          );
        })}

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
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8"
              onClick={() => handleEmailEnquiry('Custom Package Request')}
            >
              Custom Package Request
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8"
              onClick={() => handleWhatsAppEnquiry('Talk to Expert')}
            >
              Talk to Expert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;