// src/components/layout/Footer.tsx

import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, Twitter, X } from "lucide-react";
import { sampleArtist } from "@/lib/data";
import ErrorBoundary from "../ui/ErrorBoundary";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <ErrorBoundary>
      <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Artist Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4 artistic-text-gradient">
                {sampleArtist.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Contemporary artist exploring the intersection of nature and
                human emotion through vibrant colors and organic forms.
              </p>
              <div className="flex space-x-4">
                <a
                  href={`https://instagram.com/${sampleArtist.contact.social.instagram?.replace(
                    "@",
                    ""
                  )}`}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={`https://x.com/${sampleArtist.contact.social.x?.replace(
                    "@",
                    ""
                  )}`}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${sampleArtist.contact.email}`}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Shop & Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Shop & Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/shop"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Shop Art
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gift-cards"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Returns Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/forum"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Forum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/members"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Members
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stories"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Artist Stories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/copyright"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Copyright
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact & Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/newsletter"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a
                    href={`mailto:${sampleArtist.contact.email}`}
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    {sampleArtist.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <a
                    href={`tel:${sampleArtist.contact.phone}`}
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    {sampleArtist.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300 text-sm">
                    {sampleArtist.contact.location}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  Terms
                </Link>
                <Link
                  href="/sitemap"
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  Sitemap
                </Link>
              </div>
            </div>
            <div className="mt-4 text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} {sampleArtist.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </ErrorBoundary>
  );
}
