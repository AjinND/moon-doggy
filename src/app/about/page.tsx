// src/app/about/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Award, GraduationCap, Calendar, Mail, Instagram } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { sampleArtist } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={sampleArtist.profileImage}
                  alt={sampleArtist.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Info Cards */}
              <div className="absolute -bottom-6 -right-6 space-y-4">
                <Card artistic className="p-4 bg-white/90 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium">{sampleArtist.contact.location}</span>
                  </div>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                  {sampleArtist.name}
                </h1>
                <p className="text-xl text-gray-600">Contemporary Artist & Visual Storyteller</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {sampleArtist.bio}
              </p>

              <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-700 bg-purple-50/50 p-4 rounded-r-lg">
                "{sampleArtist.statement}"
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/gallery">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <Card artistic>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-serif font-bold text-gray-900">Education</h2>
                </div>
                <div className="space-y-4">
                  {sampleArtist.education.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{edu}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Awards */}
            <Card artistic>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-serif font-bold text-gray-900">Awards & Recognition</h2>
                </div>
                <div className="space-y-4">
                  {sampleArtist.awards.map((award, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{award}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Exhibitions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A journey through various galleries and museums showcasing artistic evolution and growth.
            </p>
          </div>

          <div className="space-y-6">
            {sampleArtist.exhibitions.map((exhibition, index) => (
              <Card 
                key={index} 
                artistic
                className={`animate-fade-in opacity-0`}
                style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="text-purple-600 font-semibold">{exhibition.year}</span>
                        <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                          exhibition.type === 'solo' 
                            ? 'bg-purple-100 text-purple-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {exhibition.type.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-1">
                        {exhibition.title}
                      </h3>
                      <p className="text-gray-600">{exhibition.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Experience Art That Speaks to the Soul
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover the stories behind each piece and find the perfect artwork for your collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-50">
              <Link href="/gallery">Explore Gallery</Link>
            </Button>
            <Button size="lg" className="bg-white/20 text-white border-white hover:bg-white/30">
              <Link href="/shop">Shop Artworks</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

