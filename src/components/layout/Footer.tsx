// src/components/layout/Footer.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, Twitter, ChevronUp, ChevronDown } from "lucide-react";
import { sampleArtist } from "@/lib/data";
import ErrorBoundary from "../ui/ErrorBoundary";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    links: false,
    shop: false,
    support: false
  });

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <ErrorBoundary>
      <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Mobile: Compact Design */}
          <div className="block lg:hidden">
            {/* Artist Info - Always Visible */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-bold mb-3 artistic-text-gradient">
                {sampleArtist.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-xs mx-auto">
                Contemporary artist exploring nature and emotion through vibrant art.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4 mb-6">
                <a
                  href={`https://instagram.com/${sampleArtist.contact.social.instagram?.replace("@", "")}`}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 transform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={`https://x.com/${sampleArtist.contact.social.x?.replace("@", "")}`}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 transform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${sampleArtist.contact.email}`}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 transform"
                  aria-label="Send email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-4 mb-8">
              {/* Quick Links */}
              <div className="border-b border-white/10 pb-4">
                <button
                  onClick={() => toggleSection('links')}
                  className="flex items-center justify-between w-full text-left py-2"
                >
                  <span className="font-semibold">Quick Links</span>
                  {expandedSections.links ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {expandedSections.links && (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3">
                    {[
                      { name: 'Home', href: '/' },
                      { name: 'Gallery', href: '/gallery' },
                      { name: 'Shop', href: '/shop' },
                      { name: 'About', href: '/about' },
                      { name: 'Blog', href: '/blog' },
                      { name: 'Contact', href: '/contact' }
                    ].map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 py-1 transform"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Shop Links */}
              <div className="border-b border-white/10 pb-4">
                <button
                  onClick={() => toggleSection('shop')}
                  className="flex items-center justify-between w-full text-left py-2"
                >
                  <span className="font-semibold">Shop</span>
                  {expandedSections.shop ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {expandedSections.shop && (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3">
                    {[
                      { name: 'Shop Art', href: '/shop' },
                      { name: 'Gift Cards', href: '/gift-cards' },
                      { name: 'Wishlist', href: '/wishlist' },
                      { name: 'Cart', href: '/cart' }
                    ].map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 py-1 transform"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Support */}
              <div className="pb-4">
                <button
                  onClick={() => toggleSection('support')}
                  className="flex items-center justify-between w-full text-left py-2"
                >
                  <span className="font-semibold">Support</span>
                  {expandedSections.support ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {expandedSections.support && (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3">
                    {[
                      { name: 'FAQ', href: '/faq' },
                      { name: 'Support', href: '/support' },
                      { name: 'Privacy', href: '/privacy' },
                      { name: 'Terms', href: '/terms' }
                    ].map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 py-1 transform"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Newsletter Subscription - Mobile */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-serif font-semibold text-center mb-3">Stay Inspired</h4>
                <p className="text-sm text-gray-300 text-center mb-4">
                  Get notified about new artworks and exhibitions
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 text-sm"
                  />
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] transform hover:shadow-lg text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Contact Info - Compact */}
            <div className="text-center mb-6">
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center justify-center">
                  <MapPin className="h-3 w-3 mr-2" />
                  {sampleArtist.contact.location}
                </p>
                <a
                  href={`mailto:${sampleArtist.contact.email}`}
                  className="flex items-center justify-center hover:text-white transition-colors duration-300"
                >
                  <Mail className="h-3 w-3 mr-2" />
                  hello@moondog.art
                </a>
              </div>
            </div>
          </div>

          {/* Desktop: Full Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {/* Artist Info */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 artistic-text-gradient">
                {sampleArtist.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
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
                  aria-label="Follow on X"
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
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
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
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop & Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Shop & Services</h4>
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
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support & Legal</h4>
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
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop Contact Information & Newsletter */}
          <div className="hidden lg:block mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <a
                    href={`mailto:${sampleArtist.contact.email}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-300 truncate"
                  >
                    {sampleArtist.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <a
                    href={`tel:${sampleArtist.contact.phone}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
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
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {sampleArtist.contact.social.instagram}
                  </a>
                </div>
              </div>

              {/* Newsletter Subscription - Desktop */}
              <div>
                <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
                <p className="text-sm text-gray-300 mb-4 max-w-md">
                  Get notified about new artworks, exhibitions, and exclusive offers.
                </p>
                <div className="flex max-w-md gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div>
                <p className="text-sm text-gray-400">
                  © {currentYear} {sampleArtist.name}. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Handcrafted with ❤️ in {sampleArtist.contact.location}
                </p>
              </div>
              
              {/* Legal links */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                <Link
                  href="/privacy"
                  className="text-xs text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 transform"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-xs text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 transform"
                >
                  Terms
                </Link>
                <Link
                  href="/cookies"
                  className="text-xs text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 transform"
                >
                  Cookies
                </Link>
                <Link
                  href="/accessibility"
                  className="text-xs text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 transform"
                >
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      )}
    </ErrorBoundary>
  );
}