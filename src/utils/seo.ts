export const SITE_URL = 'https://www.reelroom.ca';

export const BUSINESS = {
  name: 'The Reel Room',
  legalName: 'The Reel Room Vancouver',
  description:
    'Private screening room and production studio rental in Mount Pleasant, Vancouver, BC. Film premieres, DCP screenings, shoots, and corporate productions.',
  email: 'info@reelroom.ca',
  locality: 'Vancouver',
  region: 'BC',
  country: 'CA',
  neighborhood: 'Mount Pleasant',
  latitude: 49.2634,
  longitude: -123.1022,
  priceRange: '$$$',
  sameAs: [
    'https://www.instagram.com/reelroom.yvr/',
    'https://www.tiktok.com/@reelroom.yvr',
    'https://www.facebook.com/reelroomvancouver/',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'EventVenue'],
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: SITE_URL,
  image: `${SITE_URL}/reel-room-logo.png`,
  logo: `${SITE_URL}/favicons/Logo%20Reel%20Room.png`,
  priceRange: BUSINESS.priceRange,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.neighborhood,
    addressLocality: BUSINESS.locality,
    addressRegion: BUSINESS.region,
    addressCountry: BUSINESS.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
  },
  areaServed: {
    '@type': 'City',
    name: 'Vancouver',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'British Columbia',
    },
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: BUSINESS.email,
    areaServed: 'CA',
    availableLanguage: ['English'],
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '01:00',
  },
  sameAs: BUSINESS.sameAs,
  knowsAbout: [
    'Private cinema rental',
    'DCP screening',
    'Film premiere venue',
    'Production studio rental',
    'Corporate video playback',
    'Reference screening Vancouver',
  ],
};

export function buildFaqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema(options: {
  name: string;
  description: string;
  url: string;
  offers?: { name: string; description: string; price?: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: options.name,
    description: options.description,
    url: options.url,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: {
      '@type': 'City',
      name: 'Vancouver',
    },
    ...(options.offers?.length
      ? {
          offers: options.offers.map((offer) => ({
            '@type': 'Offer',
            name: offer.name,
            description: offer.description,
            ...(offer.price ? { price: offer.price, priceCurrency: 'CAD' } : {}),
            availability: 'https://schema.org/InStock',
          })),
        }
      : {}),
  };
}

export function buildWebPageSchema(options: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: options.name,
    description: options.description,
    url: options.url,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#business` },
  };
}

export function buildArticleSchema(options: {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
}) {
  const absoluteImage = options.image.startsWith('http')
    ? options.image
    : `${SITE_URL}${options.image}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.headline,
    description: options.description,
    url: options.url,
    image: absoluteImage,
    datePublished: options.datePublished,
    author: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicons/Logo%20Reel%20Room.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': options.url,
    },
  };
}

export type StructuredData = Record<string, unknown> | Record<string, unknown>[];

export function normalizeStructuredData(
  data?: StructuredData
): Record<string, unknown>[] {
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
}
