export const PHOTO_WIDTHS = [800, 1280, 1920] as const;

export type PhotoWidth = (typeof PHOTO_WIDTHS)[number];

export function photoBaseNameFromPath(photoPath: string): string {
  const withoutQuery = photoPath.split('?')[0].split('#')[0];
  const filename = withoutQuery.split('/').pop() || withoutQuery;
  return filename.replace(/\.(jpe?g|png|webp)$/i, '');
}

export function isLocalHomepagePhoto(photoPath: string): boolean {
  return (
    photoPath.includes('/photos/homepage-originals/') ||
    photoPath.includes('/photos/originals/homepage/')
  );
}

export function optimizedPhotoSrc(baseName: string, width: PhotoWidth = 1280): string {
  return `/photos/optimized/${baseName}-${width}.jpg`;
}

export function responsivePhotoSources(baseName: string) {
  return {
    mobile: optimizedPhotoSrc(baseName, 800),
    tablet: optimizedPhotoSrc(baseName, 1280),
    desktop: optimizedPhotoSrc(baseName, 1920),
    fallback: optimizedPhotoSrc(baseName, 1280),
  };
}

export const DEFAULT_HERO_SIZES =
  '(max-width: 799px) 100vw, (max-width: 1279px) 100vw, 1920px';

export const DEFAULT_CONTENT_SIZES =
  '(max-width: 768px) 100vw, (max-width: 1280px) 768px, 1280px';

export const DEFAULT_GALLERY_SIZES =
  '(max-width: 768px) 50vw, 33vw';
