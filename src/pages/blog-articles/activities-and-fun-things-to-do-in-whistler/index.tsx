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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <AceCascadeNavigation />

        <main className="pt-20">
          {/* Hero Section */}
          <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
            <Image
              src="/photos/Blogs/67732501c19e6210e1b83821_Village-Lights_TW_MikeCrane_2000-x-1154-p-1080.jpeg"
              alt="Whistler Village at night with beautiful lights"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Activities & Fun Things To Do in Whistler
                </h1>
                <p className="text-xl text-white">
                  Your Guide to Year-Round Adventures When Staying at Ace Cascade Lodge
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
                Nestled in the heart of one of North America's most celebrated mountain destinations, Whistler offers an incredible array of activities throughout all four seasons. When staying at Ace Cascade Lodge, you'll find yourself perfectly positioned to experience the very best that Whistler has to offer.
              </p>

              <h2>Winter Activities</h2>
              
              <div className="my-8 relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/6779d4bf6ac4d54d1c9bc4b1_Whistler_Winter-p-1080.jpg" 
                  alt="Skier enjoying fresh powder at Whistler Blackcomb" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <p>
                Whistler comes alive during winter with snow-based activities that attract visitors from around the globe:
              </p>
              
              <ul>
                <li>
                  <strong>World-class skiing and snowboarding</strong> at Whistler Blackcomb with over 8,100 acres of skiable terrain, 200+ marked runs, and 16 alpine bowls
                </li>
                <li>
                  <strong>Cross-country skiing</strong> on over 30 km of groomed trails at Whistler Olympic Park
                </li>
                <li>
                  <strong>Snowshoeing</strong> through serene winter forests on dedicated trails
                </li>
                <li>
                  <strong>Ice skating</strong> at Whistler Olympic Plaza with mountain views
                </li>
                <li>
                  <strong>Rejuvenate at Scandinave Spa</strong> with outdoor hot and cold pools after a day on the slopes
                </li>
                <li>
                  <strong>Winter ziplining</strong> for a unique perspective of snow-covered forests
                </li>
                <li>
                  <strong>Vallea Lumina</strong> night walk through illuminated forests
                </li>
              </ul>

              <h2>Summer Activities</h2>
              
              <div className="my-8 relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/6779d4b968a03e75b59e98a2_WhistlerMTB-p-1080.jpg" 
                  alt="Mountain biking on Whistler trails" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <p>
                When the snow melts, Whistler transforms into a summer playground with diverse outdoor activities:
              </p>
              
              <ul>
                <li>
                  <strong>World-renowned mountain biking</strong> with Whistler Mountain Bike Park featuring over 80 km of lift-serviced trails
                </li>
                <li>
                  <strong>Alpine hiking</strong> with spectacular viewpoints, meadows, and glacial lakes
                </li>
                <li>
                  <strong>Ride the PEAK 2 PEAK Gondola</strong> between Whistler and Blackcomb mountains for breathtaking views
                </li>
                <li>
                  <strong>Water activities</strong> including swimming, paddleboarding, and kayaking on Alta Lake, Lost Lake, and other local lakes
                </li>
                <li>
                  <strong>Whitewater rafting adventures</strong> on the Green, Elaho, and Cheakamus Rivers
                </li>
                <li>
                  <strong>Golf on championship courses</strong> surrounded by mountain scenery
                </li>
              </ul>

              <div className="my-8 relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/677acccb75e64ea09ba38ab5_LakeSwimWhistler-1080p.jpg" 
                  alt="Swimming in a pristine Whistler lake with mountain views" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2>Fall Activities</h2>
              
              <p>
                Fall in Whistler might be the region's best-kept secret, offering spectacular foliage, fewer crowds, and a special tranquility:
              </p>
              
              <ul>
                <li>
                  <strong>Mountain biking and hiking</strong> with comfortable temperatures and spectacular fall colors
                </li>
                <li>
                  <strong>Wildlife viewing</strong> as bears increase feeding before hibernation
                </li>
                <li>
                  <strong>Cultural experiences</strong> at the Audain Art Museum and Squamish Lil'wat Cultural Centre
                </li>
                <li>
                  <strong>Fall festivals</strong> including Whistler Writers Festival and Cornucopia food and wine celebration
                </li>
              </ul>

              <div className="my-8 relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/Blogs/677abbfa808496676931dd85_whistlerolympicpeakview-p-1080.jpg" 
                  alt="Panoramic view of Whistler in fall with colorful foliage" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2>Whistler Village: Dining & Entertainment</h2>
              
              <p>
                Beyond outdoor adventures, Whistler Village itself offers a vibrant scene year-round, and Ace Cascade Lodge puts you right in the middle of it all:
              </p>

              <ul>
                <li>
                  <strong>World-class dining</strong> with over 100 restaurants ranging from casual pubs to fine dining
                </li>
                <li>
                  <strong>Vibrant après-ski scene</strong> with lively patios and mountain views
                </li>
                <li>
                  <strong>Shopping in the pedestrian-only village</strong> featuring outdoor gear, Canadian souvenirs, and local art
                </li>
                <li>
                  <strong>Relaxation and wellness</strong> at Scandinave Spa and other wellness centers
                </li>
                <li>
                  <strong>Family-friendly activities</strong> including the Adventure Zone, Magic Castle, and Tree Fort
                </li>
              </ul>

              <div className="my-8 relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/photos/listings/Cascade Exterior/IMG_8867.jpg" 
                  alt="Ace Cascade Lodge exterior with mountain views" 
                  fill 
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h2>Staying at Ace Cascade Lodge: The Perfect Home Base</h2>
              
              <p>
                Our prime location in Whistler Village makes Ace Cascade Lodge the ideal base for your adventures:
              </p>
              
              <ul>
                <li>5-minute walk to the main gondolas for skiing and mountain biking</li>
                <li>Steps away from dining, shopping, and nightlife</li>
                <li>Easy access to valley trails and shuttle services</li>
                <li>Comfortable accommodations to rest between adventures</li>
                <li>Heated outdoor pool and hot tub</li>
                <li>In-suite kitchenettes for preparing meals and snacks</li>
              </ul>

              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Ready to Experience the Best of Whistler?</h3>
                <p className="mb-6">Book your stay at Ace Cascade Lodge and enjoy the perfect location for all your Whistler adventures, no matter the season.</p>
                <Link 
                  href="/listings" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
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
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Link href="/blog-articles/current-whistler-snow-conditions-why-whistler-is-the-perfect-spot-for-skiing">
                    <div className="relative h-48">
                      <Image
                        src="/photos/Blogs/6779d4bf6ac4d54d1c9bc4b1_Whistler_Winter-p-1080.jpg"
                        alt="Skiing in Whistler"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                      <Link href="/blog-articles/current-whistler-snow-conditions-why-whistler-is-the-perfect-spot-for-skiing">
                        Current Whistler Snow Conditions
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Get the latest update on Whistler's exceptional snow conditions and why it's the perfect skiing destination this season.
                    </p>
                    <Link
                      href="/blog-articles/current-whistler-snow-conditions-why-whistler-is-the-perfect-spot-for-skiing"
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Link href="/blog-articles/discover-whistler-cascade-lodge-your-perfect-winter-retreat-in-whistler-village">
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
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                      <Link href="/blog-articles/discover-whistler-cascade-lodge-your-perfect-winter-retreat-in-whistler-village">
                        Discover Whistler Cascade Lodge
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Your perfect winter retreat in the heart of Whistler Village with premium accommodations and mountain views.
                    </p>
                    <Link
                      href="/blog-articles/discover-whistler-cascade-lodge-your-perfect-winter-retreat-in-whistler-village"
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
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