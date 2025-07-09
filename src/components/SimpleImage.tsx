import React, { useState, useEffect } from 'react';

interface SimpleImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
}

export default function SimpleImage({ 
  src, 
  alt, 
  fallbackSrc = '/photos/homepage-originals/DSC03125-Enhanced-NR.jpg', 
  className = '',
  style = {},
  loading = 'lazy',
  decoding = 'async'
}: SimpleImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  // Detect iOS on mount
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOSDevice = 
      /iphone|ipod|ipad/i.test(userAgent) || 
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
      /iPhone|iPad|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);
  }, []);

  // Reset state when src changes
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      console.log(`SimpleImage: Primary image failed to load: ${src}. Using fallback: ${fallbackSrc}`);
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Ensure image path is correct - handle both absolute and relative paths
  const getImagePath = (path: string) => {
    // If path already starts with http/https or data:, it's already absolute
    if (path.startsWith('http') || path.startsWith('data:')) {
      return path;
    }
    
    // Make sure the path starts with a slash for relative paths
    return path.startsWith('/') ? path : `/${path}`;
  };

  return (
    <div className={`relative ${className}`} style={{
      backgroundColor: '#111',
      overflow: 'hidden',
      ...style
    }}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
      )}
      
      <img
        src={getImagePath(imgSrc)}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
        decoding={decoding}
        style={{
          objectFit: 'cover',
          transform: isIOS ? 'translateZ(0)' : 'none',
          WebkitTransform: isIOS ? 'translateZ(0)' : 'none',
        }}
      />
    </div>
  );
} 