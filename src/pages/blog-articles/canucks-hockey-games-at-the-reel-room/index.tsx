import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReelRoomNavigation from "@/components/ReelRoomNavigation";
import ReelRoomFooter from "@/components/ReelRoomFooter";

export default function CanucksHockeyGames() {
  return (
    <>
      <Head>
        <title>Canucks Hockey Games at The Reel Room | Private Sports Screening Rental Vancouver</title>
        <meta
          name="description"
          content="Rent The Reel Room for Vancouver Canucks hockey with cinema-scale 4K picture and 7.1 sound—private theatre playback for teams, sponsors, and controlled guest lists."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="min-h-screen bg-black">
        <ReelRoomNavigation />

        <main className="pt-20">
          {/* Hero Section */}
          <div className="relative h-[50vh]">
            <Image
              src="/photos/Blogs/canucks-hockey-games/theatre.jpg"
              alt="The Reel Room Theatre Space"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl font-bold text-white mb-4 heading-font">
                  The Ultimate Canucks Game Day Experience
                </h1>
                <p className="text-2xl text-white heading-font">
                  Private theatre rental built for broadcast-style sports playback
                </p>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="max-w-4xl mx-auto px-4 py-12 text-white">
            <div className="flex items-center text-gray-400 mb-8">
              <time dateTime="2024-05-10">May 10, 2024</time>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>

            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-xl leading-relaxed">
                When the feed matters, a bar TV is not enough. The Reel Room is a private cinema you rent for live or tape-fed hockey—big screen, surround sound, and a run-of-show you control instead of a public crowd.
              </p>

              <h2 className="text-brand-gold heading-font">The Big Screen Advantage</h2>
              
              <p>
                Picture this: The Canucks facing off against their rivals on our massive 25-foot Severtson matte white woven fabric screen with crystal-clear 4K resolution. Every save, goal, and bone-crushing hit is displayed in stunning detail that makes you feel like you're right at center ice. Our Dolby CP750 Digital cinema processor with 7.1 surround sound ensures you hear every skate cut, stick tap, and crowd roar with perfect clarity.
              </p>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/Blogs/canucks-hockey-games/theatre.jpg" 
                  alt="Luxury Theatre Seating" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <h2 className="text-brand-gold heading-font">Dual-room playback layout</h2>
              
              <p>
                The theatre seats 40+ for primary picture, while combined lounges support roughly 85–95+ people across the facility. A 70-inch display in the lounge mirrors or carries secondary program feeds so attendees can step out for notes or hospitality without losing the action.
              </p>

              <p>
                Book for sponsor groups, corporate hospitality, media playback reviews, or controlled fan screenings. Set dressing and brand cues stay subject to facility guidelines—this remains a rental, not an open public night.
              </p>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/Blogs/canucks-hockey-games/bar.jpg" 
                  alt="Premium Bar Experience" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <h2 className="text-brand-gold heading-font">Elevated Game Day Eats</h2>
              
              <p>
                Catering and bar are scoped to your rental: tasting menus for clients, beer-and-wings for crew, or branded non-alc service for daytime shoots. Service follows the technical schedule—not the other way around.
              </p>

              <p>
                Signature cocktails, wine picks, or colour-themed drinks can be built into the run-of-show when requested, always within licensing and staffing for your booking.
              </p>

              <h2 className="text-brand-gold heading-font">The Perfect Playoff Headquarters</h2>
              
              <p>
                Playoff hockey benefits from full dynamic range audio and a screen that keeps every zone readable. Rent the room when you need immersion without stadium logistics—ideal for sponsor holds, influencer capture, or team-only reviews of broadcast cuts.
              </p>

              <p>
                Even better? You won't miss a moment standing in line for food or drinks. Our attentive staff ensures your game-day favorites and beverages arrive right when you need them, so you never miss that crucial goal or game-changing save.
              </p>

              <h2 className="text-brand-gold heading-font">Beyond The Game</h2>
              
              <p>
                Use pre-game blocks for sponsor reels or fantasy drafts, and post-game blocks for immediate replay review on the big screen—our AV paths support live and file-based playback in the same rental day.
              </p>

              <p>
                For productions that need both live feed and instant replay review, schedule a technical advance so switching, recording, and levels match your deliverable.
              </p>

              <blockquote className="border-l-4 border-brand-gold pl-4 italic text-xl">
                "The only thing better than watching the Canucks win is watching them win on a 25-foot screen with perfect sound, comfortable seating, and a drink in hand!"
              </blockquote>

              <div className="mt-8 bg-black p-6 rounded-lg border border-brand-gold">
                <h3 className="text-xl font-bold text-brand-gold mb-4 heading-font">Ready to Experience Canucks Hockey in Style?</h3>
                <p className="mb-4">Book The Reel Room for your next game-day screening rental—hold dates, confirm feeds, and line up staffing with our team.</p>
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
                      Discover Vancouver&apos;s private theatre studio for screenings and productions.
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
                        src="/photos/homepage/DSC03529-Enhanced-NR.jpg"
                        alt="Experience at Reel Room"
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
                      Explore rental packages and pricing for your next screening or production day.
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