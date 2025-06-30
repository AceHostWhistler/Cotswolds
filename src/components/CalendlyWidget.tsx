import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    // Function to initialize the widget
    const initializeWidget = () => {
      if (window.Calendly && widgetRef.current) {
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

  return (
    <>
      <Head>
        {/* Preload the Calendly script */}
        <link rel="preload" href="https://assets.calendly.com/assets/external/widget.js" as="script" />
        
        {/* Add mobile-specific meta tag for better mobile experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <div 
        ref={widgetRef}
        className={`calendly-inline-widget ${className}`} 
        data-url={url} 
        style={{ 
          minWidth: 320, 
          height,
          width: '100%',
          overflow: 'hidden'
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