// src/components/gallery/ArtGrid.tsx
'use client';

import { useState } from 'react';
import ArtCard from './ArtCard';
import Modal from '@/components/ui/Modal';
import { Artwork } from '@/lib/types';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { Heart, Share2, ShoppingCart } from 'lucide-react';

interface ArtGridProps {
  artworks: Artwork[];
  columns?: 2 | 3 | 4;
}

export default function ArtGrid({ artworks, columns = 3 }: ArtGridProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  const handleShare = (artwork: Artwork) => {
    if (navigator.share) {
      navigator.share({
        title: artwork.title,
        text: artwork.description,
        url: `${window.location.origin}/gallery/${artwork.id}`
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/gallery/${artwork.id}`);
    }
  };

  if (artworks.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
          <span className="text-4xl">🎨</span>
        </div>
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
          No artworks found
        </h3>
        <p className="text-gray-600 max-w-sm mx-auto">
          Try adjusting your search criteria or browse different categories to discover amazing artworks.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={`grid ${columnClasses[columns]} gap-6`}>
        {artworks.map((artwork, index) => (
          <ArtCard
            key={artwork.id}
            artwork={artwork}
            onExpand={setSelectedArtwork}
            onShare={handleShare}
            index={index}
          />
        ))}
      </div>

      {/* Artwork Detail Modal */}
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
                priority
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                  {selectedArtwork.title}
                </h2>
                <p className="text-gray-600">{selectedArtwork.year}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Medium</h4>
                  <p className="text-gray-700">{selectedArtwork.medium}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Dimensions</h4>
                  <p className="text-gray-700">{selectedArtwork.dimensions}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedArtwork.description}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedArtwork.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {selectedArtwork.available && (
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-purple-600">
                      {formatPrice(selectedArtwork.price)}
                    </span>
                    <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium">
                      Available
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" onClick={() => handleShare(selectedArtwork)}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}