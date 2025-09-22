'use client';

import VideoPlayer from './VideoPlayer';

export default function VideoSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">
            8 Saniyelik Sinematik Reklam
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Çıplak Gösteren Gözlükler kitabının ruhunu yansıtan özel olarak hazırlanmış sinematik reklam filmi. 
            İshak Alper&apos;in yaşam öyküsünden ilham alan bu kısa film, kitabın derinliğini hissettiriyor.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <VideoPlayer
            title="Çıplak Gösteren Gözlükler - Sinematik Reklam"
            description="Hakkâri'nin dağlarından dijital dünyaya uzanan bir yaşam öyküsü. Görme engelli bir yazarın cesur yolculuğu ve toplumsal önyargılara karşı verdiği mücadele. Bu 8 saniyelik sinematik reklam, kitabın ruhunu ve İshak Alper'in benzersiz perspektifini yansıtıyor."
            thumbnail="/video-thumbnail.jpg"
            videoUrl="/cinematic-ad.mp4"
            duration="0:08"
            className="shadow-2xl"
          />
        </div>

        {/* Video Details */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">Reklam Filmi Hakkında</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Teknik Detaylar</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Süre: 8 saniye</li>
                  <li>• Çözünürlük: 4K (3840x2160)</li>
                  <li>• Format: MP4</li>
                  <li>• Ses: Stereo</li>
                  <li>• Altyazı: Türkçe</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Yaratım Süreci</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Senaryo: İshak Alper</li>
                  <li>• Yönetmen: Manus AI</li>
                  <li>• Görsel Efekt: AI Generated</li>
                  <li>• Müzik: Orijinal Kompozisyon</li>
                  <li>• Renk Düzeltme: Sinematik Ton</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Konsept ve Mesaj</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bu sinematik reklam, görme engelli bir yazarın iç dünyasını ve dış dünyayla kurduğu bağı görselleştiriyor. 
                Karanlıktan aydınlığa, sessizlikten sese, yalnızlıktan bağlantıya uzanan bir yolculuk anlatıyor. 
                Her kare, kitabın ana temalarını - farkındalık, cesaret, dönüşüm - sembolik olarak yansıtıyor.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-serif font-bold mb-4">Kitabın Tam Hikayesini Keşfedin</h3>
            <p className="text-lg mb-6 opacity-90">
              Bu 8 saniyelik reklam sadece başlangıç. 320 sayfalık kitapta sizi bekleyen derin hikayeyi keşfedin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kitap"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Kitabı İncele
              </a>
              <a
                href="/bolumler"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Haftalık Bölümler
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

