// src/components/providers/NavigationLoadingProvider.tsx
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Loading from '@/components/ui/Loading';

interface NavigationLoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const NavigationLoadingContext = createContext<NavigationLoadingContextType | undefined>(undefined);

export function useNavigationLoading() {
  const context = useContext(NavigationLoadingContext);
  if (!context) {
    throw new Error('useNavigationLoading must be used within NavigationLoadingProvider');
  }
  return context;
}

interface NavigationLoadingProviderProps {
  children: ReactNode;
}

export function NavigationLoadingProvider({ children }: NavigationLoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();

  // Prevent body scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('loading-active');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('loading-active');
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.classList.remove('loading-active');
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  // Track route changes
  useEffect(() => {
    // Skip loading on initial page load
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    // Start loading when route changes
    setIsLoading(true);

    // Set a minimum loading time to prevent flashing
    const minLoadingTime = 300;
    const startTime = Date.now();

    // Wait for the page to be ready
    const checkPageReady = () => {
      // Use a combination of document ready state and a small delay
      if (document.readyState === 'complete') {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
        
        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      } else {
        // If document isn't ready, check again
        setTimeout(checkPageReady, 50);
      }
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(checkPageReady, { timeout: 1000 });
      } else {
        setTimeout(checkPageReady, 100);
      }
    }
  }, [pathname, isInitialLoad]);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <NavigationLoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
      
      {/* Global Loading Overlay */}
      {isLoading && (
        <div 
          className="fixed inset-0 bg-white/80 backdrop-blur-md flex items-center justify-center"
          style={{ zIndex: 99999 }}
        >
          <Loading 
            size="lg" 
            text="Loading page..." 
            variant="artistic" 
          />
        </div>
      )}
    </NavigationLoadingContext.Provider>
  );
}