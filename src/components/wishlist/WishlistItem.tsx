// src/components/wishlist/WishlistItem.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Share2, ShoppingCart } from 'lucide-react';
import { Artwork } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

interface WishlistItemProps {
  artwork: Artwork;
  viewMode: 'grid' | 'list';
  onRemove: () => void;
  onAddToCart: () => void;
  onShare: () => void;
  index: number;
}

export default function WishlistItem({ 
  artwork, 
  viewMode, 
  onRemove, 
  onAddToCart, 
  onShare, 
  index 
}: WishlistItemProps) {
  if (viewMode === 'list') {
    return (
      <Card 
        className={`animate-fade-in opacity-0`}
        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
      >
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Image */}
            <Link 
              href={`/shop/${artwork.id}`}
              className="relative aspect-square sm:w-32 sm:h-32 flex-shrink-0 group"
            >
              <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-2">
                <Link href={`/shop/${artwork.id}`}>
                  <h3 className="text-lg font-serif font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                    {artwork.title}
                  </h3>
                </Link>
                <button
                  onClick={onRemove}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1 touch-button"
                  aria-label="Remove from wishlist"
                >
                  <Heart className="h-5 w-5 fill-current" />
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">{artwork.medium} • {artwork.dimensions}</p>
              <p className="text-sm text-gray-700 mb-4 line-clamp-2">{artwork.description}</p>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-purple-600">
                    {formatPrice(artwork.price)}
                  </span>
                  {artwork.available ? (
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      Available
                    </span>
                  ) : (
                    <span className="text-sm text-red-600 bg-red-100 px-2 py-1 rounded-full">
                      Sold Out
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onShare}
                    className="flex-1 sm:flex-none touch-button"
                  >
                    <Share2 className="h-4 w-4 sm:mr-2" />
                    <span className="hidden sm:inline">Share</span>
                  </Button>
                  {artwork.available && (
                    <Button
                      onClick={onAddToCart}
                      size="sm"
                      className="flex-1 sm:flex-none touch-button"
                    >
                      <ShoppingCart className="h-4 w-4 sm:mr-2" />
                      <span className="hidden sm:inline">Add to Cart</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Grid View
  return (
    <Card 
      className={`group animate-fade-in opacity-0`}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      <div className="relative aspect-square overflow-hidden rounded-t-xl">
        <Link href={`/shop/${artwork.id}`}>
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        
        {/* Remove from Wishlist */}
        <button
          onClick={onRemove}
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 hover:bg-white hover:scale-110 transition-all duration-200 touch-button"
          aria-label="Remove from wishlist"
        >
          <Heart className="h-4 w-4 fill-current" />
        </button>
        
        {/* Quick Actions */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="outline"
            size="sm"
            onClick={onShare}
            className="flex-1 bg-white/90 backdrop-blur-sm hover:bg-white touch-button"
          >
            <Share2 className="h-4 w-4" />
          </Button>
          {artwork.available && (
            <Button
              onClick={onAddToCart}
              size="sm"
              className="flex-1 bg-purple-600/90 backdrop-blur-sm hover:bg-purple-600 touch-button"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        {/* Availability Indicator */}
        {!artwork.available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">
              Sold Out
            </span>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <Link href={`/shop/${artwork.id}`}>
          <h3 className="font-serif font-semibold text-gray-900 mb-1 line-clamp-1 hover:text-purple-600 transition-colors">
            {artwork.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-2">{artwork.medium}</p>
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">{artwork.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-purple-600">
            {formatPrice(artwork.price)}
          </span>
          {artwork.available && (
            <Button
              onClick={onAddToCart}
              size="sm"
              className="px-3 touch-button"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}