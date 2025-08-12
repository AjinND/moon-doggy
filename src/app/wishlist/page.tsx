// src/app/wishlist/page.tsx
"use client";

import { useState } from "react";
import { Heart, ShoppingCart, ArrowLeft, Grid, List } from "lucide-react";
import Button from "@/components/ui/Button";
import WishlistItem from "@/components/wishlist/WishlistItem";
import WishlistSummary from "@/components/wishlist/WishlistSummary";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import { Artwork } from "@/lib/types";
import LoadingLink from "@/components/ui/LoadingLink";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleAddToCart = (artwork: Artwork) => {
    addToCart(artwork);
  };

  const handleAddAllToCart = () => {
    wishlist.forEach((artwork) => {
      if (artwork.available) {
        addToCart(artwork);
      }
    });
  };

  const handleShare = async (artwork: Artwork) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: artwork.title,
          text: `Check out this amazing artwork: ${artwork.title}`,
          url: `${window.location.origin}/shop/${artwork.id}`,
        });
      } catch (error) {
        console.log("Share failed:", error);
      }
    } else {
      await navigator.clipboard.writeText(
        `${window.location.origin}/shop/${artwork.id}`
      );
    }
  };

  // Empty State
  if (wishlist.length === 0) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
            <Heart className="h-16 w-16 text-gray-400" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Your Wishlist is Empty
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Start building your collection by adding artworks you love to your
            wishlist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <LoadingLink href="/shop">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Shop Artworks
              </LoadingLink>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <LoadingLink href="/gallery">Explore Gallery</LoadingLink>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <LoadingLink
              href="/shop"
              className="text-purple-600 hover:text-purple-700 mr-4 p-2 -ml-2 rounded-lg hover:bg-purple-50 transition-colors touch-button"
              aria-label="Back to shop"
            >
              <ArrowLeft className="h-6 w-6" />
            </LoadingLink>
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">
                My Wishlist
              </h1>
              <p className="text-gray-600 mt-1">
                {wishlist.length} artwork{wishlist.length !== 1 ? "s" : ""}{" "}
                saved
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 transition-colors touch-button ${
                  viewMode === "grid"
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                aria-label="Grid view"
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors touch-button ${
                  viewMode === "list"
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Wishlist Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-6"
          }
        >
          {wishlist.map((artwork, index) => (
            <WishlistItem
              key={artwork.id}
              artwork={artwork}
              viewMode={viewMode}
              onRemove={() => removeFromWishlist(artwork.id)}
              onAddToCart={() => handleAddToCart(artwork)}
              onShare={() => handleShare(artwork)}
              index={index}
            />
          ))}
        </div>

        {/* Summary Card */}
        <WishlistSummary
          wishlist={wishlist}
          onAddAllToCart={handleAddAllToCart}
        />
      </div>
    </div>
  );
}
