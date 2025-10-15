import React, { useState } from 'react';
import { MapPin, Clock, Users, Star, Download, Send, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import SimpleEnquiryForm from './SimpleEnquiryForm';
import RazorpayCheckout from './RazorpayCheckout';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';

const TourPackages = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  
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

    // High-quality fallback images based on region
    const getFallbackImage = (region) => {
      const fallbacks = {
        'Kashmir': 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&h=400&fit=crop&q=80',
        'Himachal': 'https://images.unsplash.com/photo-1648034902541-b239c599114e?w=800&h=400&fit=crop&q=80',
        'Rajasthan': 'https://images.unsplash.com/photo-1599661046289-e31897b6a1ba?w=800&h=400&fit=crop&q=80',
        'Goa': 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=400&fit=crop&q=80',
        'Kerala': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=400&fit=crop&q=80',
        'Uttarakhand': 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800&h=400&fit=crop&q=80',
        'International': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop&q=80'
      };
      return fallbacks[region] || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&q=80';
    };

    return (
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative">
          {/* Fixed aspect ratio container to prevent layout shifts */}

          {!imageLoaded && (
  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
)}
          <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
            {/* Loading skeleton */}
            {/* {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
            )} */}
            {!imageError ? (
  <img
    src={pkg.image}
    alt={pkg.title}
    loading="lazy"
    onLoad={() => setImageLoaded(true)}
    onError={() => setImageError(true)}
    className={`w-full h-full object-cover transition-opacity duration-300 ${
      imageLoaded ? "opacity-100" : "opacity-0"
    }`}
  />
) : (
  <div className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-600 text-sm">
    Image not available
  </div>
)}



            {/* Actual image with optimization */}
            {/* <img 
              src={imageError ? getFallbackImage(pkg.region) : `${pkg.image}&w=800&h=400&fit=crop&q=80`} 
              alt={pkg.title}
              className={`w-full h-full object-cover transition-all duration-300 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="lazy"
              decoding="async"
            /> */}
          </div>
          
          <div className="absolute top-4 left-4">
            <Badge className="bg-blue-600 text-white shadow-lg">{pkg.region}</Badge>
          </div>
          <div className="absolute top-4 rigsendht-4">
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

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
            <Link to={`/package/${pkg.slug}`} className="flex-1">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                View Details
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200"
              onClick={() => {
                console.log('Send Enquiry clicked for:', pkg.title);
                setSelectedPackage(pkg);
                setShowEnquiryForm(true);
              }}
            >
              <Send className="h-4 w-4 mr-2" />
              Send Enquiry
            </Button>
          </div>
          
          {/* Book This Package Button */}
          <div className="mt-3">
            <RazorpayCheckout
              amount={parseInt(pkg.price.replace(/[₹,]/g, '')) * 100} // Convert price to paise
              name="Customer Name"
              email="customer@example.com"
              phone="9999999999"
              packageName={pkg.title}
            >
              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-200 hover:shadow-xl active:scale-95"
              >
                💳 Book This Package - {pkg.price} (Live Mode)
              </Button>
            </RazorpayCheckout>
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

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <a 
                    href="https://wa.me/918679333355?text=Hi! I'm interested in the tour package: "
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white no-underline"
                  >
                    WhatsApp Enquiry
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
        title="Tour Packages | Pretty Planet Travels - Himachal Kashmir Manali Tours"
        description="Explore 50+ tour packages including Kashmir honeymoon, Manali romantic getaways, Himachal adventure tours. Best prices guaranteed. Book online or call +91 8679333355."
        canonical="https://www.prettyplanettravels.com/tour-packages"
        keywords="Himachal tour packages, Kashmir honeymoon, Manali tours, Dharamshala packages, adventure tours, family vacation packages"
      />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full mb-6">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Tour Packages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our handcrafted tour packages across Kashmir, Himachal Pradesh, 
            Rajasthan, Uttarakhand, and South India with expert local guidance.
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
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8">
              Custom Package Request
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8">
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