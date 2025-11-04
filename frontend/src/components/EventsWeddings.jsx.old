import React, { useState } from 'react';
import { Heart, Users, MapPin, Star, Send, Phone, Mail, Calendar, Mountain, Sparkles, Building2, Award, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

const EventsWeddings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    packageName: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    venue: '',
    message: ''
  });

  // Wedding Packages
  const weddingPackages = [
    {
      id: 1,
      title: "Dharamshala Destination Wedding",
      description: "Celebrate your special day amidst the majestic Dhauladhar ranges with stunning mountain views, traditional Himachali hospitality, and world-class amenities.",
      price: "Starting from ₹8,00,000",
      features: ["Mountain View Venue", "300-500 Guests", "3-Day Celebration", "Professional Photography", "Catering & Decor"],
      image: "/assets/hero-dharamshala.jpg",
      gradient: "from-rose-100 to-pink-100"
    },
    {
      id: 2,
      title: "Mountain View Ceremony",
      description: "Intimate wedding celebrations with breathtaking Himalayan backdrop, perfect for couples seeking a serene and picturesque setting.",
      price: "Starting from ₹5,00,000",
      features: ["Scenic Location", "100-200 Guests", "2-Day Event", "Decor & Styling", "Accommodation Support"],
      image: "/assets/portfolio1.jpg",
      gradient: "from-teal-100 to-cyan-100"
    },
    {
      id: 3,
      title: "Luxury Resort Wedding",
      description: "Premium wedding experience at 5-star resorts in Dharamshala with exquisite cuisine, luxury accommodations, and personalized service.",
      price: "Starting from ₹12,00,000",
      features: ["5-Star Resort", "400-600 Guests", "4-Day Extravaganza", "Luxury Decor", "Spa & Wellness"],
      image: "/assets/portfolio2.jpg",
      gradient: "from-amber-100 to-yellow-100"
    },
    {
      id: 4,
      title: "Intimate Eco Wedding",
      description: "Sustainable and eco-friendly wedding celebrations surrounded by nature, perfect for environmentally conscious couples.",
      price: "Starting from ₹3,50,000",
      features: ["Eco-Friendly Venue", "50-100 Guests", "1-2 Days", "Organic Catering", "Nature-Inspired Decor"],
      image: "/assets/portfolio3.jpg",
      gradient: "from-green-100 to-emerald-100"
    }
  ];

  // Corporate Event Packages
  const corporatePackages = [
    {
      id: 1,
      title: "Product Launch Events",
      description: "Make a grand entrance with professionally organized product launches featuring cutting-edge AV setup, media management, and brand activation.",
      price: "Starting from ₹2,50,000",
      features: ["200-300 Attendees", "AV & Tech Setup", "Media Coverage", "Brand Activation", "Catering & Hospitality"],
      image: "/assets/portfolio4.jpg",
      gradient: "from-blue-100 to-indigo-100"
    },
    {
      id: 2,
      title: "Annual Conference",
      description: "Host impactful corporate conferences with seamless execution, from registration to networking sessions and keynote presentations.",
      price: "Starting from ₹4,00,000",
      features: ["300-500 Delegates", "Multi-Day Event", "Conference Halls", "Tech Support", "F&B Management"],
      image: "/assets/hero-dharamshala.jpg",
      gradient: "from-purple-100 to-violet-100"
    },
    {
      id: 3,
      title: "Team Retreat & Offsite",
      description: "Rejuvenate your team with adventure activities, team-building exercises, and corporate training in scenic Himalayan locations.",
      price: "Starting from ₹1,50,000",
      features: ["50-100 Team Members", "2-3 Days", "Adventure Activities", "Team Building", "Accommodation & Meals"],
      image: "/assets/portfolio1.jpg",
      gradient: "from-orange-100 to-red-100"
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEnquireNow = (packageTitle, packageType) => {
    setFormData(prev => ({
      ...prev,
      packageName: packageTitle,
      eventType: packageType
    }));
    
    // Scroll to form
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const enquiryData = {
        destination: formData.venue || 'Dharamshala/Himachal Pradesh',
        start_date: formData.eventDate || 'TBD',
        end_date: formData.eventDate || 'TBD',
        adults: formData.guestCount || '0',
        kids: '0',
        days: '1',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        budget: formData.budget,
        message: formData.message,
        formatted_message: `Package: ${formData.packageName}\nEvent Type: ${formData.eventType}\nDate: ${formData.eventDate}\nGuests: ${formData.guestCount}\nVenue: ${formData.venue}\nMessage: ${formData.message}`
      };

      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      await fetch(`${backendUrl}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiryData)
      });

      const whatsappMessage = `Hello! I'm interested in ${formData.packageName || 'wedding/event planning'} services.
    
Details:
- Name: ${formData.name}
- Package: ${formData.packageName}
- Event Type: ${formData.eventType}
- Date: ${formData.eventDate}
- Guests: ${formData.guestCount}
- Budget: ${formData.budget}
- Venue: ${formData.venue}
- Message: ${formData.message}`;
      
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/918679333354?text=${encodedMessage}`, '_blank');

      alert('✅ Your enquiry has been submitted! We will contact you soon.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        packageName: '',
        eventDate: '',
        guestCount: '',
        budget: '',
        venue: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('There was an issue submitting your enquiry. Please try again or contact us directly.');
    }
  };

  return (
    <>
      <SEOHead 
        title="Wedding Planners in Dharamshala | Corporate Events Himachal Pradesh | Pretty Planet"
        description="Premier destination wedding planners in Dharamshala and corporate event organizers in Himachal Pradesh. Expert wedding planning, mountain view ceremonies, luxury resort weddings, and professional corporate events."
        keywords="wedding planners Dharamshala, destination wedding Himachal Pradesh, corporate events Dharamshala, mountain wedding ceremony, luxury wedding resort, eco-friendly wedding, product launch events, annual conference organizer, team retreat Himachal"
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-rose-50/30 to-teal-50/30">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-rose-500 to-pink-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-block mb-4">
              <Heart className="h-16 w-16 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Events & Weddings in Dharamshala
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Create Unforgettable Memories in the Heart of the Himalayas
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Mountain className="h-5 w-5" />
                <span>Mountain View Venues</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="h-5 w-5" />
                <span>Award-Winning Planners</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-5 w-5" />
                <span>500+ Happy Couples</span>
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Packages Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                Destination Wedding Packages
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience magical weddings amidst the breathtaking Himalayan landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {weddingPackages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Package Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" fill="%23999" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="20"%3E' + encodeURIComponent(pkg.title) + '%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${pkg.gradient} opacity-40`}></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-rose-600 font-bold text-sm">{pkg.price}</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-[#0D3B66] mb-3">{pkg.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{pkg.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                          <Sparkles className="h-4 w-4 text-teal-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      onClick={() => handleEnquireNow(pkg.title, 'Wedding')}
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold py-3"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Enquire Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Banner */}
        <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-12 w-12 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Plan Your Dream Wedding or Event with Pretty Planet
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Love. Travel. Celebrate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-teal-700 hover:bg-gray-100 font-bold px-8 py-4 text-lg"
              >
                Get Free Consultation
              </Button>
              <Link to="/tour-packages">
                <Button className="bg-rose-500 hover:bg-rose-600 font-bold px-8 py-4 text-lg">
                  Explore Honeymoon Packages
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Corporate Event Packages Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                Corporate Event Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional event management for product launches, conferences, and team retreats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {corporatePackages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e0e0e0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" fill="%23666" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="18"%3E' + encodeURIComponent(pkg.title) + '%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${pkg.gradient} opacity-40`}></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="text-blue-600 font-bold text-xs">{pkg.price}</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="text-xl font-bold text-[#0D3B66]">{pkg.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pkg.description}</p>
                    
                    <div className="space-y-1.5 mb-5">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-700">
                          <Award className="h-3.5 w-3.5 text-blue-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      onClick={() => handleEnquireNow(pkg.title, 'Corporate Event')}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2.5"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Form Section */}
        <section id="enquiry-form" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our event planning experts will contact you within 24 hours
              </p>
            </div>

            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-[#0D3B66] font-semibold mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your name"
                        required
                        className="border-gray-300 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-[#0D3B66] font-semibold mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="border-gray-300 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-[#0D3B66] font-semibold mb-2 block">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 9876543210"
                        required
                        className="border-gray-300 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="eventType" className="text-[#0D3B66] font-semibold mb-2 block">
                        Event Type *
                      </Label>
                      <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-teal-500">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Wedding">Destination Wedding</SelectItem>
                          <SelectItem value="Pre-Wedding">Pre-Wedding Shoot</SelectItem>
                          <SelectItem value="Corporate Event">Corporate Event</SelectItem>
                          <SelectItem value="Product Launch">Product Launch</SelectItem>
                          <SelectItem value="Conference">Annual Conference</SelectItem>
                          <SelectItem value="Team Retreat">Team Retreat</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="eventDate" className="text-[#0D3B66] font-semibold mb-2 block">
                        Event Date
                      </Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange('eventDate', e.target.value)}
                        className="border-gray-300 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="guestCount" className="text-[#0D3B66] font-semibold mb-2 block">
                        Expected Guest Count
                      </Label>
                      <Input
                        id="guestCount"
                        type="text"
                        value={formData.guestCount}
                        onChange={(e) => handleInputChange('guestCount', e.target.value)}
                        placeholder="e.g., 200-300"
                        className="border-gray-300 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-[#0D3B66] font-semibold mb-2 block">
                        Budget Range
                      </Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-teal-500">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="₹3-5 Lakhs">₹3-5 Lakhs</SelectItem>
                          <SelectItem value="₹5-8 Lakhs">₹5-8 Lakhs</SelectItem>
                          <SelectItem value="₹8-12 Lakhs">₹8-12 Lakhs</SelectItem>
                          <SelectItem value="₹12-20 Lakhs">₹12-20 Lakhs</SelectItem>
                          <SelectItem value="₹20+ Lakhs">₹20+ Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="venue" className="text-[#0D3B66] font-semibold mb-2 block">
                        Preferred Venue Location
                      </Label>
                      <Input
                        id="venue"
                        type="text"
                        value={formData.venue}
                        onChange={(e) => handleInputChange('venue', e.target.value)}
                        placeholder="e.g., Dharamshala, McLeod Ganj"
                        className="border-gray-300 focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#0D3B66] font-semibold mb-2 block">
                      Additional Requirements
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us more about your event requirements, preferences, or special requests..."
                      rows={5}
                      className="border-gray-300 focus:border-teal-500"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 text-lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cross-Link Section */}
        <section className="py-12 px-4 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0D3B66] mb-4">
              Planning a Honeymoon After Your Wedding?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Explore our romantic honeymoon packages in Kashmir, Manali, Shimla, and more exotic destinations
            </p>
            <Link to="/tour-packages">
              <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold px-8 py-4 text-lg">
                View Honeymoon Packages
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 px-4 bg-[#0D3B66] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Call Us</h4>
                <p className="text-sm">Events: +91 8679333354</p>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Email Us</h4>
                <p className="text-sm">holidays@prettyplanettravels.com</p>
              </div>
              <div>
                <MapPin className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Visit Us</h4>
                <p className="text-sm">Dharamshala, Himachal Pradesh</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventsWeddings;
