'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MediaGallery from '@/components/MediaGallery';
import { Camera, Video, Calendar, Eye } from 'lucide-react';

export default function MediaPage() {
  // Mock media data
  const mediaItems = [
    {
      id: '1',
      type: 'video' as const,
      title: 'Çıplak Gösteren Gözlükler - Sinematik Reklam',
      description: 'Kitabın ruhunu yansıtan 8 saniyelik sinematik reklam filmi. Hakkâri&apos;nin dağlarından dijital dünyaya uzanan yaşam öyküsü.',
      url: '/media/videos/cinematic-ad.mp4',
      thumbnail: '/media/thumbnails/cinematic-ad.jpg',
      date: '2024-01-15',
      category: 'promotional',
      views: 15420,
      duration: '0:08'
    },
    {
      id: '2',
      type: 'video' as const,
      title: 'İshak Alper ile Röportaj - Kitap Yazma Süreci',
      description: 'Yazarın kitap yazma sürecini, yaşadığı zorlukları ve ilham kaynaklarını anlattığı özel röportaj.',
      url: '/media/videos/interview-writing.mp4',
      thumbnail: '/media/thumbnails/interview-writing.jpg',
      date: '2024-01-10',
      category: 'interviews',
      views: 8750,
      duration: '12:34'
    },
    {
      id: '3',
      type: 'image' as const,
      title: 'Kitap Kapağı - Final Tasarım',
      description: 'Çıplak Gösteren Gözlükler kitabının final kapak tasarımı. Minimalist ve etkileyici görsel dil.',
      url: '/media/images/book-cover-final.jpg',
      date: '2024-01-05',
      category: 'book-covers',
      views: 3240
    },
    {
      id: '4',
      type: 'video' as const,
      title: 'Kitap Lansmanı - Canlı Yayın',
      description: 'Çıplak Gösteren Gözlükler kitabının lansmanından özel anlar ve yazarın konuşması.',
      url: '/media/videos/book-launch.mp4',
      thumbnail: '/media/thumbnails/book-launch.jpg',
      date: '2024-01-20',
      category: 'events',
      views: 12680,
      duration: '45:12'
    },
    {
      id: '5',
      type: 'image' as const,
      title: 'Yazar Portresi - Profesyonel Çekim',
      description: 'İshak Alper\'in profesyonel stüdyo çekiminden portre fotoğrafları.',
      url: '/media/images/author-portrait.jpg',
      date: '2023-12-20',
      category: 'author-photos',
      views: 5670
    },
    {
      id: '6',
      type: 'video' as const,
      title: 'Kamera Arkası - Reklam Çekimi',
      description: 'Sinematik reklam filminin çekim sürecinden kamera arkası görüntüleri.',
      url: '/media/videos/behind-scenes.mp4',
      thumbnail: '/media/thumbnails/behind-scenes.jpg',
      date: '2024-01-12',
      category: 'behind-scenes',
      views: 4320,
      duration: '6:45'
    },
    {
      id: '7',
      type: 'image' as const,
      title: 'Kitap İç Sayfaları - Tipografi',
      description: 'Kitabın iç sayfa tasarımı ve tipografi çalışmaları. Okunabilirlik odaklı tasarım.',
      url: '/media/images/book-pages.jpg',
      date: '2023-12-15',
      category: 'book-covers',
      views: 2890
    },
    {
      id: '8',
      type: 'video' as const,
      title: 'Radyo Röportajı - Yaşam Hikayesi',
      description: 'İshak Alper\'in yaşam hikayesini anlattığı radyo röportajının video kaydı.',
      url: '/media/videos/radio-interview.mp4',
      thumbnail: '/media/thumbnails/radio-interview.jpg',
      date: '2024-01-25',
      category: 'interviews',
      views: 6540,
      duration: '28:15'
    }
  ];

  const totalViews = mediaItems.reduce((sum, item) => sum + (item.views || 0), 0);
  const videoCount = mediaItems.filter(item => item.type === 'video').length;
  const imageCount = mediaItems.filter(item => item.type === 'image').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Video & Medya Galerisi
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                Çıplak Gösteren Gözlükler kitabının görsel hikayesi. Sinematik reklamdan 
                kamera arkası görüntülere, röportajlardan fotoğraf çekimlerine kadar 
                tüm medya içerikleri burada.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-3">
                    <Video className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{videoCount}</div>
                  <div className="text-sm opacity-80">Video</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-3">
                    <Camera className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{imageCount}</div>
                  <div className="text-sm opacity-80">Fotoğraf</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-3">
                    <Eye className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{totalViews.toLocaleString()}</div>
                  <div className="text-sm opacity-80">Toplam Görüntüleme</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-3">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold mb-1">2024</div>
                  <div className="text-sm opacity-80">Aktif Yıl</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Gallery */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <MediaGallery items={mediaItems} />
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Öne Çıkan İçerikler
              </h2>
              <p className="text-lg text-gray-600">
                En çok izlenen ve beğenilen medya içerikleri
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sinematic Ad */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Video className="w-6 h-6 text-red-500 mr-3" />
                  <h3 className="font-semibold text-gray-900">Sinematik Reklam</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  8 saniyelik güçlü mesaj ile kitabın ruhunu yansıtan sinematik reklam filmi.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>15.420 görüntüleme</span>
                  <span>0:08</span>
                </div>
              </div>

              {/* Book Launch */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Video className="w-6 h-6 text-red-500 mr-3" />
                  <h3 className="font-semibold text-gray-900">Kitap Lansmanı</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Kitabın lansmanından özel anlar ve yazarın etkileyici konuşması.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>12.680 görüntüleme</span>
                  <span>45:12</span>
                </div>
              </div>

              {/* Author Portrait */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Camera className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="font-semibold text-gray-900">Yazar Portresi</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  İshak Alper&apos;in profesyonel stüdyo çekiminden portre fotoğrafları.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>5.670 görüntüleme</span>
                  <span>Fotoğraf</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Yeni İçeriklerden Haberdar Olun
            </h2>
            <p className="text-lg text-white opacity-90 mb-8">
              Yeni videolar, fotoğraflar ve özel içerikler için bültene katılın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              />
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Katıl
              </button>
            </div>
            <p className="text-xs text-white opacity-70 mt-4">
              GDPR uyumlu. İstediğiniz zaman abonelikten çıkabilirsiniz.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

