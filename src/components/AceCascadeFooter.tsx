import Link from 'next/link';
import Image from 'next/image';

export default function AceCascadeFooter() {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center">
              <Image src="/favicon-32x32.png" alt="Ace Cascade Lodge" width={32} height={32} />
              <span className="ml-2 text-lg font-medium text-[#0066CC]">Ace Cascade Lodge</span>
            </Link>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-[#0066CC]">Our Listings</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/listings/mountain-view---top-floor" className="text-gray-300 hover:text-[#0066CC] transition duration-300">
                  Mountain View - Top Floor
                </Link>
              </li>
              <li>
                <Link href="/listings/mountain-view-rooms" className="text-gray-300 hover:text-[#0066CC] transition duration-300">
                  Mountain View Rooms
                </Link>
              </li>
              <li>
                <Link href="/listings/forest-view-cascade-room" className="text-gray-300 hover:text-[#0066CC] transition duration-300">
                  Forest View Cascade Rooms
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-[#0066CC]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#0066CC] transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-[#0066CC] transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-gray-300 hover:text-[#0066CC] transition duration-300">
                  View Listings
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-[#0066CC]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-[#0066CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">4315 Northlands Blvd, Whistler, BC, Canada</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-[#0066CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">info@acecascade.ca</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Ace Cascade. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-[#0066CC] transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#0066CC] transition duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 