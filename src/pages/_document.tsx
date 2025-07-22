import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Proper viewport settings for mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no, maximum-scale=1.0" />
        {/* iOS specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Early connection hints for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
        
        {/* Preload Futura font */}
        <link href="https://fonts.cdnfonts.com/css/futura-pt" rel="stylesheet" />
        
        {/* Preconnect for third-party resources */}
        <link rel="preconnect" href="https://player.vimeo.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://f.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fresnel.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
        <link rel="dns-prefetch" href="https://i.vimeocdn.com" />
        
        {/* Resource hints for critical assets */}
        <link rel="preload" href="/photos/whistler-hotel.jpg" as="image" />
        <link rel="preload" href="/favicon-32x32.png" as="image" />

        {/* Font display optimization */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Font display optimization */
              @font-face {
                font-family: 'Futura PT';
                font-style: normal;
                font-weight: 300;
                font-display: swap;
                src: url('https://fonts.cdnfonts.com/s/29136/FuturaPTLight.woff2') format('woff2');
              }
              @font-face {
                font-family: 'Futura PT';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('https://fonts.cdnfonts.com/s/29136/FuturaPTBook.woff2') format('woff2');
              }
              @font-face {
                font-family: 'Futura PT';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url('https://fonts.cdnfonts.com/s/29136/FuturaPTMedium.woff2') format('woff2');
              }
              @font-face {
                font-family: 'Futura PT';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
                src: url('https://fonts.cdnfonts.com/s/29136/FuturaPTDemi.woff2') format('woff2');
              }
              @font-face {
                font-family: 'Futura PT';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url('https://fonts.cdnfonts.com/s/29136/FuturaPTBold.woff2') format('woff2');
              }
              
              /* Add instant page transitions to avoid perceived loading time */
              body {
                transition: opacity 0.1s ease;
                font-family: 'Futura PT', 'Futura', sans-serif;
              }
              body.loading {
                opacity: 0.8;
              }
              
              /* Critical CSS to reduce initial render time */
              html, body {
                padding: 0;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                font-family: 'Futura PT', 'Futura', sans-serif;
              }
              
              /* iOS Safari fixes */
              @supports (-webkit-touch-callout: none) {
                html, body {
                  height: -webkit-fill-available;
                  min-height: -webkit-fill-available;
                  font-family: 'Futura PT', 'Futura', sans-serif;
                }
                .fixed {
                  -webkit-transform: translateZ(0);
                }
                .min-h-screen {
                  min-height: -webkit-fill-available;
                }
                .h-screen {
                  height: -webkit-fill-available;
                }
                /* Fix for mobile menu */
                .overflow-hidden {
                  position: fixed;
                  width: 100%;
                  height: 100%;
                }
              }
              
              /* Fix for mobile menu toggle */
              body.overflow-hidden {
                overflow: hidden;
                position: fixed;
                width: 100%;
                height: 100%;
              }
              
              /* Apply Futura to all elements */
              *, *::before, *::after {
                font-family: 'Futura PT', 'Futura', sans-serif;
              }
              
              h1, h2, h3, h4, h5, h6, p, span, a, button, input, select, textarea {
                font-family: 'Futura PT', 'Futura', sans-serif;
              }
            `,
          }}
        />

        {/* Add favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta
          name="google-site-verification"
          content="UmTMmjHtW3Q_-Uzi8WXxrPgE2YBsv0GXgq0RXCQuB_Y"
        />
        
        {/* Additional metadata for search engines */}
        <meta name="application-name" content="The Reel Room Vancouver" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="author" content="The Reel Room" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="CA-BC" />
        <meta name="geo.placename" content="Vancouver" />
        <meta name="language" content="English" />
        
        {/* Default OpenGraph metadata for social sharing and search results */}
        <meta property="og:site_name" content="The Reel Room Vancouver" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://reelroom.ca/favicons/Logo Reel Room.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="The Reel Room Vancouver Logo" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://reelroom.ca/favicons/Logo Reel Room.png" />
        <meta name="twitter:site" content="@reelroomvancouver" />

        {/* Enable DNS prefetching */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Google Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://reelroom.ca/",
              "name": "The Reel Room Vancouver",
              "description": "Private Theatre Event Venue in Vancouver, BC. Book for film screenings, private parties, corporate events, and more.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://reelroom.ca/blog?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "The Reel Room",
              "image": "https://reelroom.ca/photos/homepage-originals/Reel Room Logo:Favicon.png",
              "url": "https://reelroom.ca",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vancouver",
                "addressRegion": "BC",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "49.2634",
                "longitude": "-123.1022"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "08:00",
                "closes": "01:00"
              },
              "sameAs": [
                "https://www.instagram.com/reelroomvancouver/",
                "https://www.facebook.com/reelroomvancouver/"
              ]
            })
          }}
        />

        {/* Video loader script */}
        <script src="/video-loader.js" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
