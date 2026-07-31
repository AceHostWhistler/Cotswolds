import React, { useEffect, useRef, useState } from 'react';
import ResponsivePhoto from '@/components/ResponsivePhoto';

interface SimpleImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  layout?: 'hero' | 'content' | 'gallery' | 'full';
}

export default function SimpleImage({
  src,
  alt,
  fallbackSrc,
  className = '',
  style,
  loading = 'lazy',
  decoding = 'async',
  objectFit = 'cover',
  layout = 'content',
}: SimpleImageProps) {
  const [activeSrc, setActiveSrc] = useState(src);
  const hasFallback = useRef(false);

  useEffect(() => {
    setActiveSrc(src);
    hasFallback.current = false;
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && !hasFallback.current && activeSrc !== fallbackSrc) {
      hasFallback.current = true;
      setActiveSrc(fallbackSrc);
    }
  };

  return (
    <ResponsivePhoto
      src={activeSrc}
      alt={alt}
      className={className}
      imgClassName="w-full h-full"
      loading={loading}
      decoding={decoding}
      layout={layout}
      fetchPriority={loading === 'eager' ? 'high' : undefined}
      style={{ objectFit, display: 'block', ...style }}
      onError={handleError}
    />
  );
}
