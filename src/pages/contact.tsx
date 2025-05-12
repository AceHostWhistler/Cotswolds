import * as React from 'react';
import { useEffect } from 'react';
import Head from 'next/head';

export default function Contact() {
  useEffect(() => {
    // Redirect to the reservations page
    window.location.href = '/reservations';
  }, []);
  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Head>
        <title>Contact Us | The Reel Room</title>
        <meta name="description" content="Get in touch with The Reel Room team in Vancouver, BC. Contact us for event inquiries, tours, or any questions about our venue." />
      </Head>
      
      <div className="text-center p-8">
        <p className="text-lg">Redirecting to our Reservations page...</p>
      </div>
    </div>
  );
} 