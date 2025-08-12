// src/app/gift-cards/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import GiftCardBuilder from '@/components/gift-cards/GiftCardBuilder';
import { useGiftCard } from '@/hooks/useGiftCard';

export default function GiftCardsPage() {
  const router = useRouter();
  const { createGiftCard, loading, error } = useGiftCard();
  const [successMessage, setSuccessMessage] = useState('');

  const handleGiftCardCreation = async (formData: any) => {
    const giftCard = await createGiftCard(formData);
    if (giftCard) {
      setSuccessMessage('Gift card created successfully!');
      // In a real application, redirect to checkout/payment
      // router.push(`/checkout/gift-card/${giftCard.id}`);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Gift Cards
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Give the gift of art. Our gift cards are perfect for art lovers 
            and can be used to purchase any artwork from our gallery.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 text-green-600 rounded-lg">
            {successMessage}
          </div>
        )}

        <GiftCardBuilder onSubmit={handleGiftCardCreation} loading={loading} />
      </div>
    </div>
  );
}
