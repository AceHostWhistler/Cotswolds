import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '../components/ReelRoomNavigation';
import ReelRoomFooter from '../components/ReelRoomFooter';
import Script from 'next/script';
import SEO from '@/components/SEO';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Define structured data for SEO
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Reel Room",
    "description": "Private Theatre Event Venue in Vancouver",
    "image": "/favicons/Logo Reel Room.png",
    "url": "https://reelroom.ca",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "telephone": "",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "01:00"
      }
    ],
    "event": {
      "@type": "Event",
      "name": "Private Theatre Events",
      "description": "Host your private film screenings, parties, and corporate events in our luxury theatre venue."
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Private Theatre Event Venue Vancouver"
        description="Welcome to the Reel Room, a haven where private luxury meets the magic of cinema and events. Situated in Mount Pleasant, only minutes away from downtown Vancouver."
        ogImage="/favicons/Logo Reel Room.png"
        keywords="private theatre, event venue, Vancouver, film screenings, private parties, corporate events, Mount Pleasant, luxury cinema, private events"
        structuredData={homeStructuredData}
      />
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      {/* Include video loader helper script */}
      <Script src="/video-loader.js" strategy="beforeInteractive" />
      
      <ReelRoomNavigation />
      
      <div className="relative min-h-screen bg-black pt-16">
        {/* Gold Diamond Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-30" style={{ 
          backgroundImage: "linear-gradient(45deg, #ba9765 25%, transparent 25%), linear-gradient(-45deg, #ba9765 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ba9765 75%), linear-gradient(-45deg, transparent 75%, #ba9765 75%)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px"
        }}></div>
        
        {/* Top Navigation Links */}
        <div className="absolute top-16 xs:top-10 left-0 w-full z-30 flex justify-center px-4 sm:px-0">
          <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-8 md:space-x-16">
            <Link href="/experiences" className="heading-font uppercase tracking-widest text-sm font-light relative overflow-hidden group bg-black/50 backdrop-blur-sm px-4 sm:px-8 py-3 transition-all shadow-lg text-center">
              <span className="absolute inset-0 border border-brand-gold transform transition-transform duration-300 group-hover:scale-95"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/10 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 group-hover:text-brand-gold transition-colors duration-300">EXPERIENCES & PRICING</span>
            </Link>
            <Link href="/reservations" className="heading-font uppercase tracking-widest text-sm font-light relative overflow-hidden group bg-black/50 backdrop-blur-sm px-4 sm:px-8 py-3 transition-all shadow-lg text-center">
              <span className="absolute inset-0 border border-brand-gold transform transition-transform duration-300 group-hover:scale-95"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/10 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 group-hover:text-brand-gold transition-colors duration-300">RESERVATIONS</span>
            </Link>
          </div>
        </div>
        
        {/* Circular Content Area */}
        <div className="absolute inset-0 flex items-center justify-center p-4 mt-16">
          <div className="relative w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[90vw] lg:max-w-[1000px] xl:max-w-[1100px] aspect-square rounded-full overflow-hidden border-4 border-brand-gold/20">
            {/* Background Video */}
            <div className="absolute inset-0 bg-black">
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute inset-0">
                  <iframe 
                    src="https://player.vimeo.com/video/1082926490?autoplay=1&muted=1&loop=1&background=1&controls=0&quality=auto&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ 
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                    title="Reel Room Background Video"
                  ></iframe>
                </div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-10 z-20">
                {/* Logo */}
                <div className="mb-4 sm:mb-6">
                  <div className="border border-brand-gold p-3 sm:p-6 inline-block bg-black">
                    <img 
                      src="/favicons/Logo Reel Room.png" 
                      alt="Reel Room" 
                      className="h-16 sm:h-28 w-auto object-contain"
                      loading="eager"
                      style={{ backgroundColor: 'black', display: 'block' }}
                    />
                  </div>
                </div>
                
                <p className="heading-font text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-16 font-extralight">
                  LOCATED IN MOUNT PLEASANT, BC
                </p>
                
                <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-widest mb-1 sm:mb-2 uppercase">
                  PRIVATE THEATRE
                </h1>
                <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-widest mb-1 sm:mb-2 uppercase">
                  EVENT VENUE
                </h1>
                <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-widest mb-4 sm:mb-12 uppercase">
                  VANCOUVER
                </h1>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Content Box */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-20 bg-black text-white p-0 max-w-[200px] xs:max-w-[90%] sm:max-w-md rounded-sm overflow-hidden">
          <div className="border border-brand-gold">
            <div className="flex flex-col xs:flex-row">
              <div className="w-full xs:w-1/2 aspect-video xs:aspect-auto">
                <img 
                  src="/photos/Blogs/Screen Shot 2025-05-09 at 1.49.41 PM.png" 
                  alt="Magpie Wedding Feature" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="w-full xs:w-1/2 p-3 sm:p-5">
                <h3 className="heading-font text-xs xs:text-sm sm:text-xl font-light mb-1 sm:mb-3">
                  Reel Room featured in Elle Magazine & Magpie Wedding
                </h3>
                <p className="body-font text-xs sm:text-sm mb-1 sm:mb-4">
                  Click here to view the article for your wedding inspiration
                </p>
                
                <div className="mt-1 sm:mt-2">
                  <Link
                    href="https://www.magpiewedding.com/wedding-inspiration/bold-and-colourful-wedding-with-iris-apfel-vibes/"
                    target="_blank"
                    className="text-brand-gold uppercase tracking-widest text-xs sm:text-sm font-light hover:text-brand-cream transition-colors"
                  >
                    View Articles →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="bg-white">
        {/* Welcome Section */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light heading-font mb-6">Welcome to the Reel Room</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto body-font">
                Welcome to the Reel Room, a haven where private luxury meets the magic of cinema and events. Situated in Mount Pleasant, only minutes away from downtown Vancouver.
              </p>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="py-12 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 uppercase tracking-widest text-sm font-light">
              <Link href="/experiences" className="heading-font hover:text-brand-gold transition-colors">
                experiences
              </Link>
              <Link href="/media" className="heading-font hover:text-brand-gold transition-colors">
                media & faqs
              </Link>
              <Link href="/reservations" className="heading-font hover:text-brand-gold transition-colors">
                reservations
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <ReelRoomFooter />
    </div>
  );
}
