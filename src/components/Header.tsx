'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ÇG</span>
            </div>
            <span className="font-serif font-semibold text-lg text-primary hidden sm:block">
              Çıplak Gösteren Gözlükler
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/kitap" className="text-gray-700 hover:text-primary transition-colors">
              Kitap
            </Link>
            <Link href="/yazar" className="text-gray-700 hover:text-primary transition-colors">
              Yazar
            </Link>
            <Link href="/bolumler" className="text-gray-700 hover:text-primary transition-colors">
              Haftalık Bölümler
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-primary transition-colors">
              İletişim
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="btn-secondary text-sm">
              Bültene Katıl
            </button>
            <button className="btn-primary text-sm">
              Satın Al
            </button>
            <select className="text-sm border border-gray-300 rounded px-2 py-1">
              <option value="tr">TR</option>
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 mt-4">
              <Link href="/kitap" className="text-gray-700 hover:text-primary transition-colors">
                Kitap
              </Link>
              <Link href="/yazar" className="text-gray-700 hover:text-primary transition-colors">
                Yazar
              </Link>
              <Link href="/bolumler" className="text-gray-700 hover:text-primary transition-colors">
                Haftalık Bölümler
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/iletisim" className="text-gray-700 hover:text-primary transition-colors">
                İletişim
              </Link>
              <div className="flex flex-col space-y-2 pt-3">
                <button className="btn-secondary text-sm">
                  Bültene Katıl
                </button>
                <button className="btn-primary text-sm">
                  Satın Al
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

