import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaUser } from "react-icons/fa";

interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    image: string;
    guests: number;
    bedrooms: number;
    beds?: number;
    bathrooms: number;
    priceRange?: string;
    winterPrice?: string;
    holidayPrice?: string;
    location: string;
    link: string;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
          className="object-cover"
          loading="eager"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
          quality={75}
          unoptimized={false}
          priority={true}
        />
        <div className="absolute bottom-4 right-4">
          <Link
            href={property.link}
            className="bg-white text-gray-900 px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-100 transition-colors"
          >
            View Listings
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 line-clamp-2">
          {property.name}
        </h3>
        <div className="flex flex-wrap items-center text-gray-700 mb-4 gap-x-4 gap-y-2">
          <div className="flex items-center">
            <FaUser className="mr-2 text-gray-500" />
            <span>{property.guests} guests</span>
          </div>
          <div className="flex items-center">
            <FaBed className="mr-2 text-gray-500" />
            <span>
              {property.bedrooms} bed{property.bedrooms !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-2 text-gray-500" />
            <span>
              {property.bathrooms} bath{property.bathrooms !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
        {property.priceRange && (
          <p className="text-gray-900 font-medium">{property.priceRange}</p>
        )}
        {property.winterPrice && (
          <p className="text-gray-600 text-sm">{property.winterPrice}</p>
        )}
        {property.holidayPrice && (
          <p className="text-gray-600 text-sm">{property.holidayPrice}</p>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
