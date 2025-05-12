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
        ${mobile ? 'block py-3 px-4' : 'px-4 py-2'} 
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
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header 
      className={`
        fixed w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-black/50 backdrop-blur-sm py-4'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/favicons/Logo Reel Room.png" 
              alt="The Reel Room" 
              className="h-10 w-auto"
              style={{ display: 'block' }}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/experiences">Experiences & Pricing</NavLink>
            <NavLink href="/reservations">Reservations</NavLink>
            <NavLink href="/media">Media & FAQs</NavLink>
            <NavLink href="/blog">Reel Room Blog</NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
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
      <div 
        className={`
          md:hidden fixed inset-0 z-40 bg-black transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={closeMobileMenu}
            className="text-white"
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
        
        <div className="mt-8 px-8 py-4">
          <p className="text-gray-300 mb-2">Contact:</p>
          <a href="mailto:info@reelroom.ca" className="text-white hover:text-brand-gold hover:underline transition-colors">info@reelroom.ca</a>
          <p className="text-gray-300 mt-4">Located in Mount Pleasant, BC</p>
        </div>
      </div>
    </header>
  );
};

export default ReelRoomNavigation; 