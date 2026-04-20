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
        <title>Lights, Camera, Action! Welcome to Reel Room | Vancouver Private Theatre Studio</title>
        <meta
          name="description"
          content="The Reel Room is Vancouver's private theatre production and studio rental—premieres, corporate playbacks, reference reviews, and controlled cinema bookings."
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
                  Welcome to Reel Room: Vancouver&apos;s private theatre studio
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
                Vancouver crews and content teams: if you need a private cinema with reference playback, lounge support, and scheduling built around production—not open-door hospitality—Reel Room is built for you.
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
                Picture a locked screening: house lights down, calibrated audio, and a crew that is there to protect playback—not to upsell a social add-on package. That is the default operating mode here.
              </p>

              <p>
                Typical rentals include DCP and digital premieres, colour-critical reviews, corporate shareholder streams, branded content playbacks, client sign-offs at cinema scale, and photo or video shoots that need a theatre set. Each booking is scoped to run-of-show and technical requirements.
              </p>

              <h2 className="text-brand-gold heading-font">Elevating Your Culinary Experience</h2>
              
              <p>
                Catering and bar are add-ons aligned to your rental block—gourmet bites, cocktails, and service styles that support long playback days or client reviews without turning the room into a reception hall.
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

              <h2 className="text-brand-gold heading-font">Capacity that scales with your rental</h2>
              
              <p>
                Roughly 85–95+ people can move through the full facility depending on layout, with 40+ seated in the theatre for critical viewing. Lounge and bar zones handle parallel playback, notes, or hospitality timed to your schedule.
              </p>

              <p>
                If you are finishing a film, shipping a launch master, or presenting to stakeholders who expect cinema-quality presentation, book a tour and we will map the facility to your next screening or shoot.
              </p>

              <blockquote className="border-l-4 border-brand-gold pl-4 italic text-xl">
                Lights, camera, Reel Room – let the show begin!
              </blockquote>

              <div className="mt-8 bg-black p-6 rounded-lg border border-brand-gold">
                <h3 className="text-xl font-bold text-brand-gold mb-4 heading-font">Ready to Experience The Reel Room?</h3>
                <p className="mb-4">Book your studio rental today and line up technical prep for your next playback day.</p>
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
                    <h3 className="text-xl font-bold mb-2 text-black">
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
                    <h3 className="text-xl font-bold mb-2 text-black">
                      <Link href="/experiences">
                        Experiences & Pricing
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Explore rental packages and pricing for your next screening or production.
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
                        alt="Reel Room studio gallery"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-black">
                      <Link href="/media">
                        Media Gallery
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Browse photos of the facility, theatre, and lounge configurations.
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