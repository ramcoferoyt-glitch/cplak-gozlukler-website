'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Download, Share2, Play, Eye, Calendar } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  description?: string;
  url: string;
  thumbnail?: string;
  date: string;
  category: string;
  views?: number;
  duration?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
  className?: string;
}

export default function MediaGallery({ items, className = '' }: MediaGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))];

  // Filter items by category
  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const openLightbox = (item: MediaItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const navigateToNext = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIndex);
    setSelectedItem(filteredItems[nextIndex]);
  };

  const navigateToPrevious = () => {
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleShare = (item: MediaItem) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link kopyalandı!');
    }
  };

  const handleDownload = (item: MediaItem) => {
    const link = document.createElement('a');
    link.href = item.url;
    link.download = `${item.title}.${item.type === 'video' ? 'mp4' : 'jpg'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      'all': 'Tümü',
      'promotional': 'Tanıtım',
      'interviews': 'Röportajlar',
      'events': 'Etkinlikler',
      'behind-scenes': 'Kamera Arkası',
      'book-covers': 'Kitap Kapakları',
      'author-photos': 'Yazar Fotoğrafları'
    };
    return labels[category] || category;
  };

  return (
    <div className={`${className}`}>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => openLightbox(item, index)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={item.thumbnail || item.url}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === 'video' ? (
                    <Play className="w-12 h-12 text-white" />
                  ) : (
                    <Eye className="w-12 h-12 text-white" />
                  )}
                </div>
              </div>

              {/* Type Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  item.type === 'video' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-blue-500 text-white'
                }`}>
                  {item.type === 'video' ? 'Video' : 'Fotoğraf'}
                </span>
              </div>

              {/* Duration for videos */}
              {item.type === 'video' && item.duration && (
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 text-xs font-medium bg-black bg-opacity-75 text-white rounded">
                    {item.duration}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
              )}
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{new Date(item.date).toLocaleDateString('tr-TR')}</span>
                </div>
                {item.views && (
                  <div className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    <span>{item.views.toLocaleString()} görüntüleme</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Eye className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Medya bulunamadı</h3>
          <p className="text-gray-600">Bu kategoride henüz medya içeriği bulunmuyor.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-colors"
              aria-label="Kapat"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={navigateToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-colors"
                  aria-label="Önceki"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={navigateToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-colors"
                  aria-label="Sonraki"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Content */}
            <div className="bg-white rounded-lg overflow-hidden">
              {selectedItem.type === 'video' ? (
                <VideoPlayer
                  title={selectedItem.title}
                  description={selectedItem.description}
                  videoUrl={selectedItem.url}
                  thumbnail={selectedItem.thumbnail}
                  duration={selectedItem.duration}
                />
              ) : (
                <div>
                  <div className="relative aspect-video">
                    <Image
                      src={selectedItem.url}
                      alt={selectedItem.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                      {selectedItem.title}
                    </h3>
                    {selectedItem.description && (
                      <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(selectedItem.date).toLocaleDateString('tr-TR')}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleShare(selectedItem)}
                          className="flex items-center space-x-1 text-sm text-primary hover:text-secondary transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                          <span>Paylaş</span>
                        </button>
                        <button
                          onClick={() => handleDownload(selectedItem)}
                          className="flex items-center space-x-1 text-sm text-primary hover:text-secondary transition-colors"
                        >
                          <Download className="w-4 h-4" />
                          <span>İndir</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Counter */}
            {filteredItems.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {filteredItems.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

