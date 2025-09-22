import type { Metadata } from "next";
import "./globals.css";
import { generateMetadata } from '@/lib/seo';
import SkipLink from '@/components/SkipLink';
import AccessibilityControls from '@/components/AccessibilityControls';

export const metadata: Metadata = generateMetadata({
  title: 'Çıplak Gösteren Gözlükler - İshak Alper',
  description: 'Hakkâri Yeşiltaş köyünde doğan İshak Alper\'in görme engeliyle şekillenen yaşam öyküsü ve içgörülerini anlatan derin bir otobiyografi.',
  url: '/',
  type: 'website'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" dir="ltr">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#4C1D95" />
        <meta name="msapplication-TileColor" content="#4C1D95" />
        
        {/* Language and locale */}
        <meta httpEquiv="content-language" content="tr" />
        <meta name="language" content="Turkish" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Accessibility */}
        <meta name="color-scheme" content="light" />
        
        {/* Performance hints */}
        <link rel="preload" href="/fonts/playfair-display.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <SkipLink />
        <div id="main-content">
          {children}
        </div>
        <AccessibilityControls />
      </body>
    </html>
  );
}

