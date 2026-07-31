import React, { useEffect, useRef } from 'react';
import {
  DEFAULT_CONTENT_SIZES,
  DEFAULT_GALLERY_SIZES,
  DEFAULT_HERO_SIZES,
  isLocalHomepagePhoto,
  photoBaseNameFromPath,
  responsivePhotoSources,
} from '@/utils/responsivePhotos';

type ResponsivePhotoLayout = 'hero' | 'content' | 'gallery' | 'full';

interface ResponsivePhotoProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'sync' | 'auto';
  layout?: ResponsivePhotoLayout;
  sizes?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

function getDefaultSizes(layout: ResponsivePhotoLayout): string {
  switch (layout) {
    case 'hero':
      return DEFAULT_HERO_SIZES;
    case 'gallery':
      return DEFAULT_GALLERY_SIZES;
    case 'full':
      return '100vw';
    case 'content':
    default:
      return DEFAULT_CONTENT_SIZES;
  }
}

export default function ResponsivePhoto({
  src,
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  layout = 'content',
  sizes,
  style,
  onLoad,
  onError,
}: ResponsivePhotoProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      onLoad?.();
    }
  }, [src, onLoad]);

  if (!isLocalHomepagePhoto(src)) {
    return (
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={imgClassName}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        style={style}
        onLoad={onLoad}
        onError={onError}
      />
    );
  }

  const baseName = photoBaseNameFromPath(src);
  const sources = responsivePhotoSources(baseName);
  const resolvedSizes = sizes ?? getDefaultSizes(layout);

  return (
    <picture className={className}>
      <source media="(max-width: 799px)" srcSet={sources.mobile} sizes={resolvedSizes} />
      <source
        media="(min-width: 800px) and (max-width: 1279px)"
        srcSet={sources.tablet}
        sizes={resolvedSizes}
      />
      <source media="(min-width: 1280px)" srcSet={sources.desktop} sizes={resolvedSizes} />
      <img
        ref={imgRef}
        src={sources.fallback}
        alt={alt}
        className={imgClassName}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        sizes={resolvedSizes}
        style={style}
        onLoad={onLoad}
        onError={onError}
      />
    </picture>
  );
}
