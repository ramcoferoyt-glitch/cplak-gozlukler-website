'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Download, Twitter, Instagram, Linkedin, Mail, MapPin, Calendar, Award, BookOpen, Users, Globe } from 'lucide-react';

export default function AuthorPage() {
  const achievements = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'İlk Kitap',
      description: 'Çıplak Gösteren Gözlükler ile edebiyat dünyasına adım attı'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Sosyal Etki',
      description: '50.000+ kişiye dijital platformlarda ulaştı'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Farkındalık',
      description: 'Görme engelli bireylerin sesini duyurmada öncü rol'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Tanınırlık',
      description: 'Kişisel gelişim alanında takip edilen yazar'
    }
  ];

  const timeline = [
    {
      year: '1985',
      title: 'Doğum',
      description: 'Hakkâri Yeşiltaş köyünde dünyaya geldi'
    },
    {
      year: '2000',
      title: 'Eğitim',
      description: 'Görme engeline rağmen eğitim hayatına devam etti'
    },
    {
      year: '2015',
      title: 'Dijital Keşif',
      description: 'Sosyal medya ve dijital araçları keşfetti'
    },
    {
      year: '2020',
      title: 'İçerik Üretimi',
      description: 'Düzenli olarak içerik üretmeye başladı'
    },
    {
      year: '2024',
      title: 'İlk Kitap',
      description: 'Çıplak Gösteren Gözlükler kitabını yayınladı'
    }
  ];

  const interviews = [
    {
      title: 'Görme Engelli Bir Yazarın Dijital Yolculuğu',
      publication: 'Kişisel Gelişim Dergisi',
      date: '15 Ocak 2024',
      type: 'Röportaj'
    },
    {
      title: 'Çıplak Gösteren Gözlükler Üzerine',
      publication: 'Edebiyat Platformu',
      date: '10 Ocak 2024',
      type: 'Söyleşi'
    },
    {
      title: 'Dijital Çağda Farkındalık Yaratmak',
      publication: 'Teknoloji ve Yaşam',
      date: '5 Ocak 2024',
      type: 'Makale'
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter', followers: '12.5K' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram', followers: '8.2K' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn', followers: '5.1K' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@example.com', label: 'E-posta', followers: 'İletişim' }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-white to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Author Photo */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-primary to-secondary rounded-full p-2">
                  <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-8xl text-gray-600">👤</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl">✨</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 max-w-sm mx-auto lg:mx-0">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary">1</div>
                  <div className="text-sm text-gray-600">Yayınlanan Kitap</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-gray-600">Takipçi</div>
                </div>
              </div>
            </div>

            {/* Author Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                  İshak Alper
                </h1>
                <p className="text-xl text-secondary font-medium mb-4">
                  Yazar, İçerik Üreticisi, Farkındalık Yaratıcısı
                </p>
                
                <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Hakkâri, Türkiye</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>1985 doğumlu</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  Hakkâri Yeşiltaş köyünde doğan İshak Alper, görme engeliyle şekillenen içgörüsü ve 
                  dijital dünyanın gücüyle sıradanın altındaki gerçekleri ortaya çıkarıyor.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Kürt kökenli bir ailenin çocuğu olarak doğan İshak Alper, görme engelinin getirdiği 
                  zorlukları fırsata çevirerek, hayata farklı bir perspektiften bakmayı öğrendi. 
                  Dijital araçları kullanarak sesini duyurmaya başlayan yazar, toplumsal önyargıları 
                  sorgulayan ve kişisel dönüşümü destekleyen içerikler üretiyor.
                </p>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <div className="text-primary mb-2">
                      {link.icon}
                    </div>
                    <div className="text-sm font-medium text-gray-900">{link.label}</div>
                    <div className="text-xs text-gray-600">{link.followers}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Başarılar ve Etkiler
            </h2>
            <p className="text-lg text-gray-600">
              İshak Alper&apos;in yolculuğundaki önemli kilometre taşları
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full mb-6">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Yaşam Yolculuğu
            </h2>
            <p className="text-lg text-gray-600">
              İshak Alper&apos;in hayat hikayesindeki önemli anlar
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-accent mb-2">{item.year}</div>
                      <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interviews & Media */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Basında İshak Alper
            </h2>
            <p className="text-lg text-gray-600">
              Röportajlar, söyleşiler ve medya görünümleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {interviews.map((interview, index) => (
              <article key={index} className="bg-gradient-to-br from-background to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    {interview.type}
                  </span>
                  <time className="text-sm text-gray-500">{interview.date}</time>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-primary mb-3 leading-tight">
                  {interview.title}
                </h3>
                
                <p className="text-gray-600 mb-4">{interview.publication}</p>
                
                <button className="text-primary hover:text-secondary transition-colors font-medium">
                  Devamını Oku →
                </button>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">
              Tüm Medya Görünümlerini Görüntüle
            </button>
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Medya Kit
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Basın mensupları ve organizatörler için hazırlanmış medya paketi
            </p>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Yüksek Çözünürlük Fotoğraflar</h3>
                  <p className="text-sm text-gray-600">Basın için profesyonel fotoğraflar</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">Detaylı Biyografi</h3>
                  <p className="text-sm text-gray-600">Kısa ve uzun biyografi metinleri</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">İletişim Bilgileri</h3>
                  <p className="text-sm text-gray-600">Basın ve etkinlik iletişimi</p>
                </div>
              </div>

              <div className="space-y-4">
                <button className="btn-primary flex items-center space-x-2 mx-auto">
                  <Download className="w-4 h-4" />
                  <span>Medya Kit İndir (PDF)</span>
                </button>
                <p className="text-sm text-gray-600">
                  Medya kit, yazar fotoğrafları, biyografi metinleri ve basın bilgilerini içerir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

