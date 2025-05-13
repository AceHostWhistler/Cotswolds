import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import ReelRoomFooter from '@/components/ReelRoomFooter';
import Image from 'next/image';
import LazyVimeoPlayer from '@/components/LazyVimeoPlayer';

export default function Home() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
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
        {/* Google Fonts for Acumin Pro and Futura PT Light */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="relative min-h-screen bg-black">
        {/* Gold Diamond Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-30" style={{ 
          backgroundImage: "linear-gradient(45deg, #ba9765 25%, transparent 25%), linear-gradient(-45deg, #ba9765 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ba9765 75%), linear-gradient(-45deg, transparent 75%, #ba9765 75%)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px"
        }}></div>
        
        {/* Top Navigation Links - Improved styling */}
        <div className="absolute top-10 left-0 w-full z-30 flex justify-center space-x-16 text-white">
          <Link href="/experiences" className="heading-font uppercase tracking-widest text-sm font-light relative overflow-hidden group bg-black/50 backdrop-blur-sm px-8 py-3 transition-all shadow-lg">
            <span className="absolute inset-0 border border-brand-gold transform transition-transform duration-300 group-hover:scale-95"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/10 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10 group-hover:text-brand-gold transition-colors duration-300">EXPERIENCES & PRICING</span>
          </Link>
          <Link href="/reservations" className="heading-font uppercase tracking-widest text-sm font-light relative overflow-hidden group bg-black/50 backdrop-blur-sm px-8 py-3 transition-all shadow-lg">
            <span className="absolute inset-0 border border-brand-gold transform transition-transform duration-300 group-hover:scale-95"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/10 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10 group-hover:text-brand-gold transition-colors duration-300">RESERVATIONS</span>
          </Link>
        </div>
        
        {/* Menu Button */}
        <div className="absolute top-10 right-10 z-40">
          <button className="text-brand-gold" onClick={toggleMenu}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Circular Content Area */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[1100px] h-[1100px] rounded-full overflow-hidden border-4 border-brand-gold/20">
            {/* Background Video */}
            <div className="absolute inset-0 bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80"
                src="/photos/Video Home Page/Reel Room Website.mov"
                onLoadedData={() => setVideoLoaded(true)}
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-10">
                {/* Logo */}
                <div className="mb-6">
                  <div className="border border-brand-gold p-6 inline-block bg-black">
                    <img 
                      src="/favicons/Logo Reel Room.png" 
                      alt="Reel Room" 
                      className="h-28 w-auto object-contain"
                      loading="eager"
                      style={{ backgroundColor: 'black', display: 'block' }}
                    />
                  </div>
                </div>
                
                <p className="heading-font text-sm tracking-widest uppercase mb-16 font-extralight">
                  LOCATED IN MOUNT PLEASANT, BC
                </p>
                
                <h1 className="heading-font text-6xl font-extralight tracking-widest mb-2 uppercase">
                  PRIVATE THEATRE
                </h1>
                <h1 className="heading-font text-6xl font-extralight tracking-widest mb-2 uppercase">
                  EVENT VENUE
                </h1>
                <h1 className="heading-font text-6xl font-extralight tracking-widest mb-12 uppercase">
                  VANCOUVER
                </h1>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Content Box - Updated to match screenshot with correct image */}
        <div className="absolute bottom-8 right-8 z-20 bg-black text-white p-0 max-w-md rounded-sm overflow-hidden">
          <div className="border border-brand-gold">
            <div className="flex">
              <div className="w-1/2">
                {/* Using the exact image from the screenshot */}
                <img 
                  src="/photos/Blogs/Screen Shot 2025-05-09 at 1.49.41 PM.png" 
                  alt="Magpie Wedding Feature" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 p-5">
                <h3 className="heading-font text-xl font-light mb-3">
                  Reel Room featured in Elle Magazine & Magpie Wedding
                </h3>
                <p className="body-font text-sm mb-4">
                  Click here to view the article for your wedding inspiration
                </p>
                
                <div className="mt-2">
                  <Link
                    href="https://www.magpiewedding.com/wedding-inspiration/bold-and-colourful-wedding-with-iris-apfel-vibes/"
                    target="_blank"
                    className="text-brand-gold uppercase tracking-widest text-sm font-light hover:text-brand-cream transition-colors"
                  >
                    View Articles →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-90 z-50 transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="h-full flex flex-col items-center justify-center text-white space-y-8">
          <Link href="/" className="heading-font text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors">
            Home
          </Link>
          <Link href="/experiences" className="heading-font text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors">
            Experiences & Pricing
          </Link>
          <Link href="/reservations" className="heading-font text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors">
            Reservations
          </Link>
          <Link href="/media" className="heading-font text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors">
            Media & FAQs
          </Link>
          <Link href="/blog" className="heading-font text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors">
            Reel Room Blog
          </Link>
        </div>
        
        <button className="absolute top-8 right-8 text-brand-gold" onClick={toggleMenu}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                  src="/photos/homepage-originals/DSC03124-Enhanced-NR.jpg" 
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
                  src="/photos/homepage-originals/DSC03236-Enhanced-NR.jpg" 
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
                  src="/photos/homepage-originals/DSC03236-Enhanced-NR.jpg" 
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
