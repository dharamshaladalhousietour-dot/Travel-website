import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { mockTestimonials } from '../data/mockData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockTestimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % mockTestimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + mockTestimonials.length) % mockTestimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Rating Badge Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 mb-8 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                ))}
              </div>
              <div className="h-8 w-px bg-white/30"></div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-xs text-blue-100">200+ Clients</div>
              </div>
            </div>
          </div>
          
          {/* Quick Reviews Row - Google Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {/* Review 1 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg">
                  R
                </div>
                <div>
                  <div className="font-semibold text-white">Rahul & Priya</div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                "Our Dharamshala wedding was a dream! Pretty Planet handled everything perfectly - from venue selection to décor. Highly recommend!"
              </p>
              <div className="mt-3 text-xs text-blue-200">Wedding Planning</div>
            </div>
            
            {/* Review 2 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div>
                  <div className="font-semibold text-white">Sneha Mehta</div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                "Exceptional travel planning! Our Himachal tour was perfectly organized. Every detail was taken care of. 10/10 experience!"
              </p>
              <div className="mt-3 text-xs text-blue-200">Travel Package</div>
            </div>
            
            {/* Review 3 */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div>
                  <div className="font-semibold text-white">Amit & Kavya</div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                "Best decision ever! Our destination wedding in Dharamshala was magical. Professional team, stunning venue, flawless execution!"
              </p>
              <div className="mt-3 text-xs text-blue-200">Destination Wedding</div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Quote className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Hear from the amazing people who trusted us to create their perfect experiences.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 border text-white overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 flex items-center">
                {/* Navigation Buttons */}
                <Button
                  onClick={prevTestimonial}
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button
                  onClick={nextTestimonial}
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Testimonial Content */}
                <div className="w-full px-20 py-12 text-center">
                  <div className="mb-8">
                    <img
                      src={mockTestimonials[currentIndex].image}
                      alt={mockTestimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/20 shadow-xl"
                    />
                    <div className="flex justify-center space-x-1 mb-4">
                      {renderStars(mockTestimonials[currentIndex].rating)}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 italic">
                    "{mockTestimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="font-bold text-xl">
                      {mockTestimonials[currentIndex].name}
                    </div>
                    <div className="text-blue-200 font-medium">
                      {mockTestimonials[currentIndex].location}
                    </div>
                    <div className="inline-block bg-amber-500/20 text-amber-200 px-4 py-2 rounded-full text-sm font-medium">
                      {mockTestimonials[currentIndex].service}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {mockTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-400 scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">4.9/5</div>
            <div className="text-blue-200">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">5,000+</div>
            <div className="text-blue-200">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
            <div className="text-blue-200">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">15+</div>
            <div className="text-blue-200">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;