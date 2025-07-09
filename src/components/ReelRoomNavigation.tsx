import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile = false, onClick }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  
  return (
    <Link 
      href={href}
      className={`
        ${mobile 
          ? 'block w-full text-center py-4 px-6 text-lg' 
          : 'px-3 py-3 sm:px-4 sm:py-2'} 
        ${isActive 
          ? 'text-white font-semibold border-b-2 border-brand-gold' 
          : 'text-white hover:text-brand-gold'}
        transition-colors duration-200 tracking-wide text-sm uppercase
      `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const ReelRoomNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setIsPageLoaded(true);
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      closeMobileMenu();
    };

    if (router && 'events' in router) {
      // @ts-ignore - Next.js router types are sometimes inconsistent
      router.events.on('routeChangeStart', handleRouteChange);
      
      return () => {
        // @ts-ignore - Next.js router types are sometimes inconsistent
        router.events.off('routeChangeStart', handleRouteChange);
      };
    }
    
    return undefined;
  }, [router]);
  
  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      setIsMobileMenuOpen(true);
    } else {
      closeMobileMenu();
    }
  };
  
  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = '';
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <header 
        className={`
          fixed w-full z-[999] transition-all duration-300
          ${isScrolled 
            ? 'bg-black shadow-md py-1 sm:py-2' 
            : 'bg-black py-2 sm:py-4'}
          ${!isPageLoaded ? 'opacity-0' : 'opacity-100'}
        `}
        style={{
          top: 0,
          left: 0,
          right: 0
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center py-2" onClick={closeMobileMenu}>
              <img 
                src="/favicons/Logo Reel Room.png" 
                alt="The Reel Room" 
                className="h-8 sm:h-10 w-auto"
                style={{ display: 'block' }}
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/experiences">Experiences</NavLink>
              <NavLink href="/reservations">Book Now</NavLink>
              <NavLink href="/media">Media & FAQs</NavLink>
              <NavLink href="/blog">Blog</NavLink>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex items-center justify-center w-12 h-12 rounded-md bg-black border border-brand-gold/30" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="h-8 w-8 text-brand-gold"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black z-[1000]"
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            paddingTop: '5rem'
          }}
        >
          <nav className="flex flex-col items-center space-y-6 p-6 text-center">
            <NavLink href="/" mobile onClick={closeMobileMenu}>Home</NavLink>
            <NavLink href="/experiences" mobile onClick={closeMobileMenu}>Experiences</NavLink>
            <NavLink href="/reservations" mobile onClick={closeMobileMenu}>Book Now</NavLink>
            <NavLink href="/media" mobile onClick={closeMobileMenu}>Media & FAQs</NavLink>
            <NavLink href="/blog" mobile onClick={closeMobileMenu}>Blog</NavLink>
          </nav>
          
          <div className="mt-auto p-6 text-center">
            <p className="text-white/70 text-sm mb-4">
              The Reel Room | Vancouver's Premier Private Theatre
            </p>
            <a 
              href="mailto:info@reelroom.ca"
              className="text-white/90 hover:text-brand-gold transition-colors text-lg"
            >
              info@reelroom.ca
            </a>
          </div>
          
          {/* Close button */}
          <button 
            className="absolute top-6 right-4 text-brand-gold p-2 bg-black rounded-md border border-brand-gold/30" 
            onClick={closeMobileMenu}
            aria-label="Close menu"
            style={{
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ReelRoomNavigation; 