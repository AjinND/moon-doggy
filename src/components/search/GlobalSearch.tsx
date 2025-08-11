// src/components/search/GlobalSearch.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';
import { sampleArtworks } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import ImageWithLoading from '@/components/ui/ImageWithLoading';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

interface GlobalSearchProps {
  onClose?: () => void;
}

export default function GlobalSearch({ onClose }: GlobalSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { searchTerm, setSearchTerm, filteredArtworks, hasResults } = useSearch(sampleArtworks);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = () => {
    setSearchTerm('');
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-start justify-center p-4 pt-16">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={handleClose}
        />
        
        {/* Search Modal */}
        <Card className="relative w-full max-w-2xl bg-white shadow-2xl">
          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search artworks, artists, or collections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-lg placeholder-gray-400"
            />
            <button
              onClick={handleClose}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchTerm && (
              <div className="p-4">
                {hasResults ? (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 mb-4">
                      Found {filteredArtworks.length} artwork{filteredArtworks.length !== 1 ? 's' : ''}
                    </p>
                    {filteredArtworks.slice(0, 6).map((artwork) => (
                      <Link
                        key={artwork.id}
                        href={`/shop/${artwork.id}`}
                        onClick={handleClose}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <ImageWithLoading
                            src={artwork.imageUrl}
                            alt={artwork.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">
                            {artwork.title}
                          </h4>
                          <p className="text-sm text-gray-600 truncate">
                            {artwork.medium} • {artwork.year}
                          </p>
                        </div>
                        {artwork.available && (
                          <div className="text-sm font-semibold text-purple-600">
                            {formatPrice(artwork.price)}
                          </div>
                        )}
                      </Link>
                    ))}
                    {filteredArtworks.length > 6 && (
                      <Link
                        href={`/shop?search=${encodeURIComponent(searchTerm)}`}
                        onClick={handleClose}
                        className="block text-center py-2 text-purple-600 hover:text-purple-700 font-medium"
                      >
                        View all {filteredArtworks.length} results
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600">
                      Try searching for different keywords or browse our collections.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Search Suggestions */}
            {!searchTerm && (
              <div className="p-4">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {['paintings', 'sculptures', 'abstract', 'contemporary', 'digital art'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchTerm(term)}
                        className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Featured Artworks</h3>
                  <div className="space-y-2">
                    {sampleArtworks.filter(a => a.featured).slice(0, 3).map((artwork) => (
                      <Link
                        key={artwork.id}
                        href={`/shop/${artwork.id}`}
                        onClick={handleClose}
                        className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        <div className="relative w-10 h-10 flex-shrink-0">
                          <ImageWithLoading
                            src={artwork.imageUrl}
                            alt={artwork.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {artwork.title}
                          </h4>
                          <p className="text-xs text-gray-600">{artwork.medium}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span>Press <kbd className="px-1 py-0.5 bg-gray-100 rounded">↵</kbd> to select</span>
                <span>Press <kbd className="px-1 py-0.5 bg-gray-100 rounded">esc</kbd> to close</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}