import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import ReelRoomNavigation from "@/components/ReelRoomNavigation";
import ReelRoomFooter from "@/components/ReelRoomFooter";
import { scrollToTop } from "@/utils/scrollUtils";

export default function BookNow() {
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
    
    // Ensure page starts from the top
    try {
      scrollToTop();
    } catch (error) {
      console.error("Error scrolling to top:", error);
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Book Now | Reel Room</title>
        <meta
          name="description"
          content="Book Reel Room for your next event. Our private theatre venue in Vancouver is perfect for film screenings, corporate events, and private parties."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <style>{`
          @supports (-webkit-touch-callout: none) {
            /* iOS Safari specific CSS */
            .ios-booking-button {
              position: static !important;
              width: 100% !important;
              margin-bottom: 1rem !important;
            }
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-white">
        <ReelRoomNavigation />

        {/* Booking Contact Box - Fixed Position for Desktop Only */}
        <div className="fixed top-24 right-4 z-20 w-96 shadow-2xl rounded-lg overflow-hidden hidden lg:block">
          <div className="bg-amber-500 text-black p-3 text-center">
            <h3 className="font-bold text-xl uppercase tracking-wider">BOOK NOW</h3>
            <p className="text-sm">Contact us to schedule your event</p>
          </div>
          <div className="bg-white p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to book your event?</h3>
            <p className="mb-4">Contact us directly via email:</p>
            <a 
              href="mailto:info@reelroom.ca" 
              className="inline-block px-6 py-3 bg-amber-500 text-black rounded-md font-medium hover:bg-amber-600 transition-colors"
            >
              Email info@reelroom.ca
            </a>
            <p className="mt-4 text-gray-600 text-sm">
              Please include your event details, preferred date, and number of guests.
            </p>
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
                  Create unforgettable memories at Reel Room, Vancouver's premier private theatre venue.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Information Content */}
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How to Book Reel Room</h2>
                
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
                      6. Enjoy your event at Reel Room!
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
                    Host an unforgettable party or sports viewing event with customizable food and drink options in our luxurious private theatre venue. Whether it's a birthday celebration, anniversary, or watching the big game, Reel Room provides an exclusive experience.
                  </p>
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
                </div>
              </div>
            </div>
            
            {/* Contact Information from Reservations page */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Have questions about booking or need more information? Reach out to us directly.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a href="mailto:info@reelroom.ca" className="text-amber-600 hover:text-amber-700">info@reelroom.ca</a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">Mount Pleasant, Vancouver, BC</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Hours</h3>
                  <p className="text-gray-600">Available for bookings 7 days a week</p>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white rounded-xl shadow-lg overflow-hidden p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Book Your Event?</h3>
              <p className="text-lg mb-6">
                Contact us today to check availability and start planning your unforgettable experience at Reel Room.
              </p>
              <a
                href="mailto:info@reelroom.ca"
                className="inline-block px-8 py-4 bg-brand-gold text-black rounded-md hover:bg-amber-600 hover:text-white transition-colors text-lg font-medium"
              >
                Email info@reelroom.ca
              </a>
            </div>
          </div>
          
          {/* Booking Contact Section */}
          <div className="py-16 bg-gray-100 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Book Your Event</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Contact us directly to check availability and schedule your perfect event at Reel Room.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Contact Us To Book</h3>
                  <p className="text-lg text-gray-600">
                    Our team is ready to help you plan an unforgettable event.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-bold mb-3">Email Us</h4>
                    <p className="text-gray-600 mb-4">
                      Send us your event details and we'll get back to you promptly.
                    </p>
                    <a 
                      href="mailto:info@reelroom.ca" 
                      className="inline-block px-6 py-3 bg-amber-500 text-black rounded-md font-medium hover:bg-amber-600 transition-colors w-full text-center"
                    >
                      Email info@reelroom.ca
                    </a>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-bold mb-3">Our Location</h4>
                    <p className="text-gray-600 mb-4">
                      We're conveniently located in Mount Pleasant, Vancouver.
                    </p>
                    <div className="px-6 py-3 bg-black text-white rounded-md font-medium w-full text-center">
                      Mount Pleasant, Vancouver
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200 text-center">
                  <h4 className="text-xl font-bold mb-3">Please Include In Your Inquiry:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4">
                      <p className="font-medium">Event Details</p>
                      <p className="text-sm text-gray-600">Date, time, type of event</p>
                    </div>
                    <div className="p-4">
                      <p className="font-medium">Guest Count</p>
                      <p className="text-sm text-gray-600">Number of guests expected</p>
                    </div>
                    <div className="p-4">
                      <p className="font-medium">Special Requests</p>
                      <p className="text-sm text-gray-600">Any specific requirements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Booking Button - Only show on iOS/mobile */}
          {isIOS && (
            <div className="fixed bottom-0 left-0 right-0 bg-amber-500 text-center p-4 z-50 ios-booking-button">
              <a 
                href="mailto:info@reelroom.ca" 
                className="block w-full bg-black text-white py-3 rounded-md font-bold text-lg"
              >
                Email to Book Now
              </a>
            </div>
          )}
        </main>

        <ReelRoomFooter />
      </div>
    </>
  );
} 