// src/app/shipping/page.tsx
import { 
  Truck, 
  Package, 
  Globe, 
  Clock, 
  Shield, 
  MapPin, 
  Calculator,
  CheckCircle,
  AlertCircle,
  Plane
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import LoadingLink from '@/components/ui/LoadingLink';

export const metadata = {
  title: 'Shipping Information | Moon Doggy Art',
  description: 'Learn about our shipping policies, delivery times, and international shipping options.',
};

const shippingZones = [
  {
    region: 'Spain',
    domestic: true,
    deliveryTime: '2-3 business days',
    cost: 'Free over €450',
    standardCost: '€25',
    trackingIncluded: true
  },
  {
    region: 'European Union',
    domestic: false,
    deliveryTime: '5-7 business days',
    cost: 'Free over €450',
    standardCost: '€45',
    trackingIncluded: true
  },
  {
    region: 'United Kingdom',
    domestic: false,
    deliveryTime: '7-10 business days',
    cost: 'Free over €450',
    standardCost: '€65',
    trackingIncluded: true
  },
  {
    region: 'North America',
    domestic: false,
    deliveryTime: '10-14 business days',
    cost: 'Free over €450',
    standardCost: '€85',
    trackingIncluded: true
  },
  {
    region: 'Rest of World',
    domestic: false,
    deliveryTime: '14-21 business days',
    cost: 'Contact for quote',
    standardCost: 'Varies',
    trackingIncluded: true
  }
];

const packagingFeatures = [
  {
    icon: Shield,
    title: 'Professional Protection',
    description: 'Archival materials and custom packaging for each artwork'
  },
  {
    icon: Package,
    title: 'Secure Boxing',
    description: 'Double-walled boxes with corner protection and padding'
  },
  {
    icon: CheckCircle,
    title: 'Insurance Included',
    description: 'Full insurance coverage for loss or damage during transit'
  },
  {
    icon: Truck,
    title: 'Trusted Carriers',
    description: 'Partnership with reliable shipping companies worldwide'
  }
];

export default function ShippingPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Shipping Information
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We ship artworks worldwide with professional packaging and full insurance. 
            Your art will arrive safely and beautifully presented.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Free Shipping Banner */}
        <Card className="mb-12 border-green-200 bg-green-50" artistic>
          <CardContent className="p-8 text-center">
            <Truck className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-semibold text-green-800 mb-2">
              Free Worldwide Shipping
            </h2>
            <p className="text-green-700 text-lg">
              On orders over €450 (approximately $500)
            </p>
            <p className="text-green-600 text-sm mt-2">
              Professional packaging and full insurance included
            </p>
          </CardContent>
        </Card>

        {/* Shipping Zones */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Shipping Zones & Delivery Times
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {shippingZones.map((zone, index) => (
              <Card key={index} hover className={zone.domestic ? 'border-purple-200' : ''}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {zone.region}
                    </h3>
                    {zone.domestic ? (
                      <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                        Domestic
                      </span>
                    ) : (
                      <Globe className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Delivery Time
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {zone.deliveryTime}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 flex items-center">
                        <Calculator className="h-4 w-4 mr-2" />
                        Standard Cost
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {zone.standardCost}
                      </span>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-200">
                      <span className="text-sm font-medium text-green-600">
                        {zone.cost}
                      </span>
                      {zone.trackingIncluded && (
                        <p className="text-xs text-gray-500 mt-1">
                          ✓ Tracking included
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Packaging & Protection */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Professional Packaging & Protection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {packagingFeatures.map((feature, index) => {
              const Icon = feature.icon;
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
                      <p className="text-gray-700">Artwork is carefully wrapped in acid-free tissue paper</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-purple-600">2</span>
                      </div>
                      <p className="text-gray-700">Protected with archival foam padding and corner guards</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-purple-600">3</span>
                      </div>
                      <p className="text-gray-700">Placed in custom-sized, double-walled shipping box</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-purple-600">4</span>
                      </div>
                      <p className="text-gray-700">Sealed with fragile and handling instructions</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-sm">
                    Every artwork is packaged with museum-quality materials to ensure 
                    it arrives in perfect condition.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Shipping Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            How Shipping Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Order Confirmation
                </h3>
                <p className="text-gray-600 text-sm">
                  Once your order is placed, you'll receive an email confirmation with 
                  order details and estimated delivery time.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Careful Packaging
                </h3>
                <p className="text-gray-600 text-sm">
                  Your artwork is professionally packaged within 1-2 business days, 
                  with tracking information sent to you.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Safe Delivery
                </h3>
                <p className="text-gray-600 text-sm">
                  Track your package in real-time. We ensure secure delivery 
                  with signature confirmation for valuable items.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* International Shipping */}
        <div className="mb-12">
          <Card artistic>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Plane className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  International Shipping
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Customs & Duties
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Customs duties and taxes are the buyer's responsibility</li>
                    <li>• We declare the full purchase value for customs</li>
                    <li>• Import duties vary by country and artwork value</li>
                    <li>• Contact your local customs office for specific rates</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Documentation
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Certificate of authenticity included</li>
                    <li>• Commercial invoice for customs clearance</li>
                    <li>• Detailed artwork description and materials</li>
                    <li>• Artist information and provenance details</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Important Shipping Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">
                      Delivery Requirements
                    </h3>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Signature required for deliveries over €200</li>
                      <li>• Someone must be present to receive the package</li>
                      <li>• Valid ID may be required for high-value items</li>
                      <li>• We cannot deliver to PO boxes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">
                      Address Accuracy
                    </h3>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Double-check your shipping address</li>
                      <li>• Include apartment/unit numbers</li>
                      <li>• Provide accurate phone number</li>
                      <li>• Address changes may incur additional fees</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Shipping Calculator */}
        <div className="mb-12">
          <Card artistic>
            <CardContent className="p-8 text-center">
              <Calculator className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Calculate Shipping Cost
              </h2>
              <p className="text-gray-600 mb-6">
                Get an accurate shipping estimate for your location during checkout.
                Shipping costs are calculated based on artwork dimensions and destination.
              </p>
              <LoadingLink href="/shop">
                <div className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  Start Shopping
                  <Truck className="ml-2 h-4 w-4" />
                </div>
              </LoadingLink>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Shipping FAQ
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "How long does shipping take?",
                answer: "Shipping times vary by destination. Domestic orders (Spain) typically arrive in 2-3 business days, while international orders can take 5-21 business days depending on the destination."
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes! We ship worldwide. Shipping costs and delivery times vary by destination. Free shipping is available internationally on orders over €450."
              },
              {
                question: "Is insurance included?",
                answer: "Yes, all shipments include full insurance coverage for loss or damage during transit at no additional cost to you."
              },
              {
                question: "Can I track my order?",
                answer: "Absolutely! You'll receive tracking information via email once your order ships. You can track your package in real-time using the provided tracking number."
              },
              {
                question: "What if my artwork arrives damaged?",
                answer: "While rare due to our professional packaging, if your artwork arrives damaged, please contact us immediately with photos. We'll arrange for a replacement or full refund."
              }
            ].map((faq, index) => (
              <Card key={index} hover>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact for Questions */}
        <Card artistic>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
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