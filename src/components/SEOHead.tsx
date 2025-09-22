'use client';

import Head from 'next/head';
import { generateJSONLD, SEOData } from '@/lib/seo';

interface SEOHeadProps {
  seoData?: Partial<SEOData>;
}

export default function SEOHead({ seoData = {} }: SEOHeadProps) {
  const jsonLD = generateJSONLD(seoData);

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      
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
      
      {/* Viewport for responsive design */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Accessibility */}
      <meta name="color-scheme" content="light" />
      
      {/* Performance hints */}
      <link rel="preload" href="/fonts/playfair-display.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </Head>
  );
}

