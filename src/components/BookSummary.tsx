'use client';

import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';

export default function BookSummary() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Kitap Hakkında
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Quote Section */}
            <div className="space-y-6">
              <div className="relative">
                <Quote className="w-12 h-12 text-accent absolute -top-2 -left-2" />
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed pl-8 italic">
                  &quot;Gözlerim az gördükçe, kulaklarım ve içim daha çok duymaya başladı. 
                  İnsanların yüzünü değil, niyetini okumayı öğrendim.&quot;
                </blockquote>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif font-semibold text-primary mb-3">
                  Kitaptan Bir Alıntı
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  &quot;Dijital dünya bana kaçış değil araç oldu. Bir tweet, bir kayıt, bir ses… 
                  İnsanların içini dışarı çıkaran bir köprü. Her kelime bir altın; yeter ki aramayı bil.&quot;
                </p>
              </div>
            </div>

            {/* Summary Section */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-primary">Çıplak Gösteren Gözlükler</strong>, 
                            Hakkâri&apos;nin Yeşiltaş köyünde doğan İshak Alper&apos;in görme engeliyle şekillenen 
                  yaşam öyküsü ve içgörülerini anlatan derin bir otobiyografi.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Kitap, toplumsal önyargıları sorgulayan, dijital dünyanın gücünü keşfeden 
                  ve kişisel dönüşümün yollarını gösteren bir rehber niteliğinde. 
                  Yazarın benzersiz perspektifi, okuyucuları kendi gerçeklerini sorgulamaya davet ediyor.
                </p>

                <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                  <p className="text-sm text-gray-600 mb-2 font-medium">
                    Kitapta Bulacaklarınız:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Görme engeliyle yaşanan deneyimler ve kazanılan perspektifler</li>
                    <li>• Toplumsal önyargılarla mücadele hikayeleri</li>
                    <li>• Dijital araçlarla farkındalık yaratma yöntemleri</li>
                    <li>• Kişisel gelişim ve içsel dönüşüm rehberi</li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <Link 
                  href="/kitap"
                  className="inline-flex items-center space-x-2 btn-primary"
                >
                  <span>Kitap Sayfasına Git</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

