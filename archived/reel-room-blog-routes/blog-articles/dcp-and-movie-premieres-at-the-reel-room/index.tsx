import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReelRoomNavigation from "@/components/ReelRoomNavigation";
import ReelRoomFooter from "@/components/ReelRoomFooter";

export default function DCPMoviePremieres() {
  return (
    <>
      <Head>
        <title>DCP and Movie Premieres at The Reel Room | Private Screening Studio Vancouver</title>
        <meta
          name="description"
          content="The Reel Room offers state-of-the-art DCP systems for exclusive movie screenings and premieres in Vancouver. Perfect for filmmakers and studios."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="min-h-screen bg-black">
        <ReelRoomNavigation />

        <main className="pt-20">
          {/* Hero Section */}
          <div className="relative h-[50vh]">
            <Image
              src="/photos/Blogs/dcp-and-movie-premieres/premier.jpg"
              alt="The Reel Room premiere screening studio"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl font-bold text-white mb-4 heading-font">
                  DCP and Movie Premieres
                </h1>
                <p className="text-2xl text-white heading-font">
                  at The Reel Room private screening studio
                </p>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="max-w-4xl mx-auto px-4 py-12 text-white">
            <div className="flex items-center text-gray-400 mb-8">
              <time dateTime="2024-05-09">May 9, 2024</time>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>

            <div className="prose prose-lg max-w-none prose-invert">
              <h2 className="text-brand-gold heading-font">Premiere rental: a cinema room for filmmakers and studios</h2>
              
              <p className="text-xl leading-relaxed">
                The Reel Room in Vancouver is a private cinema facility built for exclusive screenings and critical review. Whether you are presenting unreleased work or running distributor-ready DCP, our digital cinema package (DCP) path is tuned to professional standards—not a banquet retrofit.
              </p>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/Blogs/dcp-and-movie-premieres/screening.jpg" 
                  alt="Reel Room Setup" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <h2 className="text-brand-gold heading-font">Exclusive Screening Capabilities</h2>
              
              <h3 className="text-white heading-font">1. Advanced Technology</h3>
              <p>
                The Reel Room is equipped with cutting-edge projection technology, ensuring that every frame of your movie is displayed with crystal-clear quality. The screen room supports various formats, including DCP, ensuring compatibility with the latest industry standards for film screenings.
              </p>

              <h3 className="text-white heading-font">2. Tailored Viewing Experience</h3>
              <p>
                Understanding the unique needs of film previews, The Reel Room offers customizable viewing experiences. Filmmakers can adjust lighting, sound, and other environmental factors to suit the specific needs of their screening, providing an optimal environment for both creators and audiences.
              </p>

              <h3 className="text-white heading-font">3. Privacy and Security</h3>
              <p>
                With an emphasis on confidentiality, The Reel Room is suited to unreleased playback. The facility is operated as a closed rental, helping teams manage access and protect work-in-progress materials.
              </p>

              <h2 className="text-brand-gold heading-font">Last-Minute Accommodations</h2>
              
              <p>
                Tight delivery schedules happen. When calendar allows, we work to accommodate urgent screening requests so finishing teams can lock picture and sound without losing a day to logistics.
              </p>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage/DSC03459-Enhanced-NR.jpg" 
                  alt="Private Film Screening" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <h2 className="text-brand-gold heading-font">Screen room specifications</h2>
              
              <p>
                The screen room boasts a seating capacity of over 85-95+, plush seating arrangements, and an ambiance that exudes both comfort and sophistication. Coupled with its high-quality sound systems and large, vivid screens, it offers an immersive viewing experience that is both intimate and impressive.
              </p>

              <h2 className="text-brand-gold heading-font">Client Testimonials</h2>
              
              <p>
                Crews return because playback days stay focused on technical delivery—signal path, seating, and timing—while hospitality stays optional and secondary to the screening brief.
              </p>

              <h2 className="text-brand-gold heading-font">Conclusion</h2>
              
              <p>
                For filmmakers presenting new work—or studios that need a secure private cinema—The Reel Room offers a purpose-built screening rental with emphasis on quality, flexibility, and confidentiality.
              </p>
              
              <p>
                For more details on how you can book your next film showing at The Reel Room, visit our <Link href="/experiences" className="text-brand-gold hover:underline">Experiences</Link> page.
              </p>

              <blockquote className="border-l-4 border-brand-gold pl-4 italic text-xl">
                Lights, camera, Reel Room – let the show begin!
              </blockquote>

              <div className="mt-8 bg-black p-6 rounded-lg border border-brand-gold">
                <h3 className="text-xl font-bold text-brand-gold mb-4 heading-font">Reserve Your Date Now!</h3>
                <p className="mb-4">As film screening slots are in high demand, especially during festival seasons, it is advisable to book well in advance to secure your preferred dates.</p>
                <Link 
                  href="/reservations" 
                  className="inline-block bg-black text-brand-gold px-6 py-3 rounded-md font-medium hover:bg-brand-gold/10 transition-colors border border-brand-gold"
                >
                  Book Now
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
                  <Link href="/blog-articles/lights-camera-action-welcome-to-reel-room">
                    <div className="relative h-48">
                      <Image
                        src="/photos/Blogs/lights-camera-action/cinema.jpg"
                        alt="Reel Room"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-black">
                      <Link href="/blog-articles/lights-camera-action-welcome-to-reel-room">
                        Lights, Camera, Action! Welcome to Reel Room
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Discover Vancouver&apos;s private screen room studio for premieres and screenings.
                    </p>
                    <Link
                      href="/blog-articles/lights-camera-action-welcome-to-reel-room"
                      className="text-brand-gold font-medium hover:text-brand-cream"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>

                <div className="bg-black rounded-lg overflow-hidden shadow-md border border-brand-gold/30">
                  <Link href="/blog-articles/cinema-scale-client-playback-at-the-reel-room">
                    <div className="relative h-48">
                      <Image
                        src="/photos/Blogs/canucks-hockey-games/screen-room.jpg"
                        alt="Cinema-scale client playback at Reel Room"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-black">
                      <Link href="/blog-articles/cinema-scale-client-playback-at-the-reel-room">
                        Cinema-Scale Client Playback at The Reel Room
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Reference reviews and client sign-offs with cinema-scale picture and sound in a private screening rental.
                    </p>
                    <Link
                      href="/blog-articles/cinema-scale-client-playback-at-the-reel-room"
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
                        alt="Screen room experience at Reel Room"
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
                      Explore rental rates and add-ons for your next screening or production day.
                    </p>
                    <Link
                      href="/experiences"
                      className="text-brand-gold font-medium hover:text-brand-cream"
                    >
                      View Experiences →
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