'use client';

import Link from 'next/link';
import { Mail, Phone, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic will be implemented later
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Bültene kaydınız alındı!');
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' }
  ];

  const footerLinks = {
    kitap: [
      { name: 'Kitap Detayları', href: '/kitap' },
      { name: 'Formatlar', href: '/kitap#formatlar' },
      { name: 'İncelemeler', href: '/kitap#incelemeler' },
      { name: 'Satın Al', href: '/kitap#satin-al' }
    ],
    icerik: [
      { name: 'Haftalık Bölümler', href: '/bolumler' },
      { name: 'Blog', href: '/blog' },
      { name: 'Video & Medya', href: '/medya' },
      { name: 'Podcast', href: '/podcast' }
    ],
    yazar: [
      { name: 'Biyografi', href: '/yazar' },
      { name: 'Medya Kit', href: '/yazar/medya-kit' },
      { name: 'Röportajlar', href: '/yazar/roportajlar' },
      { name: 'Etkinlikler', href: '/etkinlikler' }
    ],
    hukuki: [
      { name: 'Gizlilik Politikası', href: '/gizlilik' },
      { name: 'Kullanım Şartları', href: '/kullanim-sartlari' },
      { name: 'GDPR', href: '/gdpr' },
      { name: 'Çerez Politikası', href: '/cerez-politikasi' }
    ]
  };

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Haftalık Bölümleri Kaçırmayın
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Her hafta 1.000 karakteri geçmeyen özel bölümler ve yazardan haberler için bültene katılın.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Katıl
                </button>
              </div>
              <p className="text-xs text-white/60 mt-3">
                GDPR uyumlu. İstediğiniz zaman abonelikten çıkabilirsiniz.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ÇG</span>
              </div>
              <span className="font-serif font-semibold text-lg">
                Çıplak Gösteren Gözlükler
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Gerçeği görmek cesaret ister. İshak Alper&apos;in iç görü ve hesaplaşma dolu kitabı.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>iletisim@ciplakgosterengozlukler.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+90 (555) 123 45 67</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4">Kitap</h4>
            <ul className="space-y-2">
              {footerLinks.kitap.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">İçerik</h4>
            <ul className="space-y-2">
              {footerLinks.icerik.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Yazar</h4>
            <ul className="space-y-2">
              {footerLinks.yazar.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hukuki</h4>
            <ul className="space-y-2">
              {footerLinks.hukuki.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-white/80">
              © 2024 İshak Alper. Tüm hakları saklıdır.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Payment Icons */}
            <div className="flex space-x-2">
              <div className="w-8 h-6 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs font-bold">VISA</span>
              </div>
              <div className="w-8 h-6 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs font-bold">MC</span>
              </div>
              <div className="w-8 h-6 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs font-bold">PP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

