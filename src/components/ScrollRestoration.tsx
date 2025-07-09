import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/**
 * ScrollRestoration component to ensure pages start from the top when navigating
 * This is a separate component to handle scroll restoration in a more reliable way
 */
export default function ScrollRestoration() {
  const router = useRouter();
  const [isIOS, setIsIOS] = useState(false);

  // Detect iOS on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const isIOSDevice = 
        /iphone|ipod|ipad/i.test(userAgent) || 
        (window.navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
        /iPhone|iPad|iPod/.test(window.navigator.userAgent);
      
      setIsIOS(isIOSDevice);
    }
  }, []);

  useEffect(() => {
    // Handle scroll restoration
    const handleRouteChangeComplete = () => {
      // Scroll to top with a slight delay to ensure DOM is fully updated
      // Use a longer delay for iOS devices which may need more time
      const delay = isIOS ? 300 : 100;
      
      setTimeout(() => {
        // Use multiple methods to ensure scroll restoration works across browsers
        if (typeof window !== 'undefined') {
          // Method 1: Standard scroll
          window.scrollTo(0, 0);
          
          // Method 2: For iOS Safari
          if (isIOS) {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            
            // Additional fix for stubborn iOS cases - force layout recalculation
            document.body.style.display = 'none';
            document.body.offsetHeight; // Trigger reflow
            document.body.style.display = '';
          }
        }
      }, delay);
    };

    // Handle initial page load
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    // Using any type to bypass TypeScript error since NextRouter events are not properly typed
    const routerWithEvents = router as any;
    
    if (routerWithEvents.events) {
      // Add event listeners for all route change events
      routerWithEvents.events.on('routeChangeComplete', handleRouteChangeComplete);
      routerWithEvents.events.on('routeChangeStart', () => {
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
      });
      
      // Clean up event listeners
      return () => {
        routerWithEvents.events.off('routeChangeComplete', handleRouteChangeComplete);
        routerWithEvents.events.off('routeChangeStart', () => {
          if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
          }
        });
      };
    }
  }, [router, isIOS]);

  // This component doesn't render anything
  return null;
} 