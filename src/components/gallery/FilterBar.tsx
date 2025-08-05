// src/components/gallery/FilterBar.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ArtCategory } from '@/lib/types';
import { capitalizeFirst } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface FilterBarProps {
  categories: (ArtCategory | 'all')[];
  selectedCategory: ArtCategory | 'all';
  onCategoryChange: (category: ArtCategory | 'all') => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  availableOnly: boolean;
  onAvailableOnlyChange: (available: boolean) => void;
  featuredOnly: boolean;
  onFeaturedOnlyChange: (featured: boolean) => void;
}

export default function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  availableOnly,
  onAvailableOnlyChange,
  featuredOnly,
  onFeaturedOnlyChange
}: FilterBarProps) {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    availability: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const clearAllFilters = () => {
    onCategoryChange('all');
    onPriceRangeChange([0, 3000]);
    onAvailableOnlyChange(false);
    onFeaturedOnlyChange(false);
  };

  const hasActiveFilters = selectedCategory !== 'all' || 
    priceRange[0] > 0 || priceRange[1] < 3000 || 
    availableOnly || featuredOnly;

  return (
    <div className="space-y-6">
      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="pb-4 border-b border-gray-200">
          <Button variant="outline" size="sm" onClick={clearAllFilters} className="w-full">
            Clear All Filters
          </Button>
        </div>
      )}

      {/* Categories */}
      <div>
        <button
          onClick={() => toggleSection('categories')}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
          {expandedSections.categories ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>
        
        {expandedSections.categories && (
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-100 text-purple-700 font-medium shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {category === 'all' ? 'All Categories' : capitalizeFirst(category.replace('-', ' '))}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div>
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <h3 className="text-lg font-semibold text-gray-900">Price Range</h3>
          {expandedSections.price ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>
        
        {expandedSections.price && (
          <div className="space-y-4">
            <div className="px-2">
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="50"
                  value={priceRange[0]}
                  onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
                  className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer z-10 opacity-70"
                />
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                  className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
            
            <div className="flex justify-between text-sm">
              <div className="bg-gray-100 px-3 py-1 rounded">
                <span className="text-gray-600">Min: </span>
                <span className="font-medium">${priceRange[0]}</span>
              </div>
              <div className="bg-gray-100 px-3 py-1 rounded">
                <span className="text-gray-600">Max: </span>
                <span className="font-medium">${priceRange[1]}</span>
              </div>
            </div>
            
            {/* Quick price filters */}
            <div className="grid grid-cols-2 gap-2">
              {[
                [0, 500],
                [500, 1000],
                [1000, 2000],
                [2000, 3000]
              ].map(([min, max]) => (
                <button
                  key={`${min}-${max}`}
                  onClick={() => onPriceRangeChange([min, max])}
                  className={`px-3 py-2 text-xs rounded-lg border transition-all duration-200 ${
                    priceRange[0] === min && priceRange[1] === max
                      ? 'border-purple-300 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  ${min} - ${max}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Availability & Features */}
      <div>
        <button
          onClick={() => toggleSection('availability')}
          className="flex items-center justify-between w-full text-left mb-4"
        >
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          {expandedSections.availability ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>
        
        {expandedSections.availability && (
          <div className="space-y-3">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={availableOnly}
                onChange={(e) => onAvailableOnlyChange(e.target.checked)}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                Available for Purchase
              </span>
            </label>
            
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                checked={featuredOnly}
                onChange={(e) => onFeaturedOnlyChange(e.target.checked)}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
              />
              <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                Featured Artworks
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Active Filters</h4>
          <div className="space-y-2">
            {selectedCategory !== 'all' && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Category:</span>
                <span className="font-medium text-purple-600">
                  {capitalizeFirst(selectedCategory.replace('-', ' '))}
                </span>
              </div>
            )}
            
            {(priceRange[0] > 0 || priceRange[1] < 3000) && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Price:</span>
                <span className="font-medium text-purple-600">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
            )}
            
            {availableOnly && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium text-green-600">Available</span>
              </div>
            )}
            
            {featuredOnly && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium text-purple-600">Featured</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}