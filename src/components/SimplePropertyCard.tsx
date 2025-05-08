import React from 'react';
import Link from 'next/link';
import SimpleImage from './SimpleImage';

// Simplified property definitions with hardcoded image paths
const PROPERTY_IMAGES = {
  'mountain-top': {
    primary: '/photos/listings/Mountain View Top Floor/20240621 A7M3 05 A1_02435.jpg',
    fallback: '/photos/listings/Mountain View Top Floor/1 (1).jpg'
  },
  'mountain-view': {
    primary: '/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02345.jpg',
    fallback: '/photos/listings/Mountain View Cascade/1 (1).jpg'
  },
  'forest-view': {
    primary: '/photos/listings/Forest View Cascade/20240621 A7M3 01 A1_01781.jpg',
    fallback: '/photos/listings/Forest View Cascade/1 (1).jpg'
  }
};

// Failsafe backup image if everything else fails
const BACKUP_IMAGE = '/photos/listings/Cascade Exterior/IMG_8523.jpg';

interface SimplePropertyCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  link: string;
}

export default function SimplePropertyCard({
  id,
  name,
  description,
  price,
  link
}: SimplePropertyCardProps) {
  // Get image paths for this property type
  const imagePaths = PROPERTY_IMAGES[id as keyof typeof PROPERTY_IMAGES] || { 
    primary: BACKUP_IMAGE, 
    fallback: BACKUP_IMAGE 
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <Link href={link} className="block">
        <div className="relative h-64 w-full overflow-hidden bg-gray-100">
          <SimpleImage
            src={imagePaths.primary}
            alt={name}
            fallbackSrc={imagePaths.fallback || BACKUP_IMAGE}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          <Link href={link} className="hover:text-[#0066CC] transition-colors">
            {name}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-[#0066CC] font-semibold mb-6">{price}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          {id === 'mountain-top' && (
            <Link
              href="https://www.airbnb.ca/rooms/1151559188640677466?guests=1&adults=1&s=67&unique_share_id=009c3971-1131-40b0-9959-be6d7e5636e9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0066CC] hover:bg-[#004C99] text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
            >
              Book Now
            </Link>
          )}
          {id === 'mountain-view' && (
            <Link
              href="https://www.airbnb.ca/rooms/1142301968081447021?guests=1&adults=1&s=67&unique_share_id=090dd316-32ed-46cd-9900-8d295c47ec4e"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0066CC] hover:bg-[#004C99] text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
            >
              Book Now
            </Link>
          )}
          {id === 'forest-view' && (
            <Link
              href="https://www.airbnb.ca/rooms/1142027054651035851?guests=1&adults=1&s=67&unique_share_id=4eece968-89a3-45af-ae62-144b6c0d5b62"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0066CC] hover:bg-[#004C99] text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
            >
              Book Now
            </Link>
          )}
          <Link 
            href={link} 
            className="inline-block border border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white px-6 py-3 rounded-lg transition-colors text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
} 