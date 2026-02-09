'use client';

import Image from 'next/image';
import { Play, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-primary flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                  Yeni Kitap
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-secondary leading-tight">
                Çıplak Gösteren
                <span className="block text-accent">Gözlükler</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-accent font-medium">
                Gerçeği görmek cesaret ister.
              </p>
              
              <p className="text-lg text-secondary/80 leading-relaxed max-w-xl">
                İshak Alper'in benzersiz bakış açısıyla, hayatın derinliklerine inen, kişisel dönüşüm ve içsel yolculuklara rehberlik eden derin bir otobiyografi.
              </p>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-accent">127+</div>
                  <div className="text-sm text-secondary/60">Okur Yorumu</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">4.8★</div>
                  <div className="text-sm text-secondary/60">Ortalama Puan</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/kitap" 
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 group"
              >
                Kitabı Satın Al
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2 group"
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Tanıtım İzle
              </button>
            </div>
          </div>

          {/* Right Column - Book Cover & Author Photo */}
          <div className="space-y-6 animate-slide-up">
            {/* Author Photo */}
            <div className="relative mx-auto max-w-md group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative">
                <Image
                  src="/ishak-alper-professional.png"
                  alt="İshak Alper profesyonel fotoğrafı"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-md px-4 py-2 rounded-lg border border-accent/30">
                  <p className="text-accent text-sm font-semibold">Yazar & Danışman</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-accent/20 rounded-lg p-4 text-center hover:bg-white/10 transition-colors duration-300">
                <div className="text-2xl font-bold text-accent">320+</div>
                <div className="text-xs text-secondary/60 mt-1">Sayfa</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-accent/20 rounded-lg p-4 text-center hover:bg-white/10 transition-colors duration-300">
                <div className="text-2xl font-bold text-accent">3</div>
                <div className="text-xs text-secondary/60 mt-1">Format</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-accent/20 rounded-lg p-4 text-center hover:bg-white/10 transition-colors duration-300">
                <div className="text-2xl font-bold text-accent">2024</div>
                <div className="text-xs text-secondary/60 mt-1">Yayın Yılı</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Çıplak Gösteren Gözlükler Tanıtım"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 bg-accent hover:bg-accent/80 text-primary rounded-full p-2 transition-colors"
              aria-label="Kapat"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function X({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
