/**
 * THE ROYAL PLATE - Restaurant Configuration & Master Data
 * 
 * Easily customize this file to adapt the website for any real restaurant client.
 * All phone numbers, WhatsApp links, menu items, prices, and branding are centralized here.
 */

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'main-course' | 'indian-specialties' | 'vegetarian' | 'desserts' | 'beverages';
  description: string;
  price: number;
  isVegetarian: boolean;
  isSignature?: boolean;
  spiceLevel?: 0 | 1 | 2 | 3; // 0=none, 1=mild, 2=medium, 3=spicy
  prepTime?: string;
  tags?: string[];
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  occasion: string;
  comment: string;
  avatarText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ambience' | 'Signature Dishes' | 'Culinary Art' | 'Private Dining';
  image: string;
  description: string;
}

export interface RestaurantConfigData {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    heroHeadline: string;
    heroSubheadline: string;
    establishedYear: number;
    awards: string[];
  };
  contact: {
    whatsappNumber: string;
    displayPhone: string;
    landline: string;
    email: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
      landmark: string;
    };
    googleMapsDirectionsUrl: string;
    googleMapsEmbedUrl: string;
    socialLinks: {
      instagram: string;
      facebook: string;
      tripadvisor: string;
    };
  };
  schedule: {
    lunchHours: string;
    dinnerHours: string;
    daysOpen: string;
    weeklyHours: { day: string; status: string; openTime: string | null; closeTime: string | null }[];
  };
  story: {
    heading: string;
    lead: string;
    paragraphs: string[];
    stats: { label: string; value: string }[];
  };
  menuCategories: { id: string; label: string }[];
  menuItems: MenuItem[];
  reviews: ReviewItem[];
  gallery: GalleryItem[];
}

