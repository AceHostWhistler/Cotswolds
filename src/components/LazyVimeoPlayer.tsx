import React, { useEffect, useState, useRef } from 'react';

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

  // Detect if we're on the client side and if it's an iOS device
  useEffect(() => {
    setIsClient(true);
    
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOSDevice = 
      /iphone|ipod|ipad/i.test(userAgent) || 
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    setIsIOS(isIOSDevice);
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
    
    if (autoplay) params.append('autoplay', '1');
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
    
    return baseUrl + params.toString();
  };

  // Determine container class based on props
  const containerClass = `vimeo-player-wrapper ${coverMode ? 'vimeo-cover-container' : ''} ${className}`;
  
  // Determine iframe class based on props
  const iframeClass = `vimeo-player ${coverMode ? 'vimeo-cover' : ''}`;
  
  // iOS specific styles for better performance
  const iOSStyles = isIOS ? {
    transform: coverMode ? 'translate(-50%, -50%) scale(1.2)' : 'none',
    WebkitTransform: coverMode ? 'translate(-50%, -50%) scale(1.2)' : 'none'
  } : {};

  return (
    <div 
      ref={playerRef} 
      className={containerClass}
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        width: width,
        height: height
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
            ...iOSStyles
          }}
          title={`Vimeo Player ${videoId}`}
          loading={priority ? "eager" : "lazy"}
        />
      )}
    </div>
  );
};

export default LazyVimeoPlayer; 