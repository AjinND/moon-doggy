// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { blogPosts } from '@/lib/data';
import Hero from '@/components/home/Hero';
import FeaturedWorks from '@/components/home/FeaturedWorks';
import ArtistIntro from '@/components/home/ArtistIntro';
import BlogPreview from '@/components/home/BlogPreview';
import Testimonials from '@/components/home/Testimonials';
import Loading from '@/components/ui/Loading';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  // Simulate initial data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="flex items-center justify-center min-h-[80vh]">
          <Loading size="lg" text="Welcome to Moon Doggy Art..." />
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <Hero />
      <FeaturedWorks />
      <ArtistIntro />
      <Testimonials />
      <BlogPreview posts={blogPosts} />
    </div>
  );
}