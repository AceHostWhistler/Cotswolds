import { useState } from 'react';
import SimplePropertyCard from './SimplePropertyCard';

const categories = [
  { id: 'all', name: 'All Listings' },
  { id: 'mountain-top', name: 'Mountain View - Top Floor' },
  { id: 'mountain-view', name: 'Mountain View Rooms' },
  { id: 'forest-view', name: 'Forest View Cascade Rooms' }
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
  }
];

export default function RoomCategories() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter properties based on active category
  const filteredProperties = activeCategory === 'all' 
    ? properties 
    : properties.filter(property => property.id === activeCategory);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">View Our Collection of Hotel Room Options in the Heart of Whistler Village</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of comfortable and luxurious rooms, each offering unique views, large pool, multiple hot tubs, gym, ski valet, parking, all walking distance from the ski hill (ski in ski out). Enjoy Whistler Village, while being walking distance from the ski mountain
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-[#0066CC] text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
} 