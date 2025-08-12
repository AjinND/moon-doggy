// src/components/wishlist/WishlistSummary.tsx
'use client';

import { ShoppingCart } from 'lucide-react';
import { Artwork } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import LoadingLink from '../ui/LoadingLink';

interface WishlistSummaryProps {
  wishlist: Artwork[];
  onAddAllToCart: () => void;
}

export default function WishlistSummary({ wishlist, onAddAllToCart }: WishlistSummaryProps) {
  const totalValue = wishlist.reduce((sum, artwork) => sum + artwork.price, 0);
  const availableItems = wishlist.filter(artwork => artwork.available);
  const availableValue = availableItems.reduce((sum, artwork) => sum + artwork.price, 0);

  return (
    <Card className="mt-8">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Wishlist Summary</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>{wishlist.length} total item{wishlist.length !== 1 ? 's' : ''}</p>
              <p>{availableItems.length} available for purchase</p>
              <div className="space-y-1">
                <p className="text-base font-semibold text-purple-600">
                  Total value: {formatPrice(totalValue)}
                </p>
                {availableItems.length > 0 && availableItems.length < wishlist.length && (
                  <p className="text-sm text-green-600">
                    Available value: {formatPrice(availableValue)}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <LoadingLink href="/shop">
                Continue Shopping
              </LoadingLink>
            </Button>
            
            {availableItems.length > 0 && (
              <>
                {/* Desktop: Add All to Cart */}
                <Button 
                  onClick={onAddAllToCart}
                  className="hidden sm:flex items-center gap-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add All to Cart ({availableItems.length})
                </Button>
                
                {/* Mobile: Add All to Cart */}
                <Button 
                  onClick={onAddAllToCart}
                  className="w-full sm:hidden"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add All Available to Cart ({availableItems.length})
                </Button>
              </>
            )}
            
            <Button asChild className="w-full sm:w-auto">
              <LoadingLink href="/cart">
                View Cart
              </LoadingLink>
            </Button>
          </div>
        </div>
        
        {/* Additional Info */}
        {availableItems.length === 0 && wishlist.length > 0 && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> None of the items in your wishlist are currently available for purchase. 
              They may have been sold or are temporarily unavailable.
            </p>
          </div>
        )}
        
        {wishlist.length > 0 && (
          <div className="mt-4 text-xs text-gray-500">
            <p>
              • Prices shown are current and may change
            </p>
            <p>
              • Items in your wishlist are not reserved
            </p>
            <p>
              • You'll be notified if wishlisted items become available
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}