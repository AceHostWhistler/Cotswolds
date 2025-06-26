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
  const ref = useRef<HTMLDivElement>(null);
  
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
    
    url += 'title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1';
    
    return url;
  };
  
  const defaultContainerStyle: CSSProperties = responsive 
    ? { 
        padding: '56.25% 0 0 0', 
        position: 'relative' as const 
      } 
    : {};
    
  const containerStyle = coverMode 
    ? { ...defaultContainerStyle, position: 'relative' as const, overflow: 'hidden' }
    : defaultContainerStyle;
    
  const defaultIframeStyle: CSSProperties = responsive 
    ? { 
        position: 'absolute' as const, 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%' 
      } 
    : {};
    
  const iframeStyle = coverMode 
    ? { 
        ...defaultIframeStyle, 
        position: 'absolute' as const,
        top: '50%',
        left: '50%',
        width: '200%',
        height: '200%',
        minHeight: '200%',
        minWidth: '200%',
        transform: 'translate(-50%, -50%)'
      } 
    : defaultIframeStyle;
  
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
      
      <div ref={ref} className={`vimeo-player-wrapper ${className}`} style={containerStyle}>
        {(isIntersecting || autoplay || priority) && (
          <iframe
            src={buildVimeoUrl()}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            style={iframeStyle}
            title={`Vimeo Player ${videoId}`}
            loading={priority ? "eager" : "lazy"}
            className={coverMode ? "vimeo-cover object-cover" : ""}
          ></iframe>
        )}
      </div>
    </>
  );
};

export default LazyVimeoPlayer; 