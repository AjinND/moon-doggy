// src/app/shipping/page.tsx
'use client';

import { Truck, Clock, Globe, Gift, Shield, Package, ShieldCheck, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import LoadingLink from '@/components/ui/LoadingLink';
import { shippingOptions, packagingFeatures } from '@/lib/data';

// Icon mapping for shipping options
const getShippingIcon = (iconName: string) => {
  const iconMap = {
    truck: Truck,
    zap: Clock,
    globe: Globe,
    gift: Gift
  };
  return iconMap[iconName as keyof typeof iconMap] || Truck;
};

// Icon mapping for packaging features
const getPackagingIcon = (iconName: string) => {
  const iconMap = {
    shield: Shield,
    package: Package,
    'shield-check': ShieldCheck,
    'map-pin': MapPin
  };
  return iconMap[iconName as keyof typeof iconMap] || Shield;
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <Truck className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Shipping & Delivery
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We take great care in packaging and shipping your artwork to ensure it arrives safely. 
            All pieces are professionally packaged with premium materials and full insurance coverage.
          </p>
        </div>

        {/* Shipping Options */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Shipping Options & Rates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingOptions.map((option, index) => {
              const Icon = getShippingIcon(option.icon);
              return (
                <Card key={index} hover className="h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {option.type}
                    </h3>
                    <div className="flex-1 space-y-2 mb-4">
                      <p className="text-2xl font-bold text-purple-600">
                        {option.cost}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        {option.time}
                      </p>
                      <p className="text-sm text-gray-500">
                        {option.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Packaging & Protection */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Professional Packaging & Protection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {packagingFeatures.map((feature, index) => {
              const Icon = getPackagingIcon(feature.icon);
              return (
                <Card key={index} hover>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <Card artistic>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                    Artwork Packaging Process
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-purple-600">1</span>
                      </div>
                      <p className="text-gray-600">
                        Artwork is carefully wrapped in acid-free tissue paper to protect the surface
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-purple-600">2</span>
                      </div>
                      <p className="text-gray-600">
                        Multiple layers of bubble wrap provide cushioning against impacts
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-purple-600">3</span>
                      </div>
                      <p className="text-gray-600">
                        Placed in a custom-sized rigid cardboard box with corner protection
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-purple-600">4</span>
                      </div>
                      <p className="text-gray-600">
                        Sealed and labeled with fragile handling instructions for carriers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                      Certificate of Authenticity
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                      Care instructions
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                      Artist's statement
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                      Full insurance coverage
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                      Tracking information
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* International Shipping */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  International Shipping
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Worldwide Delivery</h4>
                  <p className="text-gray-600 mb-4">
                    We ship to most countries worldwide. Delivery times vary by destination, 
                    typically 10-21 business days depending on customs processing.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• All shipments include full insurance</li>
                    <li>• Customs forms handled professionally</li>
                    <li>• Tracking provided for all destinations</li>
                    <li>• Secure packaging for long-distance travel</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Important Notes</h4>
                  <p className="text-gray-600 mb-4">
                    International buyers are responsible for any customs duties, taxes, 
                    or import fees imposed by their country.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-800">
                      <strong>Please note:</strong> Delivery times may be extended during 
                      peak seasons or due to customs processing delays.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Support */}
        <Card artistic>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Questions About Shipping?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Our team is here to help with any shipping questions or special delivery requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LoadingLink href="/contact">
                <div className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  Contact Support
                </div>
              </LoadingLink>
              <LoadingLink href="/faq">
                <div className="inline-flex items-center border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  View FAQ
                </div>
              </LoadingLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}