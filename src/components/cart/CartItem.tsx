// src/components/cart/CartItem.tsx
'use client';

import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-4 p-4 border-b border-gray-200 last:border-b-0">
      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={item.artwork.imageUrl}
          alt={item.artwork.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 truncate">{item.artwork.title}</h3>
        <p className="text-sm text-gray-500">{item.artwork.medium}</p>
        <p className="text-sm text-gray-500">{item.artwork.dimensions}</p>
        
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center border border-gray-300 rounded">
            <Button
              onClick={() => onUpdateQuantity(item.artwork.id, item.quantity - 1)}
              className="p-1 hover:bg-gray-50"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-3 py-1 border-x border-gray-300 text-sm">
              {item.quantity}
            </span>
            <Button
              onClick={() => onUpdateQuantity(item.artwork.id, item.quantity + 1)}
              className="p-1 hover:bg-gray-50"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <Button
            onClick={() => onRemove(item.artwork.id)}
            className="text-red-600 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="text-right">
        <p className="font-medium text-gray-900">
          {formatPrice(item.artwork.price * item.quantity)}
        </p>
        <p className="text-sm text-gray-500">
          {formatPrice(item.artwork.price)} each
        </p>
      </div>
    </div>
  );
}