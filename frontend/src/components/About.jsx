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
            About 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-600 font-playfair"> Pretty Planet </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 font-playfair"> Travels & Events</span>
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
                  Founded in 2008 under the leadership of Managing Director Rajeev K Bhatia, Pretty Planet 
                  Travels and Events began with a simple belief: every journey should be extraordinary, 
                  every event should be flawless, and every celebration should be magical.
                </p>
                <p>
                  What started as a small travel consultancy in the beautiful hills of Dharamshala has grown 
                  into a full-service company specializing in luxury travel experiences, corporate events, and 
                  destination weddings. Our team of passionate travel experts and event planners work tirelessly 
                  to transform your vision into unforgettable memories.
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
                src="https://images.unsplash.com/photo-1728137490905-281e8c23712f"
                alt="Beautiful Kashmir Valley landscape"
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
        <div className="mb-20">
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

        {/* Social Media Showcase */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Follow Our Journey</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Stay connected with us on social media for daily travel inspiration, client stories, and behind-the-scenes moments.
          </p>
          
          {/* Social Media Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1670684960567-a6631b892968?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwdG91cmlzdHN8ZW58MHx8fHwxNzU5NDA1NDEzfDA&ixlib=rb-4.1.0&q=85"
                alt="Happy travelers in Kashmir"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Kashmir Adventure</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bada?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHRyYXZlbHxlbnwwfHx8fDE3NTk0MDU0MDd8MA&ixlib=rb-4.1.0&q=85"
                alt="Taj Mahal visitors"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Taj Mahal Tour</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1598190896090-9dc5c70361d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxJbmRpYSUyMHRyYXZlbHxlbnwwfHx8fDE3NTk0MDU0MDd8MA&ixlib=rb-4.1.0&q=85"
                alt="Cultural experiences"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Cultural Tours</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1638842496191-644628469d5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxLYXNobWlyJTIwdG91cmlzdHN8ZW58MHx8fHwxNTk0MDU0MTN8MA&ixlib=rb-4.1.0&q=85"
                alt="Travelers in nature"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Nature Retreats</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Buttons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/share/1BafLWD3au/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.415-3.326c.878-.878 2.029-1.415 3.326-1.415s2.448.537 3.326 1.415c.878.878 1.415 2.029 1.415 3.326s-.537 2.448-1.415 3.244c-.878.807-2.029 1.297-3.326 1.297zm7.718-.878V9.865h-1.297v6.245h1.297zm-.649-7.133c-.439 0-.78-.342-.78-.78s.342-.78.78-.78.78.342.78.78-.341.78-.78.78z"/>
              </svg>
              <span>Follow us on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;