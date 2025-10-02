import React from 'react';
import { Globe, Briefcase, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { mockServices } from '../data/mockData';

const Services = () => {
  const iconMap = {
    Globe: <Globe className="h-8 w-8" />,
    Briefcase: <Briefcase className="h-8 w-8" />,
    Heart: <Heart className="h-8 w-8" />
  };

  const colorMap = {
    blue: {
      gradient: 'from-blue-900 to-blue-800',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      button: 'bg-blue-900 hover:bg-blue-800'
    },
    amber: {
      gradient: 'from-amber-500 to-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-900',
      button: 'bg-amber-600 hover:bg-amber-700'
    },
    rose: {
      gradient: 'from-rose-500 to-rose-600',
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      text: 'text-rose-900',
      button: 'bg-rose-600 hover:bg-rose-700'
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-6">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From dream destinations to flawless events, we bring your vision to life 
            with expertise, passion, and attention to every detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mockServices.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <Card key={service.id} className={`group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden transform hover:-translate-y-2 ${colors.bg}`}>
                <div className="relative">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-80`}></div>
                    
                    {/* Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                        {iconMap[service.icon]}
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-bold mb-4 ${colors.text}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className={`h-5 w-5 ${colors.text.replace('text-', 'text-')}`} />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button className={`w-full ${colors.button} text-white group-hover:shadow-lg transition-all duration-300`}>
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Create Something Extraordinary?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create an unforgettable experience tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8">
              Start Planning
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;