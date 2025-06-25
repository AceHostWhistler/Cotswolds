import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ReelRoomFooter from '@/components/ReelRoomFooter';
import Image from 'next/image';
import LazyVimeoPlayer from '@/components/LazyVimeoPlayer';
import Script from 'next/script';

export default function Home() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
    
    // Load Vimeo script for the iframe embeds
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  
  // Add a separate useEffect to handle video playback
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && isPageLoaded) {
      // Create a video URL that works in both development and production
      // In production, we need to make sure the video path is correct
      const videoUrl = '/videos/homepage-bg.mp4';
      
      // Set the source programmatically after component is mounted
      const source = document.createElement('source');
      source.src = videoUrl;
      source.type = 'video/mp4';
      
      // Clear any existing sources
      while (videoElement.firstChild) {
        videoElement.removeChild(videoElement.firstChild);
      }
      
      // Add the new source
      videoElement.appendChild(source);
      
      // Load the video
      videoElement.load();
      
      // Try to play the video
      const playVideo = () => {
        const playPromise = videoElement.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Video playback started successfully");
              setVideoLoaded(true);
            })
            .catch(error => {
              console.error("Error playing video:", error);
              // Try again with a delay
              setTimeout(() => {
                videoElement.play()
                  .then(() => setVideoLoaded(true))
                  .catch(err => {
                    console.error("Second attempt failed:", err);
                    // If second attempt fails, show fallback image
                    setVideoFailed(true);
                  });
              }, 1000);
            });
        }
      };
      
      // Wait a bit to ensure the video is properly loaded
      setTimeout(playVideo, 100);
      
      // Add error event listener to video element
      const handleVideoError = (e: Event) => {
        console.error("Video error event triggered", e);
        setVideoFailed(true);
      };
      
      videoElement.addEventListener('error', handleVideoError);
      
      return () => {
        videoElement.removeEventListener('error', handleVideoError);
      };
    }
  }, [isPageLoaded]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <Head>
        <title>Private Theatre Event Venue Vancouver</title>
        <meta name="description" content="Welcome to the Reel Room, a haven where private luxury meets the magic of cinema and events. Situated in Mount Pleasant, only minutes away from downtown Vancouver." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Preload the video for better performance */}
        <link rel="preload" href="/videos/homepage-bg.mp4" as="video" type="video/mp4" />
      </Head>

      {/* Include our video loader helper script */}
      <Script src="/video-loader.js" strategy="afterInteractive" />
      
      <div className="relative min-h-screen bg-black">
        {/* Gold Diamond Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-30" style={{ 
          backgroundImage: "linear-gradient(45deg, #ba9765 25%, transparent 25%), linear-gradient(-45deg, #ba9765 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ba9765 75%), linear-gradient(-45deg, transparent 75%, #ba9765 75%)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px"
        }}></div>
        
        {/* Top Navigation Links - Responsive improvements */}
        <div className="absolute top-10 left-0 w-full z-30 flex justify-center px-4 sm:px-0">
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
        
        {/* Menu Button - Adjusted for better mobile UX */}
        <div className="absolute top-6 sm:top-10 right-4 sm:right-10 z-40">
          <button 
            className="text-brand-gold p-2 bg-black/50 backdrop-blur-sm rounded-md" 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Circular Content Area - Responsive for all devices */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[90vw] lg:max-w-[1000px] xl:max-w-[1100px] aspect-square rounded-full overflow-hidden border-4 border-brand-gold/20">
            {/* Background Video - Now using Vimeo */}
            <div className="absolute inset-0 bg-black">
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute inset-0 z-10 bg-black opacity-30"></div>
                <div className="absolute inset-0 scale-[1.5]">
                  <LazyVimeoPlayer 
                    videoId="1082926490" 
                    autoplay={true}
                    loop={true}
                    muted={true}
                    responsive={true}
                    background={true}
                    className="w-full h-full object-cover scale-[1.2]"
                  />
                </div>
              </div>
              
              {/* Content Overlay - Responsive text */}
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
        
        {/* Featured Content Box - Responsive */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-20 bg-black text-white p-0 max-w-[90%] sm:max-w-md rounded-sm overflow-hidden">
          <div className="border border-brand-gold">
            <div className="flex flex-col xs:flex-row">
              <div className="w-full xs:w-1/2 aspect-video xs:aspect-auto">
                {/* Using the exact image from the screenshot */}
                <img 
                  src="/photos/Blogs/Screen Shot 2025-05-09 at 1.49.41 PM.png" 
                  alt="Magpie Wedding Feature" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full xs:w-1/2 p-3 sm:p-5">
                <h3 className="heading-font text-base sm:text-xl font-light mb-2 sm:mb-3">
                  Reel Room featured in Elle Magazine & Magpie Wedding
                </h3>
                <p className="body-font text-xs sm:text-sm mb-2 sm:mb-4">
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
      
      {/* Mobile Navigation Menu - Enhanced for better UX */}
      <div className={`fixed inset-0 bg-black bg-opacity-95 z-50 transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="h-full flex flex-col items-center justify-center text-white space-y-6 sm:space-y-8 py-16 px-4">
          <Link 
            href="/" 
            className="heading-font text-xl sm:text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/experiences" 
            className="heading-font text-xl sm:text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Experiences & Pricing
          </Link>
          <Link 
            href="/reservations" 
            className="heading-font text-xl sm:text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Reservations
          </Link>
          <Link 
            href="/media" 
            className="heading-font text-xl sm:text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Media & FAQs
          </Link>
          <Link 
            href="/blog" 
            className="heading-font text-xl sm:text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Reel Room Blog
          </Link>
        </div>
        
        <button 
          className="absolute top-6 right-4 sm:top-8 sm:right-8 text-brand-gold p-2 bg-black/50 backdrop-blur-sm rounded-md" 
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Main Content from Original Website */}
      <main>
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
        
        {/* Featured Vimeo Videos Section - NEW */}
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
                      title="Film Release/Launch Parties at The Reel Room Vancouver"
                      className="vimeo-player"
                    ></iframe>
                  </div>
                </div>
                <h3 className="heading-font text-2xl font-light mt-8">Film Release Event Parties</h3>
                <p className="body-font text-gray-300">
                  Experience the elegance of The Reel Room's film premiere events. Our venue provides filmmakers with a sophisticated setting to showcase their work to cast, crew, investors, and special guests. Complete with state-of-the-art projection and sound equipment, our space elevates any film screening to a memorable occasion.
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
                  From themed celebrations to sports viewing parties, The Reel Room transforms any occasion into an extraordinary experience. Our versatile space accommodates various events with customizable lighting, sound, and catering options. Whether it's a championship game or a holiday gathering, we provide an atmosphere that can't be replicated at home.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* The Space Section - Updated photo */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light heading-font mb-6">The Space</h2>
                <p className="text-lg text-gray-600 mb-6 body-font">
                  At the Reel Room you can imagine pairing your favourite film or sports games with the finest food and drinks customizable to your preference.
                </p>
                <p className="text-lg text-gray-600 body-font">
                  Our mission is to elevate your private event theatre experience into an extravagant and luxurious time, while offering your friends or guests a unique and memorable 5-star experience.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img 
                  src="/photos/originals/homepage/DSC03125-Enhanced-NR.jpg" 
                  alt="Reel Room Space" 
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Parties Section - Updated photo */}
        <div className="py-16 md:py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden md:order-2">
                <img 
                  src="/photos/originals/homepage/DSC03264-Enhanced-NR.jpg" 
                  alt="Reel Room Parties" 
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="md:order-1">
                <h2 className="text-3xl md:text-4xl font-light heading-font mb-6">Parties</h2>
                <p className="text-lg text-gray-300 mb-6 body-font">
                  Celebrate the culmination of months of hard work by watching your film come to life on the big screen with your cast, crew, and team. At The Reel Room, you can share this unforgettable milestone in a private theatre designed to make your cinematic dreams shine.
                </p>
                <p className="text-lg text-gray-300 body-font">
                  Our mission is to elevate your private event theatre experience into an extravagant and luxurious time, while offering your friends or guests a unique and memorable 5-star experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Private Events Section - Updated photo */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light heading-font mb-6">Private Events</h2>
                <p className="text-lg text-gray-600 mb-6 body-font">
                  At the Reel Room you can imagine pairing your favourite film or sports games with the finest food and drinks customizable to your preference.
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
                  src="/photos/originals/homepage/DSC03060-Enhanced-NR.jpg" 
                  alt="Reel Room Private Events" 
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
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
                The Reel Room stands as the ultimate destination for those seeking an exclusive, private, and unforgettable event space experience with the bonus of having your own private movie theatre, allowing for creative event planning.
              </p>
              <div className="mt-8">
                <Link
                  href="/reservations" 
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
                  <img 
                    src="/photos/homepage-originals/DSC03222-Enhanced-NR.jpg" 
                    alt="Film & Screenings" 
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font mb-4">Film & Screenings For Your launch parties</h3>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm h-[380px] flex flex-col">
                <div className="h-48 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="/photos/homepage-originals/DSC03227-Enhanced-NR.jpg" 
                    alt="Event Flexibility" 
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font mb-4">Event Flexibility & customization</h3>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm h-[380px] flex flex-col">
                <div className="h-48 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="/photos/homepage-originals/DSC03192-Enhanced-NR-Edit.jpg" 
                    alt="Upscale theatre experience" 
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font mb-4">Upscale theatre experience</h3>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm h-[380px] flex flex-col">
                <div className="h-48 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="/photos/homepage-originals/DSC03131-Enhanced-NR.jpg" 
                    alt="Catering Services" 
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font mb-4">Catering Services</h3>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm h-[380px] flex flex-col">
                <div className="h-48 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="/photos/homepage-originals/DSC03167-Enhanced-NR.jpg" 
                    alt="Bar Services" 
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-medium heading-font mb-4">Bar Services</h3>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm h-[380px] flex flex-col">
                <div className="h-48 overflow-hidden rounded-lg mb-6">
                  <img 
                    src="/photos/homepage-originals/DSC03113-Enhanced-NR.jpg" 
                    alt="Curated Food & Alcohol Menus" 
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
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
