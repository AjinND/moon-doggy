// src/components/home/FeaturedWorks.tsx

import Image from 'next/image';
import LoadingLink from '@/components/ui/LoadingLink';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { sampleArtworks } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

export default function FeaturedWorks() {
  const featuredWorks = sampleArtworks.filter(artwork => artwork.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Featured Artworks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest creations that showcase the evolution of artistic expression 
            through color, form, and emotion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredWorks.map((artwork, index) => (
            <Card 
              key={artwork.id} 
              hover 
              artistic
              className={`group animate-fade-in opacity-0`}
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative aspect-square overflow-hidden rounded-t-xl">
                <Image
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-sm font-medium">{artwork.medium}</p>
                  <p className="text-xs text-gray-200">{artwork.dimensions}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  {artwork.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {artwork.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">
                    {formatPrice(artwork.price)}
                  </span>
                  <LoadingLink href={`/shop/${artwork.id}`}>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </LoadingLink>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <LoadingLink href="/gallery">
              View All Artworks
              <ArrowRight className="ml-2 h-5 w-5" />
            </LoadingLink>
          </Button>
        </div>
      </div>
    </section>
  );
}