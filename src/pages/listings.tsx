import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AceCascadeNavigation from '@/components/AceCascadeNavigation';
import AceCascadeFooter from '@/components/AceCascadeFooter';
import SimplePropertyCard from '@/components/SimplePropertyCard';
import SimpleImage from '@/components/SimpleImage';

const categories = [
  { id: 'all', name: 'All Listings' },
  { id: 'mountain-top', name: 'Mountain View - Top Floor' },
  { id: 'mountain-view', name: 'Mountain View Rooms' },
  { id: 'forest-view', name: 'Forest View Cascade Rooms' },
];

// Simple list of properties with minimal information
const properties = [
  {
    id: 'mountain-top',
    name: 'Mountain View - Top Floor',
    description: 'Luxury suite with panoramic mountain views from the top floor. King bed, full kitchen, and private balcony.',
    price: 'From $329/night',
    link: '/listings/mountain-view---top-floor'
  },
  {
    id: 'mountain-view',
    name: 'Mountain View Rooms',
    description: 'Comfortable rooms with beautiful mountain views. Queen bed, kitchenette, and cozy sitting area.',
    price: 'From $289/night',
    link: '/listings/mountain-view-rooms'
  },
  {
    id: 'forest-view',
    name: 'Forest View Cascade Rooms',
    description: 'Serene rooms overlooking the forest. Queen bed, sofa bed, and full amenities for a relaxing stay.',
    price: 'From $249/night',
    link: '/listings/forest-view-cascade-room'
  },
];

export default function Listings() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter properties based on active category
  const filteredProperties = activeCategory === 'all' 
    ? properties 
    : properties.filter(property => property.id === activeCategory);

  return (
    <>
      <Head>
        <title>Room Listings | Ace Cascade Lodge Hotel</title>
        <meta name="description" content="Explore our luxury rooms and suites at Ace Cascade Lodge Hotel. Book your perfect mountain getaway today." />
      </Head>

      <AceCascadeNavigation />

      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0 w-full h-full">
          <SimpleImage 
            src="/photos/listings/Cascade Exterior/IMG_8523.jpg" 
            alt="Ace Cascade Lodge Hotel" 
            fallbackSrc="/photos/listings/Cascade Exterior/1 (1).jpg"
            className="object-cover object-center opacity-70"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Accommodations</h1>
          <p className="text-xl max-w-2xl text-center px-4">
            Discover the perfect space for your mountain retreat at Ace Cascade Lodge
          </p>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category.id
                    ? 'bg-[#0066CC] text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <SimplePropertyCard
                key={property.id}
                id={property.id}
                name={property.name}
                description={property.description}
                price={property.price}
                link={property.link}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Experience Ace Cascade Lodge?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Book your stay today and discover the perfect blend of luxury, comfort, and natural beauty at our mountain retreat.
            </p>
            <Link
              href="https://www.airbnb.ca/rooms/1142301968081447021?guests=1&adults=1&s=67&unique_share_id=090dd316-32ed-46cd-9900-8d295c47ec4e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0066CC] hover:bg-[#004C99] text-white py-3 px-8 rounded-md font-medium text-lg transition duration-300"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </div>

      <AceCascadeFooter />
    </>
  );
} 