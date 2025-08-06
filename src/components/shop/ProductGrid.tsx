// src/components/shop/ProductGrid.tsx

import Loading from '@/components/ui/Loading';
import ProductCard from './ProductCard';
import { Artwork } from '@/lib/types';

interface ProductGridProps {
  artworks: Artwork[];
  viewMode: 'grid' | 'list';
  loading?: boolean;
}

export default function ProductGrid({ artworks, viewMode, loading }: ProductGridProps) {
  if (loading) {
    return <Loading size="lg" text="Loading artworks..." />;
  }
  if (artworks.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-gray-400 text-3xl">🎨</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No artworks found</h3>
        <p className="text-gray-600">Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  return (
    <div className={
      viewMode === 'grid'
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        : 'space-y-6'
    }>
      {artworks.map((artwork, index) => (
        <ProductCard
          key={artwork.id}
          artwork={artwork}
          viewMode={viewMode}
          index={index}
        />
      ))}
    </div>
  );
}

