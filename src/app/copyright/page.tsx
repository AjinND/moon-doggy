// src/app/copyright/page.tsx
import { 
  Copyright, 
  Palette, 
  Camera, 
  FileText, 
  Shield, 
  AlertTriangle,
  Scale,
  Mail,
  Calendar,
  Users,
  Download,
  Eye
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import LoadingLink from '@/components/ui/LoadingLink';

export const metadata = {
  title: 'Copyright Information | Moon Doggy Art',
  description: 'Copyright policy, intellectual property rights, and usage guidelines for Moon Doggy Art content.',
};

const lastUpdated = new Date('2024-01-15');

const copyrightSections = [
  {
    title: 'Original Artworks',
    icon: Palette,
    color: 'purple',
    content: [
      'All original artworks are protected by copyright law',
      'Copyright belongs to Laura Jurkowski (the artist)',
      'Purchasing artwork grants physical ownership, not copyright',
      'Reproduction rights remain with the artist',
      'Commercial use requires separate licensing agreement'
    ]
  },
  {
    title: 'Website Content',
    icon: FileText,
    color: 'blue',
    content: [
      'All text, images, and design elements are copyrighted',
      'Protected under international copyright law',
      'Unauthorized copying or distribution is prohibited',
      'Fair use applies for educational and review purposes',
      'Proper attribution required for any permitted use'
    ]
  },
  {
    title: 'Photography',
    icon: Camera,
    color: 'green',
    content: [
      'All artwork photography is professionally created',
      'Images are protected by copyright law',
      'High-resolution images available to buyers only',
      'Web images include digital watermarking',
      'Commercial use of photos requires permission'
    ]
  },
  {
    title: 'User Content',
    icon: Users,
    color: 'orange',
    content: [
      'Reviews and comments remain your intellectual property',
      'We retain right to display user content on our site',
      'User content must not infringe third-party rights',
      'We may remove content that violates copyright',
      'Users responsible for their own copyright compliance'
    ]
  }
];

const permittedUses = [
  {
    title: 'Personal Use',
    description: 'View and enjoy artworks for personal, non-commercial purposes',
    allowed: true
  },
  {
    title: 'Educational Use',
    description: 'Use images for educational purposes with proper attribution',
    allowed: true
  },
  {
    title: 'Press Coverage',
    description: 'Media outlets may use images for news and review purposes',
    allowed: true
  },
  {
    title: 'Social Sharing',
    description: 'Share links and small preview images on social media',
    allowed: true
  },
  {
    title: 'Commercial Reproduction',
    description: 'Create prints, merchandise, or derivatives for sale',
    allowed: false
  },
  {
    title: 'Unauthorized Distribution',
    description: 'Share high-resolution images without permission',
    allowed: false
  }
];

export default function CopyrightPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Copyright Information
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Understanding intellectual property rights, usage permissions, and 
              copyright protections for Moon Doggy Art content and artworks.
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
        {/* Copyright Notice */}
        <Card className="mb-12 border-purple-200 bg-purple-50" artistic>
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Copyright className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-semibold text-purple-800 mb-4">
                Copyright Notice
              </h2>
            </div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-purple-700 text-lg mb-4">
                © 2024 Laura Jurkowski / Moon Doggy Art. All rights reserved.
              </p>
              <p className="text-purple-600 mb-6">
                The content on this website, including but not limited to text, graphics, images, 
                artwork, logos, and software, is the property of Moon Doggy Art or its content 
                suppliers and is protected by international copyright laws.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center text-purple-600">
                  <Shield className="h-4 w-4 mr-2" />
                  Protected by Copyright Law
                </div>
                <div className="flex items-center text-purple-600">
                  <Scale className="h-4 w-4 mr-2" />
                  International Legal Protection
                </div>
                <div className="flex items-center text-purple-600">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Unauthorized Use Prohibited
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Copyright Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            What's Protected by Copyright
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {copyrightSections.map((section, index) => {
              const Icon = section.icon;
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
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${colorClasses[section.color as keyof typeof colorClasses]}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {section.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-2">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Permitted vs Prohibited Uses */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Usage Guidelines
          </h2>
          
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Permitted Uses */}
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Permitted Uses
                  </h3>
                  <div className="space-y-4">
                    {permittedUses.filter(use => use.allowed).map((use, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{use.title}</h4>
                          <p className="text-sm text-gray-600">{use.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prohibited Uses */}
                <div>
                  <h3 className="text-xl font-semibold text-red-800 mb-6 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Prohibited Uses
                  </h3>
                  <div className="space-y-4">
                    {permittedUses.filter(use => !use.allowed).map((use, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <div className="w-8 h-0.5 bg-red-600"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{use.title}</h4>
                          <p className="text-sm text-gray-600">{use.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>When in doubt:</strong> If you're unsure whether your intended use is 
                  permitted, please contact us before using any content. We're happy to discuss 
                  licensing options for commercial use.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fair Use and Educational Use */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                Fair Use and Educational Guidelines
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Fair Use Principles
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Purpose:</strong> Criticism, comment, news reporting, teaching</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Nature:</strong> Creative works have stronger protection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Amount:</strong> Use only necessary portions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Effect:</strong> Must not harm market value</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Educational Use Guidelines
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Use for non-profit educational purposes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Provide proper attribution to the artist</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Use low-resolution images when possible</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Include copyright notice and source</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Licensing and Permissions */}
        <div className="mb-12">
          <Card artistic>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Scale className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                  Licensing and Permissions
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Commercial Licensing Available
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Print reproduction rights</li>
                    <li>• Digital distribution licenses</li>
                    <li>• Exhibition rights</li>
                    <li>• Merchandise licensing</li>
                    <li>• Book and publication rights</li>
                    <li>• Custom licensing agreements</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    How to Request Permission
                  </h3>
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Contact us with your specific use case</li>
                    <li>2. Provide details about intended distribution</li>
                    <li>3. Specify duration and geographic scope</li>
                    <li>4. Include your budget or licensing fee range</li>
                    <li>5. Allow 5-7 business days for response</li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <LoadingLink href="/contact">
                  <div className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                    <Mail className="mr-2 h-4 w-4" />
                    Request Licensing Information
                  </div>
                </LoadingLink>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* DMCA and Copyright Violations */}
        <div className="mb-12">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-serif font-bold text-red-800 mb-4">
                    Copyright Violation Reporting
                  </h2>
                  <div className="space-y-4 text-red-700">
                    <p>
                      We take copyright infringement seriously. If you believe that content on our 
                      website violates your copyright, please provide us with the following information:
                    </p>
                    
                    <ul className="space-y-2">
                      <li>• Identification of the copyrighted work claimed to be infringed</li>
                      <li>• Identification of the material that is claimed to be infringing</li>
                      <li>• Your contact information (address, phone, email)</li>
                      <li>• A statement of good faith belief that the use is not authorized</li>
                      <li>• A statement that the information is accurate and you are authorized to act</li>
                      <li>• Your physical or electronic signature</li>
                    </ul>
                    
                    <div className="mt-6">
                      <h3 className="font-semibold text-red-800 mb-2">DMCA Notice Contact:</h3>
                      <p>Email: dmca@moondog.art</p>
                      <p>Mail: Moon Doggy Art, Legal Department, Barcelona, Spain</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* International Copyright */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                International Copyright Protection
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Berne Convention</h3>
                  <p className="text-sm text-gray-600">
                    Our works are protected in over 170 countries under international copyright law
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">WIPO Treaties</h3>
                  <p className="text-sm text-gray-600">
                    Additional protection under World Intellectual Property Organization agreements
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Local Laws</h3>
                  <p className="text-sm text-gray-600">
                    Copyright protection varies by country but generally provides strong safeguards
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attribution Guidelines */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                Proper Attribution Guidelines
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    When using our content under fair use, please include:
                  </h3>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-medium text-gray-900 mb-2">Example Attribution:</h4>
                    <p className="text-sm text-gray-700 font-mono bg-white p-3 rounded border">
                      "Artwork Title" by Laura Jurkowski, courtesy of Moon Doggy Art (moondog.art). 
                      © 2024 Laura Jurkowski. All rights reserved.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Required Elements:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Artist name (Laura Jurkowski)</li>
                      <li>• Artwork title (if applicable)</li>
                      <li>• Copyright notice (© 2024)</li>
                      <li>• Website reference (moondog.art)</li>
                      <li>• "All rights reserved" statement</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Optional but Appreciated:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Link to original artwork page</li>
                      <li>• Year of creation</li>
                      <li>• Medium and dimensions</li>
                      <li>• Brief description of use</li>
                      <li>• Contact for licensing inquiries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact for Copyright Questions */}
        <Card artistic>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
              Copyright Questions?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you have questions about copyright, licensing, or permitted uses of our content, 
              we're here to help. Contact our legal team for guidance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <Mail className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Legal Team</h3>
                <p className="text-sm text-gray-600">legal@moondog.art</p>
              </div>
              <div>
                <Download className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Licensing</h3>
                <p className="text-sm text-gray-600">licensing@moondog.art</p>
              </div>
              <div>
                <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">DMCA</h3>
                <p className="text-sm text-gray-600">dmca@moondog.art</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LoadingLink href="/contact">
                <div className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  <Mail className="mr-2 h-4 w-4" />
                  General Copyright Questions
                </div>
              </LoadingLink>
              <LoadingLink href="/terms">
                <div className="inline-flex items-center border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                  <FileText className="mr-2 h-4 w-4" />
                  View Terms of Service
                </div>
              </LoadingLink>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                We typically respond to copyright inquiries within 1-2 business days. 
                For urgent matters, please mark your email as "Urgent Copyright Issue."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}