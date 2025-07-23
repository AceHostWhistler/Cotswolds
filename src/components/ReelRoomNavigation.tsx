import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { scrollToTop } from '@/utils/scrollUtils';
import CalendlyPopupLink from './CalendlyPopupLink';

export default function ReelRoomNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Detect iOS devices
  useEffect(() => {
    const detectIOS = () => {
      try {
        if (typeof window === 'undefined' || !window.navigator) return;
        
        const userAgent = navigator.userAgent.toLowerCase();
        const isIOSDevice = 
          /iphone|ipod|ipad/i.test(userAgent) || 
          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
          /iPhone|iPad|iPod/.test(navigator.userAgent);
        setIsIOS(isIOSDevice);
      } catch (error) {
        console.error("Error detecting iOS device:", error);
      }
    };
    
    detectIOS();
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      scrollToTop(); // Scroll to top when navigating
    };
    
    // Using any type to bypass TypeScript error since NextRouter events are not properly typed
    const routerWithEvents = router as any;
    if (routerWithEvents.events) {
      routerWithEvents.events.on('routeChangeComplete', handleRouteChange);
      
      return () => {
        routerWithEvents.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    scrollToTop(); // Scroll to top when clicking a navigation link
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-black/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={handleNavLinkClick} className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="The Reel Room" 
                className="h-10 w-10"
                style={{ 
                  background: 'black',
                  display: 'block'
                }}
              />
              <span className="ml-3 text-white text-xl font-light tracking-wider heading-font">REEL ROOM</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              onClick={handleNavLinkClick}
              className={`heading-font text-sm uppercase tracking-widest text-white hover:text-brand-gold transition-colors ${router.pathname === '/' ? 'text-brand-gold' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/experiences" 
              onClick={handleNavLinkClick}
              className={`heading-font text-sm uppercase tracking-widest text-white hover:text-brand-gold transition-colors ${router.pathname === '/experiences' ? 'text-brand-gold' : ''}`}
            >
              Experiences & Pricing
            </Link>
            <Link 
              href="/blog" 
              onClick={handleNavLinkClick}
              className={`heading-font text-sm uppercase tracking-widest text-white hover:text-brand-gold transition-colors ${router.pathname === '/blog' ? 'text-brand-gold' : ''}`}
            >
              Blog
            </Link>
            <Link 
              href="/media" 
              onClick={handleNavLinkClick}
              className={`heading-font text-sm uppercase tracking-widest text-white hover:text-brand-gold transition-colors ${router.pathname === '/media' ? 'text-brand-gold' : ''}`}
            >
              Media & FAQs
            </Link>
            <Link 
              href="/book-now" 
              onClick={handleNavLinkClick}
              className="heading-font text-sm uppercase tracking-widest bg-brand-gold text-black px-4 py-2 hover:bg-white transition-colors"
            >
              Book Now
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 bg-black/95 backdrop-blur-md space-y-1 sm:px-3">
          <Link 
            href="/"
            onClick={handleNavLinkClick}
            className={`block px-3 py-2 text-base font-medium text-white hover:text-brand-gold transition-colors ${router.pathname === '/' ? 'text-brand-gold' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/experiences"
            onClick={handleNavLinkClick}
            className={`block px-3 py-2 text-base font-medium text-white hover:text-brand-gold transition-colors ${router.pathname === '/experiences' ? 'text-brand-gold' : ''}`}
          >
            Experiences & Pricing
          </Link>
          <Link 
            href="/blog"
            onClick={handleNavLinkClick}
            className={`block px-3 py-2 text-base font-medium text-white hover:text-brand-gold transition-colors ${router.pathname === '/blog' ? 'text-brand-gold' : ''}`}
          >
            Blog
          </Link>
          <Link 
            href="/media"
            onClick={handleNavLinkClick}
            className={`block px-3 py-2 text-base font-medium text-white hover:text-brand-gold transition-colors ${router.pathname === '/media' ? 'text-brand-gold' : ''}`}
          >
            Media & FAQs
          </Link>
          <Link 
            href="/book-now"
            onClick={handleNavLinkClick}
            className="block px-3 py-2 text-base font-medium bg-brand-gold text-black hover:bg-white transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
} 