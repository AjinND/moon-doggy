// src/lib/cart.ts

import { Artwork, Cart, CartItem } from './types';

export class CartManager {
  private static instance: CartManager;
  private cart: Cart = { items: [], total: 0, itemCount: 0 };
  private listeners: Array<(cart: Cart) => void> = [];

  static getInstance(): CartManager {
    if (!CartManager.instance) {
      CartManager.instance = new CartManager();
    }
    return CartManager.instance;
  }

  constructor() {
    if (typeof window !== 'undefined') {
      this.loadFromStorage();
    }
  }

  subscribe(listener: (cart: Cart) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(listener => listener(this.cart));
    this.saveToStorage();
  }

  private saveToStorage() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('artist-cart', JSON.stringify(this.cart));
    }
  }

  private loadFromStorage() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('artist-cart');
      if (saved) {
        try {
          this.cart = JSON.parse(saved);
          this.recalculateTotal();
        } catch (error) {
          console.error('Error loading cart from storage:', error);
        }
      }
    }
  }

  private recalculateTotal() {
    this.cart.total = this.cart.items.reduce(
      (sum, item) => sum + (item.artwork.price * item.quantity), 0
    );
    this.cart.itemCount = this.cart.items.reduce(
      (sum, item) => sum + item.quantity, 0
    );
  }

  addItem(artwork: Artwork, quantity: number = 1) {
    const existingItem = this.cart.items.find(item => item.artwork.id === artwork.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.items.push({
        artwork,
        quantity,
        addedAt: new Date()
      });
    }
    
    this.recalculateTotal();
    this.notify();
  }

  removeItem(artworkId: string) {
    this.cart.items = this.cart.items.filter(item => item.artwork.id !== artworkId);
    this.recalculateTotal();
    this.notify();
  }

  updateQuantity(artworkId: string, quantity: number) {
    const item = this.cart.items.find(item => item.artwork.id === artworkId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(artworkId);
      } else {
        item.quantity = quantity;
        this.recalculateTotal();
        this.notify();
      }
    }
  }

  clearCart() {
    this.cart = { items: [], total: 0, itemCount: 0 };
    this.notify();
  }

  getCart(): Cart {
    return { ...this.cart };
  }

  getItemCount(): number {
    return this.cart.itemCount;
  }

  getTotal(): number {
    return this.cart.total;
  }
}

