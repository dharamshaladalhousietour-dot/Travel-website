import React from 'react';
import { Heart, Users, Award, Globe, Star, MapPin } from 'lucide-react';

const About = () => {
  const specialties = [
    "Destination Weddings",
    "Corporate Events", 
    "Product Launches",
    "Live Shows",
    "Incentive Tours"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-serif leading-tight">
                <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">Pretty Planet</span>
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent ml-2">Travels and Events</span>
              </h1>
              <p className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mt-2">
                ✨ Occasions That Create History ✨
              </p>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3 font-serif">
            Our Story
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-blue-900 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Intro */}
        <div className="text-center mb-8">
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
            Born in the scenic landscapes of Himachal Pradesh, <strong>Pretty Planet Travels and Events</strong> is a premier luxury travel and event management company. We curate unforgettable experiences — from destination weddings and honeymoons to corporate events, incentive tours, product launches, live shows and celebrity events. Our approach blends creativity, reliability and exquisite attention to detail.
          </p>
        </div>

        {/* Specialties Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 text-amber-800 font-bold text-sm border border-amber-200 shadow-sm"
            >
              {specialty}
            </div>
          ))}
        </div>

        {/* Founders Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mr. Rajeev Bhatia */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex gap-4 items-start">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                {/* Placeholder for rajeev.jpg */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Mr. Rajeev Bhatia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-1 font-serif">
                  Mr. Rajeev Bhatia
                </h3>
                <p className="text-gray-600 text-sm font-semibold mb-3">
                  Founder & Managing Director — Pretty Planet Travels and Events
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  With over two decades of experience in travel and hospitality, Mr. Rajeev Bhatia founded Pretty Planet Travels and Events to craft seamless journeys and unforgettable celebrations. Leading with integrity and a deep knowledge of Himachal tourism, he specializes in curated travel programs, group tours, and high-end event logistics.
                </p>
              </div>
            </div>
          </div>

          {/* Mrs. Riny Aggarwal */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex gap-4 items-start">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                {/* Placeholder for riny.jpg */}
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                  alt="Mrs. Riny Aggarwal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-1 font-serif">
                  Mrs. Riny Aggarwal
                </h3>
                <p className="text-gray-600 text-sm font-semibold mb-3">
                  Co-Founder & Creative Director — Pretty Planet Travels and Events
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Mrs. Riny Aggarwal earned her <strong>Master of Tourism (Gold Medalist, 2013)</strong> from the University of Shimla and was honored by the President of India, Mr. Pranab Mukherjee, for academic excellence. Her creative leadership transforms weddings, corporate events and live shows into elegant, personalized experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Description */}
        <div className="text-center mb-16">
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At Pretty Planet Travels and Events we believe every event and journey should tell a story. Our dedicated team manages every detail — venue, décor, catering, logistics and on-site coordination — to deliver flawless experiences that guests remember forever.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex justify-center mb-3">
              <Users className="h-8 w-8 text-amber-600" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-1">5,000+</div>
            <div className="text-gray-600 font-medium text-sm">Happy Clients</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex justify-center mb-3">
              <Globe className="h-8 w-8 text-amber-600" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-1">150+</div>
            <div className="text-gray-600 font-medium text-sm">Destinations</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex justify-center mb-3">
              <Award className="h-8 w-8 text-amber-600" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-1">15+</div>
            <div className="text-gray-600 font-medium text-sm">Years Experience</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex justify-center mb-3">
              <Star className="h-8 w-8 text-amber-600" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-1">4.9/5</div>
            <div className="text-gray-600 font-medium text-sm">Client Rating</div>
          </div>
        </div>

        {/* Follow Our Journey Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Follow Our Journey</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Stay connected with us on social media for daily travel inspiration, client stories, and behind-the-scenes moments.
          </p>
          
          {/* Social Media Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/share/1BafLWD3au/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Follow us on Facebook</span>
            </a>
            
            <a
              href="https://www.instagram.com/prettyplanettravelsandevents?igsh=MWtoYzZucmtwZGl0Mw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.415-3.326c.878-.878 2.029-1.415 3.326-1.415s2.448.537 3.326 1.415c.878.878 1.415 2.029 1.415 3.326s-.537 2.448-1.415 3.244c-.878.807-2.029 1.297-3.326 1.297zm7.718-.878V9.865h-1.297v6.245h1.297zm-.649-7.133c-.439 0-.78-.342-.78-.78s.342-.78.78-.78.78.342.78.78-.341.78-.78.78z"/>
              </svg>
              <span>Follow us on Instagram</span>
            </a>
            
            <a
              href="https://www.wedmegood.com/profile/Pretty-Planet-Travels-and-Events-4367953"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="text-lg">💍</span>
              <span>View on WedMeGood</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-gray-200">
          © 2025 Pretty Planet Travels and Events | www.prettyplanettravels.com
        </div>
      </div>
    </section>
  );
};

export default About;