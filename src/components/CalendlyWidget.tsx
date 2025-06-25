import React, { useEffect } from 'react';
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
  useEffect(() => {
    // Only load the script once across all widgets
    if (!calendlyScriptLoaded) {
      // Create script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      // Add onload handler to track when script is loaded
      script.onload = () => {
        calendlyScriptLoaded = true;
        
        // Force widget initialization if Calendly is loaded
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: url,
            parentElement: document.querySelector('.calendly-inline-widget'),
            prefill: {},
            utm: {}
          });
        }
      };
      
      // Append to document
      document.head.appendChild(script);
      
      return () => {
        // Don't remove the script on unmount since other widget instances may need it
        // Just clean up if needed
      };
    } else if (window.Calendly) {
      // If script already loaded, initialize immediately
      window.Calendly.initInlineWidget({
        url: url,
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }, [url]);

  return (
    <>
      <Head>
        {/* Preload the Calendly script */}
        <link rel="preload" href="https://assets.calendly.com/assets/external/widget.js" as="script" />
      </Head>
      <div className={`calendly-inline-widget ${className}`} 
           data-url={url} 
           style={{ minWidth: 320, height }}
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