// src/hooks/useGiftCard.ts
import { useState } from 'react';
import { GiftCard, GiftCardTemplate } from '@/lib/types';

interface GiftCardForm {
  amount: number;
  designId: string;
  senderName: string;
  recipientName: string;
  recipientEmail: string;
  message?: string;
}

export function useGiftCard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createGiftCard = async (formData: GiftCardForm): Promise<GiftCard | null> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/gift-cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create gift card');
      }

      const giftCard = await response.json();
      return giftCard;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createGiftCard,
  };
}
