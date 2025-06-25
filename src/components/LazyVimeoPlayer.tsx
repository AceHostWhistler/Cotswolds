import { useState, useEffect, useRef, CSSProperties } from 'react';

interface LazyVimeoPlayerProps {
  videoId: string;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  responsive?: boolean;
  background?: boolean;
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
  background = false
}: LazyVimeoPlayerProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '100px',
      }
    );
    
    observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Build the URL with parameters
  const buildVimeoUrl = () => {
    let url = `https://player.vimeo.com/video/${videoId}?`;
    
    if (autoplay) url += 'autoplay=1&';
    if (muted) url += 'muted=1&';
    if (loop) url += 'loop=1&';
    if (background) url += 'background=1&controls=0&';
    
    url += 'title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&dnt=1';
    
    return url;
  };
  
  const iframeStyle: CSSProperties = responsive 
    ? { 
        position: 'absolute' as const, 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%' 
      } 
    : {};
    
  const containerStyle: CSSProperties = responsive 
    ? { 
        padding: '56.25% 0 0 0', 
        position: 'relative' as const 
      } 
    : {};
  
  return (
    <div ref={ref} className={className} style={containerStyle}>
      {(isIntersecting || autoplay) && (
        <iframe
          src={buildVimeoUrl()}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={iframeStyle}
          title={`Vimeo Player ${videoId}`}
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};

export default LazyVimeoPlayer; 