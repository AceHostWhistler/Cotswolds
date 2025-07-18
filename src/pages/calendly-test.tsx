import React from 'react';
import Head from 'next/head';
import ReelRoomNavigation from '@/components/ReelRoomNavigation';
import ReelRoomFooter from '@/components/ReelRoomFooter';

export default function CalendlyTest() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Calendly Test | The Reel Room</title>
        <meta name="description" content="Test page for Calendly widget" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      
      <ReelRoomNavigation />
      
      <main className="pt-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8 text-center">Calendly Widget Test</h1>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="bg-amber-500 text-black p-4 text-center">
              <h3 className="font-bold text-xl uppercase tracking-wider">CALENDAR</h3>
              <p className="text-sm">Check availability & schedule a consultation</p>
            </div>
            <div className="w-full">
              {/* Calendly inline widget begin */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/reelroom-info" 
                style={{ minWidth: '320px', height: '700px' }}
              />
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              {/* Calendly inline widget end */}
            </div>
          </div>
        </div>
      </main>
      
      <ReelRoomFooter />
    </div>
  );
} 