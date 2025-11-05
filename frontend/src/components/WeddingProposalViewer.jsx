import React, { useState } from 'react';
import { X, Heart, Calendar, Users, MapPin, Check, Download, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const WeddingProposalViewer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const proposalData = {
    packageName: "Dharamshala Destination Wedding - March 2026",
    tagline: "Where Love Meets the Mountains",
    pricing: {
      base: "₹15,00,000",
      guests: "300-350 Guests",
      duration: "3 Days / 2 Nights"
    },
    venue: {
      name: "Premium Resort in Dharamshala",
      location: "McLeod Ganj, Dharamshala, Himachal Pradesh",
      features: ["Mountain View", "Luxury Accommodations", "Indoor & Outdoor Spaces"]
    },
    timeline: [
      {
        day: "Day 1",
        title: "Welcome & Mehendi",
        events: ["Guest Arrival & Check-in", "Welcome Lunch", "Mehendi Ceremony (Evening)", "Cocktail Dinner"]
      },
      {
        day: "Day 2",
        title: "Main Wedding Day",
        events: ["Breakfast for All Guests", "Wedding Ceremony Setup", "Main Wedding Ceremony", "Grand Reception & Dinner"]
      },
      {
        day: "Day 3",
        title: "Farewell Brunch",
        events: ["Breakfast", "Farewell Brunch", "Guest Departure"]
      }
    ],
    inclusions: [
      "Venue booking and setup for all 3 days",
      "Accommodation for 30 rooms (2 nights)",
      "Complete catering for 300-350 guests (all meals)",
      "Professional wedding décor and styling",
      "Stage setup with floral arrangements",
      "Sound system and DJ services",
      "Professional photography and videography",
      "Mehndi artist and entertainment",
      "Wedding coordination and planning",
      "Guest hospitality management",
      "Transportation arrangements",
      "Complimentary honeymoon suite"
    ],
    exclusions: [
      "Airfare and travel to Dharamshala",
      "Personal expenses and shopping",
      "Additional room bookings beyond 30 rooms",
      "Alcoholic beverages (available at extra cost)",
      "Any activities not mentioned in inclusions"
    ],
    paymentTerms: [
      "25% advance payment to confirm booking",
      "50% payment 60 days before the event",
      "25% final payment 15 days before the event",
      "Refund policy: 50% refund if cancelled 90+ days before event"
    ]
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl my-8 animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>

        {/* Header Section */}
        <div 
          className="relative h-64 rounded-t-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #FFE8EC 0%, #F8C7CC 50%, #D9B38C 100%)' }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <Heart className="h-16 w-16 text-white mb-4 animate-pulse" fill="white" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">
              {proposalData.packageName}
            </h2>
            <p className="text-xl text-white/90 font-light italic">
              {proposalData.tagline}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12">
          {/* Pricing Overview */}
          <div className="mb-12 text-center">
            <div className="inline-block px-8 py-4 rounded-full" style={{ background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)' }}>
              <p className="text-3xl font-playfair font-bold text-white">{proposalData.pricing.base}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6 text-gray-700">
              <div className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5 text-rose-500" />
                <span>{proposalData.pricing.guests}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5 text-rose-500" />
                <span>{proposalData.pricing.duration}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-rose-500" />
                <span>Dharamshala</span>
              </div>
            </div>
          </div>

          {/* Venue Details */}
          <section className="mb-10">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-center" style={{ color: '#2D2D2D' }}>
              Venue Details
            </h3>
            <Card className="border-2 border-rose-100 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-2xl font-playfair font-semibold mb-2" style={{ color: '#D9B38C' }}>
                  {proposalData.venue.name}
                </h4>
                <p className="text-gray-600 mb-4">{proposalData.venue.location}</p>
                <div className="flex flex-wrap gap-3">
                  {proposalData.venue.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{ backgroundColor: '#FFF6F8', color: '#D9B38C' }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Timeline */}
          <section className="mb-10">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-center" style={{ color: '#2D2D2D' }}>
              Event Timeline
            </h3>
            <div className="space-y-6">
              {proposalData.timeline.map((day, idx) => (
                <Card key={idx} className="border-2 border-rose-100 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center font-playfair font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)' }}
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{day.day}</p>
                        <h4 className="text-xl font-playfair font-semibold" style={{ color: '#2D2D2D' }}>
                          {day.title}
                        </h4>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-15">
                      {day.events.map((event, eventIdx) => (
                        <li key={eventIdx} className="flex items-start gap-2 text-gray-700">
                          <Check className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span>{event}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Inclusions */}
          <section className="mb-10">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-center" style={{ color: '#2D2D2D' }}>
              What's Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proposalData.inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: '#FFF9F7' }}>
                  <Check className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Exclusions */}
          <section className="mb-10">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-center" style={{ color: '#2D2D2D' }}>
              Not Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proposalData.exclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-gray-200">
                  <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-10">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-center" style={{ color: '#2D2D2D' }}>
              Payment Terms
            </h3>
            <Card className="border-2 border-rose-100 rounded-2xl">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {proposalData.paymentTerms.map((term, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <Check className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Contact CTA */}
          <section className="text-center py-8 px-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, #FFE8EC 0%, #FFF9F7 100%)' }}>
            <h3 className="text-3xl font-playfair font-semibold mb-4" style={{ color: '#2D2D2D' }}>
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's create the wedding of your dreams in the heart of the Himalayas.
              Contact our wedding planners to customize this proposal for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('tel:+918679333354')}
                className="font-lato font-semibold px-8 py-4 text-lg rounded-full"
                style={{ 
                  background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)',
                  color: '#2D2D2D'
                }}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Event Expert
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/918679333354', '_blank')}
                className="font-lato font-semibold px-8 py-4 text-lg rounded-full"
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default WeddingProposalViewer;
