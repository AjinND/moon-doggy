// src/components/home/Hero.tsx

'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { sampleArtist, sampleArtworks } from '@/lib/data';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const featuredArtworks = sampleArtworks.filter(artwork => artwork.featured).slice(0, 3);

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % featuredArtworks.length);
  }, [featuredArtworks.length]);

  const prevSlide = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + featuredArtworks.length) % featuredArtworks.length);
  }, [featuredArtworks.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-amber-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 sm:mb-6 text-balance">
            Where Art Meets
            <span className="block artistic-text-gradient bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 bg-clip-text text-transparent">
              Emotion
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Discover the contemporary artworks of {sampleArtist.name}, 
            where vibrant colors and organic forms tell stories of human connection with nature.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/gallery">
                Explore Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="artistic" size="lg" asChild className="w-full sm:w-auto">
              <Link href="/shop">
                Shop Artworks
              </Link>
            </Button>
          </div>

          {/* Featured Artwork Info */}
          <div className="glass-effect rounded-xl p-4 sm:p-6 max-w-md mx-auto">
            <p className="text-sm text-gray-600 mb-2">Currently Featuring</p>
            <h3 className="text-base sm:text-lg font-serif font-semibold text-gray-900 mb-1">
              {featuredArtworks[currentImageIndex]?.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-700">
              {featuredArtworks[currentImageIndex]?.year} • {featuredArtworks[currentImageIndex]?.medium}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-200 pointer-events-auto"
          aria-label="Previous artwork"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-200 pointer-events-auto"
          aria-label="Next artwork"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* Play/Pause Control */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-200"
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4 ml-0.5" />
          )}
        </button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {featuredArtworks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`View artwork ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs text-center sm:hidden">
        Swipe to explore artworks
      </div>
    </section>
  );
}