'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/kitap', label: 'Kitap' },
    { href: '/yazar', label: 'Yazar' },
    { href: '/bolumler', label: 'Haftalık Bölümler' },
    { href: '/blog', label: 'Blog' },
    { href: '/medya', label: 'Medya' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-md border-b border-accent/20 shadow-lg' 
          : 'bg-primary/80 backdrop-blur-sm border-b border-accent/10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/50 transition-all duration-300">
              <span className="text-primary font-bold text-sm">ÇG</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif font-bold text-lg text-secondary leading-none">
                Çıplak Gösteren
              </span>
              <span className="font-serif font-semibold text-xs text-accent">
                Gözlükler
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-secondary hover:text-accent transition-colors duration-200 relative group text-sm font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 hover:bg-accent/10 rounded-lg transition-colors duration-200"
              aria-label="Arama"
            >
              <Search size={20} className="text-secondary" />
            </button>
            <button 
              className="p-2 hover:bg-accent/10 rounded-lg transition-colors duration-200 relative"
              aria-label="Sepet"
            >
              <ShoppingBag size={20} className="text-secondary" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
            </button>
            <button className="btn-primary text-sm px-6 py-2">
              Satın Al
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} className="text-secondary" />
            ) : (
              <Menu size={24} className="text-secondary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-accent/20 animate-slide-down">
            <nav className="flex flex-col space-y-2 mt-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-secondary hover:bg-accent/10 hover:text-accent transition-colors duration-200 rounded-lg text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-accent/20">
                <button className="btn-secondary text-sm w-full">
                  Bültene Katıl
                </button>
                <button className="btn-primary text-sm w-full">
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
