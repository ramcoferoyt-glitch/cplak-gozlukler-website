import { Metadata } from 'next';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'book' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

const defaultSEO: SEOData = {
  title: 'Çıplak Gösteren Gözlükler - İshak Alper',
  description: 'Hakkâri Yeşiltaş köyünde doğan İshak Alper\'in görme engeliyle şekillenen yaşam öyküsü ve içgörülerini anlatan derin bir otobiyografi.',
  keywords: ['çıplak gösteren gözlükler', 'ishak alper', 'otobiyografi', 'görme engelli', 'kişisel gelişim', 'dijital dönüşüm'],
  image: '/book-cover.png',
  type: 'website',
  author: 'İshak Alper'
};

export function generateMetadata(seoData: Partial<SEOData> = {}): Metadata {
  const data = { ...defaultSEO, ...seoData };
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ciplakgosterengozlukler.com';
  const fullUrl = data.url ? `${baseUrl}${data.url}` : baseUrl;
  const imageUrl = data.image?.startsWith('http') ? data.image : `${baseUrl}${data.image}`;

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords?.join(', '),
    authors: [{ name: data.author || 'İshak Alper' }],
    creator: data.author || 'İshak Alper',
    publisher: 'İshak Alper',
    
    openGraph: {
      title: data.title,
      description: data.description,
      url: fullUrl,
      siteName: 'Çıplak Gösteren Gözlükler',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      locale: 'tr_TR',
      type: data.type,
      ...(data.type === 'article' && {
        publishedTime: data.publishedTime,
        modifiedTime: data.modifiedTime,
        authors: [data.author || 'İshak Alper'],
        section: data.section,
      }),
    },
    
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [imageUrl],
      creator: '@ishak_alper',
      site: '@ishak_alper',
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    alternates: {
      canonical: fullUrl,
    },
    
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'Çıplak Gösteren Gözlükler',
    },
  };
}

export function generateJSONLD(seoData: Partial<SEOData> = {}) {
  const data = { ...defaultSEO, ...seoData };
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ciplakgosterengozlukler.com';
  const fullUrl = data.url ? `${baseUrl}${data.url}` : baseUrl;
  const imageUrl = data.image?.startsWith('http') ? data.image : `${baseUrl}${data.image}`;

  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Çıplak Gösteren Gözlükler',
    url: baseUrl,
    description: defaultSEO.description,
    author: {
      '@type': 'Person',
      name: 'İshak Alper',
      description: 'Yazar, İçerik Üreticisi, Farkındalık Yaratıcısı',
      birthPlace: 'Hakkâri, Türkiye',
      nationality: 'Turkish',
      sameAs: [
        'https://twitter.com/ishak_alper',
        'https://instagram.com/ishak.alper',
        'https://linkedin.com/in/ishak-alper'
      ]
    },
    publisher: {
      '@type': 'Person',
      name: 'İshak Alper'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  if (data.type === 'book' || data.url === '/kitap') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Çıplak Gösteren Gözlükler',
      author: {
        '@type': 'Person',
        name: 'İshak Alper'
      },
      description: 'Hakkâri Yeşiltaş köyünde doğan İshak Alper\'in görme engeliyle şekillenen yaşam öyküsü ve içgörülerini anlatan derin bir otobiyografi.',
      genre: ['Otobiyografi', 'Kişisel Gelişim'],
      inLanguage: 'tr',
      numberOfPages: 320,
      bookFormat: 'https://schema.org/Hardcover',
      isbn: '978-605-XXXX-XX-X',
      publisher: {
        '@type': 'Person',
        name: 'İshak Alper'
      },
      datePublished: '2024-01-01',
      image: imageUrl,
      url: fullUrl,
      offers: [
        {
          '@type': 'Offer',
          price: '89',
          priceCurrency: 'TRY',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          name: 'Basılı Kitap'
        },
        {
          '@type': 'Offer',
          price: '39',
          priceCurrency: 'TRY',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          name: 'E-kitap'
        },
        {
          '@type': 'Offer',
          price: '59',
          priceCurrency: 'TRY',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          name: 'Sesli Kitap'
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1'
      }
    };
  }

  if (data.type === 'article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      image: imageUrl,
      author: {
        '@type': 'Person',
        name: data.author || 'İshak Alper'
      },
      publisher: {
        '@type': 'Person',
        name: 'İshak Alper'
      },
      datePublished: data.publishedTime,
      dateModified: data.modifiedTime || data.publishedTime,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': fullUrl
      },
      url: fullUrl
    };
  }

  return baseSchema;
}

