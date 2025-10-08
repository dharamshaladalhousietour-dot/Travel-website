import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Send, X } from 'lucide-react';

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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields: Name, Email, and Phone');
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
👨‍👩‍👧 Pax: ${formData.adults} Adults${formData.kids && formData.kids !== '0' ? `, ${formData.kids}` : ''}
💰 Budget: ₹ ${formData.budget || 'Not specified'}
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
        
        // Send WhatsApp message with full details
        const whatsappMessage = encodeURIComponent(formattedMessage);
        const whatsappUrl = `https://wa.me/918679333355?text=${whatsappMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        console.log('✅ WhatsApp message sent');
        
        // Close modal after 3 seconds
        setTimeout(() => {
          if (onClose) onClose();
        }, 3000);
        
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
    <Card className="w-full max-w-2xl mx-auto bg-white">
      <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-t-lg relative">
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
      
      <CardContent className="p-6">
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            <p className="font-semibold">Thank you for your enquiry! Our team will get back to you within 1 hour.</p>
            <p className="text-sm mt-2">WhatsApp message sent successfully!</p>
          </div>
        )}

        {submitStatus === 'sent_whatsapp' && (
          <div className="mb-6 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-lg text-center">
            <p className="font-semibold">WhatsApp message sent! Our team will contact you soon.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
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

            <div>
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

            <div className="md:col-span-2">
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

            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                type="text"
                placeholder="Kashmir, Manali, etc."
                value={formData.destination}
                onChange={(e) => handleInputChange('destination', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="budget">Budget (₹)</Label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15,000 - 25,000">₹15,000 - ₹25,000</SelectItem>
                  <SelectItem value="25,000 - 50,000">₹25,000 - ₹50,000</SelectItem>
                  <SelectItem value="50,000 - 1,00,000">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="1,00,000 - 2,00,000">₹1,00,000 - ₹2,00,000</SelectItem>
                  <SelectItem value="2,00,000+">₹2,00,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => handleInputChange('startDate', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => handleInputChange('endDate', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="adults">Adults</Label>
              <Select value={formData.adults} onValueChange={(value) => handleInputChange('adults', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select adults" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Adult</SelectItem>
                  <SelectItem value="2">2 Adults</SelectItem>
                  <SelectItem value="3">3 Adults</SelectItem>
                  <SelectItem value="4">4 Adults</SelectItem>
                  <SelectItem value="5+">5+ Adults</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="days">Duration</Label>
              <Select value={formData.days} onValueChange={(value) => handleInputChange('days', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-3 Days">2-3 Days</SelectItem>
                  <SelectItem value="4-5 Days">4-5 Days</SelectItem>
                  <SelectItem value="6-7 Days">6-7 Days</SelectItem>
                  <SelectItem value="8-10 Days">8-10 Days</SelectItem>
                  <SelectItem value="10+ Days">10+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
  );
};

export default SimpleEnquiryForm;