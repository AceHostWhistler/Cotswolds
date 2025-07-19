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
      title: "The Best Private Event Venue Space in Vancouver 2025",
      slug: "/blog-articles/best-private-event-venue-vancouver-2025",
      excerpt: "Discover why The Reel Room is Vancouver's premier private event venue for 2025. Perfect for film screenings, parties, weddings, corporate events, and more!",
      image: "/photos/homepage-originals/DSC03060-Enhanced-NR.jpg",
    },
    {
      id: 1,
      title: "DCP and Movie Premieres at The Reel Room Private Event Space",
      slug: "/blog-articles/dcp-and-movie-premieres-at-the-reel-room",
      excerpt: "Learn about DCP (Digital Cinema Package) format and how The Reel Room can host your premium movie premiere events with professional screening capabilities.",
      image: "/photos/homepage-originals/DSC03086-Enhanced-NR.jpg",
    },
    {
      id: 2,
      title: "Lights, Camera, Action! Welcome to Reel Room: Vancouver's Hottest Private Theatre Event Space!",
      slug: "/blog-articles/lights-camera-action-welcome-to-reel-room",
      excerpt: "Discover Vancouver's most exclusive private theatre venue for film screenings, corporate events, and special celebrations.",
      image: "/photos/homepage-originals/DSC03138-Enhanced-NR.jpg",
    },
    {
      id: 3,
      title: "The Ultimate Canucks Game Day Experience at The Reel Room",
      slug: "/blog-articles/canucks-hockey-games-at-the-reel-room",
      excerpt: "Experience Vancouver Canucks hockey games like never before at The Reel Room. Our luxurious private theatre venue offers the ultimate sports viewing experience.",
      image: "/photos/homepage-originals/DSC03672-Enhanced-NR.jpg",
    },
    {
      id: 4,
      title: "Bold and Colourful Wedding with Iris Apfel Vibes",
      slug: "",
      excerpt: "See how The Reel Room was transformed for a bold and colorful wedding photoshoot inspired by fashion icon Iris Apfel. Recently featured in Magpie Wedding.",
      image: "/photos/homepage-originals/DSC03106-Enhanced-NR.jpg",
      externalLink: "https://www.magpiewedding.com/wedding-inspiration/bold-and-colourful-wedding-with-iris-apfel-vibes/"
    }
  ];
  
  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <Head>
        <title>The Reel Room Blog | Vancouver's Premier Film and Media Productions</title>
        <meta name="description" content="Read articles about The Reel Room, Vancouver's premier private theatre and event space for film screenings, corporate events, and special celebrations." />
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
          <Image
            src="/photos/homepage-originals/DSC03097-Enhanced-NR.jpg"
            alt="The Reel Room Blog"
            fill
            priority
            style={{ objectFit: "cover" }}
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">The Reel Room Blog</h1>
                <p className="text-xl mb-8">
                  Stories, insights, and updates from Vancouver's premier private theatre venue.
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
                <div key={post.id} className="blog-card-container bg-gradient-to-b from-gray-100 to-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-brand-gold/30">
                  {post.externalLink ? (
                    <a href={post.externalLink} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          style={{ objectFit: "cover", objectPosition: "center" }}
                          className="transition-transform duration-700 group-hover:scale-105 brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6 bg-white">
                        <h2 className="heading-font text-2xl font-light tracking-wide mb-3 blog-card-title" style={{color: '#000000', textShadow: 'none'}}>{post.title}</h2>
                        <p className="body-font text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                        <span className="heading-font inline-block uppercase tracking-widest text-sm bg-brand-gold text-black px-5 py-2 hover:bg-black hover:text-brand-gold border border-brand-gold transition-all duration-300 font-medium">
                          Read on Magpie Wedding
                        </span>
                      </div>
                    </a>
                  ) : (
                    <Link href={post.slug} className="block">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          style={{ objectFit: "cover", objectPosition: "center" }}
                          className="transition-transform duration-700 group-hover:scale-105 brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6 bg-white">
                        <h2 className="heading-font text-2xl font-light tracking-wide mb-3 blog-card-title" style={{color: '#000000', textShadow: 'none'}}>{post.title}</h2>
                        <p className="body-font text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                        <span className="heading-font inline-block uppercase tracking-widest text-sm bg-brand-gold text-black px-5 py-2 hover:bg-black hover:text-brand-gold border border-brand-gold transition-all duration-300 font-medium">
                          Read Article
                        </span>
                      </div>
                    </Link>
                  )}
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