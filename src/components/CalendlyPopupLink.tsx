import React, { useEffect } from 'react';
import Head from 'next/head';

interface CalendlyPopupLinkProps {
  text: string;
  className?: string;
  url?: string;
}

const CalendlyPopupLink: React.FC<CalendlyPopupLinkProps> = ({ 
  text = 'Schedule a Consultation',
  className = '', 
  url = 'https://calendly.com/reelroom-info'
}) => {
  useEffect(() => {
    // Add Calendly widget CSS
    const link = document.createElement('link');
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    // Add Calendly widget JS
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Cleanup function
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
    return false;
  };

  return (
    <>
      <Head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </Head>
      <a 
        href="#" 
        onClick={openCalendly}
        className={className}
      >
        {text}
      </a>
    </>
  );
};

// Add TypeScript global declaration for Calendly
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default CalendlyPopupLink; 