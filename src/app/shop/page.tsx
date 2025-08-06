// src/app/shop/page.tsx
'use client';

import { useState } from 'react';
import { Filter, Grid, List, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import ProductGrid from '@/components/shop/ProductGrid';
import FilterBar from '@/components/shop/FilterBar';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { sampleArtworks } from '@/lib/data';
import { ArtCategory } from '@/lib/types';
import { useWishlist } from '@/hooks/useWishlist';
import Link from 'next/link';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<ArtCategory | 'all'>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high' | 'title'>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  const { wishlist } = useWishlist();

  const filteredArtworks = sampleArtworks
    .filter(artwork => {
      if (selectedCategory !== 'all' && artwork.category !== selectedCategory) return false;
      if (artwork.price < priceRange[0] || artwork.price > priceRange[1]) return false;
      return artwork.available;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'newest':
        default:
          return b.year - a.year;
      }
    });

  return (
    <ErrorBoundary>
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                Art Shop
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Own a piece of contemporary art. Each artwork is an original creation, 
                carefully crafted to bring beauty and emotion into your space.
              </p>
              
              {/* Wishlist Link */}
              {wishlist.length > 0 && (
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-purple-200">
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                  <Link 
                    href="/wishlist" 
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} in wishlist
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {filteredArtworks.length} artworks
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="title">Alphabetical</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <div className={`${showFilters ? 'block' : 'hidden'} sm:block w-full sm:w-64 flex-shrink-0`}>
              <Card className="p-6 sticky top-24">
                <FilterBar
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                />
              </Card>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <ProductGrid artworks={filteredArtworks} viewMode={viewMode} />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}