// src/hooks/useWishlist.ts
'use client';

import { useState, useEffect } from 'react';
import { Artwork } from '@/lib/types';
import { useToast } from '@/components/ui/Toast';

export function useWishlist() {
  const [wishlist, setWishlist] = useState<Artwork[]>([]);
  const { addToast } = useToast();

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (artwork: Artwork) => {
    if (!wishlist.some(item => item.id === artwork.id)) {
      setWishlist(prev => [...prev, artwork]);
      addToast({
        type: 'success',
        title: 'Added to Wishlist',
        message: `${artwork.title} has been added to your wishlist`,
        duration: 3000
      });
    }
  };

  const removeFromWishlist = (artworkId: string) => {
    setWishlist(prev => prev.filter(item => item.id !== artworkId));
    addToast({
      type: 'info',
      title: 'Removed from Wishlist',
      message: 'Item has been removed from your wishlist',
      duration: 3000
    });
  };

  const isInWishlist = (artworkId: string) => {
    return wishlist.some(item => item.id === artworkId);
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };
}
