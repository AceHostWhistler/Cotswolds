import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LazyVimeoPlayer from '@/components/LazyVimeoPlayer';
import ReelRoomNavigation from '@/components/ReelRoomNavigation';
import ReelRoomFooter from '@/components/ReelRoomFooter';
import OptimizedImage from '@/components/OptimizedImage';
import { scrollToTop } from '@/utils/scrollUtils';

export default function Videos() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
    
    // Ensure page starts from the top
    scrollToTop();
  }, []);
  
  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <Head>
        <title>The Reel Room Videos | Vancouver's Premier Film and Media Productions</title>
        <meta name="description" content="View featured videos of The Reel Room venue, events, and more to get a feel for our premier film and media production space in Vancouver." />
      </Head>
      
      <ReelRoomNavigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <OptimizedImage
            src="/photos/homepage-originals/DSC03535-Enhanced-NR.jpg"
            alt="The Reel Room Videos"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">The Reel Room Videos</h1>
                <p className="text-xl mb-8">
                  Experience the ambiance and possibilities of The Reel Room through our featured videos.
                </p>
              </div>
            </div>
          </div>
        </div>
      
        {/* Video Gallery */}
        <section className="py-16 bg-white text-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Film Release Video */}
              <div className="space-y-6">
                <div className="rounded-md overflow-hidden border border-gray-200">
                  <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                    <iframe 
                      src="https://player.vimeo.com/video/1027464900?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                      title="Film Release/Launch Parties at The Reel Room Vancouver"
                      className="vimeo-player"
                    ></iframe>
                  </div>
                </div>
                <h2 className="heading-font text-2xl font-light">Film Release Events</h2>
                <p className="body-font text-gray-700">
                  See how The Reel Room transforms for film premiere events, providing filmmakers with a professional and elegant setting to showcase their work.
                </p>
              </div>
              
              {/* Halloween/Sports Video */}
              <div className="space-y-6">
                <div className="rounded-md overflow-hidden border border-gray-200">
                  <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                    <iframe 
                      src="https://player.vimeo.com/video/1082926490?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                      title="Reel Room Events | Halloween, Sports Games"
                      className="vimeo-player"
                    ></iframe>
                  </div>
                </div>
                <h2 className="heading-font text-2xl font-light">Parties & Sports Events</h2>
                <p className="body-font text-gray-700">
                  Explore how we create the perfect atmosphere for themed parties and sports viewing events, combining premium viewing with sophisticated hospitality.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured in Elle Magazine */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white p-0 rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src="/photos/homepage/DSC03549-Enhanced-NR.jpg" 
                    alt="Reel Room Featured in Elle Magazine" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h2 className="heading-font text-2xl font-light mb-4">Featured in Elle Magazine</h2>
                  <p className="body-font mb-6 text-gray-700">
                    The Reel Room was recently featured in a bold and colorful wedding inspiration photoshoot with unique and creative vibes. Our venue provided the perfect backdrop for this vibrant event.
                  </p>
                  <Link
                    href="/media"
                    className="inline-block bg-black text-white px-6 py-3 uppercase tracking-widest text-sm font-light hover:bg-gray-800 transition-colors"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="heading-font text-3xl font-light mb-6">Ready to Experience The Reel Room?</h2>
            <p className="body-font text-gray-300 max-w-2xl mx-auto mb-8">
              Contact us today to schedule a tour or discuss how we can bring your event vision to life.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/reservations" className="inline-block bg-white text-black px-6 py-3 rounded-md transition-colors hover:bg-gray-100">
                Make a Reservation
              </Link>
              <Link href="/contact" className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-900">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <ReelRoomFooter />
    </div>
  );
} 