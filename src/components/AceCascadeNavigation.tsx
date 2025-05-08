import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AceCascadeNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav 
      className="bg-white shadow-md text-gray-800 transition-all duration-300 fixed top-0 left-0 right-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="/favicon-32x32.png"
                alt="Ace Cascade Logo" 
                width={32}
                height={32}
                className="mr-2"
              />
              <span className="font-bold text-lg text-[#0066CC]">
                Ace Cascade
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Link href="/" className="text-gray-800 hover:text-[#0066CC] px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/listings" className="text-gray-800 hover:text-[#0066CC] px-3 py-2 text-sm font-medium">
              Our Listings
            </Link>
            <Link href="/list-with-us" className="text-gray-800 hover:text-[#0066CC] px-3 py-2 text-sm font-medium">
              List with Us
            </Link>
            <Link href="/blogs" className="text-gray-800 hover:text-[#0066CC] px-3 py-2 text-sm font-medium">
              Blogs
            </Link>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 inline-flex items-center justify-center p-2 rounded-md hover:bg-[#0066CC] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0066CC]"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" 
              className="text-gray-800 hover:bg-[#0066CC] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link href="/listings" 
              className="text-gray-800 hover:bg-[#0066CC] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Our Listings
            </Link>
            <Link href="/list-with-us" 
              className="text-gray-800 hover:bg-[#0066CC] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              List with Us
            </Link>
            <Link href="/blogs" 
              className="text-gray-800 hover:bg-[#0066CC] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AceCascadeNavigation; 