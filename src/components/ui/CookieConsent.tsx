// src/components/ui/CookieConsent.tsx
'use client';

import { useState, useEffect } from 'react';
import { Cookie, Settings, X, Check } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import LoadingLink from '@/components/ui/LoadingLink';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  essential: true, // Always required
  analytics: false,
  functional: false,
  marketing: false,
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (error) {
        console.error('Error parsing saved cookie preferences:', error);
      }
    }
  }, []);

  const savePreferences = async (prefs: CookiePreferences) => {
    setIsLoading(true);
    
    // Simulate API call (in real app, this would save to backend)
    await new Promise(resolve => setTimeout(resolve, 300));
    
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    // Initialize analytics/tracking based on preferences
    if (prefs.analytics) {
      // Initialize Google Analytics, etc.
      console.log('Analytics cookies enabled');
    }
    
    if (prefs.marketing) {
      // Initialize marketing pixels, etc.
      console.log('Marketing cookies enabled');
    }
    
    setIsLoading(false);
    setIsVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const acceptEssentialOnly = () => {
    savePreferences(defaultPreferences);
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: key === 'essential' ? true : value // Essential cookies can't be disabled
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" />
      
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
        <Card className="max-w-4xl mx-auto shadow-2xl border-purple-200">
          <div className="p-6 sm:p-8">
            {!showSettings ? (
              // Main consent banner
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cookie className="h-6 w-6 text-purple-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2">
                      We use cookies to enhance your experience
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We use cookies to personalize content, provide social media features, and analyze our traffic. 
                      You can choose which cookies to accept below, or accept all for the best experience.
                    </p>
                    <div className="mt-3">
                      <LoadingLink 
                        href="/cookies" 
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Learn more about our cookie policy →
                      </LoadingLink>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowSettings(true)}
                    className="flex items-center justify-center"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Customize
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={acceptEssentialOnly}
                    loading={isLoading}
                    className="flex items-center justify-center"
                  >
                    Essential Only
                  </Button>
                  
                  <Button
                    size="sm"
                    onClick={acceptAll}
                    loading={isLoading}
                    className="flex items-center justify-center"
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Accept All
                  </Button>
                </div>
              </div>
            ) : (
              // Cookie settings panel
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif font-semibold text-gray-900">
                    Cookie Preferences
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {/* Essential Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1 mr-4">
                      <h4 className="font-medium text-gray-900 mb-1">Essential Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Required for the website to function properly. These cannot be disabled.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-6 bg-green-500 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1 mr-4">
                      <h4 className="font-medium text-gray-900 mb-1">Analytics Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Help us understand how visitors use our website to improve performance.
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => updatePreference('analytics', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-10 h-6 rounded-full relative transition-colors duration-200 ${
                        preferences.analytics ? 'bg-purple-500' : 'bg-gray-300'
                      }`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform duration-200 ${
                          preferences.analytics ? 'right-1' : 'left-1'
                        }`}></div>
                      </div>
                    </label>
                  </div>
                  
                  {/* Functional Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1 mr-4">
                      <h4 className="font-medium text-gray-900 mb-1">Functional Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Remember your preferences and settings for a personalized experience.
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) => updatePreference('functional', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-10 h-6 rounded-full relative transition-colors duration-200 ${
                        preferences.functional ? 'bg-purple-500' : 'bg-gray-300'
                      }`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform duration-200 ${
                          preferences.functional ? 'right-1' : 'left-1'
                        }`}></div>
                      </div>
                    </label>
                  </div>
                  
                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1 mr-4">
                      <h4 className="font-medium text-gray-900 mb-1">Marketing Cookies</h4>
                      <p className="text-sm text-gray-600">
                        Used to deliver personalized advertisements and measure campaign effectiveness.
                      </p>
                    </div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => updatePreference('marketing', e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-10 h-6 rounded-full relative transition-colors duration-200 ${
                        preferences.marketing ? 'bg-purple-500' : 'bg-gray-300'
                      }`}>
                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform duration-200 ${
                          preferences.marketing ? 'right-1' : 'left-1'
                        }`}></div>
                      </div>
                    </label>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <Button
                    variant="outline"
                    onClick={() => setShowSettings(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => savePreferences(preferences)}
                    loading={isLoading}
                    className="flex-1"
                  >
                    Save Preferences
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
}