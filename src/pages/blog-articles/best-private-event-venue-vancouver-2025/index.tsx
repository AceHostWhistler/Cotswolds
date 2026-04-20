import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReelRoomNavigation from "@/components/ReelRoomNavigation";
import ReelRoomFooter from "@/components/ReelRoomFooter";
import CalendlyPopupLink from "@/components/CalendlyPopupLink";

export default function BestPrivateEventVenue2025() {
  const [isIOS, setIsIOS] = useState(false);
  
  useEffect(() => {
    // Detect iOS devices
    const detectIOS = () => {
      try {
        if (typeof window === 'undefined' || !window.navigator) return;
        
        const userAgent = navigator.userAgent.toLowerCase();
        const isIOSDevice = 
          /iphone|ipod|ipad/i.test(userAgent) || 
          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
          /iPhone|iPad|iPod/.test(navigator.userAgent);
        setIsIOS(isIOSDevice);
      } catch (error) {
        console.error("Error detecting iOS device:", error);
      }
    };
    
    detectIOS();
  }, []);
  return (
    <>
      <Head>
        <title>The Best Private Production & Studio Rental in Vancouver 2025 | The Reel Room</title>
        <meta
          name="description"
          content="Why The Reel Room leads Vancouver private production and studio rental in 2025—DCP premieres, corporate playbacks, reference reviews, and controlled cinema bookings."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="min-h-screen bg-black">
        <ReelRoomNavigation />

        <main className="pt-20">
          {/* Hero Section */}
          <div className="relative h-[60vh]">
            <Image
              src="/photos/homepage-originals/DSC03060-Enhanced-NR.jpg"
              alt="The Reel Room - Vancouver's best private production and studio rental"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 heading-font">
                  The Best Private Production & Studio Rental in Vancouver 2025
                </h1>
                <p className="text-xl md:text-2xl text-white heading-font">
                  Built for picture, sound, and schedule—not open-door programming
                </p>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="max-w-4xl mx-auto px-4 py-12 text-white">
            <div className="flex items-center text-gray-400 mb-8">
              <time dateTime="2025-01-15">January 15, 2025</time>
              <span className="mx-2">•</span>
              <span>7 min read</span>
            </div>

            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-xl leading-relaxed">
                In 2025, Vancouver productions need private rooms where DCP, colour, and surround actually translate—not rented halls with a projector bolted on. The Reel Room is a cinema facility you book by the day or session, with staff who speak frame rates, holdbacks, and run-of-show.
              </p>

              <h2 className="text-brand-gold heading-font mt-8">A screening studio, not a banquet room</h2>
              
              <p>
                Mount Pleasant is full of flexible spaces, but few are tuned for critical viewing. We combine plush seating, acoustic discipline, and reference playback paths so your crew trusts what they are seeing and hearing. Rentals are closed-door: your list, your schedule, your technical notes.
              </p>

              <div className="my-8 relative h-96 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03138-Enhanced-NR.jpg" 
                  alt="Theatre screening environment at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <h2 className="text-brand-gold heading-font">What crews book here</h2>
              
              <p>
                Common 2025 bookings include:
              </p>

              <h3 className="text-white font-semibold">Premieres &amp; DCP reviews</h3>
              <p>
                Finish with a distributor-ready pass or a friends-and-family screening that still respects your colour pipeline. We support digital cinema workflows and laptop play-out with advance testing.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03222-Enhanced-NR.jpg" 
                  alt="Premiere playback setup at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h3 className="text-white font-semibold">Corporate &amp; brand productions</h3>
              <p>
                Launch films, sizzle reels, shareholder streams, and internal town halls benefit from a real cinema canvas. Connectivity, switching, and record paths are planned with your IT or production lead—not guessed on the day.
              </p>

              <h3 className="text-white font-semibold">Production studio events: reference playback</h3>
              <p>
                Book the theatre for client approvals, finishing reviews, and QC passes on a true cinema canvas—with lounge redundancy when producers need a parallel feed.
              </p>

              <h3 className="text-white font-semibold">Private film &amp; legacy playback</h3>
              <p>
                Long-form personal masters, memorial films, and anniversary edits are screened as studio rentals—calibrated playback for people who care about seeing the final grade properly.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03110-Enhanced-NR.jpg" 
                  alt="Reference playback configuration at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2 className="text-brand-gold heading-font mt-8">Catering &amp; bar as production support</h2>
              
              <p>
                Food and beverage are optional layers on top of your rental block—structured around load-in, playback, and strike. We coordinate with catering partners so service never fights the technical schedule.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03167-Enhanced-NR.jpg" 
                  alt="Lounge and bar support at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2 className="text-brand-gold heading-font mt-8">Technology &amp; crew discipline</h2>
              
              <p>
                Projection, sound, lighting, and signal routing are maintained for screening work first. That foundation is what makes corporate, finishing, or long-form playback reliable—everything else is configuration on top.
              </p>

              <h2 className="text-brand-gold heading-font mt-8">Mount Pleasant access</h2>
              
              <p>
                Minutes from downtown with nearby parking and hotels for out-of-town crew. Load-in routes and timing are confirmed when you book so departments know when the room is truly theirs.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg" 
                  alt="The Reel Room Mount Pleasant location" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2 className="text-brand-gold heading-font mt-8">Hold your 2025 dates early</h2>
              
              <p>
                Prime screening weekends and festival-adjacent slots move quickly. Send your technical brief, headcount, and schedule—we will return a rental quote with staffing and add-ons spelled out.
              </p>

              <blockquote className="border-l-4 border-brand-gold pl-4 italic text-xl my-8">
                &quot;Book it like a stage: lights down, transport locked, crew quiet—everything else is just hospitality on the right cue.&quot;
              </blockquote>

              <div className="mt-12 bg-black p-8 rounded-lg border border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-gold mb-4 heading-font">Ready to book your studio rental?</h3>
                <p className="mb-6 text-lg">Tour the facility and line up technical prep for your next premiere, corporate playback, or reference review.</p>
                <Link 
                  href="/book-now" 
                  className="inline-block bg-black text-brand-gold px-8 py-4 rounded-md font-medium hover:bg-brand-gold/10 transition-colors border border-brand-gold text-lg"
                >
                  Book your rental
                </Link>
              </div>
            </div>
          </div>
        </main>

        <ReelRoomFooter />
      </div>
    </>
  );
} 