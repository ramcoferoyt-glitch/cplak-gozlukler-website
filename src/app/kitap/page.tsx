'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Star, ShoppingCart, Heart, Share2, Eye, Clock, BookOpen } from 'lucide-react';
import { generateJSONLD } from '@/lib/seo';
import { useEffect } from 'react';

export default function BookPage() {
  useEffect(() => {
    // Add JSON-LD schema for book
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(generateJSONLD({
      type: 'book',
      url: '/kitap',
      title: 'Çıplak Gösteren Gözlükler - Kitap Detayları',
      description: 'Çıplak Gösteren Gözlükler kitabının detayları, format seçenekleri, okuyucu yorumları ve satın alma bilgileri.'
    }));
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const bookFormats = [
    {
      id: 'print',
      name: 'Basılı Kitap',
      price: '₺89',
      originalPrice: '₺120',
      description: 'Kaliteli kağıt, sert kapak, 320 sayfa',
      delivery: '2-3 iş günü kargo',
      features: ['Sert kapak', 'Premium kağıt', 'ISBN: 978-605-XXXX-XX-X']
    },
    {
      id: 'ebook',
      name: 'E-kitap',
      price: '₺39',
      originalPrice: '₺59',
      description: 'PDF ve EPUB formatları',
      delivery: 'Anında e-posta ile teslim',
      features: ['PDF format', 'EPUB format', 'Tüm cihazlarda okunabilir'],
      popular: true
    },
    {
      id: 'audiobook',
      name: 'Sesli Kitap',
      price: '₺59',
      originalPrice: '₺89',
      description: 'Profesyonel seslendirme, 8 saat',
      delivery: 'Anında indirme linki',
      features: ['MP3 format', '8 saat süre', 'Profesyonel seslendirme']
    }
  ];

  const reviews = [
    {
      name: 'Ayşe K.',
      rating: 5,
      comment: 'Gerçekten etkileyici bir kitap. Yazarın perspektifi çok değerli.',
      date: '15 Ocak 2024'
    },
    {
      name: 'Mehmet S.',
      rating: 5,
      comment: 'Hayata bakış açımı değiştiren nadir kitaplardan biri.',
      date: '10 Ocak 2024'
    },
    {
      name: 'Zeynep A.',
      rating: 4,
      comment: 'Derin ve düşündürücü. Herkese tavsiye ederim.',
      date: '5 Ocak 2024'
    }
  ];

  const bookStats = [
    { icon: <Eye className="w-5 h-5" />, label: 'Sayfa', value: '320' },
    { icon: <Clock className="w-5 h-5" />, label: 'Okuma Süresi', value: '6-8 saat' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Kategori', value: 'Otobiyografi' },
    { icon: <Star className="w-5 h-5" />, label: 'Değerlendirme', value: '4.8/5' }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-white to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <Image
                  src="/book-cover.png"
                  alt="Çıplak Gösteren Gözlükler kitap kapağı"
                  width={400}
                  height={400}
                  className="w-full max-w-md h-auto rounded-lg shadow-2xl"
                  priority
                />
                <div className="absolute -top-4 -right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  Yeni Çıktı
                </div>
              </div>
              
              {/* Book Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0">
                {bookStats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-center text-primary mb-1">
                      {stat.icon}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <div className="font-semibold text-primary">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                  Çıplak Gösteren Gözlükler
                </h1>
                <p className="text-xl text-secondary font-medium mb-2">
                  Gerçeği görmek cesaret ister.
                </p>
                <p className="text-lg text-gray-600">
                  Yazar: <span className="font-semibold text-primary">İshak Alper</span>
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">(4.8/5 - 127 değerlendirme)</span>
              </div>

              {/* Description */}
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  Hakkâri&apos;nin Yeşiltaş köyünde doğan İshak Alper&apos;in görme engeliyle şekillenen 
                  yaşam öyküsü ve içgörülerini anlatan derin bir otobiyografi. Kitap, toplumsal 
                  önyargıları sorgulayan, dijital dünyanın gücünü keşfeden ve kişisel dönüşümün 
                  yollarını gösteren bir rehber niteliğinde.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Yazarın benzersiz perspektifi, okuyucuları kendi gerçeklerini sorgulamaya 
                  davet ediyor. Çocukluktan dijital çağa uzanan bu yolculuk, hem bireysel 
                  hem de toplumsal dönüşümün mümkün olduğunu gösteriyor.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary flex items-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Hemen Satın Al</span>
                </button>
                <button className="btn-secondary flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>Favorilere Ekle</span>
                </button>
                <button className="btn-secondary flex items-center space-x-2">
                  <Share2 className="w-4 h-4" />
                  <span>Paylaş</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section id="formatlar" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Format Seçenekleri
            </h2>
            <p className="text-lg text-gray-600">
              Size en uygun formatı seçin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bookFormats.map((format) => (
              <div
                key={format.id}
                className={`relative p-6 rounded-xl border-2 transition-all hover:shadow-lg ${
                  format.popular 
                    ? 'border-primary bg-primary/5' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {format.popular && (
                  <div className="absolute -top-3 left-6 bg-accent text-white text-sm px-3 py-1 rounded-full font-medium">
                    En Popüler
                  </div>
                )}
                
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-primary">
                    {format.name}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-primary">{format.price}</span>
                      <span className="text-lg text-gray-500 line-through">{format.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-600">{format.description}</p>
                    <p className="text-xs text-accent font-medium">{format.delivery}</p>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-700">
                    {format.features.map((feature, index) => (
                      <li key={index} className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    format.popular 
                      ? 'btn-primary' 
                      : 'btn-secondary'
                  }`}>
                    {format.price} - Satın Al
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="incelemeler" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Okuyucu Yorumları
            </h2>
            <p className="text-lg text-gray-600">
              Kitabı okuyan okuyucularımızın deneyimleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-primary">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">&quot;{review.comment}&quot;</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">
              Tüm Yorumları Görüntüle
            </button>
          </div>
        </div>
      </section>

      {/* Sample Chapter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Örnek Bölüm
              </h2>
              <p className="text-lg text-gray-600">
                Kitaptan bir bölümü okuyarak tadına bakın
              </p>
            </div>

            <div className="bg-gradient-to-br from-background to-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-6">
                Birinci Bölüm: Köy Yolları
              </h3>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çocukluğum köy yollarında geçti; çıplak ayak, gönül rehberi. Hakkâri&apos;nin 
                  Yeşiltaş köyünde doğduğum o günden beri, gözlerim az gördükçe, kulaklarım 
                  ve içim daha çok duymaya başladı. Bu, sadece fiziksel bir durum değildi; 
                  ruhsal bir dönüşümün başlangıcıydı.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  İnsanların yüzünü değil, niyetini okumayı öğrendim. Seslerindeki titremeleri, 
                  nefeslerindeki değişimleri, adımlarındaki kararsızlıkları... Bunlar benim 
                  için birer rehber oldu. &quot;Çakal&quot; diye damgalanan mizacın nasıl yalnızca 
                  dürüstlüğe tahammülsüz toplumun icadı olduğunu anladım.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Bu bölümde, o köy yollarında öğrendiğim ilk dersleri, ailemle yaşadığım 
                  zorlukları ve görme engelimin bana kazandırdığı farklı perspektifi 
                  anlatıyorum...
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic mb-4">
                  Bu örnek bölüm kitabın ilk sayfalarından alınmıştır. Devamını okumak için kitabı satın alabilirsiniz.
                </p>
                <button className="btn-primary">
                  Kitabın Tamamını Satın Al
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

