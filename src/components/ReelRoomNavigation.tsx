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
    
    // Prevent body scroll when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
            <NavLink href="/reservations">Reservations</NavLink>
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
      
      {/* Mobile Menu - Improved animation and accessibility */}
      <div 
        className={`
          md:hidden fixed inset-0 z-40 bg-black transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)'
        }}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={closeMobileMenu}
            className="text-white p-2 w-10 h-10 flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-6 w-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
        
        <nav className="flex flex-col mt-8 px-4">
          <NavLink href="/" mobile onClick={closeMobileMenu}>Home</NavLink>
          <NavLink href="/experiences" mobile onClick={closeMobileMenu}>Experiences & Pricing</NavLink>
          <NavLink href="/reservations" mobile onClick={closeMobileMenu}>Reservations</NavLink>
          <NavLink href="/media" mobile onClick={closeMobileMenu}>Media & FAQs</NavLink>
          <NavLink href="/blog" mobile onClick={closeMobileMenu}>Reel Room Blog</NavLink>
        </nav>
        
        <div className="mt-8 px-8 py-4 text-center md:text-left">
          <p className="text-gray-300 mb-2">Contact:</p>
          <a href="mailto:info@reelroom.ca" className="text-white hover:text-brand-gold hover:underline transition-colors block py-2">info@reelroom.ca</a>
          <p className="text-gray-300 mt-4">Located in Mount Pleasant, BC</p>
        </div>
      </div>
    </header>
  );
};

export default ReelRoomNavigation; 