// src/app/gallery/page.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, Grid, List, SlidersHorizontal } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Modal from '@/components/ui/Modal';
import Loading from '@/components/ui/Loading';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { Card } from '@/components/ui/Card';
import FilterBar from '@/components/gallery/FilterBar';
import ArtCard from '@/components/gallery/ArtCard';
import { sampleArtworks } from '@/lib/data';
import { ArtCategory, Artwork } from '@/lib/types';
import ArtworkDetailModal from '@/components/gallery/ArtworkDetailModal';

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ArtCategory | 'all'>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(true);
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  const categories: (ArtCategory | 'all')[] = [
    'all', 'paintings', 'drawings', 'sculptures', 'digital', 'mixed-media', 'photography'
  ];

  // Simulate data loading
  useEffect(() => {
    const loadArtworks = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setArtworks(sampleArtworks);
      setLoading(false);
    };

    loadArtworks();
  }, []);

  // Memoized filtered artworks for better performance
  const filteredArtworks = useMemo(() => {
    return artworks.filter(artwork => {
      const matchesSearch = searchTerm === '' || 
        artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artwork.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artwork.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || artwork.category === selectedCategory;
      const matchesPrice = artwork.price >= priceRange[0] && artwork.price <= priceRange[1];
      const matchesAvailability = !availableOnly || artwork.available;
      const matchesFeatured = !featuredOnly || artwork.featured;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesAvailability && matchesFeatured;
    });
  }, [artworks, searchTerm, selectedCategory, priceRange, availableOnly, featuredOnly]);

  if (loading) {
    return (
      <div className="pt-16">
        <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Gallery
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the complete collection of artworks spanning different mediums, 
              styles, and periods of artistic expression.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Loading size="lg" text="Loading gallery..." />
        </div>
      </div>
    );
  }

  const hasActiveFilters = selectedCategory !== 'all' || 
    priceRange[0] > 0 || priceRange[1] < 3000 || 
    availableOnly || featuredOnly;

  return (
    <ErrorBoundary>
      <div className="pt-16">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Gallery
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the complete collection of artworks spanning different mediums, 
              styles, and periods of artistic expression.
            </p>
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
                placeholder="Search artworks..."
                className="pl-10 w-full"
              />
            </div>
            
            {/* Controls Row */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                  size="sm"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="hidden sm:inline">Filters</span>
                  {hasActiveFilters && (
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  )}
                </Button>
                
                <span className="text-sm text-gray-600 hidden sm:inline">
                  {filteredArtworks.length} artwork{filteredArtworks.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 sm:hidden">
                  {filteredArtworks.length} result{filteredArtworks.length !== 1 ? 's' : ''}
                </span>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    aria-label="Grid view"
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-50'}`}
                    aria-label="List view"
                  >
                    <List className="h-4 w-4" />
                  </button>
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
                    className="p-2"
                  >
                    <span className="sr-only">Close filters</span>
                    ×
                  </Button>
                </div>

                <Card className="p-6 sticky top-6">
                  <FilterBar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    priceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                    availableOnly={availableOnly}
                    onAvailableOnlyChange={setAvailableOnly}
                    featuredOnly={featuredOnly}
                    onFeaturedOnlyChange={setFeaturedOnly}
                  />
                </Card>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="flex-1 min-w-0">
              {filteredArtworks.length > 0 ? (
                <div className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6'
                    : 'space-y-4 sm:space-y-6'
                }>
                  {filteredArtworks.map((artwork, index) => (
                    <ArtCard
                      key={artwork.id}
                      artwork={artwork}
                      viewMode={viewMode}
                      onExpand={setSelectedArtwork}
                      index={index}
                      variant="gallery"
                    />
                  ))}
                </div>
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
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setPriceRange([0, 3000]);
                      setAvailableOnly(false);
                      setFeaturedOnly(false);
                    }}
                    variant="outline"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Artwork Modal */}
        <Modal
          isOpen={!!selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          size="xl"
        >
          {selectedArtwork && (
            <ArtworkDetailModal 
              artwork={selectedArtwork} 
              onClose={() => setSelectedArtwork(null)}
            />
          )}
        </Modal>
      </div>
    </ErrorBoundary>
  );
}