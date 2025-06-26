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
        <title>DCP and Movie Premieres at The Reel Room | Private Event Space Vancouver</title>
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
              alt="The Reel Room Premier Event Space"
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
                  at The Reel Room Private Event Space
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
              <h2 className="text-brand-gold heading-font">Movie Premiere Rental Space: A Cinematic Haven for Filmmakers and Studios</h2>
              
              <p className="text-xl leading-relaxed">
                The Reel Room Event Space, nestled in the vibrant heart of Vancouver, is not just the best venue for private events in Vancouver, but a top-tier cinema for exclusive movie screenings as well. Whether it's showcasing unreleased films or hosting private viewings, The Reel Room offers a state-of-the-art digital cinema package (DCP) system that meets the industry's highest standards.
              </p>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/Blogs/dcp-and-movie-premieres/screening.jpg" 
                  alt="Reel Room Theatre Setup" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <h2 className="text-brand-gold heading-font">Exclusive Screening Capabilities</h2>
              
              <h3 className="text-white heading-font">1. Advanced Technology</h3>
              <p>
                The Reel Room is equipped with cutting-edge projection technology, ensuring that every frame of your movie is displayed with crystal-clear quality. The theater supports various formats, including DCP, ensuring compatibility with the latest industry standards for film screenings.
              </p>

              <h3 className="text-white heading-font">2. Tailored Viewing Experience</h3>
              <p>
                Understanding the unique needs of film previews, The Reel Room offers customizable viewing experiences. Filmmakers can adjust lighting, sound, and other environmental factors to suit the specific needs of their screening, providing an optimal environment for both creators and audiences.
              </p>

              <h3 className="text-white heading-font">3. Privacy and Security</h3>
              <p>
                With an emphasis on confidentiality, The Reel Room is the perfect spot for screening unreleased movies. The venue guarantees a secure environment, allowing filmmakers and studios to present their work without concerns over leaks or unauthorized sharing.
              </p>

              <h2 className="text-brand-gold heading-font">Last-Minute Accommodations</h2>
              
              <p>
                Recognizing the challenges of securing a venue for upscale events on short notice, The Reel Room goes the extra mile to accommodate last-minute requests. This flexibility ensures that even the most urgent screening needs are met with professionalism and ease, making it a reliable choice for high-profile launches.
              </p>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage/DSC03459-Enhanced-NR.jpg" 
                  alt="Private Film Screening" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <h2 className="text-brand-gold heading-font">Theatre Specifications</h2>
              
              <p>
                The theatre boasts a seating capacity of over 85-95+, plush seating arrangements, and an ambiance that exudes both comfort and sophistication. Coupled with its high-quality sound systems and large, vivid screens, it offers an immersive viewing experience that is both intimate and impressive.
              </p>

              <h2 className="text-brand-gold heading-font">Client Testimonials</h2>
              
              <p>
                Feedback from previous clients highlights their satisfaction with the seamless experience of hosting screenings at The Reel Room. The venue's ability to cater to the specific technical and hospitality needs of film professionals makes it a preferred choice in Vancouver.
              </p>

              <h2 className="text-brand-gold heading-font">Conclusion</h2>
              
              <p>
                For filmmakers looking for a venue to present their latest work, or for studios in need of a secure location for private screenings, The Reel Room offers unparalleled services and facilities. Its commitment to quality, flexibility, and confidentiality ensures that every screening is a success.
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
                        alt="Reel Room Theatre"
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
                      Discover Vancouver's hottest private theatre event space and what makes it special.
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
                  <Link href="/blog-articles/canucks-hockey-games-at-the-reel-room">
                    <div className="relative h-48">
                      <Image
                        src="/photos/Blogs/canucks-hockey-games/theatre.jpg"
                        alt="Canucks Hockey Games at Reel Room"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-black">
                      <Link href="/blog-articles/canucks-hockey-games-at-the-reel-room">
                        The Ultimate Canucks Game Day Experience
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Experience Canucks hockey games like never before in our luxury private theatre venue.
                    </p>
                    <Link
                      href="/blog-articles/canucks-hockey-games-at-the-reel-room"
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
              </div>
            </div>
          </div>
        </main>

        <ReelRoomFooter />
      </div>
    </>
  );
} 