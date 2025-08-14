// src/app/accessibility/page.tsx
import { 
  Eye, 
  Keyboard, 
  Mouse, 
  Volume2, 
  Monitor, 
  Settings, 
  CheckCircle,
  Mail,
  Calendar,
  Smartphone,
  Headphones,
  Users
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import LoadingLink from '@/components/ui/LoadingLink';

export const metadata = {
  title: 'Accessibility Statement | Moon Doggy Art',
  description: 'Our commitment to making our website accessible to all users, including those with disabilities.',
};

const lastUpdated = new Date('2024-01-15');

const accessibilityFeatures = [
  {
    category: 'Visual Accessibility',
    icon: Eye,
    color: 'purple',
    features: [
      'High contrast color schemes',
      'Scalable text up to 200% without loss of functionality',
      'Clear visual focus indicators',
      'Alternative text for all images',
      'Proper color contrast ratios (WCAG AA compliant)',
      'No content that flashes more than 3 times per second'
    ]
  },
  {
    category: 'Keyboard Navigation',
    icon: Keyboard,
    color: 'blue',
    features: [
      'Full keyboard navigation support',
      'Logical tab order throughout all pages',
      'Skip navigation links',
      'Keyboard shortcuts for common actions',
      'No keyboard traps',
      'Visible focus indicators'
    ]
  },
  {
    category: 'Screen Reader Support',
    icon: Headphones,
    color: 'green',
    features: [
      'Semantic HTML structure',
      'ARIA labels and descriptions',
      'Proper heading hierarchy',
      'Form labels and instructions',
      'Status announcements for dynamic content',
      'Table headers and captions'
    ]
  },
  {
    category: 'Motor Accessibility',
    icon: Mouse,
    color: 'orange',
    features: [
      'Large click targets (minimum 44px)',
      'No precise timing requirements',
      'Ample spacing between interactive elements',
      'Drag and drop alternatives',
      'Multiple ways to complete actions',
      'Customizable interface elements'
    ]
  }
];

const assistiveTechnologies = [
  { name: 'JAWS', compatibility: 'Full Support', icon: Headphones },
  { name: 'NVDA', compatibility: 'Full Support', icon: Headphones },
  { name: 'VoiceOver', compatibility: 'Full Support', icon: Volume2 },
  { name: 'Dragon Naturally Speaking', compatibility: 'Supported', icon: Volume2 },
  { name: 'ZoomText', compatibility: 'Compatible', icon: Eye },
  { name: 'Switch Navigation', compatibility: 'Supported', icon: Settings }
];

export default function AccessibilityPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Accessibility Statement
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              We are committed to ensuring that our website is accessible to everyone, 
              including people with disabilities. Art should be available to all.
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Our Commitment */}
        <Card className="mb-12" artistic>
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Our Accessibility Commitment
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-center mb-6">
                At Moon Doggy Art, we believe that everyone should have equal access to art and culture. 
                We are committed to providing a website that is accessible to the widest possible 
                audience, regardless of technology or ability.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">WCAG 2.1 AA</h3>
                  <p className="text-sm text-gray-600">Compliant with Web Content Accessibility Guidelines</p>
                </div>
                <div className="text-center">
                  <Monitor className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Universal Design</h3>
                  <p className="text-sm text-gray-600">Designed to be usable by people with diverse abilities</p>
                </div>
                <div className="text-center">
                  <Settings className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Ongoing Improvement</h3>
                  <p className="text-sm text-gray-600">Continuously tested and improved for accessibility</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Accessibility Features
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accessibilityFeatures.map((category, index) => {
              const Icon = category.icon;
              const colorClasses = {
                purple: 'bg-purple-100 text-purple-600 border-purple-200',
                blue: 'bg-blue-100 text-blue-600 border-blue-200',
                green: 'bg-green-100 text-green-600 border-green-200',
                orange: 'bg-orange-100 text-orange-600 border-orange-200'
              };
              
              return (
                <Card key={index} hover>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {category.category}
                      </h3>
                    </div>
                    
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Standards Compliance */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                Standards & Guidelines
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    We Follow These Standards:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        <strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        <strong>Section 508:</strong> US Federal accessibility requirements
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        <strong>EN 301 549:</strong> European accessibility standard
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">
                        <strong>ADA:</strong> Americans with Disabilities Act compliance
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Testing Methods:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">Automated accessibility testing tools</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">Manual testing with assistive technologies</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">User testing with disability community</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">Regular third-party accessibility audits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Assistive Technology Support */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Assistive Technology Support
          </h2>
          
          <Card>
            <CardContent className="p-8">
              <p className="text-gray-700 text-center mb-6">
                Our website is designed to work with the following assistive technologies:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {assistiveTechnologies.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <Icon className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900">{tech.name}</h3>
                        <p className="text-sm text-green-600">{tech.compatibility}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> If you're using assistive technology not listed here and 
                  experience issues, please contact us. We're committed to ensuring compatibility 
                  with all major assistive technologies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Browser and Device Support */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                Browser & Device Support
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Monitor className="h-5 w-5 mr-2 text-blue-600" />
                    Supported Browsers
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Chrome 90+', 'Firefox 88+', 'Safari 14+', 'Edge 90+',
                      'Opera 76+', 'Samsung Internet 14+'
                    ].map((browser, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {browser}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Smartphone className="h-5 w-5 mr-2 text-green-600" />
                    Device Support
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Desktop computers (Windows, macOS, Linux)
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Tablets (iPad, Android tablets)
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Mobile phones (iOS, Android)
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How to Use Our Site */}
        <div className="mb-12">
          <Card artistic>
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                How to Navigate Our Site Accessibly
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Keyboard Navigation
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Tab:</strong> Move forward through links and form controls</li>
                    <li><strong>Shift + Tab:</strong> Move backward through elements</li>
                    <li><strong>Enter/Space:</strong> Activate buttons and links</li>
                    <li><strong>Arrow Keys:</strong> Navigate within menus and galleries</li>
                    <li><strong>Esc:</strong> Close modals and dropdown menus</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Screen Reader Tips
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Use heading navigation to quickly jump between sections</li>
                    <li>All images have descriptive alternative text</li>
                    <li>Form fields are properly labeled and described</li>
                    <li>Status messages announce important changes</li>
                    <li>Use landmark navigation for main content areas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feedback and Contact */}
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Accessibility Feedback
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We welcome your feedback on the accessibility of our website. If you encounter 
              any accessibility barriers or have suggestions for improvement, please let us know.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <Mail className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-sm text-gray-600">accessibility@moondog.art</p>
              </div>
              <div>
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-sm text-gray-600">Within 2 business days</p>
              </div>
              <div>
                <Settings className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Issue Resolution</h3>
                <p className="text-sm text-gray-600">Prioritized for urgent issues</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LoadingLink href="/contact">
                <div className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  <Mail className="mr-2 h-4 w-4" />
                  Report Accessibility Issue
                </div>
              </LoadingLink>
              <LoadingLink href="/support">
                <div className="inline-flex items-center border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  General Support
                </div>
              </LoadingLink>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                We aim to respond to accessibility feedback within 2 business days and resolve 
                issues as quickly as possible. Thank you for helping us improve our accessibility.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}