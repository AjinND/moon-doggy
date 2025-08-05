// src/components/gallery/ArtCard.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Heart, Share2, Maximize2, Info } from 'lucide-react';
import { Artwork } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

interface ArtCardProps {
  artwork: Artwork;
  onExpand: (artwork: Artwork) => void;
  onShare?: (artwork: Artwork) => void;
  index: number;
}

export default function ArtCard({ artwork, onExpand, onShare, index }: ArtCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onShare) {
      onShare(artwork);
    } else {
      // Default share functionality
      if (navigator.share) {
        navigator.share({
          title: artwork.title,
          text: artwork.description,
          url: window.location.href + `/gallery/${artwork.id}`
        });
      }
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Card 
      hover 
      artistic
      className={`group cursor-pointer animate-fade-in opacity-0 relative overflow-hidden`}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
      onClick={() => onExpand(artwork)}
    >
      <div className="relative aspect-square overflow-hidden">
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
        )}
        
        <Image
          src={artwork.imageUrl}
          alt={artwork.title}
          fill
          className={`object-cover transition-all duration-700 ${
            imageLoaded 
              ? 'group-hover:scale-110 opacity-100' 
              : 'opacity-0 scale-105'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <Button
            onClick={handleLike}
            className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 text-gray-700 hover:bg-white'
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
          
          <Button
            onClick={handleShare}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-200"
          >
            <Share2 className="h-4 w-4" />
          </Button>
          
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onExpand(artwork);
            }}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors duration-200"
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <h3 className="font-serif font-semibold text-lg mb-1 line-clamp-1">
            {artwork.title}
          </h3>
          <p className="text-sm text-gray-200 mb-2">{artwork.year} • {artwork.medium}</p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-300">{artwork.dimensions}</span>
            {artwork.available && (
              <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                {formatPrice(artwork.price)}
              </span>
            )}
          </div>
        </div>
        
        {/* Featured badge */}
        {artwork.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
        
        {/* Availability indicator */}
        {!artwork.available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">
              Sold
            </span>
          </div>
        )}
      </div>
      
      {/* Card content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-semibold text-gray-900 line-clamp-1 flex-1">
            {artwork.title}
          </h3>
          <Button className="ml-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Info className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {artwork.description}
        </p>
        
        <div className="flex justify-between items-center">
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
          
          {artwork.available && (
            <span className="text-sm font-semibold text-purple-600">
              {formatPrice(artwork.price)}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}