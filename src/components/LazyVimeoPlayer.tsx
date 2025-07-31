import React, { useEffect, useState, useRef, CSSProperties } from 'react';

interface LazyVimeoPlayerProps {
  videoId: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  background?: boolean;
  responsive?: boolean;
  coverMode?: boolean;
  className?: string;
  priority?: boolean;
  width?: string | number;
  height?: string | number;
}

// Define iOS specific styles with proper TypeScript types
interface IOSStyles {
  transform: string;
  WebkitTransform: string;
  transformOrigin: string;
  WebkitTransformOrigin: string;
  WebkitBackfaceVisibility: 'hidden' | 'visible';
  backfaceVisibility: 'hidden' | 'visible';
}

const LazyVimeoPlayer: React.FC<LazyVimeoPlayerProps> = ({
  videoId,
  autoplay = false,
  loop = false,
  muted = false,
  background = false,
  responsive = true,
  coverMode = false,
  className = '',
  priority = false,
  width = '100%',
  height = '100%',
}) => {
  const [isClient, setIsClient] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [isIOS, setIsIOS] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadAttempts, setLoadAttempts] = useState(0);

  // Detect if we're on the client side and if it's an iOS device
  useEffect(() => {
    setIsClient(true);
    
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOSDevice = 
      /iphone|ipod|ipad/i.test(userAgent) || 
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
      /iPhone|iPad|iPod/.test(navigator.userAgent);
    
    setIsIOS(isIOSDevice);

    // Preload the Vimeo API for faster initialization
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = false;
    script.defer = false;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Set up intersection observer to lazy load the iframe
  useEffect(() => {
    if (!isClient || priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px 0px', // Load when within 200px of viewport
        threshold: 0.01,
      }
    );

    if (playerRef.current) {
      observer.observe(playerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isClient, priority]);

  // Build the Vimeo URL with all required parameters
  const buildVimeoUrl = () => {
    const baseUrl = `https://player.vimeo.com/video/${videoId}?`;
    
    const params = new URLSearchParams();
    
    // Always set autoplay for priority videos
    if (autoplay || priority) params.append('autoplay', '1');
    if (loop) params.append('loop', '1');
    if (muted) params.append('muted', '1');
    if (background) {
      params.append('background', '1');
      params.append('controls', '0');
    }
    
    // Always include these for better performance and compatibility
    params.append('title', '0');
    params.append('byline', '0');
    params.append('portrait', '0');
    params.append('badge', '0');
    params.append('autopause', '0');
    params.append('dnt', '1');
    params.append('quality', 'auto');
    params.append('player_id', '0');
    params.append('app_id', '58479');
    
    // Add iOS specific parameters
    if (isIOS) {
      params.append('playsinline', '1');
      params.append('webkit-playsinline', '1');
    }
    
    return baseUrl + params.toString();
  };

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  // Handle iframe load error
  const handleIframeError = () => {
    if (loadAttempts < 3) {
      // Retry loading after a delay
      setTimeout(() => {
        setLoadAttempts(prev => prev + 1);
        // Force a re-render by toggling isInView
        setIsInView(false);
        setTimeout(() => setIsInView(true), 100);
      }, 1000);
    }
  };

  // Determine container class based on props
  const containerClass = `vimeo-player-wrapper ${coverMode ? 'vimeo-cover-container' : ''} ${className}`;
  
  // Determine iframe class based on props
  const iframeClass = `vimeo-player ${coverMode ? 'vimeo-cover' : ''} ${isLoaded ? 'loaded' : ''}`;
  
  // Use a larger scale factor to ensure the video fills the entire container
  const scaleFactor = coverMode ? (isIOS ? 2.0 : 2.5) : 1;
  
  // iOS specific styles for better performance with increased scale
  const iOSStyles: Partial<CSSProperties> = isIOS ? {
    transform: coverMode ? `translate(-50%, -50%) scale(${scaleFactor})` : 'none',
    WebkitTransform: coverMode ? `translate(-50%, -50%) scale(${scaleFactor})` : 'none',
    transformOrigin: 'center center',
    WebkitTransformOrigin: 'center center',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden'
  } : {};

  // Non-iOS styles with increased scale for cover mode
  const coverStyles: Partial<CSSProperties> = coverMode && !isIOS ? {
    transform: `translate(-50%, -50%) scale(${scaleFactor})`,
    transformOrigin: 'center center',
  } : {};

  return (
    <div 
      ref={playerRef} 
      className={containerClass}
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        width: width,
        height: height,
        backgroundColor: 'black'
      }}
    >
      {(isInView || priority) && (
        <iframe
          src={buildVimeoUrl()}
          className={iframeClass}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: coverMode ? 'absolute' : 'relative',
            top: coverMode ? '50%' : 0,
            left: coverMode ? '50%' : 0,
            width: '100%',
            height: '100%',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
            ...iOSStyles,
            ...coverStyles
          }}
          title={`Vimeo Player ${videoId}`}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      )}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-t-brand-gold border-brand-gold/30 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default LazyVimeoPlayer; 