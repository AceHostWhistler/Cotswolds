import React from "react";
import Head from "next/head";
import Link from "next/link";
import ReelRoomNavigation from "@/components/ReelRoomNavigation";
import ReelRoomFooter from "@/components/ReelRoomFooter";
import CalendlyWidget from "@/components/CalendlyWidget";

export default function BookNow() {
  return (
    <>
      <Head>
        <title>Book Now | The Reel Room</title>
        <meta
          name="description"
          content="Book The Reel Room for your next event. Our private theatre venue in Vancouver is perfect for film screenings, corporate events, and private parties."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="min-h-screen bg-white">
        <ReelRoomNavigation />

        {/* Calendly Widget - Fixed Position with Enhanced Visibility */}
        <div className="fixed top-24 right-4 z-20 w-96 shadow-2xl rounded-lg overflow-hidden hidden lg:block">
          <div className="bg-amber-500 text-black p-3 text-center">
            <h3 className="font-bold text-xl uppercase tracking-wider">BOOK NOW</h3>
            <p className="text-sm">Check availability & schedule instantly</p>
          </div>
          <div className="relative">
            <CalendlyWidget height={450} className="border border-gray-200 shadow-lg rounded-lg" />
          </div>
        </div>

        <main className="pt-20">
          {/* Hero Section */}
          <div className="relative h-[50vh]">
            <img
              src="/photos/homepage-originals/DSC03264-Enhanced-NR.jpg"
              alt="Reel Room Booking"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
              <div className="text-center max-w-4xl px-4 drop-shadow-lg">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Book Now
                </h1>
                <p className="text-xl text-white">
                  Create unforgettable memories at The Reel Room, Vancouver's premier private theatre venue.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Information Content */}
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How to Book The Reel Room</h2>
                
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Us to Book</h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    Email us at <a href="mailto:info@reelroom.ca" className="text-brand-gold font-semibold hover:underline">info@reelroom.ca</a> with the following information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 text-lg">
                    <li>Your full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Preferred date and start time</li>
                    <li>Number of guests</li>
                    <li>Type of event you're planning</li>
                    <li>Any special requirements or questions</li>
                  </ul>
                  <p className="text-gray-700 text-lg font-medium">
                    We can accommodate groups as small as 5 and groups as large as 120+.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Booking Process</h3>
                    <p className="text-gray-700 mb-4">
                      1. Email us with your event details<br/>
                      2. Our team will confirm availability<br/>
                      3. We'll discuss your specific needs and requirements<br/>
                      4. Receive a detailed quote<br/>
                      5. Confirm your booking with a deposit<br/>
                      6. Enjoy your event at The Reel Room!
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Venue Information</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>Location:</strong> Mount Pleasant, Vancouver<br/>
                      <strong>Capacity:</strong> 5-120+ guests<br/>
                      <strong>Amenities:</strong> Premium theatre, lounge & bar area, state-of-the-art AV system<br/>
                      <strong>Services:</strong> Customizable food and beverage options available
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Event Options</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <img
                    src="/photos/homepage-originals/DSC03066-Enhanced-NR.jpg"
                    alt="Film Screenings"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold mb-3">Film Screenings & Premieres</h3>
                  <p className="text-gray-600 mb-6">
                    Perfect for DCP film releases, premieres, and private screenings. Showcase your work on our high-quality projection system with premium sound. Create a memorable experience for your cast, crew, and special guests in our sophisticated venue.
                  </p>
                  <Link
                    href="/experiences"
                    className="inline-block px-6 py-3 bg-brand-gold text-black rounded-md hover:bg-amber-600 hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <img
                    src="/photos/homepage-originals/DSC03110-Enhanced-NR.jpg"
                    alt="Private Parties"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold mb-3">Private Parties & Sports Events</h3>
                  <p className="text-gray-600 mb-6">
                    Host an unforgettable party or sports viewing event with customizable food and drink options in our luxurious private theatre venue. Whether it's a birthday celebration, anniversary, or watching the big game, The Reel Room provides an exclusive experience.
                  </p>
                  <Link
                    href="/experiences"
                    className="inline-block px-6 py-3 bg-brand-gold text-black rounded-md hover:bg-amber-600 hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <img
                    src="/photos/homepage-originals/DSC03167-Enhanced-NR.jpg"
                    alt="Corporate Events"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold mb-3">Corporate Events</h3>
                  <p className="text-gray-600 mb-6">
                    Impress clients and colleagues with presentations, team building events, and product launches in our sophisticated venue with state-of-the-art AV capabilities. Our professional setting provides the perfect backdrop for your business needs.
                  </p>
                  <Link
                    href="/experiences"
                    className="inline-block px-6 py-3 bg-brand-gold text-black rounded-md hover:bg-amber-600 hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white rounded-xl shadow-lg overflow-hidden p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Book Your Event?</h3>
              <p className="text-lg mb-6">
                Contact us today to check availability and start planning your unforgettable experience at The Reel Room.
              </p>
              <a
                href="mailto:info@reelroom.ca"
                className="inline-block px-8 py-4 bg-brand-gold text-black rounded-md hover:bg-amber-600 hover:text-white transition-colors text-lg font-medium"
              >
                Email info@reelroom.ca
              </a>
            </div>
          </div>
          
          {/* Mobile Calendly Widget with Enhanced Visibility */}
          <div className="py-8 bg-gray-50 lg:hidden">
            <div className="max-w-full mx-auto px-2">
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl border-2 border-amber-500">
                <div className="bg-amber-500 text-black p-4 text-center sticky top-0 z-10">
                  <h2 className="text-2xl font-bold mb-1 uppercase tracking-wider">BOOK NOW</h2>
                  <p className="text-black">Check availability & schedule instantly</p>
                </div>
                <div className="animate-pulse absolute right-4 top-20 h-16 w-16 flex items-center justify-center rounded-full bg-amber-500 shadow-lg z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-full h-[700px] overflow-hidden">
                  <CalendlyWidget height={700} className="border-t border-gray-200" />
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