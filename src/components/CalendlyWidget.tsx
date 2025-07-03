import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

interface CalendlyWidgetProps {
  className?: string;
  url?: string;
  height?: number;
  lazyLoad?: boolean;
  position?: 'bottom' | 'normal';
}

// Create a flag to track if the script has been loaded
let calendlyScriptLoaded = false;

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  className = '', 
  url = 'https://calendly.com/reelroom-info?primary_color=f7be01&hide_gdpr_banner=1',
  height = 700,
  lazyLoad = true,
  position = 'normal'
}) => {
  // Create a ref for the widget container
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazyLoad);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Detect iOS devices - more comprehensive detection
  useEffect(() => {
    const detectIOS = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOSDevice = 
        /iphone|ipod|ipad/i.test(userAgent) || 
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
        /iPhone|iPad|iPod/.test(navigator.userAgent);
      setIsIOS(isIOSDevice);
    };
    
    detectIOS();
  }, []);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (!lazyLoad) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '200px' // Load earlier for better UX
    });
    
    if (widgetRef.current) {
      observer.observe(widgetRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [lazyLoad]);

  // Function to safely initialize the Calendly widget
  const initializeCalendlyWidget = () => {
    if (!window.Calendly || !widgetRef.current) return false;
    
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
      return false;
    }
  };

  useEffect(() => {
    if (!isInView) return;

    // Function to load Calendly script
    const loadCalendlyScript = () => {
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
      
      // Append to document
      document.head.appendChild(script);
    };

    // Only load the script once across all widgets
    if (!calendlyScriptLoaded) {
      loadCalendlyScript();
    } else if (window.Calendly && !hasInitialized) {
      // If script already loaded but widget not initialized
      setTimeout(initializeCalendlyWidget, 100);
    }
  }, [url, isInView, hasInitialized]);

  // Add a resize handler for mobile devices
  useEffect(() => {
    if (!isInView || !hasInitialized) return;
    
    const handleResize = () => {
      // Only reinitialize if significant resize happens (orientation change)
      initializeCalendlyWidget();
    };

    // Add resize and orientation change listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
      // Small delay after orientation change for better results
      setTimeout(handleResize, 300);
    });
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [url, isInView, hasInitialized]);

  // iOS specific fix for Calendly popup
  useEffect(() => {
    if (!isInView || !hasInitialized) return;
    
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
  }, [isIOS, isInView, hasInitialized]);

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
              transform: scale(1) !important;
              -webkit-transform: scale(1) !important;
            }
            
            /* Position at bottom option for iOS to prevent overlap issues */
            .calendly-bottom-fixed {
              position: ${position === 'bottom' ? 'fixed' : 'relative'} !important;
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
        className={`calendly-inline-widget ${isIOS && position === 'bottom' ? 'calendly-bottom-fixed' : ''} ${className}`} 
        data-url={url} 
        style={{ 
          minWidth: 320, 
          height: isIOS ? (position === 'bottom' ? 'auto' : height) : height,
          maxHeight: isIOS && position === 'bottom' ? '80vh' : 'none',
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