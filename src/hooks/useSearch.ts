// src/hooks/useSearch.ts
import { useState, useMemo } from 'react';
import { Artwork } from '@/lib/types';

export function useSearch(artworks: Artwork[]) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredArtworks = useMemo(() => {
    if (!searchTerm.trim()) return artworks;
    
    const term = searchTerm.toLowerCase().trim();
    
    return artworks.filter(artwork => 
      artwork.title.toLowerCase().includes(term) ||
      artwork.description.toLowerCase().includes(term) ||
      artwork.tags.some(tag => tag.toLowerCase().includes(term)) ||
      artwork.medium.toLowerCase().includes(term) ||
      artwork.year.toString().includes(term)
    );
  }, [artworks, searchTerm]);
  
  return {
    searchTerm,
    setSearchTerm,
    filteredArtworks,
    hasResults: filteredArtworks.length > 0,
    resultCount: filteredArtworks.length
  };
}