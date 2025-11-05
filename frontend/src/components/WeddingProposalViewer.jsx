import React, { useState } from 'react';
import { X, Heart, Calendar, Users, MapPin, Check, Download, Phone, Mail, ChevronDown, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const WeddingProposalViewer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const proposalData = {
    packageName: "Dharamshala Destination Wedding",
    subtitle: "March 2026 - Premium Package",
    tagline: "Where Love Meets the Himalayas",
    
    // Package Overview
    overview: {
      price: "₹15,00,000",
      guests: "300-350 Guests",
      duration: "3 Days / 2 Nights",
      venue: "Premium Resort, McLeod Ganj, Dharamshala"
    },

    // Detailed Venue Information
    venueDetails: {
      name: "Luxury Mountain Resort, Dharamshala",
      location: "McLeod Ganj, Dharamshala, Himachal Pradesh - 176219",
      capacity: "300-500 guests",
      features: [
        "Panoramic Dhauladhar mountain views",
        "Indoor banquet hall (Air-conditioned, 400 capacity)",
        "Outdoor lawn area (500 capacity)",
        "Dedicated bridal suite with mountain view",
        "30 luxury guest rooms included",
        "Multi-cuisine restaurant on-site",
        "Ample parking for 100+ vehicles",
        "Professional event management team"
      ]
    },

    // Complete 3-Day Schedule
    schedule: [
      {
        day: "Day 1 - Arrival & Mehendi",
        date: "March 15, 2026",
        events: [
          { time: "10:00 AM onwards", event: "Guest arrival and check-in", details: "Welcome drinks and refreshments" },
          { time: "1:00 PM - 3:00 PM", event: "Welcome lunch for all guests", details: "Multi-cuisine buffet" },
          { time: "4:00 PM - 7:00 PM", event: "Mehendi ceremony", details: "Professional mehndi artists, music, and snacks" },
          { time: "8:00 PM - 11:00 PM", event: "Cocktail dinner and entertainment", details: "DJ, dance floor, live music" }
        ]
      },
      {
        day: "Day 2 - Wedding Ceremony",
        date: "March 16, 2026",
        events: [
          { time: "8:00 AM - 10:00 AM", event: "Breakfast for all guests", details: "Continental and Indian breakfast buffet" },
          { time: "10:00 AM - 4:00 PM", event: "Wedding ceremony setup", details: "Mandap decoration, stage setup, seating arrangements" },
          { time: "4:00 PM - 7:00 PM", event: "Main wedding ceremony", details: "Baraat, Varmala, Pheras, and rituals" },
          { time: "7:30 PM - 11:00 PM", event: "Grand reception and dinner", details: "Welcome drinks, entertainment, multi-cuisine dinner buffet" }
        ]
      },
      {
        day: "Day 3 - Farewell",
        date: "March 17, 2026",
        events: [
          { time: "8:00 AM - 10:00 AM", event: "Breakfast for all guests", details: "Relaxed breakfast buffet" },
          { time: "11:00 AM - 1:00 PM", event: "Farewell brunch", details: "Special brunch menu with photo opportunities" },
          { time: "2:00 PM onwards", event: "Guest check-out and departure", details: "Departure assistance" }
        ]
      }
    ],

    // Detailed Inclusions
    inclusionsDetailed: {
      "Venue & Accommodation": [
        "Full venue booking for 3 days (March 15-17, 2026)",
        "30 luxury guest rooms for 2 nights (60 room nights)",
        "Complimentary honeymoon suite with mountain view",
        "Bridal preparation room with amenities",
        "Changing rooms for wedding party"
      ],
      "Food & Beverage": [
        "Welcome lunch - Day 1 (300-350 pax)",
        "Mehendi ceremony snacks and refreshments",
        "Cocktail dinner - Day 1 (300-350 pax)",
        "Breakfast - Day 2 and Day 3 (all guests)",
        "Wedding ceremony refreshments and beverages",
        "Grand reception dinner - Day 2 (300-350 pax)",
        "Farewell brunch - Day 3 (all guests)",
        "All meals: Multi-cuisine Indian, Continental, Chinese"
      ],
      "Décor & Styling": [
        "Professional wedding décor team",
        "Mehendi stage decoration with traditional elements",
        "Main wedding mandap with floral arrangements",
        "Reception stage backdrop and lighting",
        "Entrance gate decoration with flowers",
        "Pathway decoration with floral petals",
        "Table centerpieces and chair covers",
        "Lighting arrangements (uplighting, fairy lights)"
      ],
      "Entertainment & Technology": [
        "Professional DJ for all events",
        "Sound system with wireless microphones",
        "LED screens for presentations",
        "Projector and screen setup",
        "Live music during cocktail hour",
        "Dance floor with lighting effects"
      ],
      "Photography & Videography": [
        "Professional photography team (2 photographers)",
        "Videography team (2 videographers)",
        "Candid photography for all events",
        "Pre-wedding shoot at scenic locations",
        "Drone shots of venue and ceremonies",
        "All edited photos (500+ images)",
        "Wedding film (30-45 minutes cinematic video)",
        "Same-day edit video for reception screening"
      ],
      "Beauty & Grooming": [
        "Professional mehndi artists (2-3 artists)",
        "Bridal makeup and hairstyling",
        "Groom grooming services",
        "Makeup touch-ups during events"
      ],
      "Coordination & Management": [
        "Dedicated wedding planner",
        "On-site event coordination team",
        "Guest hospitality management",
        "Vendor coordination and management",
        "Timeline management and execution",
        "Emergency support and problem-solving"
      ],
      "Additional Services": [
        "Valet parking services",
        "Welcome signage and direction boards",
        "Guest registration desk",
        "Welcome gift baskets for rooms",
        "Transportation coordination",
        "Doctor on call (emergency)"
      ]
    },

    // Exclusions
    exclusions: [
      "Airfare and travel to/from Dharamshala",
      "Personal expenses, shopping, and sightseeing",
      "Additional room bookings beyond 30 rooms",
      "Premium alcoholic beverages (available at extra cost)",
      "Extended stay before/after the event dates",
      "Wedding outfits and jewelry",
      "Guest entertainment outside scheduled events",
      "Activities not mentioned in inclusions",
      "Tips and gratuities for staff",
      "Any government taxes that may apply"
    ],

    // Payment Schedule
    paymentTerms: [
      {
        stage: "Booking Confirmation",
        amount: "25% (₹3,75,000)",
        due: "Upon contract signing",
        details: "Non-refundable advance to confirm booking and block dates"
      },
      {
        stage: "Second Payment",
        amount: "50% (₹7,50,000)",
        due: "60 days before event (January 15, 2026)",
        details: "To confirm vendor bookings and begin preparations"
      },
      {
        stage: "Final Payment",
        amount: "25% (₹3,75,000)",
        due: "15 days before event (March 1, 2026)",
        details: "Final settlement before event commencement"
      }
    ],

    // Terms & Conditions
    terms: [
      "This quote is valid for 30 days from the date of issue",
      "All payments should be made via bank transfer or online payment",
      "Cancellation policy: 50% refund if cancelled 90+ days before event, 25% refund if cancelled 60-90 days before, no refund if cancelled within 60 days",
      "Guest count should be confirmed 30 days before the event",
      "Any changes to menu or services should be communicated 15 days in advance",
      "The venue reserves the right to charge for any damages caused by guests",
      "Force majeure clause applies for natural disasters or government restrictions",
      "All government taxes as applicable will be charged extra",
      "Vendor payments will be coordinated through Pretty Planet Travels & Events",
      "Client must obtain necessary permits/permissions for any special arrangements"
    ],

    // Why Choose Us
    whyChooseUs: [
      "10+ years experience in destination weddings",
      "Successfully executed 200+ weddings in Himachal Pradesh",
      "Dedicated team of wedding planners and coordinators",
      "Trusted vendor network across Dharamshala",
      "24/7 support throughout the wedding period",
      "Transparent pricing with no hidden costs",
      "Customization options available for all services",
      "Post-wedding support and assistance"
    ]
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl my-8 mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 left-full ml-4 z-20 p-3 bg-white rounded-full shadow-2xl hover:bg-gray-100 transition-all"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>

        {/* Header Cover */}
        <div 
          className="relative h-80 rounded-t-3xl overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #FFE8EC 0%, #F8C7CC 30%, #D9B38C 70%, #C4A57B 100%)'
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <Heart className="h-20 w-20 text-white mb-6 animate-pulse" fill="white" />
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-3">
              {proposalData.packageName}
            </h1>
            <p className="text-2xl text-white/95 font-light mb-2">{proposalData.subtitle}</p>
            <p className="text-xl text-white/90 italic">{proposalData.tagline}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-12">
          
          {/* Package Overview */}
          <section className="text-center space-y-6">
            <div className="inline-block px-10 py-5 rounded-full shadow-lg" 
              style={{ background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)' }}>
              <p className="text-4xl font-playfair font-bold text-white">{proposalData.overview.price}</p>
            </div>
            <div className="flex flex-wrap gap-8 justify-center text-gray-700">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-rose-500" />
                <span className="text-lg font-medium">{proposalData.overview.guests}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-rose-500" />
                <span className="text-lg font-medium">{proposalData.overview.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-rose-500" />
                <span className="text-lg font-medium">Dharamshala</span>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Venue Details */}
          <section>
            <h2 className="text-4xl font-playfair font-semibold mb-6 text-center" style={{ color: '#2D2D2D' }}>
              Venue Information
            </h2>
            <Card className="border-2 border-rose-100 rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-3xl font-playfair font-semibold mb-3" style={{ color: '#D9B38C' }}>
                  {proposalData.venueDetails.name}
                </h3>
                <p className="text-gray-600 mb-2 flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  {proposalData.venueDetails.location}
                </p>
                <p className="text-gray-600 mb-6 flex items-start gap-2">
                  <Users className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  Capacity: {proposalData.venueDetails.capacity}
                </p>
                <h4 className="text-xl font-semibold mb-4" style={{ color: '#2D2D2D' }}>Venue Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {proposalData.venueDetails.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" fill="#F59E0B" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Complete Schedule */}
          <section>
            <h2 className="text-4xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Complete Event Timeline
            </h2>
            <div className="space-y-8">
              {proposalData.schedule.map((day, dayIdx) => (
                <Card key={dayIdx} className="border-2 border-rose-100 rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6" style={{ background: 'linear-gradient(135deg, #FFF9F7 0%, #FFFFFF 100%)' }}>
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center font-playfair font-bold text-white text-2xl"
                        style={{ background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)' }}
                      >
                        {dayIdx + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-playfair font-semibold" style={{ color: '#2D2D2D' }}>
                          {day.day}
                        </h3>
                        <p className="text-gray-600">{day.date}</p>
                      </div>
                    </div>
                    <div className="space-y-4 ml-20">
                      {day.events.map((event, eventIdx) => (
                        <div key={eventIdx} className="border-l-4 border-rose-300 pl-6 py-2">
                          <p className="text-sm text-gray-500 font-semibold">{event.time}</p>
                          <h4 className="text-lg font-semibold text-gray-800">{event.event}</h4>
                          <p className="text-gray-600">{event.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Detailed Inclusions */}
          <section>
            <h2 className="text-4xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Complete Package Inclusions
            </h2>
            <div className="space-y-8">
              {Object.entries(proposalData.inclusionsDetailed).map(([category, items], catIdx) => (
                <Card key={catIdx} className="border-2 border-rose-100 rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-playfair font-semibold mb-4" style={{ color: '#D9B38C' }}>
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Exclusions */}
          <section>
            <h2 className="text-4xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Not Included in Package
            </h2>
            <Card className="border-2 border-gray-200 rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {proposalData.exclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Payment Schedule */}
          <section>
            <h2 className="text-4xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Payment Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {proposalData.paymentTerms.map((payment, idx) => (
                <Card key={idx} className="border-2 border-rose-100 rounded-2xl shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)' }}>
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-playfair font-semibold mb-2" style={{ color: '#2D2D2D' }}>
                      {payment.stage}
                    </h3>
                    <p className="text-3xl font-bold mb-2" style={{ color: '#D9B38C' }}>{payment.amount}</p>
                    <p className="text-sm text-gray-600 mb-3">Due: {payment.due}</p>
                    <p className="text-sm text-gray-700">{payment.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Terms & Conditions */}
          <section>
            <h2 className="text-4xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Terms & Conditions
            </h2>
            <Card className="border-2 border-rose-100 rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {proposalData.terms.map((term, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-rose-500 font-bold">{idx + 1}.</span>
                      <span className="text-gray-700">{term}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-4xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Why Choose Pretty Planet Travels & Events?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proposalData.whyChooseUs.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: '#FFF9F7' }}>
                  <Check className="h-6 w-6 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center py-10 px-8 rounded-3xl shadow-xl" 
            style={{ background: 'linear-gradient(135deg, #FFE8EC 0%, #FFF9F7 100%)' }}>
            <Heart className="h-12 w-12 mx-auto mb-4 text-rose-500" />
            <h2 className="text-4xl font-playfair font-semibold mb-4" style={{ color: '#2D2D2D' }}>
              Ready to Begin Your Dream Wedding?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Let's create magical memories together in the beautiful Himalayas.
              Contact our wedding experts to customize this proposal for your special day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('tel:+918679333354')}
                className="font-lato font-bold px-10 py-5 text-lg rounded-full"
                style={{ 
                  background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)',
                  color: '#2D2D2D'
                }}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Event Expert Now
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/918679333354?text=Hi!%20I%20viewed%20your%20wedding%20proposal%20and%20I%27m%20interested%20in%20booking%20a%20destination%20wedding%20in%20Dharamshala.', '_blank')}
                className="font-lato font-bold px-10 py-5 text-lg rounded-full"
                style={{ 
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  color: 'white'
                }}
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-gray-600">
              📧 Email: holidays@prettyplanettravels.com | 📞 Phone: +91 86793 33354
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WeddingProposalViewer;
