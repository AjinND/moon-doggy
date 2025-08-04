// src/components/shop/FilterBar.tsx

import { ArtCategory } from '@/lib/types';
import { capitalizeFirst } from '@/lib/utils';

interface FilterBarProps {
  selectedCategory: ArtCategory | 'all';
  onCategoryChange: (category: ArtCategory | 'all') => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

const categories: (ArtCategory | 'all')[] = [
  'all', 'paintings', 'drawings', 'sculptures', 'digital', 'mixed-media', 'photography'
];

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange
}: FilterBarProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-purple-100 text-purple-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category === 'all' ? 'All Categories' : capitalizeFirst(category.replace('-', ' '))}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-4">
          <div>
            <input
              type="range"
              min="0"
              max="3000"
              step="50"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Availability</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" defaultChecked className="mr-2 text-purple-600" />
            <span className="text-sm text-gray-600">Available Now</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 text-purple-600" />
            <span className="text-sm text-gray-600">Commission Available</span>
          </label>
        </div>
      </div>
    </div>
  );
}

