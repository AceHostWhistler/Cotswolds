import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LazyVimeoPlayer from './LazyVimeoPlayer';

// Add type declaration for Vimeo Player API
declare global {
  interface Window {
    Vimeo?: {
      Player: any;
    };
  }
}

export default function AceCascadeHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIPhone, setIsIPhone] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Detect device type and adjust video scaling accordingly
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
      const iPhone = /iphone/i.test(userAgent);
      
      setIsMobile(mobile);
      setIsIPhone(iPhone);
      
      // Apply dynamic scaling based on device and orientation
      if (iframeRef.current) {
        if (iPhone) {
          // iPhone specific styling - needs more aggressive scaling
          iframeRef.current.style.transform = 'translate(-50%, -50%) scale(2.0)';
        } else if (mobile) {
          // General mobile styling
          iframeRef.current.style.transform = 'translate(-50%, -50%) scale(1.8)';
        } else {
          // Desktop styling
          iframeRef.current.style.transform = 'translate(-50%, -50%) scale(1.2)';
        }
      }
    };
    
    checkDevice();
    
    // Recheck on resize and orientation change for responsive behavior
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);
  
  // Load Vimeo player script immediately
  useEffect(() => {
    // Load Vimeo API script directly
    if (typeof window !== 'undefined' && !window.Vimeo) {
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = false; // Make sure it loads in order
      script.defer = false;
      script.onload = () => console.log('Vimeo API loaded');
      document.head.appendChild(script);
    }
    
    // Preconnect and DNS prefetch for faster loading
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://player.vimeo.com';
    document.head.appendChild(preconnect);
    
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = 'https://player.vimeo.com';
    document.head.appendChild(dnsPrefetch);
    
    // Add custom CSS for video scaling in different orientations
    const style = document.createElement('style');
    style.innerHTML = `
      @media screen and (orientation: portrait) and (max-width: 768px) {
        .video-iframe-container iframe {
          transform: translate(-50%, -50%) scale(2.2) !important;
        }
      }
      
      @media screen and (orientation: landscape) and (max-width: 896px) {
        .video-iframe-container iframe {
          transform: translate(-50%, -50%) scale(1.5) !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(preconnect);
      document.head.removeChild(dnsPrefetch);
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Fallback image - always load this first for better First Contentful Paint */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        <Image
          src="/photos/whistler-hotel.jpg"
          alt="Whistler Ace Cascade Lodge Hotel"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAJAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQIFBAMAAAAAAAAAAAAAAQIDBAUGEQAHEiExQVGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhEDEQA/ANJd2nqeobf12o1aoZeH4gjmAHszbEkE9nNUJ00rW1W32MbA+7WqWbg/c06v/9k="
          quality={90}
        />
      </div>
      
      {/* Video container with improved responsive handling - Background set to white to avoid black bars */}
      <div className="absolute inset-0 w-full h-full z-5 bg-white flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full video-iframe-container">
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/933840182?autoplay=1&loop=1&background=1&muted=1&controls=0&playsinline=1&quality=1080p"
            allow="autoplay; fullscreen; picture-in-picture"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              /* Base transform that will be overridden by device detection */
              transform: 'translate(-50%, -50%) scale(1.8)',
              border: 'none',
              minWidth: '100%',
              minHeight: '56.25vw', /* 16:9 aspect ratio (9/16 = 0.5625) */
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            title="Whistler Ace Cascade Lodge Hotel"
            frameBorder="0"
            loading="eager"
          ></iframe>
        </div>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 text-center">
          Ace Cascade
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8 text-center max-w-3xl">
          Affordable yet Luxurious Hotel in the main Whistler Village
        </h2>
        <Link
          href="/listings"
          className="inline-block bg-[#0066CC] hover:bg-[#004C99] text-white px-6 py-2 md:px-8 md:py-3 rounded transition-colors text-base md:text-lg font-medium"
          aria-label="View our accommodation listings"
        >
          View Listings
        </Link>
      </div>
    </div>
  );
} 