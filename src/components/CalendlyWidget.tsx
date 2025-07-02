import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

interface CalendlyWidgetProps {
  className?: string;
  url?: string;
  height?: number;
}

// Create a flag to track if the script has been loaded
let calendlyScriptLoaded = false;

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  className = '', 
  url = 'https://calendly.com/reelroom-info?primary_color=f7be01&hide_gdpr_banner=1',
  height = 700 
}) => {
  // Create a ref for the widget container
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isIOS, setIsIOS] = useState(false);

  // Detect iOS devices
  useEffect(() => {
    const detectIOS = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOSDevice = /iphone|ipod|ipad/i.test(userAgent) || 
                         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      setIsIOS(isIOSDevice);
    };
    
    detectIOS();
  }, []);

  useEffect(() => {
    // Function to initialize the widget
    const initializeWidget = () => {
      if (window.Calendly && widgetRef.current) {
        // Clear any previous widget initialization
        while (widgetRef.current.firstChild) {
          widgetRef.current.removeChild(widgetRef.current.firstChild);
        }
        
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: widgetRef.current,
          prefill: {},
          utm: {}
        });
      }
    };

    // Only load the script once across all widgets
    if (!calendlyScriptLoaded) {
      // Create script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      // Add onload handler to track when script is loaded
      script.onload = () => {
        calendlyScriptLoaded = true;
        // Initialize widget after script is loaded
        setTimeout(initializeWidget, 100); // Small delay to ensure DOM is ready
      };
      
      // Append to document
      document.head.appendChild(script);
      
      return () => {
        // Don't remove the script on unmount since other widget instances may need it
        // Just clean up if needed
      };
    } else if (window.Calendly) {
      // If script already loaded, initialize immediately
      setTimeout(initializeWidget, 100);
    }
  }, [url]);

  // Add a resize handler for mobile devices
  useEffect(() => {
    const handleResize = () => {
      // Force re-initialization on resize to fix mobile issues
      if (window.Calendly && widgetRef.current) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: widgetRef.current,
          prefill: {},
          utm: {}
        });
      }
    };

    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [url]);

  // iOS specific fix for Calendly popup
  useEffect(() => {
    if (isIOS && window.Calendly) {
      // Try to fix iOS-specific issues with Calendly
      const fixIOSDisplay = () => {
        // Force Calendly to redraw for iOS
        if (widgetRef.current) {
          const currentHeight = widgetRef.current.style.height;
          widgetRef.current.style.height = `${parseInt(currentHeight) + 1}px`;
          setTimeout(() => {
            if (widgetRef.current) {
              widgetRef.current.style.height = currentHeight;
            }
          }, 50);
        }
      };
      
      // Apply fix on initial load and after a short delay
      setTimeout(fixIOSDisplay, 500);
      setTimeout(fixIOSDisplay, 2000);
      
      // Also add touch event listener for iOS to ensure proper rendering
      if (widgetRef.current) {
        const handleTouch = () => {
          if (window.Calendly) {
            window.Calendly.initInlineWidget({
              url: url,
              parentElement: widgetRef.current,
              prefill: {},
              utm: {}
            });
          }
        };
        
        widgetRef.current.addEventListener('touchstart', handleTouch, {once: true});
        return () => {
          if (widgetRef.current) {
            widgetRef.current.removeEventListener('touchstart', handleTouch);
          }
        };
      }
    }
  }, [isIOS, url]);

  return (
    <>
      <Head>
        {/* Preload the Calendly script */}
        <link rel="preload" href="https://assets.calendly.com/assets/external/widget.js" as="script" />
        
        {/* Add mobile-specific meta tag for better mobile experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        {/* Additional styles for iOS fixes */}
        <style jsx global>{`
          .calendly-inline-widget {
            min-width: 320px;
            height: ${height}px;
            width: 100%;
            overflow: hidden;
          }
          
          .calendly-inline-widget iframe {
            width: 100% !important;
            height: 100% !important;
            min-height: ${height}px !important;
            position: static !important;
          }
          
          @media screen and (-webkit-min-device-pixel-ratio: 0) {
            /* iOS Safari specific CSS */
            .calendly-inline-widget iframe {
              min-height: ${height + 200}px !important;
              transform: scale(0.98);
              transform-origin: top center;
            }
          }
        `}</style>
      </Head>
      <div 
        ref={widgetRef}
        className={`calendly-inline-widget ${className}`} 
        data-url={url} 
        style={{ 
          minWidth: 320, 
          height,
          width: '100%',
          overflow: isIOS ? 'visible' : 'hidden', // Changed for iOS
          position: 'relative',
          zIndex: 2
        }}
      />
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