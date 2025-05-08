import { useState, useCallback, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

// Create a white blur data placeholder for faster loading
const WHITE_BLUR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";

// Default fallback image that should always be available
const DEFAULT_FALLBACK = "/photos/homepage/WhistlerVacationRental.jpg";

// Ultimate static fallback that is very small and guaranteed to exist
const STATIC_BACKUP = "/photos/static-backup.png";

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  skipPlaceholder?: boolean;
  fallbackSrc?: string | string[];
  defaultSrc?: string;
  onLoad?: () => void;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  quality = 65, 
  priority = false,
  loading,
  skipPlaceholder = false,
  className = "",
  style = {},
  fallbackSrc,
  defaultSrc = DEFAULT_FALLBACK,
  onLoad,
  onError,
  ...props 
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState<string>(typeof src === 'string' ? src : '');
  const [errorCount, setErrorCount] = useState(0);
  const [fallbacksArray, setFallbacksArray] = useState<string[]>([]);
  const [loadFailed, setLoadFailed] = useState(false);
  const [useStaticBackup, setUseStaticBackup] = useState(false);
  
  // Setup the fallbacks array when the component mounts or when fallbackSrc changes
  useEffect(() => {
    let fallbacks: string[] = [];
    
    // Add single fallback to array
    if (typeof fallbackSrc === 'string' && fallbackSrc) {
      fallbacks.push(fallbackSrc);
    } 
    // Process array of fallbacks
    else if (Array.isArray(fallbackSrc)) {
      fallbacks = fallbackSrc.filter(src => typeof src === 'string' && src);
    }
    
    // Always add the default fallback as a last resort
    if (defaultSrc && !fallbacks.includes(defaultSrc)) {
      fallbacks.push(defaultSrc);
    }
    
    // Add static backup as the final fallback
    if (!fallbacks.includes(STATIC_BACKUP)) {
      fallbacks.push(STATIC_BACKUP);
    }
    
    setFallbacksArray(fallbacks);
  }, [fallbackSrc, defaultSrc]);
  
  // Reset error count when the source changes
  useEffect(() => {
    if (typeof src === 'string') {
      setImgSrc(src);
      setErrorCount(0);
      setLoadFailed(false);
      setUseStaticBackup(false);
    }
  }, [src]);
  
  const handleError = useCallback((event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Try fallbacks in sequence
    if (errorCount < fallbacksArray.length) {
      console.warn(`Image failed to load: ${imgSrc}, trying fallback ${errorCount + 1}/${fallbacksArray.length}`);
      
      const nextFallback = fallbacksArray[errorCount];
      
      // If we're at the last fallback and it's the static backup
      if (errorCount === fallbacksArray.length - 1 && nextFallback === STATIC_BACKUP) {
        setUseStaticBackup(true);
      }
      
      setImgSrc(nextFallback);
      setErrorCount(prev => prev + 1);
    } else if (onError && typeof onError === 'function') {
      // If all fallbacks failed and there's a custom error handler, call it
      setLoadFailed(true);
      onError(event);
    } else {
      // Last resort: if all fallbacks fail and no custom handler, show a console error
      setLoadFailed(true);
      console.error(`All image fallbacks failed for: ${typeof src === 'string' ? src : 'unknown source'}`);
    }
  }, [imgSrc, fallbacksArray, errorCount, onError, src]);
  
  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
    if (onLoad && typeof onLoad === 'function') {
      onLoad();
    }
  }, [onLoad]);
  
  // Next.js doesn't allow both priority and loading="lazy" to be set at the same time
  // If priority is true, don't set loading prop
  const loadingProp = priority ? undefined : (loading || "lazy");
  
  return (
    <div className={`relative ${className}`} style={{ 
      backgroundColor: "white", 
      ...style 
    }}>
      {imgSrc && !loadFailed && (
        <Image
          src={imgSrc}
          alt={alt || "Image"}
          quality={useStaticBackup ? 100 : quality}
          priority={priority}
          loading={loadingProp}
          placeholder={skipPlaceholder ? undefined : "blur"}
          blurDataURL={WHITE_BLUR_DATA_URL}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoadingComplete={handleImageLoad}
          onError={handleError}
          {...props}
        />
      )}
      {loadFailed && (
        <div 
          className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400 font-medium"
          title={`Failed to load image: ${typeof src === 'string' ? src : 'unknown'}`}
        >
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  );
} 