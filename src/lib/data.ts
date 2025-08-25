// src/lib/data.ts

import { Artwork, Artist, BlogPost, Testimonial, GiftCardTemplate } from './types';

// Gift Card Templates
export const giftCardTemplates: GiftCardTemplate[] = [
  {
    id: "gc-temp-1",
    name: "Abstract Swirls",
    previewImage: "/images/gift-cards/abstract-swirls.jpg",
    occasions: ["birthday", "anniversary", "celebration"],
    colors: {
      primary: "#2563eb",
      secondary: "#f472b6"
    }
  },
  {
    id: "gc-temp-2",
    name: "Minimalist Gallery",
    previewImage: "/images/gift-cards/minimalist-gallery.jpg",
    occasions: ["thank you", "appreciation", "general"],
    colors: {
      primary: "#18181b",
      secondary: "#f4f4f5"
    }
  },
  {
    id: "gc-temp-3",
    name: "Festive Art",
    previewImage: "/images/gift-cards/festive-art.jpg",
    occasions: ["christmas", "holidays", "special"],
    colors: {
      primary: "#dc2626",
      secondary: "#16a34a"
    }
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    text: 'The artwork has brought so much life to my living room. The colors and emotions captured in the piece are exactly what I was looking for. Every time I look at it, I discover new details and meanings that make me appreciate it even more. It\'s not just a painting, it\'s a conversation starter that has transformed my space into a more inspiring environment.',
    artwork: {
      title: 'Sunset Dreams',
      image: '/images/artworks/img1.jpeg'
    },
    avatar: '/images/artworks/img2.jpeg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    text: 'A masterpiece that speaks volumes. The attention to detail and the way it captures light is simply breathtaking. Having followed Elena\'s work for years, I finally decided to add one of her pieces to my collection, and it has exceeded all expectations. The way she manipulates color and texture creates an almost three-dimensional effect that changes throughout the day as the light shifts.',
    artwork: {
      title: 'Urban Rhythms',
      image: '/images/artworks/img3.jpeg'
    },
    avatar: '/images/artworks/img4.jpeg'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    location: 'London, UK',
    text: 'I\'ve been collecting art for years, but this piece has a special place in my heart. It\'s both powerful and delicate. The way Elena captures emotion in her brushstrokes is truly remarkable. This piece has become the centerpiece of my collection, drawing guests into deep conversations about art and emotion. The online photos didn\'t do justice to the texture and depth of the work.',
    artwork: {
      title: 'Ocean Whispers',
      image: '/images/artworks/img5.jpeg'
    },
    avatar: '/images/artworks/img6.jpeg'
  },
  {
    id: 4,
    name: 'Lucas Martinez',
    location: 'Barcelona, Spain',
    text: 'The artwork exceeded my expectations. It\'s even more stunning in person, and the shipping was handled with great care. What impressed me most was how the piece seems to evolve with different lighting conditions. Morning light brings out subtle details I hadn\'t noticed before, while evening light creates a completely different atmosphere. Elena\'s ability to layer colors and textures creates this fascinating depth that photos can\'t capture.',
    artwork: {
      title: 'Mountain Soul',
      image: '/images/artworks/img7.jpeg'
    },
    avatar: '/images/artworks/img8.jpeg'
  }
];

// Artist Information
export const sampleArtist: Artist = {
  name: "Laura Jurkowski",
  bio: "Laura is a contemporary artist based in Barcelona, Spain. Her work explores the intersection of nature and human emotion through vibrant colors and organic forms. With over 15 years of experience, she has developed a unique style that captures the essence of fleeting moments in time.",
  profileImage: "/images/artist/MoonDoggy_Pfp.jpg",
  statement: "Art is my language for expressing the inexpressible. Through my paintings, I seek to capture the delicate balance between chaos and harmony that exists in both nature and the human heart.",
  education: [
    "MFA in Fine Arts, University of Barcelona (2008)",
    "BA in Visual Arts, ELISAVA School of Design (2006)"
  ],
  exhibitions: [
    { title: "Whispers of the Wind", year: 2024, location: "Gallery Modern, Barcelona", type: "solo" },
    { title: "Contemporary Visions", year: 2023, location: "Museum of Modern Art, Madrid", type: "group" },
    { title: "Nature's Symphony", year: 2022, location: "Art Space Valencia", type: "solo" }
  ],
  awards: [
    "Best Emerging Artist, Barcelona Art Fair (2020)",
    "Excellence in Contemporary Art, Spanish Art Awards (2021)"
  ],
  contact: {
    email: "laura@laurajurkowski.art",
    phone: "+34 123 456 789",
    location: "Barcelona, Spain",
    social: {
      x: "@laurajurkowskiart",
      instagram: "@laurajurkowskiart",
      facebook: "Laura Jurkowski Art",
      website: "www.laurajurkowski.art"
    }
  }
};

