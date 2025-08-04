import { GiftCardTemplate } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

interface GiftCardPreviewProps {
  template: GiftCardTemplate | null;
  amount: number;
  formData: {
    senderName: string;
    recipientName: string;
    recipientEmail: string;
    message: string;
  };
}

export default function GiftCardPreview({
  template,
  amount,
  formData
}: GiftCardPreviewProps) {
  if (!template) {
    return (
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <p className="text-gray-500">Select a template to preview your gift card</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Preview</h2>
      <div 
        className="rounded-lg p-6 aspect-video relative overflow-hidden"
        style={{
          backgroundColor: template.colors.primary,
          backgroundImage: `url(${template.previewImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative h-full flex flex-col justify-between">
          <div className="text-white">
            <h3 className="text-3xl font-bold">${amount}</h3>
            <p className="text-sm mt-2">Gift Card</p>
          </div>
          
          {formData.recipientName && (
            <div className="text-white">
              <p className="text-sm">To: {formData.recipientName}</p>
              {formData.message && (
                <p className="text-sm mt-1 italic">"{formData.message}"</p>
              )}
              <p className="text-sm mt-1">From: {formData.senderName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}