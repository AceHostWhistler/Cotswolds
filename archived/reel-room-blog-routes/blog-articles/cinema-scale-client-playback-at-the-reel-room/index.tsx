import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReelRoomNavigation from "@/components/ReelRoomNavigation";
import ReelRoomFooter from "@/components/ReelRoomFooter";

export default function CinemaScaleClientPlayback() {
  return (
    <>
      <Head>
        <title>Cinema-Scale Client Playback at The Reel Room | Vancouver Studio Rental</title>
        <meta
          name="description"
          content="Rent The Reel Room for reference-grade client playback and technical reviews—cinema-scale 4K picture, 7.1 surround, and a run-of-show you control."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="min-h-screen bg-black">
        <ReelRoomNavigation />

        <main className="pt-20">
          <div className="relative h-[50vh]">
            <Image
              src="/photos/Blogs/canucks-hockey-games/screen-room.jpg"
              alt="The Reel Room screen room for client playback and studio rental"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl font-bold text-white mb-4 heading-font">
                  Cinema-Scale Client Playback
                </h1>
                <p className="text-2xl text-white heading-font">
                  Private screen room rental for reference reviews and studio sign-offs
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-12 text-white">
            <div className="flex items-center text-gray-400 mb-8">
              <time dateTime="2024-05-10">May 10, 2024</time>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>

            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-xl leading-relaxed">
                When approvals depend on what people see and hear, a conference-room TV is not enough. The Reel Room is a private cinema you rent for colour-critical reviews, client playbacks, and technical sign-offs—big screen, surround sound, and a schedule you own from load-in to strike.
              </p>

              <h2 className="text-brand-gold heading-font">Reference playback on a cinema-style canvas</h2>

              <p>
                Your masters land on a 25-foot Severtson matte white woven fabric screen with crisp 4K presentation and a Dolby CP750 digital cinema processor feeding 7.1 surround. That combination is built for crews who need to trust shadow detail, dialogue intelligibility, and dynamics—not guess from a laptop feed.
              </p>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image
                  src="/photos/Blogs/canucks-hockey-games/screen-room.jpg"
                  alt="The screen room seating for studio playback"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2 className="text-brand-gold heading-font">Dual-room layout for production days</h2>

              <p>
                The screen room seats 40+ for primary picture, while combined lounges support roughly 85–95+ people across the facility. A 70-inch display in the lounge can mirror program feeds or carry parallel reference so producers and clients can step out for notes without losing sync with the main pass.
              </p>

              <p>
                Book for finishing reviews, agency approvals, QC blocks, and closed technical runs. Set dressing and signage stay subject to facility guidelines—this remains a rental under your direction, not open programming.
              </p>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image
                  src="/photos/Blogs/canucks-hockey-games/bar.jpg"
                  alt="Lounge and bar configured for studio rental"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2 className="text-brand-gold heading-font">Catering aligned to the technical schedule</h2>

              <p>
                Catering and bar are scoped to your rental: working lunches for long review days, coffee service for morning notes, or evening wrap hospitality after playback locks. Service follows the technical schedule—not the other way around.
              </p>

              <h2 className="text-brand-gold heading-font">Built for finishing discipline</h2>

              <p>
                Full dynamic range audio and a screen large enough to read fine detail make this room useful for final passes before delivery. Schedule a technical advance so switching, levels, and file formats match your pipeline—live play-out and file-based playback can share the same rental day when planned.
              </p>

              <blockquote className="border-l-4 border-brand-gold pl-4 italic text-xl">
                &quot;If the room does not feel like a real cinema, the sign-off is not real either—we book here when the master has to read true.&quot;
              </blockquote>

              <div className="mt-8 bg-black p-6 rounded-lg border border-brand-gold">
                <h3 className="text-xl font-bold text-brand-gold mb-4 heading-font">Book a studio playback block</h3>
                <p className="mb-4">
                  Hold dates, confirm formats, and line up staffing with our team for your next reference review or client session.
                </p>
                <Link
                  href="/book-now"
                  className="inline-block bg-black text-brand-gold px-6 py-3 rounded-md font-medium hover:bg-brand-gold/10 transition-colors border border-brand-gold"
                >
                  Book now
                </Link>
              </div>
            </div>
          </div>

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
                      Discover Vancouver&apos;s private screen room studio for screenings and productions.
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
                  <Link href="/blog-articles/dcp-and-movie-premieres-at-the-reel-room">
                    <div className="relative h-48">
                      <Image
                        src="/photos/Blogs/dcp-and-movie-premieres/premier.jpg"
                        alt="Movie premiere at Reel Room"
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
                      Learn about our digital cinema package workflows for premiere screenings.
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
                        src="/photos/homepage/DSC03529-Enhanced-NR.jpg"
                        alt="Studio rental at Reel Room"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-black">
                      <Link href="/experiences">Experiences &amp; Pricing</Link>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Explore rental packages for your next screening or production day.
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
