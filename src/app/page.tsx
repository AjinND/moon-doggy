// src/app/page.tsx

import { blogPosts } from '@/lib/data';
import Hero from '@/components/home/Hero';
import FeaturedWorks from '@/components/home/FeaturedWorks';
import ArtistIntro from '@/components/home/ArtistIntro';
import BlogPreview from '@/components/home/BlogPreview';
import Testimonials from '@/components/home/Testimonials';

export default function HomePage() {
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