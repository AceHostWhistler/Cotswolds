import React from 'react';
import Head from 'next/head';
import AceCascadeNavigation from '../components/AceCascadeNavigation';
import AceCascadeHero from '../components/AceCascadeHero';
import RoomCategories from '../components/RoomCategories';
import AboutSection from '../components/AboutSection';
import BlogSection from '../components/BlogSection';
import FaqSection from '../components/FaqSection';
import AceCascadeFooter from '../components/AceCascadeFooter';

export default function TestPage() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Test Page - Ace Cascade Lodge Hotel</title>
        <meta name="description" content="Test page for Ace Cascade Lodge Hotel website components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AceCascadeNavigation />
      
      <main className="pt-20">
        <section className="py-8 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Component Test Page</h1>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Navigation</h2>
              <p className="mb-2">The navigation is shown at the top of the page.</p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Hero Section</h2>
              <p className="mb-2">Here's the hero section:</p>
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <AceCascadeHero />
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Room Categories</h2>
              <p className="mb-2">Here's the room categories section:</p>
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <RoomCategories />
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About Section</h2>
              <p className="mb-2">Here's the about section:</p>
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <AboutSection />
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Blog Section</h2>
              <p className="mb-2">Here's the blog section:</p>
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <BlogSection />
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">FAQ Section</h2>
              <p className="mb-2">Here's the FAQ section:</p>
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <FaqSection />
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Footer</h2>
              <p className="mb-2">Here's the footer:</p>
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <AceCascadeFooter />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}