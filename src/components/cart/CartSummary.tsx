
// src/components/cart/CartSummary.tsx
'use client';

import { Cart } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

interface CartSummaryProps {
  cart: Cart;
  onCheckout: () => void;
}

export default function CartSummary({ cart, onCheckout }: CartSummaryProps) {
  const shipping = cart.total > 500 ? 0 : 50;
  const tax = cart.total * 0.08;
  const total = cart.total + shipping + tax;

  return (
    <Card className="sticky top-4">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span>Subtotal ({cart.itemCount} items)</span>
            <span>{formatPrice(cart.total)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping > 0 ? formatPrice(shipping) : 'Free'}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>{formatPrice(tax)}</span>
          </div>
          {cart.total > 500 && (
            <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
              🎉 Free shipping on orders over $500!
            </div>
          )}
        </div>
        
        <div className="border-t pt-4 mb-6">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
        
        <Button onClick={onCheckout} className="w-full" size="lg">
          Proceed to Checkout
        </Button>
      </CardContent>
    </Card>
  );
}
