import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

interface CalendlyWidgetProps {
  className?: string;
  url?: string;
  height?: number;
  lazyLoad?: boolean;
  position?: 'bottom' | 'normal';
  showOnlyWhenScrolledTo?: boolean;
  onError?: () => void;
}

// Create a flag to track if the script has been loaded
let calendlyScriptLoaded = false;

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  className = '', 
  url = 'https://calendly.com/reelroom-info?primary_color=f7be01&hide_gdpr_banner=1',
  height = 700,
  lazyLoad = true,
  position = 'normal',
  showOnlyWhenScrolledTo = true,
  onError
}) => {
  // Create a ref for the widget container
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [shouldRender, setShouldRender] = useState(!showOnlyWhenScrolledTo);
  const [hasError, setHasError] = useState(false);
  const initializationAttempts = useRef(0);

  // Handle errors consistently
  const handleError = (error: any, errorSource: string) => {
    console.error(`CalendlyWidget error (${errorSource}):`, error);
    setHasError(true);
    if (onError && typeof onError === 'function') {
      onError();
    }
  };

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
      handleError(error, 'iOS detection');
    }
  }, []);

  // Set up intersection observer for lazy loading and visibility
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    
    try {
      // If IntersectionObserver is not available, just render the widget
      if (!window.IntersectionObserver) {
        setIsInView(true);
        setShouldRender(true);
        return;
      }
      
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
      handleError(error, 'intersection observer');
      // Fallback behavior - just show the widget
      setIsInView(true);
      setShouldRender(true);
    }
  }, [lazyLoad, showOnlyWhenScrolledTo]);

  // Function to safely initialize the Calendly widget
  const initializeCalendlyWidget = () => {
    if (typeof window === 'undefined') return false;
    if (!window.Calendly) return false;
    if (!widgetRef.current) return false;
    if (!shouldRender) return false;
    
    try {
      initializationAttempts.current += 1;
      
      // Check for too many attempts and bail if needed
      if (initializationAttempts.current > 5) {
        throw new Error('Too many initialization attempts');
      }
      
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
      handleError(error, 'widget initialization');
      return false;
    }
  };

  // Load the Calendly script and initialize the widget
  useEffect(() => {
    // Don't load Calendly if we shouldn't render yet
    if (!shouldRender || typeof window === 'undefined') return;
    
    // Don't load if not in view and using lazy loading
    if (lazyLoad && !isInView) return;

    let isMounted = true;

    // Function to load Calendly script
    const loadCalendlyScript = () => {
      try {
        // Don't load script if it's already loading or loaded
        if (document.querySelector('script[src*="assets.calendly.com/assets/external/widget.js"]')) {
          calendlyScriptLoaded = true;
          return;
        }
        
        // Create script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        
        // Add onload handler to track when script is loaded
        script.onload = () => {
          calendlyScriptLoaded = true;
          if (!isMounted) return;
          
          // Give Calendly time to initialize before we use it
          setTimeout(() => {
            if (!isMounted) return;
            initializeCalendlyWidget();
          }, 300);
        };
        
        script.onerror = (error) => {
          if (!isMounted) return;
          handleError(error, 'script loading');
        };
        
        // Append to document
        document.head.appendChild(script);
      } catch (error) {
        if (!isMounted) return;
        handleError(error, 'script creation');
      }
    };

    // Either load script or initialize widget if script already loaded
    if (!calendlyScriptLoaded) {
      loadCalendlyScript();
    } else if (window.Calendly && !hasInitialized) {
      setTimeout(() => {
        if (!isMounted) return;
        initializeCalendlyWidget();
      }, 100);
    }

    return () => {
      isMounted = false;
    };
  }, [url, isInView, hasInitialized, shouldRender, lazyLoad]);

  // Safe resize handler for mobile devices
  useEffect(() => {
    if (!shouldRender || !isInView || !hasInitialized || typeof window === 'undefined') return;
    
    let isMounted = true;
    
    try {
      const handleResize = () => {
        if (!isMounted || !window.Calendly) return;
        
        // Use setTimeout to debounce and avoid excessive reinitializations
        setTimeout(() => {
          if (isMounted && window.Calendly) {
            initializeCalendlyWidget();
          }
        }, 300);
      };

      // Add resize event listener with debouncing
      let resizeTimeout: ReturnType<typeof setTimeout>;
      const debouncedResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 300);
      };
      
      window.addEventListener('resize', debouncedResize);
      
      if ('onorientationchange' in window) {
        window.addEventListener('orientationchange', () => {
          if (!isMounted) return;
          setTimeout(handleResize, 500);
        });
      }
      
      // Clean up
      return () => {
        isMounted = false;
        clearTimeout(resizeTimeout);
        window.removeEventListener('resize', debouncedResize);
        if ('onorientationchange' in window) {
          window.removeEventListener('orientationchange', handleResize);
        }
      };
    } catch (error) {
      handleError(error, 'resize handler');
    }
  }, [url, isInView, hasInitialized, shouldRender]);

  // iOS specific fix for Calendly popup
  useEffect(() => {
    if (!shouldRender || !isInView || !hasInitialized || typeof window === 'undefined') return;
    if (!isIOS) return;
    
    let isMounted = true;
    
    try {
      // Try to fix iOS-specific issues with Calendly
      const fixIOSDisplay = () => {
        if (!isMounted || !widgetRef.current) return;
        
        // Add a class specifically for iOS
        widgetRef.current.classList.add('ios-calendly-widget');
        
        // Re-initialize on visible widgets with delay
        if (isInView && window.Calendly) {
          setTimeout(() => {
            if (isMounted && window.Calendly) {
              initializeCalendlyWidget();
            }
          }, 200);
        }
      };
      
      // Apply fix on initial load and after delays
      fixIOSDisplay();
      
      // Set a timeout to check again after everything has settled
      const timeoutId = setTimeout(fixIOSDisplay, 1000);
      
      return () => {
        isMounted = false;
        clearTimeout(timeoutId);
      };
    } catch (error) {
      handleError(error, 'iOS fixes');
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
            overflow: hidden !important;
          }
          
          .calendly-inline-widget iframe {
            width: 100%;
            height: 100%;
            min-height: ${height}px;
          }
          
          .ios-calendly-widget {
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
          }
          
          @supports (-webkit-touch-callout: none) {
            /* iOS Safari specific CSS */
            .calendly-inline-widget {
              min-height: ${height}px;
              -webkit-overflow-scrolling: touch;
            }
            
            /* Position at bottom option for iOS */
            .calendly-bottom-fixed {
              position: ${position === 'bottom' ? 'relative' : 'static'};
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
          height: height,
          width: '100%',
          position: 'relative',
          opacity: isLoaded ? 1 : 0.5,
          transition: 'opacity 0.3s ease'
        }}
      >
        {!isLoaded && (
          <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 bg-gray-50 bg-opacity-70 z-10">
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