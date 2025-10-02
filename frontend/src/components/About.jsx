import React from 'react';
import { Award, Heart, Users, Globe, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      number: "5,000+",
      label: "Happy Clients"
    },
    {
      icon: <Globe className="h-8 w-8 text-amber-600" />,
      number: "150+",
      label: "Destinations"
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: <Star className="h-8 w-8 text-amber-600" />,
      number: "4.9/5",
      label: "Client Rating"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6 text-blue-900" />,
      title: "Passion for Excellence",
      description: "We pour our heart into every detail, ensuring each experience exceeds expectations."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-900" />,
      title: "Trusted Expertise",
      description: "With 15+ years in the industry, we bring unmatched knowledge and reliability."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-900" />,
      title: "Personalized Service",
      description: "Every client is unique, and we tailor our services to match your vision perfectly."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            About Pretty Planet
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creating unforgettable journeys, seamless corporate events, and magical weddings 
            that turn dreams into beautiful reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008, Pretty Planet Travels and Events began with a simple belief: 
                  every journey should be extraordinary, every event should be flawless, and every 
                  celebration should be magical.
                </p>
                <p>
                  What started as a small travel consultancy has grown into a full-service company 
                  specializing in luxury travel experiences, corporate events, and destination weddings. 
                  Our team of passionate travel experts and event planners work tirelessly to transform 
                  your vision into unforgettable memories.
                </p>
                <p>
                  From intimate getaways to grand corporate conferences, from romantic honeymoons to 
                  fairy-tale weddings, we handle every detail with precision and care, allowing you 
                  to focus on what matters most – enjoying the experience.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-900">
              <h4 className="text-xl font-bold text-blue-900 mb-4">Our Mission</h4>
              <p className="text-gray-700 italic leading-relaxed">
                "To create extraordinary experiences that inspire, connect, and celebrate life's 
                most precious moments, while building lasting relationships with our clients 
                through exceptional service and attention to detail."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1719294008010-44116946e5b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbnN8ZW58MHx8fHwxNzU5NDAxMjg0fDA&ixlib=rb-4.1.0&q=85"
                alt="Elegant travel destination"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">Why Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white group hover:bg-blue-50">
                <CardContent className="p-0 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 group-hover:bg-white rounded-full mb-6 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;