// src/app/support/page.tsx
'use client';

import { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  HelpCircle, 
  FileText, 
  Truck,
  CreditCard,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import LoadingLink from '@/components/ui/LoadingLink';

const supportTopics = [
  {
    id: 'order-status',
    title: 'Order Status & Tracking',
    description: 'Check your order status, tracking information, and delivery updates',
    icon: Truck,
    color: 'blue'
  },
  {
    id: 'payment-issues',
    title: 'Payment Issues',
    description: 'Problems with payments, billing, or refunds',
    icon: CreditCard,
    color: 'green'
  },
  {
    id: 'artwork-questions',
    title: 'Artwork Questions',
    description: 'Questions about artworks, authenticity, or care instructions',
    icon: HelpCircle,
    color: 'purple'
  },
  {
    id: 'returns-exchanges',
    title: 'Returns & Exchanges',
    description: 'Return policy, exchange process, or refund requests',
    icon: FileText,
    color: 'orange'
  }
];

const quickActions = [
  {
    title: 'Track Your Order',
    description: 'Enter your order number to get real-time tracking updates',
    action: 'Track Order',
    href: '/track-order'
  },
  {
    title: 'Return an Item',
    description: 'Start a return request for any item within 30 days',
    action: 'Start Return',
    href: '/returns'
  },
  {
    title: 'FAQ',
    description: 'Browse our comprehensive frequently asked questions',
    action: 'View FAQ',
    href: '/faq'
  }
];

export default function SupportPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleTrackOrder = () => {
    if (orderNumber.trim()) {
      // In a real app, this would navigate to tracking page with order number
      console.log('Tracking order:', orderNumber);
    }
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help! Find answers to your questions or get in touch with our support team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Order Tracking */}
        <Card className="mb-12" artistic>
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Truck className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                Track Your Order
              </h2>
              <p className="text-gray-600">
                Enter your order number to get real-time updates on your artwork delivery
              </p>
            </div>
            
            <div className="max-w-md mx-auto flex gap-3">
              <Input
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Enter order number (e.g., ORD-123456)"
                className="flex-1"
              />
              <Button onClick={handleTrackOrder} disabled={!orderNumber.trim()}>
                Track
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Support Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            How can we help you today?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportTopics.map((topic) => {
              const Icon = topic.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                green: 'bg-green-100 text-green-600 border-green-200',
                purple: 'bg-purple-100 text-purple-600 border-purple-200',
                orange: 'bg-orange-100 text-orange-600 border-orange-200'
              };
              
              return (
                <Card 
                  key={topic.id} 
                  hover
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedTopic === topic.id ? 'ring-2 ring-purple-500 shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[topic.color as keyof typeof colorClasses]}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {topic.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {topic.description}
                        </p>
                      </div>
                      <ArrowRight className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                        selectedTopic === topic.id ? 'rotate-90' : ''
                      }`} />
                    </div>
                    
                    {selectedTopic === topic.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="space-y-3">
                          <p className="text-sm text-gray-700">
                            Common solutions for {topic.title.toLowerCase()}:
                          </p>
                          <ul className="space-y-2 text-sm">
                            {topic.id === 'order-status' && (
                              <>
                                <li className="flex items-center text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  Check your email for order confirmation and tracking info
                                </li>
                                <li className="flex items-center text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  Orders typically ship within 1-2 business days
                                </li>
                              </>
                            )}
                            {topic.id === 'payment-issues' && (
                              <>
                                <li className="flex items-center text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  Check if your payment method has sufficient funds
                                </li>
                                <li className="flex items-center text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  Verify billing address matches your card
                                </li>
                              </>
                            )}
                            {topic.id === 'artwork-questions' && (
                              <>
                                <li className="flex items-center text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  All artworks come with certificates of authenticity
                                </li>
                                <li className="flex items-center text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  Care instructions are included with each purchase
                                </li>
                              </>
                            )}
                            {topic.id === 'returns-exchanges' && (
                              <>
                                <li className="flex items-center text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  30-day return policy for all items
                                </li>
                                <li className="flex items-center text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  Items must be in original condition
                                </li>
                              </>
                            )}
                          </ul>
                          <div className="pt-3">
                            <Button variant="outline" size="sm" asChild>
                              <LoadingLink href="/contact">
                                Need More Help?
                              </LoadingLink>
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Quick Actions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} hover>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {action.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <LoadingLink href={action.href}>
                      {action.action}
                    </LoadingLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <Card artistic>
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email Support</h3>
                    <p className="text-sm text-gray-600">support@moondog.art</p>
                    <p className="text-xs text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone Support</h3>
                    <p className="text-sm text-gray-600">+34 123 456 789</p>
                    <p className="text-xs text-gray-500">Mon-Fri 9AM-6PM CET</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Live Chat</h3>
                    <p className="text-sm text-gray-600">Available during business hours</p>
                    <p className="text-xs text-gray-500">Mon-Fri 9AM-6PM CET</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full" asChild>
                  <LoadingLink href="/contact">
                    Contact Support Team
                  </LoadingLink>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Support Hours & Status */}
          <Card artistic>
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                Support Hours
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-green-700">
                    Support is currently online
                  </span>
                </div>
                <p className="text-xs text-green-600 mt-1">
                  Average response time: 2 hours
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-3">Emergency Contact</h3>
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-700">
                      For urgent issues with damaged shipments or payment problems
                    </p>
                    <p className="text-sm font-medium text-orange-600">
                      Call: +34 123 456 789 (24/7)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Additional Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <LoadingLink href="/faq" className="block">
              <Card hover className="h-full">
                <CardContent className="p-6 text-center">
                  <HelpCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">FAQ</h3>
                  <p className="text-sm text-gray-600">Frequently asked questions</p>
                </CardContent>
              </Card>
            </LoadingLink>

            <LoadingLink href="/shipping" className="block">
              <Card hover className="h-full">
                <CardContent className="p-6 text-center">
                  <Truck className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Shipping</h3>
                  <p className="text-sm text-gray-600">Delivery information</p>
                </CardContent>
              </Card>
            </LoadingLink>

            <LoadingLink href="/returns" className="block">
              <Card hover className="h-full">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Returns</h3>
                  <p className="text-sm text-gray-600">Return policy & process</p>
                </CardContent>
              </Card>
            </LoadingLink>

            <LoadingLink href="/privacy" className="block">
              <Card hover className="h-full">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Privacy</h3>
                  <p className="text-sm text-gray-600">Privacy policy</p>
                </CardContent>
              </Card>
            </LoadingLink>
          </div>
        </div>
      </div>
    </div>
  );
}