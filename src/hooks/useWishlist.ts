// src/hooks/useWishlist.ts
'use client';

import { useState, useEffect } from 'react';
import { Artwork } from '@/lib/types';

const WISHLIST_STORAGE_KEY = 'moon-doggy-wishlist';

export function useWishlist() {
  const [wishlist, setWishlist] = useState<Artwork[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const loadWishlist = () => {
      try {
        const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
        if (savedWishlist) {
          const parsedWishlist = JSON.parse(savedWishlist);
          setWishlist(Array.isArray(parsedWishlist) ? parsedWishlist : []);
        }
      } catch (error) {
        console.error('Error loading wishlist from localStorage:', error);
        setWishlist([]);
      } finally {
        setIsLoaded(true);
      }
    };

    loadWishlist();
  }, []);

  // Save wishlist to localStorage whenever it changes (but only after initial load)
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
      } catch (error) {
        console.error('Error saving wishlist to localStorage:', error);
      }
    }
  }, [wishlist, isLoaded]);

  const addToWishlist = (artwork: Artwork) => {
    setWishlist(prev => {
      // Check if item already exists
      const exists = prev.some(item => item.id === artwork.id);
      if (exists) {
        console.log('Item already in wishlist:', artwork.title);
        return prev;
      }
      
      console.log('Adding to wishlist:', artwork.title);
      const newWishlist = [...prev, artwork];
      
      // Show success feedback - dispatch event for toast ONLY ONCE
      setTimeout(() => {
        if (typeof window !== 'undefined' && window.dispatchEvent) {
          window.dispatchEvent(new CustomEvent('wishlist-updated', {
            detail: { 
              action: 'added', 
              artwork: artwork.title,
              count: newWishlist.length 
            }
          }));
        }
      }, 0);
      
      return newWishlist;
    });
  };

  const removeFromWishlist = (artworkId: string) => {
    setWishlist(prev => {
      const itemToRemove = prev.find(item => item.id === artworkId);
      const newWishlist = prev.filter(item => item.id !== artworkId);
      
      if (itemToRemove) {
        console.log('Removing from wishlist:', itemToRemove.title);
        
        // Show removal feedback - dispatch event for toast ONLY ONCE
        setTimeout(() => {
          if (typeof window !== 'undefined' && window.dispatchEvent) {
            window.dispatchEvent(new CustomEvent('wishlist-updated', {
              detail: { 
                action: 'removed', 
                artwork: itemToRemove.title,
                count: newWishlist.length 
              }
            }));
          }
        }, 0);
      }
      
      return newWishlist;
    });
  };

  const isInWishlist = (artworkId: string) => {
    return wishlist.some(item => item.id === artworkId);
  };

  const clearWishlist = () => {
    setWishlist([]);
    
    if (typeof window !== 'undefined' && window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('wishlist-updated', {
        detail: { 
          action: 'cleared', 
          artwork: 'all items',
          count: 0 
        }
      }));
    }
  };

  const getWishlistCount = () => {
    return wishlist.length;
  };

  const toggleWishlist = (artwork: Artwork) => {
    if (isInWishlist(artwork.id)) {
      removeFromWishlist(artwork.id);
    } else {
      addToWishlist(artwork);
    }
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
    getWishlistCount,
    toggleWishlist,
    isLoaded // Useful for showing loading states
  };
}