export const RESTAURANT_CONFIG: RestaurantConfigData = {
  brand: {
    name: "THE ROYAL PLATE",
    shortName: "Royal Plate",
    tagline: "Heritage Indian & Contemporary Royal Gastronomy",
    heroHeadline: "An Unforgettable Dining Experience",
    heroSubheadline: "Where time-honoured royal recipes meet modern culinary refinement. Freshly sourced organic ingredients, aromatic slow-charcoal preparations, and heartfelt hospitality.",
    establishedYear: 2018,
    awards: ["Michelin Recommended 2025", "Best Luxury Dining Bangalore", "Times Food Award - Fine Dining"],
  },
  
  contact: {
    // WhatsApp number for orders and reservations (Country code included, NO '+' or spaces)
    whatsappNumber: "919876543210",
    displayPhone: "+91 98765 43210",
    landline: "+91 80 4123 8899",
    email: "concierge@theroyalplate.com",
    address: {
      line1: "4th Floor, The Heritage Crest Pavilion",
      line2: "Lavelle Road, Shanthala Nagar",
      city: "Bengaluru",
      state: "Karnataka",
      postalCode: "560001",
      country: "India",
      landmark: "Opposite UB City & Cubbon Park Gateway",
    },
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Lavelle+Road+Bengaluru+Karnataka",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985558117961!2d77.59728287519184!3d12.97277868734293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1679c1322b27%3A0x673932b70f055627!2sLavelle%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    socialLinks: {
      instagram: "https://instagram.com/theroyalplate_dining",
      facebook: "https://facebook.com/theroyalplatedining",
      tripadvisor: "https://tripadvisor.com/Restaurant_Review-The_Royal_Plate",
    },
  },

  schedule: {
    lunchHours: "12:00 PM – 03:30 PM",
    dinnerHours: "07:00 PM – 11:30 PM",
    daysOpen: "Tuesday – Sunday (Closed on Mondays for Culinary Prep)",
    weeklyHours: [
      { day: "Monday", status: "Closed", openTime: null, closeTime: null },
      { day: "Tuesday", status: "12:00 PM – 11:30 PM", openTime: "12:00", closeTime: "23:30" },
      { day: "Wednesday", status: "12:00 PM – 11:30 PM", openTime: "12:00", closeTime: "23:30" },
      { day: "Thursday", status: "12:00 PM – 11:30 PM", openTime: "12:00", closeTime: "23:30" },
      { day: "Friday", status: "12:00 PM – 11:45 PM", openTime: "12:00", closeTime: "23:45" },
      { day: "Saturday", status: "12:00 PM – 11:45 PM", openTime: "12:00", closeTime: "23:45" },
      { day: "Sunday", status: "12:00 PM – 11:30 PM", openTime: "12:00", closeTime: "23:30" },
    ],
  },

  story: {
    heading: "The Art of Royal Hospitality",
    lead: "Born from a passion to revive the forgotten banquets of Indian imperial courts, The Royal Plate transforms timeless royal recipes into modern culinary masterpieces.",
    paragraphs: [
      "Every dish is an homage to grand culinary traditions spanning the royal kitchens of Awadh, Rajasthan, Hyderabad, and Old Delhi. We meticulously slow-cook rich gravies in traditional copper handis, roast spices over fragrant wood embers, and source single-origin heirloom spices directly from multigenerational estate farms.",
      "Executive Chef Samarjeet Rathore and his team curate a seasonal menu that balances opulent grandeur with clean, authentic flavours. Whether an intimate anniversary dinner or a royal celebratory feast, our dining pavilion offers an unforgettable haven of warmth, elegance, and taste.",
    ],
    stats: [
      { label: "Heritage Spices Blended In-House", value: "38+" },
      { label: "Slow Charcoal Cooking Hours", value: "14 hrs" },
      { label: "Distinguished Guests Welcomed", value: "45,000+" },
      { label: "Guest Satisfaction Rating", value: "4.9 / 5" },
    ],
  },

  menuCategories: [
    { id: "all", label: "Full Collection" },
    { id: "starters", label: "Starters" },
    { id: "main-course", label: "Main Course" },
    { id: "indian-specialties", label: "Indian Specialties" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "desserts", label: "Desserts" },
    { id: "beverages", label: "Beverages" },
  ],

  menuItems: [
    {
      id: "dish-1",
      name: "Royal Murgh Makhani (Butter Chicken)",
      category: "main-course",
      description: "Charcoal-roasted boneless tandoori chicken simmered in a velvety San Marzano tomato & cashew velvet gravy, infused with aged kasuri methi and fresh cultured cream.",
      price: 540,
      isVegetarian: false,
      isSignature: true,
      spiceLevel: 1,
      tags: ["Chef's Signature", "24-hr Marinated"],
      image: "/src/assets/images/dish_butter_chicken_1792315764941.jpg",
    },
    {
      id: "dish-2",
      name: "Truffled Peshawari Paneer Tikka",
      category: "starters",
      description: "Organic cottage cheese cubes marinated in yellow chili, Greek yogurt and hand-pounded royal garam masala, chargrilled in the clay oven and brushed with white truffle oil.",
      price: 460,
      isVegetarian: true,
      isSignature: true,
      spiceLevel: 2,
      tags: ["Vegetarian Specialty", "Clay Oven"],
      image: "/src/assets/images/dish_paneer_tikka_1792315766140.jpg",
    },
    {
      id: "dish-3",
      name: "Awadhi Gosht Dum Biryani",
      category: "indian-specialties",
      description: "Tender spring lamb layered with fragrant 2-year aged basmati rice, saffron-infused milk, brown onions, and sealed with dough in a heavy brass degh for gentle slow cooking.",
      price: 680,
      isVegetarian: false,
      isSignature: true,
      spiceLevel: 2,
      tags: ["Imperial Classic", "Dum Pukht"],
      image: "/src/assets/images/dish_royal_biryani_1792315765276.jpg",
    },
    {
      id: "dish-4",
      name: "Nizami Subz Dum Biryani",
      category: "vegetarian",
      description: "Farm-fresh baby carrots, French beans, cottage cheese, and royal morels cooked on dum with aged saffron basmati and roasted whole spices. Served with smoked burani raita.",
      price: 490,
      isVegetarian: true,
      isSignature: false,
      spiceLevel: 1,
      tags: ["Pure Vegetarian", "Clay Pot"],
      image: "/src/assets/images/dish_royal_biryani_1792315765276.jpg",
    },
    {
      id: "dish-5",
      name: "Dahi Ke Kebab with Anardana Chutney",
      category: "starters",
      description: "Silken hung curd patties gently crisped with cardamom, green chilies, and fresh coriander, served over a tart ruby pomegranate and mint reduction.",
      price: 420,
      isVegetarian: true,
      isSignature: false,
      spiceLevel: 1,
      tags: ["Melt In Mouth"],
      image: "/src/assets/images/dish_paneer_tikka_1792315766140.jpg",
    },
    {
      id: "dish-6",
      name: "Dal-e-Khaas (Black Lentils Simmered 24h)",
      category: "indian-specialties",
      description: "Urad lentils and kidney beans slow-cooked overnight over dying charcoal embers, finished with farm butter, fresh cream, and subtle fenugreek aroma.",
      price: 420,
      isVegetarian: true,
      isSignature: true,
      spiceLevel: 1,
      tags: ["24-Hour Charcoal Simmer"],
      image: "/src/assets/images/hero_fine_dining_1792315764263.jpg",
    },
    {
      id: "dish-7",
      name: "Royal Mysore Masala Crisp Dosa",
      category: "vegetarian",
      description: "Golden fermented rice crepe smeared with fiery red garlic chili chutney, stuffed with spiced potato mash, served with three artisanal chutneys and heirloom drumstick sambar.",
      price: 340,
      isVegetarian: true,
      isSignature: false,
      spiceLevel: 2,
      tags: ["Breakfast & All Day", "Crispy Perfection"],
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "dish-8",
      name: "Kashmiri Rogan Josh",
      category: "main-course",
      description: "Braised baby mutton pieces simmered in an aromatic gravy perfumed with ratan jot (cockscomb flower), fennel seeds, Kashmiri red chilies, and dried ginger powder.",
      price: 660,
      isVegetarian: false,
      isSignature: false,
      spiceLevel: 2,
      tags: ["Valley Heritage"],
      image: "/src/assets/images/dish_butter_chicken_1792315764941.jpg",
    },
    {
      id: "dish-9",
      name: "Burrata & Heirloom Beetroot Chaat",
      category: "starters",
      description: "Creamy artisanal burrata nestled over roasted spiced beets, crispy lotus stem chips, mint droplets, sweet tamarind glaze, and sev.",
      price: 480,
      isVegetarian: true,
      isSignature: false,
      spiceLevel: 1,
      tags: ["Modern Fusion"],
      image: "/src/assets/images/dish_paneer_tikka_1792315766140.jpg",
    },
    {
      id: "dish-10",
      name: "Saffron Kesari Shahi Tukda & Rabri",
      category: "desserts",
      description: "Ghee-crisped brioche bathed in saffron cardamom syrup, layered with thick reduced pistachio rabri and crowned with 24k edible gold leaf.",
      price: 360,
      isVegetarian: true,
      isSignature: true,
      spiceLevel: 0,
      tags: ["Royal Dessert", "24k Gold Leaf"],
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "dish-11",
      name: "Dark Belgian Chocolate & Cardamom Torte",
      category: "desserts",
      description: "Valrhona 70% dark chocolate mousse cake with a hint of green cardamom, warm chocolate ganache centre, and Madagascar vanilla bean gelato.",
      price: 390,
      isVegetarian: true,
      isSignature: false,
      spiceLevel: 0,
      tags: ["Artisanal Cocoa"],
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "dish-12",
      name: "Alphonso Mango & Saffron Lassi",
      category: "beverages",
      description: "Hand-churned creamy organic yogurt blended with Ratnagiri Alphonso mango pulp, Kashmiri saffron strands, and roasted Iranian pistachios.",
      price: 260,
      isVegetarian: true,
      isSignature: false,
      spiceLevel: 0,
      tags: ["Refreshing Classic"],
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "dish-13",
      name: "Smoked Rose & Hibiscus Botanical Spritz",
      category: "beverages",
      description: "House-crafted cold-pressed Damascus rose petal cordial, dried hibiscus infusion, fresh lime, sparkling tonic, and gentle applewood smoke presentation.",
      price: 320,
      isVegetarian: true,
      isSignature: true,
      spiceLevel: 0,
      tags: ["Signature Mocktail", "Tableside Smoke"],
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80",
    },
  ],

  reviews: [
    {
      id: "rev-1",
      name: "Vikramaditya Singhania",
      rating: 5,
      date: "October 12, 2025",
      occasion: "Anniversary Dinner",
      comment: "An extraordinary fine dining experience. The Awadhi Dum Biryani and Dal-e-Khaas were sensational, easily surpassing five-star hotel standards. The warm chandelier ambience and attentive service made our special evening truly unforgettable.",
      avatarText: "VS",
    },
    {
      id: "rev-2",
      name: "Dr. Ananya Roy",
      rating: 5,
      date: "September 28, 2025",
      occasion: "Family Celebration",
      comment: "The Royal Plate is a breath of fresh air. From the Peshawari Paneer Tikka to the Belgian Chocolate Torte, every single course had distinct depth and finesse. The WhatsApp ordering for our takeaway order was seamless!",
      avatarText: "AR",
    },
    {
      id: "rev-3",
      name: "Karan Mehta & Sneha",
      rating: 5,
      date: "September 14, 2025",
      occasion: "Corporate Dinner",
      comment: "Hosted our international executive partners here and they were blown away by the royal treatment, the tableside smoked cocktails, and the hospitality. The attention to detail in presentation and flavour balance is world class.",
      avatarText: "KM",
    },
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Imperial Grand Dining Pavilion",
      category: "Ambience",
      image: "/src/assets/images/restaurant_ambience_1792315767432.jpg",
      description: "Crystal chandeliers, warm mahogany finishes, and plush velvet seating crafted for intimate conversation.",
    },
    {
      id: "gal-2",
      title: "Royal Awadhi Dum Biryani",
      category: "Signature Dishes",
      image: "/src/assets/images/dish_royal_biryani_1792315765276.jpg",
      description: "Aromatic basmati rice and marinated cuts sealed with dough and slow-cooked over burning wood embers.",
    },
    {
      id: "gal-3",
      title: "Truffled Peshawari Paneer Tikka",
      category: "Culinary Art",
      image: "/src/assets/images/dish_paneer_tikka_1792315766140.jpg",
      description: "Clay-oven roasted cottage cheese infused with roasted whole spices, mint coulis, and truffle mist.",
    },
    {
      id: "gal-4",
      title: "Royal Murgh Makhani Velvet Bowl",
      category: "Signature Dishes",
      image: "/src/assets/images/dish_butter_chicken_1792315764941.jpg",
      description: "Charcoal-kissed chicken bathed in a rich, buttery San Marzano tomato reduction with cultured cream.",
    },
    {
      id: "gal-5",
      title: "The Royal Banquet Table",
      category: "Private Dining",
      image: "/src/assets/images/hero_fine_dining_1792315764263.jpg",
      description: "A feast prepared for private royal celebrations, complete with brass tableware and vintage candelabras.",
    },
    {
      id: "gal-6",
      title: "Artisanal Botanical Mixology",
      category: "Culinary Art",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80",
      description: "Crafted mocktails and aperitifs infused with royal rosewater, dried hibiscus, and botanical smoke.",
    },
  ],
};

