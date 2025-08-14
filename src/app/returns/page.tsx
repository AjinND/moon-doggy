// src/app/returns/page.tsx
import { 
  RotateCcw, 
  Calendar, 
  CheckCircle, 
  XCircle, 
  Package, 
  CreditCard,
  AlertTriangle,
  Mail,
  Clock,
  Shield
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import LoadingLink from '@/components/ui/LoadingLink';

export const metadata = {
  title: 'Returns Policy | Moon Doggy Art',
  description: 'Learn about our 30-day return policy and how to return artworks for a full refund.',
};

const returnSteps = [
  {
    step: 1,
    title: 'Contact Us',
    description: 'Email us within 30 days with your order number and reason for return',
    icon: Mail,
    timeframe: 'Within 30 days'
  },
  {
    step: 2,
    title: 'Get Authorization',
    description: 'Receive return authorization number and prepaid shipping label',
    icon: CheckCircle,
    timeframe: '24-48 hours'
  },
  {
    step: 3,
    title: 'Pack Securely',
    description: 'Use original packaging or similar protective materials',
    icon: Package,
    timeframe: 'Same day'
  },
  {
    step: 4,
    title: 'Ship Back',
    description: 'Send the artwork using our prepaid shipping label',
    icon: RotateCcw,
    timeframe: '1-2 days'
  },
  {
    step: 5,
    title: 'Receive Refund',
    description: 'Get full refund once we receive and inspect the artwork',
    icon: CreditCard,
    timeframe: '3-5 business days'
  }
];

const eligibleReturns = [
  'Artwork doesn\'t match the description',
  'Colors appear significantly different than shown',
  'Artwork arrived damaged during shipping',
  'Wrong item was shipped',
  'Simply changed your mind (within 30 days)',
  'Gift recipient doesn\'t want the item'
];

const ineligibleReturns = [
  'Artwork damaged due to improper handling',
  'Custom or commissioned pieces',
  'Items returned after 30 days',
  'Artwork altered or damaged by buyer',
  'Original packaging completely destroyed',
  'Gift cards (unless required by law)'
];

export default function ReturnsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Returns & Exchanges
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We want you to love your artwork. If you're not completely satisfied, 
            we offer a hassle-free 30-day return policy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 30-Day Guarantee */}
        <Card className="mb-12 border-green-200 bg-green-50" artistic>
          <CardContent className="p-8 text-center">
            <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-semibold text-green-800 mb-2">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-green-700 text-lg mb-4">
              Return any artwork within 30 days for a full refund
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                No questions asked
              </div>
              <div className="flex items-center justify-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free return shipping
              </div>
              <div className="flex items-center justify-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                Full refund guaranteed
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Return Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            How to Return Your Artwork
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {returnSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative">
                  <Card hover className="h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                        {step.step}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {step.description}
                      </p>
                      <span className="inline-flex items-center text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                        <Clock className="h-3 w-3 mr-1" />
                        {step.timeframe}
                      </span>
                    </CardContent>
                  </Card>
                  
                  {/* Connector Arrow */}
                  {index < returnSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-purple-300"></div>
                      <div className="absolute -right-1 -top-1 w-0 h-0 border-l-2 border-l-purple-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Eligible vs Ineligible Returns */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Return Eligibility
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eligible Returns */}
            <Card className="border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-green-800">
                    Eligible for Return
                  </h3>
                </div>
                <ul className="space-y-3">
                  {eligibleReturns.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Ineligible Returns */}
            <Card className="border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <XCircle className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-red-800">
                    Not Eligible for Return
                  </h3>
                </div>
                <ul className="space-y-3">
                  {ineligibleReturns.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="h-4 w-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Important Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Important Return Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-3">
                      Condition Requirements
                    </h3>
                    <ul className="text-orange-700 text-sm space-y-2">
                      <li>• Artwork must be in original condition</li>
                      <li>• No damage, scratches, or alterations</li>
                      <li>• Original packaging preferred but not required</li>
                      <li>• Certificate of authenticity must be included</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-3">
                      Return Protection
                    </h3>
                    <ul className="text-blue-700 text-sm space-y-2">
                      <li>• Free return shipping on our label</li>
                      <li>• Full insurance coverage during return</li>
                      <li>• Tracking provided for return shipment</li>
                      <li>• Professional handling of returned items</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Refund Information */}
        <div className="mb-12">
          <Card artistic>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <CreditCard className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  Refund Process
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Processing Timeline
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Return received</span>
                      <span className="font-medium text-gray-900">Same day notification</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Quality inspection</span>
                      <span className="font-medium text-gray-900">1-2 business days</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">Refund processed</span>
                      <span className="font-medium text-gray-900">1 business day</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Refund appears</span>
                      <span className="font-medium text-gray-900">3-5 business days</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Refund Methods
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      Original payment method (preferred)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      Store credit (faster processing)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                      Bank transfer (international orders)
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-purple-700 text-sm">
                      <strong>Note:</strong> Refunds are processed to the original payment method 
                      unless otherwise requested. Processing times may vary by bank.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exchanges */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <RotateCcw className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  Exchanges
                </h2>
              </div>
              
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-gray-700 mb-4">
                  We don't offer direct exchanges, but you can return your item for a full refund 
                  and place a new order for the artwork you prefer.
                </p>
                <p className="text-gray-600 text-sm mb-6">
                  This ensures you get the best price and fastest processing. If you need help 
                  selecting a replacement, our team is happy to assist.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <LoadingLink href="/contact">
                    <div className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                      Get Exchange Help
                    </div>
                  </LoadingLink>
                  <LoadingLink href="/shop">
                    <div className="inline-flex items-center border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                      Browse Artworks
                    </div>
                  </LoadingLink>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Start Return */}
        <Card artistic>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Need to Return an Artwork?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Contact our customer service team to start your return process. 
              We'll guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LoadingLink href="/contact">
                <div className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                  <Mail className="mr-2 h-4 w-4" />
                  Start Return Process
                </div>
              </LoadingLink>
              <LoadingLink href="/support">
                <div className="inline-flex items-center border border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                  Contact Support
                </div>
              </LoadingLink>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Return Contact:</strong> returns@moondog.art | +34 123 456 789
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}