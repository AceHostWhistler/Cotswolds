import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ReelRoomNavigation from '@/components/ReelRoomNavigation';
import ReelRoomFooter from '@/components/ReelRoomFooter';

export default function Blog() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
    
    // Detect iOS devices
    const detectIOS = () => {
      if (typeof window === 'undefined' || !window.navigator) return;
      
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOSDevice = 
        /iphone|ipod|ipad/i.test(userAgent) || 
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
        /iPhone|iPad|iPod/.test(navigator.userAgent);
      setIsIOS(isIOSDevice);
    };
    
    detectIOS();
  }, []);
  
  // Blog data
  const blogPosts = [
    {
      id: 0,
      title: "The Reel Room: Vancouver's Premier Holiday Production & Studio Rental for Christmas 2024",
      slug: "/blog-articles/best-holiday-event-venues-vancouver-christmas-2024",
      excerpt: "Year-end studio rental at The Reel Room—holiday screenings, corporate wrap-ups, and seasonal programming in a private Vancouver cinema facility.",
      image: "/photos/homepage-originals/DSC03672-Enhanced-NR.jpg",
    },
    {
      id: 1,
      title: "The Best Private Production & Studio Rental in Vancouver 2025",
      slug: "/blog-articles/best-private-event-venue-vancouver-2025",
      excerpt: "Why The Reel Room leads Vancouver private production and studio rental in 2025—premieres, DCP, shoots, and corporate playbacks.",
      image: "/photos/homepage-originals/DSC03060-Enhanced-NR.jpg",
    },
    {
      id: 2,
      title: "DCP and Movie Premieres at The Reel Room Private Screening Studio",
      slug: "/blog-articles/dcp-and-movie-premieres-at-the-reel-room",
      excerpt: "Learn about DCP (Digital Cinema Package) and how The Reel Room supports premium premiere screenings with professional playback.",
      image: "/photos/homepage-originals/DSC03086-Enhanced-NR.jpg",
    },
    {
      id: 3,
      title: "Lights, Camera, Action! Welcome to Reel Room: Vancouver's Private Theatre Studio",
      slug: "/blog-articles/lights-camera-action-welcome-to-reel-room",
      excerpt: "Discover Vancouver's private cinema facility for film screenings, corporate productions, and controlled studio rentals.",
      image: "/photos/homepage-originals/DSC03138-Enhanced-NR.jpg",
    },
    {
      id: 4,
      title: "Cinema-Scale Client Playback at The Reel Room",
      slug: "/blog-articles/cinema-scale-client-playback-at-the-reel-room",
      excerpt: "Private theatre rental for reference reviews, client playbacks, and technical sign-offs with cinema-scale picture and sound.",
      image: "/photos/homepage-originals/DSC03259-Enhanced-NR.jpg",
    }
  ];
  
  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <Head>
        <title>The Reel Room Blog | Vancouver's Premier Film and Media Productions</title>
        <meta name="description" content="Articles about The Reel Room—Vancouver private theatre production and studio rental for premieres, screenings, and corporate productions." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <style>{`
          /* Force black text on blog cards */
          .blog-card-title {
            color: #000000 !important;
            text-shadow: none !important;
            -webkit-text-fill-color: #000000 !important;
            fill: #000000 !important;
          }
          
          /* Override any hover effects */
          .blog-card-title:hover,
          a:hover .blog-card-title,
          .group:hover .blog-card-title {
            color: #000000 !important;
            text-shadow: none !important;
            -webkit-text-fill-color: #000000 !important;
            fill: #000000 !important;
          }
          
          /* Override any global styles */
          .heading-font.text-2xl.font-light.tracking-wide.mb-3 {
            color: #000000 !important;
            text-shadow: none !important;
            -webkit-text-fill-color: #000000 !important;
          }
          
          /* Additional specificity */
          .blog-card-container .blog-card-title {
            color: #000000 !important;
            text-shadow: none !important;
            -webkit-text-fill-color: #000000 !important;
          }
          
          /* Fix for iOS */
          @supports (-webkit-touch-callout: none) {
            .blog-card-title {
              color: #000000 !important;
              text-shadow: none !important;
              -webkit-text-fill-color: #000000 !important;
            }
          }
        `}</style>
      </Head>
      
      <ReelRoomNavigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <picture>
            <source
              media="(max-width: 799px)"
              srcSet="/photos/optimized/DSC03070-Enhanced-NR-800.jpg"
            />
            <source
              media="(min-width: 800px) and (max-width: 1279px)"
              srcSet="/photos/optimized/DSC03070-Enhanced-NR-1280.jpg"
            />
            <source
              media="(min-width: 1280px)"
              srcSet="/photos/optimized/DSC03070-Enhanced-NR-1920.jpg"
            />
            <img
              src="/photos/originals/homepage/DSC03070-Enhanced-NR.jpg"
              alt="The Reel Room Blog"
              className="absolute inset-0 w-full h-full object-cover brightness-75"
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">The Reel Room Blog</h1>
                <p className="text-xl mb-8">
                  Stories, insights, and updates from Vancouver&apos;s private theatre production and studio rental team.
                </p>
              </div>
            </div>
          </div>
        </div>
      
        {/* Blog Posts Grid - Show for all devices */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="heading-font text-3xl font-light mb-16 text-center">Latest Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg border border-gray-200">
                  <Link href={post.slug} className="block">
                    <div className="relative" style={{ height: "200px" }}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="heading-font text-2xl font-light tracking-wide mb-3" style={{color: '#000000'}}>{post.title}</h2>
                      <p className="body-font text-gray-600 mb-6">{post.excerpt}</p>
                      <span className="heading-font inline-block uppercase tracking-widest text-sm bg-brand-gold text-black px-5 py-2 border border-brand-gold font-medium">
                        Read Article
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <ReelRoomFooter />
    </div>
  );
} 