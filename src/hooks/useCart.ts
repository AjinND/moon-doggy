// src/hooks/useCart.ts

import { useState, useEffect } from 'react';
import { CartManager } from '../lib/cart';
import { Cart, Artwork } from '../lib/types';

export function useCart() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0, itemCount: 0 });
  const cartManager = CartManager.getInstance();

  useEffect(() => {
    setCart(cartManager.getCart());
    return cartManager.subscribe(setCart);
  }, [cartManager]);

  const addToCart = (artwork: Artwork, quantity: number = 1) => {
    cartManager.addItem(artwork, quantity);
  };

  const removeFromCart = (artworkId: string) => {
    cartManager.removeItem(artworkId);
  };

  const updateQuantity = (artworkId: string, quantity: number) => {
    cartManager.updateQuantity(artworkId, quantity);
  };

  const clearCart = () => {
    cartManager.clearCart();
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount: cart.itemCount,
    total: cart.total
  };
}