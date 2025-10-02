export const mockServices = [
  {
    id: 1,
    title: "Travel & Tours",
    description: "Discover the world with our curated travel experiences, from luxury getaways to adventure expeditions.",
    features: ["Holiday Packages", "Adventure Trips", "Family Getaways", "Luxury Cruises", "Cultural Tours"],
    icon: "Globe",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358",
    color: "blue"
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Elevate your business with professionally managed conferences, team building, and corporate retreats.",
    features: ["Conferences", "Team Building", "MICE Events", "Product Launches", "Executive Retreats"],
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY29ycG9yYXRlJTIwZXZlbnRzfGVufDB8fHx8MTc1OTQwMTI4OXww&ixlib=rb-4.1.0&q=85",
    color: "amber"
  },
  {
    id: 3,
    title: "Weddings & Celebrations",
    description: "Make your special day unforgettable with our expert wedding planning and celebration services.",
    features: ["Destination Weddings", "Event Planning", "Venue Selection", "Catering Services", "Photography"],
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1505944357431-27579db47558?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3ZWRkaW5nJTIwdmVudWVzfGVufDB8fHx8MTc1OTQwMTI5NHww&ixlib=rb-4.1.0&q=85",
    color: "rose"
  }
];

export const mockPackages = [
  {
    id: 1,
    title: "Kashmir Valley Paradise",
    description: "7 nights in the crown jewel of India with houseboat stays",
    price: "₹45,999",
    originalPrice: "₹59,999",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1708179070772-abf3a1d16b74",
    category: "Luxury",
    highlights: ["Houseboat Stay", "Shikara Rides", "Gulmarg Snow", "Saffron Gardens"]
  },
  {
    id: 2,
    title: "Shimla Honeymoon Special",
    description: "Romantic hill station getaway with luxury resort stays",
    price: "₹25,999",
    originalPrice: "₹34,999",
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2",
    category: "Honeymoon",
    highlights: ["Toy Train Ride", "Mall Road Walk", "Kufri Adventures", "Private Candlelight Dinner"]
  },
  {
    id: 3,
    title: "Manali Family Adventure",
    description: "Thrilling family experiences in the Valley of Gods",
    price: "₹35,999",
    originalPrice: "₹45,999",
    duration: "6 Days / 5 Nights",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1620720970374-5b7e67e1e610",
    category: "Family",
    highlights: ["Solang Valley", "River Rafting", "Hadimba Temple", "Local Cultural Shows"]
  },
  {
    id: 4,
    title: "Leh Ladakh Expedition",
    description: "Ultimate high-altitude adventure in the Land of High Passes",
    price: "₹65,999",
    originalPrice: "₹85,999",
    duration: "8 Days / 7 Nights",
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1745737204244-db3bbf72e3fa",
    category: "Adventure",
    highlights: ["Pangong Lake", "Nubra Valley", "Magnetic Hill", "Monastery Tours"]
  },
  {
    id: 5,
    title: "Dharamshala Spiritual Retreat",
    description: "Peaceful mountain sanctuary with Tibetan cultural immersion",
    price: "₹22,999",
    originalPrice: "₹29,999",
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1694203818327-5d013bec1b78",
    category: "Cultural",
    highlights: ["Dalai Lama Temple", "McLeod Ganj", "Triund Trek", "Meditation Sessions"]
  },
  {
    id: 6,
    title: "Himachal Premium Circuit",
    description: "Exclusive luxury tour covering best of Himachal Pradesh",
    price: "₹89,999",
    originalPrice: "₹1,19,999",
    duration: "10 Days / 9 Nights",
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1708186320869-0a527e67023d",
    category: "Luxury",
    highlights: ["Private Helicopter", "Luxury Resorts", "Adventure Sports", "Cultural Experiences"]
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Priya & Arjun Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "Pretty Planet made our Kashmir honeymoon absolutely magical! From the houseboat stays to the Shikara rides, every moment was perfect. The Dal Lake sunset will forever be etched in our hearts.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face",
    service: "Kashmir Honeymoon"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, India",
    rating: 5,
    text: "The corporate retreat in Manali was exceptional. Beautiful valley views, professional organization, and team building activities that brought our employees together. Highly recommend Pretty Planet!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    service: "Corporate Retreat"
  },
  {
    id: 3,
    name: "Neha Patel",
    location: "Ahmedabad, India",
    rating: 5,
    text: "Our family trip to Himachal was incredible! The kids loved Solang Valley, and we all enjoyed the toy train ride in Shimla. Such authentic local experiences and warm hospitality.",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    service: "Family Adventure"
  },
  {
    id: 4,
    name: "Vikram & Kavya Reddy",
    location: "Bangalore, India",
    rating: 5,
    text: "The Leh Ladakh expedition was a once-in-a-lifetime experience! Pangong Lake's beauty and the monastery visits were spiritually enriching. Pretty Planet handled everything perfectly!",
    image: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=150&h=150&fit=crop&crop=face",
    service: "Adventure Package"
  }
];

