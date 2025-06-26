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
        <title>Canucks Hockey Games at The Reel Room | Vancouver's Ultimate Sports Viewing Venue</title>
        <meta
          name="description"
          content="Experience Vancouver Canucks hockey games like never before at The Reel Room. Our luxurious private theatre venue offers the ultimate sports viewing experience with premium food and drinks."
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
                  Why The Reel Room is Vancouver's Premier Hockey Viewing Destination
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
                Hockey night in Vancouver just got a serious upgrade! Forget crowded sports bars with obstructed views or watching from your couch – The Reel Room offers a game-changing way to experience Canucks hockey that combines the energy of Rogers Arena with the luxury of a private VIP box.
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
              
              <h2 className="text-brand-gold heading-font">A Party-Perfect Setting</h2>
              
              <p>
                The theatre can seat 40+ comfortably, while our two additional lounge spaces combined can host up to 85-95+ people. With our new 70-inch TV in the lounge & bar area, we've noticed groups equally split between the two main rooms, especially for sports games. Guests are able to watch the game or movies in the theatre, and walk back and forth to the lounge if they want to grab a drink/take a break and socialize while not getting FOMO by leaving the theatre!
              </p>

              <p>
                Whether you're hosting a corporate event, a birthday celebration, or just gathering a group of die-hard fans, our flexible space adapts to your needs. Transform the venue into a sea of blue and green with customized decorations, or keep it elegantly neutral – the choice is yours.
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
                Forget typical sports bar fare. Our food and beverage team excels in customization to suit your event preferences. For sports events, we can even design cocktails matching team colors, enhancing the overall experience and creating memorable moments for you and your guests.
              </p>

              <p>
                Whether it's your favorite cocktails like espresso martinis or sours, specific wines, or thematic creations tailored to your event, we've got you covered. For sports events, we can even design cocktails matching team colors, enhancing the overall experience and creating memorable moments for you and your guests.
              </p>

              <h2 className="text-brand-gold heading-font">The Perfect Playoff Headquarters</h2>
              
              <p>
                As the Canucks make their playoff push, there's no better venue to experience the intensity of postseason hockey. Imagine the electric atmosphere as dozens of passionate fans cheer on every power play, penalty kill, and overtime winner in our state-of-the-art theatre. It's an immersive experience that turns regular season games into unforgettable events and playoff games into lifetime memories.
              </p>

              <p>
                Even better? You won't miss a moment standing in line for food or drinks. Our attentive staff ensures your game-day favorites and beverages arrive right when you need them, so you never miss that crucial goal or game-changing save.
              </p>

              <h2 className="text-brand-gold heading-font">Beyond The Game</h2>
              
              <p>
                The Reel Room experience extends beyond just watching the game. Arrive early for pre-game analysis and stay late to celebrate victories or debate coaching decisions. With our premium AV equipment, you could even organize fantasy hockey draft nights, hockey movie marathons, or view classic Canucks games from years past.
              </p>

              <p>
                For diehard fans, imagine hosting the ultimate hockey party – watching the live game followed by an immediate replay of all the best moments on the big screen, complete with your own commentary and analysis!
              </p>

              <blockquote className="border-l-4 border-brand-gold pl-4 italic text-xl">
                "The only thing better than watching the Canucks win is watching them win on a 25-foot screen with perfect sound, comfortable seating, and a drink in hand!"
              </blockquote>

              <div className="mt-8 bg-black p-6 rounded-lg border border-brand-gold">
                <h3 className="text-xl font-bold text-brand-gold mb-4 heading-font">Ready to Experience Canucks Hockey in Style?</h3>
                <p className="mb-4">Book The Reel Room for your next game day event and transform watching hockey into an unforgettable premium experience.</p>
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