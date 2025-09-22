'use client';

import { Volume2, Share2, Calendar } from 'lucide-react';
import { excerpts } from '@/data/excerpts';

export default function WeeklyExcerpts() {
  const handleListen = (excerptId: string) => {
    // TTS functionality will be implemented later
    console.log('TTS for excerpt:', excerptId);
  };

  interface Excerpt {
    id: string;
    title: string;
    content: string;
    publishDate: string;
    featured: boolean;
  }

  const handleShare = (excerpt: Excerpt) => {
    if (navigator.share) {
      navigator.share({
        title: excerpt.title,
        text: excerpt.content.substring(0, 100) + '...',
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link kopyalandı!');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Haftalık Bölümler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Her hafta 1.000 karakteri geçmeyen kısa bölümlerle kitabın derinliklerine yolculuk
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {excerpts.map((excerpt, index) => (
            <article 
              key={excerpt.id}
              className="bg-gradient-to-br from-background to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={excerpt.publishDate}>
                    {new Date(excerpt.publishDate).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                {excerpt.featured && (
                  <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    Öne Çıkan
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-semibold text-primary mb-4 leading-tight">
                {excerpt.title}
              </h3>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                {excerpt.content}
              </p>

              {/* Character count */}
              <div className="text-xs text-gray-500 mb-4">
                {excerpt.content.length} karakter
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleListen(excerpt.id)}
                  className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                  aria-label={`${excerpt.title} bölümünü dinle`}
                >
                  <Volume2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Dinle</span>
                </button>
                
                <button
                  onClick={() => handleShare(excerpt)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                  aria-label={`${excerpt.title} bölümünü paylaş`}
                >
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Paylaş</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3">
            Tüm Bölümleri Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
}

