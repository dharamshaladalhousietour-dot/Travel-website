import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { mockBlogPosts } from '../data/mockData';

const Blog = () => {
  const getCategoryColor = (category) => {
    const colors = {
      'Travel Tips': 'bg-blue-500',
      'Event Planning': 'bg-amber-500',
      'Wedding Planning': 'bg-rose-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Travel Tips & Insights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay inspired with our latest travel guides, event planning tips, 
            and insider secrets from industry experts.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-xl bg-white">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img 
                  src={mockBlogPosts[0].image}
                  alt={mockBlogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <Badge className={`${getCategoryColor(mockBlogPosts[0].category)} text-white border-0 px-4 py-2 font-semibold`}>
                    Featured
                  </Badge>
                </div>
              </div>
              
              {/* Content */}
              <CardContent className="p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{mockBlogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{mockBlogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{mockBlogPosts[0].readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-blue-900 mb-6 leading-tight">
                  {mockBlogPosts[0].title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {mockBlogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center space-x-4">
                  <Button className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-6">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Badge className={`${getCategoryColor(mockBlogPosts[0].category)} text-white border-0 px-4 py-2`}>
                    {mockBlogPosts[0].category}
                  </Badge>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {mockBlogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(post.category)} text-white border-0 px-3 py-1 font-semibold`}>
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{post.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-900 hover:text-blue-700 group-hover:bg-blue-50 p-0">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Travel Insights
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest travel tips, destination guides, and exclusive offers 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-amber-400 outline-none"
              />
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 font-semibold">
                Subscribe Now
              </Button>
            </div>
            
            <p className="text-sm text-blue-200 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;