import React, { useState } from 'react';

interface SimpleImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SimpleImage({ 
  src, 
  alt, 
  fallbackSrc = '/photos/listings/Cascade Exterior/IMG_8523.jpg', 
  className = '',
  style = {}
}: SimpleImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      console.log(`SimpleImage: Primary image failed to load: ${src}. Using fallback: ${fallbackSrc}`);
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        ...style
      }}
      onError={handleError}
    />
  );
} 