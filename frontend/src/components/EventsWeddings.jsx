import React, { useState } from 'react';
import { Heart, Users, MapPin, Star, Send, Phone, Mail, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import SEOHead from './SEOHead';

const EventsWeddings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    venue: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'm interested in wedding/event planning services.
    
Details:
- Name: ${formData.name}
- Event Type: ${formData.eventType}
- Date: ${formData.eventDate}
- Guests: ${formData.guestCount}
- Budget: ${formData.budget}
- Venue Preference: ${formData.venue}
- Message: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/918679333354?text=${encodedMessage}`, '_blank');
  };

  const destinations = [
    {
      name: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1620720970374-5b7e67e1e610",
      description: "Mountain weddings in Manali, Shimla, and Dharamshala with stunning Himalayan backdrops."
    },
    {
      name: "Rajasthan", 
      image: "https://images.unsplash.com/photo-1599661046289-e31897b6a1ba",
      description: "Royal palace weddings in Udaipur, Jaipur, and Jaisalmer with regal elegance."
    },
    {
      name: "Goa",
      image: "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg",
      description: "Beach weddings with golden sands, ocean views, and tropical paradise vibes."
    },
    {
      name: "Kerala",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      description: "Backwater weddings with traditional houseboats and lush green landscapes."
    }
  ];

  const corporateServices = [
    {
      title: "Conferences & Seminars",
      description: "Professional venues with state-of-the-art facilities for corporate meetings.",
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Team Building Retreats", 
      description: "Inspiring getaways in scenic locations to strengthen team bonds.",
      icon: <Heart className="h-8 w-8 text-blue-600" />
    },
    {
      title: "MICE Tourism",
      description: "Meetings, Incentives, Conferences & Events with complete arrangements.",
      icon: <MapPin className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Product Launches",
      description: "Grand launch events with media management and venue coordination.",
      icon: <Star className="h-8 w-8 text-blue-600" />
    }
  ];

  const whyChooseUs = [
    "15+ years of experience in destination weddings",
    "Expert team of wedding planners and coordinators", 
    "Vendor network across India for best deals",
    "Complete event management from planning to execution",
    "Customized packages within your budget",
    "24/7 support during your special day"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Destination Weddings & Corporate Events | Pretty Planet Travels"
        description="Plan your dream destination wedding or corporate event with Pretty Planet Travels. Expert wedding planners for Himachal, Rajasthan, Goa, Kerala. MICE tourism & event management services."
        keywords="destination weddings, corporate events, wedding planner, MICE tourism, Himachal wedding, Rajasthan wedding, Goa wedding, Kerala wedding, event management"
        canonicalUrl="/events-weddings"
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1726508684402-ee6029833696)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-800/20 to-transparent"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Destination Weddings &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300"> Events</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white font-semibold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
            Make your wedding & events unforgettable with Pretty Planet Travels
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold"
            onClick={() => document.getElementById('enquiry').scrollIntoView({ behavior: 'smooth' })}
          >
            Plan Your Event
          </Button>
        </div>
      </section>

      {/* Destination Weddings */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Destination Weddings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From the serene Himalayas to the royal palaces of Rajasthan, we plan breathtaking 
              weddings in India's most stunning locations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">{destination.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Events */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Corporate Events & MICE</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We organize seamless corporate events including conferences, retreats, 
              team building, and MICE tourism across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateServices.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Pretty Planet for Your Events?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-blue-100 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Event Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Glimpse of beautiful weddings and corporate events we've organized
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1726508684402-ee6029833696",
              "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg", 
              "https://images.unsplash.com/photo-1507915977619-6ccfe8003ae6",
              "https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg",
              "https://images.unsplash.com/photo-1723832347953-83c28e2d4dd2",
              "https://images.unsplash.com/photo-1561489396-888724a1543d",
              "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg",
              "https://images.unsplash.com/photo-1726682811289-968611755fca"
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Plan Your Perfect Event</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tell us about your dream event and we'll make it happen!
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Event Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('eventType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="destination-wedding">Destination Wedding</SelectItem>
                        <SelectItem value="corporate-event">Corporate Event</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="team-retreat">Team Retreat</SelectItem>
                        <SelectItem value="product-launch">Product Launch</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guestCount">Guest Count</Label>
                    <Input
                      id="guestCount"
                      value={formData.guestCount}
                      onChange={(e) => handleInputChange('guestCount', e.target.value)}
                      placeholder="Approx number of guests"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Budget Range</Label>
                    <Select onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5L">Under ₹5 Lakhs</SelectItem>
                        <SelectItem value="5L-10L">₹5-10 Lakhs</SelectItem>
                        <SelectItem value="10L-25L">₹10-25 Lakhs</SelectItem>
                        <SelectItem value="25L-50L">₹25-50 Lakhs</SelectItem>
                        <SelectItem value="above-50L">Above ₹50 Lakhs</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="venue">Preferred Venue/Location</Label>
                  <Input
                    id="venue"
                    value={formData.venue}
                    onChange={(e) => handleInputChange('venue', e.target.value)}
                    placeholder="e.g., Himachal Pradesh, Rajasthan, Goa, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your event vision *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Describe your dream event, special requirements, themes, or any specific details..."
                    required
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit"
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send WhatsApp Enquiry
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => window.open('tel:+918679333354')}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-600">
                  <p>Our event planning experts will contact you within 24 hours</p>
                  <p>📧 events.prettyplanettravels@gmail.com | 📞 +91 8679333354</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default EventsWeddings;