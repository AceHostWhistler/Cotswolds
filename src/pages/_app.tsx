import "@/styles/globals.css";
import "@/styles/brand.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation, useTranslation } from "next-i18next";
import GlobalStyles from "@/components/GlobalStyles";
import { useEffect } from "react";
import Head from "next/head";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Add any translation keys here
          "key": "value"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

function App({ Component, pageProps }: AppProps) {
  // Add passive event listeners for better scrolling performance
  useEffect(() => {
    // Detect if browser supports passive event listeners
    let passiveSupported = false;
    try {
      const options = {
        get passive() {
          passiveSupported = true;
          return true;
        }
      };
      // @ts-ignore - Testing for passive support
      window.addEventListener('test', null, options);
      // @ts-ignore - Testing for passive support
      window.removeEventListener('test', null, options);
    } catch (err) {
      passiveSupported = false;
    }

    // Apply passive listeners to improve scrolling performance
    const options = passiveSupported ? { passive: true } : false;
    const noop = () => {};
    
    window.addEventListener('wheel', noop, options as AddEventListenerOptions);
    window.addEventListener('touchstart', noop, options as AddEventListenerOptions);
    
    // ANTI-BLUE RUNTIME SCRIPT: This forcibly removes any blue from the page
    const antiBlueStyle = document.createElement('style');
    antiBlueStyle.textContent = `
      /* Better contrast anti-blue solution */
      /* Base style - don't override all colors forcibly */
      [class*="text-blue"] { color: #ba9765 !important; } /* Use gold instead of white for better contrast */
      [style*="color: blue"] { color: #333333 !important; } /* Dark gray on light backgrounds */
      [style*="color: rgb(0,"] { color: #333333 !important; }
      [style*="color: #00"] { color: #333333 !important; }
      
      /* Context-aware contrast fixes */
      .bg-white [class*="text-blue"], 
      .bg-gray-50 [class*="text-blue"], 
      .bg-gray-100 [class*="text-blue"] { 
        color: #333333 !important; /* Dark text on light backgrounds */
      }
      
      .bg-black [class*="text-blue"], 
      .bg-gray-900 [class*="text-blue"], 
      [style*="background-color: black"] [class*="text-blue"] { 
        color: #ba9765 !important; /* Gold on dark backgrounds */
      }
      
      /* Specific navigation link fixes */
      .tracking-widest { color: white !important; }
      span.relative.z-10 { color: white !important; }
      
      /* Lighter filter that removes blue but preserves contrast */
      html { filter: hue-rotate(340deg) !important; }
      
      /* Set up contrast variables */
      :root {
        --text-on-light: #333333;
        --text-on-dark: #ffffff;
        --accent-color: #ba9765;
      }
      
      /* Ensure text has appropriate contrast with its background */
      .text-white { color: #ffffff !important; }
      .text-black { color: #000000 !important; }
      .text-gray-600, .text-gray-700, .text-gray-800, .text-gray-900 { color: inherit !important; }
      
      /* Fix for any potential scrolling issues */
      html, body {
        overflow-x: hidden;
        position: relative;
        height: auto;
        min-height: 100%;
      }
    `;
    document.head.appendChild(antiBlueStyle);
    
    return () => {
      window.removeEventListener('wheel', noop, options as AddEventListenerOptions);
      window.removeEventListener('touchstart', noop, options as AddEventListenerOptions);
      if (antiBlueStyle.parentNode) {
        antiBlueStyle.parentNode.removeChild(antiBlueStyle);
      }
    };
  }, []);

  // Calculate viewport height for iOS devices
  useEffect(() => {
    // First we get the viewport height and multiply it by 1% to get a value for a vh unit
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial call
    setVh();

    // Add event listener
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    // Clean up
    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5.0" />
        
        {/* Font optimization - using display swap to prevent FOIT */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
          rel="stylesheet"
        />
        
        {/* Add Montserrat font which was previously in index.tsx */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Load Vimeo Player script asynchronously and defer */}
        <script src="https://player.vimeo.com/api/player.js" async defer />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default appWithTranslation(App);
