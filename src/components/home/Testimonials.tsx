// src/components/home/Testimonials.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Quote, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Modal from '@/components/ui/Modal';
import { testimonials } from '@/lib/data';
import { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  onReadMore: (testimonial: Testimonial) => void;
}

function TestimonialCard({ testimonial, onReadMore }: TestimonialCardProps) {
  return (
    <Card 
      hover 
      artistic 
      className="h-full cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={() => onReadMore(testimonial)}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
          <Quote className="w-8 h-8 text-purple-200 ml-auto flex-shrink-0" />
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-3">{testimonial.text}</p>
        
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-lg overflow-hidden">
            <Image
              src={testimonial.artwork.image}
              alt={testimonial.artwork.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-gray-900 font-medium">Collected Artwork</p>
            <p className="text-sm text-gray-500">{testimonial.artwork.title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
 
  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Collector Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from art enthusiasts who have added our pieces to their collections,
            sharing their experiences and stories.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* First Row */}
          <div className="flex animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[400px] flex-shrink-0 px-4"
              >
                <TestimonialCard 
                  testimonial={testimonial}
                  onReadMore={setSelectedTestimonial}
                />
              </div>
            ))}
          </div>

          {/* Second Row (Reverse Direction) */}
          <div className="flex animate-marquee-reverse mt-8">
            {[...testimonials.reverse(), ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-reverse-${index}`}
                className="w-[400px] flex-shrink-0 px-4"
              >
                <TestimonialCard 
                  testimonial={testimonial}
                  onReadMore={setSelectedTestimonial}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Detail Modal */}
      <Modal
        isOpen={!!selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
        size="lg"
      >
        {selectedTestimonial && (
          <div className="p-6">
            <div className="flex items-start gap-6 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-1">
                  {selectedTestimonial.name}
                </h3>
                <p className="text-gray-500">{selectedTestimonial.location}</p>
              </div>
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">{selectedTestimonial.text}</p>
            </div>

            <div className="flex items-center gap-6 bg-gray-50 p-4 rounded-xl">
              <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                <Image
                  src={selectedTestimonial.artwork.image}
                  alt={selectedTestimonial.artwork.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Collected Artwork</p>
                <h4 className="text-lg font-medium text-gray-900">
                  {selectedTestimonial.artwork.title}
                </h4>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
