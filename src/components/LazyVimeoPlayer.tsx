import { useState, useEffect, useRef, CSSProperties } from 'react';
import Head from 'next/head';

interface LazyVimeoPlayerProps {
  videoId: string;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  responsive?: boolean;
  background?: boolean;
  coverMode?: boolean;
  priority?: boolean;
}

// Add type declaration for Vimeo Player API
declare global {
  interface Window {
    Vimeo?: {
      Player: any;
    };
  }
}

const LazyVimeoPlayer = ({
  videoId,
  className = '',
  autoplay = false,
  muted = false,
  loop = false,
  responsive = true,
  background = false,
  coverMode = true,
  priority = false
}: LazyVimeoPlayerProps) => {
  const [isIntersecting, setIsIntersecting] = useState(priority ? true : false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /iphone|ipod|ipad|android|blackberry|windows phone/g.test(userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  useEffect(() => {
    // If priority is true, we always want to load the video immediately
    if (priority) {
      setIsIntersecting(true);
      return;
    }
    
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '200px', // Increased root margin for earlier loading
        threshold: 0.1
      }
    );
    
    observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
    };
  }, [priority]);
  
  // Handle iframe load event
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    
    const handleLoad = () => {
      setIsLoaded(true);
    };
    
    iframe.addEventListener('load', handleLoad);
    
    return () => {
      iframe.removeEventListener('load', handleLoad);
    };
  }, [isIntersecting]);
  
  // Build the URL with parameters
  const buildVimeoUrl = () => {
    let url = `https://player.vimeo.com/video/${videoId}?`;
    
    // Always set autoplay for priority videos
    if (autoplay || priority) url += 'autoplay=1&';
    if (muted) url += 'muted=1&';
    if (loop) url += 'loop=1&';
    if (background) url += 'background=1&controls=0&';
    
    // Add quality parameter for faster initial load
    url += 'quality=auto&';
    
    // Add playsinline for iOS compatibility
    url += 'playsinline=1&';
    
    // Check if iOS and add specific parameters
    const isIOS = typeof navigator !== 'undefined' && 
                 (/iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
    
    if (isIOS) {
      url += 'webkit-playsinline=1&';
    }
    
    url += 'title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1';
    
    return url;
  };
  
  // Use different styles for mobile vs desktop
  const getContainerStyle = (): CSSProperties => {
    if (!responsive) return {};
    
    const baseStyle: CSSProperties = { 
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%'
    };
    
    // For non-cover mode or mobile, use standard responsive container
    if (!coverMode || isMobile) {
      return {
        ...baseStyle,
        paddingBottom: '56.25%', // 16:9 aspect ratio
      };
    }
    
    // For cover mode on desktop
    return {
      ...baseStyle,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    };
  };
  
  // Get iframe style based on device and mode
  const getIframeStyle = (): CSSProperties => {
    const baseStyle: CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    };
    
    // For mobile or non-cover mode, use standard iframe
    if (!coverMode || isMobile) {
      return baseStyle;
    }
    
    // For cover mode on desktop
    return {
      ...baseStyle,
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '100%',
      transform: 'translate(-50%, -50%) scale(1.2)',
      objectFit: 'cover'
    };
  };
  
  return (
    <>
      <Head>
        {/* Add preconnect hints for faster loading */}
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        
        {/* Preload the video if it's priority */}
        {priority && <link rel="preload" href={`https://player.vimeo.com/video/${videoId}`} as="document" />}
      </Head>
      
      <div 
        ref={ref} 
        className={`vimeo-player-wrapper ${className} ${!isLoaded ? 'bg-black' : ''}`} 
        style={getContainerStyle()}
      >
        {/* Loading indicator */}
        {!isLoaded && (isIntersecting || autoplay || priority) && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="w-10 h-10 border-4 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin"></div>
          </div>
        )}
        
        {(isIntersecting || autoplay || priority) && (
          <iframe
            ref={iframeRef}
            src={buildVimeoUrl()}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            style={getIframeStyle()}
            title={`Vimeo Player ${videoId}`}
            loading={priority ? "eager" : "lazy"}
            className={`${coverMode ? "vimeo-cover" : ""} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          ></iframe>
        )}
      </div>
    </>
  );
};

export default LazyVimeoPlayer; 