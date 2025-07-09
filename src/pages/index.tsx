import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '../components/ReelRoomNavigation';
import ReelRoomFooter from '../components/ReelRoomFooter';
import Script from 'next/script';
import SEO from '@/components/SEO';
import LazyVimeoPlayer from '@/components/LazyVimeoPlayer';
import SimpleImage from '@/components/SimpleImage';
import { scrollToTop } from '@/utils/scrollUtils';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
    
    // Detect iOS devices
    const detectIOS = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOSDevice = 
        /iphone|ipod|ipad/i.test(userAgent) || 
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
        /iPhone|iPad|iPod/.test(navigator.userAgent);
      setIsIOS(isIOSDevice);
    };
    
    detectIOS();
    
    // Ensure page starts from the top
    scrollToTop();
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Define structured data for SEO
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Reel Room",
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
        
        {/* Top Navigation Links - Moved higher to avoid being covered by the navigation bar */}
        <div className="absolute top-24 xs:top-24 left-0 w-full z-30 flex justify-center px-4 sm:px-0">
          <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-8 md:space-x-16">
            <Link href="/experiences" className="heading-font uppercase tracking-widest text-sm font-light relative overflow-hidden group bg-black/50 backdrop-blur-sm px-4 sm:px-8 py-3 transition-all shadow-lg text-center">
              <span className="absolute inset-0 border border-brand-gold transform transition-transform duration-300 group-hover:scale-95"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/10 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 group-hover:text-brand-gold transition-colors duration-300">EXPERIENCES & PRICING</span>
            </Link>
            <Link href="/book-now" className="heading-font uppercase tracking-widest text-sm font-light relative overflow-hidden group bg-black/50 backdrop-blur-sm px-4 sm:px-8 py-3 transition-all shadow-lg text-center">
              <span className="absolute inset-0 border border-brand-gold transform transition-transform duration-300 group-hover:scale-95"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/10 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 group-hover:text-brand-gold transition-colors duration-300">BOOK NOW</span>
            </Link>
          </div>
        </div>
        
        {/* Circular Content Area - Improved spacing and positioning */}
        <div className="absolute inset-0 flex items-center justify-center p-4 mt-16 mb-16">
          <div className="relative w-full max-w-[85vw] sm:max-w-[75vw] md:max-w-[80vw] lg:max-w-[850px] xl:max-w-[900px] aspect-square rounded-full overflow-hidden border-4 border-brand-gold/20">
            {/* Background Video */}
            <div className="absolute inset-0 bg-black">
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute inset-0">
                  <LazyVimeoPlayer 
                    videoId="1082926490" 
                    autoplay={true}
                    loop={true}
                    muted={true}
                    background={true}
                    coverMode={true}
                    priority={true}
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
              
              {/* Content Overlay - Improved spacing */}
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
        
        {/* Featured Content Box - Completely removed on iOS/mobile devices */}
        {!isIOS && (
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
        )}
      </div>
      
      {/* Main Content - Added more padding to ensure proper spacing after the hero section */}
      <main className="bg-white pt-16">
        {/* Welcome Section */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light heading-font mb-6">Welcome to Reel Room</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto body-font">
                Welcome to Reel Room, a haven where private luxury meets the magic of cinema and events. Situated in Mount Pleasant, only minutes away from downtown Vancouver.
              </p>
            </div>
          </div>
        </div>
        
        {/* Featured Vimeo Videos Section - Modified for iOS compatibility */}
        {isIOS ? (
          <div className="py-16 md:py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-light heading-font mb-16 text-center">Featured Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Film Release Video for iOS */}
                <div className="space-y-6">
                  <div className="rounded-md overflow-hidden border border-brand-gold relative" style={{ paddingBottom: "56.25%" }}>
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                      <a 
                        href="https://player.vimeo.com/video/1027464900" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-brand-gold text-black rounded-md hover:bg-amber-600 transition-colors"
                      >
                        View Film Release Video
                      </a>
                    </div>
                  </div>
                  <h3 className="heading-font text-2xl font-light mt-8">Film Release Event Parties</h3>
                  <p className="body-font text-gray-300">
                    Experience the elegance of Reel Room's film premiere events. Our venue provides filmmakers with a sophisticated setting to showcase their work to cast, crew, investors, and special guests. Complete with state-of-the-art projection and sound equipment, our space elevates any film screening to a memorable occasion.
                  </p>
                </div>
                
                {/* Halloween/Sports Video for iOS */}
                <div className="space-y-6">
                  <div className="rounded-md overflow-hidden border border-brand-gold relative" style={{ paddingBottom: "56.25%" }}>
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                      <a 
                        href="https://player.vimeo.com/video/1082926490" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-brand-gold text-black rounded-md hover:bg-amber-600 transition-colors"
                      >
                        View Sports Events Video
                      </a>
                    </div>
                  </div>
                  <h3 className="heading-font text-2xl font-light mt-8">General Parties & Sporting Event Venue</h3>
                  <p className="body-font text-gray-300">
                    From themed celebrations to sports viewing parties, Reel Room transforms any occasion into an extraordinary experience. Our versatile space accommodates various events with customizable lighting, sound, and catering options. Whether it's a championship game or a holiday gathering, we provide an atmosphere that can't be replicated at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-16 md:py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-light heading-font mb-16 text-center">Featured Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Film Release Video */}
                <div className="space-y-6">
                  <div className="rounded-md overflow-hidden border border-brand-gold">
                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                      <iframe 
                        src="https://player.vimeo.com/video/1027464900?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        title="Film Release/Launch Parties at Reel Room Vancouver"
                        className="vimeo-player"
                      ></iframe>
                    </div>
                  </div>
                  <h3 className="heading-font text-2xl font-light mt-8">Film Release Event Parties</h3>
                  <p className="body-font text-gray-300">
                    Experience the elegance of Reel Room's film premiere events. Our venue provides filmmakers with a sophisticated setting to showcase their work to cast, crew, investors, and special guests. Complete with state-of-the-art projection and sound equipment, our space elevates any film screening to a memorable occasion.
                  </p>
                </div>
                
                {/* Halloween/Sports Video */}
                <div className="space-y-6">
                  <div className="rounded-md overflow-hidden border border-brand-gold">
                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                      <iframe 
                        src="https://player.vimeo.com/video/1082926490?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        title="Reel Room Events | Halloween, Sports Games"
                        className="vimeo-player"
                      ></iframe>
                    </div>
                  </div>
                  <h3 className="heading-font text-2xl font-light mt-8">General Parties & Sporting Event Venue</h3>
                  <p className="body-font text-gray-300">
                    From themed celebrations to sports viewing parties, Reel Room transforms any occasion into an extraordinary experience. Our versatile space accommodates various events with customizable lighting, sound, and catering options. Whether it's a championship game or a holiday gathering, we provide an atmosphere that can't be replicated at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* The Space Section */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light heading-font mb-6">The Space</h2>
                <p className="text-lg text-gray-600 mb-6 body-font">
                  At Reel Room you can imagine pairing your favourite film or sports games with the finest food and drinks customizable to your preference.
                </p>
                <p className="text-lg text-gray-600 body-font">
                  Our mission is to elevate your private event theatre experience into an extravagant and luxurious time, while offering your friends or guests a unique and memorable 5-star experience.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <SimpleImage 
                  src="/photos/originals/homepage/DSC03125-Enhanced-NR.jpg" 
                  alt="Reel Room Space" 
                  className="w-full h-full rounded-lg"
                  loading="eager"
                  fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Parties Section */}
        <div className="py-16 md:py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden md:order-2">
                <SimpleImage 
                  src="/photos/originals/homepage/DSC03264-Enhanced-NR.jpg" 
                  alt="Reel Room Parties" 
                  className="w-full h-full rounded-lg"
                  loading="eager"
                  fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                  objectFit="cover"
                />
              </div>
              <div className="md:order-1">
                <h2 className="text-3xl md:text-4xl font-light heading-font mb-6">Parties</h2>
                <p className="text-lg text-gray-300 mb-6 body-font">
                  Celebrate the culmination of months of hard work by watching your film come to life on the big screen with your cast, crew, and team. At Reel Room, you can share this unforgettable milestone in a private theatre designed to make your cinematic dreams shine.
                </p>
                <p className="text-lg text-gray-300 body-font">
                  Our mission is to elevate your private event theatre experience into an extravagant and luxurious time, while offering your friends or guests a unique and memorable 5-star experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Private Events Section */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light heading-font mb-6">Private Events</h2>
                <p className="text-lg text-gray-600 mb-6 body-font">
                  At Reel Room you can imagine pairing your favourite film or sports games with the finest food and drinks customizable to your preference.
                </p>
                <p className="text-lg text-gray-600 body-font">
                  Our mission is to elevate your private event theatre experience into an extravagant and luxurious time, while offering your friends or guests a unique and memorable 5-star experience.
                </p>
                <div className="mt-8">
                  <Link 
                    href="/experiences" 
                    className="inline-block border border-brand-gold bg-black text-brand-gold px-8 py-3 uppercase tracking-widest text-sm font-light hover:bg-brand-gold/10 transition-colors"
                  >
                    View Experiences
                  </Link>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <SimpleImage 
                  src="/photos/originals/homepage/DSC03060-Enhanced-NR.jpg" 
                  alt="Reel Room Private Events" 
                  className="w-full h-full rounded-lg"
                  loading="eager"
                  fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Venue Description */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 mb-8 body-font">
                Our venue comfortably accommodates up to 85-95+ guests, complimented by a lounge & bar area with a mounted 70" TV. It is the perfect space for your private event.
              </p>
              <p className="text-lg text-gray-600 mb-8 body-font">
                Intimate screenings, live sports streaming, corporate bookings, PR soirées, brand and influencer showcases, or simply indulging in a unique cinematic experience with friends.
              </p>
              <p className="text-lg text-gray-600 mb-8 body-font">
                Reel Room stands as the ultimate destination for those seeking an exclusive, private, and unforgettable event space experience with the bonus of having your own private movie theatre, allowing for creative event planning.
              </p>
              <div className="mt-8">
                <Link
                  href="/book-now" 
                  className="inline-block border border-brand-gold bg-black text-brand-gold px-8 py-3 uppercase tracking-widest text-sm font-light hover:bg-brand-gold/10 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* What Our Event Space Offers */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-light heading-font mb-12 text-center">What our event space offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm h-[380px] flex flex-col">
                <div className="h-48 overflow-hidden rounded-lg mb-6">
                  <SimpleImage 
                    src="/photos/homepage-originals/DSC03222-Enhanced-NR.jpg" 
                    alt="Film & Screenings" 
                    className="w-full h-full"
                    loading="eager"
                    fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font mb-4">Film & Screenings For Your launch parties</h3>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm h-[380px] flex flex-col">
                <div className="h-48 overflow-hidden rounded-lg mb-6">
                  <SimpleImage 
                    src="/photos/homepage-originals/DSC03227-Enhanced-NR.jpg" 
                    alt="Event Flexibility" 
                    className="w-full h-full"
                    loading="eager"
                    fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font mb-4">Event Flexibility & customization</h3>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm h-[380px] flex flex-col">
                <div className="h-48 overflow-hidden rounded-lg mb-6">
                  <SimpleImage 
                    src="/photos/homepage-originals/DSC03192-Enhanced-NR-Edit.jpg" 
                    alt="Upscale theatre experience" 
                    className="w-full h-full"
                    loading="eager"
                    fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font mb-4">Upscale theatre experience</h3>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm h-[380px] flex flex-col">
                <div className="h-48 overflow-hidden rounded-lg mb-6">
                  <SimpleImage 
                    src="/photos/homepage-originals/DSC03131-Enhanced-NR.jpg" 
                    alt="Catering Services" 
                    className="w-full h-full"
                    loading="eager"
                    fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font mb-4">Catering Services</h3>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm h-[380px] flex flex-col">
                <div className="h-48 overflow-hidden rounded-lg mb-6">
                  <SimpleImage 
                    src="/photos/homepage-originals/DSC03167-Enhanced-NR.jpg" 
                    alt="Bar Services" 
                    className="w-full h-full"
                    loading="eager"
                    fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font mb-4">Bar Services</h3>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm h-[380px] flex flex-col">
                <div className="h-48 overflow-hidden rounded-lg mb-6">
                  <SimpleImage 
                    src="/photos/homepage-originals/DSC03113-Enhanced-NR.jpg" 
                    alt="Curated Food & Alcohol Menus" 
                    className="w-full h-full"
                    loading="eager"
                    fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font mb-4">Curated Food & Alc Menus</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="py-12 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 uppercase tracking-widest text-sm font-light">
              <Link href="/experiences" className="heading-font hover:text-brand-gold transition-colors">
                experiences & pricing
              </Link>
              <Link href="/media" className="heading-font hover:text-brand-gold transition-colors">
                media & faqs
              </Link>
              <Link href="/book-now" className="heading-font hover:text-brand-gold transition-colors">
                book now
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
