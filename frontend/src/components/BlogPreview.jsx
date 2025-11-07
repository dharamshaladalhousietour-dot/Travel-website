import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getRecentBlogPosts } from '../data/blogData';

const BlogPreview = () => {
  const recentPosts = getRecentBlogPosts(3);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4" style={{ color: '#2D2D2D' }}>
            From Our Blog
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #F8C7CC 0%, #D9B38C 100%)' }}></div>
          <p className="text-lg md:text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">
            Discover wedding inspiration, real stories, and expert insights from the heart of the Himalayas
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-rose-100"
            >
              {/* Featured Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23fce7f3" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle" font-family="serif" font-size="18"%3EPretty Planet%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
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
                <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-900 line-clamp-2 group-hover:text-rose-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3 font-montserrat text-sm">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center text-rose-600 font-semibold group-hover:text-rose-700 transition-colors">
                  <span className="mr-2">Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-montserrat font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
            style={{ 
              background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)',
              color: '#2D2D2D'
            }}
          >
            View All Stories
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
