// src/components/home/ArtistIntro.tsx

import Image from 'next/image';
import LoadingLink from '@/components/ui/LoadingLink';
import { Award, MapPin, Palette } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { sampleArtist } from '@/lib/data';

export default function ArtistIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Artist Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={sampleArtist.profileImage}
                alt={sampleArtist.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-4">
              <Card artistic className="p-4 text-center bg-white/90 backdrop-blur-sm">
                <Award className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">{sampleArtist.awards.length}</p>
                <p className="text-xs text-gray-600">Awards</p>
              </Card>
              <Card artistic className="p-4 text-center bg-white/90 backdrop-blur-sm">
                <Palette className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">15+</p>
                <p className="text-xs text-gray-600">Years</p>
              </Card>
            </div>
          </div>

          {/* Artist Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Meet {sampleArtist.name}
              </h2>
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{sampleArtist.contact.location}</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              {sampleArtist.bio}
            </p>

            <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-700 bg-purple-50/50 p-4 rounded-r-lg">
              "{sampleArtist.statement}"
            </blockquote>

            {/* Recent Exhibition */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Latest Exhibition</h4>
              <p className="text-purple-700 font-medium">
                {sampleArtist.exhibitions[0].title}
              </p>
              <p className="text-gray-600 text-sm">
                {sampleArtist.exhibitions[0].location} • {sampleArtist.exhibitions[0].year}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <LoadingLink href="/about">
                  Learn More About Laura
                </LoadingLink>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <LoadingLink href="/contact">
                  Get in Touch
                </LoadingLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}