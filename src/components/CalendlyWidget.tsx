import React, { useEffect, useRef } from 'react';
import Head from 'next/head';

interface CalendlyWidgetProps {
  className?: string;
  url?: string;
  height?: number;
  onError?: () => void;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  className = '', 
  url = 'https://calendly.com/reelroom-info',
  height = 700,
  onError
}) => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  
  useEffect(() => {
    // Only run this once
    if (scriptLoadedRef.current) return;
    
    try {
      // Create script element
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      // Add the script to the document
      document.head.appendChild(script);
      
      // Mark as loaded
      scriptLoadedRef.current = true;
      
      // Handle errors
      script.onerror = () => {
        console.error("Failed to load Calendly script");
        if (onError) onError();
      };
      
      // Initialize Calendly after script loads
      script.onload = () => {
        // Make sure the Calendly object is available
        if (window.Calendly) {
          // Force Calendly to initialize the widget
          window.Calendly.initInlineWidget({
            url: url,
            parentElement: widgetRef.current,
            prefill: {},
            utm: {}
          });
        }
      };
    } catch (error) {
      console.error("Error loading Calendly script:", error);
      if (onError) onError();
    }
  }, [url, onError]);

  return (
    <>
      <Head>
        <style jsx global>{`
          .calendly-inline-widget {
            min-width: 320px;
            height: ${height}px;
            width: 100%;
          }
          
          /* Fix for iOS */
          @supports (-webkit-touch-callout: none) {
            .calendly-inline-widget {
              min-height: 650px;
              width: 100% !important;
              background-color: #fff;
            }
            
            .calendly-inline-widget iframe {
              min-height: 650px !important;
              width: 100% !important;
              height: 100% !important;
            }
          }
        `}</style>
      </Head>
      <div 
        ref={widgetRef}
        className={`calendly-inline-widget ${className}`}
        data-url={url}
        style={{ height: `${height}px` }}
      />
    </>
  );
};

// Add TypeScript global declaration for Calendly
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default CalendlyWidget; 