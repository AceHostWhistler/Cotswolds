import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ReelRoomNavigation from '@/components/ReelRoomNavigation';
import ReelRoomFooter from '@/components/ReelRoomFooter';
import CalendlyWidget from '@/components/CalendlyWidget';

export default function Reservations() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
    
    // Detect iOS devices
    const detectIOS = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOSDevice = 
        /iphone|ipod|ipad/i.test(userAgent) || 
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
        /iPhone|iPad|iPod/.test(navigator.userAgent);
      setIsIOS(isIOSDevice);
    };
    
    detectIOS();
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Reservations | The Reel Room</title>
        <meta name="description" content="Book your private theatre event at The Reel Room. Check availability and schedule a consultation to start planning your perfect event." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      
      <ReelRoomNavigation />
      
      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <div className="relative h-[300px] sm:h-[400px] overflow-hidden bg-gray-800">
          <img
            src="/photos/homepage-originals/DSC03222-Enhanced-NR.jpg"
            alt="The Reel Room Reservations"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Reservations</h1>
                <p className="text-xl">
                  Book your private theatre event at The Reel Room
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Calendly Section */}
        <div className="py-16 bg-gray-100 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Book Your Event</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Check availability and schedule a consultation to start planning your perfect event at The Reel Room.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
              <div className="bg-amber-500 text-black p-4 text-center">
                <h3 className="font-bold text-xl uppercase tracking-wider">CALENDAR</h3>
                <p className="text-sm">Check availability & schedule a consultation</p>
              </div>
              <div className="w-full h-[700px]">
                <CalendlyWidget 
                  height={700} 
                  className="w-full" 
                  lazyLoad={true}
                  position={isIOS ? "bottom" : "normal"}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about booking or need more information? Reach out to us directly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:info@reelroom.ca" className="text-amber-600 hover:text-amber-700">info@reelroom.ca</a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Mount Pleasant, Vancouver, BC</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">Available for bookings 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <ReelRoomFooter />
    </div>
  );
} 