import { useState, useEffect, useRef } from 'react';

interface LazyVimeoPlayerProps {
  videoId: string | number;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  background?: boolean;
  responsive?: boolean;
  width?: string | number;
  height?: string | number;
  className?: string;
  onReady?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnd?: () => void;
  playsinline?: boolean;
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
  autoplay = true,
  loop = true,
  muted = true,
  background = true,
  responsive = true,
  width = '100%',
  height = '100%',
  className = '',
  onReady,
  onPlay,
  onPause,
  onEnd,
  playsinline = true
}: LazyVimeoPlayerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const isMobileRef = useRef(typeof window !== 'undefined' && window.innerWidth < 768);

  // Load Vimeo Player Script dynamically if not already loaded
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.Vimeo) {
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      script.onload = () => {
        // Initialize player immediately after script loads
        initializePlayer();
      };
      document.body.appendChild(script);
    } else if (typeof window !== 'undefined' && window.Vimeo) {
      // If script already loaded, initialize immediately
      initializePlayer();
    }
    
    return () => {
      // Clean up player
      if (playerRef.current) {
        playerRef.current.off('loaded');
        if (onPlay) playerRef.current.off('play');
        if (onPause) playerRef.current.off('pause');
        if (onEnd) playerRef.current.off('ended');
        playerRef.current.destroy();
        playerRef.current = null;
        initializedRef.current = false;
      }
    };
  }, [videoId]);
  
  const initializePlayer = () => {
    if (initializedRef.current || !containerRef.current || typeof window === 'undefined' || !window.Vimeo) {
      return;
    }
    
    initializedRef.current = true;
    
    // Optimized config for faster loading
    const vimeoPlayer = new window.Vimeo.Player(containerRef.current, {
      id: videoId,
      autoplay,
      loop,
      muted,
      background,
      responsive,
      width,
      height,
      dnt: true, // Do not track - improves privacy and reduces cookies
      playsinline, // Important for mobile - prevents fullscreen takeover
      loading: 'eager', // Pre-fetch video data
      quality: isMobileRef.current ? '720p' : '1080p', // Reduced quality on mobile for faster loading
      autopause: false, // Prevent auto-pausing when another video plays
      controls: false, // Hide video controls for background videos
      preload: true, // Preload video data
    });
    
    playerRef.current = vimeoPlayer;
    
    // Set up event listeners
    vimeoPlayer.on('loaded', () => {
      setIsLoaded(true);
      onReady && onReady();
    });
    
    // Force play on mobile if autoplay is true
    if (autoplay) {
      vimeoPlayer.ready().then(() => {
        vimeoPlayer.play().catch(() => {
          console.log('Autoplay blocked by browser policy');
          // Try to play on first user interaction as fallback
          const playOnInteraction = () => {
            vimeoPlayer.play();
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
          };
          document.addEventListener('click', playOnInteraction);
          document.addEventListener('touchstart', playOnInteraction);
        });
      });
    }
    
    if (onPlay) vimeoPlayer.on('play', onPlay);
    if (onPause) vimeoPlayer.on('pause', onPause);
    if (onEnd) vimeoPlayer.on('ended', onEnd);
  };

  return (
    <div
      ref={containerRef}
      className={`video-container ${className}`}
      data-vimeo-initialized="true"
      style={{
        width,
        height,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease',
        position: 'relative',
        aspectRatio: '16/9', // Explicitly set aspect ratio for better layout stability
        background: 'black', // Black background while video loads
      }}
      aria-label="Background video"
    />
  );
};

export default LazyVimeoPlayer; 