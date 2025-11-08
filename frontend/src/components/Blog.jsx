import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight, Search } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import SEOHead from './SEOHead';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOHead 
        title="Wedding Blog & Stories | Pretty Planet Travels & Events"
        description="Explore our wedding planning insights, real wedding stories, venue guides, and destination wedding tips. Get inspired for your dream wedding in Himachal Pradesh."
        keywords="wedding blog, destination wedding stories, Himachal wedding venues, wedding planning tips, Dharamshala weddings, luxury wedding venues"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;600;700&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        .blog-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(248, 199, 204, 0.3);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-white via-rose-50/30 to-white font-montserrat">
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
              Our Stories & Insights
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
              Wedding planning wisdom, real wedding stories, and destination insights from the experts at Pretty Planet Travels & Events
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-300 focus:border-rose-500 focus:outline-none font-montserrat"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-montserrat font-semibold transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600 font-montserrat">No articles found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    to={`/blog/${post.slug}`}
                    className="blog-card bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-rose-100"
                  >
                    {/* Featured Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23fce7f3" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle" font-family="serif" font-size="20"%3EPretty Planet%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-playfair font-semibold mb-3 text-gray-900 line-clamp-2 hover:text-rose-600 transition-colors">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3 font-montserrat">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center text-rose-600 font-semibold hover:text-rose-700 transition-colors">
                        <span className="mr-2">Read Full Story</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                        {post.tags.slice(0, 2).map((tag, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-xs text-gray-500">
                            <Tag className="h-3 w-3" />
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Ready to Start Your Wedding Journey?
            </h2>
            <p className="text-xl mb-8 font-light">
              Let our experienced team bring your dream wedding to life in the breathtaking Himalayas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events-weddings"
                className="inline-block bg-white text-rose-600 font-semibold px-10 py-4 rounded-full hover:shadow-2xl transition-all"
              >
                Explore Wedding Packages
              </Link>
              <Link
                to="/"
                className="inline-block border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/#contact';
                }}
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;