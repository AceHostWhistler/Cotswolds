import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReelRoomNavigation from "@/components/ReelRoomNavigation";
import ReelRoomFooter from "@/components/ReelRoomFooter";

export default function LightsCameraAction() {
  return (
    <>
      <Head>
        <title>Lights, Camera, Action! Welcome to Reel Room | Vancouver's Hottest Private Theatre Event Space</title>
        <meta
          name="description"
          content="Discover Vancouver's premier private theatre event space. From film screenings to private parties, The Reel Room offers a unique cinematic experience for all occasions."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="min-h-screen bg-black">
        <ReelRoomNavigation />

        <main className="pt-20">
          {/* Hero Section */}
          <div className="relative h-[50vh]">
            <Image
              src="/photos/Blogs/lights-camera-action/cinema.jpg"
              alt="The Reel Room Theatre Space"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl font-bold text-white mb-4 heading-font">
                  Lights, Camera, Action!
                </h1>
                <p className="text-2xl text-white heading-font">
                  Welcome to Reel Room: Vancouver's Hottest Private Theatre Event Space
                </p>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="max-w-4xl mx-auto px-4 py-12 text-white">
            <div className="flex items-center text-gray-400 mb-8">
              <time dateTime="2024-05-09">May 9, 2024</time>
              <span className="mx-2">•</span>
              <span>4 min read</span>
            </div>

            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-xl leading-relaxed">
                Hey there, Vancouverites and fellow cinephiles! Are you ready to embark on a cinematic adventure like no other? If so, grab your popcorn and get ready to experience the glitz and glamour of Hollywood right here in our beautiful city, because Reel Room is rolling out the red carpet just for you!
              </p>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/Blogs/lights-camera-action/theatre.jpg" 
                  alt="Luxury Theatre Seating" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <p>
                Picture this: you and your friends, gathered in a luxurious private theatre, surrounded by plush seating and state-of-the-art sound systems. As the lights dim and the screen comes to life, you're transported to another world, immersed in the magic of film like never before.
              </p>

              <p>
                But wait, there's more! At Reel Room, we're not just about watching movies – we're about creating unforgettable experiences. Whether you're hosting a birthday bash, a corporate event, or a romantic date night, our versatile venue has you covered. From themed movie marathons to interactive gaming nights, or even live sports games, the possibilities are endless!
              </p>

              <h2 className="text-brand-gold heading-font">Elevating Your Culinary Experience</h2>
              
              <p>
                And let's talk about the snacks, shall we? Say goodbye to stale popcorn and overpriced candy – at Reel Room, we take movie snacks to the next level. Indulge in gourmet popcorn flavours, savoury appetizers, and decadent desserts, all carefully curated to complement your cinematic experience. Plus, we offer high-end catering for those looking to celebrate special occasions. Whether it's a wedding anniversary, a milestone birthday, or a corporate gala, we can work within your budget to make your event extra special.
              </p>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/Blogs/lights-camera-action/bar.jpg" 
                  alt="Premium Bar Experience" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <h2 className="text-brand-gold heading-font">Premium Cocktail Selection</h2>
              
              <p>
                Now, let's raise the curtain on our cocktail list. Prepare your taste buds for a journey of indulgence and sophistication. Our expert mixologists have crafted a premium selection of cocktails that will tantalize your senses and elevate your experience to new heights. From classic concoctions to signature creations, each drink is meticulously crafted using only the finest ingredients, ensuring that every sip is a moment of pure delight.
              </p>

              <h2 className="text-brand-gold heading-font">Perfect for Every Occasion</h2>
              
              <p>
                With a current capacity of 85-95+ for the entire venue and the ability to comfortably seat 40+ in the theatre room at once, Reel Room is perfect for gatherings of all sizes.
              </p>

              <p>
                So why wait? Whether you're a film buff, a party animal, a sports enthusiast, or just someone looking for a unique night out, Reel Room is the ultimate destination for entertainment in Vancouver. Book your event now and get ready to see movies like never before!
              </p>

              <blockquote className="border-l-4 border-brand-gold pl-4 italic text-xl">
                Lights, camera, Reel Room – let the show begin!
              </blockquote>

              <div className="mt-8 bg-black p-6 rounded-lg border border-brand-gold">
                <h3 className="text-xl font-bold text-brand-gold mb-4 heading-font">Ready to Experience The Reel Room?</h3>
                <p className="mb-4">Book your private event today and create memories that will last a lifetime.</p>
                <Link 
                  href="/reservations" 
                  className="inline-block bg-black text-brand-gold px-6 py-3 rounded-md font-medium hover:bg-brand-gold/10 transition-colors border border-brand-gold"
                >
                  Make a Reservation
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-gray-900 py-12">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-white heading-font">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-black rounded-lg overflow-hidden shadow-md border border-brand-gold/30">
                  <Link href="/blog-articles/dcp-and-movie-premieres-at-the-reel-room">
                    <div className="relative h-48">
                      <Image
                        src="/photos/Blogs/dcp-and-movie-premieres/premier.jpg"
                        alt="Movie Premiere at Reel Room"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      <Link href="/blog-articles/dcp-and-movie-premieres-at-the-reel-room">
                        DCP and Movie Premieres at The Reel Room
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Learn about our state-of-the-art digital cinema package system for exclusive movie screenings.
                    </p>
                    <Link
                      href="/blog-articles/dcp-and-movie-premieres-at-the-reel-room"
                      className="text-brand-gold font-medium hover:text-brand-cream"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>

                <div className="bg-black rounded-lg overflow-hidden shadow-md border border-brand-gold/30">
                  <Link href="/experiences">
                    <div className="relative h-48">
                      <Image
                        src="/photos/homepage/DSC03507-Enhanced-NR.jpg"
                        alt="Theatre Experience at Reel Room"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      <Link href="/experiences">
                        Experiences & Pricing
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Explore our various packages and pricing options for your next event.
                    </p>
                    <Link
                      href="/experiences"
                      className="text-brand-gold font-medium hover:text-brand-cream"
                    >
                      View Experiences →
                    </Link>
                  </div>
                </div>

                <div className="bg-black rounded-lg overflow-hidden shadow-md border border-brand-gold/30">
                  <Link href="/media">
                    <div className="relative h-48">
                      <Image
                        src="/photos/homepage-originals/DSC03339.jpg"
                        alt="Events at Reel Room"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      <Link href="/media">
                        Media Gallery
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Browse our gallery of photos showcasing our beautiful venue.
                    </p>
                    <Link
                      href="/media"
                      className="text-brand-gold font-medium hover:text-brand-cream"
                    >
                      View Gallery →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <ReelRoomFooter />
      </div>
    </>
  );
} 