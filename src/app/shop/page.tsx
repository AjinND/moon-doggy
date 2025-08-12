// src/app/shop/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import ProductGrid from '@/components/shop/ProductGrid';
import FilterBar from '@/components/shop/FilterBar';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { sampleArtworks } from '@/lib/data';
import { ArtCategory } from '@/lib/types';
import { useWishlist } from '@/hooks/useWishlist';
import LoadingLink from '@/components/ui/LoadingLink';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<ArtCategory | 'all'>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high' | 'title'>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSortMenu, setShowSortMenu] = useState(false);
  
  const { wishlist } = useWishlist();

  // Memoized filtered and sorted artworks
  const processedArtworks = useMemo(() => {
    return sampleArtworks
      .filter(artwork => {
        if (selectedCategory !== 'all' && artwork.category !== selectedCategory) return false;
        if (artwork.price < priceRange[0] || artwork.price > priceRange[1]) return false;
        if (!artwork.available) return false;
        
        if (searchTerm) {
          const term = searchTerm.toLowerCase();
          return (
            artwork.title.toLowerCase().includes(term) ||
            artwork.description.toLowerCase().includes(term) ||
            artwork.tags.some(tag => tag.toLowerCase().includes(term)) ||
            artwork.medium.toLowerCase().includes(term)
          );
        }
        
        return true;
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
  }, [selectedCategory, priceRange, sortBy, searchTerm]);

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'title', label: 'Alphabetical' }
  ];

  const hasActiveFilters = selectedCategory !== 'all' || 
    priceRange[0] > 0 || priceRange[1] < 3000 || searchTerm;

  return (
    <ErrorBoundary>
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                Art Shop
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8">
                Own a piece of contemporary art. Each artwork is an original creation, 
                carefully crafted to bring beauty and emotion into your space.
              </p>
              
              {/* Header Stats */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {/* Wishlist Link */}
                {wishlist.length > 0 && (
                  <LoadingLink 
                    href="/wishlist" 
                    className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-purple-200 hover:border-purple-300 transition-colors touch-button"
                  >
                    <Heart className="h-4 w-4 text-red-500 fill-current" />
                    <span className="text-purple-600 hover:text-purple-700 font-medium">
                      {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} in wishlist
                    </span>
                  </LoadingLink>
                )}
                
                {/* Available Artworks Count */}
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
                  <span className="text-gray-600">
                    {sampleArtworks.filter(a => a.available).length} artworks available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Search and Controls */}
          <div className="flex flex-col gap-4 mb-6 sm:mb-8">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search artworks, artists, or styles..."
                className="pl-10 w-full"
              />
            </div>
            
            {/* Controls Row */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 touch-button"
                  size="sm"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filters</span>
                  {hasActiveFilters && (
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  )}
                </Button>
                
                <span className="text-sm text-gray-600">
                  {processedArtworks.length} result{processedArtworks.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Sort Dropdown */}
                <div className="relative">
                  <Button
                    variant="outline"
                    onClick={() => setShowSortMenu(!showSortMenu)}
                    className="flex items-center gap-2 touch-button"
                    size="sm"
                  >
                    <ArrowUpDown className="h-4 w-4" />
                    <span className="hidden sm:inline">Sort:</span>
                    <span>{sortOptions.find(opt => opt.value === sortBy)?.label}</span>
                  </Button>
                  
                  {showSortMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value as any);
                            setShowSortMenu(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg touch-button ${
                            sortBy === option.value ? 'bg-purple-50 text-purple-600' : 'text-gray-700'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-6 lg:gap-8 relative">
            {/* Mobile Filters Overlay */}
            {showFilters && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" />
            )}

            {/* Sidebar Filters */}
            <div className={`
              ${showFilters ? 'translate-x-0' : '-translate-x-full'}
              lg:translate-x-0
              fixed lg:static
              left-0 top-0
              w-80 lg:w-64
              h-full lg:h-auto
              bg-white lg:bg-transparent
              shadow-2xl lg:shadow-none
              z-50 lg:z-auto
              transition-transform duration-300 ease-in-out
              lg:transition-none
              flex-shrink-0
              overflow-y-auto lg:overflow-visible
            `}>
              <div className="p-6 lg:p-0">
                {/* Mobile Filter Header */}
                <div className="flex items-center justify-between mb-6 lg:hidden">
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  <Button
                    variant="ghost"
                    onClick={() => setShowFilters(false)}
                    className="p-2 touch-button"
                  >
                    <span className="sr-only">Close filters</span>
                    ×
                  </Button>
                </div>

                <Card className="p-6 sticky top-6">
                  <FilterBar
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    priceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                  />
                  
                  {/* Clear Filters Button */}
                  {hasActiveFilters && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedCategory('all');
                          setPriceRange([0, 3000]);
                          setSearchTerm('');
                          setShowFilters(false);
                        }}
                        className="w-full touch-button"
                        size="sm"
                      >
                        Clear All Filters
                      </Button>
                    </div>
                  )}
                </Card>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              {processedArtworks.length > 0 ? (
                <ProductGrid artworks={processedArtworks} viewMode={viewMode} />
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    No artworks found
                  </h3>
                  <p className="text-gray-600 max-w-sm mx-auto mb-6">
                    Try adjusting your search criteria or browse different categories to discover amazing artworks.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                        setPriceRange([0, 3000]);
                      }}
                      variant="outline"
                    >
                      Clear Filters
                    </Button>
                    <Button asChild>
                      <LoadingLink href="/gallery">
                        Browse Gallery
                      </LoadingLink>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Featured Categories Section */}
        {/* <div className="bg-gradient-to-br from-gray-50 via-white to-purple-50/30 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4">
                Shop by Category
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our diverse collection across different artistic mediums and styles.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {['paintings', 'drawings', 'sculptures', 'digital', 'mixed-media', 'photography'].map((category) => {
                const count = sampleArtworks.filter(a => a.category === category && a.available).length;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category as ArtCategory);
                      setShowFilters(false);
                    }}
                    className={`p-4 text-center rounded-xl border-2 transition-all duration-200 touch-button ${
                      selectedCategory === category
                        ? 'border-purple-300 bg-purple-50 text-purple-700 shadow-md'
                        : 'border-gray-200 bg-white hover:border-purple-200 hover:shadow-sm text-gray-700'
                    }`}
                  >
                    <div className="text-2xl mb-2">
                      {category === 'paintings' && '🎨'}
                      {category === 'drawings' && '✏️'}
                      {category === 'sculptures' && '🗿'}
                      {category === 'digital' && '💻'}
                      {category === 'mixed-media' && '🎭'}
                      {category === 'photography' && '📸'}
                    </div>
                    <p className="font-medium text-sm capitalize">
                      {category.replace('-', ' ')}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {count} item{count !== 1 ? 's' : ''}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div> */}
      </div>
      
      {/* Click outside to close sort menu */}
      {showSortMenu && (
        <div 
          className="fixed inset-0 z-0" 
          onClick={() => setShowSortMenu(false)}
        />
      )}
    </ErrorBoundary>
  );
}