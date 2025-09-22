'use client';

import { useState } from 'react';
import { X, CreditCard, ShoppingCart, Download, Shield, Check } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFormat: string;
  formatDetails: {
    name: string;
    price: number;
    currency: string;
    description: string;
  };
}

export default function PaymentModal({ isOpen, onClose, selectedFormat, formatDetails }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'gumroad'>('stripe');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  if (!isOpen) return null;

  const handlePayment = async () => {
    if (!email || !agreedToTerms) {
      alert('Lütfen e-posta adresinizi girin ve şartları kabul edin.');
      return;
    }

    setIsProcessing(true);

    try {
      const endpoint = paymentMethod === 'stripe' 
        ? '/api/payment/create-checkout-session'
        : '/api/payment/gumroad-redirect';

      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          format: selectedFormat,
          email: email
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to payment page
        if (paymentMethod === 'stripe') {
          window.location.href = data.checkout_url;
        } else {
          window.location.href = data.redirect_url;
        }
      } else {
        alert(data.error || 'Ödeme işlemi başlatılamadı');
      }
    } catch (error) {
      alert('Ödeme işlemi sırasında bir hata oluştu');
    } finally {
      setIsProcessing(false);
    }
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: currency === 'TRY' ? 'TRY' : 'USD',
      minimumFractionDigits: 0
    }).format(price / 100);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-serif font-semibold text-primary">Satın Al</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Product Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900">Çıplak Gösteren Gözlükler</h3>
            <p className="text-sm text-gray-600 mt-1">İshak Alper</p>
            <div className="flex items-center justify-between mt-3">
              <div>
                <p className="font-medium text-primary">{formatDetails.name}</p>
                <p className="text-xs text-gray-500">{formatDetails.description}</p>
              </div>
              <p className="text-lg font-bold text-primary">
                {formatPrice(formatDetails.price, formatDetails.currency)}
              </p>
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-posta Adresi *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="ornek@email.com"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Satın alma onayı ve indirme linki bu adrese gönderilecektir.
            </p>
          </div>

          {/* Payment Method Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Ödeme Yöntemi
            </label>
            <div className="space-y-3">
              <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  checked={paymentMethod === 'stripe'}
                  onChange={(e) => setPaymentMethod(e.target.value as 'stripe')}
                  className="text-primary focus:ring-primary"
                />
                <div className="ml-3 flex items-center">
                  <CreditCard className="w-5 h-5 text-gray-600 mr-2" />
                  <div>
                    <p className="font-medium">Kredi Kartı</p>
                    <p className="text-xs text-gray-500">Stripe ile güvenli ödeme</p>
                  </div>
                </div>
              </label>

              <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="gumroad"
                  checked={paymentMethod === 'gumroad'}
                  onChange={(e) => setPaymentMethod(e.target.value as 'gumroad')}
                  className="text-primary focus:ring-primary"
                />
                <div className="ml-3 flex items-center">
                  <ShoppingCart className="w-5 h-5 text-gray-600 mr-2" />
                  <div>
                    <p className="font-medium">Gumroad</p>
                    <p className="text-xs text-gray-500">PayPal, Apple Pay ve daha fazlası</p>
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Digital Product Info */}
          {(selectedFormat === 'ebook' || selectedFormat === 'audiobook') && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <Download className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-900">Dijital Ürün</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Satın alma işlemi tamamlandıktan sonra indirme linki e-posta adresinize gönderilecektir.
                    Link 7 gün boyunca geçerli olacaktır.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Security Info */}
          <div className="flex items-center text-sm text-gray-600">
            <Shield className="w-4 h-4 mr-2 text-green-600" />
            <span>256-bit SSL şifreleme ile güvenli ödeme</span>
          </div>

          {/* Terms Agreement */}
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 text-primary focus:ring-primary"
            />
            <span className="ml-2 text-sm text-gray-600">
              <a href="/kullanim-sartlari" className="text-primary hover:underline" target="_blank">
                Kullanım şartlarını
              </a> ve{' '}
              <a href="/gizlilik-politikasi" className="text-primary hover:underline" target="_blank">
                gizlilik politikasını
              </a> kabul ediyorum.
            </span>
          </label>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            disabled={isProcessing || !email || !agreedToTerms}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isProcessing ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                İşleniyor...
              </div>
            ) : (
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                {formatPrice(formatDetails.price, formatDetails.currency)} Öde
              </div>
            )}
          </button>

          {/* Money Back Guarantee */}
          <div className="text-center">
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Check className="w-4 h-4 text-green-600 mr-1" />
              <span>7 gün para iade garantisi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

