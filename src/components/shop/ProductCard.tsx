// src/components/shop/ProductCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Artwork } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  artwork: Artwork;
  viewMode: 'grid' | 'list';
  index: number;
}

export default function ProductCard({ artwork, viewMode, index }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(artwork);
  };

  if (viewMode === 'list') {
    return (
      <Card 
        hover 
        artistic
        className={`animate-fade-in opacity-0`}
        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
      >
        <Link href={`/shop/${artwork.id}`}>
          <div className="flex flex-col sm:flex-row">
            <div className="relative aspect-square sm:w-48 sm:h-48 flex-shrink-0">
              <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                fill
                className="object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-t-none"
              />
            </div>
            
            <CardContent className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{artwork.medium} • {artwork.dimensions}</p>
                  <p className="text-gray-700 text-sm line-clamp-2">{artwork.description}</p>
                </div>
                <div className="ml-4 text-right">
                  <p className="text-2xl font-bold text-purple-600">{formatPrice(artwork.price)}</p>
                  <p className="text-sm text-gray-500">{artwork.year}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button onClick={handleAddToCart} size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Quick View
                </Button>
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </div>
        </Link>
      </Card>
    );
  }

  return (
    <Card 
      hover 
      artistic
      className={`group animate-fade-in opacity-0`}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      <Link href={`/shop/${artwork.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-t-xl">
          <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <Button size="sm" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Price Tag */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-sm font-semibold text-purple-600">
              {formatPrice(artwork.price)}
            </span>
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="text-lg font-serif font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-200">
            {artwork.title}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{artwork.medium}</p>
          <p className="text-gray-700 text-sm line-clamp-2">{artwork.description}</p>
          
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-gray-500">{artwork.year}</span>
            <div className="flex gap-1">
              {artwork.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}