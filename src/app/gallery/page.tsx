// src/app/gallery/page.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Filter, Grid, Maximize2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Modal from '@/components/ui/Modal';
import { Card } from '@/components/ui/Card';
import { sampleArtworks } from '@/lib/data';
import { ArtCategory, Artwork } from '@/lib/types';
import { capitalizeFirst } from '@/lib/utils';

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ArtCategory | 'all'>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const categories: (ArtCategory | 'all')[] = [
    'all', 'paintings', 'drawings', 'sculptures', 'digital', 'mixed-media', 'photography'
  ];

  const filteredArtworks = sampleArtworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || artwork.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the complete collection of artworks spanning different mediums, 
            styles, and periods of artistic expression.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search artworks..."
                className="pl-10"
              />
            </div>
          </div>
          
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Category Filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} sm:block mb-8`}>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-purple-50 hover:border-purple-300'
                }`}
              >
                {category === 'all' ? 'All' : capitalizeFirst(category.replace('-', ' '))}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredArtworks.length} of {sampleArtworks.length} artworks
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork, index) => (
            <Card 
              key={artwork.id} 
              hover 
              artistic
              className={`group cursor-pointer animate-fade-in opacity-0`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Expand Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <Maximize2 className="h-4 w-4 text-gray-700" />
                  </div>
                </div>
                
                {/* Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif font-semibold text-lg mb-1">{artwork.title}</h3>
                  <p className="text-sm text-gray-200">{artwork.year} • {artwork.medium}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-3xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No artworks found</h3>
            <p className="text-gray-600">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>

      {/* Artwork Modal */}
      <Modal
        isOpen={!!selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        size="xl"
      >
        {selectedArtwork && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative aspect-square">
              <Image
                src={selectedArtwork.imageUrl}
                alt={selectedArtwork.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  {selectedArtwork.title}
                </h2>
                <p className="text-gray-600">{selectedArtwork.year}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Medium</h4>
                  <p className="text-gray-700">{selectedArtwork.medium}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Dimensions</h4>
                  <p className="text-gray-700">{selectedArtwork.dimensions}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Description</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedArtwork.description}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Tags</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedArtwork.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {selectedArtwork.available && (
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      {formatPrice(selectedArtwork.price)}
                    </span>
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      Available
                    </span>
                  </div>
                  <Button className="w-full">
                    View in Shop
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}