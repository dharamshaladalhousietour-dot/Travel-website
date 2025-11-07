import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { getBlogPostBySlug, getRecentBlogPosts } from '../data/blogData';
import SEOHead from './SEOHead';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug);
  const recentPosts = getRecentBlogPosts(3).filter(p => p.slug !== slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-rose-600 hover:text-rose-700 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleShare = (platform) => {
    let url = '';
    switch(platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <>
      <SEOHead 
        title={`${post.title} | Pretty Planet Travels & Events`}
        description={post.metaDescription}
        keywords={post.tags.join(', ')}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;600;700&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }

        .blog-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #2D2D2D;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .blog-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #3B3B3B;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .blog-content h4 {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #4B4B4B;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .blog-content p {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.125rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .blog-content ul, .blog-content ol {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.125rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }

        .blog-content li {
          margin-bottom: 0.75rem;
        }

        .blog-content strong {
          font-weight: 600;
          color: #2D2D2D;
        }

        .blog-content a {
          color: #E11D48;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .blog-content a:hover {
          color: #BE123C;
        }

        .blog-content .cta-section {
          margin: 3rem 0;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-white via-rose-50/20 to-white font-montserrat">
        
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 pt-8">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </button>
        </div>

        {/* Featured Image */}
        <div className="relative h-[500px] mt-6 overflow-hidden">
          <img 
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1920" height="500"%3E%3Crect fill="%23fce7f3" width="1920" height="500"/%3E%3C/svg%3E';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Category Badge */}
          <div className="absolute top-8 left-8">
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-xl">
              {post.category}
            </span>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-rose-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-rose-500" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">By {post.author}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <span className="text-gray-600 font-semibold flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share:
              </span>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </button>
            </div>
          </header>

          {/* Article Body */}
          <div 
            className="blog-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-2 rounded-full">
                  <Tag className="h-4 w-4" />
                  <span className="font-semibold">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {recentPosts.length > 0 && (
          <section className="py-16 px-4 bg-rose-50/30">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
                More Stories You'll Love
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-rose-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-rose-600 font-semibold">{relatedPost.category}</span>
                      <h3 className="text-xl font-playfair font-semibold mt-2 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BlogPost;