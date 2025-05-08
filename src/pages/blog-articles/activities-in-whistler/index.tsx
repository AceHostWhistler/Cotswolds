import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AceCascadeNavigation from "@/components/AceCascadeNavigation";
import AceCascadeFooter from "@/components/AceCascadeFooter";

export default function ActivitiesWhistler() {
  return (
    <>
      <Head>
        <title>Activities & Fun Things to Do in Whistler | Ace Cascade Lodge</title>
        <meta
          name="description"
          content="Discover the best things to do in Whistler all year round when staying at Ace Cascade Lodge."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="min-h-screen bg-white">
        <AceCascadeNavigation />

        <main className="pt-20">
          {/* Hero Section */}
          <div className="relative h-[50vh]">
            <Image
              src="/photos/Blogs/67732501c19e6210e1b83821_Village-Lights_TW_MikeCrane_2000-x-1154-p-1080.jpeg"
              alt="Whistler Village at night"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Activities & Fun Things To Do in Whistler
                </h1>
                <p className="text-xl text-white">
                  Your Guide to Year-Round Adventures
                </p>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex items-center text-gray-500 mb-8">
              <time dateTime="2024-07-01">July 1, 2024</time>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed">
                Nestled in the heart of British Columbia, Whistler offers incredible activities throughout all four seasons. When staying at Ace Cascade Lodge, you'll be perfectly positioned to experience everything Whistler has to offer.
              </p>

              <h2>Winter Activities</h2>
              
              <div className="my-6 relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/660c43b55eaead9fecc3d57e_pexels-oleksandr-p-376697-p-1080.jpg" 
                  alt="Skiing at Whistler Blackcomb" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <ul>
                <li>World-class skiing and snowboarding at Whistler Blackcomb</li>
                <li>Cross-country skiing at Whistler Olympic Park</li>
                <li>Snowshoeing through serene winter forests</li>
                <li>Ice skating at Whistler Olympic Plaza</li>
                <li>Relaxing at Scandinave Spa after a day on the slopes</li>
                <li>Winter ziplining through snow-covered forests</li>
                <li>Vallea Lumina night walk through illuminated forests</li>
              </ul>

              <h2>Summer Activities</h2>
              
              <div className="my-6 relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/activities-in-whistler/67731e7e32196bc3611908e4_istockphoto-615822482-612x612.jpg" 
                  alt="Mountain biking in Whistler" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <ul>
                <li>World-renowned mountain biking at Whistler Mountain Bike Park</li>
                <li>Alpine hiking with spectacular viewpoints</li>
                <li>PEAK 2 PEAK Gondola between Whistler and Blackcomb mountains</li>
                <li>Swimming, paddleboarding, and kayaking on local lakes</li>
                <li>Whitewater rafting adventures on nearby rivers</li>
                <li>Golfing on championship courses with mountain views</li>
              </ul>

              <h2>Fall Activities</h2>
              
              <div className="my-6 relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/677abbfa808496676931dd85_whistlerolympicpeakview-p-1080.jpg" 
                  alt="Fall colors in Whistler" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <ul>
                <li>Mountain biking and hiking with spectacular fall colors</li>
                <li>Wildlife viewing as bears prepare for hibernation</li>
                <li>Cultural experiences at local museums and centers</li>
                <li>Fall festivals including Whistler Writers Festival and Cornucopia</li>
              </ul>

              <h2>Whistler Village: Dining & Entertainment</h2>
              
              <ul>
                <li>Over 100 restaurants ranging from casual pubs to fine dining</li>
                <li>Vibrant après-ski scene with lively patios</li>
                <li>Shopping in the pedestrian-only village</li>
                <li>Relaxation at various spas and wellness centers</li>
                <li>Family-friendly activities throughout the village</li>
              </ul>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/listings/Cascade Exterior/IMG_8867.jpg" 
                  alt="Ace Cascade Lodge exterior" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2>Staying at Ace Cascade Lodge</h2>
              
              <p>
                Our prime location makes Ace Cascade Lodge the ideal base for your adventures:
              </p>
              
              <ul>
                <li>5-minute walk to the main gondolas</li>
                <li>Steps away from dining, shopping, and nightlife</li>
                <li>Easy access to valley trails and shuttle services</li>
                <li>Comfortable accommodations with kitchenettes</li>
                <li>Heated outdoor pool and hot tub</li>
              </ul>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0066CC] mb-4">Ready to Experience Whistler?</h3>
                <p className="mb-4">Book your stay at Ace Cascade Lodge and enjoy the perfect location for all your adventures.</p>
                <Link 
                  href="/listings" 
                  className="inline-block bg-[#0066CC] text-white px-6 py-3 rounded-md font-medium hover:bg-[#004C99] transition-colors"
                >
                  View Our Accommodations
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Link href="/blog-articles/current-whistler-snow-conditions">
                    <div className="relative h-48">
                      <Image
                        src="/photos/Blogs/660c43b55eaead9fecc3d57e_pexels-oleksandr-p-376697-p-1080.jpg"
                        alt="Skiing in Whistler"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href="/blog-articles/current-whistler-snow-conditions">
                        Current Whistler Snow Conditions
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Get the latest update on Whistler's snow conditions.
                    </p>
                    <Link
                      href="/blog-articles/current-whistler-snow-conditions"
                      className="text-[#0066CC] font-medium hover:text-[#004C99]"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Link href="/blog-articles/whistlers-winter-outlook">
                    <div className="relative h-48">
                      <Image
                        src="/photos/Blogs/660c43b55eaead9fecc3d57e_pexels-oleksandr-p-376697-p-1080.jpg"
                        alt="Whistler Winter"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href="/blog-articles/whistlers-winter-outlook">
                        Whistler's Winter Outlook
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Learn how weather patterns affect Whistler's snowfall.
                    </p>
                    <Link
                      href="/blog-articles/whistlers-winter-outlook"
                      className="text-[#0066CC] font-medium hover:text-[#004C99]"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Link href="/blog-articles/discover-whistler-cascade-lodge">
                    <div className="relative h-48">
                      <Image
                        src="/photos/listings/Cascade Exterior/IMG_8858.jpg"
                        alt="Whistler Cascade Lodge"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href="/blog-articles/discover-whistler-cascade-lodge">
                        Discover Whistler Cascade Lodge
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Your perfect retreat in the heart of Whistler Village.
                    </p>
                    <Link
                      href="/blog-articles/discover-whistler-cascade-lodge"
                      className="text-[#0066CC] font-medium hover:text-[#004C99] transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
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