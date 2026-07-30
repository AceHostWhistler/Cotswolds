import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '../components/ReelRoomNavigation';
import ReelRoomFooter from '../components/ReelRoomFooter';
import SimpleImage from '../components/SimpleImage';
import LazyVimeoPlayer from '../components/LazyVimeoPlayer';
import { scrollToTop } from '@/utils/scrollUtils';
import CalendlyPopupLink from '@/components/CalendlyPopupLink';
import SEO from '@/components/SEO';
import { buildServiceSchema, buildWebPageSchema, SITE_URL } from '@/utils/seo';

export default function Experiences() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
    
    // Detect iOS devices
    const detectIOS = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isIOSDevice = 
        /iphone|ipod|ipad/i.test(userAgent) || 
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
        /iPhone|iPad|iPod/.test(navigator.userAgent);
      setIsIOS(isIOSDevice);
    };
    
    detectIOS();
    
    // Ensure page starts from the top
    scrollToTop();
  }, []);
  
  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <SEO
        title="Studio Use &amp; Pricing"
        description="Production and studio rental rates at The Reel Room in Mount Pleasant, Vancouver—film premieres, DCP screenings, shoots, and corporate productions."
        canonical={`${SITE_URL}/experiences`}
        ogImage="/photos/optimized/DSC03081-Enhanced-NR-1280.jpg"
        keywords="studio rental pricing Vancouver, screen room rates, DCP screening rental, production studio Mount Pleasant, Reel Room pricing"
        structuredData={[
          buildWebPageSchema({
            name: 'Studio Use & Pricing | The Reel Room Vancouver',
            description:
              'Production and studio rental rates at The Reel Room in Mount Pleasant, Vancouver.',
            url: `${SITE_URL}/experiences`,
          }),
          buildServiceSchema({
            name: 'Private screen room and studio rental',
            description:
              '4-hour private cinema and production studio rental in Vancouver with optional additional hours.',
            url: `${SITE_URL}/experiences`,
            offers: [
              {
                name: '4-hour base rental',
                description: 'Private screen room rental including coordinator and cleaning fees.',
                price: '2300',
              },
              {
                name: 'Additional hour',
                description: 'Extended studio time beyond the base 4-hour block.',
                price: '400',
              },
            ],
          }),
        ]}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      
      <ReelRoomNavigation />
      
      {/* Booking Contact Box - Fixed Position for Desktop - REMOVED */}
      
      <main className="pt-20 pb-20 md:pb-0">
        {/* Hero Section */}
        <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
          <picture>
            <source
              media="(max-width: 799px)"
              srcSet="/photos/optimized/DSC03081-Enhanced-NR-800.jpg"
            />
            <source
              media="(min-width: 800px) and (max-width: 1279px)"
              srcSet="/photos/optimized/DSC03081-Enhanced-NR-1280.jpg"
            />
            <source
              media="(min-width: 1280px)"
              srcSet="/photos/optimized/DSC03081-Enhanced-NR-1920.jpg"
            />
            <img
              src="/photos/originals/homepage/DSC03081-Enhanced-NR.jpg"
              alt="The Reel Room studio use and pricing"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-light page-heading mb-4">Studio Use &amp; Pricing</h1>
                <p className="text-xl mb-2 section-tagline section-tagline--light">
                  Customize your studio rental for screenings, shoots, and productions.
                </p>
                <p className="text-lg italic text-brand-cream/70">
                  Four-hour blocks. Reference-grade AV. Your run-of-show.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="info-strip">
          <div className="info-strip__inner">
            <span className="info-strip__item"><span className="info-strip__dot" aria-hidden="true" />Mount Pleasant, Vancouver</span>
            <span className="info-strip__item"><span className="info-strip__dot" aria-hidden="true" />4-hour blocks from $2,300</span>
            <span className="info-strip__item"><span className="info-strip__dot" aria-hidden="true" /><a href="mailto:info@reelroom.ca">info@reelroom.ca</a></span>
          </div>
        </div>
        
        {/* Main rental rates */}
        <div id="pricing" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light page-heading mb-4 text-center">Production &amp; Studio Rental Rates</h2>
            <p className="section-tagline text-center mb-12">Four hours. Full facility. Zero velvet-rope nonsense.</p>
            
            <div className="pricing-showcase">
              <p className="pricing-showcase__tagline">Lights. Picture. Your room.</p>
              <h3 className="text-xl font-light page-heading text-center mb-2 text-brand-cream">Base Rental Rate</h3>
              <p className="pricing-showcase__price">$2,300</p>
              <p className="text-center text-brand-cream/75 mt-2 body-font">for a 4-hour rental time slot</p>
              <div className="pricing-showcase__breakdown">
                <p>+ On-site coordinator ($255) + Cleaning Fee ($300)</p>
                <p className="mt-2">Subtotal: $2,855 · + 5% Tax: $142.75</p>
                <p className="pricing-showcase__total">Final Price: $2,997.75</p>
              </div>
            </div>
            
            <div className="max-w-xl mx-auto mb-16">
              <div className="text-panel text-center">
                <h4 className="text-lg font-light page-heading mb-2">Need more time?</h4>
                <p className="text-gray-600 mb-2 body-font">Stay in the room—add hours to your block.</p>
                <p className="text-2xl font-light text-brand-gold page-heading">$400/hour</p>
              </div>
            </div>
            
            <div className="text-center mb-16">
              {!isIOS ? (
                <CalendlyPopupLink 
                  text="Request a Booking"
                  className="inline-block bg-black text-white px-8 py-4 rounded-md text-lg transition-colors hover:bg-gray-800"
                />
              ) : (
                <Link
                  href="/book-now"
                  className="inline-block bg-black text-white px-8 py-4 rounded-md text-lg transition-colors hover:bg-gray-800"
                >
                  Request a Booking
                </Link>
              )}
            </div>
          </div>
        </div>
        
        {/* Rental types */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="section-eyebrow block text-center">Pick your production</span>
            <h2 className="text-3xl font-light page-heading mb-12 text-center">Rental types</h2>
            
            {/* DCP & premiere screenings */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
                <div className="order-2 md:order-1">
                  <span className="section-eyebrow">Screenings</span>
                  <h3 className="text-2xl font-light page-heading mb-4">DCP &amp; premiere screenings</h3>
                  <p className="text-gray-600 mb-6">
                    Lock your colour grade and audio mix with a reference screening for cast, crew, financiers, or distributors. The Reel Room is set up as a private cinema stage—not a banquet hall—so playback stays the priority.
                  </p>
                  <blockquote className="cinema-quote mb-6 text-base">
                    DCP available upon request.
                  </blockquote>
                  <div className="feature-tags mb-6">
                    <span className="feature-tag">Critical viewing</span>
                    <span className="feature-tag">Lounge hospitality</span>
                    <span className="feature-tag">85–95+ capacity</span>
                    <span className="feature-tag">Reference projection</span>
                    <span className="feature-tag">Secondary playback</span>
                  </div>
                  {!isIOS ? (
                    <CalendlyPopupLink 
                      text="Book a screening rental"
                      className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                    />
                  ) : (
                    <Link
                      href="/book-now"
                      className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                    >
                      Book a screening rental
                    </Link>
                  )}
                </div>
                <div className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden">
                  <SimpleImage
                    src="/photos/homepage-originals/DSC03066-Enhanced-NR.jpg"
                    alt="DCP and premiere screening rental"
                    className="w-full h-full"
                    loading="eager"
                    fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                    objectFit="cover"
                    style={{ opacity: 1 }}
                  />
                </div>
              </div>
            </div>
            
            {/* Production studio events: reference playback */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <SimpleImage
                    src="/photos/homepage-originals/DSC03110-Enhanced-NR.jpg"
                    alt="Reference playback and studio rental"
                    className="w-full h-full"
                    loading="eager"
                    fallbackSrc="/photos/homepage-originals/DSC03125-Enhanced-NR.jpg"
                    objectFit="cover"
                    style={{ opacity: 1 }}
                  />
                </div>
                <div>
                  <span className="section-eyebrow">Finishing suite vibes</span>
                  <h3 className="text-2xl font-light page-heading mb-4">Production studio events: reference playback</h3>
                  <p className="text-gray-600 mb-6">
                    Rent the room for colour-critical reviews, client approvals, and finishing playbacks where picture and sound have to read true. Service style follows your technical brief—not a preset social package.
                  </p>
                  <div className="feature-tags mb-6">
                    <span className="feature-tag">Cinema-scale playback</span>
                    <span className="feature-tag">Secondary lounge feed</span>
                    <span className="feature-tag">Client graphics</span>
                    <span className="feature-tag">Production support</span>
                    <span className="feature-tag">Full facility buyout</span>
                  </div>
                  {!isIOS ? (
                    <CalendlyPopupLink 
                      text="Book a screening rental"
                      className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                    />
                  ) : (
                    <Link
                      href="/book-now"
                      className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                    >
                      Book a screening rental
                    </Link>
                  )}
                </div>
              </div>
            </div>
            
            {/* Corporate & brand productions */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
                <div className="order-2 md:order-1">
                  <span className="section-eyebrow">Boardroom meets big screen</span>
                  <h3 className="text-2xl font-light page-heading mb-4">Corporate &amp; brand productions</h3>
                  <p className="text-gray-600 mb-6">
                    The Reel Room functions as a presentation screen room and content stage: investor streams, launch films, sizzle reels, internal town halls with playback, and press screenings with controlled access.
                  </p>
                  <div className="feature-tags mb-6">
                    <span className="feature-tag">Executive presentations</span>
                    <span className="feature-tag">Team screenings</span>
                    <span className="feature-tag">Product launches</span>
                    <span className="feature-tag">Media reviews</span>
                    <span className="feature-tag">Brand activations</span>
                    <span className="feature-tag">Controlled guest lists</span>
                  </div>
                  {!isIOS ? (
                    <CalendlyPopupLink 
                      text="Book a corporate rental"
                      className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                    />
                  ) : (
                    <Link
                      href="/book-now"
                      className="inline-block bg-black text-white px-6 py-3 rounded-md transition-colors hover:bg-gray-800"
                    >
                      Book a corporate rental
                    </Link>
                  )}
                </div>
                <div className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden">
                  <SimpleImage
                    src="/photos/homepage-originals/DSC03167-Enhanced-NR.jpg"
                    alt="Corporate studio rental"
                    className="w-full h-full"
                    loading="eager"
                    fallbackSrc="/photos/homepage-originals/DSC03086-Enhanced-NR.jpg"
                    objectFit="cover"
                    style={{ opacity: 1 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Options */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light page-heading mb-12 text-center">Additional options</h2>
            
            <div className="max-w-md mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="h-48 mb-6 rounded overflow-hidden">
                  <SimpleImage
                    src="/photos/homepage-originals/DSC03106-Enhanced-NR.jpg"
                    alt="DCP audio-visual options"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-light page-heading mb-3">DCP audio-visual enhancements</h3>
                <p className="text-gray-600 mb-4">
                  Take advantage of our reference audio-visual system, with options for specialized lighting, sound, and projection add-ons for your technical brief.
                </p>
                <p className="font-semibold text-gray-800">$100 per hour</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Photo Gallery Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light page-heading mb-12 text-center">Studio gallery</h2>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-12">
              {[
                { src: 'DSC03060-Enhanced-NR.jpg', alt: 'Reel Room lounge seating and bar area', span: 'col-span-2 row-span-2' },
                { src: 'DSC03081-Enhanced-NR.jpg', alt: 'Reel Room bar with gold accents', span: 'col-span-1 row-span-1' },
                { src: 'DSC03106-Enhanced-NR.jpg', alt: 'Reel Room lobby and staircase', span: 'col-span-1 row-span-1' },
                { src: 'DSC03125-Enhanced-NR.jpg', alt: 'Reel Room private screening room', span: 'col-span-2 row-span-2' },
                { src: 'DSC03301-Enhanced-NR.jpg', alt: 'Reel Room velvet lounge detail', span: 'col-span-1 row-span-1' },
                { src: 'DSC03389-Enhanced-NR.jpg', alt: 'Reel Room bar cocktail detail', span: 'col-span-1 row-span-1' },
              ].map((photo) => (
                <div key={photo.src} className={`${photo.span} aspect-square overflow-hidden rounded-lg`}>
                  <div className="w-full h-full">
                    <SimpleImage
                      src={`/photos/homepage-originals/${photo.src}`}
                      alt={photo.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light page-heading mb-6">Scope your custom rental</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Contact us today to align the facility, AV, and add-ons with your production or screening brief.
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              {!isIOS ? (
                <CalendlyPopupLink 
                  text="Request a Booking"
                  className="inline-block bg-brand-gold text-black px-6 py-3 rounded-md transition-colors hover:bg-brand-cream"
                />
              ) : (
                <Link
                  href="/book-now"
                  className="inline-block bg-brand-gold text-black px-6 py-3 rounded-md transition-colors hover:bg-brand-cream"
                >
                  Request a Booking
                </Link>
              )}
              <Link
                href="/book-now"
                className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-md transition-colors hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Reserve Your Dates - Bottom CTA */}
        <div className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-light page-heading mb-6">Ready to lock your rental dates?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us for availability and a quote scoped to your screening, shoot, or corporate production.
            </p>
            {!isIOS ? (
              <CalendlyPopupLink 
                text="Request a Booking"
                className="inline-block px-8 py-4 bg-brand-gold text-black rounded-md text-lg font-medium hover:bg-brand-cream transition-colors"
              />
            ) : (
              <Link 
                href="/book-now" 
                className="inline-block px-8 py-4 bg-brand-gold text-black rounded-md text-lg font-medium hover:bg-brand-cream transition-colors"
              >
                Request a Booking
              </Link>
            )}
          </div>
        </div>
        
      </main>
      
      <ReelRoomFooter />
    </div>
  );
} 