// Sample Artworks
export const sampleArtworks: Artwork[] = [
  {
    id: "1",
    title: "Ethereal Dreams",
    description: "A mesmerizing piece that captures the essence of dreams through flowing blues and purples. This painting represents the delicate boundary between consciousness and the subconscious mind.",
    price: 1200,
    category: "paintings",
    medium: "Oil on Canvas",
    dimensions: "60 x 80 cm",
    year: 2024,
    imageUrl: "/images/artworks/img1.jpeg",
    images: ["/images/artworks/img1.jpeg"],
    available: true,
    featured: true,
    tags: ["oil painting", "abstract", "blue", "purple", "dreams"]
  },
  {
    id: "2",
    title: "Urban Symphony",
    description: "A dynamic representation of city life with bold geometric shapes and vibrant colors that capture the energy of urban environments.",
    price: 950,
    category: "digital",
    medium: "Digital Art",
    dimensions: "50 x 70 cm",
    year: 2024,
    imageUrl: "/images/artworks/img2.jpeg",
    images: ["/images/artworks/img2.jpeg"],
    available: true,
    featured: true,
    tags: ["digital", "geometric", "urban", "colorful", "modern"]
  },
  {
    id: "3",
    title: "Organic Flow",
    description: "A bronze sculpture that embodies the natural flow of water and wind, creating an organic form that seems to dance in space.",
    price: 2500,
    category: "sculptures",
    medium: "Bronze",
    dimensions: "45 x 30 x 25 cm",
    year: 2023,
    imageUrl: "/images/artworks/img3.jpeg",
    images: ["/images/artworks/img3.jpeg"],
    available: true,
    featured: true,
    tags: ["sculpture", "bronze", "organic", "contemporary"]
  },
  {
    id: "4",
    title: "Sunset Meditation",
    description: "A serene landscape painting capturing the peaceful moment of sunset with warm colors that evoke tranquility and reflection.",
    price: 800,
    category: "paintings",
    medium: "Acrylic on Canvas",
    dimensions: "40 x 60 cm",
    year: 2024,
    imageUrl: "/images/artworks/img4.jpeg",
    images: ["/images/artworks/img4.jpeg"],
    available: true,
    featured: false,
    tags: ["landscape", "sunset", "acrylic", "peaceful", "warm colors"]
  },
  {
    id: "5",
    title: "Digital Bloom",
    description: "A digital artwork exploring the intersection of nature and technology, where organic forms meet digital aesthetics.",
    price: 650,
    category: "digital",
    medium: "Digital Art",
    dimensions: "45 x 60 cm",
    year: 2024,
    imageUrl: "/images/artworks/img5.jpeg",
    images: ["/images/artworks/img5.jpeg"],
    available: true,
    featured: false,
    tags: ["digital", "nature", "technology", "organic", "modern"]
  },
  {
    id: "6",
    title: "Charcoal Study #3",
    description: "An intimate charcoal drawing exploring the play of light and shadow on the human form.",
    price: 350,
    category: "drawings",
    medium: "Charcoal on Paper",
    dimensions: "30 x 40 cm",
    year: 2024,
    imageUrl: "/images/artworks/charcoal-study-3.jpg",
    images: ["/images/artworks/charcoal-study-3.jpg"],
    available: true,
    featured: false,
    tags: ["charcoal", "drawing", "study", "black-white"]
  }
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Evolution of Digital Art in the Modern Era',
    slug: 'evolution-digital-art-modern-era',
    excerpt: 'Exploring how digital tools have transformed the art world and opened new possibilities for creative expression.',
    content: 'Digital art has come a long way since its inception. From early pixel art to today\'s sophisticated 3D renders and AI-assisted creations, the journey has been nothing short of revolutionary. This post explores the key milestones in digital art history and what they mean for artists today.',
    imageUrl: '/images/artworks/img1.jpeg',
    author: {
      name: 'Laura Jurkowski',
      avatar: '/images/artist/MoonDoggy_Pfp.jpg'
    },
    publishedAt: new Date('2024-02-15'),
    category: 'art-insights',
    tags: ['digital art', 'art history', 'technology'],
    readTime: 5
  },
  {
    id: '2',
    title: 'Behind the Scenes: Creating My Latest Collection',
    slug: 'behind-scenes-latest-collection',
    excerpt: 'A peek into my creative process and the inspiration behind my newest artworks.',
    content: 'Every piece of art has a story to tell. In this post, I take you through my creative journey, from initial concept sketches to final touches. Learn about my techniques, inspirations, and the challenges faced along the way.',
    imageUrl: '/images/artworks/img3.jpeg',
    author: {
      name: 'Laura Jurkowski',
      avatar: '/images/artist/MoonDoggy_Pfp.jpg'
    },
    publishedAt: new Date('2024-02-01'),
    category: 'artist-life',
    tags: ['creative process', 'inspiration', 'artwork'],
    readTime: 7
  },
  {
    id: '3',
    title: 'Upcoming Exhibition: Urban Dreams',
    slug: 'upcoming-exhibition-urban-dreams',
    excerpt: 'Join me for an immersive exhibition exploring the intersection of urban life and digital art.',
    content: 'I\'m thrilled to announce my upcoming exhibition "Urban Dreams" at Gallery Modern. This collection represents a year of work exploring how city life influences our dreams and aspirations. The exhibition will feature both digital and traditional pieces that capture the energy and complexity of urban living.',
    imageUrl: '/images/artworks/img2.jpeg',
    author: {
      name: 'Laura Jurkowski',
      avatar: '/images/artist/MoonDoggy_Pfp.jpg'
    },
    publishedAt: new Date('2024-01-20'),
    category: 'exhibitions',
    tags: ['exhibition', 'urban art', 'digital art'],
    readTime: 4
  }
];

