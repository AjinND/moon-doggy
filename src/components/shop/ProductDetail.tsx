// src/components/shop/ProductDetail.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  Ruler,
  Palette,
  Calendar,
  Eye,
  Star,
  MessageCircle,
} from "lucide-react";
import { Artwork } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { useCart } from "@/hooks/useCart";
import AddToCart from "./AddToCart";
import { sampleArtworks } from "@/lib/data";

interface ProductDetailProps {
  artwork: Artwork;
}

export default function ProductDetail({ artwork }: ProductDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "details" | "shipping" | "reviews"
  >("details");
  const { addToCart } = useCart();

  const images = artwork.images || [artwork.imageUrl];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: artwork.title,
          text: artwork.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share failed:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const tabs = [
    { id: "details", label: "Details", icon: Eye },
    { id: "shipping", label: "Shipping", icon: Truck },
    { id: "reviews", label: "Reviews", icon: MessageCircle },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link
            href="/shop"
            className="hover:text-purple-600 transition-colors"
          >
            Shop
          </Link>
          <span>/</span>
          <span className="text-gray-900">{artwork.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src={images[selectedImageIndex]}
                alt={artwork.title}
                fill
                className="object-cover"
                priority
              />

              {/* Navigation buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setSelectedImageIndex(Math.max(0, selectedImageIndex - 1))
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    disabled={selectedImageIndex === 0}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedImageIndex(
                        Math.min(images.length - 1, selectedImageIndex + 1)
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    disabled={selectedImageIndex === images.length - 1}
                  >
                    <ArrowLeft className="h-5 w-5 rotate-180" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                    {artwork.title}
                  </h1>
                  <p className="text-lg text-gray-600">{artwork.year}</p>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-full transition-colors ${
                      isLiked
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`}
                    />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Price and Availability */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-purple-600">
                  {formatPrice(artwork.price)}
                </div>
                <div className="flex items-center gap-2">
                  {artwork.available ? (
                    <span className="flex items-center text-green-600 text-sm font-medium">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Available
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600 text-sm font-medium">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Sold Out
                    </span>
                  )}
                </div>
              </div>

              {/* Quick Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                  <Ruler className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-xs text-gray-500">Dimensions</p>
                    <p className="font-medium text-gray-900">
                      {artwork.dimensions}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                  <Palette className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-xs text-gray-500">Medium</p>
                    <p className="font-medium text-gray-900">
                      {artwork.medium}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                About This Artwork
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {artwork.description}
              </p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {artwork.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <AddToCart artwork={artwork} size="lg" />

              {artwork.available && (
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="flex flex-col items-center p-3 bg-white rounded-lg border">
                    <Truck className="h-5 w-5 text-green-600 mb-1" />
                    <span className="text-gray-600">Free Shipping</span>
                    <span className="text-xs text-gray-500">Over $500</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white rounded-lg border">
                    <Shield className="h-5 w-5 text-blue-600 mb-1" />
                    <span className="text-gray-600">Secure</span>
                    <span className="text-xs text-gray-500">Payment</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white rounded-lg border">
                    <RotateCcw className="h-5 w-5 text-purple-600 mb-1" />
                    <span className="text-gray-600">30-Day</span>
                    <span className="text-xs text-gray-500">Returns</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? "border-purple-500 text-purple-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "details" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Artwork Details
                    </h3>
                    <dl className="space-y-3">
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Title:</dt>
                        <dd className="font-medium">{artwork.title}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Year:</dt>
                        <dd className="font-medium">{artwork.year}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Medium:</dt>
                        <dd className="font-medium">{artwork.medium}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Dimensions:</dt>
                        <dd className="font-medium">{artwork.dimensions}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Category:</dt>
                        <dd className="font-medium capitalize">
                          {artwork.category.replace("-", " ")}
                        </dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Artist Information
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        This piece is part of Elena Vasquez's contemporary
                        collection, showcasing her unique approach to{" "}
                        {artwork.category.replace("-", " ")}.
                      </p>
                      <Link
                        href="/about"
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Learn more about the artist
                        <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Shipping Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Truck className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Free Shipping
                          </h4>
                          <p className="text-sm text-gray-600">
                            On orders over $500
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Delivery Time
                          </h4>
                          <p className="text-sm text-gray-600">
                            5-7 business days
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-purple-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Secure Packaging
                          </h4>
                          <p className="text-sm text-gray-600">
                            Professional art packaging included
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Return Policy
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <RotateCcw className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            30-Day Returns
                          </h4>
                          <p className="text-sm text-gray-600">
                            Full refund if not satisfied
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        We want you to love your artwork. If you're not
                        completely satisfied, return it within 30 days for a
                        full refund.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No reviews yet
                  </h3>
                  <p className="text-gray-600">
                    Be the first to review this artwork!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Artworks */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sampleArtworks
              .filter(
                (art) =>
                  art.id !== artwork.id && art.category === artwork.category
              )
              .slice(0, 4)
              .map((relatedArtwork) => (
                <Link
                  key={relatedArtwork.id}
                  href={`/shop/${relatedArtwork.id}`}
                >
                  <Card hover className="group">
                    <div className="relative aspect-square overflow-hidden rounded-t-xl">
                      <Image
                        src={relatedArtwork.imageUrl}
                        alt={relatedArtwork.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">
                        {relatedArtwork.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {relatedArtwork.year}
                      </p>
                      <p className="font-semibold text-purple-600">
                        {formatPrice(relatedArtwork.price)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
