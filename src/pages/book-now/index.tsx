import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import AceCascadeNavigation from "@/components/AceCascadeNavigation";
import AceCascadeFooter from "@/components/AceCascadeFooter";
import CalendlyWidget from "@/components/CalendlyWidget";

export default function BookNow() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(2);
  
  // Get tomorrow's date for the minimum check-in date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(e.target.value));
  };
  
  const handleGuestsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGuests(parseInt(e.target.value));
  };
  
  const handleNightsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNights(parseInt(e.target.value));
  };

  return (
    <>
      <Head>
        <title>Book Your Stay | Ace Cascade Lodge</title>
        <meta
          name="description"
          content="Book your perfect mountain getaway at Ace Cascade Lodge in Whistler Village. Choose from our luxurious room options with stunning views."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="min-h-screen bg-white">
        <AceCascadeNavigation />

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
              alt="Ace Cascade Lodge exterior"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Book Your Mountain Getaway
                </h1>
                <p className="text-xl text-white">
                  Experience luxury accommodations in the heart of Whistler Village
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Check Availability</h2>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                          <input
                            type="date"
                            min={formatDate(tomorrow)}
                            value={formatDate(selectedDate)}
                            onChange={handleDateChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Nights</label>
                          <select 
                            value={nights}
                            onChange={handleNightsChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 21, 28].map((n) => (
                              <option key={n} value={n}>{n} night{n > 1 ? 's' : ''}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                        <select 
                          value={guests}
                          onChange={handleGuestsChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {[1, 2, 3, 4, 5, 6].map((g) => (
                            <option key={g} value={g}>{g} guest{g > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full py-3 px-6 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                      >
                        Check Availability
                      </button>
                    </form>
                  </div>
                </div>
                
                <div className="mt-8 bg-white rounded-xl shadow-lg p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Accommodations</h2>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-48 md:h-auto rounded-lg overflow-hidden">
                        <Image
                          src="/photos/listings/Mountain View Top Floor/20240621 A7M3 05 A1_02579.jpg"
                          alt="Mountain View Top Floor"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-2">Mountain View - Top Floor</h3>
                        <p className="text-gray-600 mb-4">
                          Luxury accommodation with stunning panoramic mountain views from the top floor. Featuring a premium king bed, full kitchen, and private balcony.
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-bold text-white">From $349/night</p>
                          <Link
                            href="/listings/mountain-view---top-floor"
                            className="inline-block px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-48 md:h-auto rounded-lg overflow-hidden">
                        <Image
                          src="/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02345.jpg"
                          alt="Mountain View Rooms"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-2">Mountain View Rooms</h3>
                        <p className="text-gray-600 mb-4">
                          Comfortable rooms with beautiful mountain views, queen bed, kitchenette, and all the amenities you need for a relaxing stay.
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-bold text-white">From $289/night</p>
                          <Link
                            href="/listings/mountain-view-rooms"
                            className="inline-block px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 relative h-48 md:h-auto rounded-lg overflow-hidden">
                        <Image
                          src="/photos/listings/Forest View Cascade/20240621 A7M3 01 A1_01907.jpg"
                          alt="Forest View Cascade Rooms"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-2">Forest View Cascade Rooms</h3>
                        <p className="text-gray-600 mb-4">
                          Serene rooms overlooking the peaceful forest, featuring a queen bed, sofa bed, kitchenette, and cozy atmosphere.
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-lg font-bold text-white">From $249/night</p>
                          <Link
                            href="/listings/forest-view-cascade-room"
                            className="inline-block px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Book Direct?</h2>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Best rate guarantee</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No hidden fees</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Direct communication with our staff</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Exclusive perks for direct bookings</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Flexible cancellation policy</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                    <h3 className="font-bold text-white mb-2">Need Help?</h3>
                    <p className="text-gray-700 mb-4">Our concierge team is ready to assist with your booking and answer any questions.</p>
                    <Link
                      href="/contact-us"
                      className="inline-block w-full text-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Contact Us
                    </Link>
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
                  <h2 className="text-3xl font-bold mb-1 uppercase tracking-wider">BOOK YOUR STAY</h2>
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

        <AceCascadeFooter />
      </div>
    </>
  );
} 