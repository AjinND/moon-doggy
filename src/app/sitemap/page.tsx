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
import { siteStructure, quickActions } from '@/lib/data';

export const metadata = {
  title: 'Sitemap | Moon Doggy Art',
  description: 'Navigate through all pages and sections of the Moon Doggy Art website.',
};

// Icon mapping function
const getIcon = (iconName: string) => {
  const iconMap = {
    'home': Home,
    'shopping-bag': ShoppingBag,
    'help-circle': HelpCircle,
    'file-text': FileText,
    'palette': Palette,
    'shopping-cart': ShoppingCart,
    'search': Search,
    'heart': Heart,
    'gift': Gift,
    'user': User
  };
  return iconMap[iconName as keyof typeof iconMap] || Home;
};

// Color mapping function
const getColorClasses = (color: string) => {
  const colorMap = {
    'purple': 'bg-purple-100 text-purple-600',
    'blue': 'bg-blue-100 text-blue-600',
    'green': 'bg-green-100 text-green-600',
    'gray': 'bg-gray-100 text-gray-600',
    'red': 'bg-red-100 text-red-600',
    'orange': 'bg-orange-100 text-orange-600'
  };
  return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <Search className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Site Map
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate through all pages and sections of the Moon Doggy Art website. 
            Find exactly what you're looking for with our comprehensive site guide.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => {
              const Icon = getIcon(action.icon);
              const colorClasses = getColorClasses(action.color);
              
              return (
                <LoadingLink key={index} href={action.path}>
                  <Card hover className="h-full">
                    <CardContent className="p-4 text-center">
                      <div className={`w-12 h-12 ${colorClasses} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900">
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
          {siteStructure.map((section, index) => {
            const Icon = getIcon(section.icon);
            const colorClasses = getColorClasses(section.color);
            
            return (
              <div key={index}>
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 ${colorClasses} rounded-lg flex items-center justify-center mr-4`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900">
                    {section.section}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.pages.map((page, pageIndex) => (
                    <LoadingLink key={pageIndex} href={page.path}>
                      <Card hover className="h-full">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {page.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {page.description}
                          </p>
                          <div className="mt-4 text-sm text-purple-600 font-medium">
                            {page.path}
                          </div>
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
        <div className="mt-16">
          <Card artistic>
            <CardContent className="p-8 text-center">
              <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Need Help Finding Something?
              </h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Can't find what you're looking for? Our support team is here to help you 
                navigate the site and find exactly what you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LoadingLink href="/search">
                  <div className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    <Search className="h-5 w-5 mr-2" />
                    Search Site
                  </div>
                </LoadingLink>
                <LoadingLink href="/contact">
                  <div className="inline-flex items-center border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contact Support
                  </div>
                </LoadingLink>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}