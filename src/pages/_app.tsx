import "@/styles/globals.css";
import "@/styles/brand.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from "next-i18next";
import GlobalStyles from "@/components/GlobalStyles";
import { useEffect } from "react";
import Head from "next/head";

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

  return (
    <div className="overflow-x-hidden">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}

export default appWithTranslation(App);
