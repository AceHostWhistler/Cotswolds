import { useState, useEffect } from 'react';
import Head from 'next/head';
import AceCascadeNavigation from '../components/AceCascadeNavigation';
import AceCascadeHero from '../components/AceCascadeHero';
import RoomCategories from '../components/RoomCategories';
import AboutSection from '../components/AboutSection';
import BlogSection from '../components/BlogSection';
import AceCascadeFooter from '../components/AceCascadeFooter';
import Link from 'next/link';
import OptimizedImage from '../components/OptimizedImage';

export default function Home() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);
  
  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <Head>
        <title>Ace Cascade Lodge Hotel | Luxury and Affordable Hotel in Whistler, BC Canada</title>
        <meta name="description" content="Welcome to the Ace Cascade Lodge Hotel. Our affordable yet luxurious hotel units in Whistler Village are available all year round." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      
      <AceCascadeNavigation />
      
      <main>
        <AceCascadeHero />
        <RoomCategories />
        <AboutSection />
        
        {/* Background Image Section */}
        <div className="relative h-[600px] overflow-hidden">
          <OptimizedImage
            src="/photos/listings/Cascade Exterior/1 (1).jpg"
            alt="Ace Cascade Lodge Exterior"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-75"
            priority={true}
            loading={undefined}
            fallbackSrc={[
              "/photos/listings/Cascade Exterior/IMG_8523.jpg",
              "/photos/homepage/WhistlerVacationRental.jpg"
            ]}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h2 className="text-4xl font-bold mb-4">Experience Luxury in the Heart of Whistler</h2>
                <p className="text-xl mb-8">
                  Discover the perfect blend of comfort and adventure at Ace Cascade Lodge, where every stay is an unforgettable experience.
                </p>
                <Link
                  href="/listings"
                  className="inline-block bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Explore Our Rooms
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <BlogSection />
        
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Ace Cascade Lodge?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Book your stay today and discover the perfect blend of luxury, comfort, and natural beauty at our mountain retreat.
            </p>
            
            <div className="flex justify-center mt-8">
              <Link
                href="https://www.airbnb.ca/rooms/1142301968081447021?guests=1&adults=1&s=67&unique_share_id=090dd316-32ed-46cd-9900-8d295c47ec4e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0066CC] hover:bg-[#004C99] text-white px-6 py-3 rounded-md transition-colors"
              >
                Book Your Stay
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <AceCascadeFooter />
    </div>
  );
}
