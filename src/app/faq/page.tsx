// src/app/faq/page.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import LoadingLink from '@/components/ui/LoadingLink';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'shipping' | 'returns' | 'payments' | 'artworks';
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How do I purchase an artwork?',
    answer: 'You can purchase artworks directly through our website by adding them to your cart and proceeding to checkout. We accept major credit cards and offer secure payment processing. Once your payment is confirmed, we\'ll send you a confirmation email with tracking information.',
    category: 'general'
  },
  {
    id: '2',
    question: 'Are the artworks original pieces?',
    answer: 'Yes, all artworks in our collection are original pieces created by Laura Jurkowski. Each piece is unique and comes with a certificate of authenticity. We do not sell prints or reproductions unless specifically noted.',
    category: 'artworks'
  },
  {
    id: '3',
    question: 'What are your shipping costs and delivery times?',
    answer: 'We offer free shipping on orders over $500. For orders under $500, shipping costs $50. Domestic deliveries typically take 5-7 business days, while international shipping may take 10-14 business days. All artworks are professionally packaged to ensure safe delivery.',
    category: 'shipping'
  },
  {
    id: '4',
    question: 'Can I return an artwork if I\'m not satisfied?',
    answer: 'Yes, we offer a 30-day return policy. If you\'re not completely satisfied with your purchase, you can return the artwork in its original condition for a full refund. Return shipping costs are the responsibility of the buyer unless the item was damaged during shipping.',
    category: 'returns'
  },
  {
    id: '5',
    question: 'Do you accept commission work?',
    answer: 'Yes, I accept commission work for custom pieces. Commission projects typically require a 50% deposit and have a lead time of 6-12 weeks depending on the scope and size of the project. Please contact me directly to discuss your vision and get a quote.',
    category: 'artworks'
  },
  {
    id: '6',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for larger purchases. All payments are processed securely through our encrypted payment system.',
    category: 'payments'
  },
  {
    id: '7',
    question: 'How do I care for my artwork?',
    answer: 'Keep your artwork away from direct sunlight and extreme temperatures. Dust gently with a soft, dry cloth. For oil paintings, avoid touching the surface. If professional cleaning is needed, consult with a qualified art conservator.',
    category: 'artworks'
  },
  {
    id: '8',
    question: 'Can I visit your studio?',
    answer: 'Studio visits are available by appointment only. Please contact me at least 48 hours in advance to schedule a visit. This allows me to ensure I\'m available and can give you proper attention during your visit.',
    category: 'general'
  },
  {
    id: '9',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship worldwide. International shipping costs vary by destination and artwork size. Customs duties and taxes are the responsibility of the buyer. Please allow 10-14 business days for international deliveries.',
    category: 'shipping'
  },
  {
    id: '10',
    question: 'What if my artwork arrives damaged?',
    answer: 'If your artwork arrives damaged, please contact us immediately with photos of the damage and packaging. We will work with our shipping carrier to resolve the issue and ensure you receive a replacement or full refund.',
    category: 'shipping'
  }
];

const categories = [
  { key: 'all', label: 'All Categories', icon: HelpCircle },
  { key: 'general', label: 'General', icon: MessageCircle },
  { key: 'artworks', label: 'Artworks', icon: HelpCircle },
  { key: 'shipping', label: 'Shipping', icon: HelpCircle },
  { key: 'returns', label: 'Returns', icon: HelpCircle },
  { key: 'payments', label: 'Payments', icon: HelpCircle }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our artworks, shipping, returns, and more.
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for questions..."
              className="pl-10 w-full"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.key
                      ? 'bg-purple-100 text-purple-700 border-2 border-purple-300'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-200 hover:bg-purple-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.key === selectedCategory)?.label}`}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <Card 
                key={faq.id} 
                className={`animate-fade-in opacity-0`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-medium text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {expandedItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {expandedItems.includes(faq.id) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="mt-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 capitalize">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  No questions found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any questions matching your search criteria.
                  Try adjusting your search terms or browse all categories.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    variant="outline"
                  >
                    Clear Filters
                  </Button>
                  <Button asChild>
                    <LoadingLink href="/contact">
                      Contact Support
                    </LoadingLink>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Contact Section */}
        <Card className="mt-12" artistic>
          <CardContent className="p-8 text-center">
            <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Can't find the answer you're looking for? Our team is here to help.
              Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <LoadingLink href="/contact">
                  Contact Us
                </LoadingLink>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <LoadingLink href="/support">
                  Support Center
                </LoadingLink>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <LoadingLink href="/shipping" className="block">
            <Card hover className="h-full">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Shipping Info</h3>
                <p className="text-sm text-gray-600">Learn about delivery times and costs</p>
              </CardContent>
            </Card>
          </LoadingLink>

          <LoadingLink href="/returns" className="block">
            <Card hover className="h-full">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Returns Policy</h3>
                <p className="text-sm text-gray-600">30-day return guarantee</p>
              </CardContent>
            </Card>
          </LoadingLink>

          <LoadingLink href="/contact" className="block">
            <Card hover className="h-full">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Direct Contact</h3>
                <p className="text-sm text-gray-600">Get personalized assistance</p>
              </CardContent>
            </Card>
          </LoadingLink>
        </div>
      </div>
    </div>
  );
}