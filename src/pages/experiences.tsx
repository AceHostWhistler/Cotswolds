import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '../components/ReelRoomNavigation';
import ReelRoomFooter from '../components/ReelRoomFooter';
import SimpleImage from '../components/SimpleImage';
import LazyVimeoPlayer from '../components/LazyVimeoPlayer';
import { scrollToTop } from '@/utils/scrollUtils';
import CalendlyPopupLink from '@/components/CalendlyPopupLink';

export default function Experiences() {
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
    
    // Ensure page starts from the top
    scrollToTop();
  }, []);
  
  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <Head>
        <title>Studio Use &amp; Pricing | The Reel Room</title>
        <meta name="description" content="Production and studio rental rates at The Reel Room—film premieres, DCP screenings, shoots, and corporate productions in Vancouver." />
        {/* Add iOS-specific meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      
      <ReelRoomNavigation />
      
      {/* Booking Contact Box - Fixed Position for Desktop - REMOVED */}
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
          <picture>
            <source
              media="(max-width: 799px)"
              srcSet="/photos/optimized/DSC03081-Enhanced-NR-800.jpg"
            />
            <source
              media="(min-width: 800px) and (max-width: 1279px)"
              srcSet="/photos/optimized/DSC03081-Enhanced-NR-1280.jpg"
            />
            <source
              media="(min-width: 1280px)"
              srcSet="/photos/optimized/DSC03081-Enhanced-NR-1920.jpg"
            />
            <img
              src="/photos/originals/homepage/DSC03081-Enhanced-NR.jpg"
              alt="The Reel Room studio use and pricing"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Studio Use &amp; Pricing</h1>
                <p className="text-xl mb-8">
                  Customize your studio rental at The Reel Room for screenings, shoots, and productions.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main rental rates */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Production & Studio Rental Rates</h2>
            
            <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Base Rental Rate</h3>
                <p className="text-4xl font-light text-brand-gold">$2,300</p>
                <p className="text-gray-600 mt-2">for a 4-hour rental time slot</p>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-gray-700">+ On-site coordinator ($255) + Cleaning Fee ($300)</p>
                  <p className="text-gray-700 mt-2">Subtotal: $2,855</p>
                  <p className="text-gray-700">+ 5% Tax: $142.75</p>
                  <p className="text-gray-700 mt-2 font-semibold">Final Price: $2,997.75</p>
                </div>
              </div>
              
              <div className="max-w-xl mx-auto mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-bold mb-3">Additional hours</h4>
                  <p className="text-gray-600 mb-2">Need more time in the facility?</p>
                  <p className="text-xl font-semibold text-brand-gold">$400/hour</p>
                </div>
              </div>
              
              <div className="text-center">
                {!isIOS ? (
                  <CalendlyPopupLink 
                    text="Request a Booking"
                    className="inline-block bg-black text-white px-8 py-4 rounded-md text-lg transition-colors hover:bg-gray-800"
                  />
                ) : (
                  <Link
                    href="/book-now"
                    className="inline-block bg-black text-white px-8 py-4 rounded-md text-lg transition-colors hover:bg-gray-800"
                  >
                    Request a Booking
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Rental types */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Rental types</h2>
            
            {/* DCP & premiere screenings */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">DCP &amp; premiere screenings</h3>
                  <p className="text-gray-600 mb-6">
                    Lock your colour grade and audio mix with a reference screening for cast, crew, financiers, or distributors. The Reel Room is set up as a private cinema stage—not a banquet hall—so playback stays the priority.
                  </p>
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                    <p className="text-gray-800 italic">DCP available upon request.</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Private screen room tuned for critical viewing</li>
                    <li>Optional lounge hospitality tied to your technical schedule</li>
                    <li>Capacity up to roughly 85–95+ across the screen room and lounges</li>
                    <li>High-quality projection and sound</li>
                    <li>Lounge for notes, interviews, or secondary playback</li>
                  </ul>
                  {!isIOS ? (
                    <CalendlyPopupLink 
                      text="Book a screening rental"
                      className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                    />
                  ) : (
                    <Link
                      href="/book-now"
                      className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                    >
                      Book a screening rental
                    </Link>
                  )}
                </div>
                <div className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden">
                  <SimpleImage
                    src="/photos/homepage-originals/DSC03066-Enhanced-NR.jpg"
                    alt="DCP and premiere screening rental"
                    className="w-full h-full"
                    loading="eager"
                    fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                    objectFit="cover"
                    style={{ opacity: 1 }}
                  />
                </div>
              </div>
            </div>
            
            {/* Production studio events: reference playback */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <SimpleImage
                    src="/photos/homepage-originals/DSC03110-Enhanced-NR.jpg"
                    alt="Reference playback and studio rental"
                    className="w-full h-full"
                    loading="eager"
                    fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                    objectFit="cover"
                    style={{ opacity: 1 }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Production studio events: reference playback</h3>
                  <p className="text-gray-600 mb-6">
                    Rent the room for colour-critical reviews, client approvals, and finishing playbacks where picture and sound have to read true. Service style follows your technical brief—not a preset social package.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Cinema-scale playback for file-based and live-signal reviews</li>
                    <li>Secondary lounge feed for producers or clients</li>
                    <li>Optional graphics or stingers (client-supplied)</li>
                    <li>Production support and hospitality scoped to the rental</li>
                    <li>Full facility buyout available</li>
                  </ul>
                  {!isIOS ? (
                    <CalendlyPopupLink 
                      text="Book a screening rental"
                      className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                    />
                  ) : (
                    <Link
                      href="/book-now"
                      className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                    >
                      Book a screening rental
                    </Link>
                  )}
                </div>
              </div>
            </div>
            
            {/* Corporate & brand productions */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Corporate &amp; brand productions</h3>
                  <p className="text-gray-600 mb-6">
                    The Reel Room functions as a presentation screen room and content stage: investor streams, launch films, sizzle reels, internal town halls with playback, and press screenings with controlled access.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Executive presentations with cinema-scale picture</li>
                    <li>Team screenings and training modules</li>
                    <li>Product launches and demo reels</li>
                    <li>Media and stakeholder reviews</li>
                    <li>Brand activations with staged playback</li>
                    <li>Controlled guest lists and run-of-show support</li>
                  </ul>
                  {!isIOS ? (
                    <CalendlyPopupLink 
                      text="Book a corporate rental"
                      className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                    />
                  ) : (
                    <Link
                      href="/book-now"
                      className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                    >
                      Book a corporate rental
                    </Link>
                  )}
                </div>
                <div className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden">
                  <SimpleImage
                    src="/photos/homepage-originals/DSC03167-Enhanced-NR.jpg"
                    alt="Corporate studio rental"
                    className="w-full h-full"
                    loading="eager"
                    fallbackSrc="/photos/homepage-originals/DSC03086-Enhanced-NR.jpg"
                    objectFit="cover"
                    style={{ opacity: 1 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Options */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Additional options</h2>
            
            <div className="max-w-md mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="h-48 mb-6 rounded overflow-hidden">
                  <SimpleImage
                    src="/photos/homepage-originals/DSC03106-Enhanced-NR.jpg"
                    alt="DCP audio-visual options"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">DCP audio-visual enhancements</h3>
                <p className="text-gray-600 mb-4">
                  Take advantage of our reference audio-visual system, with options for specialized lighting, sound, and projection add-ons for your technical brief.
                </p>
                <p className="font-semibold text-gray-800">$100 per hour</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Photo Gallery Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Studio gallery</h2>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-12">
              {/* Each image is in a fixed-ratio container */}
              <div className="col-span-2 row-span-2 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <SimpleImage 
                    src="/photos/homepage-originals/DSC03198-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <SimpleImage 
                    src="/photos/homepage-originals/DSC03217-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <SimpleImage 
                    src="/photos/homepage-originals/DSC03227-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-2 row-span-2 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <SimpleImage 
                    src="/photos/homepage-originals/DSC03287-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <SimpleImage 
                    src="/photos/homepage-originals/DSC03313-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <SimpleImage 
                    src="/photos/homepage-originals/DSC03389-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Scope your custom rental</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Contact us today to align the facility, AV, and add-ons with your production or screening brief.
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              {!isIOS ? (
                <CalendlyPopupLink 
                  text="Request a Booking"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-md transition-colors hover:bg-red-700"
                />
              ) : (
                <Link
                  href="/book-now"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-md transition-colors hover:bg-red-700"
                >
                  Request a Booking
                </Link>
              )}
              <Link
                href="/book-now"
                className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-md transition-colors hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Reserve Your Dates - Bottom CTA */}
        <div className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to lock your rental dates?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us for availability and a quote scoped to your screening, shoot, or corporate production.
            </p>
            {!isIOS ? (
              <CalendlyPopupLink 
                text="Request a Booking"
                className="inline-block px-8 py-4 bg-brand-gold text-black rounded-md text-lg font-medium hover:bg-amber-400 transition-colors"
              />
            ) : (
              <Link 
                href="/book-now" 
                className="inline-block px-8 py-4 bg-brand-gold text-black rounded-md text-lg font-medium hover:bg-amber-400 transition-colors"
              >
                Request a Booking
              </Link>
            )}
          </div>
        </div>
        
      </main>
      
      <ReelRoomFooter />
    </div>
  );
} 