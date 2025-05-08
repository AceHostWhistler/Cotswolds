import React from 'react';
import Head from 'next/head';
import AceCascadeNavigation from '@/components/AceCascadeNavigation';
import AceCascadeFooter from '@/components/AceCascadeFooter';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Ace Cascade Lodge Hotel</title>
        <meta name="description" content="Contact Ace Cascade Lodge Hotel in Whistler Village for inquiries about our accommodations and services." />
      </Head>
      
      <AceCascadeNavigation />
      
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Ace Cascade Lodge Hotel</h2>
            
            <div className="space-y-4">
              <p className="flex items-start">
                <svg className="h-6 w-6 mr-3 text-[#0066CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>4315 Northlands Blvd, Whistler, BC, Canada</span>
              </p>
              
              <p className="flex items-start">
                <svg className="h-6 w-6 mr-3 text-[#0066CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@acecascade.ca</span>
              </p>
              
              <p className="flex items-start">
                <svg className="h-6 w-6 mr-3 text-[#0066CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Front Desk: (XXX) XXX-XXXX</span>
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-2">Operating Hours</h3>
              <p>Front Desk: 24/7</p>
            </div>
          </div>
        </div>
      </div>
      
      <AceCascadeFooter />
    </>
  );
} 