/**
 * Legacy AceHost / Ace Cascade routes that must not remain indexable on reelroom.ca.
 * Verified destination URLs as of July 2026.
 */

const ACEHOST = 'https://www.acehost.ca';
const ACECASCADE = 'https://www.acecascade.ca';

/** @type {Record<string, string>} reelroom.ca/listings/:slug -> acehost listing URL */
const ACEHOST_LISTING_REDIRECTS = {
  'altitude-retreat-kadenwood': `${ACEHOST}/listings/timber-haven-luxury-ski-in-ski-out-kadenwood`,
  'two-cedars-kadenwood': `${ACEHOST}/listings/two-cedars-kadenwood`,
  'chalet-la-forja-kadenwood': `${ACEHOST}/listings/chalet-la-forja-kadenwood`,
  'slopeside-villa-kadenwood': `${ACEHOST}/listings/slopeside-villa-kadenwood`,
  'panoramic-estate-kadenwood': `${ACEHOST}/listings/panoramic-estate-kadenwood`,
  'heron-views-whistler-village': `${ACEHOST}/listings/heron-views-whistler-village`,
  'ravens-nest-ski-in-ski-out-views': `${ACEHOST}/listings/ravens-nest-ski-in-ski-out-views`,
  'falcon-blueberry-drive': `${ACEHOST}/listings/falcon-blueberry-drive`,
  'snow-pine': `${ACEHOST}/listings/snow-pine`,
  'wedge-mountain-lodge-spa': `${ACEHOST}/listings/wedge-mountain-lodge-spa`,
  'luxe-cozy-3-bed-whistler-village': `${ACEHOST}/listings/luxe-cozy-3-bed-whistler-village`,
  'dream-log-chalet-5-bedroom-4-bath-creekside': `${ACEHOST}/listings/dream-log-chalet-5-bedroom-4-bath-creekside`,
  'marquise-2-bed': `${ACEHOST}/listings/marquise-2-bed-ski-in-ski-out`,
  'the-nest-pets': `${ACEHOST}/listings/the-nest-ski-in-ski-out`,
  'the-nest-ski-in-ski-out': `${ACEHOST}/listings/the-nest-ski-in-ski-out`,
  'ski-in-ski-out-walk-to-lifts-2-bed': `${ACEHOST}/listings/ski-in-ski-out-walk-to-lifts-2-bed`,
  'whistler-village-views-luxury-2-5-bedroom': `${ACEHOST}/listings/whistler-village-views-luxury-2-5-bedroom`,
  'scandinavian-mountainside-retreat-pemberton-meadows-50-acres': `${ACEHOST}/listings/scandinavian-mountainside-retreat-pemberton-meadows-50-acres`,
  'mykonos-crystal-villa': `${ACEHOST}/worldwide-listings/mykonos-crystal-villa`,
  'super-yacht-thailand': `${ACEHOST}/worldwide-listings/super-yacht-thailand`,
  'punta-mita---casa-juntos': `${ACEHOST}/worldwide-listings/punta-mita---casa-juntos`,
  'hood-river-luxury-home': `${ACEHOST}/worldwide-listings/hood-river-luxury-home`,
};

/** Slugs with no verified AceHost equivalent — return HTTP 410 */
const ACEHOST_LISTING_GONE = new Set([
  'whispering-pines',
  'vancouver-house-corner-unit-30th-floor',
]);

/** @type {Record<string, string>} reelroom.ca/blog-articles/:slug -> acecascade article URL */
const ACECASCADE_BLOG_REDIRECTS = {
  'discover-whistler-cascade-lodge': `${ACECASCADE}/blog-articles/discover-whistler-cascade-lodge`,
  'activities-in-whistler': `${ACECASCADE}/blog-articles/activities-in-whistler`,
  'current-whistler-snow-conditions': `${ACECASCADE}/blog-articles/current-whistler-snow-conditions`,
  'whistler-blackcomb-named-best-ski-resort': `${ACECASCADE}/blog-articles/whistler-blackcomb-named-best-ski-resort`,
  'planning-your-perfect-whistler-family-vacation': `${ACECASCADE}/blog-articles/planning-your-perfect-whistler-family-vacation`,
  'why-whistler': `${ACECASCADE}/blog-articles/why-whistler`,
  'amenities': `${ACECASCADE}/blog-articles/amenities`,
};

function buildNextRedirects() {
  const redirects = [
    // Canonical host — non-www -> www
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'reelroom.ca' }],
      destination: 'https://www.reelroom.ca/:path*',
      permanent: true,
    },
    // Reel Room contact
    {
      source: '/contact',
      destination: '/book-now',
      permanent: true,
    },
    // Reel Room reservations alias
    {
      source: '/reservations',
      destination: '/book-now',
      permanent: true,
    },
    // Reel Room legal URL aliases
    {
      source: '/privacy-policy',
      destination: '/privacy',
      permanent: true,
    },
    {
      source: '/legal-disclaimer',
      destination: '/terms',
      permanent: true,
    },
    // Media legacy paths
    {
      source: '/media-and-gallery',
      destination: '/media',
      permanent: true,
    },
    {
      source: '/media-gallery',
      destination: '/media',
      permanent: true,
    },
    {
      source: '/videos',
      destination: '/media',
      permanent: true,
    },
    // AceHost top-level pages
    {
      source: '/properties',
      destination: `${ACEHOST}/properties`,
      permanent: true,
    },
    {
      source: '/list-property',
      destination: `${ACEHOST}/list-property`,
      permanent: true,
    },
    // Ace Cascade top-level pages
    {
      source: '/blogs',
      destination: `${ACECASCADE}/blogs`,
      permanent: true,
    },
    {
      source: '/list-with-us',
      destination: `${ACECASCADE}/list-with-us`,
      permanent: true,
    },
    {
      source: '/listings',
      destination: `${ACECASCADE}/listings`,
      permanent: true,
    },
    // Ace Cascade hotel room pages (static routes)
    {
      source: '/listings/mountain-view---top-floor',
      destination: `${ACECASCADE}/listings/mountain-view---top-floor`,
      permanent: true,
    },
    {
      source: '/listings/mountain-view-rooms',
      destination: `${ACECASCADE}/listings/mountain-view-rooms`,
      permanent: true,
    },
    {
      source: '/listings/forest-view-cascade-room',
      destination: `${ACECASCADE}/listings/forest-view-cascade-room`,
      permanent: true,
    },
    {
      source: '/blog-articles',
      destination: `${ACECASCADE}/blogs`,
      permanent: true,
    },
  ];

  for (const [slug, destination] of Object.entries(ACEHOST_LISTING_REDIRECTS)) {
    redirects.push({
      source: `/listings/${slug}`,
      destination,
      permanent: true,
    });
  }

  for (const [slug, destination] of Object.entries(ACECASCADE_BLOG_REDIRECTS)) {
    redirects.push({
      source: `/blog-articles/${slug}`,
      destination,
      permanent: true,
    });
  }

  return redirects;
}

module.exports = {
  ACEHOST,
  ACECASCADE,
  ACEHOST_LISTING_REDIRECTS,
  ACEHOST_LISTING_GONE,
  ACECASCADE_BLOG_REDIRECTS,
  buildNextRedirects,
};
