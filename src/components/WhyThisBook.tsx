'use client';

import { Eye, Heart, BookOpen } from 'lucide-react';

export default function WhyThisBook() {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Duygusal Dönüşüm",
      description: "Görme engeliyle şekillenen benzersiz bir perspektiften hayata bakış ve içsel dönüşüm hikayesi."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pratik Öğretiler",
      description: "Günlük yaşamda uygulanabilir, gerçek deneyimlerden çıkarılmış değerli yaşam dersleri."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Kök Hikaye",
      description: "Hakkâri'nin köylerinden dijital dünyaya uzanan otantik bir yaşam öyküsü ve hesaplaşma."
    }
  ];

  return (
    <section className="py-20 bg-white" id="main-content">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Neden Bu Kitap?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Maskeleri indiren, vicdanı uyandıran bir kitapla tanışın
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

