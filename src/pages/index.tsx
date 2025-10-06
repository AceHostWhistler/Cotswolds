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
import CalendlyPopupLink from '@/components/CalendlyPopupLink';

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
    "image": "/reel-room-logo.png",
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
        ogImage="/reel-room-logo.png"
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
      
      {/* Instagram embed script */}
      <Script src="//www.instagram.com/embed.js" strategy="afterInteractive" />
      
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
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Your Reel Room Video */}
                  <video 
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/photos/homepage-originals/DSC03060-Enhanced-NR.jpg"
                    onError={(e) => {
                      console.error('Video failed to load:', e);
                      // Hide video and show fallback image
                      const video = e.target as HTMLVideoElement;
                      const img = video.nextElementSibling as HTMLImageElement;
                      video.style.display = 'none';
                      if (img) img.style.display = 'block';
                    }}
                    onLoadedData={(e) => {
                      console.log('Video loaded successfully');
                      // Hide fallback image when video loads
                      const video = e.target as HTMLVideoElement;
                      const img = video.nextElementSibling as HTMLImageElement;
                      if (img) img.style.display = 'none';
                      video.play().catch(err => console.log('Autoplay failed:', err));
                    }}
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      width: '100%',
                      height: '100%',
                      transform: 'scale(1.2)',
                      zIndex: 2
                    }}
                  >
                    <source src="/photos/Video%20Home%20Page/Reel%20Room%20Website.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Fallback image - shows if video fails */}
                  <img 
                    src="/photos/homepage-originals/DSC03060-Enhanced-NR.jpg" 
                    alt="Reel Room Background" 
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      width: '100%',
                      height: '100%',
                      transform: 'scale(1.2)',
                      zIndex: 1,
                      display: 'none'
                    }}
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
        
        {/* Featured Content Box - Remove for all devices */}
        
      </div>
      
      {/* Main Content - Added more padding to ensure proper spacing after the hero section */}
      <main className="bg-white pt-16">
        {/* Welcome Section */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light heading-font mb-6">Welcome to The Reel Room | A Unique Venue for Private Events in Vancouver</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto body-font">
                Looking for a private event space in Vancouver? The Reel Room is the perfect place to host your next gathering. Located in Mount Pleasant, just minutes from downtown Vancouver, our venue is ideal for movie nights, cocktail parties, birthday parties, corporate events, receptions, and more.
              </p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto body-font mt-4">
                With a private theatre and a stylish lounge spaces, The Reel Room offers a one-of-a-kind setting for events of all kinds.
              </p>
            </div>
          </div>
        </div>
        
        {/* Featured Video Section */}
        <div className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-light heading-font mb-4">Experience The Reel Room Venue Walkthrough</h2>
            </div>
            
            <div className="flex justify-center">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/reel/DOHZs2BksAZ/?utm_source=ig_embed&amp;utm_campaign=loading" 
                data-instgrm-version="14" 
                style={{ 
                  background: 'transparent', 
                  border: '0', 
                  borderRadius: '16px', 
                  boxShadow: 'none', 
                  margin: '0', 
                  maxWidth: '460px', 
                  minWidth: '280px', 
                  padding: '0', 
                  width: '85%'
                }}
                >
                  <div style={{ padding: '16px' }}>
                    <a 
                      href="https://www.instagram.com/reel/DOHZs2BksAZ/?utm_source=ig_embed&amp;utm_campaign=loading" 
                      style={{ 
                        background: '#FFFFFF', 
                        lineHeight: '0', 
                        padding: '0 0', 
                        textAlign: 'center', 
                        textDecoration: 'none', 
                        width: '100%' 
                      }} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                          <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                          <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                        </div>
                      </div>
                      <div style={{ padding: '19% 0' }}></div>
                      <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                              <g>
                                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div style={{ paddingTop: '8px' }}>
                        <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 550, lineHeight: '18px' }}>
                          View this post on Instagram
                        </div>
                      </div>
                      <div style={{ padding: '12.5% 0' }}></div>
                    </a>
                  </div>
                </blockquote>
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
                      <div className="relative w-full h-full">
                        <img 
                          src="/photos/homepage-originals/DSC03066-Enhanced-NR.jpg"
                          alt="Film Release Video Thumbnail"
                          className="absolute inset-0 w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button 
                            onClick={() => {
                              const iframe = document.createElement('iframe');
                              iframe.src = "https://player.vimeo.com/video/1027464900?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1";
                              iframe.allow = "autoplay; fullscreen; picture-in-picture";
                              iframe.style.position = "absolute";
                              iframe.style.top = "0";
                              iframe.style.left = "0";
                              iframe.style.width = "100%";
                              iframe.style.height = "100%";
                              iframe.style.border = "none";
                              
                              const modal = document.createElement('div');
                              modal.style.position = "fixed";
                              modal.style.top = "0";
                              modal.style.left = "0";
                              modal.style.width = "100%";
                              modal.style.height = "100%";
                              modal.style.backgroundColor = "rgba(0,0,0,0.9)";
                              modal.style.zIndex = "9999";
                              modal.style.display = "flex";
                              modal.style.alignItems = "center";
                              modal.style.justifyContent = "center";
                              
                              const container = document.createElement('div');
                              container.style.width = "90%";
                              container.style.maxWidth = "800px";
                              container.style.aspectRatio = "16/9";
                              container.style.position = "relative";
                              
                              const closeBtn = document.createElement('button');
                              closeBtn.innerHTML = "×";
                              closeBtn.style.position = "absolute";
                              closeBtn.style.top = "-40px";
                              closeBtn.style.right = "0";
                              closeBtn.style.fontSize = "30px";
                              closeBtn.style.color = "white";
                              closeBtn.style.background = "none";
                              closeBtn.style.border = "none";
                              closeBtn.style.cursor = "pointer";
                              closeBtn.onclick = () => {
                                document.body.removeChild(modal);
                                document.body.style.overflow = "auto";
                              };
                              
                              container.appendChild(iframe);
                              container.appendChild(closeBtn);
                              modal.appendChild(container);
                              
                              document.body.appendChild(modal);
                              document.body.style.overflow = "hidden";
                            }}
                            className="flex flex-col items-center justify-center z-10"
                          >
                            <div className="w-20 h-20 rounded-full bg-brand-gold flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <span className="text-white font-medium text-lg shadow-md">Play Film Release Video</span>
                          </button>
                        </div>
                      </div>
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
                      <div className="relative w-full h-full">
                        <img 
                          src="/photos/homepage-originals/DSC03110-Enhanced-NR.jpg"
                          alt="Sports Events Video Thumbnail"
                          className="absolute inset-0 w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button 
                            onClick={() => {
                              const iframe = document.createElement('iframe');
                              iframe.src = "https://player.vimeo.com/video/1082926490?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1";
                              iframe.allow = "autoplay; fullscreen; picture-in-picture";
                              iframe.style.position = "absolute";
                              iframe.style.top = "0";
                              iframe.style.left = "0";
                              iframe.style.width = "100%";
                              iframe.style.height = "100%";
                              iframe.style.border = "none";
                              
                              const modal = document.createElement('div');
                              modal.style.position = "fixed";
                              modal.style.top = "0";
                              modal.style.left = "0";
                              modal.style.width = "100%";
                              modal.style.height = "100%";
                              modal.style.backgroundColor = "rgba(0,0,0,0.9)";
                              modal.style.zIndex = "9999";
                              modal.style.display = "flex";
                              modal.style.alignItems = "center";
                              modal.style.justifyContent = "center";
                              
                              const container = document.createElement('div');
                              container.style.width = "90%";
                              container.style.maxWidth = "800px";
                              container.style.aspectRatio = "16/9";
                              container.style.position = "relative";
                              
                              const closeBtn = document.createElement('button');
                              closeBtn.innerHTML = "×";
                              closeBtn.style.position = "absolute";
                              closeBtn.style.top = "-40px";
                              closeBtn.style.right = "0";
                              closeBtn.style.fontSize = "30px";
                              closeBtn.style.color = "white";
                              closeBtn.style.background = "none";
                              closeBtn.style.border = "none";
                              closeBtn.style.cursor = "pointer";
                              closeBtn.onclick = () => {
                                document.body.removeChild(modal);
                                document.body.style.overflow = "auto";
                              };
                              
                              container.appendChild(iframe);
                              container.appendChild(closeBtn);
                              modal.appendChild(container);
                              
                              document.body.appendChild(modal);
                              document.body.style.overflow = "hidden";
                            }}
                            className="flex flex-col items-center justify-center z-10"
                          >
                            <div className="w-20 h-20 rounded-full bg-brand-gold flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <span className="text-white font-medium text-lg shadow-md">Play Sports Events Video</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="heading-font text-2xl font-light mt-8">General Parties & Sporting Event Venue</h3>
                  <p className="body-font text-gray-300 max-w-md">
                    From themed celebrations to sports viewing parties, Reel Room transforms any occasion into an extraordinary experience. Our versatile space accommodates various events with customizable options.
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
                <img 
                  src="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg" 
                  alt="Reel Room Space" 
                  className="w-full h-full rounded-lg object-cover"
                  loading="eager"
                  style={{ display: 'block' }}
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
                <img 
                  src="/photos/homepage-originals/DSC03264-Enhanced-NR.jpg" 
                  alt="Reel Room Parties" 
                  className="w-full h-full rounded-lg object-cover"
                  loading="eager"
                  style={{ display: 'block' }}
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
                <img 
                  src="/photos/homepage-originals/DSC03060-Enhanced-NR.jpg" 
                  alt="Reel Room Private Events" 
                  className="w-full h-full rounded-lg object-cover"
                  loading="eager"
                  style={{ display: 'block' }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Item 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-48 mb-4 overflow-hidden rounded">
                  <img 
                    src="/photos/homepage-originals/DSC03222-Enhanced-NR.jpg" 
                    alt="Film & Screenings" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font text-center">Film & Screenings</h3>
                <p className="text-gray-600 text-center mt-2">For Your launch parties</p>
              </div>
              
              {/* Item 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-48 mb-4 overflow-hidden rounded">
                  <img 
                    src="/photos/homepage-originals/DSC03227-Enhanced-NR.jpg" 
                    alt="Event Flexibility" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font text-center">Event Flexibility</h3>
                <p className="text-gray-600 text-center mt-2">Customization for your needs</p>
              </div>
              
              {/* Item 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-48 mb-4 overflow-hidden rounded">
                  <img 
                    src="/photos/homepage-originals/DSC03192-Enhanced-NR-Edit.jpg" 
                    alt="Upscale theatre experience" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font text-center">Upscale Theatre Experience</h3>
                <p className="text-gray-600 text-center mt-2">Premium comfort and quality</p>
              </div>
              
              {/* Item 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-48 mb-4 overflow-hidden rounded">
                  <img 
                    src="/photos/homepage-originals/DSC03131-Enhanced-NR.jpg" 
                    alt="Catering Services" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font text-center">Catering Services</h3>
                <p className="text-gray-600 text-center mt-2">Customizable food options</p>
              </div>
              
              {/* Item 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-48 mb-4 overflow-hidden rounded">
                  <img 
                    src="/photos/homepage-originals/DSC03167-Enhanced-NR.jpg" 
                    alt="Bar Services" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font text-center">Bar Services</h3>
                <p className="text-gray-600 text-center mt-2">Premium drink selections</p>
              </div>
              
              {/* Item 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-48 mb-4 overflow-hidden rounded">
                  <img 
                    src="/photos/homepage-originals/DSC03064-Enhanced-NR.jpg" 
                    alt="Audio Visual Equipment" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font text-center">Audio Visual Equipment</h3>
                <p className="text-gray-600 text-center mt-2">State-of-the-art technology</p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 uppercase tracking-widest text-sm font-light">
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
        
        {/* Reserve Your Dates - Bottom CTA */}
        <div className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Unforgettable Event?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to check availability and start planning your perfect event at The Reel Room.
            </p>
            {!isIOS ? (
              <CalendlyPopupLink 
                text="Reserve Your Dates"
                className="inline-block px-8 py-4 bg-brand-gold text-black rounded-md text-lg font-medium hover:bg-amber-400 transition-colors"
              />
            ) : (
              <Link 
                href="/book-now" 
                className="inline-block px-8 py-4 bg-brand-gold text-black rounded-md text-lg font-medium hover:bg-amber-400 transition-colors"
              >
                Reserve Your Dates
              </Link>
            )}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <ReelRoomFooter />
    </div>
  );
}
