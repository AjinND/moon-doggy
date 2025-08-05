// src/components/ui/ImageWithLoading.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ImageWithLoading({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes
}: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={cn(
        "bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center",
        fill ? "absolute inset-0" : "",
        className
      )}>
        <div className="text-center text-gray-400">
          <span className="text-2xl mb-2 block">🖼️</span>
          <p className="text-xs">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative", fill ? "" : "", className)}>
      {isLoading && (
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse",
          "flex items-center justify-center"
        )}>
          <div className="w-8 h-8 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        priority={priority}
        sizes={sizes}
      />
    </div>
  );
}