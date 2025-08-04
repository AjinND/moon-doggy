// src/components/home/Hero.tsx

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import Button from '@/components/ui/Button';
import { sampleArtist, sampleArtworks } from '@/lib/data';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const featuredArtworks = sampleArtworks.filter(artwork => artwork.featured).slice(0, 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % featuredArtworks.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredArtworks.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {featuredArtworks.map((artwork, index) => (
          <div
            key={artwork.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-20' : 'opacity-0'
            }`}
          >
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-amber-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 text-balance">
            Where Art Meets
            <span className="block artistic-text-gradient bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 bg-clip-text text-transparent">
              Emotion
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the contemporary artworks of {sampleArtist.name}, 
            where vibrant colors and organic forms tell stories of human connection with nature.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild>
              <Link href="/gallery">
                Explore Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="artistic" size="lg" asChild>
              <Link href="/shop">
                Shop Artworks
              </Link>
            </Button>
          </div>

          {/* Featured Artwork Info */}
          <div className="glass-effect rounded-xl p-6 max-w-md mx-auto">
            <p className="text-sm text-gray-600 mb-2">Currently Featuring</p>
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-1">
              {featuredArtworks[currentImageIndex]?.title}
            </h3>
            <p className="text-sm text-gray-700">
              {featuredArtworks[currentImageIndex]?.year} • {featuredArtworks[currentImageIndex]?.medium}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredArtworks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

