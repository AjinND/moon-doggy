// src/app/api/artworks/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { sampleArtworks } from '@/lib/data';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const artwork = sampleArtworks.find(art => art.id === params.id);
  
  if (!artwork) {
    return NextResponse.json({ error: 'Artwork not found' }, { status: 404 });
  }

  return NextResponse.json(artwork);
}

