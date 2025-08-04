import { useState } from 'react';
import { GiftCardTemplate } from '@/lib/types';
import { giftCardTemplates } from '@/lib/data';
import GiftCardPreview from './GiftCardPreview';
import Button from '@/components/ui/Button';
import { Calendar } from 'lucide-react';
import Input from '../ui/Input';

interface GiftCardBuilderProps {
  onSubmit: (data: any) => Promise<void>;
  loading?: boolean;
}

export default function GiftCardBuilder({ onSubmit, loading }: GiftCardBuilderProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<GiftCardTemplate | null>(null);
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [giftType, setGiftType] = useState<'self' | 'someone'>('someone');
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    recipientName: '',
    recipientEmail: '',
    message: '',
    quantity: 1,
    deliveryDate: ''
  });

  const predefinedAmounts = [50, 100, 150, 200, 250, 500];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTemplate) return;

    onSubmit({
      ...formData,
      amount: customAmount ? parseFloat(customAmount) : amount,
      designId: selectedTemplate.id,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Gift Type Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">This gift card is for:</label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setGiftType('self')}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                giftType === 'self'
                  ? 'border-purple-600 bg-purple-50 text-purple-700'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              Myself
            </button>
            <button
              type="button"
              onClick={() => setGiftType('someone')}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                giftType === 'someone'
                  ? 'border-purple-600 bg-purple-50 text-purple-700'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              Someone Else
            </button>
          </div>
        </div>

        {/* Amount Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Select Amount</label>
          <div className="grid grid-cols-3 gap-3">
            {predefinedAmounts.map((value) => (
              <button
                type="button"
                key={value}
                onClick={() => {
                  setAmount(value);
                  setCustomAmount('');
                }}
                className={`py-3 px-4 rounded-lg border-2 transition-colors ${
                  amount === value && !customAmount
                    ? 'border-purple-600 bg-purple-50 text-purple-700 font-medium'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                ${value}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Or enter custom amount:
            </label>
            <Input
              type="number"
              min="10"
              step="0.01"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setAmount(0);
              }}
              placeholder="Enter amount"
              className="w-full max-w-[200px]"
            />
          </div>
        </div>

        {/* Template Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Choose Design</label>
          <div className="grid grid-cols-2 gap-4">
            {giftCardTemplates.map((template) => (
              <button
                type="button"
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedTemplate?.id === template.id
                    ? 'border-purple-600 scale-[1.02] shadow-md'
                    : 'border-transparent hover:border-purple-300'
                }`}
              >
                <img 
                  src={template.previewImage} 
                  alt={template.name}
                  className="w-full h-32 object-cover rounded"
                />
                <p className="mt-2 text-sm font-medium">{template.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Sender Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Your Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              name="senderName"
              value={formData.senderName}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
            />
            <Input
              type="email"
              name="senderEmail"
              value={formData.senderEmail}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        {/* Recipient Information */}
        {giftType === 'someone' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Recipient Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="recipientName"
                value={formData.recipientName}
                onChange={handleInputChange}
                placeholder="Recipient's Name"
                required
              />
              <Input
                type="email"
                name="recipientEmail"
                value={formData.recipientEmail}
                onChange={handleInputChange}
                placeholder="Recipient's Email"
                required
              />
            </div>
          </div>
        )}

        {/* Additional Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Additional Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <Input
                type="number"
                name="quantity"
                min="1"
                max="10"
                value={formData.quantity}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Date
              </label>
              <div className="relative">
                <Input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Personal Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              placeholder="Add a personal message to your gift card..."
              maxLength={200}
            />
            <p className="mt-2 text-sm text-gray-500">
              {formData.message.length}/200 characters
            </p>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
          loading={loading}
        >
          Continue to Payment
        </Button>
      </form>

      {/* Preview Section */}
      <div className="lg:sticky lg:top-24 space-y-6">
        <h2 className="text-xl font-medium text-gray-900">Preview</h2>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <GiftCardPreview
            template={selectedTemplate}
            amount={customAmount ? parseFloat(customAmount) : amount}
            formData={formData}
          />
        </div>
      </div>
    </div>
  );
}