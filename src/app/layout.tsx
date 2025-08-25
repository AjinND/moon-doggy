// src/app/layout.tsx

import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/ui/CookieConsent';
import './globals.css';
import { ToastProvider } from "@/components/ui/Toast";
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { NavigationLoadingProvider } from '@/components/providers/NavigationLoadingProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Moon Doggy | Contemporary Artist Portfolio',
    template: '%s | Laura Jurkowski Art'
  },
  description: 'Discover contemporary artworks by Laura Jurkowski. Original paintings, sculptures, and digital art available for purchase. Based in Barcelona, Spain.',
  keywords: ['contemporary art', 'paintings', 'sculptures', 'digital art', 'Barcelona artist', 'Laura Jurkowski'],
  authors: [{ name: 'Laura Jurkowski' }],
  creator: 'Ajin',
  publisher: 'Laura Jurkowski Art',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Moon Doggy | Contemporary Artist Portfolio',
    description: 'Contemporary artist creating stunning paintings and sculptures',
    siteName: 'Moon Doggy Art',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elena Vasquez Contemporary Art',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laura Jurkowski',
    description: 'Contemporary artist creating stunning paintings and sculptures',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50 font-sans antialiased">
        <ErrorBoundary>
          <NavigationLoadingProvider>
            <ToastProvider>
              <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
              <CookieConsent />
            </ToastProvider>
          </NavigationLoadingProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}