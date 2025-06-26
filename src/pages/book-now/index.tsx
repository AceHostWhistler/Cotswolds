import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
            <Image
              src="/photos/homepage-originals/DSC03264-Enhanced-NR.jpg"
              alt="Reel Room Booking"
              fill
              priority
              quality={95}
              sizes="100vw"
              style={{ objectFit: "cover" }}
              className="absolute inset-0"
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

          {/* Booking Content */}
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Booking Information</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                        <h3 className="text-lg font-bold mb-3 text-gray-800">Have Questions Before Booking?</h3>
                        <p className="text-gray-700 mb-4">
                          Email us at <a href="mailto:info@reelroom.ca" className="text-brand-gold font-semibold hover:underline">info@reelroom.ca</a> with the following information:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                          <li>Your full name</li>
                          <li>Email address</li>
                          <li>Phone number</li>
                          <li>Preferred start time</li>
                          <li>Number of guests</li>
                        </ul>
                        <p className="text-gray-700">
                          We can accommodate groups as small as 5 and groups as large as 120+, for the same price.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-bold mb-3 text-gray-800">Booking Process</h3>
                        <p className="text-gray-700 mb-4">
                          Use our online booking system to check availability and schedule your event instantly. The Calendly widget allows you to select your preferred date and time slot.
                        </p>
                        <p className="text-gray-700">
                          After booking, our team will reach out to discuss your event details and any additional services you might need.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white rounded-xl shadow-lg p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Event Options</h2>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-48 md:h-auto rounded-lg overflow-hidden">
                        <img
                          src="/photos/homepage-originals/DSC03066-Enhanced-NR.jpg"
                          alt="Film Screenings"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-2">Film Screenings & Premieres</h3>
                        <p className="text-gray-600 mb-4">
                          Perfect for DCP film releases, premieres, and private screenings. Showcase your work on our high-quality projection system with premium sound.
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-bold text-gray-800">4-hour rental</p>
                          <Link
                            href="/experiences"
                            className="inline-block px-4 py-2 bg-brand-gold text-black rounded-md hover:bg-amber-600 hover:text-white transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-48 md:h-auto rounded-lg overflow-hidden">
                        <img
                          src="/photos/homepage-originals/DSC03110-Enhanced-NR.jpg"
                          alt="Private Parties"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-2">Private Parties & Sports Events</h3>
                        <p className="text-gray-600 mb-4">
                          Host an unforgettable party or sports viewing event with customizable food and drink options in our luxurious private theatre venue.
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-bold text-gray-800">Customizable options</p>
                          <Link
                            href="/experiences"
                            className="inline-block px-4 py-2 bg-brand-gold text-black rounded-md hover:bg-amber-600 hover:text-white transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-48 md:h-auto rounded-lg overflow-hidden">
                        <img
                          src="/photos/homepage-originals/DSC03672-Enhanced-NR.jpg"
                          alt="Corporate Events"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
                        <p className="text-gray-600 mb-4">
                          Impress clients and colleagues with presentations, team building events, and product launches in our sophisticated venue with state-of-the-art AV capabilities.
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-bold text-gray-800">Professional setting</p>
                          <Link
                            href="/experiences"
                            className="inline-block px-4 py-2 bg-brand-gold text-black rounded-md hover:bg-amber-600 hover:text-white transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div>
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose The Reel Room?</h2>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-brand-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Premium private theatre experience</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-brand-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Customizable food and drink options</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-brand-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>State-of-the-art audio-visual system</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-brand-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Accommodates groups from 5 to 120+</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-brand-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Prime location in Vancouver</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-2">Need Help?</h3>
                    <p className="text-gray-700 mb-4">Our team is ready to assist with your booking and answer any questions.</p>
                    <a
                      href="mailto:info@reelroom.ca"
                      className="inline-block w-full text-center px-4 py-2 bg-brand-gold text-black rounded-md hover:bg-amber-600 hover:text-white transition-colors"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Calendly Widget with Enhanced Visibility */}
          <div className="py-12 bg-gray-50 lg:hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-amber-500">
                <div className="bg-amber-500 text-black p-4 text-center">
                  <h2 className="text-3xl font-bold mb-1 uppercase tracking-wider">BOOK NOW</h2>
                  <p className="text-black">Check availability & schedule instantly</p>
                </div>
                <div className="animate-pulse absolute right-4 top-20 h-16 w-16 flex items-center justify-center rounded-full bg-amber-500 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-full h-[600px] overflow-hidden pt-4">
                  <CalendlyWidget height={600} className="border-t border-gray-200" />
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