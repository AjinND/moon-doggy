// src/components/gallery/ArtCard.tsx
'use client';

import { useState, useEffect } from 'react';
import { Heart, Share2, ShoppingCart, Eye } from 'lucide-react';
import { ArtCardProps } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ImageWithLoading from '@/components/ui/ImageWithLoading';
import { formatPrice } from '@/lib/utils';
import { resolveImagePath } from '@/lib/image';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import LoadingLink from '../ui/LoadingLink';

export default function ArtCard({ 
  artwork, 
  viewMode = 'grid',
  onExpand, 
  onShare, 
  index,
  showPrice = true,
  showActions = true,
  variant = 'gallery'
}: ArtCardProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist, isLoaded } = useWishlist();
  const { addToCart } = useCart();
  
  // Local state that syncs with wishlist hook
  const [isLiked, setIsLiked] = useState(false);

  // Update local state when wishlist loads or changes
  useEffect(() => {
    if (isLoaded) {
      setIsLiked(isInWishlist(artwork.id));
    }
  }, [isLoaded, artwork.id, isInWishlist]);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onShare) {
      onShare(artwork);
    } else {
      try {
        if (navigator.share) {
          await navigator.share({
            title: artwork.title,
            text: artwork.description,
            url: `${window.location.origin}/shop/${artwork.id}`
          });
        } else {
          await navigator.clipboard.writeText(`${window.location.origin}/shop/${artwork.id}`);
        }
      } catch (error) {
        console.log('Share failed:', error);
      }
    }
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Only call the hook methods directly without additional event dispatching
    if (isLiked) {
      removeFromWishlist(artwork.id);
    } else {
      addToWishlist(artwork);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (artwork.available) {
      addToCart(artwork);
    }
  };

  const handleCardClick = () => {
    if (onExpand) {
      onExpand(artwork);
    }
  };

  // List View Layout
  if (viewMode === 'list') {
    return (
      <Card 
        hover 
        artistic
        className={`animate-fade-in opacity-0 cursor-pointer`}
        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
        onClick={handleCardClick}
      >
        <div className="flex flex-col sm:flex-row">
          <div className="relative aspect-square sm:w-32 sm:h-32 flex-shrink-0">
            <ImageWithLoading
              src={resolveImagePath(artwork.imageUrl, artwork.images)}
              alt={artwork.title}
              fill
              className="object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
              sizes="(max-width: 640px) 100vw, 128px"
            />
            
            {/* Always visible wishlist button for list view */}
            {variant !== 'wishlist' && showActions && isLoaded && (
              <button
                onClick={handleWishlist}
                className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 touch-button ${
                  isLiked 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/90 text-gray-700 hover:bg-white'
                }`}
                aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`h-3 w-3 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            )}
          </div>
          
          <div className="flex-1 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-gray-900 mb-2">
                  {artwork.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{artwork.medium} • {artwork.dimensions}</p>
                <p className="text-sm text-gray-700 line-clamp-2 mb-3">{artwork.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {artwork.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:items-end gap-3">
                {showPrice && (
                  <span className="text-xl sm:text-2xl font-bold text-purple-600">
                    {formatPrice(artwork.price)}
                  </span>
                )}
                
                {artwork.available ? (
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    Available
                  </span>
                ) : (
                  <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full">
                    Sold
                  </span>
                )}
                
                {showActions && (
                  <div className="flex items-center gap-2">
                    {variant === 'shop' && artwork.available && (
                      <Button size="sm" onClick={handleAddToCart} className="touch-button">
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">Cart</span>
                      </Button>
                    )}
                    
                    <Button variant="outline" size="sm" onClick={handleShare} className="touch-button">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    
                    <Button variant="outline" size="sm" asChild className="touch-button">
                      <LoadingLink href={`/shop/${artwork.id}`}>
                        <Eye className="h-4 w-4" />
                      </LoadingLink>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Grid View Layout - Simplified with direct action buttons
  return (
    <Card 
      hover 
      artistic
      className={`group cursor-pointer animate-fade-in opacity-0 relative overflow-hidden`}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
      onClick={handleCardClick}
    >
      <div className="relative aspect-square overflow-hidden">
        <ImageWithLoading
          src={resolveImagePath(artwork.imageUrl, artwork.images)}
          alt={artwork.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 4}
        />

        {/* Action Buttons Layout */}
        {showActions && isLoaded && (
          <>
            {/* Wishlist Button - Top Right (Always Visible) */}
            {variant !== 'wishlist' && (
              <button
                onClick={handleWishlist}
                className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-200 touch-button ${
                  isLiked 
                    ? 'bg-red-500 text-white border-red-500' 
                    : 'bg-white/95 text-gray-700 border-white/20 hover:bg-white hover:scale-110'
                } shadow-lg`}
                aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            )}

            {/* Share Button - Below Wishlist (Visible on Hover) */}
            <button
              onClick={handleShare}
              className="absolute top-16 right-3 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-200 border border-white/20 shadow-lg touch-button opacity-0 group-hover:opacity-100"
              aria-label="Share artwork"
            >
              <Share2 className="h-4 w-4" />
            </button>
            
            {/* Cart Button - Bottom Right (Visible on Hover) */}
            {/* {artwork.available && (
              <button
                onClick={handleAddToCart}
                className="absolute bottom-3 right-3 w-10 h-10 bg-purple-600/95 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition-all duration-200 shadow-lg touch-button opacity-0 group-hover:opacity-100"
                aria-label="Add to cart"
              >
                <ShoppingCart className="h-4 w-4" />
              </button>
            )} */}
          </>
        )}
        
        {/* Featured badge */}
        {artwork.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium px-2 py-1 rounded-full shadow-lg">
              Featured
            </span>
          </div>
        )}
        
        {/* Availability indicator */}
        {!artwork.available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium shadow-lg">
              Sold
            </span>
          </div>
        )}

        {/* Price overlay for available items */}
        {artwork.available && showPrice && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-white/95 backdrop-blur-sm text-purple-600 font-semibold px-3 py-1 rounded-full text-sm shadow-lg border border-white/20">
              {formatPrice(artwork.price)}
            </span>
          </div>
        )}
      </div>
      
      {/* Card content */}
      <div className="p-4">
        <h3 className="font-serif font-semibold text-gray-900 line-clamp-1 mb-1">
          {artwork.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-2">{artwork.medium} • {artwork.year}</p>
        
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">
          {artwork.description}
        </p>
        
        <div className="flex justify-between items-end">
          <div className="flex gap-1">
            {artwork.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            {artwork.tags.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                +{artwork.tags.length - 2}
              </span>
            )}
          </div>
          
          {/* Quick view link */}
          <LoadingLink
            href={`/shop/${artwork.id}`}
            onClick={(e) => e.stopPropagation()}
            className="text-purple-600 hover:text-purple-700 transition-colors text-sm font-medium"
          >
            <Eye className="h-4 w-4" />
          </LoadingLink>
        </div>
      </div>
    </Card>
  );
}