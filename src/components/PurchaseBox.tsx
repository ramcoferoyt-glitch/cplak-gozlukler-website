'use client';

import { Check, Shield, Truck, CreditCard } from 'lucide-react';
import { useState } from 'react';

export default function PurchaseBox() {
  const [selectedFormat, setSelectedFormat] = useState('ebook');

  const formats = [
    {
      id: 'print',
      name: 'Basılı Kitap',
      price: '₺89',
      originalPrice: '₺120',
      description: 'Kaliteli kağıt, sert kapak',
      delivery: '2-3 iş günü'
    },
    {
      id: 'ebook',
      name: 'E-kitap',
      price: '₺39',
      originalPrice: '₺59',
      description: 'PDF, EPUB formatları',
      delivery: 'Anında teslim',
      popular: true
    },
    {
      id: 'audiobook',
      name: 'Sesli Kitap',
      price: '₺59',
      originalPrice: '₺89',
      description: 'Profesyonel seslendirme',
      delivery: 'Anında teslim'
    }
  ];

  const trustBadges = [
    { icon: <Shield className="w-4 h-4" />, text: 'Güvenli Ödeme' },
    { icon: <Truck className="w-4 h-4" />, text: 'Hızlı Teslimat' },
    { icon: <CreditCard className="w-4 h-4" />, text: '256-bit SSL' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Kitabı Satın Al
            </h2>
            <p className="text-lg text-gray-600">
              Tercih ettiğiniz formatta hemen sahip olun
            </p>
          </div>

          <div className="bg-gradient-to-br from-background to-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* Format Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-serif font-semibold text-primary mb-6">
                Format Seçin
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {formats.map((format) => (
                  <div
                    key={format.id}
                    className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedFormat === format.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedFormat(format.id)}
                  >
                    {format.popular && (
                      <div className="absolute -top-2 left-4 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                        En Popüler
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">{format.name}</h4>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedFormat === format.id
                            ? 'border-primary bg-primary'
                            : 'border-gray-300'
                        }`}>
                          {selectedFormat === format.id && (
                            <Check className="w-2 h-2 text-white m-0.5" />
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">{format.price}</span>
                        <span className="text-sm text-gray-500 line-through">{format.originalPrice}</span>
                      </div>
                      
                      <p className="text-sm text-gray-600">{format.description}</p>
                      <p className="text-xs text-accent font-medium">{format.delivery}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase Button */}
            <div className="text-center mb-8">
              <button className="btn-primary text-lg px-12 py-4 w-full md:w-auto">
                {formats.find(f => f.id === selectedFormat)?.price} - Hemen Satın Al
              </button>
              <p className="text-sm text-gray-600 mt-2">
                30 gün para iade garantisi
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-600">
                  {badge.icon}
                  <span className="text-sm">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Kabul Edilen Ödeme Yöntemleri</p>
              <div className="flex justify-center space-x-4">
                <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">VISA</span>
                </div>
                <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">MC</span>
                </div>
                <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">AMEX</span>
                </div>
                <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs font-bold">PP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

