// src/app/cart/page.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/utils';
import LoadingLink from '@/components/ui/LoadingLink';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');

  const shippingCost = cart.total > 500 ? 0 : 50;
  const tax = cart.total * 0.08; // 8% tax
  const finalTotal = cart.total + shippingCost + tax;

  if (cart.items.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
            <ShoppingBag className="h-16 w-16 text-gray-400" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover beautiful artworks and add them to your collection.
          </p>
          <Button size="lg" asChild>
            <LoadingLink href="/shop">
              Continue Shopping
            </LoadingLink>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <LoadingLink href="/shop" className="text-purple-600 hover:text-purple-700 mr-4">
              <ArrowLeft className="h-6 w-6" />
            </LoadingLink>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Shopping Cart</h1>
          </div>
          <Button variant="ghost" onClick={clearCart} className="text-red-600 hover:text-red-700">
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <Card key={item.artwork.id} artistic>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Artwork Image */}
                    <div className="relative w-full sm:w-32 aspect-square flex-shrink-0">
                      <Image
                        src={item.artwork.imageUrl}
                        alt={item.artwork.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    {/* Artwork Details */}
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                        {item.artwork.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {item.artwork.medium} • {item.artwork.dimensions}
                      </p>
                      <p className="text-sm text-gray-700 mb-4">
                        {item.artwork.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.artwork.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-50 transition-colors duration-200"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 border-x border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.artwork.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-50 transition-colors duration-200"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Price and Remove */}
                        <div className="flex items-center gap-4">
                          <span className="text-lg font-semibold text-purple-600">
                            {formatPrice(item.artwork.price * item.quantity)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.artwork.id)}
                            className="text-red-600 hover:text-red-700 transition-colors duration-200"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card artistic className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cart.itemCount} items)</span>
                    <span className="font-medium">{formatPrice(cart.total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shippingCost > 0 ? formatPrice(shippingCost) : 'Free'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">{formatPrice(tax)}</span>
                  </div>
                  {cart.total > 500 && (
                    <div className="text-sm text-green-600 bg-green-50 p-2 rounded-lg">
                      🎉 Free shipping on orders over $500!
                    </div>
                  )}
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <Input
                    label="Promo Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                  />
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    Apply Code
                  </Button>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-purple-600">{formatPrice(finalTotal)}</span>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Proceed to Checkout
                </Button>

                <div className="mt-4 text-center">
                  <LoadingLink href="/shop" className="text-purple-600 hover:text-purple-700 text-sm">
                    Continue Shopping
                  </LoadingLink>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

