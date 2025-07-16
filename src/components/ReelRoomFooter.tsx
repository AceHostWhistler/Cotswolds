import React from 'react';
import Link from 'next/link';

const ReelRoomFooter: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Top section with navigation and logo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 sm:mb-12">
          {/* Logo section */}
          <div className="flex flex-col items-center md:items-start justify-center py-4 sm:py-8">
            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <div className="border border-brand-gold p-3 sm:p-4 inline-block bg-black">
                <img 
                  src="/favicons/Logo Reel Room.png" 
                  alt="Reel Room" 
                  className="h-16 sm:h-20 w-auto object-contain"
                  loading="lazy"
                  style={{ backgroundColor: 'black', display: 'block' }}
                />
              </div>
            </div>
            <p className="body-font text-gray-400 max-w-xs text-center md:text-left text-sm sm:text-base">
              Vancouver's premier private film and media production venue located in Mount Pleasant.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:ml-auto">
            <h3 className="heading-font text-xl font-light mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-0 text-center md:text-left">
              <li>
                <Link href="/" className="body-font text-gray-400 hover:text-brand-gold transition-colors block py-3 sm:py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="body-font text-gray-400 hover:text-brand-gold transition-colors block py-3 sm:py-2">
                  Experiences & Pricing
                </Link>
              </li>
              <li>
                <Link href="/book-now" className="body-font text-gray-400 hover:text-brand-gold transition-colors block py-3 sm:py-2">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/blog" className="body-font text-gray-400 hover:text-brand-gold transition-colors block py-3 sm:py-2">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="md:ml-auto">
            <h3 className="heading-font text-xl font-light mb-4 text-center md:text-left">Contact Us</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li className="body-font text-gray-400 mb-3">
                <span className="text-brand-gold block md:inline md:mr-2">Email:</span>
                <a href="mailto:info@reelroom.ca" className="hover:text-brand-gold transition-colors py-2 block md:inline">
                  info@reelroom.ca
                </a>
              </li>
              <li className="body-font text-gray-400 mb-3">
                <span className="text-brand-gold block md:inline md:mr-2">Location:</span>
                <span className="block md:inline">Mount Pleasant, Vancouver</span>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-800">
                <div className="flex justify-center md:justify-start space-x-4">
                  <a 
                    href="https://www.instagram.com/reelroom.yvr/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-gold hover:text-brand-cream transition-colors flex items-center justify-center w-12 h-12"
                    aria-label="Instagram"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@reelroom.yvr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-gold hover:text-brand-cream transition-colors flex items-center justify-center w-12 h-12"
                    aria-label="TikTok"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom copyright bar - Adding safe area padding for mobile */}
        <div className="pt-6 border-t border-gray-800 text-center" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 1rem)' }}>
          <p className="body-font text-gray-500 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Reel Room. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link href="/privacy-policy" className="body-font text-gray-500 text-xs sm:text-sm hover:text-brand-gold transition-colors py-2 px-3">
              Privacy Policy
            </Link>
            <Link href="/legal-disclaimer" className="body-font text-gray-500 text-xs sm:text-sm hover:text-brand-gold transition-colors py-2 px-3">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ReelRoomFooter; 