'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TTS from '@/components/TTS';
import { Share2, Calendar, Clock, Eye, Search } from 'lucide-react';
import { excerpts } from '@/data/excerpts';

export default function ExcerptsPage() {
  // Extended excerpts data for this page
  const allExcerpts = [
    ...excerpts,
    {
      id: "maskelerin-ardinda",
      title: "Maskelerin Ardında",
      content: "Toplum bize maskeler takar, biz de bu maskeleri takmaya alışırız. Ama gerçek yüzümüzü görmek için cesaret gerekir. Bu bölümde, sosyal maskelerin nasıl oluştuğunu ve bunları nasıl çıkarabileceğimizi anlatıyorum. Her maskenin altında bir hikaye, her hikayenin altında bir gerçek vardır.",
      publishDate: "2023-12-25",
      featured: false
    },
    {
      id: "dijital-ayak-izleri",
      title: "Dijital Ayak İzleri",
      content: "İnternette bıraktığımız her iz, aslında kim olduğumuzu anlatır. Sosyal medya paylaşımlarımızdan, beğenilerimize kadar her şey bir portre çizer. Bu dijital portrenin farkında olmak ve onu bilinçli şekillendirmek, modern çağın en önemli becerilerinden biri haline geldi.",
      publishDate: "2023-12-18",
      featured: false
    },
    {
      id: "sessizligin-dili",
      title: "Sessizliğin Dili",
      content: "Bazen en güçlü mesajlar sessizlikle verilir. Görme engelim bana sessizliği dinlemeyi öğretti. İnsanların söylemedikleri, söylediklerinden daha çok şey anlatır. Bu bölümde, sessizliğin dilini öğrenmenin yollarını ve bunun hayatımıza kattığı değeri paylaşıyorum.",
      publishDate: "2023-12-11",
      featured: true
    },
    {
      id: "korkularla-yuzlesmek",
      title: "Korkularla Yüzleşmek",
      content: "Korkularımız bizi sınırlar, ama aynı zamanda büyümemiz için fırsatlar sunar. Görme engelli olmak başlangıçta büyük bir korku kaynağıydı. Ama bu korku, beni daha güçlü ve daha bilinçli biri yaptı. Korkularınızla yüzleşmenin yollarını bu bölümde bulacaksınız.",
      publishDate: "2023-12-04",
      featured: false
    },
    {
      id: "empati-koprusu",
      title: "Empati Köprüsü",
      content: "Empati, insanlar arasında kurulan en güçlü köprüdür. Farklı deneyimler yaşamış biri olarak, empatiyi hem almayı hem de vermeyi öğrendim. Bu bölümde, empatiyi nasıl geliştirebileceğinizi ve hayatınızda nasıl kullanabileceğinizi anlatıyorum.",
      publishDate: "2023-11-27",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Tümü', count: allExcerpts.length },
    { id: 'featured', name: 'Öne Çıkanlar', count: allExcerpts.filter(e => e.featured).length },
    { id: 'recent', name: 'Son Eklenenler', count: 3 },
    { id: 'popular', name: 'Popüler', count: 4 }
  ];



  const handleShare = (excerpt: { title: string; content: string; }) => {
    if (navigator.share) {
      navigator.share({
        title: excerpt.title,
        text: excerpt.content.substring(0, 100) + '...',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link kopyalandı!');
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-white to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Haftalık Bölümler
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Her hafta 1.000 karakteri geçmeyen kısa bölümlerle kitabın derinliklerine yolculuk. 
              İshak Alper&apos;in deneyimlerinden çıkardığı değerli yaşam dersleri.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Her Pazartesi yeni bölüm</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>2-3 dakika okuma süresi</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>Maksimum 1.000 karakter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
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

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Bölümlerde ara..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Excerpts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allExcerpts.map((excerpt) => (
              <article 
                key={excerpt.id}
                className="bg-gradient-to-br from-background to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
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
                <h3 className="text-xl font-serif font-semibold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                  {excerpt.title}
                </h3>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  {excerpt.content.replace(/'/g, "&apos;")}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{excerpt.content.length} karakter</span>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>2-3 dk</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{Math.floor(Math.random() * 500) + 100}</span>
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <TTS 
                    text={excerpt.content}
                    className="flex-1"
                    showControls={false}
                  />
                  
                  <button
                    onClick={() => handleShare(excerpt)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors group"
                    aria-label={`${excerpt.title} bölümünü paylaş`}
                  >
                    <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Paylaş</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary px-8 py-3">
              Daha Fazla Bölüm Yükle
            </button>
            <p className="text-sm text-gray-600 mt-4">
              Toplam {allExcerpts.length} bölümden {allExcerpts.length} tanesi gösteriliyor
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Yeni Bölümleri Kaçırmayın
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Her hafta Pazartesi günü yayınlanan yeni bölümlerden haberdar olmak için bültene katılın.
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
                  GDPR uyumlu. İstediğiniz zaman abonelikten çıkabilirsiniz.
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

