// src/components/shop/AddToCart.tsx

'use client';

import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';
import { Artwork } from '@/lib/types';

interface AddToCartProps {
  artwork: Artwork;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'artistic';
}

export default function AddToCart({ artwork, size = 'md', variant = 'primary' }: AddToCartProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = async () => {
    if (!artwork.available) return;
    
    addToCart(artwork);
    setIsAdded(true);
    
    // Reset the state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  if (!artwork.available) {
    return (
      <Button disabled size={size} variant="outline">
        Sold Out
      </Button>
    );
  }

  return (
    <Button 
      onClick={handleAddToCart}
      size={size}
      variant={isAdded ? 'artistic' : variant}
      className={isAdded ? 'bg-green-100 text-green-700 border-green-300' : ''}
    >
      {isAdded ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </>
      )}
    </Button>
  );
}