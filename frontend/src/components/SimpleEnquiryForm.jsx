import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Send, X } from 'lucide-react';
import ThankYouPopup from './ThankYouPopup';

const SimpleEnquiryForm = ({ packageTitle = "", onClose = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: packageTitle || '',
    startDate: '',
    endDate: '',
    adults: '',
    kids: '',
    days: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Comprehensive validation for all mandatory fields
    const requiredFields = {
      name: 'Name',
      email: 'Email',
      phone: 'Phone', 
      destination: 'Destination',
      startDate: 'Start Date',
      endDate: 'End Date',
      adults: 'Adults',
      days: 'Duration',
      budget: 'Budget'
    };

    const missingFields = [];
    for (const [field, label] of Object.entries(requiredFields)) {
      if (!formData[field] || formData[field].trim() === '') {
        missingFields.push(label);
      }
    }

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    // Phone validation
    if (formData.phone.length < 10) {
      alert('Please enter a valid phone number');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create formatted message for WhatsApp and email
      const formattedMessage = `📩 New Travel Enquiry Received
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

📍 Destination: ${formData.destination}
📅 Dates: ${formData.startDate} – ${formData.endDate}
👨‍👩‍👧 Pax: ${formData.adults} Adults${formData.kids && formData.kids !== '0' ? `, ${formData.kids}` : ', No Kids'}
💰 Budget: ${formData.budget || 'Not specified'}
🕒 Duration: ${formData.days}

💬 Message: ${formData.message || 'No additional message'}`;

      // Submit to backend API (this handles email notification)
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      
      const response = await fetch(`${backendUrl}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          start_date: formData.startDate,
          end_date: formData.endDate,
          formatted_message: formattedMessage
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        console.log('✅ Enquiry submitted successfully to backend');
        
        // Show thank you popup
        setShowThankYouPopup(true);
        
        // Send WhatsApp message with full details
        const whatsappMessage = encodeURIComponent(formattedMessage);
        const whatsappUrl = `https://wa.me/918679333355?text=${whatsappMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        console.log('✅ WhatsApp message sent');
        
        // Close modal after popup closes (4 seconds)
        setTimeout(() => {
          if (onClose) onClose();
        }, 4500);
        
      } else {
        throw new Error('Failed to submit enquiry to backend');
      }
    } catch (error) {
      console.error('❌ Error submitting enquiry:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Thank You Popup */}
      <ThankYouPopup 
        isOpen={showThankYouPopup} 
        onClose={() => setShowThankYouPopup(false)} 
      />
      
      <Card className="w-full max-w-2xl mx-auto bg-white shadow-2xl relative z-[9999]">
        <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-t-lg relative p-4 md:p-6">
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white hover:text-blue-900 rounded-full p-1 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          <CardTitle className="text-xl font-bold flex items-center">
            <Send className="h-5 w-5 mr-2" />
            Send Enquiry {packageTitle && `- ${packageTitle}`}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-4 md:p-6 lg:p-8 overflow-visible relative z-[50]">

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 9999999999"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="destination">Destination *</Label>
              <Input
                id="destination"
                type="text"
                placeholder="Kashmir, Manali, etc."
                value={formData.destination}
                onChange={(e) => handleInputChange('destination', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget (₹) *</Label>
              <Select 
                value={formData.budget} 
                onValueChange={(value) => handleInputChange('budget', value)} 
              >
                <SelectTrigger className="w-full h-12 border border-gray-300 rounded-md px-3 py-2 bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors">
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent
                    position="popper"
                    avoidCollisions={false}
                    sideOffset={4}
                    className="z-[10002] bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto"                    container={document.body}
                  >
                  <SelectItem value="15,000 - 25,000" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">₹15,000 - ₹25,000</SelectItem>
                  <SelectItem value="25,000 - 50,000" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">₹25,000 - ₹50,000</SelectItem>
                  <SelectItem value="50,000 - 1,00,000" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="1,00,000 - 2,00,000" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">₹1,00,000 - ₹2,00,000</SelectItem>
                  <SelectItem value="2,00,000 - 5,00,000" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">₹2,00,000 - ₹5,00,000</SelectItem>
                  <SelectItem value="5,00,000+" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">₹5,00,000+</SelectItem>
                  <SelectItem value="flexible" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">Flexible Budget</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="startDate">Start Date *</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
                // required
              />
            </div>

            <div>
              <Label htmlFor="endDate">End Date *</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
                // required
              />
            </div>

            <div>
              <Label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-2">Adults *</Label>

                  <Select
                    value={formData.adults || undefined}
                    onValueChange={(value) => handleInputChange('adults', value)}
                  >
                    <SelectTrigger className="w-full h-12 border border-gray-300 rounded-md px-3 py-2 bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                      <SelectValue placeholder="Select number of adults" />
                    </SelectTrigger>
                   <SelectContent
  position="popper"
  avoidCollisions={false}
  sideOffset={4}
    className="z-[10002] bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto"
  container={document.body}
>
                      <SelectItem value="1">1 Adult</SelectItem>
                      <SelectItem value="2">2 Adults</SelectItem>
                      <SelectItem value="3">3 Adults</SelectItem>
                      <SelectItem value="4">4 Adults</SelectItem>
                      <SelectItem value="5">5 Adults</SelectItem>
                      <SelectItem value="6">6 Adults</SelectItem>
                      <SelectItem value="7+">7+ Adults</SelectItem>
                    </SelectContent>
                  </Select>
            </div>

            <div>
              <Label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-2">Duration *</Label>
              <Select 
                value={formData.days} 
                onValueChange={(value) => handleInputChange('days', value)} 
              >
                <SelectTrigger className="w-full h-12 border border-gray-300 rounded-md px-3 py-2 bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors">
                  <SelectValue placeholder="Select trip duration" />
                </SelectTrigger>
<SelectContent
  position="popper"
  avoidCollisions={false}
  sideOffset={4}
    className="z-[10002] bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto"
  container={document.body}
>
                  <SelectItem value="2-3 Days" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">2-3 Days</SelectItem>
                  <SelectItem value="4-5 Days" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">4-5 Days</SelectItem>
                  <SelectItem value="6-7 Days" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">6-7 Days</SelectItem>
                  <SelectItem value="8-10 Days" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">8-10 Days</SelectItem>
                  <SelectItem value="11-15 Days" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">11-15 Days</SelectItem>
                  <SelectItem value="15+ Days" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">15+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="kids" className="block text-sm font-medium text-gray-700 mb-2">Kids</Label>
            <Select 
              value={formData.kids} 
              onValueChange={(value) => handleInputChange('kids', value)}
            >
              <SelectTrigger className="w-full h-12 border border-gray-300 rounded-md px-3 py-2 bg-white hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors">
                <SelectValue placeholder="Select number of kids" />
              </SelectTrigger>
<SelectContent
  position="popper"
  avoidCollisions={false}
  sideOffset={4}
    className="z-[10002] bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto"
  container={document.body}
>
                <SelectItem value="0" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">No Kids</SelectItem>
                <SelectItem value="1 (2-5 years)" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">1 Kid (2-5 years)</SelectItem>
                <SelectItem value="1 (6-12 years)" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">1 Kid (6-12 years)</SelectItem>
                <SelectItem value="2 (2-5 years)" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">2 Kids (2-5 years)</SelectItem>
                <SelectItem value="2 (6-12 years)" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">2 Kids (6-12 years)</SelectItem>
                <SelectItem value="2 (mixed ages)" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">2 Kids (mixed ages)</SelectItem>
                <SelectItem value="3+ kids" className="px-3 py-2 hover:bg-blue-50 cursor-pointer">3+ Kids</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Additional Message</Label>
            <Textarea
              id="message"
              placeholder="Any special requests or questions..."
              rows={3}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white"
            >
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
    </>
  );
};

export default SimpleEnquiryForm;