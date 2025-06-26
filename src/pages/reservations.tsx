import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '../components/ReelRoomNavigation';
import ReelRoomFooter from '../components/ReelRoomFooter';
import OptimizedImage from '../components/OptimizedImage';
import CalendlyWidget from '../components/CalendlyWidget';

export default function Reservations() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);
  
  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <Head>
        <title>Book Now | The Reel Room</title>
        <meta name="description" content="Book your event at The Reel Room. Check availability and schedule instantly for film screenings, private parties, or corporate events." />
      </Head>
      
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
        <div className="relative h-[400px] overflow-hidden">
          <OptimizedImage
            src="/photos/homepage-originals/DSC03264-Enhanced-NR.jpg"
            alt="The Reel Room Reservations"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Now</h1>
                <p className="text-xl mb-8">
                  Create unforgettable memories at The Reel Room, Vancouver's premier private theatre venue.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reservation Information Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Booking Information Column */}
              <div>
                <h2 className="text-3xl font-semibold heading-font mb-6">How to Book The Reel Room</h2>
                
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Us to Book</h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    Email us at <a href="mailto:info@reelroom.ca" className="text-brand-gold font-semibold hover:underline">info@reelroom.ca</a> with the following information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                    <li>Your full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Preferred date and start time (4+ hour slots)</li>
                    <li>Number of guests</li>
                    <li>Type of event you're planning</li>
                    <li>Any special requirements or questions</li>
                  </ul>
                  <p className="text-gray-700 font-medium">
                    We can accommodate groups as small as 5 and groups as large as 120+.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-bold mb-4 text-gray-800">Booking Process</h3>
                    <p className="text-gray-700">
                      1. Email us with your event details<br/>
                      2. Our team will confirm availability<br/>
                      3. We'll discuss your specific needs<br/>
                      4. Receive a detailed quote<br/>
                      5. Confirm your booking with a deposit<br/>
                      6. Enjoy your event at The Reel Room!
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-bold mb-4 text-gray-800">Showing Times</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>Lunch:</strong> 8am - 3pm<br/>
                      <strong>Dinner:</strong> 3pm - 11pm
                    </p>
                    <p className="text-sm text-gray-500">
                      Showing time slots are a minimum of 4 hours long.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold heading-font mb-6">Hours & Contact</h3>
                  
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <React.Fragment key={day}>
                        <div className="font-medium">{day}</div>
                        <div>8 am - 1 am</div>
                      </React.Fragment>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mt-8">
                    <p>
                      <span className="font-semibold">Email:</span>{' '}
                      <a href="mailto:info@reelroom.ca" className="text-black hover:underline">
                        info@reelroom.ca
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{' '}
                      <span>Mount Pleasant, Vancouver, BC</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Info Column */}
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-semibold heading-font mb-6">Food & Drink Experiences | Pricing</h2>
                  <p className="text-lg mb-6">
                    At the Reel Room, we are flexible with pricing and we work our events in order to cater to our guest budgets and plans.
                  </p>
                  
                  <p className="text-lg mb-6">
                    <strong>Pricing:</strong> All in for staff, food, and alcohol, depends on a lot of factors and requests, but you can expect to pay between $1500 on the lower end, to $6000+, depending on your budget, # of guests, food/alcohol choices & quantity, any extra staffing required, etc...
                  </p>
                  
                  <p className="text-lg mb-6">
                    <strong>Menu:</strong> Our experienced team will create a custom food + drink menu for your event based on your suggestions and requests.
                  </p>
                  
                  <p className="text-lg mb-6">
                    If you have any questions feel free to connect with our staff <a href="mailto:info@reelroom.ca" className="text-black underline">info@reelroom.ca</a>
                  </p>
                  
                  <div className="text-sm text-gray-500 space-y-2 mt-8">
                    <p>*Allergies and dietary requests available.</p>
                    <p>*Request for higher venue pricing for holiday dates: December 24th, 25th, 31st. + Peak Sports dates ex. Super bowl, Grand Slam Finals, Stanley Cup Finals, Oscars, etc...</p>
                    <p>*No BYOB allowed to abide by regulations.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden">
                    <OptimizedImage
                      src="/photos/originals/homepage/DSC03078-Enhanced-NR.jpg"
                      alt="Reel Room dining space"
                      width={600}
                      height={400}
                      style={{ objectFit: "cover" }}
                      className="w-full h-64 object-cover"
                    />
                    <p className="mt-2 text-sm text-gray-500 text-center">Reel Room dining space</p>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden">
                    <OptimizedImage
                      src="/photos/originals/homepage/DSC03110-Enhanced-NR.jpg"
                      alt="Reel Room theatre space"
                      width={600}
                      height={400}
                      style={{ objectFit: "cover" }}
                      className="w-full h-64 object-cover"
                    />
                    <p className="mt-2 text-sm text-gray-500 text-center">Reel Room theatre space</p>
                  </div>
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
                <h2 className="text-3xl font-bold mb-1 uppercase tracking-wider">BOOK YOUR EVENT</h2>
                <p className="text-black">Check availability & schedule instantly</p>
              </div>
              <div className="animate-pulse absolute right-4 top-20 h-16 w-16 flex items-center justify-center rounded-full bg-amber-500 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
  );
} 