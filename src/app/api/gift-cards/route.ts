// src/app/api/gift-cards/route.ts
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, designId, senderName, recipientName, recipientEmail, message } = body;

    // Generate unique gift card code
    const code = nanoid(12).toUpperCase();

    // Calculate expiry date (1 year from purchase)
    const purchaseDate = new Date();
    const expiryDate = new Date(purchaseDate);
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    // Create gift card object
    const giftCard = {
      id: nanoid(),
      code,
      amount,
      designId,
      senderName,
      recipientName,
      recipientEmail,
      message,
      purchaseDate,
      expiryDate,
      status: 'active',
      paymentStatus: 'pending'
    };

    // In a real application, save this to a database
    // For now, we'll just return the created gift card
    return NextResponse.json(giftCard);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create gift card' },
      { status: 500 }
    );
  }
}
