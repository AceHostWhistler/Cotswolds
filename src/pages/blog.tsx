import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ReelRoomNavigation from '@/components/ReelRoomNavigation';
import ReelRoomFooter from '@/components/ReelRoomFooter';

export default function Blog() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);
  
  // Blog data
  const blogPosts = [
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
      
        {/* Featured Article */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-black to-[#1a1a1a] rounded-lg shadow-xl overflow-hidden border border-brand-gold/20">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative group">
                  <Link href="/blog-articles/dcp-and-movie-premieres-at-the-reel-room" className="block h-full">
                    <div className="relative aspect-[4/3] md:h-full">
                      <Image
                        src="/photos/homepage-originals/DSC03086-Enhanced-NR.jpg"
                        alt="DCP and Movie Premieres at The Reel Room"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="transition-all duration-700 ease-in-out group-hover:scale-105 brightness-90"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
                    </div>
                    {/* Featured article tag that appears on the image */}
                    <div className="absolute top-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-sm border-l-4 border-brand-gold">
                      <span className="text-sm text-brand-gold uppercase tracking-widest font-medium">FEATURED ARTICLE</span>
                    </div>
                  </Link>
                </div>
                <div className="md:w-1/2 p-8 md:p-10 text-white">
                  <Link href="/blog-articles/dcp-and-movie-premieres-at-the-reel-room" className="block group">
                    <h2 className="heading-font text-3xl md:text-4xl font-light mb-4 text-white group-hover:text-brand-gold transition-colors">DCP and Movie Premieres at The Reel Room</h2>
                  </Link>
                  <p className="body-font text-gray-100 mb-8 leading-relaxed backdrop-blur-sm bg-black/30 p-4 rounded">
                    The Reel Room offers state-of-the-art digital cinema package (DCP) systems for exclusive movie screenings and premieres. Perfect for filmmakers looking to showcase their work in a sophisticated environment.
                  </p>
                  <Link 
                    href="/blog-articles/dcp-and-movie-premieres-at-the-reel-room" 
                    className="inline-block bg-brand-gold text-black px-6 py-3 uppercase tracking-widest text-sm font-medium hover:bg-white transition-all duration-300"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="heading-font text-3xl font-light mb-16 text-center">Latest Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-gradient-to-b from-gray-100 to-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 hover:border-brand-gold/30">
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
                      <div className="p-6">
                        <h2 className="heading-font text-2xl font-light tracking-wide mb-3 group-hover:text-brand-gold transition-colors">{post.title}</h2>
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
                      <div className="p-6">
                        <h2 className="heading-font text-2xl font-light tracking-wide mb-3 group-hover:text-brand-gold transition-colors">{post.title}</h2>
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
        
        {/* Photo Gallery Section */}
        <section className="py-16 bg-[#f5f5f5]">
          <div className="container mx-auto px-4">
            <h2 className="heading-font text-3xl font-light mb-12 text-center">The Reel Room Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 row-span-2 overflow-hidden rounded-lg shadow-md">
                <div className="w-full relative">
                  <Image 
                    src="/photos/homepage-originals/DSC03264-Enhanced-NR.jpg" 
                    alt="Reel Room Space" 
                    width={800}
                    height={600}
                    className="w-full transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image 
                  src="/photos/homepage-originals/DSC03078-Enhanced-NR.jpg" 
                  alt="Reel Room Detail" 
                  width={400}
                  height={300}
                  className="w-full transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image 
                  src="/photos/homepage-originals/DSC03138-Enhanced-NR.jpg" 
                  alt="Reel Room Bar" 
                  width={400}
                  height={300}
                  className="w-full transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image 
                  src="/photos/homepage-originals/DSC03167-Enhanced-NR.jpg" 
                  alt="Reel Room Seating" 
                  width={400}
                  height={300}
                  className="w-full transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-md">
                <Image 
                  src="/photos/homepage-originals/DSC03198-Enhanced-NR.jpg" 
                  alt="Reel Room Event" 
                  width={400}
                  height={300}
                  className="w-full transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <ReelRoomFooter />
    </div>
  );
} 