/**
 * Helper to build prefilled WhatsApp link for food orders
 */
export function getWhatsAppOrderUrl(dishName: string, price: number): string {
  const message = `Hello ${RESTAURANT_CONFIG.brand.name}, I would like to order: *${dishName}* (₹${price}). Please share the estimated preparation time and delivery/pickup details.`;
  return `https://wa.me/${RESTAURANT_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Helper to build prefilled WhatsApp link for reservations
 */
export function getWhatsAppReservationUrl(details: {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string | number;
  seating?: string;
  specialRequests?: string;
}): string {
  const lines = [
    `*Table Reservation Request - ${RESTAURANT_CONFIG.brand.name}*`,
    `Guest Name: ${details.name}`,
    `Contact Phone: ${details.phone}`,
    `Date: ${details.date}`,
    `Time: ${details.time}`,
    `Number of Guests: ${details.guests}`,
    details.seating ? `Seating Preference: ${details.seating}` : '',
    details.specialRequests ? `Special Requests: ${details.specialRequests}` : '',
    `\nPlease let me know if a table is available at this time. Thank you!`,
  ].filter(Boolean);

  const message = lines.join('\n');
  return `https://wa.me/${RESTAURANT_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * General inquiry WhatsApp link
 */
export function getGeneralWhatsAppUrl(): string {
  const message = `Hello ${RESTAURANT_CONFIG.brand.name}, I would like to inquire about dining, reservations, or today's chef specials.`;
  return `https://wa.me/${RESTAURANT_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
