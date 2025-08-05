// src/app/shop/[id]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { sampleArtworks } from '@/lib/data';
import dynamic from 'next/dynamic';

const ProductDetail = dynamic(() => import('@/components/shop/ProductDetail'), {
  ssr: true,
});

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getArtwork(id: string) {
  // Simulate async data fetching
  return Promise.resolve(sampleArtworks.find(art => art.id === id));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artwork = await getArtwork(params.id);
    
    if (!artwork) {
      return {
        title: 'Artwork Not Found',
        description: 'The requested artwork could not be found.',
      };
    }

    return {
      title: `${artwork.title} | Elena Vasquez Art`,
      description: artwork.description,
      openGraph: {
        title: artwork.title,
        description: artwork.description,
        images: [artwork.imageUrl],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: artwork.title,
        description: artwork.description,
        images: [artwork.imageUrl],
      },
    };
}

export default async function ProductPage({ params }: Props) {
  const artwork = await getArtwork(params.id);

  if (!artwork) {
    notFound();
  }

  return <ProductDetail artwork={artwork} />;
}

export function generateStaticParams() {
  return sampleArtworks.map((artwork) => ({
    id: artwork.id,
  }));
}