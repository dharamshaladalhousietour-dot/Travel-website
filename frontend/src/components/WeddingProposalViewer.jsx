import React from 'react';
import { X, Heart, Calendar, Users, MapPin, Check, Phone, Mail, Star, Award, Crown, Sparkles, ChevronRight } from 'lucide-react';

const WeddingProposalViewer = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center overflow-y-auto py-8 px-4">
      <div className="relative w-full max-w-7xl bg-white rounded-3xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-6 mt-6 z-20 p-3 bg-white rounded-full shadow-2xl hover:bg-gray-100 transition-all hover:scale-110"
          aria-label="Close"
        >
          <X className="h-6 w-6 text-gray-700" />
        </button>

        {/* Hero Header */}
        <div 
          className="relative pt-20 pb-16 px-8 rounded-t-3xl overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #FFE8EC 0%, #F8C7CC 30%, #D9B38C 70%, #C4A57B 100%)'
          }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <Heart className="h-20 w-20 text-white animate-pulse" fill="white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-4 leading-tight">
              Destination Weddings <br />& Honeymoon
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 font-light italic mb-4">
              "Memorable Events don't Just Happen.<br />They happen to be Our Business"
            </p>
            <p className="text-xl text-white/90">
              Wedding Planning and Management Proposal
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 md:px-12 lg:px-16 py-12 space-y-16">
          
          {/* Introduction */}
          <section className="max-w-5xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Thank you for considering <span className="font-semibold" style={{ color: '#D9B38C' }}>Destination Weddings and Honeymoon</span> to assist you in planning and managing your wedding. We are delighted to have the opportunity to work with you and are dedicated to creating an unforgettable and seamless experience. With our expertise and passion for excellence, we ensure that every detail of your special day is perfectly executed.
            </p>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Vision Section */}
          <section className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Our Vision for Your Wedding
            </h2>
            <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8 md:p-10 shadow-lg border-2 border-rose-100">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <span className="font-semibold" style={{ color: '#D9B38C' }}>Destination: Dharamshala, Himachal Pradesh</span>
              </p>
              <p className="text-gray-700 mb-6">
                Based on upcoming consultations with you, we will understand your vision for your wedding which includes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-6 w-6 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Theme and Style:</span>
                    <p className="text-gray-600">Discussion on the desired theme and style</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Preferred Colors:</span>
                    <p className="text-gray-600">Mood board for color theme for the décor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Guest Count:</span>
                    <p className="text-gray-600">Approximately 100-150 guests</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-gray-800">Special Requests:</span>
                    <p className="text-gray-600">Any unique elements or special requests</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-6 italic">
                We are committed to making your wedding a true reflection of your personalities and love story, ensuring every element harmonizes with your vision.
              </p>
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Services Offered */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Comprehensive Services Offered
            </h2>
            <p className="text-center text-gray-700 mb-10 text-lg">
              We offer a comprehensive range of services to cover every aspect of your wedding planning and management journey:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Consultation Services",
                  items: ["Initial consultation and planning meetings", "Phone and email communication"]
                },
                {
                  title: "Budget Management",
                  items: ["Budget planning and expense tracking", "Cost-effective vendor recommendations"]
                },
                {
                  title: "Venue Scouting",
                  items: ["Assistance in scouting and selecting the perfect venue", "Venue coordination and booking"]
                },
                {
                  title: "Theme and Design",
                  items: ["Design and decor planning, including color schemes and themes", "Customized decor and floral arrangements"]
                },
                {
                  title: "Vendor Coordination",
                  items: ["Coordination with florists, caterers, photographers, musicians", "Vendor contract review and management"]
                },
                {
                  title: "Day-of Coordination",
                  items: ["On-site coordination on the wedding day", "Event flow script and execution"]
                },
                {
                  title: "Shadow Service",
                  items: ["01 shadow assistant each for bride and groom for two days from 9 AM to 7 PM."]
                },
                {
                  title: "Hospitality Desk",
                  items: ["Dedicated wedding hospitality desk at main venue", "Guest assistance and logistics coordination"]
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-2 border-rose-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-playfair font-semibold mb-4 flex items-center gap-2" style={{ color: '#D9B38C' }}>
                    <Check className="h-5 w-5 text-rose-500" />
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-gray-700 pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-rose-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Vendor Management */}
          <section className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Vendor Connections & Management
            </h2>
            <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-8 md:p-10 shadow-lg border-2 border-amber-100">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our experienced Management team will liaison with all necessary best-in-class suppliers required for each function and help you get the best quality at the most cost-effective price.
              </p>
              <p className="font-semibold text-gray-800 mb-4">
                We will manage all vendors (vendor service costs will be paid by host):
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Photography and Videography + Cinematography",
                  "Mehendi artist",
                  "Makeup artist & Hair stylist",
                  "Draping stylist (For Sarees and Lehengas)",
                  "Emcee/Anchor, DJ & Sound",
                  "Baraat Band & Dhol artists",
                  "Groom's Ghodi & Vintage Car",
                  "Fresh Flowers vendors/Florists",
                  "Transport cabs to & from venue",
                  "Priest & Musical Pheras",
                  "Bride and Groom entry concepts",
                  "Live bands, fusion and Sufi bands",
                  "Folk performers and musical troops",
                  "Any other related vendors"
                ].map((vendor, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-white rounded-lg p-3 shadow-sm">
                    <ChevronRight className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{vendor}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Timeline */}
          <section className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Wedding Planning Timeline
            </h2>
            <div className="space-y-6">
              {[
                {
                  period: "12 Months Before",
                  tasks: [
                    "Book us in advance for step-by-step planning and management",
                    "Initial consultation and budget planning",
                    "Venue selection and booking"
                  ]
                },
                {
                  period: "9-10 Months Before",
                  tasks: [
                    "Vendor selection (decor, sound, caterer, photographer, florist, band, etc.)",
                    "Save-the-dates sent to guests"
                  ]
                },
                {
                  period: "6-8 Months Before",
                  tasks: [
                    "Finalize design and decor details",
                    "Finalize emcee, sound and entertainment",
                    "Finalize photographers and bride-groom entry concepts"
                  ]
                },
                {
                  period: "3-5 Months Before",
                  tasks: [
                    "Invitations sent to guests",
                    "Confirm guest accommodations & logistics",
                    "Confirm makeup artists and all pending vendors"
                  ]
                },
                {
                  period: "1-2 Months Before",
                  tasks: [
                    "Finalize day-of timeline",
                    "Final walkthrough of venue"
                  ]
                },
                {
                  period: "1 Week Before",
                  tasks: [
                    "Final confirmations with all vendors",
                    "Final checks with hotel on F&B & rooming lists",
                    "Rehearsal and final checks"
                  ]
                },
                {
                  period: "Wedding Day",
                  tasks: [
                    "Full coordination and management to ensure a flawless event"
                  ]
                }
              ].map((phase, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div 
                    className="flex-shrink-0 w-32 h-32 rounded-full flex items-center justify-center text-center p-4"
                    style={{ background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)' }}
                  >
                    <span className="text-white font-playfair font-bold text-sm leading-tight">{phase.period}</span>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md border-2 border-rose-100">
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIdx) => (
                        <li key={taskIdx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Portfolio - Royal & Celebrity Weddings */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4 text-center" style={{ color: '#2D2D2D' }}>
              Our Portfolio
            </h2>
            <p className="text-center text-gray-600 mb-10 text-lg max-w-3xl mx-auto">
              A selection of weddings we have planned, managed, and decorated, showcasing our attention to detail, creativity, and commitment to making each wedding unique and special.
            </p>

            {/* Kangra Royal Wedding */}
            <div className="mb-10 bg-gradient-to-br from-purple-50 via-rose-50 to-amber-50 rounded-2xl p-8 md:p-12 shadow-xl border-2 border-purple-200">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Crown className="h-10 w-10 text-purple-600" fill="#9333EA" />
                <h3 className="text-3xl md:text-4xl font-playfair font-bold text-center" style={{ color: '#7C3AED' }}>
                  #KangraRoyalWedding
                </h3>
                <Crown className="h-10 w-10 text-purple-600" fill="#9333EA" />
              </div>
              <p className="text-center text-xl font-semibold text-purple-800 mb-6">
                PRINCE OF KANGRA DYNASTY'S WEDDING
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  For this <span className="font-bold">KANGRA ROYAL WEDDING</span> we were the <span className="font-bold text-purple-700">EXCLUSIVE EVENT PARTNER</span>, which we organised for the ROYAL FAMILY OF KANGRA, who is the current King of Kangra Fort. The fort is the largest in the Indian Himalayas, and is under the protection of the Archaeological Survey of India.
                </p>
                <p>
                  The Kangra Fort is also the oldest fort in the Himalayas and, according to Indian Mythology, has a legendary history spanning approximately <span className="font-semibold">4000 years</span>.
                </p>
                <p className="font-semibold text-lg">
                  This ROYAL KANGRA WEDDING of ROYAL KANGRA PRINCE TIKARAJ AMBIKESHWAR KATOCH JI with RAJKUMARI KAMALAKSHI SINGH OF RAMNAGAR MP who is the granddaughter of former CM of Madhya Pradesh RAJA DIGVIJAY SINGH JI.
                </p>
                <p>
                  We planned, designed, and managed the whole Wedding Planning, Management, Hospitality, Décor, Artists, Performances, Sound and Entertainment for their wedding.
                </p>
                <div className="bg-white rounded-xl p-6 mt-6 shadow-inner">
                  <p className="font-semibold text-purple-800 mb-3">Distinguished Guests Included:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" fill="#F59E0B" />
                      <span>VVIP Royal Guests from Germany, France, Belgium, UK</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" fill="#F59E0B" />
                      <span>All major Indian Maharajas and Maharanis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bollywood Celebrity Weddings */}
            <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8 md:p-12 shadow-xl border-2 border-rose-200">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="h-10 w-10 text-rose-600" />
                <h3 className="text-3xl md:text-4xl font-playfair font-bold text-center" style={{ color: '#D9B38C' }}>
                  Bollywood Celebrity Weddings
                </h3>
                <Award className="h-10 w-10 text-rose-600" />
              </div>
              <p className="text-center text-lg text-gray-700 mb-8">
                We have been privileged to plan and execute weddings for prominent Bollywood celebrities, delivering world-class experiences with utmost privacy and excellence.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: "#GudDiChicky", description: "Bollywood Celebrity Wedding" },
                  { name: "#ManiKiMuskaan", description: "Film Industry Wedding" },
                  { name: "#JaiIsShaurAboutLove", description: "Celebrity Destination Wedding" }
                ].map((wedding, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md text-center">
                    <Star className="h-8 w-8 text-amber-500 mx-auto mb-3" fill="#F59E0B" />
                    <h4 className="text-xl font-playfair font-semibold mb-2" style={{ color: '#D9B38C' }}>
                      {wedding.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{wedding.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Pricing & Payment Schedule */}
          <section className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Pricing & Payment Schedule
            </h2>
            
            {/* Package Pricing */}
            <div className="text-center mb-10">
              <div className="inline-block px-12 py-6 rounded-2xl shadow-xl mb-4" 
                style={{ background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)' }}>
                <p className="text-lg text-white mb-2">Wedding Planning & Management Package</p>
                <p className="text-5xl font-playfair font-bold text-white">₹2,50,000 - ₹3,00,000</p>
                <p className="text-white mt-2">+ GST</p>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Flat fee for up to 100-150 guests and 2 days of wedding celebrations
              </p>
            </div>

            {/* Optional Add-on */}
            <div className="bg-amber-50 rounded-xl p-6 mb-10 border-2 border-amber-200">
              <h3 className="text-xl font-playfair font-semibold mb-3" style={{ color: '#D9B38C' }}>
                Add-on Optional - RSVP Management
              </h3>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">₹50,000</span> for up to 100 guests
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Sending out Save the Dates and static invites</li>
                <li>• Managing guest responses and dietary requirements</li>
                <li>• Coordinating stay arrangements and guest lists</li>
                <li>• Maintaining arrival and departure logistics sheet</li>
              </ul>
            </div>

            {/* Payment Schedule */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-rose-100 overflow-hidden">
              <div className="bg-gradient-to-r from-rose-100 to-amber-100 p-6">
                <h3 className="text-2xl font-playfair font-semibold text-center" style={{ color: '#2D2D2D' }}>
                  Payment Schedule
                </h3>
                <p className="text-center text-gray-700 mt-2 text-sm">
                  Note: Timely payment as per the schedule is essence of this agreement
                </p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-rose-50 to-white rounded-xl border border-rose-200">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)' }}>
                      1
                    </div>
                    <h4 className="font-semibold text-lg mb-2">First Installment</h4>
                    <p className="text-3xl font-bold mb-2" style={{ color: '#D9B38C' }}>50%</p>
                    <p className="text-sm text-gray-600">At the time of Booking</p>
                    <p className="text-xs text-gray-500 mt-2">Non-refundable advance</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-200">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)' }}>
                      2
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Second Installment</h4>
                    <p className="text-3xl font-bold mb-2" style={{ color: '#D9B38C' }}>35%</p>
                    <p className="text-sm text-gray-600">05 months prior to Event</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-200">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)' }}>
                      3
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Final Payment</h4>
                    <p className="text-3xl font-bold mb-2" style={{ color: '#D9B38C' }}>15%</p>
                    <p className="text-sm text-gray-600">20 days prior to Event</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Note:</span> All extra services/products taken during the event must be settled in Cash or via online transfer (NEFT/IMPS) before delivery of services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Terms & Conditions */}
          <section className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Terms & Conditions
            </h2>
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <ul className="space-y-4">
                {[
                  "It is your responsibility to provide us with contact names, telephone numbers and any scheduled timetables for all service providers no later than 14 days prior to the wedding.",
                  "We will use our professional judgment when taking action regarding changes beyond control, weather, etc. based on the situation and time limitations.",
                  "If change in weather causes us to change the decor, the extra cost will be on direct payable cost to you and will be taken before delivery of services.",
                  "There will be 08 hospitality personnel in all including shadows who will be on service for two days.",
                  "There will be 01 hospitality desk, where our staff will assist in check-in and logistics requirements.",
                  "We shall NOT require any room at any wedding venue & even we shall NOT charge for any recce visit or meeting charges for Dharamshala venues.",
                  "For outside Dharamshala, we do charge TBL for all members and rooms at venue.",
                  "The fee does not include any out-of-pocket expenses for the wedding. It is towards professional consultation only.",
                  "All recce and scouting expenses (travel, stay, stationery and sampling) will be borne by the client.",
                  "Prevailing Government Taxes will be extra and applicable on the total bill amount if billing is made on corporate account.",
                  "02 guest meals for event days for all three meals need to be provided by host at wedding venue for our Event & Decór Heads (F&B)."
                ].map((term, idx) => (
                  <li key={idx} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                      style={{ background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)' }}>
                      {idx + 1}
                    </span>
                    <span className="text-gray-700 pt-1">{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Cancellation Policy */}
          <section className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Cancellation Policy
            </h2>
            <div className="bg-red-50 rounded-2xl shadow-xl border-2 border-red-200 p-8">
              <p className="text-gray-700 mb-6 font-semibold">
                Note: First deposits are Non-refundable. However, we shall try to adjust the rest payments for future dates in case of emergencies beyond human control.
              </p>
              <p className="text-gray-700 mb-6">
                Any changes made to this letter of agreement must be made in writing. Cancellation must be notified in writing and will take effect the day it is received on mail.
              </p>
              <div className="space-y-4">
                {[
                  { period: "120 days or prior to event", charge: "35% of advance deposited" },
                  { period: "119 to 90 days prior to event", charge: "50% of advance deposited" },
                  { period: "89 to 60 days prior to event", charge: "60% of advance deposited" },
                  { period: "59 to 45 days prior to event", charge: "75% of advance deposited" },
                  { period: "44 to 30 days prior to event", charge: "85% of advance deposited" },
                  { period: "29 days or less prior to event", charge: "NO REFUND" }
                ].map((policy, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-red-100">
                    <span className="font-semibold text-gray-800">{policy.period}</span>
                    <span className="text-red-600 font-bold">{policy.charge}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm text-gray-700 mb-2 font-semibold">Additional Notes:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Hotels and vehicles booked through us have their own cancellation policies</li>
                  <li>• Flight tickets refund subject to terms and conditions as laid down by concerned airline</li>
                  <li>• Entertainment options (celebrities, live bands, singers, DJ) will have their own terms</li>
                  <li>• Bank and allied transaction charges will have to be borne by clients for all money transfers</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>

          {/* Next Steps & Contact */}
          <section className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-8 text-center" style={{ color: '#2D2D2D' }}>
              Next Steps
            </h2>
            <div className="bg-gradient-to-br from-rose-50 via-white to-amber-50 rounded-2xl p-8 md:p-10 shadow-xl border-2 border-rose-100">
              <p className="text-lg text-gray-700 mb-6 text-center">
                If you have selected the wise decision to move forward with our services, here are the next steps:
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Review and sign the enclosed agreement",
                  "Submit the initial deposit (50%) to secure your date",
                  "Schedule our first detailed planning meeting to start working on your wedding"
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ background: 'linear-gradient(135deg, #F8C7CC 0%, #D9B38C 100%)' }}>
                      {idx + 1}
                    </div>
                    <span className="text-gray-700 pt-2">{step}</span>
                  </div>
                ))}
              </div>
              <div className="text-center p-6 bg-amber-100 rounded-xl border-2 border-amber-300">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  ⚠️ IMPORTANT: AWAITING YOUR SOONEST CONFIRMATION
                </p>
                <p className="text-gray-700">
                  Nothing is on hold at the moment. Our dates are subject to availability unless confirmed with blocking payment (50% advance).
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center py-12 px-8 rounded-3xl shadow-2xl" 
            style={{ background: 'linear-gradient(135deg, #FFE8EC 0%, #F8C7CC 50%, #FFF9F7 100%)' }}>
            <Heart className="h-16 w-16 mx-auto mb-6 text-white animate-pulse" fill="white" />
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4 text-white">
              Ready to Begin Your Dream Wedding?
            </h2>
            <p className="text-white/95 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              We wish you all the happiness in the world and look forward to working with you and your family to make this wedding the most enjoyable and memorable days of your life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+918679333354"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 font-bold px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call Us: +91 86793 33354
              </a>
              <a
                href="https://wa.me/918679333354?text=Hi!%20I%20viewed%20your%20wedding%20proposal%20and%20I%27m%20interested%20in%20booking%20a%20destination%20wedding%20in%20Dharamshala."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-bold px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  color: 'white'
                }}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
            <div className="space-y-2 text-white/90">
              <p className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                holidays@prettyplanettravels.com
              </p>
              <p className="text-sm">
                Instagram: @DestinationWeddings_Honeymoon
              </p>
            </div>
          </section>

          {/* Closing */}
          <div className="text-center py-8">
            <p className="text-gray-600 italic text-lg">
              "Warm Regards, Thank you so much for your interest and attention.<br />
              We will be looking forward to hear from you."
            </p>
            <p className="mt-4 font-playfair font-semibold text-2xl" style={{ color: '#D9B38C' }}>
              Pretty Planet Travels and Events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingProposalViewer;
