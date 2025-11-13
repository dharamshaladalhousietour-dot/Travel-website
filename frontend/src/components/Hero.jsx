import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Users, MapPin } from 'lucide-react';
import RazorpayCheckout from './RazorpayCheckout';

const Hero = () => {
  const [enquiryData, setEnquiryData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    adults: '',
    kids: '',
    phone: '',
    message: ''
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay prevented:', err);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Homepage enquiry submitted:', enquiryData);
    
    try {
      // Create formatted message for WhatsApp and email
      const formattedMessage = `📩 New Travel Enquiry from Pretty Planet Website

📍 Destination: ${enquiryData.destination}
📅 Travel Dates: ${enquiryData.startDate} to ${enquiryData.endDate}
👥 No. of Pax: ${enquiryData.adults} Adults${enquiryData.kids && enquiryData.kids !== '0' ? `, ${enquiryData.kids} Kids` : ''}
📱 Contact Number: ${enquiryData.phone}
💬 Message: ${enquiryData.message || 'No additional message'}`;

      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      
      const response = await fetch(`${backendUrl}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination: enquiryData.destination,
          start_date: enquiryData.startDate,
          end_date: enquiryData.endDate,
          adults: enquiryData.adults,
          kids: enquiryData.kids || '0',
          days: 'To be calculated',
          name: 'Homepage Visitor',
          email: 'info@prettyplanettravels.com',
          phone: enquiryData.phone,
          budget: 'To be discussed',
          message: enquiryData.message || 'Homepage travel enquiry',
          formatted_message: formattedMessage
        })
      });

      if (response.ok) {
        console.log('✅ Homepage enquiry submitted to backend');
        
        // Send WhatsApp message
        const whatsappMessage = encodeURIComponent(formattedMessage);
        const whatsappUrl = `https://wa.me/918679333354?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
        console.log('✅ WhatsApp message sent from homepage');
      } else {
        console.error('❌ Failed to submit homepage enquiry to backend');
      }
    } catch (error) {
      console.error('❌ Error submitting homepage enquiry:', error);
    }

    setShowThankYou(true);
    
    // Reset form and hide thank you message after 5 seconds
    setTimeout(() => {
      setShowThankYou(false);
      setEnquiryData({
        destination: '',
        startDate: '',
        endDate: '',
        adults: '',
        kids: '',
        phone: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* Fallback Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1648034902541-b239c599114e)',
              zIndex: 0
            }}
          />
          
          {/* Video Element */}
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 1 }}
            onError={(e) => console.log('Video loading error:', e)}
            onLoadedData={() => console.log('Video loaded successfully')}
          >
            <source 
              src="/assets/hero-video.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Ivory Overlay for text readability */}
          <div className="absolute inset-0 bg-amber-50/30 z-10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-playfair text-center" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 6px rgba(0, 0, 0, 0.9)' }}>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Create</span>
            <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 animate-pulse" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 1)' }}> Unforgettable </span>
            <br className="sm:hidden" />
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Moments</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 max-w-3xl mx-auto leading-relaxed text-center px-4" style={{ textShadow: '0 3px 8px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.9)' }}>
            From magical destinations to seamless corporate events and dream weddings, 
            we turn your vision into extraordinary experiences.
          </p>
          
          {/* Premium Tagline with Badge Style */}
          <div className="mb-8 flex justify-center px-4">
            <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/20 backdrop-blur-lg border-2 border-amber-400/50 rounded-full px-6 py-3 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              
              {/* Trust Icon */}
              <span className="text-3xl animate-pulse">🏆</span>
              
              {/* Tagline Text */}
              <p className="relative z-10 text-base sm:text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 font-playfair tracking-wide">
                Trusted Event & Wedding Planners in Dharamshala
              </p>
              
              {/* Divider */}
              <span className="text-amber-300 text-xl">|</span>
              
              {/* Brand Name */}
              <p className="relative z-10 text-base sm:text-lg md:text-xl font-bold text-white font-montserrat">
                Pretty Planet Travels & Events
              </p>
              
              {/* Star decoration */}
              <span className="text-2xl animate-pulse">⭐</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4">
            <RazorpayCheckout
              amount={5000} // ₹50 default amount
              name="Customer"
              email="customer@email.com"
              phone="+91 9876543210"
              packageName="General Travel Booking"
              onSuccess={(response) => {
                console.log('✅ Homepage payment successful:', response);
              }}
              onError={(error) => {
                console.error('❌ Homepage payment error:', error);
              }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse"
              >
                💳 Pay Now - Live Mode
              </Button>
            </RazorpayCheckout>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Plan Your Trip
            </Button>
          </div>

          {/* New WhatsApp Expert Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 sm:px-10 py-5 text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
              onClick={() => {
                const message = "Hi! I want to get my customized travel plan.";
                window.open(`https://wa.me/918679333355?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              ✈️ Get My Customized Travel Plan
            </Button>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 sm:px-10 py-5 text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
              onClick={() => {
                const message = "Hi! I want to plan my dream wedding with Pretty Planet.";
                window.open(`https://wa.me/918679333354?text=${encodeURIComponent(message)}`, '_blank');
              }}
            >
              💍 Plan My Dream Wedding Now
            </Button>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="bg-white/75 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl max-w-5xl mx-4 sm:mx-auto">
          {showThankYou && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
              <p className="font-semibold text-lg">Thank you! Your travel enquiry has been received. Our team will get back to you within 1 hour.</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Destination
                </label>
                <Select 
                  value={enquiryData.destination}
                  onValueChange={(value) => setEnquiryData({...enquiryData, destination: value})}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shimla">Shimla, Himachal Pradesh</SelectItem>
                    <SelectItem value="kashmir">Kashmir Valley</SelectItem>
                    <SelectItem value="manali">Manali, Himachal Pradesh</SelectItem>
                    <SelectItem value="dharamshala">Dharamshala, Himachal Pradesh</SelectItem>
                    <SelectItem value="srinagar">Srinagar, Kashmir</SelectItem>
                    <SelectItem value="leh-ladakh">Leh Ladakh</SelectItem>
                    <SelectItem value="goa">Goa</SelectItem>
                    <SelectItem value="kerala">Kerala</SelectItem>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="other">Other (Specify in message)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Start Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Start Date
                </label>
                <Input 
                  type="date" 
                  className="h-12"
                  value={enquiryData.startDate}
                  onChange={(e) => setEnquiryData({...enquiryData, startDate: e.target.value})}
                />
              </div>

              {/* End Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  End Date
                </label>
                <Input 
                  type="date" 
                  className="h-12"
                  value={enquiryData.endDate}
                  onChange={(e) => setEnquiryData({...enquiryData, endDate: e.target.value})}
                />
              </div>

              {/* Adults (Pax) */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  Adults (Pax)
                </label>
                <Select 
                  value={enquiryData.adults}
                  onValueChange={(value) => setEnquiryData({...enquiryData, adults: value})}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Adults" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Adult</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="4">4 Adults</SelectItem>
                    <SelectItem value="5">5 Adults</SelectItem>
                    <SelectItem value="6">6 Adults</SelectItem>
                    <SelectItem value="7">7 Adults</SelectItem>
                    <SelectItem value="8">8 Adults</SelectItem>
                    <SelectItem value="9">9 Adults</SelectItem>
                    <SelectItem value="10+">10+ Adults</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Kids (with age) */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  Kids (with age)
                </label>
                <Select 
                  value={enquiryData.kids}
                  onValueChange={(value) => setEnquiryData({...enquiryData, kids: value})}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Kids" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">No Kids</SelectItem>
                    <SelectItem value="1 (2-5 years)">1 Kid (2-5 years)</SelectItem>
                    <SelectItem value="1 (6-12 years)">1 Kid (6-12 years)</SelectItem>
                    <SelectItem value="2 (2-5 years)">2 Kids (2-5 years)</SelectItem>
                    <SelectItem value="2 (6-12 years)">2 Kids (6-12 years)</SelectItem>
                    <SelectItem value="2 (mixed ages)">2 Kids (mixed ages)</SelectItem>
                    <SelectItem value="3+ kids">3+ Kids</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  📱 Phone
                </label>
                <Input 
                  type="tel" 
                  className="h-12"
                  placeholder="+91 9999999999"
                  value={enquiryData.phone}
                  onChange={(e) => setEnquiryData({...enquiryData, phone: e.target.value})}
                />
              </div>
            </div>
            
            {/* Message - Full Width */}
            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                💬 Message (Optional)
              </label>
              <Input 
                type="text" 
                className="h-12"
                placeholder="Any specific requirements or questions..."
                value={enquiryData.message}
                onChange={(e) => setEnquiryData({...enquiryData, message: e.target.value})}
              />
            </div>
            
            {/* Submit Button */}
            <div className="mt-6 text-center">
              <Button 
                type="submit"
                size="lg" 
                className="w-full md:w-auto bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-12 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                📨 Send Booking Enquiry
              </Button>
            </div>
          </form>
          
          {/* Response Time Note */}
          <p className="text-center text-sm italic text-gray-600 mt-3">
            Our team will get back to you within 1 hour of your enquiry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;