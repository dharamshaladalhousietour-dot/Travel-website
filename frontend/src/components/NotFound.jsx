import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Home, ArrowLeft, Phone, Mail } from 'lucide-react';
import SEOHead from './SEOHead';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <SEOHead 
        title="Page Not Found - Pretty Planet Travels"
        description="The page you're looking for doesn't exist. Explore our travel packages, destination weddings, and corporate events instead."
        canonical="https://www.prettyplanettravels.com/404"
        noindex={true}
      />
      
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist. But don't worry, 
            there are plenty of amazing destinations to explore!
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <Link to="/">
            <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/tour-packages">
            <Button variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Browse Tour Packages
            </Button>
          </Link>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-4 w-4 text-blue-900" />
              <span>+91 8679333355</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4 text-blue-900" />
              <span>info@prettyplanettravels.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;