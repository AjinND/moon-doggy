---
description: Repository Information Overview
alwaysApply: true
---

# Moon Doggy - Artist Portfolio & Shop Information

## Summary
A modern, visually stunning artist portfolio and e-commerce website built with Next.js, TypeScript, and Tailwind CSS. The project provides a complete solution for artists to showcase their work and sell their art online with features like a gallery, shop, cart system, and contact form.

## Structure
- **src/app/**: Next.js App Router pages and layouts
- **src/components/**: Reusable UI components organized by feature
- **src/lib/**: Utilities, types, and data management
- **src/hooks/**: Custom React hooks for state management
- **public/**: Static assets including artwork images

## Language & Runtime
**Language**: TypeScript
**Version**: TypeScript 5.x
**Framework**: Next.js 15.4.5
**Build System**: Next.js build system
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- React 19.1.0
- Next.js 15.4.5
- Tailwind CSS 3.4.15
- clsx 2.0.0
- tailwind-merge 2.0.0
- lucide-react 0.536.0
- date-fns 4.1.0

**Development Dependencies**:
- ESLint 9.x
- TypeScript 5.x
- eslint-config-next 15.4.5

## Build & Installation
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Main Files & Resources
**Entry Points**:
- `src/app/layout.tsx`: Root layout component with metadata
- `src/app/page.tsx`: Home page component
- `src/app/globals.css`: Global styles

**Configuration Files**:
- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.mjs`: PostCSS configuration
- `eslint.config.mjs`: ESLint configuration

**Key Components**:
- `src/components/layout/`: Header, Footer, and Navigation
- `src/components/home/`: Hero, FeaturedWorks, ArtistIntro
- `src/components/shop/`: ProductGrid, ProductCard, AddToCart
- `src/components/gallery/`: ArtGrid, ArtCard, FilterBar
- `src/components/cart/`: CartItem, CartSummary, Checkout

**State Management**:
- `src/hooks/useCart.ts`: Cart state management
- `src/hooks/useArtworks.ts`: Artwork data management
- `src/lib/cart.ts`: Cart utility functions
- `src/lib/data.ts`: Data storage and management