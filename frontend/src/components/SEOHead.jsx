import React, { useEffect } from 'react';

const SEOHead = ({ 
  title = "Pretty Planet Travels | Best Travel Agent in Himachal & Destination Wedding Planner",
  description = "Pretty Planet Travels | Best Travel Agent in Himachal & Destination Wedding Planner in Dharamshala. Manali Honeymoon, Kashmir Tours, Corporate Events & Dream Weddings.",
  canonical = "https://www.prettyplanettravels.com/",
  keywords = "Himachal Tour Packages, Dharamshala Travel Agent, Manali Honeymoon, Dalhousie Tours, Pretty Planet Travels, Kashmir Tours, Destination Weddings, Corporate Events",
  noindex = false
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Update canonical link
    const updateCanonical = (href) => {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', href);
    };
    
    // Apply meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    
    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:type', 'website', true);
    
    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    
    // Canonical URL
    updateCanonical(canonical);
    
  }, [title, description, canonical, keywords, noindex]);
  
  return null; // This component only manages document head, doesn't render anything
};

export default SEOHead;