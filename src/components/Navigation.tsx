import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  X,
  Globe,
  Instagram,
  MessageCircle,
} from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useRouter } from "next/router";
import { allArticles } from "@/utils/blogArticles";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({
  currentPage,
  showActions = true,
  transparent = false,
}: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showMobileResourcesDropdown, setShowMobileResourcesDropdown] =
    useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("common");

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setShowResourcesDropdown(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(
          'button[aria-label="Toggle menu"]'
        )
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [resourcesRef, mobileMenuRef]);

  const resourcesDropdownItems = [
    { text: "All Blogs", url: "/blogs" },
    { text: "FAQ's", url: "/faq" },
  ];

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Luxury Properties For Rent", url: "/properties" },
    { text: "VIP Concierge Services", url: "/concierge-service" },
    { text: "Whistler Property Management", url: "/list-property" },
    { text: "About AceHost", url: "/our-story" },
  ];

  return (
    <nav
      className={`${
        transparent ? "bg-transparent" : "bg-white"
      } shadow-md relative z-40`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="w-40 h-16 relative">
                <Image
                  src="/favicon-32x32.png"
                  alt="AceHost Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className={`px-4 py-2 rounded-md text-sm font-semibold relative ${
                    currentPage === link.url
                      ? "text-black border-b-2 border-black"
                      : "text-gray-700 hover:text-black transition-colors duration-300 group"
                  }`}
                >
                  {link.text}
                  {currentPage !== link.url && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  )}
                </Link>
              ))}

              {/* Resources Dropdown */}
              <div className="relative" ref={resourcesRef}>
                <button
                  onMouseEnter={() => setShowResourcesDropdown(true)}
                  onClick={() =>
                    setShowResourcesDropdown(!showResourcesDropdown)
                  }
                  className={`px-4 py-2 rounded-md text-sm font-semibold flex items-center relative ${
                    currentPage === "/resources"
                      ? "text-black border-b-2 border-black"
                      : "text-gray-700 hover:text-black transition-colors duration-300 group"
                  }`}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  {currentPage !== "/resources" && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  )}
                </button>

                {/* Desktop Dropdown */}
                {showResourcesDropdown && (
                  <div
                    className="absolute top-full right-0 w-[960px] bg-white shadow-lg z-50 py-8 px-8 -mr-24 mt-2 hidden lg:block"
                    onMouseLeave={() => setShowResourcesDropdown(false)}
                  >
                    <div className="grid grid-cols-12 gap-6">
                      {/* Left column */}
                      <div className="col-span-3">
                        <h3 className="text-sm font-semibold mb-3 pb-2 border-b border-gray-200">
                          Featured Blog Article
                        </h3>
                        <div className="mb-6">
                          <div className="mb-3 rounded-md overflow-hidden">
                            <Link href={allArticles[0].link} onClick={() => setShowResourcesDropdown(false)}>
                              <Image
                                src={allArticles[0].coverImage}
                                alt={allArticles[0].title}
                                width={300}
                                height={150}
                                className="w-full h-36 object-cover"
                              />
                            </Link>
                          </div>
                          <Link href={allArticles[0].link} onClick={() => setShowResourcesDropdown(false)}>
                            <h4 className="text-base font-bold leading-tight hover:text-blue-600 transition-colors duration-300">
                              {allArticles[0].title}
                            </h4>
                          </Link>
                        </div>

                        <h3 className="text-sm font-semibold mb-3 pb-2 border-b border-gray-200">
                          More Resources
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-gray-400 mr-1" />
                            <Link
                              href="/blogs"
                              className="text-sm text-gray-600 hover:text-gray-900 hover:underline py-1"
                              onClick={() => setShowResourcesDropdown(false)}
                            >
                              All Blogs
                            </Link>
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-gray-400 mr-1" />
                            <Link
                              href="/faq"
                              className="text-sm text-gray-600 hover:text-gray-900 hover:underline py-1"
                              onClick={() => setShowResourcesDropdown(false)}
                            >
                              FAQ's
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Middle column - Blog Posts */}
                      <div className="col-span-6 border-l border-gray-100 pl-6">
                        <h3 className="text-sm font-semibold mb-3 pb-2 border-b border-gray-200">
                          More Blogs
                        </h3>

                        {/* Blog entries */}
                        <div className="space-y-4 mb-6">
                          {/* Blog 1 */}
                          <Link
                            href="/post/luxury-property-management-investment-opportunities-in-whistler"
                            onClick={() => setShowResourcesDropdown(false)}
                            className="flex gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300"
                          >
                            <div className="flex-shrink-0 w-32 overflow-hidden rounded-md">
                              <Image
                                src="/photos/homepage/resources/WhisterPropertyManagment.jpg"
                                alt="Whistler Property"
                                width={128}
                                height={96}
                                className="w-full h-24 object-cover rounded-md transform group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-grow">
                              <h4 className="font-semibold text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300">
                                Acehost Whistler Property Management Services
                              </h4>
                              <p className="text-xs text-gray-600 leading-tight">
                                AceHost Whistler's guide on property
                                management services and why Whistler's
                                best property managers are key.
                              </p>
                            </div>
                          </Link>

                          {/* Blog 2 */}
                          <Link
                            href="/post/discover-the-ultimate-ski-in-ski-out-luxury-chalet-homes-in-whistler-canada"
                            onClick={() => setShowResourcesDropdown(false)}
                            className="flex gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300"
                          >
                            <div className="flex-shrink-0 w-32 overflow-hidden rounded-md">
                              <Image
                                src="/photos/homepage/resources/DiscoverUltimate.jpg"
                                alt="Ski Chalet"
                                width={128}
                                height={96}
                                className="w-full h-24 object-cover rounded-md transform group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-grow">
                              <h4 className="font-semibold text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300">
                                Discover the Ultimate Ski-in Ski-out Luxury
                                Chalet Homes in Whistler, Canada
                              </h4>
                              <p className="text-xs text-gray-600 leading-tight">
                                Staying in a Luxury Ski in Ski out Chalet Rental
                                can have a major impact on your vacation in
                                Whistler or any ski town.
                              </p>
                            </div>
                          </Link>

                          {/* Blog 3 */}
                          <Link
                            href="/post/luxury-whistler-vacation-redefined-how-acehost-whistler-caters-to-the-1-in-canadas-ultimate-playground"
                            onClick={() => setShowResourcesDropdown(false)}
                            className="flex gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-all duration-300"
                          >
                            <div className="flex-shrink-0 w-32 overflow-hidden rounded-md">
                              <Image
                                src="/photos/homepage/resources/LuxuryWhistlerRedefined.jpg"
                                alt="Luxury Whistler"
                                width={128}
                                height={96}
                                className="w-full h-24 object-cover rounded-md transform group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-grow">
                              <h4 className="font-semibold text-sm mb-1 group-hover:text-blue-600 transition-colors duration-300">
                                Luxury Whistler Vacation Redefined: How AceHost
                                Whistler Caters to the 1% in Canada's
                                Ultimate Playground
                              </h4>
                              <p className="text-xs text-gray-600 leading-tight">
                                In recent years, a different kind of traveler
                                has made Whistler their go-to destination—one
                                seeking not just the thrill of alpine sports.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Right column - YouTube Videos */}
                      <div className="col-span-3 border-l border-gray-100 pl-6">
                        <h3 className="text-sm font-semibold mb-3 pb-2 border-b border-gray-200">
                          YouTube Videos
                        </h3>

                        {/* Video thumbnails vertical layout */}
                        <div className="space-y-3 mb-6">
                          {/* Video 1 */}
                          <Link
                            href="https://www.youtube.com/watch?v=BKK5X_LPd8k"
                            target="_blank"
                            className="block group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
                          >
                            <div className="w-full h-20 rounded-md overflow-hidden mb-1 relative">
                              <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/BKK5X_LPd8k?autoplay=1&mute=1&playsinline=1&loop=1&playlist=BKK5X_LPd8k&controls=0&showinfo=0&modestbranding=1"
                                title="The Dream Luxury Whistler Vacation"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                className="w-full h-full pointer-events-none"
                              ></iframe>
                              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            </div>
                            <h5 className="text-xs font-medium leading-tight mt-1 group-hover:text-blue-600 transition-colors">
                              The Dream Luxury Whistler Vacation!
                            </h5>
                            <p className="text-[10px] text-gray-500">
                              AceHost Whistler Experience Promo
                            </p>
                          </Link>

                          {/* Video 2 */}
                          <Link
                            href="https://www.youtube.com/watch?v=GOzVT9x08sc"
                            target="_blank"
                            className="block group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
                          >
                            <div className="w-full h-20 rounded-md overflow-hidden mb-1 relative">
                              <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/GOzVT9x08sc?autoplay=1&mute=1&playsinline=1&loop=1&playlist=GOzVT9x08sc&controls=0&showinfo=0&modestbranding=1"
                                title="Luxury Chalet Tour"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                className="w-full h-full pointer-events-none"
                              ></iframe>
                              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            </div>
                            <h5 className="text-xs font-medium leading-tight mt-1 group-hover:text-blue-600 transition-colors">
                              Tour a Luxury Ski Chalet in Whistler
                            </h5>
                            <p className="text-[10px] text-gray-500">
                              AceHost Chalet La Forja Showcase
                            </p>
                          </Link>

                          {/* Video 3 */}
                          <Link
                            href="https://www.youtube.com/watch?v=cNHhE2B8Zeo"
                            target="_blank"
                            className="block group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
                          >
                            <div className="w-full h-16 rounded-md overflow-hidden mb-1 relative">
                              <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/cNHhE2B8Zeo?autoplay=1&mute=1&playsinline=1&loop=1&playlist=cNHhE2B8Zeo&controls=0&showinfo=0&modestbranding=1"
                                title="The Ultimate Luxury Whistler Chalet Winter Road Trip"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                className="w-full h-full pointer-events-none"
                              ></iframe>
                              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            </div>
                            <h5 className="text-xs font-medium leading-tight mt-1 group-hover:text-blue-600 transition-colors">
                              The Ultimate Luxury Whistler Chalet Winter Road
                              Trip
                            </h5>
                            <p className="text-[10px] text-gray-500">
                              Whistler, BC, Canada | Chalet La Forja
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="ml-2 px-5 py-2 bg-black text-white rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fixed position with overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={mobileMenuRef}
            className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-white shadow-lg z-40 overflow-y-auto max-h-[calc(100vh-5rem)]"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center py-3 px-4 rounded-md text-base ${
                    currentPage === link.url
                      ? "bg-gray-100 text-black font-semibold"
                      : "text-gray-700 hover:text-black hover:bg-gray-50 transition-all"
                  }`}
                >
                  {link.text}
                </Link>
              ))}

              {/* Resources Dropdown Mobile */}
              <div className="rounded-md overflow-hidden">
                <button
                  onClick={() =>
                    setShowMobileResourcesDropdown(!showMobileResourcesDropdown)
                  }
                  className={`flex justify-between items-center w-full py-3 px-4 rounded-md text-base ${
                    currentPage === "/resources"
                      ? "bg-gray-100 text-black font-semibold"
                      : "text-gray-700 hover:text-black hover:bg-gray-50 transition-all"
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      showMobileResourcesDropdown ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {showMobileResourcesDropdown && (
                  <div className="mt-1 ml-4 pl-4 border-l-2 border-gray-100 space-y-2">
                    <Link
                      href="/blogs"
                      onClick={() => {
                        setShowMobileResourcesDropdown(false);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center py-3 px-4 text-base text-gray-600 hover:text-black rounded-md"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      All Blogs
                    </Link>
                    <Link
                      href="/faq"
                      onClick={() => {
                        setShowMobileResourcesDropdown(false);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center py-3 px-4 text-base text-gray-600 hover:text-black rounded-md"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      FAQ's
                    </Link>
                    <Link
                      href="/post/luxury-property-management-investment-opportunities-in-whistler"
                      onClick={() => {
                        setShowMobileResourcesDropdown(false);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center py-3 px-4 text-base text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Whistler Property Management
                    </Link>
                    <Link
                      href="/post/discover-the-ultimate-ski-in-ski-out-luxury-chalet-homes-in-whistler-canada"
                      onClick={() => {
                        setShowMobileResourcesDropdown(false);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center py-3 px-4 text-base text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Ski-in Ski-out Luxury Chalets
                    </Link>
                    <Link
                      href="/post/luxury-whistler-vacation-redefined-how-acehost-whistler-caters-to-the-1-in-canadas-ultimate-playground"
                      onClick={() => {
                        setShowMobileResourcesDropdown(false);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center py-3 px-4 text-base text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Luxury Whistler Vacation
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center py-4 px-4 mt-4 text-center bg-black text-white rounded-md text-base font-medium"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
