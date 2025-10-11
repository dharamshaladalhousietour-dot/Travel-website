import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Users, MapPin } from 'lucide-react';

const Hero = () => {
  const [enquiryData, setEnquiryData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    adults: '',
    kids: '',
    days: '',
    budget: '',
    name: '',
    email: '',
    phone: ''
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Homepage enquiry submitted:', enquiryData);
    
    try {
      // Create formatted message for WhatsApp and email
      const formattedMessage = `📩 New Travel Enquiry Received
👤 Name: ${enquiryData.name || 'Not provided'}
📧 Email: ${enquiryData.email || 'Not provided'}
📱 Phone: ${enquiryData.phone || 'Not provided'}

📍 Destination: ${enquiryData.destination}
📅 Dates: ${enquiryData.startDate} – ${enquiryData.endDate}
👨‍👩‍👧 Pax: ${enquiryData.adults} Adults${enquiryData.kids && enquiryData.kids !== '0' ? `, ${enquiryData.kids}` : ''}
💰 Budget: ${enquiryData.budget || 'Not specified'}
🕒 Duration: ${enquiryData.days}

💬 Message: Homepage enquiry form submission`;

      // Submit to backend API
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
          kids: enquiryData.kids,
          days: enquiryData.days,
          name: enquiryData.name || 'Homepage Visitor',
          email: enquiryData.email || 'homepage@enquiry.com',
          phone: enquiryData.phone || 'Not provided',
          budget: enquiryData.budget || 'Not specified',
          message: 'Homepage enquiry form submission',
          formatted_message: formattedMessage
        })
      });

      if (response.ok) {
        console.log('✅ Homepage enquiry submitted to backend');
        
        // Send WhatsApp message
        const whatsappMessage = encodeURIComponent(formattedMessage);
        const whatsappUrl = `https://wa.me/918679333355?text=${whatsappMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        console.log('✅ WhatsApp message sent from homepage');
      } else {
        console.error('❌ Failed to submit homepage enquiry to backend');
      }
    } catch (error) {
      console.error('❌ Error submitting homepage enquiry:', error);
    }
    
    // Show thank you message
    setShowThankYou(true);
    // Reset form
    setEnquiryData({
      destination: '',
      startDate: '',
      endDate: '',
      adults: '',
      kids: '',
      days: ''
    });
    // Hide thank you message after 5 seconds
    setTimeout(() => setShowThankYou(false), 5000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* Primary background image - Himachal Pradesh Mountains */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1648034902541-b239c599114e)'
            }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-transparent"></div>
          
          {/* Secondary overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-playfair text-center">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Create</span>
            <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 animate-pulse"> Unforgettable </span>
            <br className="sm:hidden" />
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Moments</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed text-center px-4">
            From magical destinations to seamless corporate events and dream weddings, 
            we turn your vision into extraordinary experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse"
              onClick={() => alert('Razorpay integration will be activated once API keys are provided')}
            >
              💳 Pay Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Plan Your Trip
            </Button>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-2xl max-w-5xl mx-4 sm:mx-auto">
          {showThankYou && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
              <p className="font-semibold">Thank you for your enquiry! Our team will get back to you within 1 hour.</p>
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

              {/* No. of Days */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  No. of Days
                </label>
                <Select 
                  value={enquiryData.days}
                  onValueChange={(value) => setEnquiryData({...enquiryData, days: value})}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 Days</SelectItem>
                    <SelectItem value="3-4">3-4 Days</SelectItem>
                    <SelectItem value="5-6">5-6 Days</SelectItem>
                    <SelectItem value="7-10">7-10 Days</SelectItem>
                    <SelectItem value="11-15">11-15 Days</SelectItem>
                    <SelectItem value="15+">15+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  💰 Budget (₹)
                </label>
                <Select 
                  value={enquiryData.budget}
                  onValueChange={(value) => setEnquiryData({...enquiryData, budget: value})}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="₹15,000 - ₹25,000">₹15,000 - ₹25,000</SelectItem>
                    <SelectItem value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</SelectItem>
                    <SelectItem value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="₹1,00,000 - ₹2,00,000">₹1,00,000 - ₹2,00,000</SelectItem>
                    <SelectItem value="₹2,00,000+">₹2,00,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  👤 Name
                </label>
                <Input 
                  type="text" 
                  className="h-12"
                  placeholder="Your Name"
                  value={enquiryData.name}
                  onChange={(e) => setEnquiryData({...enquiryData, name: e.target.value})}
                />
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
            
            {/* Email - Full Width */}
            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                📧 Email
              </label>
              <Input 
                type="email" 
                className="h-12"
                placeholder="your@email.com"
                value={enquiryData.email}
                onChange={(e) => setEnquiryData({...enquiryData, email: e.target.value})}
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
        </div>
      </div>
    </section>
  );
};

export default Hero;