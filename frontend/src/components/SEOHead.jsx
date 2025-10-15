import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title = "Pretty Planet Travels | Best Travel Agent in Himachal & Destination Wedding Planner",
  description = "Pretty Planet Travels | Best Travel Agent in Himachal & Destination Wedding Planner in Dharamshala. Manali Honeymoon, Kashmir Tours, Corporate Events & Dream Weddings.",
  canonical = "https://www.prettyplanettravels.com/",
  ogImage = "/assets/og-image.jpg",
  keywords = "Himachal Tour Packages, Dharamshala Travel Agent, Manali Honeymoon, Dalhousie Tours, Pretty Planet Travels, Kashmir Tours, Destination Weddings, Corporate Events",
  noindex = false
}) => {
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robotsContent} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pretty Planet Travels and Events" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Performance optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://checkout.razorpay.com" />
    </Helmet>
  );
};

export default SEOHead;