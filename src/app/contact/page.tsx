// src/app/contact/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Instagram, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Loading from '@/components/ui/Loading';
import { Card, CardContent } from '@/components/ui/Card';
import { sampleArtist } from '@/lib/data';
import { validators } from '@/lib/validation';

export default function ContactPage() {
  const [pageLoading, setPageLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'commission', label: 'Commission Request' },
    { value: 'purchase', label: 'Purchase Inquiry' },
    { value: 'exhibition', label: 'Exhibition/Gallery' },
    { value: 'press', label: 'Press/Media' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    const nameError = validators.required(formData.name, 'Name');
    if (nameError) newErrors.name = nameError;
    
    const emailError = validators.email(formData.email);
    if (emailError) newErrors.email = emailError;
    
    const subjectError = validators.required(formData.subject, 'Subject');
    if (subjectError) newErrors.subject = subjectError;
    
    const messageError = validators.required(formData.message, 'Message');
    if (messageError) newErrors.message = messageError;
    
    const messageMinLength = validators.minLength(formData.message, 10, 'Message');
    if (!messageError && messageMinLength) newErrors.message = messageMinLength;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '', inquiryType: 'general' });
  };

  if (pageLoading) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-r from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Loading size="lg" text="Loading contact information..." />
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 via-white to-pink-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're interested in commissioning a piece, have questions about existing works, 
            or simply want to connect, I'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            <Card artistic>
              <CardContent className="p-6">
                <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-500">Email</p>
                      <a 
                        href={`mailto:${sampleArtist.contact.email}`}
                        className="text-gray-900 hover:text-purple-600 transition-colors duration-200 break-all"
                      >
                        {sampleArtist.contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-500">Phone</p>
                      <a 
                        href={`tel:${sampleArtist.contact.phone}`}
                        className="text-gray-900 hover:text-purple-600 transition-colors duration-200"
                      >
                        {sampleArtist.contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-900">{sampleArtist.contact.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-500">Instagram</p>
                      <a 
                        href={`https://instagram.com/${sampleArtist.contact.social.instagram?.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-purple-600 transition-colors duration-200"
                      >
                        {sampleArtist.contact.social.instagram}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Studio Hours */}
            <Card artistic>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-purple-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Studio Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900">By Appointment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card artistic>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-5 w-5 text-purple-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  I typically respond to inquiries within 24-48 hours. For urgent matters, 
                  please feel free to call directly.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    General inquiries: 24 hours
                  </div>
                  <div className="flex items-center text-blue-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Commission requests: 48 hours
                  </div>
                  <div className="flex items-center text-purple-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Press inquiries: Same day
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card artistic>
              <CardContent className="p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                      Send a Message
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Inquiry Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Type of Inquiry
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Input
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                          error={errors.name}
                        />
                        <Input
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                          error={errors.email}
                        />
                      </div>
                      
                      <Input
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                        error={errors.subject}
                      />
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          placeholder="Tell me about your project, questions, or how I can help..."
                          className={`block w-full rounded-lg border ${
                            errors.message ? 'border-red-500' : 'border-gray-300'
                          } bg-white px-3 py-2 text-sm placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none`}
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                        )}
                        <p className="mt-1 text-xs text-gray-500">
                          {formData.message.length}/500 characters
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          type="submit" 
                          loading={isSubmitting}
                          className="w-full sm:w-auto order-2 sm:order-1"
                          size="lg"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                        
                        <Button 
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setFormData({ name: '', email: '', subject: '', message: '', inquiryType: 'general' });
                            setErrors({});
                          }}
                          className="w-full sm:w-auto order-1 sm:order-2"
                          size="lg"
                        >
                          Clear Form
                        </Button>
                      </div>
                      
                      <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                        <p className="mb-2">
                          <strong>What to expect:</strong>
                        </p>
                        <ul className="space-y-1 text-xs">
                          <li>• Personal response within 24-48 hours</li>
                          <li>• Detailed information about available works</li>
                          <li>• Commission consultation scheduling</li>
                          <li>• Shipping and pricing details</li>
                        </ul>
                      </div>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}