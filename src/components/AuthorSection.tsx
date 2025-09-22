'use client';


import { Download, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function AuthorSection() {
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@example.com', label: 'E-posta' }
  ];

  return (
    <section className="py-20 bg-primary text-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Yazar Hakkında
            </h2>
            <p className="text-lg text-gray-600">
              İshak Alper ile tanışın
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Author Photo */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <img
                  src="/ishak-alper-professional.png"
                  alt="İshak Alper profesyonel fotoğrafı"
                  width={256}
                  height={256}
                  className="w-64 h-64 mx-auto lg:mx-0 rounded-full object-cover border-4 border-accent shadow-lg"
                />
              </div>
            </div>

            {/* Author Bio */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                  İshak Alper
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hakkâri Yeşiltaş köyünde doğdu. Görme engeliyle şekillenen içgörüsü ve 
                  dijital dünyanın gücüyle sıradanın altındaki gerçekleri ortaya çıkarıyor.
                </p>
              </div>

              <div className="prose prose-gray">
                <p className="text-gray-700 leading-relaxed">
                  Kürt kökenli bir ailenin çocuğu olarak doğan İshak Alper, görme engelinin 
                  getirdiği zorlukları fırsata çevirerek, hayata farklı bir perspektiften bakmayı öğrendi. 
                  Dijital araçları kullanarak sesini duyurmaya başlayan yazar, toplumsal önyargıları 
                  sorgulayan ve kişisel dönüşümü destekleyen içerikler üretiyor.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  &quot;Çıplak Gösteren Gözlükler&quot; onun ilk kitabı olup, kendi yaşam deneyimlerinden 
                  yola çıkarak kaleme aldığı derin bir iç hesaplaşma ve dönüşüm hikayesi.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 pt-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-primary hover:text-secondary"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              {/* Media Kit Download */}
              <div className="pt-6">
                <button className="inline-flex items-center space-x-2 btn-secondary">
                  <Download className="w-4 h-4" />
                  <span>Medya Kit İndir</span>
                </button>
                <p className="text-sm text-gray-600 mt-2">
                  Yazar fotoğrafları, biyografi ve basın bilgileri
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

