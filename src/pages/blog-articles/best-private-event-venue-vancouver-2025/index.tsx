import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReelRoomNavigation from "@/components/ReelRoomNavigation";
import ReelRoomFooter from "@/components/ReelRoomFooter";

export default function BestPrivateEventVenue2025() {
  return (
    <>
      <Head>
        <title>The Best Private Event Venue Space in Vancouver 2025 | The Reel Room</title>
        <meta
          name="description"
          content="Discover why The Reel Room is Vancouver's premier private event venue for 2025. Perfect for film screenings, parties, weddings, corporate events, and more!"
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
              alt="The Reel Room - Vancouver's Best Private Event Venue"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 heading-font">
                  The Best Private Event Venue Space in Vancouver 2025
                </h1>
                <p className="text-xl md:text-2xl text-white heading-font">
                  Where Unforgettable Moments Come to Life
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
                As we step into 2025, Vancouver's entertainment and event scene continues to evolve, offering increasingly sophisticated and unique experiences. Standing at the forefront of this evolution is The Reel Room—a venue that has redefined what it means to host a truly memorable event in the heart of Mount Pleasant.
              </p>

              <h2 className="text-brand-gold heading-font mt-8">A Venue Unlike Any Other</h2>
              
              <p>
                What sets The Reel Room apart from the myriad of event spaces scattered throughout Vancouver? It's the seamless blend of cinematic luxury, versatile functionality, and personalized service that creates an atmosphere where imagination knows no bounds. Whether you're planning an intimate gathering or a grand celebration, The Reel Room transforms your vision into reality with unparalleled attention to detail.
              </p>

              <div className="my-8 relative h-96 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03138-Enhanced-NR.jpg" 
                  alt="Luxury Theatre Experience at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <h2 className="text-brand-gold heading-font">The Perfect Setting for Every Celebration</h2>
              
              <p>
                The versatility of The Reel Room makes it the ideal canvas for a wide spectrum of events. Let's explore the possibilities:
              </p>

              <h3 className="text-white font-semibold">Film Premieres & Screenings</h3>
              <p>
                For filmmakers and cinema enthusiasts, The Reel Room offers a professional-grade screening environment with state-of-the-art digital cinema package (DCP) systems. Imagine debuting your latest creation to an audience of industry professionals, friends, and family in a setting that rivals commercial theaters but offers an intimacy that can't be found elsewhere. The acoustics, lighting, and seating are meticulously designed to create the perfect viewing experience.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03222-Enhanced-NR.jpg" 
                  alt="Film Premiere Setup at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h3 className="text-white font-semibold">Corporate Events with Impact</h3>
              <p>
                Business gatherings take on a new dimension at The Reel Room. Product launches, team-building activities, client presentations, and company celebrations all benefit from the venue's sophisticated ambiance and technical capabilities. The combination of a professional atmosphere with luxury amenities creates an environment where business and pleasure coexist harmoniously.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03264-Enhanced-NR.jpg" 
                  alt="Corporate Event Setup at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h3 className="text-white font-semibold">Milestone Celebrations</h3>
              <p>
                From milestone birthdays to anniversaries, bar/bat mitzvahs to retirement parties, The Reel Room provides a backdrop that elevates any celebration. The venue's flexibility allows for personalized decorations, custom lighting schemes, and tailored entertainment options that reflect the unique personality of the guest of honor.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03166-Enhanced-NR.jpg" 
                  alt="Birthday Celebration at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h3 className="text-white font-semibold">Intimate Weddings & Receptions</h3>
              <p>
                For couples seeking a non-traditional wedding venue that offers both elegance and character, The Reel Room presents a compelling alternative to conventional banquet halls. The cinematic atmosphere creates a romantic backdrop for exchanging vows, while the versatile space transitions seamlessly from ceremony to reception. Our team works closely with wedding planners to ensure every detail, from lighting to sound, contributes to the couple's perfect day.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03159-Enhanced-NR.jpg" 
                  alt="Wedding Setup at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h3 className="text-white font-semibold">Sports Viewing Parties</h3>
              <p>
                Experience the thrill of game day like never before! The Reel Room transforms sports viewing from a casual activity into an extraordinary event. Watch the Canucks, Whitecaps, or international tournaments on our massive screen with crystal-clear picture quality and immersive sound that makes you feel like you're right in the action. Add premium catering and a full bar service, and you've got the ultimate sports viewing party that your friends will talk about for years.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03110-Enhanced-NR.jpg" 
                  alt="Sports Viewing Party at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2 className="text-brand-gold heading-font mt-8">Culinary Excellence & Premium Beverages</h2>
              
              <p>
                No exceptional event is complete without outstanding food and drink. The Reel Room partners with Vancouver's finest caterers to offer culinary experiences that complement the sophistication of the venue. From elegant canapés to multi-course meals, the food service is tailored to match the theme and requirements of your event.
              </p>

              <p>
                The bar service at The Reel Room is equally impressive, featuring craft cocktails, premium spirits, local wines, and a selection of beers that satisfy even the most discerning palates. Our experienced bartenders can create custom drink menus that align with your event's theme or highlight a signature cocktail for your special occasion.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03167-Enhanced-NR.jpg" 
                  alt="Premium Bar Service at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2 className="text-brand-gold heading-font mt-8">State-of-the-Art Technology</h2>
              
              <p>
                The technical capabilities of The Reel Room set it apart from other venues in Vancouver. The advanced projection system, professional-grade sound equipment, and customizable lighting create an immersive environment that can be adapted to suit any event's mood and purpose. Whether you're showcasing a film, delivering a presentation, or creating an atmospheric backdrop for a party, the technology at The Reel Room elevates your event to extraordinary heights.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03064-Enhanced-NR.jpg" 
                  alt="Advanced Technology at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2 className="text-brand-gold heading-font mt-8">Personalized Service & Attention to Detail</h2>
              
              <p>
                What truly distinguishes The Reel Room is the dedication of its team to providing personalized service that anticipates and exceeds expectations. From the initial consultation to the final moments of your event, our staff works tirelessly to ensure every detail is perfect. We understand that each event is unique, and we pride ourselves on our ability to adapt and customize our services to match your vision.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03192-Enhanced-NR-Edit.jpg" 
                  alt="Personalized Service at The Reel Room" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2 className="text-brand-gold heading-font mt-8">Location, Location, Location</h2>
              
              <p>
                Situated in the vibrant Mount Pleasant neighborhood, The Reel Room enjoys a location that combines convenience with character. Just minutes from downtown Vancouver, the venue is easily accessible yet feels like a hidden gem. The surrounding area offers a wealth of amenities, including accommodation options for out-of-town guests, restaurants for pre or post-event dining, and parking facilities for attendees.
              </p>

              <div className="my-8 relative h-80 rounded-lg overflow-hidden border border-brand-gold">
                <Image 
                  src="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg" 
                  alt="The Reel Room Location" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2 className="text-brand-gold heading-font mt-8">Book Your 2025 Event Now</h2>
              
              <p>
                As Vancouver's premier private event venue, The Reel Room's calendar fills quickly. To secure your preferred date for 2025, we recommend booking well in advance. Our team is ready to discuss your vision, answer your questions, and guide you through the planning process to create an event that exceeds your expectations.
              </p>

              <blockquote className="border-l-4 border-brand-gold pl-4 italic text-xl my-8">
                "The Reel Room isn't just a venue—it's a canvas where memories are painted, stories are told, and moments become unforgettable."
              </blockquote>

              <div className="mt-12 bg-black p-8 rounded-lg border border-brand-gold">
                <h3 className="text-2xl font-bold text-brand-gold mb-4 heading-font">Ready to Create Your Extraordinary Event?</h3>
                <p className="mb-6 text-lg">Contact us today to schedule a tour of The Reel Room and begin planning your 2025 event in Vancouver's most distinctive venue.</p>
                <Link 
                  href="/book-now" 
                  className="inline-block bg-black text-brand-gold px-8 py-4 rounded-md font-medium hover:bg-brand-gold/10 transition-colors border border-brand-gold text-lg"
                >
                  Book Your Event
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