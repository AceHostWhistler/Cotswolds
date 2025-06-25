import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  
  useEffect(() => {
    setIsPageLoaded(true);
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Remove the body scroll lock to fix scrolling issues
    // We'll use a different approach for the mobile menu
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Ensure overflow is restored when component unmounts
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header 
      className={`
        fixed w-full z-50 transition-all duration-300 ios-safe-area-top
        ${isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-md py-1 sm:py-2' 
          : 'bg-black/50 backdrop-blur-sm py-2 sm:py-4'}
        ${!isPageLoaded ? 'opacity-0' : 'opacity-100'}
      `}
      style={{
        paddingTop: 'calc(env(safe-area-inset-top) + 0.5rem)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2">
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
          
          {/* Mobile Menu Button - Improved touch target */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md bg-black/50" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-6 w-6 text-white"
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
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col"
          style={{
            paddingTop: 'calc(env(safe-area-inset-top) + 5rem)',
            paddingBottom: 'env(safe-area-inset-bottom)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            overflowY: 'auto'
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
        </div>
      )}
    </header>
  );
};

export default ReelRoomNavigation; 