// FAQ Data
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'shipping' | 'returns' | 'payments' | 'artworks';
}

export const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How do I purchase an artwork?',
    answer: 'You can purchase artworks directly through our website by adding them to your cart and proceeding to checkout. We accept major credit cards and offer secure payment processing. Once your payment is confirmed, we\'ll send you a confirmation email with tracking information.',
    category: 'general'
  },
  {
    id: '2',
    question: 'Are the artworks original pieces?',
    answer: 'Yes, all artworks in our collection are original pieces created by Laura Jurkowski. Each piece is unique and comes with a certificate of authenticity. We do not sell prints or reproductions unless specifically noted.',
    category: 'artworks'
  },
  {
    id: '3',
    question: 'What are your shipping costs and delivery times?',
    answer: 'We offer free shipping on orders over $500. For orders under $500, shipping costs $50. Domestic deliveries typically take 5-7 business days, while international shipping may take 10-14 business days. All artworks are professionally packaged to ensure safe delivery.',
    category: 'shipping'
  },
  {
    id: '4',
    question: 'Can I return an artwork if I\'m not satisfied?',
    answer: 'Yes, we offer a 30-day return policy. If you\'re not completely satisfied with your purchase, you can return the artwork in its original condition for a full refund. Return shipping costs are the responsibility of the buyer unless the item was damaged during shipping.',
    category: 'returns'
  },
  {
    id: '5',
    question: 'Do you accept commission work?',
    answer: 'Yes, I accept commission work for custom pieces. Commission projects typically require a 50% deposit and have a lead time of 6-12 weeks depending on the scope and size of the project. Please contact me directly to discuss your vision and get a quote.',
    category: 'artworks'
  },
  {
    id: '6',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for larger purchases. All payments are processed securely through our encrypted payment system.',
    category: 'payments'
  },
  {
    id: '7',
    question: 'How do I care for my artwork?',
    answer: 'Keep your artwork away from direct sunlight and extreme temperatures. Dust gently with a soft, dry cloth. For oil paintings, avoid touching the surface. We include detailed care instructions with each purchase.',
    category: 'artworks'
  },
  {
    id: '8',
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship worldwide. International shipping costs and delivery times vary by destination. All international shipments are insured and include tracking. Please note that buyers are responsible for any customs duties or taxes.',
    category: 'shipping'
  },
  {
    id: '9',
    question: 'Can I see the artwork before purchasing?',
    answer: 'While we don\'t have a physical gallery, we provide high-resolution images and detailed descriptions for each piece. If you\'re local to Barcelona, we may be able to arrange a private viewing by appointment.',
    category: 'general'
  },
  {
    id: '10',
    question: 'How is my payment processed securely?',
    answer: 'We use industry-standard SSL encryption and work with trusted payment processors to ensure your payment information is secure. We never store your credit card details on our servers.',
    category: 'payments'
  }
];

// Shipping Information Data
export interface ShippingOption {
  type: string;
  time: string;
  cost: string;
  description: string;
  icon: string;
}

