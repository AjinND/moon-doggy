// src/lib/data.ts

import { Artwork, Artist, BlogPost, Testimonial, GiftCardTemplate } from './types';

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

export const sampleArtworks: Artwork[] = [
  {
    id: "1",
    title: "Ethereal Dreams",
    description: "A mesmerizing piece that captures the essence of dreams through flowing blues and purples. This painting represents the delicate boundary between consciousness and the subconscious mind.",
    price: 1250,
    category: "paintings",
    medium: "Oil on Canvas",
    dimensions: "80 x 60 cm",
    year: 2024,
    imageUrl: "/images/artworks/img1.jpeg",
    images: [
      "/images/artworks/img1.jpeg",
      "/images/artworks/ethereal-dreams-detail1.jpg",
      "/images/artworks/ethereal-dreams-detail2.jpg"
    ],
    available: true,
    featured: true,
    tags: ["abstract", "blue", "dreams", "contemporary"]
  },
  {
    id: "2",
    title: "Urban Solitude",
    description: "A contemplative piece exploring isolation in modern city life. The interplay of warm and cool tones creates a powerful emotional narrative.",
    price: 950,
    category: "paintings",
    medium: "Acrylic on Canvas",
    dimensions: "70 x 50 cm",
    year: 2024,
    imageUrl: "/images/artworks/img2.jpeg",
    images: ["/images/artworks/img2.jpeg"],
    available: true,
    featured: true,
    tags: ["urban", "solitude", "contemporary", "emotional"]
  },
  {
    id: "3",
    title: "Nature's Whisper",
    description: "Inspired by morning walks in the forest, this piece captures the gentle communication between leaves and light.",
    price: 800,
    category: "paintings",
    medium: "Watercolor on Paper",
    dimensions: "40 x 30 cm",
    year: 2023,
    imageUrl: "/images/artworks/natures-whisper.jpg",
    images: ["/images/artworks/natures-whisper.jpg"],
    available: true,
    featured: false,
    tags: ["nature", "watercolor", "green", "peaceful"]
  },
  {
    id: "4",
    title: "Digital Convergence",
    description: "A modern exploration of how technology shapes our perception of reality. Digital art meets traditional composition.",
    price: 600,
    category: "digital",
    medium: "Digital Print on Fine Art Paper",
    dimensions: "50 x 40 cm",
    year: 2024,
    imageUrl: "/images/artworks/digital-convergence.jpg",
    images: ["/images/artworks/digital-convergence.jpg"],
    available: true,
    featured: false,
    tags: ["digital", "modern", "technology", "abstract"]
  },
  {
    id: "5",
    title: "Sculptural Form I",
    description: "A bronze sculpture exploring organic forms and their relationship to space and light.",
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
    imageUrl: '/images/artworks/img5.jpeg',
    author: {
      name: 'Laura Jurkowski',
      avatar: '/images/artist/MoonDoggy_Pfp.jpg'
    },
    publishedAt: new Date('2024-01-20'),
    category: 'exhibitions',
    tags: ['exhibition', 'gallery', 'events'],
    readTime: 3
  }
];
