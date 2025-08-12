// src/components/ui/Loading.tsx

import { Palette, Sparkles, Brush, Heart } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  variant?: 'default' | 'artistic' | 'minimal';
  progress?: number; // Progress percentage (0-100)
  showProgress?: boolean; // Whether to show progress bar
}

export default function Loading({ 
  size = 'md', 
  text, 
  variant = 'artistic', 
  progress = 0, 
  showProgress = false 
}: LoadingProps) {
  const sizeClasses = {
    sm: 'h-16 w-16',
    md: 'h-24 w-24', 
    lg: 'h-32 w-32'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  if (variant === 'minimal') {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
        {text && <p className="text-gray-600 text-sm mt-2">{text}</p>}
        {showProgress && (
          <div className="w-48 h-1 bg-gray-200 rounded-full mt-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
              style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
            />
          </div>
        )}
      </div>
    );
  }

  if (variant === 'artistic') {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        {/* Main artistic loading animation */}
        <div className="relative mb-8">
          {/* Outer rotating ring with gradient */}
          <div className={`${sizeClasses[size]} relative`}>
            {/* Background circle with artistic gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-amber-100 animate-pulse"></div>
            
            {/* Rotating outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 animate-spin-slow bg-clip-border">
              <div className="absolute inset-1 rounded-full bg-white"></div>
            </div>
            
            {/* Inner rotating elements */}
            <div className="absolute inset-4 flex items-center justify-center">
              <div className="relative">
                {/* Central palette icon with floating animation */}
                <div className="relative z-10 animate-float">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                
                {/* Floating sparkles around the palette */}
                <div className="absolute -top-2 -right-2 animate-ping">
                  <Sparkles className="h-3 w-3 text-pink-500" />
                </div>
                <div className="absolute -bottom-1 -left-2 animate-ping" style={{ animationDelay: '0.5s' }}>
                  <Sparkles className="h-2 w-2 text-amber-500" />
                </div>
                <div className="absolute top-0 left-0 animate-ping" style={{ animationDelay: '1s' }}>
                  <Sparkles className="h-2 w-2 text-purple-400" />
                </div>
              </div>
            </div>
            
            {/* Orbiting brush icons */}
            <div className="absolute inset-0 animate-spin-reverse">
              <Brush className="absolute -top-1 left-1/2 transform -translate-x-1/2 h-4 w-4 text-purple-500" />
              <Heart className="absolute top-1/2 -right-1 transform -translate-y-1/2 h-3 w-3 text-pink-500" />
              <Brush className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-3 w-3 text-amber-500 rotate-180" />
            </div>
          </div>
          
          {/* Floating color dots around the main loader */}
          <div className="absolute -inset-8">
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-0 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: '0.9s' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="w-64 h-2 bg-white/20 rounded-full mb-4 overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 transition-all duration-500 ease-out relative"
              style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
            >
              {/* Shimmer effect on progress bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
        )}

        {/* Progress Percentage */}
        {showProgress && (
          <div className="text-center mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              {Math.round(progress)}%
            </span>
          </div>
        )}

        {/* Animated text with artistic styling */}
        {text && (
          <div className="text-center max-w-sm">
            <p className={`font-serif font-medium bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent ${textSizeClasses[size]} mb-2`}>
              {text}
            </p>
            
            {/* Animated dots */}
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-8 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
    );
  }

  // Default variant (fallback)
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
      {text && <p className="text-gray-600 text-sm">{text}</p>}
      {showProgress && (
        <div className="w-48 h-1 bg-gray-200 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
            style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
          />
        </div>
      )}
    </div>
  );
}