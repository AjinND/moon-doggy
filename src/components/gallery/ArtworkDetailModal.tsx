// src/components/gallery/ArtworkDetailModal.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Share2, ShoppingCart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Artwork } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import ImageWithLoading from '@/components/ui/ImageWithLoading';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';

interface ArtworkDetailModalProps {
  artwork: Artwork;
  onClose: () => void;
}

export default function ArtworkDetailModal({ artwork, onClose }: ArtworkDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const images = artwork.images || [artwork.imageUrl];
  const isLiked = isInWishlist(artwork.id);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: artwork.title,
          text: artwork.description,
          url: `${window.location.origin}/shop/${artwork.id}`
        });
      } catch (error) {
        console.log('Share failed:', error);
      }
    } else {
      await navigator.clipboard.writeText(`${window.location.origin}/shop/${artwork.id}`);
    }
  };

  const handleWishlist = () => {
    if (isLiked) {
      removeFromWishlist(artwork.id);
    } else {
      addToWishlist(artwork);
    }
  };

  const handleAddToCart = () => {
    if (artwork.available) {
      addToCart(artwork);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="relative aspect-square">
          <ImageWithLoading
            src={images[currentImageIndex]}
            alt={artwork.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
          
          {/* Image Navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                  index === currentImageIndex ? 'border-purple-500' : 'border-gray-200'
                }`}
              >
                <Image
                  src={image}
                  alt={`${artwork.title} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Artwork Details */}
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-2">
            {artwork.title}
          </h2>
          <p className="text-gray-600">{artwork.year}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Medium</h4>
            <p className="text-gray-700">{artwork.medium}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Dimensions</h4>
            <p className="text-gray-700">{artwork.dimensions}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Category</h4>
            <p className="text-gray-700 capitalize">{artwork.category.replace('-', ' ')}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Status</h4>
            <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
              artwork.available 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {artwork.available ? 'Available' : 'Sold'}
            </span>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
          <p className="text-gray-700 leading-relaxed">
            {artwork.description}
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {artwork.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {artwork.available && (
          <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl sm:text-3xl font-bold text-purple-600">
                {formatPrice(artwork.price)}
              </span>
              <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium">
                Available
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={handleAddToCart} className="flex-1">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button 
                variant="outline" 
                onClick={handleWishlist}
                className={isLiked ? 'text-red-600 border-red-200' : ''}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            
            <Link 
              href={`/shop/${artwork.id}`}
              className="block mt-3 text-center text-sm text-purple-600 hover:text-purple-700 transition-colors"
            >
              View full details in shop →
            </Link>
          </div>
        )}
        
        {!artwork.available && (
          <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">This artwork is no longer available</h4>
              <p className="text-sm text-gray-600 mb-4">
                But you can still add it to your wishlist or explore similar pieces.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="outline" 
                  onClick={handleWishlist}
                  className={isLiked ? 'text-red-600 border-red-200' : ''}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'In Wishlist' : 'Add to Wishlist'}
                </Button>
                <Button variant="outline" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}