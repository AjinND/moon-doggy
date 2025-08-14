// src/app/privacy/page.tsx
import { Shield, Eye, Lock, Database, Mail, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import LoadingLink from '@/components/ui/LoadingLink';

export const metadata = {
  title: 'Privacy Policy | Moon Doggy Art',
  description: 'Learn how we collect, use, and protect your personal information at Moon Doggy Art.',
};

const lastUpdated = new Date('2024-01-15');

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              We respect your privacy and are committed to protecting your personal data. 
              This policy explains how we collect, use, and safeguard your information.
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
        {/* Quick Overview */}
        <Card className="mb-12" artistic>
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Your Privacy at a Glance
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Eye className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-medium text-gray-900 mb-2">Transparency</h3>
                <p className="text-sm text-gray-600">We clearly explain what data we collect and why</p>
              </div>
              <div className="text-center">
                <Lock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-medium text-gray-900 mb-2">Security</h3>
                <p className="text-sm text-gray-600">Your data is encrypted and securely stored</p>
              </div>
              <div className="text-center">
                <Database className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-medium text-gray-900 mb-2">Control</h3>
                <p className="text-sm text-gray-600">You can access, update, or delete your data anytime</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">
              Table of Contents
            </h2>
            <nav className="space-y-2">
              {[
                { href: '#information-we-collect', title: '1. Information We Collect' },
                { href: '#how-we-use-information', title: '2. How We Use Your Information' },
                { href: '#information-sharing', title: '3. Information Sharing' },
                { href: '#data-security', title: '4. Data Security' },
                { href: '#your-rights', title: '5. Your Rights' },
                { href: '#cookies', title: '6. Cookies and Tracking' },
                { href: '#children', title: '7. Children\'s Privacy' },
                { href: '#international', title: '8. International Data Transfers' },
                { href: '#changes', title: '9. Changes to This Policy' },
                { href: '#contact', title: '10. Contact Us' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-purple-600 hover:text-purple-700 transition-colors duration-200"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Policy Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          <section id="information-we-collect">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  1. Information We Collect
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Information You Provide Directly
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Account Information:</strong> Name, email address, phone number when you create an account</li>
                      <li>• <strong>Purchase Information:</strong> Billing and shipping addresses, payment information</li>
                      <li>• <strong>Communications:</strong> Messages sent through contact forms, emails, or customer support</li>
                      <li>• <strong>Profile Data:</strong> Preferences, interests, and demographic information you choose to share</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Information Collected Automatically
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Usage Data:</strong> Pages visited, time spent on site, click patterns</li>
                      <li>• <strong>Device Information:</strong> Browser type, operating system, IP address</li>
                      <li>• <strong>Location Data:</strong> General geographic location based on IP address</li>
                      <li>• <strong>Cookies:</strong> Small files stored on your device to enhance your experience</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="how-we-use-information">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  2. How We Use Your Information
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>We use your information for the following purposes:</p>
                  <ul className="space-y-2">
                    <li>• <strong>Process Orders:</strong> Complete purchases, process payments, and arrange shipping</li>
                    <li>• <strong>Customer Service:</strong> Respond to inquiries, provide support, and resolve issues</li>
                    <li>• <strong>Account Management:</strong> Create and maintain your account, send order confirmations</li>
                    <li>• <strong>Marketing:</strong> Send newsletters, promotional offers, and updates (with your consent)</li>
                    <li>• <strong>Website Improvement:</strong> Analyze usage patterns to enhance user experience</li>
                    <li>• <strong>Legal Compliance:</strong> Meet legal obligations and protect against fraud</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="information-sharing">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  3. Information Sharing
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>We may share your information in the following situations:</p>
                  <ul className="space-y-2">
                    <li>• <strong>Service Providers:</strong> Payment processors, shipping companies, email services</li>
                    <li>• <strong>Legal Requirements:</strong> When required by law, court orders, or government requests</li>
                    <li>• <strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                    <li>• <strong>Consent:</strong> When you explicitly agree to share information with third parties</li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium">
                      We never sell your personal information to third parties for marketing purposes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="data-security">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  4. Data Security
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>We implement various security measures to protect your information:</p>
                  <ul className="space-y-2">
                    <li>• <strong>Encryption:</strong> SSL/TLS encryption for data transmission</li>
                    <li>• <strong>Secure Storage:</strong> Encrypted databases with access controls</li>
                    <li>• <strong>Payment Security:</strong> PCI DSS compliant payment processing</li>
                    <li>• <strong>Access Control:</strong> Limited employee access on a need-to-know basis</li>
                    <li>• <strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="your-rights">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  5. Your Rights
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>You have the following rights regarding your personal data:</p>
                  <ul className="space-y-2">
                    <li>• <strong>Access:</strong> Request a copy of your personal data</li>
                    <li>• <strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li>• <strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li>• <strong>Portability:</strong> Receive your data in a portable format</li>
                    <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li>• <strong>Restriction:</strong> Limit how we process your data</li>
                  </ul>
                  
                  <p className="mt-4">
                    To exercise these rights, please contact us at{' '}
                    <a href="mailto:privacy@moondog.art" className="text-purple-600 hover:text-purple-700">
                      privacy@moondog.art
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="cookies">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  6. Cookies and Tracking
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="space-y-2">
                    <li>• Remember your preferences and settings</li>
                    <li>• Keep you logged into your account</li>
                    <li>• Analyze website usage and performance</li>
                    <li>• Provide personalized content and recommendations</li>
                  </ul>
                  
                  <p className="mt-4">
                    You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
                  </p>
                  
                  <div className="mt-4">
                    <LoadingLink 
                      href="/cookies" 
                      className="text-purple-600 hover:text-purple-700"
                    >
                      Learn more about our cookie policy →
                    </LoadingLink>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="children">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  7. Children's Privacy
                </h2>
                
                <div className="text-gray-700">
                  <p>
                    Our website is not intended for children under 13 years of age. We do not knowingly 
                    collect personal information from children under 13. If we become aware that we have 
                    collected personal information from a child under 13, we will take steps to delete 
                    such information promptly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="international">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  8. International Data Transfers
                </h2>
                
                <div className="text-gray-700">
                  <p>
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place to protect your data in accordance with 
                    this privacy policy and applicable laws.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="changes">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  9. Changes to This Policy
                </h2>
                
                <div className="text-gray-700">
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any 
                    significant changes by posting the new policy on this page and updating the 
                    "last updated" date. We encourage you to review this policy periodically.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="contact">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  10. Contact Us
                </h2>
                
                <div className="text-gray-700">
                  <p className="mb-4">
                    If you have any questions about this privacy policy or our privacy practices, 
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
                        <Mail className="h-4 w-4 mr-2" />
                        Contact our privacy team
                      </div>
                    </LoadingLink>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}