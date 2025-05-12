import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '../components/ReelRoomNavigation';
import ReelRoomFooter from '../components/ReelRoomFooter';
import OptimizedImage from '../components/OptimizedImage';
import LazyVimeoPlayer from '../components/LazyVimeoPlayer';

export default function Experiences() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);
  
  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <Head>
        <title>Experiences & Pricing | The Reel Room</title>
        <meta name="description" content="Discover the range of experiences and pricing options at The Reel Room. From film screenings to private events, we offer customizable options for every occasion." />
      </Head>
      
      <ReelRoomNavigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <OptimizedImage
            src="/photos/homepage-originals/DSC03264-Enhanced-NR.jpg"
            alt="The Reel Room Experience"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Experiences & Pricing</h1>
                <p className="text-xl mb-8">
                  Customize your event at The Reel Room for a unique and memorable experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Experience Categories */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Experiences</h2>
            
            {/* Film Release Experience */}
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Film Release Events</h3>
                  <p className="text-gray-600 mb-6">
                    Celebrate the culmination of months of hard work by watching your film come to life on the big screen with your cast, crew, and team. At The Reel Room, you can share this unforgettable milestone in a private theatre designed to make your cinematic dreams shine.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Private theatre experience for your film</li>
                    <li>Customizable food and drink options</li>
                    <li>Space for up to 85-95+ guests</li>
                    <li>High-quality projection and sound system</li>
                    <li>Lounge area for mingling before and after the screening</li>
                  </ul>
                  <p className="font-semibold mb-6">
                    Starting from $2,500 for a 4-hour event
                  </p>
                  <Link
                    href="/reservations"
                    className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                  >
                    Book Now
                  </Link>
                </div>
                <div className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden">
                  <LazyVimeoPlayer videoId="1027464900" />
                </div>
              </div>
            </div>
            
            {/* Halloween/Sports Game Experience */}
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <LazyVimeoPlayer videoId="1082926490" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Parties & Sports Events</h3>
                  <p className="text-gray-600 mb-6">
                    At the Reel Room you can imagine pairing your favourite film or sports games with the finest food and drinks customizable to your preference. Our mission is to elevate your private event theatre experience into an extravagant and luxurious time, while offering your friends or guests a unique and memorable 5-star experience.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Halloween movie nights</li>
                    <li>Sports viewing parties</li>
                    <li>Birthday celebrations</li>
                    <li>Customizable food and drink packages</li>
                    <li>Full venue rental options</li>
                  </ul>
                  <p className="font-semibold mb-6">
                    Starting from $1,800 for a 4-hour event
                  </p>
                  <Link
                    href="/reservations"
                    className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Corporate Events */}
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Corporate Events</h3>
                  <p className="text-gray-600 mb-6">
                    The Reel Room offers a unique and impressive venue for corporate events. From product launches to team building movie nights, our space provides a sophisticated setting with state-of-the-art audio-visual capabilities.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Corporate presentations</li>
                    <li>Team building events</li>
                    <li>Product launches</li>
                    <li>PR and media events</li>
                    <li>Brand activations</li>
                    <li>Networking opportunities</li>
                  </ul>
                  <p className="font-semibold mb-6">
                    Starting from $2,200 for a 4-hour event
                  </p>
                  <Link
                    href="/reservations"
                    className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                  >
                    Book Now
                  </Link>
                </div>
                <div className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden">
                  <OptimizedImage
                    src="/photos/homepage-originals/DSC03672-Enhanced-NR.jpg"
                    alt="Corporate Events"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Photo Gallery Section - Updated to clean collage layout */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Event Space Gallery</h2>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-12">
              {/* Each image is in a fixed-ratio container */}
              <div className="col-span-2 row-span-2 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03509-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03531-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03507-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-2 row-span-2 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03529-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03705-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03663-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Options */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Additional Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Food Options */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="h-48 mb-6 rounded overflow-hidden">
                  <img
                    src="/photos/homepage-originals/DSC03505-Enhanced-NR.jpg"
                    alt="Food Options"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Catering Services</h3>
                <p className="text-gray-600 mb-4">
                  Enhance your event with our premium catering options, featuring a variety of customizable menus to suit your preferences and dietary requirements.
                </p>
                <p className="font-semibold">Starting from $35 per person</p>
              </div>
              
              {/* Drink Options */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="h-48 mb-6 rounded overflow-hidden">
                  <img
                    src="/photos/homepage-originals/DSC03138-Enhanced-NR.jpg"
                    alt="Drink Options"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Bar Services</h3>
                <p className="text-gray-600 mb-4">
                  Our bar services include a selection of premium spirits, wines, beers, and custom cocktails. We can create a specialized drink menu for your event.
                </p>
                <p className="font-semibold">Custom packages available</p>
              </div>
              
              {/* AV Options */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="h-48 mb-6 rounded overflow-hidden">
                  <img
                    src="/photos/homepage-originals/DSC03696-Enhanced-NR.jpg"
                    alt="DCP Audio-Visual Options"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">DCP Audio-Visual Enhancements</h3>
                <p className="text-gray-600 mb-4">
                  Take advantage of our state-of-the-art audio-visual system, with options for specialized lighting, sound, and projection enhancements.
                </p>
                <p className="font-semibold">$100 per hour</p>
              </div>
              
              {/* Photo Booth */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="h-48 mb-6 rounded overflow-hidden">
                  <img
                    src="/photos/homepage-originals/DSC03296-Enhanced-NR.jpg"
                    alt="Photo Booth"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Photo Booth</h3>
                <p className="text-gray-600 mb-4">
                  Add a fun and memorable photo booth experience to your event. Includes professional equipment, staff assistance, and printed photos for your guests.
                </p>
                <p className="font-semibold">$1,000 for 4 hours</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Venue Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col md:flex-row gap-6 items-center bg-gray-50 p-6 rounded-lg">
                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                  <img
                    src="/photos/homepage-originals/DSC03644-Enhanced-NR.jpg"
                    alt="Comfortable Seating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Premium Screening Area</h3>
                  <p className="text-gray-600">
                    Our theatre features premium comfortable seating with excellent sightlines, ensuring every guest has the perfect view of the screen.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center bg-gray-50 p-6 rounded-lg">
                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                  <img
                    src="/photos/homepage-originals/DSC03633-Enhanced-NR.jpg"
                    alt="Social Lounge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Elegant Social Lounge</h3>
                  <p className="text-gray-600">
                    Our lounge area provides a sophisticated space for mingling, networking, or enjoying drinks before and after your main event.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center bg-gray-50 p-6 rounded-lg">
                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                  <img
                    src="/photos/homepage-originals/DSC03344-Enhanced-NR.jpg"
                    alt="Bar Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Premium Bar Service</h3>
                  <p className="text-gray-600">
                    Featuring a selection of craft cocktails, fine wines, and premium spirits, our bar service elevates any event into an extraordinary experience.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center bg-gray-50 p-6 rounded-lg">
                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                  <img
                    src="/photos/homepage-originals/DSC03360-Enhanced-NR.jpg"
                    alt="Professional Equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">Professional Equipment</h3>
                  <p className="text-gray-600">
                    State-of-the-art projection and sound systems ensure your content looks and sounds its absolute best to impress your guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Showcase - Updated to clean mosaic layout */}
        <div className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Explore Our Space</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="col-span-1 md:col-span-2 md:row-span-2 overflow-hidden">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03339-Enhanced-NR.jpg"
                    alt="Reel Room Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="aspect-square overflow-hidden">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03411-Enhanced-NR.jpg"
                    alt="Reel Room Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="aspect-square overflow-hidden">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03287-Enhanced-NR.jpg"
                    alt="Reel Room Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="aspect-square overflow-hidden">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03406-Enhanced-NR.jpg"
                    alt="Reel Room Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="aspect-square overflow-hidden">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03696-Enhanced-NR.jpg"
                    alt="Reel Room Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-2 overflow-hidden">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03747-Enhanced-NR.jpg"
                    alt="Reel Room Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-2 overflow-hidden">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03643-Enhanced-NR.jpg"
                    alt="Reel Room Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="aspect-square overflow-hidden">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03683-Enhanced-NR.jpg"
                    alt="Reel Room Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="aspect-square overflow-hidden">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03264-Enhanced-NR.jpg"
                    alt="Reel Room Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Create Your Custom Experience</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Contact us today to discuss how we can tailor our venue and services to create the perfect event for your specific needs.
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/reservations"
                className="inline-block bg-white text-black px-6 py-3 rounded-md transition-colors hover:bg-gray-200"
              >
                Make a Reservation
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-md transition-colors hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <ReelRoomFooter />
    </div>
  );
} 