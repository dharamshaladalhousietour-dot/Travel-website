import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Download, Send, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import SimpleEnquiryForm from './SimpleEnquiryForm';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

const TourPackages = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [expandedPackage, setExpandedPackage] = useState(null);
  
  // Scroll to enquiry form
  const scrollToEnquiryForm = (packageName) => {
    const formSection = document.getElementById('enquiry-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowEnquiryForm(true);
      setSelectedPackage({ title: packageName });
    }
  };
  
  console.log('TourPackages render - showEnquiryForm:', showEnquiryForm, 'selectedPackage:', selectedPackage?.title);

  const tourPackages = [
    // DOMESTIC PACKAGES - HIMACHAL PRADESH (15 packages)
    {
      id: 1,
      title: "Kashmir Honeymoon Special",
      duration: "5 Nights / 6 Days",
      region: "Kashmir",
      slug: "kashmir-honeymoon-5n6d",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d",
      price: "₹35,999",
      rating: 4.8,
      reviews: 156,
      highlights: ["Shikara ride in Dal Lake", "Houseboat stay", "Gulmarg cable car", "Pahalgam sightseeing"],
      itinerary: [
        "Day 1: Arrival in Srinagar, Shikara ride on Dal Lake, Houseboat check-in",
        "Day 2: Srinagar sightseeing - Mughal gardens, Hazratbal Mosque, local markets",
        "Day 3: Gulmarg excursion - Gondola ride, snow activities, beautiful meadows",
        "Day 4: Pahalgam visit - Betaab Valley, Aru Valley, Chandanwari sightseeing",
        "Day 5: Pahalgam local tour - river rafting, shopping, leisure time",
        "Day 6: Return to Srinagar airport, departure with beautiful memories"
      ],
      inclusions: ["Accommodation", "Transfers", "Breakfast & Dinner", "Sightseeing"],
      exclusions: ["Airfare", "Lunch", "Personal expenses", "Adventure activities"]
    },
    {
      id: 2,
      title: "Manali Honeymoon Delight",
      duration: "4 Nights / 5 Days", 
      region: "Himachal",
      slug: "manali-honeymoon-4n5d",
      image: "https://images.pexels.com/photos/2961109/pexels-photo-2961109.jpeg",
      price: "₹18,999",
      rating: 4.7,
      reviews: 203,
      highlights: ["Rohtang Pass", "Solang Valley", "Old Manali", "Adventure sports"],
      itinerary: [
        "Day 1: Arrival in Manali, check-in hotel, evening Mall Road exploration",
        "Day 2: Manali local sightseeing - Hadimba Temple, Manu Temple, Club House",
        "Day 3: Solang Valley adventure - paragliding, zorbing, cable car ride",
        "Day 4: Rohtang Pass excursion (subject to weather), snow activities",
        "Day 5: Check-out and departure, transfer to bus stand/airport"
      ],
      inclusions: ["Accommodation", "Transfers", "Breakfast", "Sightseeing"],
      exclusions: ["Airfare", "Lunch & Dinner", "Adventure activities", "Personal expenses"]
    },
    {
      id: 3,
      title: "Shimla Kufri Weekend",
      duration: "2 Nights / 3 Days",
      region: "Himachal", 
      slug: "shimla-kufri-weekend-2n3d",
      image: "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2",
      price: "₹12,999",
      rating: 4.5,
      reviews: 134,
      highlights: ["Mall Road", "Jakhu Temple", "Kufri", "Ridge"],
      itinerary: [
        "Day 1: Arrival in Shimla, check-in, evening Mall Road and Ridge walk",
        "Day 2: Shimla-Kufri sightseeing - Jakhu Temple, Kufri Fun World, horse riding",
        "Day 3: Local shopping, Christ Church visit, departure to bus stand"
      ],
      inclusions: ["Hotel", "Breakfast", "Local transfers"],
      exclusions: ["Transport to Shimla", "Meals", "Shopping"]
    },
    {
      id: 4,
      title: "Dharamshala Dalhousie Tour",
      duration: "5 Nights / 6 Days",
      region: "Himachal",
      slug: "dharamshala-dalhousie-5n6d",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      price: "₹22,999",
      rating: 4.6,
      reviews: 189,
      highlights: ["McLeod Ganj", "Dalai Lama Temple", "Khajjiar", "Dalhousie hills"],
      itinerary: [
        "Day 1: Arrival Dharamshala, check-in, local market visit",
        "Day 2: McLeod Ganj tour - Dalai Lama Temple, Bhagsu Waterfall",
        "Day 3: Drive to Dalhousie, check-in, local sightseeing",
        "Day 4: Khajjiar excursion - Mini Switzerland of India, activities",
        "Day 5: Dalhousie local tour - Mall Road, churches, viewpoints",
        "Day 6: Check-out and departure to nearest railway station"
      ],
      inclusions: ["Hotels", "Cab", "Breakfast", "Sightseeing"],
      exclusions: ["Railway/Air fare", "Lunch/Dinner", "Entry fees", "Personal expenses"]
    },
    {
      id: 5,
      title: "Kullu Manali Adventure",
      duration: "6 Nights / 7 Days",
      region: "Himachal",
      slug: "kullu-manali-adventure-6n7d",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      price: "₹28,999",
      rating: 4.8,
      reviews: 245,
      highlights: ["River rafting", "Trekking", "Manikaran", "Hot springs"],
      itinerary: [
        "Day 1: Arrival in Kullu, check-in, evening at leisure",
        "Day 2: Kullu-Manali drive, Kullu Shawl factory, Apple orchards",
        "Day 3: Manali local sightseeing, Hadimba Temple, Old Manali",
        "Day 4: Solang Valley adventure activities, paragliding, skiing",
        "Day 5: Manikaran excursion, hot springs, Gurudwara visit",
        "Day 6: River rafting in Beas river, trekking options",
        "Day 7: Check-out and departure, memorable journey ends"
      ],
      inclusions: ["Accommodation", "Meals", "Adventure activities", "Transport"],
      exclusions: ["Airfare", "Personal expenses", "Tips", "Insurance"]
    },
    {
      id: 6,
      title: "Spiti Valley Expedition",
      duration: "8 Nights / 9 Days",
      region: "Himachal",
      slug: "spiti-valley-expedition-8n9d",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
      price: "₹45,999",
      rating: 4.9,
      reviews: 167,
      highlights: ["High altitude desert", "Monasteries", "Chandratal Lake", "Key Monastery"],
      itinerary: [
        "Day 1: Shimla arrival, acclimatization, local sightseeing",
        "Day 2: Shimla to Kalpa, Kinnaur valley drive, apple orchards",
        "Day 3: Kalpa to Tabo, ancient monasteries, cave paintings",
        "Day 4: Tabo to Kaza, Pin Valley National Park, wildlife",
        "Day 5: Kaza local - Key Monastery, Kibber village, highest villages",
        "Day 6: Kaza to Chandratal Lake, camping, stargazing",
        "Day 7: Chandratal to Manali via Rohtang Pass, scenic drive",
        "Day 8: Manali local sightseeing, shopping, leisure",
        "Day 9: Departure from Manali, end of high altitude adventure"
      ],
      inclusions: ["Accommodation", "Meals", "Permits", "Guide", "Transport"],
      exclusions: ["Airfare", "Personal gear", "Tips", "Emergency evacuation"]
    },
    {
      id: 7,
      title: "Kasauli Chail Hill Station",
      duration: "3 Nights / 4 Days",
      region: "Himachal",
      slug: "kasauli-chail-3n4d",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c",
      price: "₹15,999",
      rating: 4.4,
      reviews: 112,
      highlights: ["Colonial charm", "Monkey Point", "Chail Palace", "Pine forests"],
      itinerary: [
        "Day 1: Arrival in Kasauli, check-in, Monkey Point sunset view",
        "Day 2: Kasauli sightseeing - Christ Church, Mall Road, Gilbert Trail",
        "Day 3: Chail excursion - Chail Palace, highest cricket ground, forest walk",
        "Day 4: Morning leisure, check-out and departure to Chandigarh"
      ],
      inclusions: ["Hotels", "Breakfast", "Transfers", "Sightseeing"],
      exclusions: ["Lunch/Dinner", "Entry fees", "Personal expenses"]
    },

    // RAJASTHAN (8 packages)
    {
      id: 8,
      title: "Jaipur Udaipur Royal Tour",
      duration: "5 Nights / 6 Days",
      region: "Rajasthan",
      slug: "jaipur-udaipur-royal-5n6d",
      image: "https://images.pexels.com/photos/2907578/pexels-photo-2907578.jpeg",
      price: "₹24,999",
      rating: 4.6,
      reviews: 167,
      highlights: ["Pink City", "City of Lakes", "Palaces", "Rajasthani culture"],
      itinerary: [
        "Day 1: Jaipur arrival, City Palace, Jantar Mantar, local markets",
        "Day 2: Amber Fort, Hawa Mahal, Jal Mahal, traditional dinner",
        "Day 3: Jaipur to Udaipur via Ajmer, Pushkar lake visit (optional)",
        "Day 4: Udaipur sightseeing - City Palace, Lake Pichola boat ride",
        "Day 5: Udaipur local - Jagdish Temple, Saheliyon ki Bari, sunset at Fateh Sagar",
        "Day 6: Check-out and departure to airport/railway station"
      ],
      inclusions: ["Accommodation", "Transport", "Guide", "Breakfast"],
      exclusions: ["Flights", "Lunch/Dinner", "Entry fees", "Shopping"]
    },
    {
      id: 9,
      title: "Jodhpur Jaisalmer Desert Safari",
      duration: "4 Nights / 5 Days",
      region: "Rajasthan",
      slug: "jodhpur-jaisalmer-desert-4n5d",
      image: "https://images.unsplash.com/photo-1599661046289-e31897b6a1ba",
      price: "₹21,999",
      rating: 4.7,
      reviews: 198,
      highlights: ["Blue City", "Golden City", "Camel safari", "Sand dunes"],
      itinerary: [
        "Day 1: Jodhpur arrival, Mehrangarh Fort, blue city walk",
        "Day 2: Jodhpur to Jaisalmer, check-in, Gadisar Lake sunset",
        "Day 3: Jaisalmer Fort, Patwon ki Haveli, evening Sam sand dunes",
        "Day 4: Desert safari, camel riding, cultural program, desert camping",
        "Day 5: Sunrise at dunes, return Jaisalmer, departure"
      ],
      inclusions: ["Hotels", "Desert camp", "Camel safari", "Cultural program", "Meals"],
      exclusions: ["Transport to Jodhpur", "Personal expenses", "Tips"]
    },
    {
      id: 10,
      title: "Pushkar Ajmer Spiritual Tour",
      duration: "3 Nights / 4 Days",
      region: "Rajasthan",
      slug: "pushkar-ajmer-spiritual-3n4d",
      image: "https://images.unsplash.com/photo-1578067892900-b684d4fb5bb3",
      price: "₹13,999",
      rating: 4.5,
      reviews: 143,
      highlights: ["Brahma Temple", "Ajmer Sharif", "Holy lake", "Spiritual experience"],
      itinerary: [
        "Day 1: Arrival in Pushkar, Brahma Temple, Pushkar Lake aarti",
        "Day 2: Pushkar sightseeing - ghats, temples, local bazaar",
        "Day 3: Ajmer excursion - Ajmer Sharif Dargah, Ana Sagar Lake",
        "Day 4: Morning prayers, check-out, departure to Jaipur"
      ],
      inclusions: ["Hotels", "Local transport", "Guide", "Breakfast"],
      exclusions: ["Train/Flight", "Other meals", "Donations", "Shopping"]
    },
    {
      id: 11,
      title: "Mount Abu Hill Station",
      duration: "3 Nights / 4 Days",
      region: "Rajasthan",
      slug: "mount-abu-hill-station-3n4d",
      image: "https://images.unsplash.com/photo-1570193582-5b8d11c6c7ee",
      price: "₹16,999",
      rating: 4.3,
      reviews: 124,
      highlights: ["Dilwara Temples", "Sunset Point", "Nakki Lake", "Cool climate"],
      itinerary: [
        "Day 1: Arrival in Mount Abu, check-in, Nakki Lake boating",
        "Day 2: Dilwara Temples, Guru Shikhar, Achalgarh Fort",
        "Day 3: Sunset Point, Honeymoon Point, local market shopping",
        "Day 4: Morning leisure, check-out and departure"
      ],
      inclusions: ["Accommodation", "Breakfast", "Local sightseeing"],
      exclusions: ["Transport to Mount Abu", "Other meals", "Entry fees"]
    },

    // GOA (4 packages)
    {
      id: 12,
      title: "Goa Beach Paradise",
      duration: "4 Nights / 5 Days",
      region: "Goa",
      slug: "goa-beach-paradise-4n5d",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      price: "₹19,999",
      rating: 4.6,
      reviews: 234,
      highlights: ["Beach hopping", "Water sports", "Nightlife", "Portuguese heritage"],
      itinerary: [
        "Day 1: Arrival in Goa, check-in beach resort, Baga Beach evening",
        "Day 2: North Goa - Calangute, Anjuna, Vagator beaches, flea market",
        "Day 3: South Goa - Colva, Palolem beaches, Dudhsagar Falls (optional)",
        "Day 4: Old Goa churches, spice plantation, river cruise with dinner",
        "Day 5: Beach leisure, water sports, departure from airport"
      ],
      inclusions: ["Beach resort", "Airport transfers", "Breakfast", "River cruise"],
      exclusions: ["Flights", "Lunch/Dinner", "Water sports", "Personal expenses"]
    },
    {
      id: 13,
      title: "Goa Honeymoon Special",
      duration: "5 Nights / 6 Days",
      region: "Goa",
      slug: "goa-honeymoon-special-5n6d",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
      price: "₹28,999",
      rating: 4.8,
      reviews: 189,
      highlights: ["Romantic beaches", "Candlelight dinner", "Luxury resort", "Couple spa"],
      itinerary: [
        "Day 1: Arrival, luxury beach resort check-in, welcome drinks",
        "Day 2: Private beach time, couple spa, romantic beachside dinner",
        "Day 3: Dudhsagar Falls, spice garden, traditional Goan lunch",
        "Day 4: Dolphin watching, water sports, sunset cruise with dinner",
        "Day 5: Old Goa heritage tour, shopping, leisure at resort",
        "Day 6: Beach walk, check-out, departure with beautiful memories"
      ],
      inclusions: ["Luxury resort", "All meals", "Spa session", "Cruise", "Transfers"],
      exclusions: ["Airfare", "Alcohol", "Personal expenses", "Additional spa"]
    },

    // KERALA (4 packages)
    {
      id: 14,
      title: "Kerala Backwaters Houseboat",
      duration: "5 Nights / 6 Days",
      region: "Kerala",
      slug: "kerala-backwaters-5n6d",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      price: "₹26,999",
      rating: 4.7,
      reviews: 178,
      highlights: ["Houseboat cruise", "Backwaters", "Coconut lagoons", "Ayurvedic spa"],
      itinerary: [
        "Day 1: Cochin arrival, Chinese fishing nets, spice market tour",
        "Day 2: Munnar drive, tea gardens, Mattupetty Dam, Echo Point",
        "Day 3: Munnar sightseeing - Eravikulam Park, Tea Museum, Top Station",
        "Day 4: Alleppey drive, houseboat check-in, backwater cruise",
        "Day 5: Houseboat experience, village visits, traditional Kerala lunch",
        "Day 6: Cochin return, Ayurvedic massage, departure"
      ],
      inclusions: ["Hotels", "Houseboat", "All meals on houseboat", "Transfers"],
      exclusions: ["Flights", "Ayurvedic treatments", "Shopping", "Tips"]
    },
    {
      id: 15,
      title: "Munnar Hill Station Escape",
      duration: "4 Nights / 5 Days",
      region: "Kerala",
      slug: "munnar-hill-station-4n5d",
      image: "https://images.unsplash.com/photo-1587474260584-136574528def",
      price: "₹18,999",
      rating: 4.5,
      reviews: 156,
      highlights: ["Tea plantations", "Misty hills", "Wildlife sanctuary", "Cool climate"],
      itinerary: [
        "Day 1: Cochin to Munnar, check-in hill resort, local market",
        "Day 2: Munnar sightseeing - Tea Museum, Mattupetty, Echo Point",
        "Day 3: Eravikulam National Park, Top Station, tea garden walk",
        "Day 4: Munnar local, spice shopping, Kundala Lake boating",
        "Day 5: Early morning hill view, departure to Cochin airport"
      ],
      inclusions: ["Hill resort", "Breakfast", "Sightseeing", "Transfers"],
      exclusions: ["Airfare", "Other meals", "Entry fees", "Shopping"]
    },

    // UTTARAKHAND (4 packages)
    {
      id: 16,
      title: "Rishikesh Haridwar Spiritual",
      duration: "3 Nights / 4 Days",
      region: "Uttarakhand",
      slug: "rishikesh-haridwar-spiritual-3n4d",
      image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7",
      price: "₹14,999",
      rating: 4.8,
      reviews: 198,
      highlights: ["Ganga Aarti", "River rafting", "Yoga sessions", "Spiritual experience"],
      itinerary: [
        "Day 1: Haridwar arrival, Har ki Pauri Ganga Aarti, evening prayers",
        "Day 2: Rishikesh excursion - Laxman Jhula, Beatles Ashram, yoga session",
        "Day 3: River rafting in Ganges, adventure activities, Neelkanth Temple",
        "Day 4: Morning meditation, temple visits, departure"
      ],
      inclusions: ["Hotels", "Yoga classes", "Breakfast", "Rafting"],
      exclusions: ["Transport to destination", "Other meals", "Personal expenses"]
    },
    {
      id: 17,
      title: "Nainital Mussoorie Hill Tour",
      duration: "5 Nights / 6 Days",
      region: "Uttarakhand",
      slug: "nainital-mussoorie-5n6d",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c",
      price: "₹22,999",
      rating: 4.6,
      reviews: 167,
      highlights: ["Naini Lake", "Mall Road", "Cable car", "Queen of Hills"],
      itinerary: [
        "Day 1: Delhi to Nainital, lake city check-in, boat ride",
        "Day 2: Nainital sightseeing - Naina Devi Temple, Snow View Point",
        "Day 3: Nainital to Mussoorie, Queen of Hills arrival, Mall Road",
        "Day 4: Mussoorie local - Kempty Falls, Gun Hill, cable car ride",
        "Day 5: Dhanaulti excursion, eco-park, apple orchards visit",
        "Day 6: Morning leisure, departure to Delhi/Dehradun"
      ],
      inclusions: ["Hotels", "Breakfast", "Transfers", "Boating"],
      exclusions: ["Transport from Delhi", "Other meals", "Cable car", "Shopping"]
    },

    // MADHYA PRADESH (3 packages)
    {
      id: 18,
      title: "Khajuraho Temple Tour",
      duration: "3 Nights / 4 Days",
      region: "Madhya Pradesh",
      slug: "khajuraho-temple-tour-3n4d",
      image: "https://images.unsplash.com/photo-1571047399443-7d25c8ff6e43",
      price: "₹17,999",
      rating: 4.4,
      reviews: 134,
      highlights: ["UNESCO World Heritage", "Erotic sculptures", "Light & Sound show", "Ancient architecture"],
      itinerary: [
        "Day 1: Arrival in Khajuraho, temple complex visit, heritage walk",
        "Day 2: Eastern & Western group temples, museum visit, sculpture tour",
        "Day 3: Light & Sound show, local market, traditional crafts shopping",
        "Day 4: Morning temple prayers, departure to nearest airport"
      ],
      inclusions: ["Heritage hotel", "Guide", "Breakfast", "Light show"],
      exclusions: ["Flights", "Other meals", "Entry fees", "Shopping"]
    },

    // KARNATAKA (3 packages)
    {
      id: 19,
      title: "Coorg Coffee Plantation",
      duration: "4 Nights / 5 Days",
      region: "Karnataka",
      slug: "coorg-coffee-plantation-4n5d",
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9",
      price: "₹19,999",
      rating: 4.7,
      reviews: 145,
      highlights: ["Coffee estates", "Abbey Falls", "Dubare Elephant Camp", "Misty hills"],
      itinerary: [
        "Day 1: Bangalore to Coorg, coffee plantation resort check-in",
        "Day 2: Coorg sightseeing - Abbey Falls, Raja's Seat, coffee tour",
        "Day 3: Dubare Elephant Camp, river rafting, spice plantation visit",
        "Day 4: Namdroling Monastery, local Coorg culture, traditional lunch",
        "Day 5: Morning plantation walk, departure to Bangalore"
      ],
      inclusions: ["Plantation resort", "All meals", "Plantation tour", "Activities"],
      exclusions: ["Transport from Bangalore", "Personal expenses", "Tips"]
    },

    // WEST BENGAL (2 packages)
    {
      id: 20,
      title: "Darjeeling Tea Garden Tour",
      duration: "4 Nights / 5 Days",
      region: "West Bengal",
      slug: "darjeeling-tea-garden-4n5d",
      image: "https://images.unsplash.com/photo-1597149101112-afc363d4c4b7",
      price: "₹21,999",
      rating: 4.6,
      reviews: 189,
      highlights: ["Toy train", "Tiger Hill sunrise", "Tea gardens", "Himalayan views"],
      itinerary: [
        "Day 1: Arrival in Darjeeling, hotel check-in, Mall Road walk",
        "Day 2: Tiger Hill sunrise, Batasia Loop, Darjeeling Railway",
        "Day 3: Tea garden visit, Happy Valley Tea Estate, tea tasting",
        "Day 4: Himalayan Mountaineering Institute, Zoo, Peace Pagoda",
        "Day 5: Morning leisure, toy train ride, departure"
      ],
      inclusions: ["Hotels", "Toy train", "Tea garden tour", "Breakfast"],
      exclusions: ["Transport to Darjeeling", "Other meals", "Personal expenses"]
    },

    // INTERNATIONAL PACKAGES (10 packages)
    {
      id: 21,
      title: "Dubai Marina Luxury",
      duration: "4 Nights / 5 Days",
      region: "International",
      slug: "dubai-marina-luxury-4n5d",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      price: "₹45,999",
      rating: 4.8,
      reviews: 298,
      highlights: ["Burj Khalifa", "Desert safari", "Marina cruise", "Shopping festival"],
      itinerary: [
        "Day 1: Dubai arrival, Marina hotel check-in, Dhow cruise dinner",
        "Day 2: Burj Khalifa visit, Dubai Mall, fountain show, gold souk",
        "Day 3: Desert safari adventure, camel riding, BBQ dinner with entertainment",
        "Day 4: Abu Dhabi day trip - Sheikh Zayed Mosque, Emirates Palace",
        "Day 5: Last minute shopping, departure from Dubai International Airport"
      ],
      inclusions: ["4-star hotel", "Desert safari", "Abu Dhabi tour", "Airport transfers"],
      exclusions: ["Flights", "Visa fees", "Personal expenses", "Additional meals"]
    },
    {
      id: 22,
      title: "Singapore Malaysia Combo",
      duration: "6 Nights / 7 Days",
      region: "International",
      slug: "singapore-malaysia-combo-6n7d",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
      price: "₹52,999",
      rating: 4.7,
      reviews: 234,
      highlights: ["Universal Studios", "Petronas Towers", "Gardens by Bay", "Genting Highlands"],
      itinerary: [
        "Day 1: Singapore arrival, city tour - Merlion, Marina Bay Sands",
        "Day 2: Universal Studios full day, Sentosa Island, cable car",
        "Day 3: Gardens by the Bay, Singapore Zoo, night safari",
        "Day 4: Singapore to Kuala Lumpur, Petronas Towers, KLCC shopping",
        "Day 5: Genting Highlands day trip, casino, outdoor theme park",
        "Day 6: Batu Caves, city tour, Central Market, traditional dinner",
        "Day 7: Last minute shopping, departure from Kuala Lumpur"
      ],
      inclusions: ["Hotels", "Universal Studios", "Transfers", "City tours"],
      exclusions: ["Flights", "Visa", "Meals", "Personal expenses", "Casino chips"]
    },
    {
      id: 23,
      title: "Thailand Bangkok Pattaya",
      duration: "5 Nights / 6 Days",
      region: "International",
      slug: "thailand-bangkok-pattaya-5n6d",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      price: "₹38,999",
      rating: 4.6,
      reviews: 267,
      highlights: ["Golden Buddha", "Coral Island", "Floating market", "Thai massage"],
      itinerary: [
        "Day 1: Bangkok arrival, Golden Buddha Temple, Chao Phraya river cruise",
        "Day 2: Bangkok city tour - Grand Palace, Emerald Buddha, local markets",
        "Day 3: Bangkok to Pattaya, Coral Island tour, water sports, beach time",
        "Day 4: Pattaya local - Nong Nooch Garden, elephant show, cultural program",
        "Day 5: Floating market, Thai cooking class, traditional massage",
        "Day 6: Shopping at weekend market, departure from Bangkok airport"
      ],
      inclusions: ["Hotels", "Island tour", "Cultural shows", "Airport transfers"],
      exclusions: ["International flights", "Visa fees", "Personal expenses", "Water sports"]
    },
    {
      id: 24,
      title: "Bali Indonesia Paradise",
      duration: "5 Nights / 6 Days",
      region: "International",
      slug: "bali-indonesia-paradise-5n6d",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      price: "₹42,999",
      rating: 4.8,
      reviews: 189,
      highlights: ["Uluwatu Temple", "Rice terraces", "Volcano tour", "Beach clubs"],
      itinerary: [
        "Day 1: Bali arrival, Seminyak beach resort, sunset at Tanah Lot",
        "Day 2: Ubud day trip - rice terraces, monkey forest, art villages",
        "Day 3: Volcano sunrise tour - Mount Batur, hot springs, coffee plantation",
        "Day 4: Uluwatu Temple, Kecak dance, Jimbaran seafood dinner on beach",
        "Day 5: Water sports at Tanjung Benoa, spa treatment, beach leisure",
        "Day 6: Traditional market shopping, departure from Ngurah Rai airport"
      ],
      inclusions: ["Beach resort", "Volcano tour", "Cultural shows", "Spa session"],
      exclusions: ["International flights", "Visa on arrival", "Personal expenses", "Water sports"]
    },
    {
      id: 25,
      title: "Maldives Honeymoon Villa",
      duration: "4 Nights / 5 Days",
      region: "International",
      slug: "maldives-honeymoon-villa-4n5d",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      price: "₹85,999",
      rating: 4.9,
      reviews: 134,
      highlights: ["Overwater villa", "Private beach", "Couple spa", "Dolphin watching"],
      itinerary: [
        "Day 1: Male arrival, seaplane transfer to resort, overwater villa check-in",
        "Day 2: Snorkeling trip, coral reef exploration, romantic beach dinner",
        "Day 3: Dolphin watching cruise, couple spa treatment, sunset fishing",
        "Day 4: Island hopping, local village visit, water sports, private dining",
        "Day 5: Morning leisure, seaplane back to Male, international departure"
      ],
      inclusions: ["Overwater villa", "All meals", "Seaplane transfers", "Activities"],
      exclusions: ["International flights", "Alcohol", "Personal expenses", "Additional spa"]
    },
    {
      id: 26,
      title: "Sri Lanka Cultural Tour",
      duration: "6 Nights / 7 Days",
      region: "International",
      slug: "sri-lanka-cultural-tour-6n7d",
      image: "https://images.unsplash.com/photo-1566043263610-85d5b2a5eef9",
      price: "₹34,999",
      rating: 4.5,
      reviews: 156,
      highlights: ["Sigiriya Rock", "Kandy Temple", "Tea plantations", "Wildlife safari"],
      itinerary: [
        "Day 1: Colombo arrival, city tour, Galle Face Green, local markets",
        "Day 2: Colombo to Sigiriya, ancient rock fortress, cave paintings",
        "Day 3: Polonnaruwa ancient city, medieval capital ruins, archaeological sites",
        "Day 4: Kandy drive, Temple of Tooth Relic, cultural dance performance",
        "Day 5: Nuwara Eliya hill station, tea factory visit, colonial architecture",
        "Day 6: Yala National Park safari, leopard spotting, elephant watching",
        "Day 7: Return to Colombo, last minute shopping, departure"
      ],
      inclusions: ["Hotels", "Safari jeep", "Cultural shows", "All transfers"],
      exclusions: ["Flights", "Visa", "Personal expenses", "Tips to guides"]
    },
    {
      id: 27,
      title: "Nepal Kathmandu Pokhara",
      duration: "5 Nights / 6 Days",
      region: "International",
      slug: "nepal-kathmandu-pokhara-5n6d",
      image: "https://images.unsplash.com/photo-1605859050862-5b07008e0feb",
      price: "₹29,999",
      rating: 4.6,
      reviews: 178,
      highlights: ["Himalayan views", "Pashupatinath", "Phewa Lake", "Mountain flights"],
      itinerary: [
        "Day 1: Kathmandu arrival, Durbar Square, Swayambhunath Stupa (Monkey Temple)",
        "Day 2: Kathmandu sightseeing - Pashupatinath, Boudhanath, Patan Durbar Square",
        "Day 3: Mountain flight (optional), drive to Pokhara, Phewa Lake boating",
        "Day 4: Pokhara sightseeing - Sarangkot sunrise, Davis Falls, Gupteshwor Cave",
        "Day 5: Pokhara adventure - paragliding (optional), Peace Pagoda, lakeside walk",
        "Day 6: Return to Kathmandu, traditional market shopping, departure"
      ],
      inclusions: ["Hotels", "Sightseeing", "Transfers", "Boating"],
      exclusions: ["Flights", "Visa fees", "Mountain flight", "Adventure activities"]
    },
    {
      id: 28,
      title: "Bhutan Thimphu Paro",
      duration: "4 Nights / 5 Days",
      region: "International",
      slug: "bhutan-thimphu-paro-4n5d",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24",
      price: "₹48,999",
      rating: 4.7,
      reviews: 112,
      highlights: ["Tiger's Nest", "Gross National Happiness", "Buddhist monasteries", "Carbon negative country"],
      itinerary: [
        "Day 1: Paro arrival, drive to Thimphu, Memorial Chorten, local market",
        "Day 2: Thimphu sightseeing - Tashichho Dzong, Buddha Dordenma statue",
        "Day 3: Thimphu to Paro, Rinpung Dzong, traditional farm house visit",
        "Day 4: Tiger's Nest Monastery hike (3-4 hours), most sacred Buddhist site",
        "Day 5: Paro local sightseeing, traditional handicrafts shopping, departure"
      ],
      inclusions: ["Hotels", "All meals", "Guide", "Permits", "Transfers"],
      exclusions: ["Flights", "Visa fees", "Personal expenses", "Tips"]
    },
    {
      id: 29,
      title: "Turkey Istanbul Cappadocia",
      duration: "6 Nights / 7 Days",
      region: "International",
      slug: "turkey-istanbul-cappadocia-6n7d",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b",
      price: "₹65,999",
      rating: 4.8,
      reviews: 167,
      highlights: ["Hot air balloon", "Hagia Sophia", "Fairy chimneys", "Grand Bazaar"],
      itinerary: [
        "Day 1: Istanbul arrival, Blue Mosque, Hagia Sophia, Sultanahmet Square",
        "Day 2: Topkapi Palace, Grand Bazaar shopping, Bosphorus cruise dinner",
        "Day 3: Flight to Cappadocia, fairy chimneys, underground city tour",
        "Day 4: Hot air balloon ride (optional), Open Air Museum, pottery workshop",
        "Day 5: Cappadocia valleys, cave churches, traditional Turkish night",
        "Day 6: Return to Istanbul, Galata Tower, Taksim Square, last minute shopping",
        "Day 7: Istanbul departure, transfer to airport for international flight"
      ],
      inclusions: ["Hotels", "Domestic flights", "Cave hotel", "City tours"],
      exclusions: ["International flights", "Visa", "Hot air balloon", "Personal expenses"]
    },
    {
      id: 30,
      title: "Egypt Cairo Luxor Cruise",
      duration: "7 Nights / 8 Days",
      region: "International",
      slug: "egypt-cairo-luxor-cruise-7n8d",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
      price: "₹72,999",
      rating: 4.6,
      reviews: 145,
      highlights: ["Pyramids of Giza", "Nile cruise", "Valley of Kings", "Sphinx"],
      itinerary: [
        "Day 1: Cairo arrival, Pyramids of Giza, Great Sphinx, Sound & Light show",
        "Day 2: Egyptian Museum, Islamic Cairo, Khan El Khalili bazaar",
        "Day 3: Flight to Luxor, Valley of Kings, Karnak Temple, Nile cruise check-in",
        "Day 4: Nile cruise - Edfu Temple, sailing through scenic landscapes",
        "Day 5: Kom Ombo Temple, Aswan High Dam, Philae Temple, Nubian village",
        "Day 6: Abu Simbel excursion (optional), traditional felucca sailing",
        "Day 7: Return to Luxor, Luxor Temple, traditional Egyptian dinner",
        "Day 8: Flight to Cairo, last minute shopping, departure"
      ],
      inclusions: ["Hotels", "Nile cruise", "Domestic flights", "All tours"],
      exclusions: ["International flights", "Visa", "Abu Simbel", "Personal expenses"]
    },

    // Additional Domestic Packages to reach 40 total (Adding 20 more)
    
    // HIMACHAL PRADESH (5 more)
    {
      id: 31,
      title: "Kasol Tosh Malana Trek",
      duration: "4 Nights / 5 Days",
      region: "Himachal",
      slug: "kasol-tosh-malana-trek-4n5d",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      price: "₹16,999",
      rating: 4.7,
      reviews: 189,
      highlights: ["Parvati Valley", "Israeli cuisine", "Village trek", "Cannabis culture"],
      itinerary: [
        "Day 1: Delhi to Kasol, check-in riverside camps, evening market walk",
        "Day 2: Kasol to Tosh village trek, scenic valley views, overnight stay",
        "Day 3: Tosh to Malana village, ancient culture, unique traditions",
        "Day 4: Malana to Kasol return, riverside cafes, Israeli food",
        "Day 5: Kasol to Delhi departure, memories of Parvati Valley"
      ],
      inclusions: ["Camps", "Trekking guide", "Meals", "Permits"],
      exclusions: ["Transport to Kasol", "Personal gear", "Tips"]
    },
    {
      id: 32,
      title: "Pin Parvati Trek",
      duration: "10 Nights / 11 Days",
      region: "Himachal",
      slug: "pin-parvati-trek-10n11d",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
      price: "₹55,999",
      rating: 4.9,
      reviews: 78,
      highlights: ["High altitude trek", "Pin Valley", "Parvati Valley", "Adventure challenge"],
      itinerary: [
        "Day 1: Manali arrival, equipment check, briefing session",
        "Day 2: Manali to Barsheni, trek base camp setup",
        "Day 3-8: Pin Parvati trek - high altitude crossing, camping",
        "Day 9: Descent to Mudh village, celebration dinner",
        "Day 10: Mudh to Kaza, Spiti Valley sightseeing",
        "Day 11: Kaza to Manali, departure"
      ],
      inclusions: ["Trekking gear", "Guide", "Permits", "Camping", "Meals"],
      exclusions: ["Personal gear", "Insurance", "Emergency evacuation"]
    },
    {
      id: 33,
      title: "Kinnaur Kailash Circuit",
      duration: "7 Nights / 8 Days",
      region: "Himachal",
      slug: "kinnaur-kailash-circuit-7n8d",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c",
      price: "₹32,999",
      rating: 4.6,
      reviews: 134,
      highlights: ["Sacred mountain", "Apple orchards", "Sangla Valley", "Tibetan culture"],
      itinerary: [
        "Day 1: Shimla to Sarahan, Bhimakali Temple visit",
        "Day 2: Sarahan to Sangla, apple orchards, Baspa Valley",
        "Day 3: Sangla to Chitkul, last Indian village, border visit",
        "Day 4: Chitkul to Kalpa, Kinnaur Kailash views",
        "Day 5: Kalpa to Reckong Peo, local monastery visits",
        "Day 6: Reckong Peo to Sarahan, traditional culture",
        "Day 7: Sarahan to Shimla, scenic drive back",
        "Day 8: Shimla local sightseeing, departure"
      ],
      inclusions: ["Hotels", "Transport", "Permits", "Guide"],
      exclusions: ["Meals", "Personal expenses", "Tips"]
    },

    // UTTARAKHAND (5 more)
    {
      id: 34,
      title: "Valley of Flowers Trek",
      duration: "6 Nights / 7 Days",
      region: "Uttarakhand",
      slug: "valley-of-flowers-trek-6n7d",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      price: "₹24,999",
      rating: 4.8,
      reviews: 167,
      highlights: ["UNESCO World Heritage", "Alpine flowers", "Hemkund Sahib", "Nanda Devi views"],
      itinerary: [
        "Day 1: Haridwar to Govindghat, pilgrimage base camp",
        "Day 2: Govindghat to Ghangaria, trek through forests",
        "Day 3: Valley of Flowers visit, rare alpine flowers",
        "Day 4: Hemkund Sahib trek, sacred Sikh shrine",
        "Day 5: Ghangaria to Govindghat, descent through villages",
        "Day 6: Govindghat to Rishikesh, Ganga aarti",
        "Day 7: Rishikesh to Haridwar, departure"
      ],
      inclusions: ["Accommodation", "Trekking permits", "Guide", "Meals"],
      exclusions: ["Personal gear", "Porter charges", "Insurance"]
    },
    {
      id: 35,
      title: "Kedarnath Badrinath Char Dham",
      duration: "8 Nights / 9 Days",
      region: "Uttarakhand",
      slug: "kedarnath-badrinath-char-dham-8n9d",
      image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7",
      price: "₹35,999",
      rating: 4.7,
      reviews: 234,
      highlights: ["Sacred pilgrimage", "Char Dham yatra", "Helicopter option", "Spiritual journey"],
      itinerary: [
        "Day 1: Haridwar arrival, Har ki Pauri aarti",
        "Day 2: Haridwar to Guptkashi, Kedarnath base",
        "Day 3: Kedarnath temple visit, darshan (helicopter optional)",
        "Day 4: Kedarnath to Badrinath, scenic mountain drive",
        "Day 5: Badrinath temple, Mana village (last Indian village)",
        "Day 6: Badrinath to Joshimath, Auli meadows (optional)",
        "Day 7: Joshimath to Rishikesh, adventure capital",
        "Day 8: Rishikesh local, yoga and meditation",
        "Day 9: Rishikesh to Haridwar, departure"
      ],
      inclusions: ["Hotels", "Transport", "Temple VIP darshan", "Guide"],
      exclusions: ["Helicopter charges", "Personal expenses", "Donations"]
    },

    // RAJASTHAN (3 more)
    {
      id: 36,
      title: "Ranthambore Wildlife Safari",
      duration: "3 Nights / 4 Days",
      region: "Rajasthan",
      slug: "ranthambore-wildlife-safari-3n4d",
      image: "https://images.unsplash.com/photo-1574687944771-8b404cb4dc87",
      price: "₹18,999",
      rating: 4.6,
      reviews: 178,
      highlights: ["Tiger safari", "Wildlife photography", "Ranthambore Fort", "Jungle lodge"],
      itinerary: [
        "Day 1: Jaipur to Ranthambore, wildlife resort check-in",
        "Day 2: Morning and evening jungle safari, tiger spotting",
        "Day 3: Ranthambore Fort visit, wildlife museum, nature walk",
        "Day 4: Early morning safari, departure to Jaipur"
      ],
      inclusions: ["Jungle resort", "Safari jeep", "Guide", "All meals"],
      exclusions: ["Transport from Jaipur", "Camera fees", "Tips"]
    },
    {
      id: 37,
      title: "Bikaner Desert Circuit",
      duration: "4 Nights / 5 Days",
      region: "Rajasthan",
      slug: "bikaner-desert-circuit-4n5d",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
      price: "₹19,999",
      rating: 4.4,
      reviews: 145,
      highlights: ["Junagarh Fort", "Camel breeding farm", "Desert culture", "Karni Mata Temple"],
      itinerary: [
        "Day 1: Arrival in Bikaner, Junagarh Fort, local markets",
        "Day 2: Camel breeding farm, desert village visit",
        "Day 3: Karni Mata Temple (Rat Temple), cultural program",
        "Day 4: Bikaner to Jaisalmer, golden city arrival",
        "Day 5: Jaisalmer fort, departure"
      ],
      inclusions: ["Hotels", "Transport", "Guide", "Cultural show"],
      exclusions: ["Meals", "Entry fees", "Personal expenses"]
    },

    // KERALA (2 more)
    {
      id: 38,
      title: "Thekkady Periyar Wildlife",
      duration: "4 Nights / 5 Days",
      region: "Kerala",
      slug: "thekkady-periyar-wildlife-4n5d",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      price: "₹21,999",
      rating: 4.5,
      reviews: 156,
      highlights: ["Spice plantations", "Periyar lake", "Elephant rides", "Tribal village"],
      itinerary: [
        "Day 1: Cochin to Thekkady, spice plantation resort",
        "Day 2: Periyar Wildlife Sanctuary, boat safari",
        "Day 3: Elephant rides, tribal village visit, spice tour",
        "Day 4: Kumily market, bamboo rafting, nature walk",
        "Day 5: Thekkady to Cochin, departure"
      ],
      inclusions: ["Spice resort", "Wildlife permits", "Boat safari", "Activities"],
      exclusions: ["Transport from Cochin", "Personal expenses", "Tips"]
    },

    // TAMIL NADU (2 packages)
    {
      id: 39,
      title: "Ooty Kodaikanal Hill Stations",
      duration: "5 Nights / 6 Days",
      region: "Tamil Nadu",
      slug: "ooty-kodaikanal-hill-stations-5n6d",
      image: "https://images.unsplash.com/photo-1587474260584-136574528def",
      price: "₹23,999",
      rating: 4.6,
      reviews: 189,
      highlights: ["Nilgiri toy train", "Rose garden", "Kodai Lake", "Hill station charm"],
      itinerary: [
        "Day 1: Bangalore to Ooty, toy train journey (optional)",
        "Day 2: Ooty sightseeing - Botanical Garden, Doddabetta Peak",
        "Day 3: Ooty to Kodaikanal, hill station drive",
        "Day 4: Kodaikanal - Kodai Lake, Bryant Park, Pillar Rocks",
        "Day 5: Kodaikanal local, shopping at markets",
        "Day 6: Kodaikanal to Madurai/Bangalore, departure"
      ],
      inclusions: ["Hill resorts", "Toy train", "Sightseeing", "Breakfast"],
      exclusions: ["Transport to base", "Other meals", "Personal expenses"]
    },

    // ANDHRA PRADESH (1 package)
    {
      id: 40,
      title: "Tirupati Tirumala Pilgrimage",
      duration: "3 Nights / 4 Days",
      region: "Andhra Pradesh",
      slug: "tirupati-tirumala-pilgrimage-3n4d",
      image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7",
      price: "₹15,999",
      rating: 4.7,
      reviews: 267,
      highlights: ["Lord Venkateswara", "Sacred temple", "VIP darshan", "Spiritual experience"],
      itinerary: [
        "Day 1: Chennai/Bangalore to Tirupati, temple town arrival",
        "Day 2: Tirumala temple VIP darshan, Lord Venkateswara blessings",
        "Day 3: Tirupati local temples, Sri Vari Museum, shopping",
        "Day 4: Morning prayers, departure with divine blessings"
      ],
      inclusions: ["Hotels", "VIP darshan tickets", "Transport", "Guide"],
      exclusions: ["Train/Flight fares", "Donations", "Personal expenses"]
    }
  ];

  const regions = ['All', 'Kashmir', 'Himachal', 'Rajasthan', 'Uttarakhand', 'Goa', 'Kerala', 'Madhya Pradesh', 'Karnataka', 'West Bengal', 'International'];
  
  const filteredPackages = selectedRegion === 'All' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.region === selectedRegion);

  const PackageCard = ({ pkg }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleEnquireNow = () => {
      console.log('Opening enquiry form for:', pkg.title);
      setSelectedPackage(pkg);
      setShowEnquiryForm(true);
    };

    const handleImageError = () => {
      setImageError(true);
      setImageLoaded(true);
    };

    const handleImageLoad = () => {
      setImageError(false);
      setImageLoaded(true);
    };

    // Generate optimized image URL with WebP support and fallback
    const getOptimizedImageUrl = (url) => {
      if (!url) return null;
      
      // Check if it's an Unsplash or Pexels URL
      if (url.includes('unsplash.com') || url.includes('pexels.com')) {
        // Add optimization parameters
        const separator = url.includes('?') ? '&' : '?';
        return `${url}${separator}w=800&h=400&fit=crop&q=80&auto=format`;
      }
      
      return url;
    };

    return (
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative">
          {/* Fixed aspect ratio container to prevent layout shifts */}
          <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
            
            {/* Image with WebP optimization and guaranteed CSS fallback */}
            {!imageError ? (
              <img
                src={getOptimizedImageUrl(pkg.image)}
                alt={`${pkg.title} by best travel agent in Dharamshala - ${pkg.duration} ${pkg.region === 'Himachal' ? 'Himachal tour package' : 'tour package'} - Pretty Planet Travels Dharamshala`}
                loading="lazy"
                decoding="async"
                onLoad={handleImageLoad}
                onError={handleImageError}
                className={`w-full h-48 object-cover transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                width="600"
                height="300"
              />
            ) : (
              <div 
                className="w-full h-48 flex items-center justify-center text-white font-bold text-2xl"
                style={{
                  background: pkg.region === 'Kashmir' ? 'linear-gradient(135deg, #0a3570 0%, #1e4d7b 100%)' :
                             pkg.region === 'Himachal' ? 'linear-gradient(135deg, #1e4d7b 0%, #2563eb 100%)' :
                             pkg.region === 'Rajasthan' ? 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)' :
                             pkg.region === 'Goa' ? 'linear-gradient(135deg, #059669 0%, #10b981 100%)' :
                             pkg.region === 'Kerala' ? 'linear-gradient(135deg, #047857 0%, #059669 100%)' :
                             pkg.region === 'Uttarakhand' ? 'linear-gradient(135deg, #0369a1 0%, #0284c7 100%)' :
                             pkg.region === 'International' ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' :
                             'linear-gradient(135deg, #64748b 0%, #94a3b8 100%)'
                }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">📸</div>
                  <div>{pkg.region}</div>
                </div>
              </div>
            )}
          </div>
          
          <div className="absolute top-4 left-4">
            <Badge className="bg-blue-600 text-white shadow-lg">{pkg.region}</Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-600 text-white shadow-lg">{pkg.price}</Badge>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="font-semibold">{pkg.rating}</span>
              <span className="text-gray-500 text-sm">({pkg.reviews} reviews)</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {pkg.duration}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-blue-900 mb-3">{pkg.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {pkg.highlights.slice(0, 3).map((highlight, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {highlight}
              </Badge>
            ))}
            {pkg.highlights.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{pkg.highlights.length - 3} more
              </Badge>
            )}
          </div>

          <div className="flex flex-col space-y-3">
            {/* Action Buttons - View Details, Call Now, Book Now */}
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200 text-sm"
                onClick={() => setExpandedPackage(expandedPackage === pkg.id ? null : pkg.id)}
              >
                {expandedPackage === pkg.id ? 'Hide Details' : 'View Details'}
              </Button>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white transition-colors duration-200 text-sm"
                onClick={() => window.location.href = 'tel:+918679333355'}
              >
                Call Now
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 text-sm"
                onClick={() => {
                  const message = `Hi! I want to book ${pkg.title}\n\nDuration: ${pkg.duration}\nPrice: ${pkg.price}\n\nPlease provide me with more details.`;
                  window.open(`https://wa.me/918679333354?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Book Now
              </Button>
            </div>
            
            {/* Package Price Display */}
            <div className="text-center py-3 mt-2">
              <p className="text-lg font-bold" style={{ color: '#008080' }}>
                Starting from {pkg.price}
              </p>
            </div>
          </div>

          {showDetails && (
            <div className="border-t pt-4 space-y-4">
              <div>
                <h4 className="font-bold text-green-600 mb-2">Inclusions</h4>
                <ul className="text-sm space-y-1">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-red-600 mb-2">Exclusions</h4>
                <ul className="text-sm space-y-1">
                  {pkg.exclusions.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="itinerary">
                  <AccordionTrigger>Day-wise Itinerary</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {pkg.itinerary.map((day, index) => (
                        <div key={index} className="border-l-2 border-blue-200 pl-4">
                          <p className="text-sm text-gray-700 font-medium">{day}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex flex-col space-y-3">
                <div className="flex space-x-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold"
                    onClick={() => {
                      setSelectedPackage(pkg);
                      setShowEnquiryForm(true);
                    }}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enquire Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold"
                    onClick={() => {
                      setSelectedPackage(pkg);
                      setShowEnquiryForm(true);
                    }}
                  >
                    Plan Your Trip
                  </Button>
                </div>
                <Button variant="ghost" className="w-full text-green-600 hover:text-green-700 hover:bg-green-50">
                  <a 
                    href={`https://wa.me/918679333355?text=Hi! I'm interested in ${pkg.title} package`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full"
                  >
                    WhatsApp Quick Chat
                  </a>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="tour-packages" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <SEOHead 
        title="Best Travel Agent in Dharamshala | Himachal Tour Packages | Pretty Planet Travels"
        description="Pretty Planet Travels - Best travel agent in Dharamshala. Book Dharamshala Dalhousie tour package, Shimla Manali tour package, and Himachal tour packages. Expert Dharamshala tour agent since 2010."
        canonical="https://www.prettyplanettravels.com/tour-packages"
        keywords="travel agent in Dharamshala, best travel agent in Dharamshala, Dharamshala Dalhousie tour package, Himachal tour packages, Dharamshala tour agent, Shimla Manali tour package, Pretty Planet Travels Dharamshala, Himachal Pradesh tours, Kashmir honeymoon packages, Manali tour packages"
      />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-6">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Best Travel Agent in Dharamshala | Himachal Tour Packages
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pretty Planet Travels Dharamshala - Your trusted Dharamshala tour agent for Shimla Manali tour packages, 
            Dharamshala Dalhousie tour packages, and complete Himachal Pradesh tours with expert local guidance.
          </p>
        </div>

        {/* SEO H2 Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Shimla Manali Tour Package | Dharamshala Dalhousie Tours
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Explore our curated Himachal tour packages by the best travel agent in Dharamshala
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-white rounded-full p-2 shadow-lg">
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedRegion(region)}
                className={`rounded-full px-6 transition-all duration-300 ${
                  selectedRegion === region 
                    ? 'bg-blue-900 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50'
                }`}
              >
                {region}
              </Button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Himachal Tour Packages Section - Card Style */}
        <div className="mt-24 mb-16 bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Top Selling Packages of Pretty Planet Travels
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Package 1 - Himalayan Golden Circuit */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Image with overlays */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Himalayan Golden Circuit - Dharamshala Dalhousie Amritsar Tour"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">7D/6N</div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">₹18,999</div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">4.8</span>
                    <span className="text-xs text-gray-500">(120+ reviews)</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Ex Amritsar</div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">Himalayan Golden Circuit</h3>
                <p className="text-sm text-gray-600 mb-3">Dharamshala • Dalhousie • Khajjiar • Amritsar</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Dalai Lama Temple</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Khajjiar Meadows</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Golden Temple</span>
                </div>

                {/* Expandable Itinerary */}
                {expandedPackage === 1 && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg text-xs max-h-60 overflow-y-auto">
                    <p className="font-bold mb-2">Day-by-Day Itinerary:</p>
                    <div className="space-y-2">
                      <p><strong>Day 1:</strong> Amritsar → Dharamshala (Sky Heaven Resort)</p>
                      <p><strong>Day 2:</strong> Dalai Lama Temple, Dal Lake, Naddi</p>
                      <p><strong>Day 3:</strong> McLeodganj & Bhagsunag Waterfall</p>
                      <p><strong>Day 4:</strong> Transfer to Dalhousie, Mall Road</p>
                      <p><strong>Day 5:</strong> Khajjiar Day Trip, Kalatop Sanctuary</p>
                      <p><strong>Day 6:</strong> Golden Temple, Wagah Border</p>
                      <p><strong>Day 7:</strong> Departure</p>
                      <p className="mt-2 text-green-700"><strong>Includes:</strong> Hotel, cab, breakfast</p>
                      <p className="text-red-600"><strong>Excludes:</strong> Meals, entry fees</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-xs border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => setExpandedPackage(expandedPackage === 1 ? null : 1)}
                  >
                    {expandedPackage === 1 ? 'Hide Details' : 'View Details'}
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.location.href = 'tel:+918679333355'}
                  >
                    Call Now
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      const message = `Hi! I want to book Himalayan Golden Circuit\n\nDuration: 7D/6N\nPrice: ₹18,999\n\nPlease provide me with more details.`;
                      window.open(`https://wa.me/918679333354?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Book Now
                  </Button>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Starting from <span className="text-lg font-bold text-green-600">₹18,999</span></p>
                </div>
              </div>
            </div>

            {/* Package 2 - Mystic Hills Retreat */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Mystic Hills Retreat Dharamshala Tour"
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">4D/3N</div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">₹12,999</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">4.7</span>
                    <span className="text-xs text-gray-500">(85+ reviews)</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Dharamshala</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mystic Hills Retreat</h3>
                <p className="text-sm text-gray-600 mb-3">Dharamshala Spiritual Tour</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Dalai Lama Temple</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Bhagsu Waterfall</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Dal Lake</span>
                </div>
                {expandedPackage === 2 && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg text-xs max-h-60 overflow-y-auto">
                    <p className="font-bold mb-2">Day-by-Day Itinerary:</p>
                    <div className="space-y-2">
                      <p><strong>Day 1:</strong> Arrival Dharamshala, Naddi Sunset Point (Sky Heaven Resort)</p>
                      <p><strong>Day 2:</strong> Dalai Lama Temple, Naddi Village, Dal Lake, Nature Walk</p>
                      <p><strong>Day 3:</strong> McLeodganj Market, Bhagsu Waterfall, Monastery, Café Street</p>
                      <p><strong>Day 4:</strong> Departure</p>
                      <p className="mt-2"><strong>Hotels:</strong> Sky Heaven Resort / Dhauladhar / Triund Heights</p>
                      <p className="text-green-700"><strong>Includes:</strong> Hotel, cab, breakfast</p>
                      <p className="text-red-600"><strong>Excludes:</strong> Entry fees, lunch/dinner</p>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm" className="text-xs border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" onClick={() => setExpandedPackage(expandedPackage === 2 ? null : 2)}>{expandedPackage === 2 ? 'Hide Details' : 'View Details'}</Button>
                  <Button size="sm" className="text-xs bg-green-600 hover:bg-green-700 text-white" onClick={() => window.location.href = 'tel:+918679333355'}>Call Now</Button>
                  <Button size="sm" className="text-xs bg-blue-600 hover:bg-blue-700 text-white" onClick={() => {
                      const message = `Hi! I want to book Mystic Hills Retreat\n\nDuration: 4D/3N\nPrice: ₹12,999\n\nPlease provide me with more details.`;
                      window.open(`https://wa.me/918679333354?text=${encodeURIComponent(message)}`, '_blank');
                    }}>Book Now</Button>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Starting from <span className="text-lg font-bold text-green-600">₹12,999</span></p>
                </div>
              </div>
            </div>

            {/* Package 3 - Khajjiar Alpine Escape */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4577399/pexels-photo-4577399.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Khajjiar Alpine Escape Dalhousie Tour"
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">2D/3N</div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">₹9,999</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">4.6</span>
                    <span className="text-xs text-gray-500">(75+ reviews)</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Dalhousie</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Khajjiar Alpine Escape</h3>
                <p className="text-sm text-gray-600 mb-3">Dalhousie • Khajjiar • Kalatop</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Khajjiar Meadows</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Kalatop Wildlife</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Mall Road</span>
                </div>

                {/* Expandable Itinerary */}
                {expandedPackage === 3 && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg text-xs max-h-60 overflow-y-auto">
                    <p className="font-bold mb-2">Day-by-Day Itinerary:</p>
                    <div className="space-y-2">
                      <p><strong>Day 1:</strong> Arrival Dalhousie, check-in at hotel, evening walk at Mall Road and Gandhi Chowk. Overnight at hotel.</p>
                      <p><strong>Day 2:</strong> Khajjiar full day excursion - Mini Switzerland of India, Khajjiar Lake, Kalatop Wildlife Sanctuary, nature walks, horse riding. Return Dalhousie.</p>
                      <p><strong>Day 3:</strong> Morning Dalhousie local sightseeing - St. John's Church, Subhash Baoli, Panjpulla. Departure with beautiful memories.</p>
                      <p className="mt-2 text-green-700"><strong>Hotel:</strong> 3-star hotel with mountain views</p>
                      <p className="text-green-700"><strong>Includes:</strong> Accommodation, breakfast, all transfers by cab, sightseeing</p>
                      <p className="text-red-600"><strong>Excludes:</strong> Lunch/dinner, adventure activities, entry fees, personal expenses</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-xs border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => setExpandedPackage(expandedPackage === 3 ? null : 3)}
                  >
                    {expandedPackage === 3 ? 'Hide Details' : 'View Details'}
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.location.href = 'tel:+918679333355'}
                  >
                    Call Now
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      const message = `Hi! I want to book Khajjiar Alpine Escape\n\nDuration: 2D/3N\nPrice: ₹9,999\n\nPlease provide me with more details.`;
                      window.open(`https://wa.me/918679333354?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Book Now
                  </Button>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Starting from <span className="text-lg font-bold text-green-600">₹9,999</span></p>
                </div>
              </div>
            </div>

            {/* Package 4 - Twin Peaks Magic */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Twin Peaks Dharamshala Dalhousie Tour"
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">4D/5N</div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">₹15,999</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">4.8</span>
                    <span className="text-xs text-gray-500">(95+ reviews)</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Twin Cities</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Twin Peaks Magic</h3>
                <p className="text-sm text-gray-600 mb-3">Dharamshala • Dalhousie • Khajjiar</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">McLeodganj</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Khajjiar</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Buddhist Temples</span>
                </div>

                {/* Expandable Itinerary */}
                {expandedPackage === 4 && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg text-xs max-h-60 overflow-y-auto">
                    <p className="font-bold mb-2">Day-by-Day Itinerary:</p>
                    <div className="space-y-2">
                      <p><strong>Day 1:</strong> Arrival Dharamshala, check-in at hotel in McLeodganj. Evening walk at McLeodganj market, Tibetan cafes. Overnight stay.</p>
                      <p><strong>Day 2:</strong> Full day Dharamshala sightseeing - Dalai Lama Temple Complex, Tsuglagkhang, Bhagsunag Waterfall, Dal Lake, Naddi viewpoint. Evening at leisure.</p>
                      <p><strong>Day 3:</strong> Dharamshala to Dalhousie (4-hour drive). Check-in at hotel. Evening Mall Road exploration, Gandhi Chowk shopping.</p>
                      <p><strong>Day 4:</strong> Khajjiar day excursion - Mini Switzerland, Khajjiar Lake, Kalatop Wildlife Sanctuary, adventure activities. Return Dalhousie evening.</p>
                      <p><strong>Day 5:</strong> Morning Dalhousie local - Subhash Baoli, Panjpulla, St. John's Church. Departure with memories.</p>
                      <p className="mt-2 text-green-700"><strong>Hotels:</strong> 3-star hotels in McLeodganj & Dalhousie</p>
                      <p className="text-green-700"><strong>Includes:</strong> 4N accommodation, breakfast, all transfers, sightseeing</p>
                      <p className="text-red-600"><strong>Excludes:</strong> Lunch/dinner, adventure activities, entry fees, personal expenses</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-xs border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => setExpandedPackage(expandedPackage === 4 ? null : 4)}
                  >
                    {expandedPackage === 4 ? 'Hide Details' : 'View Details'}
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => scrollToEnquiryForm('Twin Peaks Magic')}
                  >
                    Book Now
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    size="sm"
                    className="text-xs bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => scrollToEnquiryForm('Twin Peaks Magic')}
                  >
                    Enquire Now
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => scrollToEnquiryForm('Twin Peaks Magic')}
                  >
                    Plan Your Trip
                  </Button>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Starting from <span className="text-lg font-bold text-green-600">₹15,999</span></p>
                </div>
              </div>
            </div>

            {/* Package 5 - Queen of Hills Shimla */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Queen of Hills Shimla Tour Package"
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">3D/4N</div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">₹11,999</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">4.7</span>
                    <span className="text-xs text-gray-500">(110+ reviews)</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Shimla</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Queen of Hills – Shimla</h3>
                <p className="text-sm text-gray-600 mb-3">Shimla • Kufri • Jakhoo</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Mall Road</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Kufri</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Ridge</span>
                </div>

                {/* Expandable Itinerary */}
                {expandedPackage === 5 && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg text-xs max-h-60 overflow-y-auto">
                    <p className="font-bold mb-2">Day-by-Day Itinerary:</p>
                    <div className="space-y-2">
                      <p><strong>Day 1:</strong> Arrival Shimla, check-in at hotel. Evening walk at Mall Road, Ridge, Scandal Point. Christ Church visit. Overnight stay.</p>
                      <p><strong>Day 2:</strong> Kufri excursion - Himalayan Nature Park, Kufri Fun World, horse riding, skiing (seasonal). Visit Jakhoo Temple, Hanuman statue. Return evening.</p>
                      <p><strong>Day 3:</strong> Shimla local sightseeing - Viceregal Lodge, State Museum, Lakkar Bazaar shopping. Evening leisure at Mall Road.</p>
                      <p><strong>Day 4:</strong> Morning free for last-minute shopping. Check-out and departure from Shimla with wonderful memories.</p>
                      <p className="mt-2 text-green-700"><strong>Hotel:</strong> 3-star hotel near Mall Road</p>
                      <p className="text-green-700"><strong>Includes:</strong> 3N accommodation, breakfast, all transfers by cab, sightseeing</p>
                      <p className="text-red-600"><strong>Excludes:</strong> Lunch/dinner, adventure activities, ropeway charges, entry fees, personal expenses</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-xs border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => setExpandedPackage(expandedPackage === 5 ? null : 5)}
                  >
                    {expandedPackage === 5 ? 'Hide Details' : 'View Details'}
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => scrollToEnquiryForm('Queen of Hills – Shimla')}
                  >
                    Book Now
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    size="sm"
                    className="text-xs bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => scrollToEnquiryForm('Queen of Hills – Shimla')}
                  >
                    Enquire Now
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => scrollToEnquiryForm('Queen of Hills – Shimla')}
                  >
                    Plan Your Trip
                  </Button>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Starting from <span className="text-lg font-bold text-green-600">₹11,999</span></p>
                </div>
              </div>
            </div>

            {/* Package 6 - Hill Station Trio */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Shimla Manali Hill Station Tour"
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">5D/6N</div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">₹19,999</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">4.9</span>
                    <span className="text-xs text-gray-500">(150+ reviews)</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Hill Trio</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Hill Station Trio</h3>
                <p className="text-sm text-gray-600 mb-3">Shimla • Manali • Solang</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Mall Road</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Solang Valley</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Rohtang</span>
                </div>

                {/* Expandable Itinerary */}
                {expandedPackage === 6 && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg text-xs max-h-60 overflow-y-auto">
                    <p className="font-bold mb-2">Day-by-Day Itinerary:</p>
                    <div className="space-y-2">
                      <p><strong>Day 1:</strong> Arrival Shimla, check-in hotel. Evening Mall Road walk, Ridge, Scandal Point. Overnight Shimla.</p>
                      <p><strong>Day 2:</strong> Shimla local - Kufri, Jakhoo Temple, Green Valley. Evening leisure. Overnight Shimla.</p>
                      <p><strong>Day 3:</strong> Shimla to Manali (7-8 hours scenic drive via Kullu Valley). Check-in hotel. Evening Old Manali exploration. Overnight Manali.</p>
                      <p><strong>Day 4:</strong> Manali local - Hadimba Temple, Manu Temple, Vashisht hot springs, Mall Road. Overnight Manali.</p>
                      <p><strong>Day 5:</strong> Solang Valley excursion - adventure activities (paragliding, zorbing), Atal Tunnel, Sissu. Return evening. Overnight Manali.</p>
                      <p><strong>Day 6:</strong> Morning free for shopping. Check-out and departure with wonderful Himachal memories.</p>
                      <p className="mt-2 text-green-700"><strong>Hotels:</strong> 3-star hotels in Shimla & Manali</p>
                      <p className="text-green-700"><strong>Includes:</strong> 5N accommodation, breakfast, all transfers, sightseeing</p>
                      <p className="text-red-600"><strong>Excludes:</strong> Lunch/dinner, adventure activities, Rohtang Pass permit, entry fees</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-xs border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => setExpandedPackage(expandedPackage === 6 ? null : 6)}
                  >
                    {expandedPackage === 6 ? 'Hide Details' : 'View Details'}
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => scrollToEnquiryForm('Hill Station Trio')}
                  >
                    Book Now
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    size="sm"
                    className="text-xs bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => scrollToEnquiryForm('Hill Station Trio')}
                  >
                    Enquire Now
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => scrollToEnquiryForm('Hill Station Trio')}
                  >
                    Plan Your Trip
                  </Button>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Starting from <span className="text-lg font-bold text-green-600">₹19,999</span></p>
                </div>
              </div>
            </div>

            {/* Package 7 - Snowbound Paradise Manali */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Snowbound Paradise Manali Tour"
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">4D/5N</div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">₹16,999</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">4.8</span>
                    <span className="text-xs text-gray-500">(130+ reviews)</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Manali</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Snowbound Paradise</h3>
                <p className="text-sm text-gray-600 mb-3">Manali • Solang • Sissu</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Solang Valley</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Atal Tunnel</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Hadimba</span>
                </div>

                {/* Expandable Itinerary */}
                {expandedPackage === 7 && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg text-xs max-h-60 overflow-y-auto">
                    <p className="font-bold mb-2">Day-by-Day Itinerary:</p>
                    <div className="space-y-2">
                      <p><strong>Day 1:</strong> Arrival Manali, check-in hotel. Evening Mall Road exploration, Club House. Overnight Manali.</p>
                      <p><strong>Day 2:</strong> Manali local sightseeing - Hadimba Devi Temple, Manu Temple, Tibetan Monastery, Vashisht Village hot springs. Old Manali cafe hopping. Overnight Manali.</p>
                      <p><strong>Day 3:</strong> Solang Valley full day - paragliding, zorbing, cable car ride. Optional: Atal Tunnel to Sissu (snow activities). Return evening. Overnight Manali.</p>
                      <p><strong>Day 4:</strong> Naggar Castle, Nicholas Roerich Art Gallery, river rafting at Kullu. Evening leisure. Overnight Manali.</p>
                      <p><strong>Day 5:</strong> Morning free for shopping at Mall Road. Check-out and departure with beautiful mountain memories.</p>
                      <p className="mt-2 text-green-700"><strong>Hotel:</strong> 3-star hotel in Manali town</p>
                      <p className="text-green-700"><strong>Includes:</strong> 4N accommodation, breakfast, all transfers, sightseeing</p>
                      <p className="text-red-600"><strong>Excludes:</strong> Lunch/dinner, adventure activities, Atal Tunnel entry, personal expenses</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-xs border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => setExpandedPackage(expandedPackage === 7 ? null : 7)}
                  >
                    {expandedPackage === 7 ? 'Hide Details' : 'View Details'}
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => scrollToEnquiryForm('Snowbound Paradise')}
                  >
                    Book Now
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    size="sm"
                    className="text-xs bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => scrollToEnquiryForm('Snowbound Paradise')}
                  >
                    Enquire Now
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => scrollToEnquiryForm('Snowbound Paradise')}
                  >
                    Plan Your Trip
                  </Button>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Starting from <span className="text-lg font-bold text-green-600">₹16,999</span></p>
                </div>
              </div>
            </div>

            {/* Package 8 - Sacred Bliss Trail */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Sacred Bliss Dharamshala Palampur Tour"
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">3D/4N</div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">₹13,999</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">4.7</span>
                    <span className="text-xs text-gray-500">(90+ reviews)</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Tea Country</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sacred Bliss Trail</h3>
                <p className="text-sm text-gray-600 mb-3">Dharamshala • Palampur • Tea Gardens</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Norbulingka</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Tea Gardens</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Chamunda</span>
                </div>

                {/* Expandable Itinerary */}
                {expandedPackage === 8 && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg text-xs max-h-60 overflow-y-auto">
                    <p className="font-bold mb-2">Day-by-Day Itinerary:</p>
                    <div className="space-y-2">
                      <p><strong>Day 1:</strong> Arrival Dharamshala, check-in hotel. Evening visit Dal Lake, St. John Church. Overnight Dharamshala.</p>
                      <p><strong>Day 2:</strong> McLeodganj sightseeing - Dalai Lama Temple, Norbulingka Institute (Tibetan arts), Bhagsunag Temple and Waterfall, Tibetan Museum. Evening leisure. Overnight Dharamshala.</p>
                      <p><strong>Day 3:</strong> Dharamshala to Palampur. Visit Andretta Artists Village, pottery workshop. Palampur tea gardens walk, tea tasting. Chamunda Devi Temple. Overnight Palampur.</p>
                      <p><strong>Day 4:</strong> Morning Neugal Khad (picnic spot), Saurabh Van Vihar. Departure from Palampur with serene memories of tea country.</p>
                      <p className="mt-2 text-green-700"><strong>Hotels:</strong> 3-star hotels in Dharamshala & Palampur</p>
                      <p className="text-green-700"><strong>Includes:</strong> 3N accommodation, breakfast, all transfers, sightseeing, tea garden tour</p>
                      <p className="text-red-600"><strong>Excludes:</strong> Lunch/dinner, workshop charges, entry fees, personal expenses</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-xs border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => setExpandedPackage(expandedPackage === 8 ? null : 8)}
                  >
                    {expandedPackage === 8 ? 'Hide Details' : 'View Details'}
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => scrollToEnquiryForm('Sacred Bliss Trail')}
                  >
                    Book Now
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    size="sm"
                    className="text-xs bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => scrollToEnquiryForm('Sacred Bliss Trail')}
                  >
                    Enquire Now
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => scrollToEnquiryForm('Sacred Bliss Trail')}
                  >
                    Plan Your Trip
                  </Button>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Starting from <span className="text-lg font-bold text-green-600">₹13,999</span></p>
                </div>
              </div>
            </div>

            {/* Package 9 - Bir Billing Adventure */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Bir Billing Paragliding Adventure Tour"
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">2D/3N</div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">₹8,999</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">4.9</span>
                    <span className="text-xs text-gray-500">(200+ reviews)</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Bir Billing</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sky Above Earth Below</h3>
                <p className="text-sm text-gray-600 mb-3">Bir • Billing • Paragliding Capital</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Paragliding</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Monasteries</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Trekking</span>
                </div>

                {/* Expandable Itinerary */}
                {expandedPackage === 9 && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg text-xs max-h-60 overflow-y-auto">
                    <p className="font-bold mb-2">Day-by-Day Itinerary:</p>
                    <div className="space-y-2">
                      <p><strong>Day 1:</strong> Arrival Bir, check-in at homestay/hotel. Evening walk through Bir village, visit Deer Park Institute. Tibetan Colony exploration. Overnight Bir.</p>
                      <p><strong>Day 2:</strong> Billing Paragliding - World's 2nd best paragliding site! Tandem paragliding flight from Billing to Bir landing site (weather permitting). Visit Chokling Monastery, Palpung Sherabling Monastery. Evening café hopping. Overnight Bir.</p>
                      <p><strong>Day 3:</strong> Morning nature walk, Gunehar Waterfall trek (optional). Last-minute shopping at local market. Check-out and departure with adventurous memories.</p>
                      <p className="mt-2 text-green-700"><strong>Accommodation:</strong> Cozy homestay/guesthouse</p>
                      <p className="text-green-700"><strong>Includes:</strong> 2N accommodation, breakfast, local transfers, monastery visits</p>
                      <p className="text-red-600"><strong>Excludes:</strong> Paragliding charges (₹2,500-3,500), lunch/dinner, trekking guide, personal expenses</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-xs border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => setExpandedPackage(expandedPackage === 9 ? null : 9)}
                  >
                    {expandedPackage === 9 ? 'Hide Details' : 'View Details'}
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => scrollToEnquiryForm('Sky Above Earth Below')}
                  >
                    Book Now
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    size="sm"
                    className="text-xs bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => scrollToEnquiryForm('Sky Above Earth Below')}
                  >
                    Enquire Now
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => scrollToEnquiryForm('Sky Above Earth Below')}
                  >
                    Plan Your Trip
                  </Button>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Starting from <span className="text-lg font-bold text-green-600">₹8,999</span></p>
                </div>
              </div>
            </div>

            {/* Package 10 - The Himalayan Frontier */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Spiti Valley Himalayan Frontier Tour"
                  loading="lazy" decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">7D/8N</div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">₹29,999</div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">4.9</span>
                    <span className="text-xs text-gray-500">(180+ reviews)</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Spiti Valley</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">The Himalayan Frontier</h3>
                <p className="text-sm text-gray-600 mb-3">Spiti • Kaza • Chandratal</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Kaza</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Chandratal</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Key Monastery</span>
                </div>

                {/* Expandable Itinerary */}
                {expandedPackage === 10 && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg text-xs max-h-60 overflow-y-auto">
                    <p className="font-bold mb-2">Day-by-Day Itinerary:</p>
                    <div className="space-y-2">
                      <p><strong>Day 1:</strong> Manali to Kaza via Rohtang Pass/Atal Tunnel (7-8 hours). Acclimatization at Kaza (3,650m). Overnight Kaza.</p>
                      <p><strong>Day 2:</strong> Kaza local - Key Monastery (largest in Spiti), Kibber Village (one of highest inhabited), Chicham Bridge (Asia's highest). Overnight Kaza.</p>
                      <p><strong>Day 3:</strong> Kaza to Tabo (ancient monastery, 996 AD), Dhankar Monastery (cliff-top monastery). Return Kaza. Overnight Kaza.</p>
                      <p><strong>Day 4:</strong> Kaza to Pin Valley - Pin Valley National Park, Mud Village, last village. Return Kaza evening. Overnight Kaza.</p>
                      <p><strong>Day 5:</strong> Kaza to Chandratal Lake (Moon Lake) via Kunzum Pass. Camping at Chandratal (4,300m), stargazing. Overnight camps.</p>
                      <p><strong>Day 6:</strong> Chandratal sunrise, return to Manali via Rohtang Pass. Check-in Manali hotel. Overnight Manali.</p>
                      <p><strong>Day 7:</strong> Manali local sightseeing, shopping, leisure. Overnight Manali.</p>
                      <p><strong>Day 8:</strong> Departure from Manali with unforgettable Spiti memories.</p>
                      <p className="mt-2 text-green-700"><strong>Hotels:</strong> Basic guesthouses in Kaza, camping at Chandratal, hotel in Manali</p>
                      <p className="text-green-700"><strong>Includes:</strong> 7N accommodation, breakfast, all transfers by Tempo Traveller/SUV, inner line permits, camping gear</p>
                      <p className="text-red-600"><strong>Excludes:</strong> Lunch/dinner, entry fees, personal gear, high altitude medication</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="text-xs border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => setExpandedPackage(expandedPackage === 10 ? null : 10)}
                  >
                    {expandedPackage === 10 ? 'Hide Details' : 'View Details'}
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => scrollToEnquiryForm('The Himalayan Frontier')}
                  >
                    Book Now
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    size="sm"
                    className="text-xs bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => scrollToEnquiryForm('The Himalayan Frontier')}
                  >
                    Enquire Now
                  </Button>
                  <Button 
                    size="sm"
                    className="text-xs bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => scrollToEnquiryForm('The Himalayan Frontier')}
                  >
                    Plan Your Trip
                  </Button>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Starting from <span className="text-lg font-bold text-green-600">₹29,999</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry Form Section */}
        <div id="enquiry-form-section" className="mt-16 bg-gradient-to-b from-blue-50 to-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-blue-900 mb-3">
              {selectedPackage ? `Enquire About: ${selectedPackage.title}` : 'Book Your Dream Holiday'}
            </h3>
            <p className="text-lg text-gray-600">Fill in the form below and we'll get back to you within 1 hour</p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+91 9999999999" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                  <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">No. of Travelers</label>
                  <input type="number" min="1" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="2" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Any specific requirements..."></textarea>
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                📩 Submit Enquiry
              </Button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Can't Find Your Perfect Trip?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We create custom itineraries tailored to your preferences. Contact our travel experts 
            for a personalized tour package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8"
              onClick={() => scrollToEnquiryForm('Custom Package')}>
              Custom Package Request
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8"
              onClick={() => window.open('https://wa.me/918679333354?text=Hi! I want to talk to a travel expert', '_blank')}>
              Talk to Expert
            </Button>
          </div>
        </div>
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && selectedPackage && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm" 
            style={{ zIndex: 10000 }}
            onClick={() => setShowEnquiryForm(false)}
          ></div>
          <div 
            className="fixed inset-0 flex items-center justify-center p-2 md:p-4" 
            style={{ zIndex: 10001 }}
          >
            {/* <div className="max-w-2xl w-full max-h-[95vh] overflow-y-auto bg-white rounded-lg shadow-2xl mx-2 md:mx-4 relative z-[9999]">
              <SimpleEnquiryForm
                packageTitle={selectedPackage.title}
                onClose={() => setShowEnquiryForm(false)}
              />
            </div> */}
            <div className="max-w-2xl w-full max-h-[95vh] bg-white rounded-lg shadow-2xl mx-2 md:mx-4 relative z-[10001]">
  <div className="max-h-[95vh] overflow-y-auto p-4 md:p-6">
    <SimpleEnquiryForm
      packageTitle={selectedPackage.title}
      onClose={() => setShowEnquiryForm(false)}
    />
  </div>
</div>

          </div>
        </>
      )}
    </section>
  );
};

export default TourPackages;