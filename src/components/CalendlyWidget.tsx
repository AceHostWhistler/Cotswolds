import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

interface CalendlyWidgetProps {
  className?: string;
  url?: string;
  height?: number;
  lazyLoad?: boolean;
  position?: 'bottom' | 'normal';
  showOnlyWhenScrolledTo?: boolean;
}

// Create a flag to track if the script has been loaded
let calendlyScriptLoaded = false;

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  className = '', 
  url = 'https://calendly.com/reelroom-info?primary_color=f7be01&hide_gdpr_banner=1',
  height = 700,
  lazyLoad = true,
  position = 'normal',
  showOnlyWhenScrolledTo = true
}) => {
  // Create a ref for the widget container
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [shouldRender, setShouldRender] = useState(!showOnlyWhenScrolledTo);
  const [hasError, setHasError] = useState(false);

  // Detect iOS devices - more comprehensive detection
  useEffect(() => {
    try {
      const detectIOS = () => {
        if (typeof window === 'undefined' || !window.navigator) return false;
        
        const userAgent = navigator.userAgent.toLowerCase();
        const isIOSDevice = 
          /iphone|ipod|ipad/i.test(userAgent) || 
          (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
          /iPhone|iPad|iPod/.test(navigator.userAgent) ||
          ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform);
        
        setIsIOS(isIOSDevice);
      };
      
      detectIOS();
    } catch (error) {
      console.error("Error detecting iOS:", error);
      setHasError(true);
    }
  }, []);

  // Set up intersection observer for lazy loading and visibility
  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      // If IntersectionObserver is not available, just render the widget
      setIsInView(true);
      setShouldRender(true);
      return;
    }
    
    try {
      // Always observe for visibility when showOnlyWhenScrolledTo is true
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // If we're showing only when scrolled to, now is the time to render
            if (showOnlyWhenScrolledTo) {
              setShouldRender(true);
            }
            
            // If not using lazyLoad, disconnect after first intersection
            if (!lazyLoad) {
              observer.disconnect();
            }
          } else {
            // When scrolling away, update isInView state
            setIsInView(false);
          }
        });
      }, { 
        threshold: 0.1,
        rootMargin: '100px' // Load slightly before scrolling into view
      });
      
      if (widgetRef.current) {
        observer.observe(widgetRef.current);
      }
      
      return () => {
        observer.disconnect();
      };
    } catch (error) {
      console.error("Error setting up intersection observer:", error);
      setIsInView(true);
      setShouldRender(true);
      setHasError(true);
    }
  }, [lazyLoad, showOnlyWhenScrolledTo]);

  // Function to safely initialize the Calendly widget
  const initializeCalendlyWidget = () => {
    if (typeof window === 'undefined' || !window.Calendly || !widgetRef.current || !shouldRender) return false;
    
    try {
      // Clear any previous widget initialization
      while (widgetRef.current.firstChild) {
        widgetRef.current.removeChild(widgetRef.current.firstChild);
      }
      
      // Initialize with iOS-specific options if needed
      window.Calendly.initInlineWidget({
        url: url,
        parentElement: widgetRef.current,
        prefill: {},
        utm: {}
      });
      
      setIsLoaded(true);
      setHasInitialized(true);
      return true;
    } catch (error) {
      console.error('Failed to initialize Calendly widget:', error);
      setHasError(true);
      return false;
    }
  };

  useEffect(() => {
    // Don't load Calendly if we shouldn't render yet
    if (!shouldRender || typeof window === 'undefined') return;
    
    // Don't load if not in view and using lazy loading
    if (lazyLoad && !isInView) return;

    // Function to load Calendly script
    const loadCalendlyScript = () => {
      try {
        // Create script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.defer = false;
        
        // Add onload handler to track when script is loaded
        script.onload = () => {
          calendlyScriptLoaded = true;
          // Initialize widget after script is loaded with retry logic
          let attempts = 0;
          const maxAttempts = 3;
          
          const tryInitialize = () => {
            if (attempts >= maxAttempts) return;
            
            if (!initializeCalendlyWidget()) {
              attempts++;
              setTimeout(tryInitialize, 500);
            }
          };
          
          setTimeout(tryInitialize, 100);
        };
        
        script.onerror = (error) => {
          console.error("Error loading Calendly script:", error);
          setHasError(true);
        };
        
        // Append to document
        document.head.appendChild(script);
      } catch (error) {
        console.error("Error loading Calendly script:", error);
        setHasError(true);
      }
    };

    // Only load the script once across all widgets
    if (!calendlyScriptLoaded) {
      loadCalendlyScript();
    } else if (window.Calendly && !hasInitialized) {
      // If script already loaded but widget not initialized
      setTimeout(initializeCalendlyWidget, 100);
    }
  }, [url, isInView, hasInitialized, shouldRender, lazyLoad]);

  // Add a resize handler for mobile devices
  useEffect(() => {
    if (!shouldRender || !isInView || !hasInitialized || typeof window === 'undefined') return;
    
    try {
      const handleResize = () => {
        // Only reinitialize if significant resize happens (orientation change)
        initializeCalendlyWidget();
      };

      // Add resize and orientation change listeners
      window.addEventListener('resize', handleResize);
      
      if ('onorientationchange' in window) {
        window.addEventListener('orientationchange', () => {
          // Small delay after orientation change for better results
          setTimeout(handleResize, 300);
        });
      }
      
      // Clean up
      return () => {
        window.removeEventListener('resize', handleResize);
        if ('onorientationchange' in window) {
          window.removeEventListener('orientationchange', handleResize);
        }
      };
    } catch (error) {
      console.error("Error setting up resize handlers:", error);
      setHasError(true);
    }
  }, [url, isInView, hasInitialized, shouldRender]);

  // iOS specific fix for Calendly popup
  useEffect(() => {
    if (!shouldRender || !isInView || !hasInitialized || typeof window === 'undefined') return;
    
    try {
      if (isIOS) {
        // Try to fix iOS-specific issues with Calendly
        const fixIOSDisplay = () => {
          // Force Calendly to redraw for iOS
          if (widgetRef.current) {
            // Add a class specifically for iOS
            widgetRef.current.classList.add('ios-calendly-widget');
            
            // Force reflow
            widgetRef.current.style.display = 'none';
            widgetRef.current.offsetHeight; // Trigger reflow
            widgetRef.current.style.display = '';
            
            // Re-initialize on visible widgets
            if (isInView && window.Calendly) {
              initializeCalendlyWidget();
            }
          }
        };
        
        // Apply fix on initial load and after delays
        fixIOSDisplay();
        setTimeout(fixIOSDisplay, 500);
        setTimeout(fixIOSDisplay, 2000);
        
        // Also add touch event listener for iOS to ensure proper rendering
        if (widgetRef.current) {
          const handleTouch = () => {
            if (window.Calendly) {
              initializeCalendlyWidget();
            }
          };
          
          document.addEventListener('touchend', handleTouch, {once: true});
          return () => {
            document.removeEventListener('touchend', handleTouch);
          };
        }
      }
    } catch (error) {
      console.error("Error applying iOS fixes:", error);
      setHasError(true);
    }
  }, [isIOS, isInView, hasInitialized, shouldRender]);

  // If there's an error, show a fallback
  if (hasError) {
    return (
      <div className={`bg-white rounded-lg shadow p-6 text-center ${className}`}>
        <h3 className="text-xl font-semibold mb-4">Unable to load calendar</h3>
        <p className="mb-4">Please email us to book your event:</p>
        <a 
          href="mailto:info@reelroom.ca" 
          className="inline-block px-6 py-3 bg-amber-500 text-black rounded-md font-medium hover:bg-amber-600 transition-colors"
        >
          Email info@reelroom.ca
        </a>
      </div>
    );
  }

  // If we shouldn't render yet, just show a placeholder
  if (!shouldRender) {
    return (
      <div 
        ref={widgetRef}
        className={`calendly-placeholder ${className}`}
        style={{
          minHeight: 100,
          backgroundColor: '#f9f9f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.375rem'
        }}
      >
        <p className="text-gray-500 text-center p-4">
          Scroll to view booking calendar
        </p>
      </div>
    );
  }

  return (
    <>
      <Head>
        {/* Add mobile-specific meta tag for better mobile experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        {/* Additional styles for iOS fixes */}
        <style jsx global>{`
          .calendly-inline-widget {
            min-width: 320px;
            height: ${height}px;
            width: 100%;
            overflow: hidden;
            position: relative;
            z-index: 5;
          }
          
          .calendly-inline-widget iframe {
            width: 100% !important;
            height: 100% !important;
            min-height: ${height}px !important;
            position: static !important;
          }
          
          .ios-calendly-widget {
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
          
          @supports (-webkit-touch-callout: none) {
            /* iOS Safari specific CSS */
            .calendly-inline-widget {
              min-height: ${height}px !important;
              overflow: visible !important;
              -webkit-overflow-scrolling: touch;
            }
            
            .calendly-inline-widget iframe {
              min-height: ${height + 50}px !important;
              transform: scale(0.99) !important;
              -webkit-transform: scale(0.99) !important;
              margin-top: -1px;
              margin-left: -1px;
            }
            
            /* Position at bottom option for iOS to prevent overlap issues */
            .calendly-bottom-fixed {
              position: ${position === 'bottom' ? 'relative' : 'relative'} !important;
              bottom: ${position === 'bottom' ? '0' : 'auto'} !important;
              left: 0 !important;
              right: 0 !important;
              z-index: 999 !important;
              background-color: white !important;
              border-top: 1px solid #eee !important;
              max-height: 80vh !important;
              height: auto !important;
              overflow-y: auto !important;
              -webkit-overflow-scrolling: touch !important;
            }
          }
        `}</style>
      </Head>
      <div 
        ref={widgetRef}
        className={`calendly-inline-widget ${isIOS ? 'ios-calendly-widget' : ''} ${className}`} 
        data-url={url} 
        style={{ 
          minWidth: 320, 
          height: isIOS ? (position === 'bottom' ? 'auto' : height) : height,
          maxHeight: isIOS ? '80vh' : 'none',
          width: '100%',
          overflow: isIOS ? 'auto' : 'hidden',
          WebkitOverflowScrolling: 'touch',
          position: 'relative',
          zIndex: 5,
          opacity: isLoaded ? 1 : 0.3,
          transition: 'opacity 0.3s ease',
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        {!isInView && (
          <div className="flex items-center justify-center w-full h-full bg-gray-100">
            <div className="text-center p-4">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-amber-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading calendar...</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// Add this to make TypeScript happy with the global Calendly object
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default CalendlyWidget; 