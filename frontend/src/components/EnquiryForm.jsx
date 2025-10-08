import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Phone, Mail, MapPin, Calendar, Users, Send } from 'lucide-react';

const EnquiryForm = ({ packageTitle = "", onClose = null }) => {
  const [formData, setFormData] = useState({
    destination: packageTitle || '',
    start_date: '',
    end_date: '',
    adults: '',
    kids: '',
    days: '',
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create formatted message for WhatsApp and email
      const formattedMessage = `📩 New Travel Enquiry Received
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

📍 Destination: ${formData.destination}
📅 Dates: ${formData.start_date} – ${formData.end_date}
👨‍👩‍👧 Pax: ${formData.adults} Adults${formData.kids !== '0' ? `, ${formData.kids}` : ''}
💰 Budget: ₹ ${formData.budget || 'Not specified'}
🕒 Duration: ${formData.days}

💬 Message: ${formData.message || 'No additional message'}`;

      // Submit to backend API
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formatted_message: formattedMessage
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        
        // Send WhatsApp message
        const whatsappMessage = encodeURIComponent(formattedMessage);
        const whatsappUrl = `https://wa.me/918679333355?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        setFormData({
          destination: packageTitle || '',
          start_date: '',
          end_date: '',
          adults: '',
          kids: '',
          days: '',
          name: '',
          email: '',
          phone: '',
          budget: '',
          message: ''
        });
        
        // Auto-close after 5 seconds if onClose is provided
        if (onClose) {
          setTimeout(() => {
            onClose();
          }, 5000);
        }
      } else {
        throw new Error('Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-t-lg">
        <CardTitle className="text-xl font-bold flex items-center">
          <Send className="h-5 w-5 mr-2" />
          Send Enquiry {packageTitle && `- ${packageTitle}`}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6">
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            <p className="font-semibold">Thank you for your enquiry! Our team will get back to you within 1 hour.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            <p className="font-semibold">Sorry, there was an error submitting your enquiry. Please try again.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Personal Information */}
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 9999999999"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>

            {/* Travel Details */}
            <div className="space-y-2">
              <Label htmlFor="destination" className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Destination
              </Label>
              <Input
                id="destination"
                type="text"
                placeholder="Kashmir, Manali, etc."
                value={formData.destination}
                onChange={(e) => handleInputChange('destination', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="days" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                No. of Days
              </Label>
              <Select value={formData.days} onValueChange={(value) => handleInputChange('days', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select days" />
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

            <div className="space-y-2">
              <Label htmlFor="start_date" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Start Date
              </Label>
              <Input
                id="start_date"
                type="date"
                value={formData.start_date}
                onChange={(e) => handleInputChange('start_date', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="end_date" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                End Date
              </Label>
              <Input
                id="end_date"
                type="date"
                value={formData.end_date}
                onChange={(e) => handleInputChange('end_date', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="adults" className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                Adults
              </Label>
              <Select value={formData.adults} onValueChange={(value) => handleInputChange('adults', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select adults" />
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

            <div className="space-y-2">
              <Label htmlFor="kids" className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                Kids
              </Label>
              <Select value={formData.kids} onValueChange={(value) => handleInputChange('kids', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select kids" />
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" className="flex items-center gap-1">
              💰 Budget (₹)
            </Label>
            <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15,000 - 25,000">₹15,000 - ₹25,000</SelectItem>
                <SelectItem value="25,000 - 50,000">₹25,000 - ₹50,000</SelectItem>
                <SelectItem value="50,000 - 1,00,000">₹50,000 - ₹1,00,000</SelectItem>
                <SelectItem value="1,00,000 - 2,00,000">₹1,00,000 - ₹2,00,000</SelectItem>
                <SelectItem value="2,00,000 - 5,00,000">₹2,00,000 - ₹5,00,000</SelectItem>
                <SelectItem value="5,00,000+">₹5,00,000+</SelectItem>
                <SelectItem value="Custom Budget">Custom Budget (Will discuss)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Special Requirements</Label>
            <Textarea
              id="message"
              placeholder="Any special requests, preferences, or questions..."
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white"
            >
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </Button>
            
            {onClose && (
              <Button 
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-6"
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EnquiryForm;