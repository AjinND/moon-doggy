// src/components/layout/Header.tsx

'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { X, ShoppingBag, Palette, Search, Heart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { cn } from '@/lib/utils';
import GlobalSearch from '@/components/search/GlobalSearch';
import LoadingLink from '../ui/LoadingLink';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handle keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowSearch(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header 
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled 
            ? 'glass-effect shadow-lg border-b border-white/20' 
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <LoadingLink  
              href="/" 
              className="flex items-center space-x-2 group z-10"
            >
              <div className="relative">
                <Palette className="h-8 w-8 text-purple-600 group-hover:text-pink-600 transition-colors duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur"></div>
              </div>
              <span className="text-xl font-serif font-bold artistic-text-gradient">
                Moon Doggy
              </span>
            </LoadingLink >

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <LoadingLink 
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative text-sm font-medium transition-colors duration-200 hover:text-purple-600',
                    pathname === item.href
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
                  )}
                </LoadingLink >
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Enhanced Search Button */}
              <button
                onClick={() => setShowSearch(true)}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-2 text-sm text-gray-600 shadow-sm transition-all duration-200 hover:border-purple-300 hover:bg-white hover:text-purple-600 hover:shadow-md focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hidden sm:flex items-center gap-2"
                aria-label="Search artworks"
              >
                <Search className="h-4 w-4 transition-colors duration-200" />
                <span className="hidden md:inline font-medium">Search</span>
                <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-xs font-mono bg-gray-100 border border-gray-200 rounded group-hover:bg-purple-50 group-hover:border-purple-200 transition-colors duration-200">
                  ⌘K
                </kbd>
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </button>

              {/* Mobile Search Button */}
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 sm:hidden"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Wishlist Icon */}
              <LoadingLink 
                href="/wishlist"
                className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 hidden sm:block"
                aria-label={`Wishlist (${wishlist.length} items)`}
              >
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {wishlist.length}
                  </span>
                )}
              </LoadingLink >

              {/* Cart Icon */}
              <LoadingLink 
                href="/cart"
                className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
                aria-label={`Shopping cart (${itemCount} items)`}
              >
                <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </LoadingLink >

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 relative z-10"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <span className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition-all duration-300",
                    isMenuOpen ? "rotate-45 top-3" : "top-1"
                  )} />
                  <span className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3",
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  )} />
                  <span className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition-all duration-300",
                    isMenuOpen ? "-rotate-45 top-3" : "top-5"
                  )} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Overlay */}
          <div className={cn(
            "lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40",
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )} 
          onClick={() => setIsMenuOpen(false)}
          style={{ top: 0, left: 0, right: 0, bottom: 0, position: 'fixed' }}
          />

          {/* Mobile Navigation Menu */}
          <div className={cn(
            "lg:hidden fixed right-0 top-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl transform transition-transform duration-300 z-50 overflow-y-auto",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          style={{ position: 'fixed', top: 0, right: 0, height: '100vh', maxHeight: '100vh' }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <span className="text-lg font-serif font-bold text-gray-900">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 py-6">
                <div className="space-y-1 px-6">
                  {navigation.map((item) => (
                    <LoadingLink 
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200',
                        pathname === item.href
                          ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
                      )}
                    >
                      {item.name}
                    </LoadingLink >
                  ))}
                </div>

                {/* Mobile Actions */}
                <div className="mt-8 px-6">
                  <div className="space-y-4">
                    <button
                      onClick={() => {
                        setShowSearch(true);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600 rounded-lg transition-colors"
                    >
                      <Search className="h-5 w-5 mr-3" />
                      Search Artworks
                    </button>
                    
                    <LoadingLink 
                      href="/wishlist"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600 rounded-lg transition-colors"
                    >
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 mr-3" />
                        Wishlist
                      </div>
                      {wishlist.length > 0 && (
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                          {wishlist.length}
                        </span>
                      )}
                    </LoadingLink >
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <p className="text-sm text-gray-600 text-center">
                  © 2024 Moon Doggy Art
                </p>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Global Search Modal */}
      {showSearch && (
        <GlobalSearch onClose={() => setShowSearch(false)} />
      )}
    </>
  );
}