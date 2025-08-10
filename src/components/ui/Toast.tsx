// src/components/ui/Toast.tsx
'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Heart, X, Check, ShoppingCart } from 'lucide-react';
import { Toast, ToastType } from '@/lib/types';

interface ToastContextType {
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };
    
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 3000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Listen for wishlist events and convert them to toasts
  useEffect(() => {
    const handleWishlistUpdate = (event: CustomEvent) => {
      const { action, artwork, count } = event.detail;
      
      // Use setTimeout to ensure this runs after the current render cycle
      setTimeout(() => {
        if (action === 'added') {
          addToast({
            type: 'wishlist-added',
            title: 'Added to Wishlist',
            message: `${artwork} • ${count} item${count !== 1 ? 's' : ''} in wishlist`,
            duration: 3000
          });
        } else if (action === 'removed') {
          addToast({
            type: 'wishlist-removed', 
            title: 'Removed from Wishlist',
            message: `${artwork} • ${count} item${count !== 1 ? 's' : ''} in wishlist`,
            duration: 3000
          });
        } else if (action === 'cleared') {
          addToast({
            type: 'info',
            title: 'Wishlist Cleared',
            message: 'All items removed from wishlist',
            duration: 3000
          });
        }
      }, 0);
    };

    // Listen for cart events too
    const handleCartUpdate = (event: CustomEvent) => {
      const { artwork } = event.detail;
      
      setTimeout(() => {
        addToast({
          type: 'cart-added',
          title: 'Added to Cart',
          message: artwork,
          duration: 3000
        });
      }, 0);
    };

    window.addEventListener('wishlist-updated', handleWishlistUpdate as EventListener);
    window.addEventListener('cart-updated', handleCartUpdate as EventListener);
    
    return () => {
      window.removeEventListener('wishlist-updated', handleWishlistUpdate as EventListener);
      window.removeEventListener('cart-updated', handleCartUpdate as EventListener);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  const getToastStyles = (type: ToastType) => {
    switch (type) {
      case 'success':
      case 'wishlist-added':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
      case 'wishlist-removed':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'cart-added':
        return 'bg-purple-50 border-purple-200 text-purple-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getToastIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return <Check className="h-4 w-4 text-green-600" />;
      case 'wishlist-added':
        return <Heart className="h-4 w-4 text-red-600 fill-current" />;
      case 'wishlist-removed':
        return <Heart className="h-4 w-4 text-red-600" />;
      case 'cart-added':
        return <ShoppingCart className="h-4 w-4 text-purple-600" />;
      case 'error':
        return <X className="h-4 w-4 text-red-600" />;
      case 'warning':
        return <span className="text-yellow-600">⚠️</span>;
      case 'info':
      default:
        return <Check className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-sm">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            flex items-center gap-3 p-4 rounded-lg shadow-lg border backdrop-blur-sm
            transform transition-all duration-300 ease-in-out
            animate-[slideInRight_0.3s_ease-out]
            ${getToastStyles(toast.type)}
          `}
        >
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center
            ${toast.type === 'wishlist-added' || toast.type === 'success' ? 'bg-green-100' : ''}
            ${toast.type === 'wishlist-removed' || toast.type === 'error' ? 'bg-red-100' : ''}
            ${toast.type === 'cart-added' ? 'bg-purple-100' : ''}
            ${toast.type === 'info' ? 'bg-blue-100' : ''}
            ${toast.type === 'warning' ? 'bg-yellow-100' : ''}
          `}>
            {getToastIcon(toast.type)}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">{toast.title}</p>
            {toast.message && (
              <p className="text-xs opacity-80 truncate mt-1">{toast.message}</p>
            )}
          </div>
          
          <button
            onClick={() => onRemove(toast.id)}
            className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors touch-button"
            aria-label="Dismiss notification"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      ))}
    </div>
  );
}