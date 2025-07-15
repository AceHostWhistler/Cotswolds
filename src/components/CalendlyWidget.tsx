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
let calendlyScriptLoading = false;

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  className = '', 
  url = 'https://calendly.com/reelroom-info',
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
  const [shouldRender, setShouldRender] = useState(!showOnlyWhenScrolledTo);
  const [hasError, setHasError] = useState(false);

  // Handle errors consistently
  const handleError = (errorSource: string) => {
    console.error(`CalendlyWidget error (${errorSource})`);
    setHasError(true);
    if (onError && typeof onError === 'function') {
      onError();
    }
  };

  // Detect iOS devices - simplified detection
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      
      const userAgent = window.navigator.userAgent.toLowerCase();
      const isIOSDevice = /iphone|ipad|ipod/i.test(userAgent);
      setIsIOS(isIOSDevice);
    } catch (error) {
      // Don't set error state here, just log it
      console.error("iOS detection error:", error);
    }
  }, []);

  // Set up intersection observer for lazy loading and visibility
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!shouldRender && !showOnlyWhenScrolledTo) return;
    
    try {
      // If IntersectionObserver is not available, just render the widget
      if (!window.IntersectionObserver) {
        setIsInView(true);
        setShouldRender(true);
        return;
      }
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            
            // If we're showing only when scrolled to, now is the time to render
            if (showOnlyWhenScrolledTo) {
              setShouldRender(true);
            }
          } else {
            setIsInView(false);
          }
        });
      }, { 
        threshold: 0.1,
        rootMargin: '100px' 
      });
      
      if (widgetRef.current) {
        observer.observe(widgetRef.current);
      }
      
      return () => {
        observer.disconnect();
      };
    } catch (error) {
      // If the observer fails, default to showing the widget
      setIsInView(true);
      setShouldRender(true);
      console.error("Intersection observer error:", error);
    }
  }, [showOnlyWhenScrolledTo, shouldRender]);

  // Load script and initialize widget
  useEffect(() => {
    // Don't proceed if we shouldn't render yet
    if (!shouldRender || typeof window === 'undefined') return;
    
    // Don't load if not in view and using lazy loading
    if (lazyLoad && !isInView) return;

    // Flag to track component mount status
    let isMounted = true;
    
    // Function to safely initialize the Calendly widget
    const initializeWidget = () => {
      try {
        if (!window.Calendly || !widgetRef.current || !isMounted) return false;
        
        // Clear any previous widget
        if (widgetRef.current.firstChild) {
          while (widgetRef.current.firstChild) {
            widgetRef.current.removeChild(widgetRef.current.firstChild);
          }
        }
        
        // Initialize widget
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: widgetRef.current,
          prefill: {},
          utm: {}
        });
        
        setIsLoaded(true);
        return true;
      } catch (err) {
        if (isMounted) {
          console.error("Calendly initialization error:", err);
        }
        return false;
      }
    };
    
    // Function to load the Calendly script
    const loadCalendlyScript = () => {
      // Don't load if already loading or loaded
      if (calendlyScriptLoaded || calendlyScriptLoading) {
        if (calendlyScriptLoaded && window.Calendly) {
          // Script already loaded, just initialize
          setTimeout(() => {
            if (isMounted) initializeWidget();
          }, 100);
        }
        return;
      }
      
      try {
        calendlyScriptLoading = true;
        
        // Create script element
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        
        script.onload = () => {
          calendlyScriptLoaded = true;
          calendlyScriptLoading = false;
          
          if (isMounted) {
            // Wait for Calendly to be fully initialized
            setTimeout(() => {
              if (isMounted) initializeWidget();
            }, 200);
          }
        };
        
        script.onerror = () => {
          calendlyScriptLoading = false;
          if (isMounted) handleError('script loading');
        };
        
        document.head.appendChild(script);
      } catch (error) {
        calendlyScriptLoading = false;
        if (isMounted) handleError('script creation');
      }
    };
    
    // Either initialize or load script
    if (!calendlyScriptLoaded) {
      loadCalendlyScript();
    } else if (window.Calendly) {
      // Script already loaded, just initialize
      setTimeout(() => {
        if (isMounted) initializeWidget();
      }, 100);
    }
    
    // Clean up function
    return () => {
      isMounted = false;
    };
  }, [url, isInView, shouldRender, lazyLoad]);

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
        
        {/* Simplified CSS styles */}
        <style jsx global>{`
          .calendly-inline-widget {
            min-width: 320px;
            height: ${height}px;
            width: 100%;
          }
          
          .calendly-inline-widget iframe {
            width: 100%;
            height: 100%;
          }
        `}</style>
      </Head>
      <div 
        ref={widgetRef}
        className={`calendly-inline-widget ${className}`} 
        data-url={url} 
        style={{ 
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