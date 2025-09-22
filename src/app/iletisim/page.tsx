'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MapPin, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-posta',
      description: 'Genel sorular ve iş birlikleri için',
      contact: 'iletisim@ciplakgosterengozlukler.com',
      responseTime: '24 saat içinde yanıt'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Basın & Medya',
      description: 'Röportaj ve basın talepleri için',
      contact: 'basin@ciplakgosterengozlukler.com',
      responseTime: '48 saat içinde yanıt'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Etkinlik & Konuşma',
      description: 'Konferans ve etkinlik davetleri için',
      contact: 'etkinlik@ciplakgosterengozlukler.com',
      responseTime: '1 hafta içinde yanıt'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'İş Birliği',
      description: 'Kurumsal iş birlikleri ve projeler için',
      contact: 'isbirligi@ciplakgosterengozlukler.com',
      responseTime: '3-5 iş günü içinde yanıt'
    }
  ];

  const faqItems = [
    {
      question: 'Kitabı hangi formatlarda satın alabilirim?',
      answer: 'Kitap basılı, e-kitap (PDF/EPUB) ve sesli kitap formatlarında mevcuttur. Tüm formatları web sitemizden satın alabilirsiniz.'
    },
    {
      question: 'Haftalık bölümler ücretsiz mi?',
      answer: 'Evet, haftalık bölümler tamamen ücretsizdir. Bültene kaydolarak her Pazartesi yeni bölümleri e-posta ile alabilirsiniz.'
    },
    {
      question: 'Etkinliklere nasıl katılabilirim?',
      answer: 'Etkinlik duyurularını blog sayfamızdan ve sosyal medya hesaplarımızdan takip edebilirsiniz. Ayrıca bültene kaydolarak özel davetler alabilirsiniz.'
    },
    {
      question: 'Röportaj talebi nasıl iletebilirim?',
      answer: 'Basın ve medya talepleri için basin@ciplakgosterengozlukler.com adresine yazabilirsiniz. Medya kit\'i web sitemizden indirebilirsiniz.'
    },
    {
      question: 'Kitabın sesli versiyonu mevcut mu?',
      answer: 'Evet, kitabın profesyonel seslendirmeli sesli versiyonu mevcuttur. 8 saat süresinde ve MP3 formatında sunulmaktadır.'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-white to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              İletişim
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Sorularınız, önerileriniz veya iş birliği teklifleriniz için benimle iletişime geçin. 
              Her mesajınızı özenle okuyorum ve mümkün olan en kısa sürede yanıtlıyorum.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Genellikle 24 saat içinde yanıt</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Türkiye</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              İletişim Yöntemleri
            </h2>
            <p className="text-lg text-gray-600">
              Amacınıza uygun iletişim kanalını seçin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-background to-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {method.description}
                </p>
                <a 
                  href={`mailto:${method.contact}`}
                  className="text-primary hover:text-secondary transition-colors font-medium text-sm block mb-2"
                >
                  {method.contact}
                </a>
                <p className="text-xs text-gray-500">
                  {method.responseTime}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Mesaj Gönder
              </h2>
              <p className="text-lg text-gray-600">
                Aşağıdaki formu kullanarak doğrudan benimle iletişime geçebilirsiniz
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Konu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Konu seçin</option>
                    <option value="genel">Genel Soru</option>
                    <option value="kitap">Kitap Hakkında</option>
                    <option value="basin">Basın & Medya</option>
                    <option value="etkinlik">Etkinlik Daveti</option>
                    <option value="isbirligi">İş Birliği</option>
                    <option value="teknik">Teknik Destek</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    <a href="/gizlilik" className="text-primary hover:text-secondary">Gizlilik Politikası</a>&apos;nı 
                    okudum ve kişisel verilerimin işlenmesini kabul ediyorum. *
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary flex items-center space-x-2 mx-auto px-8 py-3"
                  >
                    <Send className="w-4 h-4" />
                    <span>Mesajı Gönder</span>
                  </button>
                  <p className="text-sm text-gray-600 mt-4">
                    Mesajınız güvenli bir şekilde iletilecek ve 24 saat içinde yanıtlanacaktır.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-lg text-gray-600">
                En çok merak edilen sorular ve yanıtları
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-background to-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-serif font-semibold text-primary mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Sorunuzun yanıtını bulamadınız mı?
              </p>
              <button className="btn-secondary">
                Bize Sorun
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Sosyal Medyada Takip Edin
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Güncel paylaşımlar, canlı yayınlar ve özel içerikler için sosyal medya hesaplarımı takip edin.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Twitter', handle: '@ishak_alper', followers: '12.5K', color: 'bg-blue-500' },
                { name: 'Instagram', handle: '@ishak.alper', followers: '8.2K', color: 'bg-pink-500' },
                { name: 'LinkedIn', handle: 'İshak Alper', followers: '5.1K', color: 'bg-blue-700' },
                { name: 'YouTube', handle: 'İshak Alper', followers: '3.8K', color: 'bg-red-500' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group"
                >
                  <div className={`w-12 h-12 ${social.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform`}>
                    {social.name[0]}
                  </div>
                  <h3 className="font-semibold text-primary mb-1">{social.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{social.handle}</p>
                  <p className="text-xs text-gray-500">{social.followers} takipçi</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

