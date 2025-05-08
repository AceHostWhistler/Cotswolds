import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AceCascadeNavigation from "@/components/AceCascadeNavigation";
import AceCascadeFooter from "@/components/AceCascadeFooter";

export default function CurrentWhistlerSnowConditions() {
  return (
    <>
      <Head>
        <title>Current Whistler Snow Conditions | Ace Cascade Lodge</title>
        <meta
          name="description"
          content="Get the latest updates on Whistler Blackcomb snow conditions, snowfall reports, and ski season information."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="min-h-screen bg-white">
        <AceCascadeNavigation />

        <main className="pt-20">
          {/* Hero Section */}
          <div className="relative h-[50vh]">
            <Image
              src="/photos/Blogs/660c43b55eaead9fecc3d57e_pexels-oleksandr-p-376697-p-1080.jpg"
              alt="Snowy Whistler Blackcomb mountain"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Current Whistler Snow Conditions
                </h1>
                <p className="text-xl text-white">
                  The Latest Updates for Your Winter Adventure
                </p>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex items-center text-gray-500 mb-8">
              <time dateTime="2024-07-02">July 2, 2024</time>
              <span className="mx-2">•</span>
              <span>4 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed">
                Whistler Blackcomb is world-renowned for its exceptional skiing and snowboarding conditions. As you plan your winter getaway to Ace Cascade Lodge, here's what you need to know about the current snow conditions and what makes Whistler the perfect winter destination.
              </p>

              <h2>Current Snow Report</h2>
              
              <div className="my-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0066CC] mb-2">Snow Stats at a Glance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#0066CC]">320cm</p>
                    <p className="text-sm text-gray-600">Alpine Base</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#0066CC]">165cm</p>
                    <p className="text-sm text-gray-600">Mid-Mountain</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#0066CC]">25cm</p>
                    <p className="text-sm text-gray-600">24hr Snowfall</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#0066CC]">950cm</p>
                    <p className="text-sm text-gray-600">Season Total</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">*Updated as of July 2, 2024 - For demonstration purposes only. Check official Whistler Blackcomb channels for real-time conditions.</p>
              </div>
              
              <p>
                Whistler Blackcomb is currently experiencing excellent snow conditions across both mountains. Recent storms have delivered fresh powder, creating ideal skiing and riding conditions from peak to valley. The forecast calls for continued snowfall throughout the week, promising even better conditions for upcoming visitors.
              </p>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/660c42f91c8fcfabf7188979_IMG_8587-p-1080.jpg" 
                  alt="Fresh powder snow on Whistler mountain" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2>Why Whistler Has Exceptional Snow</h2>
              
              <p>
                Whistler's geographic location creates the perfect conditions for consistent, high-quality snow throughout the winter season:
              </p>
              
              <ul>
                <li>
                  <strong>Coastal mountain range</strong> - Whistler benefits from the moisture-rich Pacific air meeting cold arctic air, creating optimal conditions for snowfall
                </li>
                <li>
                  <strong>High elevation</strong> - With a summit elevation of 2,284 meters (7,494 feet), Whistler maintains cooler temperatures for snow preservation
                </li>
                <li>
                  <strong>North-facing slopes</strong> - Many runs face north, helping preserve snow quality by limiting sun exposure
                </li>
                <li>
                  <strong>World-class grooming</strong> - Whistler Blackcomb's grooming team ensures consistent conditions across the mountains
                </li>
              </ul>

              <h2>Open Terrain and Lift Status</h2>
              
              <p>
                Current open terrain at Whistler Blackcomb includes:
              </p>
              
              <ul>
                <li>Over 200 runs open across both mountains</li>
                <li>All 16 alpine bowls accessible</li>
                <li>Peak to Creek run open with excellent conditions</li>
                <li>All three terrain parks featuring freshly built features</li>
                <li>23 of 24 lifts currently operational</li>
              </ul>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/677abbfa808496676931dd85_whistlerolympicpeakview-p-1080.jpg" 
                  alt="Whistler mountain panorama" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2>Best Areas to Ski Based on Current Conditions</h2>
              
              <p>
                With the current conditions, we recommend these areas for the best experience:
              </p>
              
              <ul>
                <li>
                  <strong>Harmony Ridge</strong> - Featuring fresh powder and spectacular views
                </li>
                <li>
                  <strong>Symphony Bowl</strong> - Less crowded with excellent snow coverage
                </li>
                <li>
                  <strong>Blackcomb Glacier</strong> - Deep snow and challenging terrain for advanced skiers
                </li>
                <li>
                  <strong>Lower Olympic</strong> - Perfectly groomed runs ideal for intermediate skiers
                </li>
                <li>
                  <strong>Magic Chair area</strong> - Great conditions for beginners and families
                </li>
              </ul>

              <h2>Planning Your Ski Day from Ace Cascade Lodge</h2>
              
              <p>
                Staying at Ace Cascade Lodge puts you in the perfect position to maximize your time on the slopes:
              </p>
              
              <ul>
                <li>Just a 5-minute walk to the Whistler Village Gondola and Fitzsimmons Express</li>
                <li>Early access to fresh tracks with our convenient location</li>
                <li>Store your equipment in our secure ski storage</li>
                <li>Start your day with breakfast at nearby cafés, just steps from our door</li>
                <li>Return for a mid-day break to your comfortable accommodations</li>
              </ul>

              <div className="my-6 relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/listings/Cascade Exterior/IMG_8867.jpg" 
                  alt="Ace Cascade Lodge exterior with snow" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2>Weather Forecast</h2>
              
              <div className="my-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">7-Day Outlook</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Today</span>
                    <div className="flex items-center">
                      <span className="mr-2">-5°C</span>
                      <span>❄️</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Tomorrow</span>
                    <div className="flex items-center">
                      <span className="mr-2">-3°C</span>
                      <span>❄️</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Friday</span>
                    <div className="flex items-center">
                      <span className="mr-2">-2°C</span>
                      <span>☁️</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Saturday</span>
                    <div className="flex items-center">
                      <span className="mr-2">-4°C</span>
                      <span>❄️</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Sunday</span>
                    <div className="flex items-center">
                      <span className="mr-2">-6°C</span>
                      <span>☀️</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">*Forecast for demonstration purposes only. Check weather services for accurate forecasts.</p>
              </div>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0066CC] mb-4">Ready to Hit the Slopes?</h3>
                <p className="mb-4">Book your stay at Ace Cascade Lodge and enjoy perfect access to Whistler Blackcomb's legendary terrain.</p>
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
                  <Link href="/blog-articles/activities-in-whistler">
                    <div className="relative h-48">
                      <Image
                        src="/photos/Blogs/67732501c19e6210e1b83821_Village-Lights_TW_MikeCrane_2000-x-1154-p-1080.jpeg"
                        alt="Whistler Village"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">
                      <Link href="/blog-articles/activities-in-whistler">
                        Activities in Whistler
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover the best activities in Whistler all year round.
                    </p>
                    <Link
                      href="/blog-articles/activities-in-whistler"
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
                      className="text-[#0066CC] font-medium hover:text-[#004C99]"
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