'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-primary flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary leading-tight">
                İshak Alper –
              </h1>
              <p className="text-xl md:text-2xl text-accent font-medium">
                Gerçeği görmek cesaret ister.
              </p>
              <p className="text-lg text-secondary leading-relaxed max-w-xl">
                Yazarın benzersiz bakış açısıyla, hayatın derinliklerine inen, kişisel dönüşüm ve içsel yolculuklara rehberlik eden eserler.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/kitap" className="btn-primary text-lg px-8 py-4 flex items-center justify-center">
                Kitabı Satın Al
              </a>
            </div>
          </div>

          {/* Right Column - Book Cover & Video */}
          <div className="space-y-6 animate-slide-up">
            {/* Author Photo */}
            <div className="relative mx-auto max-w-md">
              <div className="relative group">
                <Image
                  src="/ishak-alper-professional.png"
                  alt="İshak Alper profesyonel fotoğrafı"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg shadow-2xl transition-transform group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

