import React from "react";
import Head from "next/head";
import Link from "next/link";
import BlogImg from "@/components/BlogImg";
import AceCascadeNavigation from "@/components/AceCascadeNavigation";
import AceCascadeFooter from "@/components/AceCascadeFooter";

// Create a blur data placeholder for faster loading
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAJAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQIFBAMAAAAAAAAAAAAAAQIDBAUGEQAHEiExQVGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhEDEQA/ANJd2nqeobf12o1aoZeH4gjmAHszbEkE9nNUJ00rW1W32MbA+7WqWbg/c06v/9k=";

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Blogs | Ace Cascade Lodge</title>
        <meta
          name="description"
          content="Explore our latest blog articles about Whistler's attractions, events, and seasonal activities. Get insider tips for your stay at Ace Cascade Lodge."
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
          <div className="bg-gray-800 text-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
                <p className="mt-4 text-xl max-w-2xl mx-auto">
                  Discover Whistler's secrets, seasonal highlights, and insider tips for your mountain getaway
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Latest Blog Post - Featured */}
              <div className="lg:col-span-3 mb-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-60 md:h-auto">
                    <BlogImg
                      src="/photos/Blogs/677abbfa808496676931dd85_whistlerolympicpeakview-p-1080.jpg"
                      alt="Whistler Cascade Lodge"
                      fill
                      priority={true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-[#0066CC] text-sm font-medium mb-2">
                        FEATURED POST
                      </p>
                      <h2 className="text-2xl font-bold mb-4 hover:text-black transition-colors">
                        <Link href="/blog-articles/discover-whistler-cascade-lodge">
                          Discover Whistler Cascade Lodge: Your Perfect Mountain Retreat
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Nestled in the heart of Whistler Village, Ace Cascade Lodge offers a perfect blend of luxury, comfort, and convenience for your mountain getaway. Learn why our prime location and luxury accommodations make us the ideal choice for your Whistler vacation.
            </p>
          </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-sm">July 3, 2024</p>
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

              {/* Regular Blog Posts */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Link href="/blog-articles/activities-in-whistler">
                  <div className="relative h-48">
                    <BlogImg
                      src="/photos/Blogs/67732501c19e6210e1b83821_Village-Lights_TW_MikeCrane_2000-x-1154-p-1080.jpeg"
                      alt="Whistler Village Night"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 hover:text-black transition-colors">
                    <Link href="/blog-articles/activities-in-whistler">
                      Activities & Fun Things to Do in Whistler
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Discover the best activities and experiences that Whistler has to offer throughout all four seasons.
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">July 1, 2024</p>
                    <Link
                      href="/blog-articles/activities-in-whistler"
                      className="text-[#0066CC] font-medium hover:text-[#004C99] transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Link href="/blog-articles/current-whistler-snow-conditions">
                  <div className="relative h-48">
                    <BlogImg
                      src="/photos/Blogs/677abbfa808496676931dd85_whistlerolympicpeakview-p-1080.jpg"
                      alt="Whistler Snow Conditions"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 hover:text-black transition-colors">
                    <Link href="/blog-articles/current-whistler-snow-conditions">
                      Current Whistler Snow Conditions
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Get the latest update on Whistler's exceptional snow conditions and why this season is spectacular for skiing.
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">July 2, 2024</p>
                    <Link
                      href="/blog-articles/current-whistler-snow-conditions"
                      className="text-[#0066CC] font-medium hover:text-[#004C99] transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Link href="/blog-articles/whistler-blackcomb-named-best-ski-resort">
                  <div className="relative h-48">
                    <BlogImg
                      src="/photos/Blogs/660c438b0e0ac1f271306bb9_pexels-pixabay-260922-p-1080.jpg"
                      alt="Whistler Blackcomb Peak to Peak Gondola"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 hover:text-black transition-colors">
                    <Link href="/blog-articles/whistler-blackcomb-named-best-ski-resort">
                      Whistler Blackcomb Named Best Ski Resort in North America
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    For the seventh consecutive year, Whistler Blackcomb has been voted the #1 ski resort in North America.
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">December 20, 2023</p>
                    <Link
                      href="/blog-articles/whistler-blackcomb-named-best-ski-resort"
                      className="text-[#0066CC] font-medium hover:text-[#004C99] transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <Link href="/blog-articles/planning-your-perfect-whistler-family-vacation">
                  <div className="relative h-48">
                    <BlogImg
                      src="/photos/Blogs/660c42f91c8fcfabf7188979_IMG_8587-p-1080.jpg"
                      alt="Family Skiing in Whistler"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      priority={false}
                    />
                    </div>
                </Link>
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 hover:text-black transition-colors">
                    <Link href="/blog-articles/planning-your-perfect-whistler-family-vacation">
                      Planning Your Perfect Whistler Family Vacation
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Tips and recommendations for creating unforgettable family memories in Whistler, from ski school to kid-friendly activities.
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">November 15, 2023</p>
                    <Link
                      href="/blog-articles/planning-your-perfect-whistler-family-vacation"
                      className="text-[#0066CC] font-medium hover:text-[#004C99] transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-gray-50 p-8 rounded-lg mt-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
                <p className="text-gray-600 mb-6">
                  Follow us on social media for the latest news, special offers, and Whistler travel tips.
                </p>
                <div className="flex justify-center space-x-6">
                  <a href="https://www.instagram.com/ace_cascade_lodge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-[#0066CC] hover:text-[#004C99]">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
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