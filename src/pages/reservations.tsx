import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ReelRoomNavigation from '@/components/ReelRoomNavigation';
import ReelRoomFooter from '@/components/ReelRoomFooter';
import SEO from '@/components/SEO';

export default function Reservations() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Book Now | The Reel Room Vancouver"
        description="Book your private theatre event at The Reel Room in Vancouver. Perfect for film screenings, parties, corporate events, and more."
        ogImage="/favicons/Logo Reel Room.png"
        keywords="book now, reservations, private theatre, event booking, Vancouver, film screenings, private events"
      />
      
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      
      <ReelRoomNavigation />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-font text-4xl sm:text-5xl md:text-6xl font-light tracking-widest uppercase mb-6">
            Book Now
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Reserve your private theatre experience at The Reel Room. Use our calendar below to check availability and book your event.
          </p>
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/reelroom/reel-room-event-inquiry" 
            style={{ 
              minWidth: '320px',
              height: '700px',
              backgroundColor: '#ffffff'
            }}
          ></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="heading-font text-2xl sm:text-3xl font-light tracking-wide mb-6">
            Contact Us Directly
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            If you prefer to speak with us directly about your event or have specific questions, please reach out via email.
          </p>
          <a 
            href="mailto:info@reelroom.ca" 
            className="inline-block border-2 border-brand-gold px-8 py-3 text-brand-gold hover:bg-brand-gold/10 transition-colors tracking-wide uppercase"
          >
            Email Us
          </a>
        </div>
      </main>
      
      <ReelRoomFooter />
      
      {/* Calendly Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.onload = function() {
              if (typeof Calendly !== 'undefined') {
                Calendly.initInlineWidget({
                  url: 'https://calendly.com/reelroom/reel-room-event-inquiry',
                  parentElement: document.querySelector('.calendly-inline-widget'),
                  prefill: {},
                  utm: {}
                });
              }
            };
          `
        }}
      />
    </div>
  );
} 