// src/app/sitemap/page.tsx
import { 
  Home, 
  Palette, 
  ShoppingBag, 
  User, 
  MessageCircle, 
  FileText, 
  HelpCircle,
  Truck,
  RotateCcw,
  Gift,
  Heart,
  ShoppingCart,
  Search
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import LoadingLink from '@/components/ui/LoadingLink';

export const metadata = {
  title: 'Sitemap | Moon Doggy Art',
  description: 'Navigate through all pages and sections of the Moon Doggy Art website.',
};

const siteStructure = [
  {
    section: 'Main Pages',
    icon: Home,
    color: 'purple',
    pages: [
      { name: 'Home', path: '/', description: 'Welcome page with featured artworks and artist introduction' },
      { name: 'Gallery', path: '/gallery', description: 'Browse all artworks with filtering and search options' },
      { name: 'Shop', path: '/shop', description: 'Purchase original artworks and browse by category' },
      { name: 'About', path: '/about', description: 'Learn about the artist, education, and exhibitions' },
      { name: 'Blog', path: '/blog', description: 'Art insights, tutorials, and behind-the-scenes content' },
      { name: 'Contact', path: '/contact', description: 'Get in touch for inquiries and commission requests' }
    ]
  },
  {
    section: 'Shopping & Cart',
    icon: ShoppingBag,
    color: 'blue',
    pages: [
      { name: 'Shopping Cart', path: '/cart', description: 'Review items and proceed to checkout' },
      { name: 'Wishlist', path: '/wishlist', description: 'Save favorite artworks for later' },
      { name: 'Gift Cards', path: '/gift-cards', description: 'Create and purchase custom gift cards' }
    ]
  },
  {
    section: 'Support & Help',
    icon: HelpCircle,
    color: 'green',
    pages: [
      { name: 'Support Center', path: '/support', description: 'Get help with orders, payments, and account issues' },
      { name: 'FAQ', path: '/faq', description: 'Frequently asked questions and answers' },
      { name: 'Shipping Info', path: '/shipping', description: 'Delivery times, costs, and international shipping' },
      { name: 'Returns Policy', path: '/returns', description: '30-day return policy and exchange information' }
    ]
  },
  {
    section: 'Legal & Privacy',
    icon: FileText,
    color: 'gray',
    pages: [
      { name: 'Privacy Policy', path: '/privacy', description: 'How we collect, use, and protect your personal data' },
      { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions for using our website' },
      { name: 'Cookie Policy', path: '/cookies', description: 'Information about cookies and tracking technologies' },
      { name: 'Accessibility', path: '/accessibility', description: 'Our commitment to web accessibility' },
      { name: 'Copyright', path: '/copyright', description: 'Copyright information and intellectual property rights' }
    ]
  }
];

const quickActions = [
  { name: 'Browse Artworks', path: '/gallery', icon: Palette, color: 'purple' },
  { name: 'Start Shopping', path: '/shop', icon: ShoppingCart, color: 'blue' },
  { name: 'Search Site', path: '/search', icon: Search, color: 'green' },
  { name: 'Get Support', path: '/support', icon: HelpCircle, color: 'orange' }
];

export default function SitemapPage() {
  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      gray: 'bg-gray-100 text-gray-600 border-gray-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Sitemap
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate through all pages and sections of our website. 
            Find exactly what you're looking for quickly and easily.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Quick Actions
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <LoadingLink key={index} href={action.path} className="block">
                  <Card hover className="h-full">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${getColorClasses(action.color)}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-medium text-gray-900 text-sm">
                        {action.name}
                      </h3>
                    </CardContent>
                  </Card>
                </LoadingLink>
              );
            })}
          </div>
        </div>

        {/* Site Structure */}
        <div className="space-y-12">
          {siteStructure.map((section, sectionIndex) => {
            const SectionIcon = section.icon;
            return (
              <div key={sectionIndex}>
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${getColorClasses(section.color)}`}>
                    <SectionIcon className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900">
                    {section.section}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.pages.map((page, pageIndex) => (
                    <LoadingLink key={pageIndex} href={page.path} className="block">
                      <Card hover className="h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                              {page.name}
                            </h3>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {page.path}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {page.description}
                          </p>
                        </CardContent>
                      </Card>
                    </LoadingLink>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Additional Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover>
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-medium text-gray-900 mb-2">Live Chat</h3>
                <p className="text-sm text-gray-600">Get instant help during business hours</p>
              </CardContent>
            </Card>
            
            <Card hover>
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-medium text-gray-900 mb-2">Documentation</h3>
                <p className="text-sm text-gray-600">Care instructions and artwork guides</p>
              </CardContent>
            </Card>
            
            <Card hover>
              <CardContent className="p-6 text-center">
                <Gift className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-medium text-gray-900 mb-2">Gift Services</h3>
                <p className="text-sm text-gray-600">Special packaging and delivery options</p>
              </CardContent>
            </Card>
            
            <Card hover>
              <CardContent className="p-6 text-center">
                <User className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-medium text-gray-900 mb-2">Account</h3>
                <p className="text-sm text-gray-600">Manage your profile and order history</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Page Statistics */}
        <Card className="mt-12" artistic>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
              Website Overview
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {siteStructure.reduce((total, section) => total + section.pages.length, 0)}
                </div>
                <div className="text-sm text-gray-600">Total Pages</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {siteStructure.length}
                </div>
                <div className="text-sm text-gray-600">Main Sections</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  4
                </div>
                <div className="text-sm text-gray-600">Support Pages</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  5
                </div>
                <div className="text-sm text-gray-600">Legal Pages</div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? Our search function can help you navigate 
                to any page quickly.
              </p>
              <LoadingLink href="/contact">
                <div className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  Contact Support
                  <MessageCircle className="ml-2 h-4 w-4" />
                </div>
              </LoadingLink>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Having trouble navigating our site? Visit our{' '}
            <LoadingLink href="/accessibility" className="text-purple-600 hover:text-purple-700">
              accessibility page
            </LoadingLink>{' '}
            for assistance and alternative navigation options.
          </p>
        </div>
      </div>
    </div>
  );
}