// src/app/cookies/page.tsx
import { Cookie, Settings, Shield, BarChart, Target, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import LoadingLink from '@/components/ui/LoadingLink';

export const metadata = {
  title: 'Cookie Policy | Moon Doggy Art',
  description: 'Learn about how we use cookies to improve your browsing experience on our website.',
};

const lastUpdated = new Date('2024-01-15');

const cookieTypes = [
  {
    type: 'Essential Cookies',
    description: 'Required for the website to function properly',
    examples: ['Login sessions', 'Shopping cart', 'Security features'],
    canDisable: false,
    icon: Shield,
    color: 'red'
  },
  {
    type: 'Analytics Cookies',
    description: 'Help us understand how visitors use our website',
    examples: ['Page views', 'User behavior', 'Site performance'],
    canDisable: true,
    icon: BarChart,
    color: 'blue'
  },
  {
    type: 'Functional Cookies',
    description: 'Remember your preferences and settings',
    examples: ['Language preference', 'Theme settings', 'Region selection'],
    canDisable: true,
    icon: Settings,
    color: 'green'
  },
  {
    type: 'Marketing Cookies',
    description: 'Used to deliver personalized advertisements',
    examples: ['Targeted ads', 'Social media integration', 'Conversion tracking'],
    canDisable: true,
    icon: Target,
    color: 'purple'
  }
];

export default function CookiesPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              This policy explains how we use cookies and similar technologies to 
              improve your browsing experience on our website.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-2" />
              Last updated: {lastUpdated.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* What Are Cookies */}
        <Card className="mb-12" artistic>
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Cookie className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                What Are Cookies?
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                when you visit a website. They help websites remember information about your visit, such as 
                your preferred language and other settings.
              </p>
              <p>
                We use cookies to make our website work properly, understand how you use it, and provide 
                you with a better, more personalized experience.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Types of Cookies */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Types of Cookies We Use
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cookieTypes.map((cookie, index) => {
              const Icon = cookie.icon;
              const colorClasses = {
                red: 'bg-red-100 text-red-600 border-red-200',
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                green: 'bg-green-100 text-green-600 border-green-200',
                purple: 'bg-purple-100 text-purple-600 border-purple-200'
              };
              
              return (
                <Card key={index} hover>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[cookie.color as keyof typeof colorClasses]}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {cookie.type}
                          </h3>
                          {cookie.canDisable ? (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              Optional
                            </span>
                          ) : (
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
                          {cookie.description}
                        </p>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Examples:</h4>
                          <ul className="space-y-1">
                            {cookie.examples.map((example, idx) => (
                              <li key={idx} className="text-xs text-gray-600 flex items-center">
                                <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Cookie Details */}
        <div className="space-y-8">
          <section>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  How We Use Cookies
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Essential Website Functions
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Keep you logged into your account</li>
                      <li>• Remember items in your shopping cart</li>
                      <li>• Ensure website security and prevent fraud</li>
                      <li>• Maintain your language and region preferences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Website Analytics
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Understand which pages are most popular</li>
                      <li>• Track website performance and loading times</li>
                      <li>• Identify areas for improvement</li>
                      <li>• Measure the effectiveness of our content</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Personalization
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Remember your viewing preferences</li>
                      <li>• Suggest artworks you might like</li>
                      <li>• Customize content based on your interests</li>
                      <li>• Improve your overall browsing experience</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Third-Party Cookies
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Some cookies are set by third-party services that appear on our pages. 
                    These may include:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Analytics Services</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Google Analytics - Website usage statistics</li>
                        <li>• Hotjar - User behavior analysis</li>
                        <li>• Adobe Analytics - Performance metrics</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Instagram - Social media integration</li>
                        <li>• Facebook - Share buttons and widgets</li>
                        <li>• Twitter - Tweet embedding</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-4">
                    These third parties may use cookies to serve you advertisements based on your 
                    visit to our site and other sites on the internet.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Managing Your Cookie Preferences
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Browser Settings
                    </h3>
                    <p className="text-gray-700 mb-4">
                      You can control and manage cookies through your browser settings. Here's how:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Chrome</h4>
                        <p className="text-sm text-gray-600">
                          Settings → Privacy and security → Cookies and other site data
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Firefox</h4>
                        <p className="text-sm text-gray-600">
                          Options → Privacy & Security → Cookies and Site Data
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Safari</h4>
                        <p className="text-sm text-gray-600">
                          Preferences → Privacy → Manage Website Data
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Edge</h4>
                        <p className="text-sm text-gray-600">
                          Settings → Cookies and site permissions → Cookies
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Opt-Out Options
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Visit <a href="http://www.aboutads.info/choices/" className="text-purple-600 hover:text-purple-700">aboutads.info/choices</a> for advertising cookies</li>
                      <li>• Use <a href="http://tools.google.com/dlpage/gaoptout" className="text-purple-600 hover:text-purple-700">Google Analytics Opt-out</a> browser add-on</li>
                      <li>• Enable "Do Not Track" in your browser settings</li>
                      <li>• Use private/incognito browsing mode</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Cookie Retention
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Different cookies have different lifespans:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Session Cookies</h3>
                      <p className="text-sm text-gray-600">
                        Deleted when you close your browser. Used for temporary data like 
                        shopping cart contents.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Persistent Cookies</h3>
                      <p className="text-sm text-gray-600">
                        Remain on your device for a set period (usually 1-2 years) or until 
                        you delete them manually.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> Essential cookies required for website functionality 
                      cannot be disabled. Disabling other cookies may affect your browsing experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Updates to This Policy
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in 
                    technology, legislation, or our business practices.
                  </p>
                  <p>
                    When we make significant changes, we will notify you by:
                  </p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Posting a notice on our website</li>
                    <li>Updating the "last modified" date at the top of this policy</li>
                    <li>Sending an email notification (for registered users)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    If you have any questions about our use of cookies or this Cookie Policy, 
                    please contact us:
                  </p>
                  
                  <div className="space-y-2">
                    <p><strong>Email:</strong> privacy@moondog.art</p>
                    <p><strong>Mail:</strong> Moon Doggy Art, Privacy Department, Barcelona, Spain</p>
                    <p><strong>Phone:</strong> +34 123 456 789</p>
                  </div>
                  
                  <div className="mt-6">
                    <LoadingLink href="/contact">
                      <div className="inline-flex items-center text-purple-600 hover:text-purple-700">
                        Contact our privacy team →
                      </div>
                    </LoadingLink>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6 text-center">
            Related Policies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LoadingLink href="/privacy" className="block">
              <Card hover className="h-full">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Privacy Policy</h3>
                  <p className="text-sm text-gray-600">How we collect and protect your personal data</p>
                </CardContent>
              </Card>
            </LoadingLink>

            <LoadingLink href="/terms" className="block">
              <Card hover className="h-full">
                <CardContent className="p-6 text-center">
                  <Settings className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Terms of Service</h3>
                  <p className="text-sm text-gray-600">Terms and conditions for using our website</p>
                </CardContent>
              </Card>
            </LoadingLink>
          </div>
        </div>
      </div>
    </div>
  );
}