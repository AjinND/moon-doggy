// src/app/terms/page.tsx
import { Scale, FileText, Shield, AlertTriangle, Calendar, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import LoadingLink from '@/components/ui/LoadingLink';

export const metadata = {
  title: 'Terms of Service | Moon Doggy Art',
  description: 'Terms and conditions for using Moon Doggy Art website and purchasing artworks.',
};

const lastUpdated = new Date('2024-01-15');
const effectiveDate = new Date('2024-01-15');

export default function TermsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Please read these terms and conditions carefully before using our website 
              or purchasing any artworks.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500 space-x-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Last updated: {lastUpdated.toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Effective: {effectiveDate.toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Notice */}
        <Card className="mb-12 border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-semibold text-orange-800 mb-2">
                  Important Legal Agreement
                </h2>
                <p className="text-orange-700 text-sm">
                  By accessing or using our website, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not access the website or 
                  purchase our products.
                </p>
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
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { href: '#acceptance', title: '1. Acceptance of Terms' },
                { href: '#description', title: '2. Description of Service' },
                { href: '#account', title: '3. User Accounts' },
                { href: '#purchases', title: '4. Purchases and Payments' },
                { href: '#intellectual-property', title: '5. Intellectual Property' },
                { href: '#user-conduct', title: '6. User Conduct' },
                { href: '#privacy', title: '7. Privacy Policy' },
                { href: '#disclaimers', title: '8. Disclaimers' },
                { href: '#limitation', title: '9. Limitation of Liability' },
                { href: '#termination', title: '10. Termination' },
                { href: '#governing-law', title: '11. Governing Law' },
                { href: '#contact', title: '12. Contact Information' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-purple-600 hover:text-purple-700 transition-colors duration-200 text-sm"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Terms Content */}
        <div className="space-y-8">
          <section id="acceptance">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  1. Acceptance of Terms
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    These Terms of Service ("Terms") constitute a legally binding agreement between 
                    you and Moon Doggy Art ("we," "us," or "our") regarding your use of our website 
                    located at moondog.art (the "Service").
                  </p>
                  <p>
                    By accessing or using our Service, you agree to comply with and be bound by these 
                    Terms. If you do not agree to these Terms, you must not access or use our Service.
                  </p>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of 
                    any material changes via email or through a notice on our website.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="description">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  2. Description of Service
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Moon Doggy Art is an online platform that provides:
                  </p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Sale of original artworks created by Laura Jurkowski</li>
                    <li>Commission services for custom artwork</li>
                    <li>Gift card services</li>
                    <li>Art gallery and portfolio viewing</li>
                    <li>Blog content related to art and artistic processes</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue the Service 
                    (or any part thereof) at any time with or without notice.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="account">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  3. User Accounts
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    When you create an account with us, you must provide information that is 
                    accurate, complete, and current at all times.
                  </p>
                  <p>
                    You are responsible for:
                  </p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Safeguarding your password and all activities under your account</li>
                    <li>Notifying us immediately of any unauthorized use of your account</li>
                    <li>Ensuring the accuracy of your account information</li>
                    <li>Complying with all applicable laws and these Terms</li>
                  </ul>
                  <p>
                    We reserve the right to terminate accounts that violate these Terms or 
                    engage in fraudulent or illegal activities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="purchases">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  4. Purchases and Payments
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900">Pricing and Availability</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>All prices are listed in USD and are subject to change without notice</li>
                    <li>Artworks are sold on a first-come, first-served basis</li>
                    <li>We reserve the right to limit quantities or refuse orders</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-900">Payment Terms</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Payment is required in full at the time of purchase</li>
                    <li>We accept major credit cards and PayPal</li>
                    <li>All transactions are processed securely through encrypted payment systems</li>
                    <li>Commission work requires a 50% deposit upon agreement</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-900">Shipping and Delivery</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Shipping costs are calculated at checkout</li>
                    <li>Free shipping on orders over $500</li>
                    <li>Delivery times are estimates and not guaranteed</li>
                    <li>Risk of loss transfers to buyer upon shipment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="intellectual-property">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  5. Intellectual Property Rights
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900">Our Content</h3>
                  <p>
                    The Service and its original content, features, and functionality are and will 
                    remain the exclusive property of Moon Doggy Art and its licensors. The Service 
                    is protected by copyright, trademark, and other laws.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900">Artwork Ownership</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Upon purchase, you own the physical artwork but not the copyright</li>
                    <li>Copyright remains with the artist (Laura Jurkowski)</li>
                    <li>You may not reproduce, distribute, or create derivative works</li>
                    <li>Personal display and enjoyment are permitted</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-900">User Content</h3>
                  <p>
                    By submitting content to our Service (reviews, comments, images), you grant us 
                    a non-exclusive, royalty-free license to use, modify, and display such content 
                    in connection with our Service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="user-conduct">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  6. User Conduct
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>You agree not to:</p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Use the Service for any unlawful purpose or in violation of applicable laws</li>
                    <li>Attempt to gain unauthorized access to any part of the Service</li>
                    <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                    <li>Transmit any viruses, malware, or other harmful code</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Collect or store personal data about other users without consent</li>
                    <li>Use the Service to harass, abuse, or harm another person</li>
                    <li>Submit false or misleading information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="privacy">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  7. Privacy Policy
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Your privacy is important to us. Please review our Privacy Policy, which also 
                    governs your use of the Service, to understand our practices.
                  </p>
                  <div className="mt-4">
                    <LoadingLink 
                      href="/privacy" 
                      className="inline-flex items-center text-purple-600 hover:text-purple-700"
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      Read our Privacy Policy
                    </LoadingLink>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="disclaimers">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  8. Disclaimers
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 font-medium">
                      THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.
                    </p>
                  </div>
                  
                  <p>
                    To the fullest extent permitted by law, we disclaim all warranties, express or 
                    implied, including but not limited to:
                  </p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Warranties of merchantability and fitness for a particular purpose</li>
                    <li>Warranties that the Service will be uninterrupted or error-free</li>
                    <li>Warranties regarding the accuracy or reliability of content</li>
                    <li>Warranties that defects will be corrected</li>
                  </ul>
                  
                  <p>
                    We do not warrant that the Service will meet your requirements or that your 
                    use of the Service will be secure or uninterrupted.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="limitation">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  9. Limitation of Liability
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 font-medium">
                      IN NO EVENT SHALL MOON DOGGY ART BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                      SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                    </p>
                  </div>
                  
                  <p>
                    Our total liability to you for all damages, losses, and causes of action 
                    (whether in contract, tort, or otherwise) shall not exceed the amount paid 
                    by you for the specific service or product that gave rise to the claim.
                  </p>
                  
                  <p>
                    Some jurisdictions do not allow the exclusion or limitation of liability 
                    for consequential or incidental damages, so the above limitation may not 
                    apply to you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="termination">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  10. Termination
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may terminate or suspend your account and access to the Service immediately, 
                    without prior notice or liability, for any reason, including breach of these Terms.
                  </p>
                  
                  <p>You may terminate your account at any time by:</p>
                  <ul className="space-y-2 list-disc pl-6">
                    <li>Contacting our customer support</li>
                    <li>Following account deletion procedures in your account settings</li>
                  </ul>
                  
                  <p>
                    Upon termination, your right to use the Service will cease immediately, but 
                    these Terms will remain in effect regarding any prior use of the Service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="governing-law">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  11. Governing Law
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of 
                    Spain, without regard to its conflict of law principles.
                  </p>
                  
                  <p>
                    Any disputes arising under these Terms shall be subject to the exclusive 
                    jurisdiction of the courts located in Barcelona, Spain.
                  </p>
                  
                  <p>
                    If any provision of these Terms is found to be unenforceable, the remaining 
                    provisions will remain in full force and effect.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="contact">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  12. Contact Information
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  
                  <div className="space-y-2">
                    <p><strong>Email:</strong> legal@moondog.art</p>
                    <p><strong>Mail:</strong> Moon Doggy Art, Legal Department, Barcelona, Spain</p>
                    <p><strong>Phone:</strong> +34 123 456 789</p>
                  </div>
                  
                  <div className="mt-6">
                    <LoadingLink href="/contact">
                      <div className="inline-flex items-center text-purple-600 hover:text-purple-700">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact our legal team
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
            Related Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <LoadingLink href="/privacy" className="block">
              <Card hover className="h-full">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Privacy Policy</h3>
                  <p className="text-sm text-gray-600">How we collect and protect your data</p>
                </CardContent>
              </Card>
            </LoadingLink>

            <LoadingLink href="/returns" className="block">
              <Card hover className="h-full">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Return Policy</h3>
                  <p className="text-sm text-gray-600">30-day return guarantee</p>
                </CardContent>
              </Card>
            </LoadingLink>

            <LoadingLink href="/shipping" className="block">
              <Card hover className="h-full">
                <CardContent className="p-6 text-center">
                  <Scale className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-medium text-gray-900 mb-2">Shipping Terms</h3>
                  <p className="text-sm text-gray-600">Delivery policies and procedures</p>
                </CardContent>
              </Card>
            </LoadingLink>
          </div>
        </div>
      </div>
    </div>
  );
}