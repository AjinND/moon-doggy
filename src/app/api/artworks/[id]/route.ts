// src/app/api/artworks/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { sampleArtworks } from '@/lib/data';

export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const id = pathname.split('/').pop(); // gets the 'id' from the URL

  const artwork = sampleArtworks.find(art => art.id === id);
  
  if (!artwork) {
    return NextResponse.json({ error: 'Artwork not found' }, { status: 404 });
  }

  return NextResponse.json(artwork);
}

