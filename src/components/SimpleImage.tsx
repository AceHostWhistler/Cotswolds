import React, { useState, useEffect, useRef } from 'react';
import { CSSProperties } from 'react';

interface SimpleImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

// Define type for iOS-specific styles
interface IOSStyles {
  WebkitBackfaceVisibility?: 'hidden' | 'visible';
  WebkitPerspective?: number | string;
  WebkitTransform?: string;
  WebkitTransformStyle?: 'preserve-3d' | 'flat';
  transform?: string;
  willChange?: string;
}

export default function SimpleImage({ 
  src, 
  alt, 
  fallbackSrc = '/photos/homepage-originals/DSC03125-Enhanced-NR.jpg', 
  className = '',
  style = {},
  loading = 'lazy',
  decoding = 'async',
  objectFit = 'cover'
}: SimpleImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const retryCount = useRef(0);
  const maxRetries = 3;
  const imgRef = useRef<HTMLImageElement>(null);

  // Detect iOS on mount with comprehensive detection
  useEffect(() => {
    const detectIOS = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOSDevice = 
        /iphone|ipod|ipad/i.test(userAgent) || 
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
        /iPhone|iPad|iPod/.test(navigator.userAgent) ||
        ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform);
      
      setIsIOS(isIOSDevice);
    };
    
    detectIOS();
  }, []);

  // Reset state when src changes
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
    setIsLoaded(false);
    retryCount.current = 0;
  }, [src]);

  // iOS-specific image preloading
  useEffect(() => {
    // For all devices, but especially important for iOS
    const preloadImage = new Image();
    preloadImage.src = getImagePath(imgSrc);
    preloadImage.onload = () => {
      if (imgRef.current) {
        imgRef.current.src = preloadImage.src;
        setIsLoaded(true);
      }
    };
    preloadImage.onerror = handleError;
    
    // For iOS devices, apply additional optimizations
    if (isIOS) {
      // Force hardware acceleration for iOS
      if (imgRef.current) {
        imgRef.current.style.transform = 'translateZ(0)';
        imgRef.current.style.webkitTransform = 'translateZ(0)';
      }
      
      // For iOS eager loading, ensure image is displayed immediately
      if (loading === 'eager') {
        setIsLoaded(true);
      }
    }
  }, [isIOS, imgSrc, loading]);

  const handleError = () => {
    if (hasError && retryCount.current >= maxRetries) {
      // Already tried fallback and still failing, don't loop infinitely
      console.error(`SimpleImage: Both primary and fallback images failed to load: ${src}, ${fallbackSrc}`);
      
      // Last resort fallback - use a known working image
      const lastResortFallback = '/favicons/Logo Reel Room.png';
      setImgSrc(lastResortFallback);
      return;
    }
    
    if (!hasError && fallbackSrc && fallbackSrc !== src) {
      console.log(`SimpleImage: Primary image failed to load: ${src}. Using fallback: ${fallbackSrc}`);
      setImgSrc(fallbackSrc);
      setHasError(true);
      return;
    }
    
    // If we're already using fallback or source is same as fallback, try to retry with cache-busting
    if (retryCount.current < maxRetries) {
      retryCount.current += 1;
      console.log(`SimpleImage: Retrying image load (${retryCount.current}/${maxRetries}): ${src}`);
      // Add a cache-busting parameter
      const cacheBuster = `?retry=${Date.now()}`;
      setImgSrc(hasError ? `${fallbackSrc}${cacheBuster}` : `${src}${cacheBuster}`);
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
  
  // iOS specific image optimizations
  const getIOSOptimizedStyles = (): IOSStyles => {
    if (!isIOS) return {};
    
    return {
      WebkitBackfaceVisibility: 'hidden',
      WebkitPerspective: 1000,
      WebkitTransform: 'translateZ(0)',
      WebkitTransformStyle: 'preserve-3d',
      transform: 'translateZ(0)',
      willChange: 'transform'
    };
  };

  const imageStyles: CSSProperties = {
    objectFit,
    ...getIOSOptimizedStyles(),
    display: 'block', // Always show the image
    opacity: isLoaded ? 1 : 0, // Use opacity for fade-in
    transition: 'opacity 300ms ease-in-out',
    ...style
  };

  return (
    <div className={`relative ${className}`} style={{
      backgroundColor: '#111',
      overflow: 'hidden',
    }}>
      {/* Loading placeholder - show only when image is not loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="w-8 h-8 border-2 border-t-brand-gold border-brand-gold/30 rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Actual image - always present but opacity controlled by isLoaded state */}
      <img
        ref={imgRef}
        src={getImagePath(imgSrc)}
        alt={alt}
        className={`w-full h-full transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
        decoding={decoding}
        style={imageStyles}
      />
    </div>
  );
} 