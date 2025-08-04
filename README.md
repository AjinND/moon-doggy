# Moon Doggy - Artist Portfolio & E-commerce Website

A modern, visually stunning artist portfolio and e-commerce website built with Next.js, TypeScript, and Tailwind CSS. This project provides a complete solution for artists to showcase and sell their work online.

![Moon Doggy Artist Portfolio](public/images/artist/MoonDoggy_Pfp.jpg)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Components Overview](#-components-overview)
- [State Management](#-state-management)
- [Data Models](#-data-models)
- [UI Components](#-ui-components)
- [Pages & Routes](#-pages--routes)
- [Getting Started](#-getting-started)
- [Customization](#-customization)
- [Deployment](#-deployment)

## ✨ Features

### Core Features
- **Artistic Design System**: Custom-designed UI components with artistic gradients, animations, and visual effects
- **Responsive Layout**: Mobile-first design that works beautifully on all devices
- **E-commerce Functionality**: Complete shopping cart and checkout system with local storage persistence
- **Gallery Showcase**: Interactive gallery with filtering, search, and modal view for artwork details
- **Artist Portfolio**: Comprehensive about page with exhibitions, education, and awards
- **Gift Card System**: Custom gift card creation with personalized messages and designs
- **Blog Section**: Artist blog with categorized posts and reading time estimates
- **Testimonials**: Customer testimonials with artwork references
- **Contact System**: Contact form with validation

### Visual & UX Features
- **Animated Components**: Smooth fade-in, slide-up, and hover animations
- **Custom Gradients**: Artistic color schemes and gradient backgrounds
- **Interactive Elements**: Modal dialogs, image galleries, and hover effects
- **Artistic Typography**: Custom font pairing with serif and sans-serif combinations
- **Micro-interactions**: Subtle animations and transitions for enhanced user experience

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript 5.x
- **Styling**: 
  - Tailwind CSS 3.4.15
  - Custom utility classes
  - CSS variables for theming
- **State Management**:
  - React Context API
  - Custom hooks for domain-specific state
  - LocalStorage for persistence
- **UI Components**:
  - Custom component library
  - Lucide React for icons
- **Utilities**:
  - clsx & tailwind-merge for conditional styling
  - date-fns for date formatting

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── about/                # Artist biography and info
│   ├── api/                  # API routes for data
│   ├── blog/                 # Blog posts and articles
│   ├── cart/                 # Shopping cart page
│   ├── contact/              # Contact form and info
│   ├── gallery/              # Artwork gallery
│   ├── gift-cards/           # Gift card creation
│   ├── shop/                 # E-commerce shop
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Home page
├── components/               # Reusable components
│   ├── cart/                 # Cart-related components
│   ├── gallery/              # Gallery components
│   ├── gift-cards/           # Gift card components
│   ├── home/                 # Homepage components
│   ├── layout/               # Layout components
│   ├── shop/                 # Shop components
│   └── ui/                   # UI component library
├── hooks/                    # Custom React hooks
│   ├── useArtworks.ts        # Artwork data management
│   ├── useCart.ts            # Cart state management
│   └── useGiftCard.ts        # Gift card functionality
├── lib/                      # Utilities and data
│   ├── cart.ts               # Cart management logic
│   ├── data.ts               # Sample data and content
│   ├── types.ts              # TypeScript type definitions
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
    └── images/               # Image assets
        ├── artist/           # Artist photos
        ├── artworks/         # Artwork images
        └── gallery/          # Gallery images
```

## 🧩 Components Overview

### Home Page Components
- **Hero**: Animated hero section with featured artwork slideshow
- **FeaturedWorks**: Showcase of highlighted artworks
- **ArtistIntro**: Artist biography and introduction
- **Testimonials**: Customer testimonials with artwork references
- **BlogPreview**: Preview of recent blog posts

### Gallery Components
- **ArtGrid**: Responsive grid layout for artwork display
- **FilterBar**: Category and search filtering for artworks
- **ArtworkModal**: Detailed view of selected artwork

### Shop Components
- **ProductGrid**: Display of purchasable artworks
- **ProductCard**: Individual artwork card with price and details
- **FilterBar**: Price range and category filtering

### Cart Components
- **CartItem**: Individual item in the shopping cart
- **CartSummary**: Order summary with subtotal, shipping, and tax
- **Checkout**: Checkout form and payment process

### Gift Card Components
- **GiftCardBuilder**: Interactive form for creating custom gift cards
- **GiftCardPreview**: Real-time preview of gift card design
- **GiftCardTemplates**: Selection of design templates

## 🔄 State Management

The project uses a combination of React hooks and context for state management:

### Cart Management
- **CartManager Class**: Singleton pattern for cart operations
- **useCart Hook**: React hook for cart state and operations
- **LocalStorage Persistence**: Cart data persists between sessions

### Data Management
- **Data Models**: Strongly typed interfaces for all data structures
- **Sample Data**: Realistic sample data for development and testing
- **API Integration**: Prepared for backend integration with API routes

## 📊 Data Models

The application uses TypeScript interfaces for all data structures:

- **Artwork**: Complete artwork information with metadata
- **Artist**: Artist profile with biography and exhibitions
- **Cart/CartItem**: Shopping cart data structure
- **Order**: Order information for checkout
- **BlogPost**: Blog content with metadata
- **Testimonial**: Customer testimonials
- **GiftCard/GiftCardTemplate**: Gift card data structures

## 🎨 UI Components

Custom UI component library with consistent styling:

- **Button**: Multi-variant button component with loading state
- **Card**: Versatile card component with hover effects
- **Input**: Form input with label and validation
- **Modal**: Responsive modal dialog
- **Navigation**: Responsive navigation menu

## 📄 Pages & Routes

- **/** - Home page with featured content
- **/gallery** - Artwork gallery with filtering
- **/shop** - E-commerce shop with product listings
- **/cart** - Shopping cart and checkout
- **/about** - Artist biography and information
- **/contact** - Contact form and information
- **/blog** - Blog posts and articles
- **/gift-cards** - Gift card creation and purchase

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/moon-doggy.git
   cd moon-doggy
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Customization

### Artist Information
- Update artist profile in `src/lib/data.ts`
- Replace images in `public/images/artist/`

### Artwork Collection
- Modify artwork data in `src/lib/data.ts`
- Add new artwork images to `public/images/artworks/`

### Styling
- Customize colors and gradients in `tailwind.config.js`
- Modify global styles in `src/app/globals.css`
- Update animations and transitions in component files

### Content
- Edit text content in respective component files
- Update blog posts in `src/lib/data.ts`
- Modify testimonials and other dynamic content

## 📦 Deployment

This project is optimized for deployment on Vercel, Netlify, or any other Next.js-compatible hosting platform:

1. Connect your repository to your preferred hosting platform
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy your application

## 🔒 Environment Variables

For production deployment, consider setting up the following environment variables:
- `NEXT_PUBLIC_API_URL`: Backend API URL (if applicable)
- `NEXT_PUBLIC_SITE_URL`: Your website's URL for SEO optimization

---

Built with ❤️ for artists who want to showcase their work beautifully online.

© 2024 Moon Doggy LLC. All rights reserved.