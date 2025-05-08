import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyGalleryProps {
  photos: string[];
  propertyName: string;
  maxInitialPhotos?: number;
}

export const PropertyGallery = ({
  photos,
  propertyName,
  maxInitialPhotos = 8,
}: PropertyGalleryProps) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + photos.length) % photos.length
      );
    }
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
  };

  return (
    <>
      {/* Main Gallery Grid */}
      <div id="photos" className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Photos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.slice(0, maxInitialPhotos).map((photo, index) => (
            <div key={index} className="mb-6">
              <div
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => handlePhotoClick(index)}
              >
                <Image
                  src={photo}
                  alt={`${propertyName} ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 6}
                  loading={index < 6 ? "eager" : "lazy"}
                />
                {/* Mobile photo counter */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded md:hidden">
                  {index + 1}/{photos.length}
                </div>
              </div>
            </div>
          ))}
        </div>
        {photos.length > maxInitialPhotos && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllPhotos(true)}
              className="inline-flex items-center px-6 py-2 bg-black hover:bg-gray-900 text-white rounded-full text-sm font-medium"
            >
              View all {photos.length} photos
            </button>
          </div>
        )}
      </div>

      {/* Full Gallery Modal */}
      {showAllPhotos && (
        <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
          <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
            <h2 className="text-lg sm:text-xl text-white font-medium">
              {propertyName} - All Photos
            </h2>
            <button
              onClick={closeAllPhotos}
              className="text-white hover:text-gray-300 bg-gray-900 px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>

          <div className="max-w-7xl mx-auto py-6 px-4">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="mb-6">
                  <div
                    className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => handlePhotoClick(index)}
                  >
                    <Image
                      src={photo}
                      alt={`${propertyName} ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      priority={index < 6}
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                    {/* Mobile photo counter */}
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded md:hidden">
                      {index + 1}/{photos.length}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Photo View */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-90 flex items-center justify-center">
          <div className="absolute top-4 right-4 flex space-x-4">
            <button
              onClick={closeFullScreenPhoto}
              className="text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
            onClick={handlePrevPhoto}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto px-4">
            <div className="relative w-full h-full">
              <Image
                src={photos[selectedPhotoIndex]}
                alt={`${propertyName} full view ${selectedPhotoIndex + 1}`}
                fill
                priority
                className="object-contain"
                sizes="100vw"
              />
              
              {/* Mobile photo counter - shows on the photo */}
              {isMobile && (
                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  {selectedPhotoIndex + 1}/{photos.length}
                </div>
              )}
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
            onClick={handleNextPhoto}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Desktop photo counter - shows at bottom */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white text-sm md:text-base bg-black bg-opacity-60 inline-block px-3 py-1 rounded-full">
              {selectedPhotoIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyGallery; 