export interface PackagingFeature {
  title: string;
  description: string;
  icon: string;
}

export const shippingOptions: ShippingOption[] = [
  {
    type: "Standard Shipping",
    time: "5-7 business days",
    cost: "$50",
    description: "Secure packaging with tracking included",
    icon: "truck"
  },
  {
    type: "Express Shipping",
    time: "2-3 business days",
    cost: "$100",
    description: "Priority handling and faster delivery",
    icon: "zap"
  },
  {
    type: "International",
    time: "10-14 business days",
    cost: "Varies by location",
    description: "Worldwide delivery with customs handling",
    icon: "globe"
  },
  {
    type: "Free Shipping",
    time: "5-7 business days",
    cost: "Free on orders $500+",
    description: "Complimentary shipping for larger orders",
    icon: "gift"
  }
];

export const packagingFeatures: PackagingFeature[] = [
  {
    title: "Protective Wrapping",
    description: "Acid-free tissue paper and bubble wrap protection",
    icon: "shield"
  },
  {
    title: "Custom Boxes",
    description: "Rigid cardboard boxes sized for each artwork",
    icon: "package"
  },
  {
    title: "Insurance Included",
    description: "Full coverage for damage or loss during transit",
    icon: "shield-check"
  },
  {
    title: "Tracking & Updates",
    description: "Real-time tracking and delivery notifications",
    icon: "map-pin"
  }
];

// Sitemap Data
export interface SiteSection {
  section: string;
  icon: string;
  color: string;
  pages: Array<{
    name: string;
    path: string;
    description: string;
  }>;
}

export interface QuickAction {
  name: string;
  path: string;
  icon: string;
  color: string;
}

export const siteStructure: SiteSection[] = [
  {
    section: 'Main Pages',
    icon: 'home',
    color: 'purple',
    pages: [
      { name: 'Home', path: '/', description: 'Welcome page with featured artworks and artist introduction' },
      { name: 'Gallery', path: '/gallery', description: 'Browse all artworks with filtering and search options' },
      { name: 'Shop', path: '/shop', description: 'Purchase original artworks and browse by category' },
      { name: 'About', path: '/about', description: 'Learn about the artist, education, and exhibitions' },
      { name: 'Blog', path: '/blog', description: 'Art insights, tutorials, and behind-the-scenes content' },
      { name: 'Contact', path: '/contact', description: 'Get in touch for inquiries and commission requests' }
    ]
  },
  {
    section: 'Shopping & Cart',
    icon: 'shopping-bag',
    color: 'blue',
    pages: [
      { name: 'Shopping Cart', path: '/cart', description: 'Review items and proceed to checkout' },
      { name: 'Wishlist', path: '/wishlist', description: 'Save favorite artworks for later' },
      { name: 'Gift Cards', path: '/gift-cards', description: 'Create and purchase custom gift cards' }
    ]
  },
  {
    section: 'Support & Help',
    icon: 'help-circle',
    color: 'green',
    pages: [
      { name: 'Support Center', path: '/support', description: 'Get help with orders, payments, and account issues' },
      { name: 'FAQ', path: '/faq', description: 'Frequently asked questions and answers' },
      { name: 'Shipping Info', path: '/shipping', description: 'Delivery times, costs, and international shipping' },
      { name: 'Returns Policy', path: '/returns', description: '30-day return policy and exchange information' }
    ]
  },
  {
    section: 'Legal & Privacy',
    icon: 'file-text',
    color: 'gray',
    pages: [
      { name: 'Privacy Policy', path: '/privacy', description: 'How we collect, use, and protect your personal data' },
      { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions for using our website' },
      { name: 'Cookie Policy', path: '/cookies', description: 'Information about cookies and tracking technologies' },
      { name: 'Accessibility', path: '/accessibility', description: 'Our commitment to web accessibility' },
      { name: 'Copyright', path: '/copyright', description: 'Copyright information and intellectual property rights' }
    ]
  }
];

export const quickActions: QuickAction[] = [
  { name: 'Browse Artworks', path: '/gallery', icon: 'palette', color: 'purple' },
  { name: 'Shop Now', path: '/shop', icon: 'shopping-bag', color: 'blue' },
  { name: 'View Cart', path: '/cart', icon: 'shopping-cart', color: 'green' },
  { name: 'Search Site', path: '/search', icon: 'search', color: 'orange' },
  { name: 'My Wishlist', path: '/wishlist', icon: 'heart', color: 'red' },
  { name: 'Gift Cards', path: '/gift-cards', icon: 'gift', color: 'purple' }
];