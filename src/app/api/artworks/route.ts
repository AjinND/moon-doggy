// src/app/api/artworks/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { sampleArtworks } from '@/lib/data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const available = searchParams.get('available');
  const featured = searchParams.get('featured');

  let filteredArtworks = [...sampleArtworks];

  if (category && category !== 'all') {
    filteredArtworks = filteredArtworks.filter(artwork => artwork.category === category);
  }

  if (available === 'true') {
    filteredArtworks = filteredArtworks.filter(artwork => artwork.available);
  }

  if (featured === 'true') {
    filteredArtworks = filteredArtworks.filter(artwork => artwork.featured);
  }

  return NextResponse.json(filteredArtworks);
}
