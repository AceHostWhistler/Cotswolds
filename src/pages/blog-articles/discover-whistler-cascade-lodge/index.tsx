import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AceCascadeNavigation from "@/components/AceCascadeNavigation";
import AceCascadeFooter from "@/components/AceCascadeFooter";

export default function DiscoverWhistlerCascadeLodge() {
  return (
    <>
      <Head>
        <title>Discover Whistler Cascade Lodge | Your Perfect Mountain Retreat</title>
        <meta
          name="description"
          content="Explore Ace Cascade Lodge in Whistler Village - perfectly located accommodations with mountain views, premium amenities, and easy access to all Whistler activities."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="min-h-screen bg-white">
        <AceCascadeNavigation />

        <main className="pt-20">
          {/* Hero Section */}
          <div className="relative h-[60vh]">
            <Image
              src="/photos/listings/Cascade Exterior/IMG_8867.jpg"
              alt="Ace Cascade Lodge exterior"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Discover Ace Cascade Lodge
                </h1>
                <p className="text-xl md:text-2xl text-white">
                  Your Perfect Mountain Retreat in Whistler Village
                </p>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex items-center text-gray-500 mb-8">
              <time dateTime="2024-07-03">July 3, 2024</time>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed">
                Nestled in the heart of Whistler Village, Ace Cascade Lodge offers the perfect blend of comfort, convenience, and mountain luxury. Whether you're planning a winter ski retreat or a summer mountain adventure, discover why our lodge is the ideal home base for your Whistler getaway.
              </p>

              <h2>Prime Village Location</h2>
              
              <div className="my-6 relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/67732501c19e6210e1b83821_Village-Lights_TW_MikeCrane_2000-x-1154-p-1080.jpeg" 
                  alt="Whistler Village at night" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <p>
                Location is everything in Whistler, and Ace Cascade Lodge boasts one of the most convenient positions in the village. Our prime location puts you at the center of everything Whistler has to offer, while still providing a peaceful retreat from the bustling village atmosphere.
              </p>
              
              <ul>
                <li>Just a 5-minute walk to the Whistler Village Gondola and Fitzsimmons Express</li>
                <li>Steps away from Whistler's best restaurants, shops, and nightlife</li>
                <li>Easy access to the Valley Trail network for hiking and biking</li>
                <li>A short stroll to Whistler Olympic Plaza for events and activities</li>
                <li>Walking distance to grocery stores and essential services</li>
              </ul>

              <blockquote className="italic border-l-4 border-blue-500 pl-4 my-6">
                "The location of Ace Cascade Lodge couldn't be better - we were able to walk to the lifts in the morning and enjoy village restaurants in the evening without ever needing our car." - Sarah T., Recent Guest
              </blockquote>

              <h2>Luxurious Accommodations</h2>
              
              <div className="my-6 relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/listings/Mountain View Top Floor/20240621 A7M3 05 A1_02579.jpg" 
                  alt="Mountain View Top Floor room interior" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <p>
                At Ace Cascade Lodge, we offer a variety of thoughtfully designed accommodations to ensure every guest finds their perfect mountain home:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Mountain View - Top Floor</h3>
                  <p className="text-sm mb-4">Experience luxury at its peak with our premium top floor accommodations, featuring panoramic mountain vistas and exclusive amenities.</p>
                  <Link href="/listings/mountain-view---top-floor" className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    View Details →
                  </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Mountain View Rooms</h3>
                  <p className="text-sm mb-4">Wake up to breathtaking views of Whistler and Blackcomb mountains from our well-appointed mountain view rooms.</p>
                  <Link href="/listings/mountain-view-rooms" className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    View Details →
                  </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Forest View Cascade Room</h3>
                  <p className="text-sm mb-4">Find tranquility in our forest view rooms, where nature's beauty meets modern comfort.</p>
                  <Link href="/listings/forest-view-cascade-room" className="text-blue-600 text-sm font-medium hover:text-blue-800">
                    View Details →
                  </Link>
                </div>
              </div>

              <h2>Premium Amenities</h2>
              
              <div className="my-6 relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02345.jpg" 
                  alt="Mountain View room amenities" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <p>
                Every room at Ace Cascade Lodge is thoughtfully equipped with premium amenities to enhance your stay:
              </p>
              
              <ul>
                <li>Plush queen beds with premium linens and pillows</li>
                <li>Modern kitchenettes with high-end appliances</li>
                <li>High-speed fiber WiFi throughout the property</li>
                <li>Smart TVs with streaming capabilities</li>
                <li>Spa-inspired bathrooms with premium toiletries</li>
                <li>Individual climate control systems</li>
                <li>Secure ski and bike storage with tune-up station</li>
              </ul>

              <h2>Resort Lifestyle</h2>
              
              <div className="my-6 relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/677abbfa808496676931dd85_whistlerolympicpeakview-p-1080.jpg" 
                  alt="Whistler Olympic Peak view" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <p>
                Experience the perfect blend of luxury and convenience with our resort-style amenities:
              </p>
              
              <ul>
                <li>
                  <strong>Heated outdoor pool</strong> - Open year-round with stunning mountain views
                </li>
                <li>
                  <strong>Hot tub</strong> - Perfect for après-ski relaxation
                </li>
                <li>
                  <strong>Fitness center</strong> - State-of-the-art equipment for maintaining your workout routine
                </li>
                <li>
                  <strong>Outdoor terrace</strong> - Featuring BBQ facilities and lounge areas
                </li>
                <li>
                  <strong>24/7 front desk</strong> - Always available to assist with your needs
                </li>
                <li>
                  <strong>Concierge service</strong> - Expert local knowledge for planning your perfect Whistler experience
                </li>
              </ul>

              <h2>Year-Round Adventure</h2>
              
              <div className="my-6 relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/660c438b0e0ac1f271306bb9_pexels-pixabay-260922-p-1080.jpg" 
                  alt="Whistler winter activities" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <p>
                Whistler is a true four-season destination, and Ace Cascade Lodge puts you at the heart of it all:
              </p>
              
              <h3>Winter Wonderland</h3>
              <ul>
                <li>World-class skiing and snowboarding on North America's largest resort</li>
                <li>Cross-country skiing at Whistler Olympic Park</li>
                <li>Magical ice skating at Whistler Olympic Plaza</li>
                <li>Snowmobile tours through pristine backcountry</li>
                <li>Winter zipline adventures through snow-covered forests</li>
              </ul>
              
              <div className="my-6 relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/660c42f91c8fcfabf7188979_IMG_8587-p-1080.jpg" 
                  alt="Whistler summer activities" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <h3>Summer Adventures</h3>
              <ul>
                <li>World-renowned mountain biking at Whistler Mountain Bike Park</li>
                <li>Hiking trails for all skill levels with breathtaking alpine views</li>
                <li>Refreshing swims in pristine mountain lakes</li>
                <li>Championship golf courses with stunning mountain backdrops</li>
                <li>Vibrant farmers' markets and outdoor concerts</li>
              </ul>
              
              <h3>Fall Colors</h3>
              <ul>
                <li>Spectacular alpine hiking with fall foliage</li>
                <li>Mountain biking through golden forests</li>
                <li>Wildlife viewing opportunities</li>
                <li>Peaceful lake activities</li>
                <li>Shoulder season rates with perfect weather</li>
              </ul>
              
              <h3>Spring Renewal</h3>
              <ul>
                <li>Late season skiing and spring conditions</li>
                <li>Early season hiking and biking</li>
                <li>Bear viewing tours</li>
                <li>Relaxing spa experiences</li>
                <li>Special spring events and festivals</li>
              </ul>

              <div className="bg-gray-50 p-8 rounded-lg my-8">
                <h2 className="text-2xl font-bold mb-4">Book Your Mountain Escape</h2>
                <p className="mb-6">
                  Experience the perfect blend of luxury, comfort, and adventure at Ace Cascade Lodge. Whether you're planning a romantic getaway, family vacation, or adventure-packed trip, we're here to make your Whistler dreams come true.
                </p>
                <Link 
                  href="/listings" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  View Our Accommodations
                </Link>
              </div>
            </div>
          </div>
        </main>

        <AceCascadeFooter />
      </div>
    </>
  );
} 