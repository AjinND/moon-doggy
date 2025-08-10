// src/components/layout/Footer.tsx
'use client';

import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, Twitter, ChevronUp } from "lucide-react";
import { sampleArtist } from "@/lib/data";
import ErrorBoundary from "../ui/ErrorBoundary";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Back to Top Button */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-full sm:w-auto mx-auto py-3 px-6 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 group"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-5 w-5 mr-2 group-hover:-translate-y-1 transition-transform duration-200" />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Artist Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 artistic-text-gradient">
                {sampleArtist.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                Contemporary artist exploring the intersection of nature and
                human emotion through vibrant colors and organic forms.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href={`https://instagram.com/${sampleArtist.contact.social.instagram?.replace("@", "")}`}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href={`https://x.com/${sampleArtist.contact.social.x?.replace("@", "")}`}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X (Twitter)"
                >
                  <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href={`mailto:${sampleArtist.contact.email}`}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 group"
                  aria-label="Send email"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Gallery', href: '/gallery' },
                  { name: 'Shop', href: '/shop' },
                  { name: 'About', href: '/about' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Contact', href: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop & Services */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Shop & Services</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Shop Art', href: '/shop' },
                  { name: 'Gift Cards', href: '/gift-cards' },
                  { name: 'Wishlist', href: '/wishlist' },
                  { name: 'Cart', href: '/cart' },
                  { name: 'Shipping Info', href: '/shipping' },
                  { name: 'Returns', href: '/returns' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Support & Legal</h4>
              <ul className="space-y-3">
                {[
                  { name: 'FAQ', href: '/faq' },
                  { name: 'Support', href: '/support' },
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Copyright', href: '/copyright' },
                  { name: 'Sitemap', href: '/sitemap' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 sm:mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <a
                  href={`mailto:${sampleArtist.contact.email}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200 truncate"
                >
                  {sampleArtist.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <a
                  href={`tel:${sampleArtist.contact.phone}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {sampleArtist.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  {sampleArtist.contact.location}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <a
                  href={`https://instagram.com/${sampleArtist.contact.social.instagram?.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {sampleArtist.contact.social.instagram}
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm text-gray-300 mb-4 max-w-md">
                Get notified about new artworks, exhibitions, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors duration-200"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all duration-200 hover:scale-105 transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-400">
                  © {currentYear} {sampleArtist.name}. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Handcrafted with ❤️ in {sampleArtist.contact.location}
                </p>
              </div>
              
              {/* Mobile-friendly legal links */}
              <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6">
                <Link
                  href="/privacy"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Terms
                </Link>
                <Link
                  href="/cookies"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Cookies
                </Link>
                <Link
                  href="/accessibility"
                  className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ErrorBoundary>
  );
}