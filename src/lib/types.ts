// src/lib/types.ts

export interface Artwork {
  id: string;
  title: string;
  description: string;
  price: number;
  category: ArtCategory;
  medium: string;
  dimensions: string;
  year: number;
  imageUrl: string;
  images: string[]; // Multiple images for gallery view
  available: boolean;
  featured: boolean;
  tags: string[];
}

export interface ArtCardProps {
  artwork: Artwork;
  viewMode?: 'grid' | 'list';
  onExpand?: (artwork: Artwork) => void;
  onShare?: (artwork: Artwork) => void;
  index: number;
  showPrice?: boolean;
  showActions?: boolean;
  variant?: 'gallery' | 'shop' | 'wishlist';
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  artwork: {
    title: string;
    image: string;
  };
  avatar: string;
}

export interface GiftCard {
  id: string;
  code: string;
  amount: number;
  designId: string;
  senderName: string;
  recipientName: string;
  recipientEmail: string;
  message?: string;
  purchaseDate: Date;
  expiryDate: Date;
  status: 'active' | 'redeemed' | 'expired';
  paymentStatus: 'pending' | 'completed' | 'failed';
}

export interface GiftCardTemplate {
  id: string;
  name: string;
  previewImage: string;
  occasions: string[];
  colors: {
    primary: string;
    secondary: string;
  };
}

export interface Artist {
  name: string;
  bio: string;
  profileImage: string;
  statement: string;
  education: string[];
  exhibitions: Exhibition[];
  awards: string[];
  contact: {
    email: string;
    phone?: string;
    location: string;
    social: {
      x?: string; // X (formerly Twitter)
      instagram?: string;
      facebook?: string;
      website?: string;
    };
  };
}

export interface Exhibition {
  title: string;
  year: number;
  location: string;
  type: 'solo' | 'group';
}

export type ArtCategory = 
  | 'paintings' 
  | 'drawings' 
  | 'sculptures' 
  | 'digital' 
  | 'mixed-media' 
  | 'photography';

export interface CartItem {
  artwork: Artwork;
  quantity: number;
  addedAt: Date;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
  };
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
  shippingMethod: string;
  notes?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: Date;
  category: 'art-insights' | 'exhibitions' | 'tutorials' | 'artist-life' | 'news';
  tags: string[];
  readTime: number;
}
export interface GiftCardPurchase extends GiftCard {
  orderId: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
}

export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'wishlist-added' | 'wishlist-removed' | 'cart-added';
export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

// New interfaces for FAQ data
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'shipping' | 'returns' | 'payments' | 'artworks';
}

// New interfaces for shipping data
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

// New interfaces for sitemap data
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