import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '../components/ReelRoomNavigation';
import ReelRoomFooter from '../components/ReelRoomFooter';
import OptimizedImage from '../components/OptimizedImage';
import LazyVimeoPlayer from '../components/LazyVimeoPlayer';
import CalendlyWidget from '../components/CalendlyWidget';

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
        <div className="relative h-[500px] overflow-hidden">
          <OptimizedImage
            src="/photos/homepage-originals/DSC03192-Enhanced-NR-Edit.jpg"
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
        
        {/* Main Venue Rates */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Event Venue Rates</h2>
            
            <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Base Rental Rate</h3>
                <p className="text-4xl font-light text-brand-gold">$2,100</p>
                <p className="text-gray-600 mt-2">for a 4-hour rental time slot</p>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-gray-700">+ Event Manager ($255) + Cleaning Fee ($300)</p>
                  <p className="text-gray-700 mt-2">Subtotal: $2,655</p>
                  <p className="text-gray-700">+ 5% Tax: $132.75</p>
                  <p className="text-gray-700 mt-2 font-semibold">Final Price: $2,787.75</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-bold mb-3">Additional Hours</h4>
                  <p className="text-gray-600 mb-2">Need more time for your event?</p>
                  <p className="text-xl font-semibold text-brand-gold">$500/hour</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-bold mb-3">Food & Beverage</h4>
                  <p className="text-gray-600">Food and beverage service is an additional cost. We'll connect you with our catering partners once your date is reserved.</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h4 className="text-lg font-bold mb-3">Catering Suggestions</h4>
                <p className="text-gray-600 mb-4">
                  We suggest hors d'oeuvres/small bites, cocktails, & refreshments to pair with your event or celebration. Once the venue is reserved for your requested date, we will put you in touch with our catering partners for menu development and next steps.
                </p>
                <p className="text-gray-600">
                  Depending on your event, we are able to sell drink tickets in advance for your guests, create a cash bar where guests pay for their own drinks upon ordering at the bar, billed all together, etc... We are flexible and open to working with your event style.
                </p>
              </div>
              
              <div className="text-center">
                <Link
                  href="/reservations"
                  className="inline-block bg-black text-white px-8 py-4 rounded-md text-lg transition-colors hover:bg-gray-800"
                >
                  Reserve Your Date
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Promotions Section */}
        <div className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Summer Promotion */}
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-amber-200 transform scale-90 mx-auto">
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-amber-600">Summer Special!</h2>
                  <div className="flex justify-center my-3">
                    <div className="h-1 w-12 bg-amber-400 rounded"></div>
                  </div>
                  <p className="text-lg text-gray-700">
                    Enjoy <span className="text-xl font-bold text-amber-600">35% OFF</span> our venue fee all summer long!
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg mb-4 text-sm border border-gray-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">Base Venue Fee:</span>
                    <span className="text-gray-700">$2,100</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-amber-700 font-medium">Summer Discount (35%):</span>
                    <span className="text-amber-700 font-medium">-$735</span>
                  </div>
                  <div className="flex justify-between items-center mb-1 pt-1 border-t border-gray-200">
                    <span className="text-gray-700">Discounted Venue Fee:</span>
                    <span className="text-gray-700">$1,365</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">+ Event Manager:</span>
                    <span className="text-gray-700">$255</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">+ Cleaning Fee:</span>
                    <span className="text-gray-700">$300</span>
                  </div>
                  <div className="flex justify-between items-center mb-1 pt-1 border-t border-gray-200">
                    <span className="text-gray-700 font-medium">Subtotal:</span>
                    <span className="text-gray-700 font-medium">$1,920</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">+ 5% Tax:</span>
                    <span className="text-gray-700">$96</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-gray-200">
                    <span className="text-amber-700 font-bold">Final Price:</span>
                    <span className="text-amber-700 font-bold">$2,016</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">Offer valid May 1 - October 15, 2025. Cannot be combined with other promotions.</p>
                  <p className="text-xs text-gray-500 mt-1">Message us at info@reelroom.ca for summer rate quotes.</p>
                </div>
              </div>
              
              {/* Weekday Evening Rates Promotion */}
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-200 transform scale-90 mx-auto">
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-blue-600">Weekday Evening Rates!</h2>
                  <div className="flex justify-center my-3">
                    <div className="h-1 w-12 bg-blue-400 rounded"></div>
                  </div>
                  <p className="text-lg text-gray-700">
                    Enjoy <span className="text-xl font-bold text-blue-600">25% OFF</span> for weekday evening bookings!
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg mb-4 text-sm border border-gray-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">Base Venue Fee:</span>
                    <span className="text-gray-700">$2,100</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-blue-700 font-medium">Weekday Evening Discount (25%):</span>
                    <span className="text-blue-700 font-medium">-$525</span>
                  </div>
                  <div className="flex justify-between items-center mb-1 pt-1 border-t border-gray-200">
                    <span className="text-gray-700">Discounted Venue Fee:</span>
                    <span className="text-gray-700">$1,575</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">+ Event Manager:</span>
                    <span className="text-gray-700">$255</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">+ Cleaning Fee:</span>
                    <span className="text-gray-700">$300</span>
                  </div>
                  <div className="flex justify-between items-center mb-1 pt-1 border-t border-gray-200">
                    <span className="text-gray-700 font-medium">Subtotal:</span>
                    <span className="text-gray-700 font-medium">$2,130</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">+ 5% Tax:</span>
                    <span className="text-gray-700">$106.50</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-gray-200">
                    <span className="text-blue-700 font-bold">Final Price:</span>
                    <span className="text-blue-700 font-bold">$2,236.50</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">Valid Monday-Thursday evenings. Cannot be combined with other promotions.</p>
                </div>
              </div>
              
              {/* Weekend Lunch Rates */}
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-green-200 transform scale-90 mx-auto">
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-green-600">Weekend Lunch Rates!</h2>
                  <div className="flex justify-center my-3">
                    <div className="h-1 w-12 bg-green-400 rounded"></div>
                  </div>
                  <p className="text-lg text-gray-700">
                    Enjoy <span className="text-xl font-bold text-green-600">25% OFF</span> for weekend lunch bookings!
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg mb-4 text-sm border border-gray-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">Base Venue Fee:</span>
                    <span className="text-gray-700">$2,100</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-green-700 font-medium">Weekend Lunch Discount (25%):</span>
                    <span className="text-green-700 font-medium">-$525</span>
                  </div>
                  <div className="flex justify-between items-center mb-1 pt-1 border-t border-gray-200">
                    <span className="text-gray-700">Discounted Venue Fee:</span>
                    <span className="text-gray-700">$1,575</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">+ Event Manager:</span>
                    <span className="text-gray-700">$255</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">+ Cleaning Fee:</span>
                    <span className="text-gray-700">$300</span>
                  </div>
                  <div className="flex justify-between items-center mb-1 pt-1 border-t border-gray-200">
                    <span className="text-gray-700 font-medium">Subtotal:</span>
                    <span className="text-gray-700 font-medium">$2,130</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">+ 5% Tax:</span>
                    <span className="text-gray-700">$106.50</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-gray-200">
                    <span className="text-green-700 font-bold">Final Price:</span>
                    <span className="text-green-700 font-bold">$2,236.50</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">Valid Friday-Sunday, bookings ending before 4:00 PM. Cannot be combined with other promotions.</p>
                </div>
              </div>
              
              {/* Weekday Lunch Rates */}
              <div className="bg-white p-6 rounded-xl shadow-md border-2 border-purple-200 transform scale-90 mx-auto">
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-purple-600">Weekday Lunch Rates!</h2>
                  <div className="flex justify-center my-3">
                    <div className="h-1 w-12 bg-purple-400 rounded"></div>
                  </div>
                  <p className="text-lg text-gray-700">
                    Enjoy <span className="text-xl font-bold text-purple-600">45% OFF</span> for weekday lunch bookings!
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg mb-4 text-sm border border-gray-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">Base Venue Fee:</span>
                    <span className="text-gray-700">$2,100</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-purple-700 font-medium">Weekday Lunch Discount (45%):</span>
                    <span className="text-purple-700 font-medium">-$945</span>
                  </div>
                  <div className="flex justify-between items-center mb-1 pt-1 border-t border-gray-200">
                    <span className="text-gray-700">Discounted Venue Fee:</span>
                    <span className="text-gray-700">$1,155</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">+ Event Manager:</span>
                    <span className="text-gray-700">$255</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">+ Cleaning Fee:</span>
                    <span className="text-gray-700">$300</span>
                  </div>
                  <div className="flex justify-between items-center mb-1 pt-1 border-t border-gray-200">
                    <span className="text-gray-700 font-medium">Subtotal:</span>
                    <span className="text-gray-700 font-medium">$1,710</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700">+ 5% Tax:</span>
                    <span className="text-gray-700">$85.50</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-gray-200">
                    <span className="text-purple-700 font-bold">Final Price:</span>
                    <span className="text-purple-700 font-bold">$1,795.50</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">Valid Monday-Thursday, bookings ending before 4:00 PM. Cannot be combined with other promotions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Event Types */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Event Types</h2>
            
            {/* DCP Film Release Events */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">DCP Film Release Events</h3>
                  <p className="text-gray-600 mb-6">
                    Celebrate the culmination of months of hard work by watching your film come to life on the big screen with your cast, crew, and team. At The Reel Room, you can share this unforgettable milestone in a private theatre designed to make your cinematic dreams shine.
                  </p>
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                    <p className="text-gray-800 italic">DCP Available upon request.</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>Private theatre experience for your film</li>
                    <li>Customizable food and drink options</li>
                    <li>Space for up to 85-95+ guests</li>
                    <li>High-quality projection and sound system</li>
                    <li>Lounge area for mingling before and after the screening</li>
                  </ul>
                  <Link
                    href="/reservations"
                    className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                  >
                    Book Your Film Event
                  </Link>
                </div>
                <div className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden">
                  <OptimizedImage
                    src="/photos/homepage-originals/DSC03066-Enhanced-NR.jpg"
                    alt="DCP Film Release Events"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Private Parties */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <OptimizedImage
                    src="/photos/homepage-originals/DSC03110-Enhanced-NR.jpg"
                    alt="Private Parties & Sports Events"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Private Parties & Sports Events</h3>
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
                  <Link
                    href="/reservations"
                    className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                  >
                    Book Your Party
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Corporate Events */}
            <div>
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
                  <Link
                    href="/reservations"
                    className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                  >
                    Book Your Corporate Event
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
        
        {/* Additional Options */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Additional Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Food Options */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="h-48 mb-6 rounded overflow-hidden">
                  <img
                    src="/photos/homepage-originals/DSC03070-Enhanced-NR.jpg"
                    alt="Food Options"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Catering Services</h3>
                <p className="text-gray-600 mb-4">
                  Enhance your event with our premium catering options, featuring a variety of customizable menus to suit your preferences and dietary requirements.
                </p>
                <p className="font-semibold text-gray-800">Prices starting from $25 per person</p>
              </div>
              
              {/* Drink Options */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="h-48 mb-6 rounded overflow-hidden">
                  <img
                    src="/photos/homepage-originals/DSC03086-Enhanced-NR.jpg"
                    alt="Bar Services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Bar Services</h3>
                <p className="text-gray-600 mb-4">
                  Including bartenders, drinks, and glassware rentals. Drinks can be purchased as a cash bar and split amongst invited guests for your private event booking.
                </p>
                <p className="font-semibold text-gray-800">Typically $1,400-$3,500 depending on consumption</p>
              </div>
              
              {/* AV Options */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="h-48 mb-6 rounded overflow-hidden">
                  <img
                    src="/photos/homepage-originals/DSC03106-Enhanced-NR.jpg"
                    alt="DCP Audio-Visual Options"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">DCP Audio-Visual Enhancements</h3>
                <p className="text-gray-600 mb-4">
                  Take advantage of our state-of-the-art audio-visual system, with options for specialized lighting, sound, and projection enhancements.
                </p>
                <p className="font-semibold text-gray-800">$100 per hour</p>
              </div>
              
              {/* Photo Booth */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="h-48 mb-6 rounded overflow-hidden">
                  <img
                    src="/photos/homepage-originals/DSC03104-Enhanced-NR.jpg"
                    alt="Photo Booth"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Photo Booth</h3>
                <p className="text-gray-600 mb-4">
                  Add a fun and memorable photo booth experience to your event. Includes professional equipment, staff assistance, and printed photos for your guests.
                </p>
                <p className="font-semibold text-gray-800">$1,000 for 4 hours</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Photo Gallery Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Event Space Gallery</h2>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-12">
              {/* Each image is in a fixed-ratio container */}
              <div className="col-span-2 row-span-2 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03198-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03217-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03227-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-2 row-span-2 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03287-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <img 
                    src="/photos/homepage-originals/DSC03313-Enhanced-NR.jpg"
                    alt="Reel Room Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="col-span-1 row-span-1 aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <img 
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
            <h2 className="text-3xl font-bold mb-6">Create Your Custom Experience</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Contact us today to discuss how we can tailor our venue and services to create the perfect event for your specific needs.
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/reservations"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-md transition-colors hover:bg-red-700"
              >
                Make a Reservation
              </Link>
              <Link
                href="/reservations"
                className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-md transition-colors hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile Calendly Widget with Enhanced Visibility */}
        <div className="py-12 bg-white lg:hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-amber-500">
              <div className="bg-amber-500 text-black p-4 text-center">
                <h2 className="text-3xl font-bold mb-1 uppercase tracking-wider">BOOK YOUR EVENT</h2>
                <p className="text-black">Check availability & schedule instantly</p>
              </div>
              <div className="animate-pulse absolute right-4 top-20 h-16 w-16 flex items-center justify-center rounded-full bg-amber-500 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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