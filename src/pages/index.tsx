import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '../components/ReelRoomNavigation';
import ReelRoomFooter from '../components/ReelRoomFooter';
import Script from 'next/script';
import SEO from '@/components/SEO';
import { buildWebPageSchema, buildServiceSchema, SITE_URL } from '@/utils/seo';
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
    
    // Debug video loading after page loads
    const videoDebugTimer = setTimeout(() => {
      const video = document.getElementById('hero-video') as HTMLVideoElement;
      if (video) {
        console.log('🔍 Video debug check after 3 seconds:');
        console.log('Video element exists:', !!video);
        console.log('Video src:', video.src);
        console.log('Video currentSrc:', video.currentSrc);
        console.log('Video readyState:', video.readyState);
        console.log('Video networkState:', video.networkState);
        console.log('Video error:', video.error);
        console.log('Video paused:', video.paused);
        console.log('Video ended:', video.ended);
        console.log('Video duration:', video.duration);
        console.log('Video current time:', video.currentTime);
        
        // Check if video file is accessible
        fetch('/videos/hero-video-compressed.mp4', { method: 'HEAD' })
          .then(response => {
            console.log('📁 Video file check:');
            console.log('Status:', response.status);
            console.log('Content-Type:', response.headers.get('content-type'));
            console.log('Content-Length:', response.headers.get('content-length'));
            console.log('Accept-Ranges:', response.headers.get('accept-ranges'));
          })
          .catch(err => {
            console.error('❌ Video file not accessible:', err);
          });
          
        // Try to force load and play
        if (video.readyState < 2) {
          console.log('🔄 Attempting to reload video...');
          video.load();
          setTimeout(() => {
            video.play().catch(err => console.error('❌ Forced play failed:', err));
          }, 1000);
        }
      } else {
        console.error('❌ Video element not found!');
      }
    }, 3000);
    
    return () => clearTimeout(videoDebugTimer);
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const homeStructuredData = [
    buildWebPageSchema({
      name: 'Private Screening Room & Production Studio Rental Vancouver',
      description:
        'Private screening room and production studio rental in Mount Pleasant, Vancouver, BC. Film premieres, DCP screenings, shoots, and corporate productions.',
      url: SITE_URL,
    }),
    buildServiceSchema({
      name: 'Screen room and studio rental',
      description:
        'Private cinema facility for film premieres, DCP screenings, productions, and corporate studio bookings in Vancouver.',
      url: SITE_URL,
      offers: [
        {
          name: '4-hour studio rental',
          description: 'Base private screen room rental block with on-site coordinator and cleaning.',
          price: '2300',
        },
      ],
    }),
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Private Screening Room &amp; Production Studio Rental Vancouver"
        description="Welcome to the Reel Room—private screen room production and studio rental in Mount Pleasant, minutes from downtown Vancouver. Premieres, DCP screenings, shoots, and corporate productions."
        ogImage="/reel-room-logo.png"
        keywords="private screen room, production rental, studio rental, Vancouver, film screenings, DCP, corporate productions, Mount Pleasant, luxury cinema"
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
        {/* Circular Content Area - Improved spacing and positioning */}
        <div className="absolute inset-0 flex items-center justify-center p-4 mt-16 mb-16">
          <div className="relative w-full max-w-[85vw] sm:max-w-[75vw] md:max-w-[80vw] lg:max-w-[850px] xl:max-w-[900px] aspect-square rounded-full overflow-hidden border-4 border-brand-gold/20">
            {/* Background Video */}
            <div className="absolute inset-0 bg-black">
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Your Reel Room Video with comprehensive debugging */}
                  <video 
                    id="hero-video"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/photos/homepage-originals/DSC03060-Enhanced-NR.jpg"
                    onLoadStart={(e) => {
                      console.log('🎬 Video load started');
                      const video = e.target as HTMLVideoElement;
                      console.log('Video src:', video.currentSrc || video.src);
                      console.log('Video readyState:', video.readyState);
                      console.log('Video networkState:', video.networkState);
                    }}
                    onLoadedMetadata={(e) => {
                      const video = e.target as HTMLVideoElement;
                      console.log('📊 Video metadata loaded');
                      console.log('Duration:', video.duration);
                      console.log('Video dimensions:', video.videoWidth, 'x', video.videoHeight);
                      console.log('Ready state:', video.readyState);
                    }}
                    onLoadedData={(e) => {
                      console.log('✅ Video data loaded successfully');
                      const video = e.target as HTMLVideoElement;
                      const img = video.nextElementSibling as HTMLImageElement;
                      if (img) img.style.display = 'none';
                      
                      // Force play
                      video.play().then(() => {
                        console.log('🎵 Video playing successfully');
                      }).catch(err => {
                        console.error('❌ Autoplay failed:', err);
                        // Try to play on user interaction
                        const playOnClick = () => {
                          video.play().then(() => {
                            console.log('🎵 Video playing after user interaction');
                          }).catch(e => console.error('❌ Manual play failed:', e));
                          document.removeEventListener('click', playOnClick);
                        };
                        document.addEventListener('click', playOnClick, { once: true });
                      });
                    }}
                    onCanPlay={(e) => {
                      const video = e.target as HTMLVideoElement;
                      console.log('🎬 Video can play');
                      console.log('Ready state:', video.readyState);
                      console.log('Buffered ranges:', video.buffered.length);
                      if (video.buffered.length > 0) {
                        console.log('Buffered:', video.buffered.start(0), 'to', video.buffered.end(0));
                      }
                    }}
                    onCanPlayThrough={() => {
                      console.log('🎬 Video can play through');
                    }}
                    onError={(e) => {
                      const video = e.target as HTMLVideoElement;
                      console.error('❌ Video error occurred');
                      console.error('Error code:', video.error?.code);
                      console.error('Error message:', video.error?.message);
                      console.error('Network state:', video.networkState);
                      console.error('Ready state:', video.readyState);
                      console.error('Current src:', video.currentSrc);
                      
                      // Hide video and show fallback image
                      const img = video.nextElementSibling as HTMLImageElement;
                      video.style.display = 'none';
                      if (img) {
                        img.style.display = 'block';
                        console.log('🖼️ Showing fallback image');
                      }
                    }}
                    onStalled={() => {
                      console.warn('⚠️ Video stalled');
                    }}
                    onWaiting={() => {
                      console.warn('⏳ Video waiting for data');
                    }}
                    onProgress={(e) => {
                      const video = e.target as HTMLVideoElement;
                      if (video.buffered.length > 0) {
                        const buffered = (video.buffered.end(0) / video.duration) * 100;
                        console.log('📊 Video buffered:', Math.round(buffered) + '%');
                      }
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
                    <source src="/videos/hero-video-compressed.mp4" type="video/mp4" />
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
                  PRIVATE SCREENING ROOM &amp;
                </h1>
                <h1 className="heading-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight tracking-widest mb-1 sm:mb-2 uppercase leading-tight">
                  PRODUCTION STUDIO RENTAL
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
      <main className="bg-white pt-16 pb-20 md:pb-0">
        {/* Welcome Section */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-eyebrow">Your private screening room</span>
              <h2 className="text-3xl md:text-4xl font-light heading-font mb-4">Private Screening Room &amp; Production Studio Rental in Vancouver, BC</h2>
              <p className="section-tagline mb-8">Picture-perfect. Sound-sealed. Yours for the night.</p>
              <div className="fun-divider" aria-hidden="true"><span className="fun-divider__gem" /></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto body-font">
                The Reel Room is a private cinema facility for rent in Mount Pleasant—minutes from downtown Vancouver. Book the screen room and lounge for film premieres and DCP screenings, photo and video shoots, corporate presentations and recordings, reference playback and client reviews, and other licensed production uses.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10">
                <Link href="/experiences" className="quick-action-card">
                  <span className="quick-action-card__label">Studio &amp; Pricing</span>
                  <span className="quick-action-card__hint">Rates, gallery &amp; rental types</span>
                </Link>
                <Link href="/media" className="quick-action-card">
                  <span className="quick-action-card__label">Media &amp; FAQs</span>
                  <span className="quick-action-card__hint">Photos, videos &amp; answers</span>
                </Link>
                <Link href="/book-now" className="quick-action-card">
                  <span className="quick-action-card__label">Book Now</span>
                  <span className="quick-action-card__hint">Request dates or a tour</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Video Section */}
        <div className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <span className="section-eyebrow">Take the tour</span>
              <h2 className="text-3xl md:text-4xl font-light heading-font mb-3">Experience The Reel Room Studio Walkthrough</h2>
              <p className="section-tagline">Two minutes. Zero commitment. Maximum FOMO.</p>
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
                  <h3 className="heading-font text-2xl font-light mt-8">Film Premieres &amp; DCP Screenings</h3>
                  <p className="body-font text-gray-300">
                    Present your film the way it was meant to be seen. Our private screen room gives filmmakers a professional screening environment for cast, crew, investors, and press—with reference-grade projection, sound, and a lounge for review sessions.
                  </p>
                </div>
                
                {/* Reference playback video for iOS */}
                <div className="space-y-6">
                  <div className="rounded-md overflow-hidden border border-brand-gold relative" style={{ paddingBottom: "56.25%" }}>
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                      <div className="relative w-full h-full">
                        <img 
                          src="/photos/homepage-originals/DSC03110-Enhanced-NR.jpg"
                          alt="Reference playback and client review video thumbnail"
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
                            <span className="text-white font-medium text-lg shadow-md">Play reference playback video</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="heading-font text-2xl font-light mt-8">Production studio events: reference playback</h3>
                  <p className="body-font text-gray-300 max-w-md">
                    Rent the screen room for colour-critical reviews, client sign-offs, and alternate-cut playback with cinema-scale picture and sound—catering and bar follow your technical schedule.
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
                        title="Film premiere and DCP screening at Reel Room Vancouver"
                        className="vimeo-player"
                      ></iframe>
                    </div>
                  </div>
                  <h3 className="heading-font text-2xl font-light mt-8">Film Premieres &amp; DCP Screenings</h3>
                  <p className="body-font text-gray-300">
                    Present your film the way it was meant to be seen. Our private screen room gives filmmakers a professional screening environment for cast, crew, investors, and press—with reference-grade projection, sound, and a lounge for review sessions.
                  </p>
                </div>
                
                {/* Reference playback video */}
                <div className="space-y-6">
                  <div className="rounded-md overflow-hidden border border-brand-gold">
                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                      <iframe 
                        src="https://player.vimeo.com/video/1082926490?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        title="Reel Room studio rental | reference playback and client reviews"
                        className="vimeo-player"
                      ></iframe>
                    </div>
                  </div>
                  <h3 className="heading-font text-2xl font-light mt-8">Production studio events: reference playback</h3>
                  <p className="body-font text-gray-300">
                    Use the room for finishing reviews, agency approvals, and technical playbacks with cinema-scale image and audio. Lighting, sound, and catering are configured around your rental block—built for crews that need a private screening facility, not open programming.
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
                <span className="section-eyebrow">The facility</span>
                <h2 className="text-3xl md:text-4xl font-light heading-font mb-6">The Space</h2>
                <blockquote className="cinema-quote mb-6">
                  Reference-grade picture and sound, optional catering and bar—structured around your rental schedule, not open-door hospitality.
                </blockquote>
                <p className="text-lg text-gray-600 body-font">
                  We focus on technical delivery, crew comfort, and a polished environment for screenings, tapings, and client-facing reviews.
                </p>
                <div className="feature-tags mt-8">
                  <span className="feature-tag">Sound-treated screen room</span>
                  <span className="feature-tag">Lounge &amp; bar</span>
                  <span className="feature-tag">Schedule-driven service</span>
                </div>
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
        
        {/* Premieres & reviews */}
        <div className="py-16 md:py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden md:order-2">
                <img 
                  src="/photos/homepage-originals/DSC03264-Enhanced-NR.jpg" 
                  alt="Reel Room film premiere and screening rental" 
                  className="w-full h-full rounded-lg object-cover"
                  loading="eager"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="md:order-1">
                <span className="section-eyebrow">Lights down, credits roll</span>
                <h2 className="text-3xl md:text-4xl font-light heading-font mb-6">Premieres &amp; crew screenings</h2>
                <blockquote className="cinema-quote cinema-quote--dark mb-6">
                  Finish your post pipeline with a locked cut on the big screen—for cast, crew, investors, and distributor-ready DCP runs.
                </blockquote>
                <p className="text-lg text-gray-300 body-font">
                  Technical prep, holdbacks, and schedule are handled with your production in mind—this is a working screening facility first.
                </p>
                <div className="feature-tags mt-8">
                  <span className="feature-tag feature-tag--dark">DCP playback</span>
                  <span className="feature-tag feature-tag--dark">Cast &amp; crew nights</span>
                  <span className="feature-tag feature-tag--dark">Investor reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Studio & corporate productions */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-eyebrow">Beyond the velvet rope</span>
                <h2 className="text-3xl md:text-4xl font-light heading-font mb-6">Studio &amp; corporate productions</h2>
                <p className="text-lg text-gray-600 mb-6 body-font">
                  Book the screen room and lounge for shareholder webcasts, all-hands with picture-in-picture playback, sizzle reels, training modules, and press-screening workflows—all with broadcast-style AV support.
                </p>
                <div className="text-panel">
                  <p className="text-lg text-gray-700 body-font mb-0">
                    Layout, connectivity, and run-of-show follow your rental agreement—add-ons stay secondary to the technical brief.
                  </p>
                </div>
                <div className="mt-8">
                  <Link 
                    href="/experiences" 
                    className="inline-block border border-brand-gold bg-black text-brand-gold px-8 py-3 uppercase tracking-widest text-sm font-light hover:bg-brand-gold/10 transition-colors"
                  >
                    View studio use &amp; pricing
                  </Link>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img 
                  src="/photos/homepage-originals/DSC03060-Enhanced-NR.jpg" 
                  alt="Reel Room studio and corporate production rental" 
                  className="w-full h-full rounded-lg object-cover"
                  loading="eager"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Capacity & use cases */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="section-eyebrow">At a glance</span>
              <h2 className="text-3xl md:text-4xl font-light heading-font mb-4">Built for productions that mean business</h2>
              <p className="section-tagline mb-6">Private cinema. Lounge support. Your run-of-show.</p>
              <div className="stat-row">
                <div className="stat-chip">
                  <span className="stat-chip__value">85–95+</span>
                  <span className="stat-chip__label">Guest capacity</span>
                </div>
                <div className="stat-chip">
                  <span className="stat-chip__value">70&quot;</span>
                  <span className="stat-chip__label">Secondary display</span>
                </div>
                <div className="stat-chip">
                  <span className="stat-chip__value">DCP</span>
                  <span className="stat-chip__label">On request</span>
                </div>
                <div className="stat-chip">
                  <span className="stat-chip__value stat-chip__value--long">Mount Pleasant</span>
                  <span className="stat-chip__label">Vancouver, BC</span>
                </div>
              </div>
              <div className="feature-tags justify-center mb-8">
                <span className="feature-tag">Premieres &amp; DCP</span>
                <span className="feature-tag">Colour-critical reviews</span>
                <span className="feature-tag">Branded playbacks</span>
                <span className="feature-tag">Press screenings</span>
                <span className="feature-tag">Crew Q&amp;As</span>
              </div>
              <blockquote className="cinema-quote max-w-2xl mx-auto text-left md:text-center md:border-l-0 md:border-t md:pt-6 md:pl-0 md:bg-none">
                Schedule-driven, tech-forward, and intended for productions—not open public programming.
              </blockquote>
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
        
        {/* What the studio offers */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="section-eyebrow block text-center">Everything included</span>
            <h2 className="text-3xl md:text-4xl font-light heading-font mb-4 text-center">What our studio rental includes</h2>
            <p className="section-tagline text-center mb-12">The full package—minus the red carpet. (We can talk about that.)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Item 1 */}
              <div className="inclusion-card">
                <div className="inclusion-card__img">
                  <img 
                    src="/photos/homepage-originals/DSC03222-Enhanced-NR.jpg" 
                    alt="Film & Screenings" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font text-center">Film & Screenings</h3>
                <p className="text-gray-600 text-center mt-2">Premieres &amp; review screenings</p>
              </div>
              
              {/* Item 2 */}
              <div className="inclusion-card">
                <div className="inclusion-card__img">
                  <img 
                    src="/photos/homepage-originals/DSC03227-Enhanced-NR.jpg" 
                    alt="Rental flexibility" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font text-center">Rental flexibility</h3>
                <p className="text-gray-600 text-center mt-2">Customization for your needs</p>
              </div>
              
              {/* Item 3 */}
              <div className="inclusion-card">
                <div className="inclusion-card__img">
                  <img 
                    src="/photos/homepage-originals/DSC03192-Enhanced-NR-Edit.jpg" 
                    alt="Upscale screen room experience" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font text-center">Upscale Screen Room Experience</h3>
                <p className="text-gray-600 text-center mt-2">Premium comfort and quality</p>
              </div>
              
              {/* Item 4 */}
              <div className="inclusion-card">
                <div className="inclusion-card__img">
                  <img 
                    src="/photos/homepage-originals/DSC03131-Enhanced-NR.jpg" 
                    alt="Lounge for production use" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font text-center">Lounge (production use)</h3>
                <p className="text-gray-600 text-center mt-2">Notes, review sessions, scheduled breaks</p>
              </div>
              
              {/* Item 5 */}
              <div className="inclusion-card">
                <div className="inclusion-card__img">
                  <img 
                    src="/photos/homepage-originals/DSC03167-Enhanced-NR.jpg" 
                    alt="On-site production support" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font text-center">On-site coordination</h3>
                <p className="text-gray-600 text-center mt-2">Staffing aligned with your run-of-show</p>
              </div>
              
              {/* Item 6 */}
              <div className="inclusion-card">
                <div className="inclusion-card__img">
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
                studio use &amp; pricing
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
        
        {/* Vibe banner + quick links */}
        <div className="vibe-banner">
          <p className="vibe-banner__quote">&ldquo;Your premiere. Your crew. Your room.&rdquo;</p>
          <p className="vibe-banner__sub">Mount Pleasant&apos;s private cinema—booked on your schedule.</p>
        </div>
        <div className="py-12 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 uppercase tracking-widest text-sm font-light">
              <Link href="/experiences" className="heading-font hover:text-brand-gold transition-colors">
                studio use &amp; pricing
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
        <div className="py-16 bg-gray-900 text-white cta-spotlight relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="cta-spotlight__eyebrow">Roll credits on the search</span>
            <h2 className="text-3xl font-light section-heading mb-4">Ready to book your production or studio rental?</h2>
            <p className="text-xl mb-2 max-w-2xl mx-auto section-tagline section-tagline--light">
              Hold dates, technical specs, and a quote tailored to your shoot or screening.
            </p>
            <div className="fun-divider" aria-hidden="true"><span className="fun-divider__gem" /></div>
            <div className="mt-8">
              {!isIOS ? (
                <CalendlyPopupLink 
                  text="Request a Booking"
                  className="inline-block px-8 py-4 bg-brand-gold text-black rounded-md text-lg font-medium hover:bg-brand-cream transition-colors"
                />
              ) : (
                <Link 
                  href="/book-now" 
                  className="inline-block px-8 py-4 bg-brand-gold text-black rounded-md text-lg font-medium hover:bg-brand-cream transition-colors"
                >
                  Request a Booking
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <ReelRoomFooter />
    </div>
  );
}