export const mockBlogPosts = [
  {
    id: 1,
    title: "Best Time to Visit Kashmir: A Complete Guide",
    excerpt: "Discover the perfect seasons to experience Kashmir's beauty, from blooming tulips to snow-covered landscapes.",
    image: "https://images.unsplash.com/photo-1708179070772-abf3a1d16b74",
    category: "Travel Tips",
    readTime: "5 min read",
    date: "Jan 15, 2024",
    author: "Anjali Sharma"
  },
  {
    id: 2,
    title: "Planning Corporate Retreats in Himachal Pradesh",
    excerpt: "Essential tips for organizing memorable corporate events in the beautiful mountain destinations of Himachal.",
    image: "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY29ycG9yYXRlJTIwZXZlbnRzfGVufDB8fHx8MTc1OTQwMTI4OXww&ixlib=rb-4.1.0&q=85",
    category: "Event Planning",
    readTime: "8 min read",
    date: "Jan 10, 2024",
    author: "Rajesh Gupta"
  },
  {
    id: 3,
    title: "Mountain Destination Weddings: Himachal & Kashmir Venues",
    excerpt: "From intimate hill station ceremonies to grand mountain celebrations, explore the most romantic venues in North India.",
    image: "https://images.unsplash.com/photo-1714004941173-0054629146c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxiZWF1dGlmdWwlMjB3ZWRkaW5nJTIwdmVudWVzfGVufDB8fHx8MTc1OTQwMTI5NHww&ixlib=rb-4.1.0&q=85",
    category: "Wedding Planning",
    readTime: "6 min read",
    date: "Jan 5, 2024",
    author: "Priya Mehta"
  }
];

export const mockGalleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1708179070772-abf3a1d16b74",
    category: "Destinations",
    title: "Kashmir Valley Paradise",
    description: "Pristine river flowing through mountain valleys"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1505944357431-27579db47558?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3ZWRkaW5nJTIwdmVudWVzfGVufDB8fHx8MTc1OTQwMTI5NHww&ixlib=rb-4.1.0&q=85",
    category: "Weddings",
    title: "Mountain Wedding Ceremony",
    description: "Breathtaking Himalayan backdrop for ceremonies"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY29ycG9yYXRlJTIwZXZlbnRzfGVufDB8fHx8MTc1OTQwMTI4OXww&ixlib=rb-4.1.0&q=85",
    category: "Events",
    title: "Elegant Corporate Dinner",
    description: "Sophisticated business event setup"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2",
    category: "Destinations",
    title: "Shimla Hill Station",
    description: "Charming colonial architecture and misty mountains"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1714004941173-0054629146c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxiZWF1dGlmdWwlMjB3ZWRkaW5nJTIwdmVudWVzfGVufDB8fHx8MTc1OTQwMTI5NHww&ixlib=rb-4.1.0&q=85",
    category: "Weddings",
    title: "Luxury Mountain Resort",
    description: "Premium wedding venues in hill stations"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1745737204244-db3bbf72e3fa",
    category: "Destinations",
    title: "Himalayan Sunrise",
    description: "Golden peaks of Leh Ladakh at dawn"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1581791534721-e599df4417f7",
    category: "Destinations",
    title: "Parvati River, Kasol",
    description: "Crystal clear waters through pine forests"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1708186320869-0a527e67023d",
    category: "Destinations",
    title: "Habba Khatoon Spring",
    description: "Natural beauty of Kashmir springs"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1670684960567-a6631b892968?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwdG91cmlzdHN8ZW58MHx8fHwxNzU5NDA1NDEzfDA&ixlib=rb-4.1.0&q=85",
    category: "Events",
    title: "Happy Travelers in Kashmir",
    description: "Groups enjoying snowy Kashmir landscapes"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1548013146-72479768bada?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMHRyYXZlbHxlbnwwfHx8fDE3NTk0MDU0MDd8MA&ixlib=rb-4.1.0&q=85",
    category: "Destinations",
    title: "Taj Mahal Experience",
    description: "Visitors exploring India's iconic monument"
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1598190896090-9dc5c70361d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxJbmRpYSUyMHRyYXZlbHxlbnwwfHx8fDE3NTk0MDU0MDd8MA&ixlib=rb-4.1.0&q=85",
    category: "Events",
    title: "Cultural Adventure Tours",
    description: "Unique experiences with local traditions"
  }
];