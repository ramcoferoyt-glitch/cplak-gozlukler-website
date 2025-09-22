'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Calendar, Clock, Eye, Tag, ArrowRight, Search, Filter } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'kitap-yazma-sureci',
      title: 'Çıplak Gösteren Gözlükler Nasıl Doğdu?',
      excerpt: 'Kitabımı yazma sürecinde yaşadığım deneyimler, zorluklarla karşılaştığım anlar ve bu yolculukta beni motive eden unsurlar hakkında...',
      content: 'Bu kitabı yazmaya karar verdiğim an, aslında çok uzun zamandır içimde biriken hikayelerin dışarı çıkma zamanının geldiğini hissettiğim andı.',
      publishDate: '2024-01-20',
      readTime: '8 dakika',
      views: 1250,
      category: 'Yazarlık',
      featured: true,
      image: '/blog-1.jpg'
    },
    {
      id: 'dijital-erisilebilirlik',
      title: 'Dijital Dünyada Erişilebilirlik: Herkes İçin İnternet',
      excerpt: 'Görme engelli bir kullanıcı olarak dijital platformlarda karşılaştığım zorluklar ve çözüm önerileri...',
      content: 'İnternetin herkes için erişilebilir olması, sadece teknik bir konu değil, aynı zamanda sosyal adalet meselesidir.',
      publishDate: '2024-01-15',
      readTime: '6 dakika',
      views: 890,
      category: 'Teknoloji',
      featured: false,
      image: '/blog-2.jpg'
    },
    {
      id: 'kisisel-gelisim-yolculugu',
      title: 'Kişisel Gelişim: İçsel Yolculuğun Haritası',
      excerpt: 'Kişisel gelişimin sadece kitap okumak olmadığını, gerçek değişimin nasıl gerçekleştiğini anlattığım yazı...',
      content: 'Kişisel gelişim, modası geçmeyen bir trend değil, hayat boyu süren bir yolculuktur.',
      publishDate: '2024-01-10',
      readTime: '10 dakika',
      views: 2100,
      category: 'Kişisel Gelişim',
      featured: true,
      image: '/blog-3.jpg'
    },
    {
      id: 'sosyal-medya-farkindalik',
      title: 'Sosyal Medyada Bilinçli Olmak',
      excerpt: 'Sosyal medya algoritmalarının nasıl çalıştığını ve bunlara karşı nasıl bilinçli olabileceğimizi anlatan rehber...',
      content: 'Sosyal medya araçları, doğru kullanıldığında güçlü farkındalık yaratma araçları olabilir.',
      publishDate: '2024-01-05',
      readTime: '7 dakika',
      views: 1560,
      category: 'Dijital Yaşam',
      featured: false,
      image: '/blog-4.jpg'
    },
    {
      id: 'empati-ve-anlayis',
      title: 'Empati: Farklılıkları Köprüye Dönüştürmek',
      excerpt: 'Farklı deneyimler yaşamış biri olarak empatiyi nasıl geliştirdiğimi ve hayatımda nasıl uyguladığımı paylaşıyorum...',
      content: 'Empati, sadece başkalarını anlamak değil, aynı zamanda kendimizi de daha iyi tanımaktır.',
      publishDate: '2023-12-28',
      readTime: '5 dakika',
      views: 980,
      category: 'İnsan İlişkileri',
      featured: false,
      image: '/blog-5.jpg'
    },
    {
      id: 'gelecek-vizyonu',
      title: 'Geleceğe Dair Umutlar ve Hedefler',
      excerpt: 'Kitabımdan sonraki planlarım, gelecek projelerim ve okuyucularımla birlikte yaratmak istediğim değişim...',
      content: 'Gelecek, bugünkü seçimlerimizle şekillenir. Bu nedenle her gün bilinçli kararlar almak çok önemli.',
      publishDate: '2023-12-20',
      readTime: '9 dakika',
      views: 1340,
      category: 'Gelecek',
      featured: false,
      image: '/blog-6.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tümü', count: blogPosts.length },
    { id: 'yazarlik', name: 'Yazarlık', count: 1 },
    { id: 'teknoloji', name: 'Teknoloji', count: 1 },
    { id: 'kisisel-gelisim', name: 'Kişisel Gelişim', count: 1 },
    { id: 'dijital-yasam', name: 'Dijital Yaşam', count: 1 },
    { id: 'insan-iliskileri', name: 'İnsan İlişkileri', count: 1 },
    { id: 'gelecek', name: 'Gelecek', count: 1 }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-white to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Blog & Duyurular
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Yazarlık yolculuğum, kişisel deneyimlerim ve hayata dair düşüncelerimi paylaştığım alan. 
              Kitap tanıtımları, etkinlik duyuruları ve daha fazlası...
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Blog yazılarında ara..."
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full sm:w-80"
                />
              </div>
              <button className="btn-secondary flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filtrele</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.id === 'all' 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Öne Çıkan Yazılar
              </h2>
              <p className="text-lg text-gray-600">
                En çok okunan ve beğenilen blog yazıları
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                  
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={post.publishDate}>
                            {new Date(post.publishDate).toLocaleDateString('tr-TR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                        Öne Çıkan
                      </span>
                    </div>

                    {/* Category */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{post.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-semibold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <button className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors font-medium group">
                      <span>Devamını Oku</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Tüm Yazılar
            </h2>
            <p className="text-lg text-gray-600">
              Kronolojik sırayla tüm blog yazıları
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-gradient-to-br from-background to-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-3xl">📄</span>
                </div>
                
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'short'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-semibold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <button className="inline-flex items-center space-x-2 text-primary hover:text-secondary transition-colors font-medium text-sm group">
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary px-8 py-3">
              Daha Fazla Yazı Yükle
            </button>
            <p className="text-sm text-gray-600 mt-4">
              Toplam {blogPosts.length} yazıdan {blogPosts.length} tanesi gösteriliyor
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Yeni Yazılardan Haberdar Olun
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Blog yazıları, kitap duyuruları ve etkinlik haberlerini e-posta ile alın.
            </p>

            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full btn-primary py-3"
                >
                  Bültene Katıl
                </button>
                <p className="text-xs text-gray-600">
                  Haftalık bülten + özel duyurular. İstediğiniz zaman çıkabilirsiniz.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

