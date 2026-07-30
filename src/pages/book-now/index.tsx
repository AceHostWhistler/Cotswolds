import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import ReelRoomNavigation from "@/components/ReelRoomNavigation";
import ReelRoomFooter from "@/components/ReelRoomFooter";
import { scrollToTop } from "@/utils/scrollUtils";
import CalendlyPopupLink from "@/components/CalendlyPopupLink";
import SEO from "@/components/SEO";
import { buildWebPageSchema, SITE_URL } from "@/utils/seo";

export default function BookNow() {
  useEffect(() => {
    try {
      scrollToTop();
    } catch (error) {
      console.error("Error scrolling to top:", error);
    }
  }, []);
  
  return (
    <>
      <SEO
        title="Book Now"
        description="Book The Reel Room for private screening room and production studio rental in Mount Pleasant, Vancouver—premieres, DCP screenings, shoots, and corporate productions."
        canonical={`${SITE_URL}/book-now`}
        ogImage="/photos/optimized/DSC03264-Enhanced-NR-1280.jpg"
        keywords="book Reel Room Vancouver, studio rental booking, private cinema reservation, DCP screening booking Mount Pleasant"
        structuredData={[
          buildWebPageSchema({
            name: 'Book Now | The Reel Room Vancouver',
            description: 'Request a booking or tour for private studio rental in Vancouver.',
            url: `${SITE_URL}/book-now`,
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'ReserveAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${SITE_URL}/book-now`,
              actionPlatform: [
                'http://schema.org/DesktopWebPlatform',
                'http://schema.org/MobileWebPlatform',
              ],
            },
            object: { '@id': `${SITE_URL}/#business` },
          },
        ]}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <div className="bg-white pb-20 md:pb-0">
        <ReelRoomNavigation />

        <main>
          {/* Hero Section */}
          <div className="relative h-[300px] sm:h-[400px]">
            <picture>
              <source
                media="(max-width: 799px)"
                srcSet="/photos/optimized/DSC03264-Enhanced-NR-800.jpg"
              />
              <source
                media="(min-width: 800px) and (max-width: 1279px)"
                srcSet="/photos/optimized/DSC03264-Enhanced-NR-1280.jpg"
              />
              <source
                media="(min-width: 1280px)"
                srcSet="/photos/optimized/DSC03264-Enhanced-NR-1920.jpg"
              />
              <img
                src="/photos/originals/homepage/DSC03264-Enhanced-NR.jpg"
                alt="Reel Room Booking"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                sizes="100vw"
              />
            </picture>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-4xl font-light page-heading text-white mb-4">
                  Book Now
                </h1>
                <p className="text-xl text-white mb-2">
                  Book Vancouver&apos;s private cinema facility for your next screening or production.
                </p>
                <p className="text-base text-brand-cream/80 italic">
                  Email us with questions, or book directly online—either works.
                </p>
              </div>
            </div>
          </div>

          <div className="info-strip">
            <div className="info-strip__inner">
              <span className="info-strip__item"><span className="info-strip__dot" aria-hidden="true" />Typical reply within 1–2 business days</span>
              <span className="info-strip__item"><span className="info-strip__dot" aria-hidden="true" />Groups from 5 to 120+</span>
              <span className="info-strip__item"><span className="info-strip__dot" aria-hidden="true" /><Link href="/experiences" className="text-brand-gold hover:text-brand-cream">View pricing</Link></span>
            </div>
          </div>

          {/* Booking Information Content */}
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-md mb-12">
              <div className="p-6">
                <span className="section-eyebrow block text-center">Two ways to get started</span>
                <h2 className="text-3xl font-light page-heading text-gray-800 mb-4 text-center">How to Book Reel Room</h2>
                <p className="section-tagline text-center mb-10">
                  Email us with questions, or book directly online—either way, we&apos;ll take it from there.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="text-panel h-full">
                    <h3 className="text-xl font-light page-heading mb-3 text-gray-800">Questions? Email us</h3>
                    <p className="text-gray-700 mb-4">
                      Email is best for inquiries—pricing questions, technical specs, custom requests, or if you&apos;re still planning your event. Send us a note and we&apos;ll reply with answers and next steps.
                    </p>
                    <p className="text-gray-700 mb-4">
                      <a href="mailto:info@reelroom.ca" className="text-brand-gold font-semibold hover:underline">info@reelroom.ca</a>
                    </p>
                    <p className="text-sm text-gray-600 mb-3">Helpful to include:</p>
                    <div className="checklist-grid">
                      <span className="checklist-item">Your full name</span>
                      <span className="checklist-item">Email address</span>
                      <span className="checklist-item">Phone number</span>
                      <span className="checklist-item">Preferred date &amp; time</span>
                      <span className="checklist-item">Expected headcount</span>
                      <span className="checklist-item">Type of rental</span>
                      <span className="checklist-item">Your questions</span>
                    </div>
                  </div>

                  <div className="text-panel h-full flex flex-col">
                    <h3 className="text-xl font-light page-heading mb-3 text-gray-800">Ready to book? Go direct</h3>
                    <p className="text-gray-700 mb-4">
                      Use our online booking page to request dates and submit your rental details. You&apos;ll be taken to our scheduling page to pick a time and share your event info—we&apos;ll confirm availability from there.
                    </p>
                    <blockquote className="cinema-quote mb-6 text-base flex-grow">
                      Groups from 5 to 120+. Typical reply within 1–2 business days.
                    </blockquote>
                    <div className="text-center mt-auto pt-2">
                      <CalendlyPopupLink 
                        text="Or Book Now Directly" 
                        className="inline-block px-6 py-3 bg-brand-gold text-black rounded-md font-medium hover:bg-brand-cream transition-colors"
                      />
                      <p className="text-xs text-gray-500 mt-3">Opens our online booking page</p>
                    </div>
                  </div>
                </div>

                <p className="text-center text-gray-600 body-font text-sm max-w-2xl mx-auto mb-8">
                  Not sure which to choose? Email if you have questions first; use the booking button when you&apos;re ready to request dates. Both work—we&apos;ll follow up either way.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-light page-heading mb-4 text-gray-800">Booking Process</h3>
                    <div className="process-steps">
                      <div className="process-step">
                        <span className="process-step__num">1</span>
                        <span className="process-step__text">Email us with questions, or book directly online</span>
                      </div>
                      <div className="process-step">
                        <span className="process-step__num">2</span>
                        <span className="process-step__text">Once booked, we can help arrange anything you need for your booking</span>
                      </div>
                      <div className="process-step">
                        <span className="process-step__num">3</span>
                        <span className="process-step__text">We will help you with every step of the way before, during, and after your event</span>
                      </div>
                      <div className="process-step">
                        <span className="process-step__num">4</span>
                        <span className="process-step__text">Have the most amazing time! :)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-light page-heading mb-4 text-gray-800">Facility information</h3>
                    <div className="stat-row justify-start mb-0">
                      <div className="stat-chip">
                        <span className="stat-chip__value">MTN PLEASANT</span>
                        <span className="stat-chip__label">Vancouver</span>
                      </div>
                      <div className="stat-chip">
                        <span className="stat-chip__value">5–120+</span>
                        <span className="stat-chip__label">Capacity</span>
                      </div>
                    </div>
                    <div className="feature-tags mt-4">
                      <span className="feature-tag">Premium screen room</span>
                      <span className="feature-tag">Lounge &amp; bar</span>
                      <span className="feature-tag">State-of-the-art AV</span>
                      <span className="feature-tag">On-site coordination</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-light page-heading text-gray-800 mb-8 text-center">Rental options</h2>
            
            <div className="space-y-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <img
                    src="/photos/homepage-originals/DSC03066-Enhanced-NR.jpg"
                    alt="Film Screenings"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-light page-heading mb-3">Film Screenings & Premieres</h3>
                  <p className="text-gray-600 mb-6">
                    Perfect for DCP film releases, premieres, and private screenings. Showcase your work on our high-quality projection system with premium sound for cast, crew, investors, and press in a purpose-built screening room.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <img
                    src="/photos/homepage-originals/DSC03110-Enhanced-NR.jpg"
                    alt="Reference playback studio rental"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-light page-heading mb-3">Production studio events: reference playback</h3>
                  <p className="text-gray-600 mb-6">
                    Rent the screen room for client reviews, QC passes, and finishing playbacks with cinema-scale image and audio. Hospitality is scoped to your run-of-show for crew and approved attendees.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <img
                    src="/photos/homepage-originals/DSC03167-Enhanced-NR.jpg"
                    alt="Corporate studio rental"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-light page-heading mb-3">Corporate productions</h3>
                  <p className="text-gray-600 mb-6">
                    Presentations, shareholder streams, launch films, and internal screenings in a cinema-calibre room with professional AV paths and on-site coordination.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light page-heading mb-4">Contact Us</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Questions about the space, pricing, or your production? Email us anytime.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-sm text-gray-500 mb-2">For questions &amp; inquiries</p>
                  <a href="mailto:info@reelroom.ca" className="text-brand-gold hover:text-brand-cream">info@reelroom.ca</a>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">Mount Pleasant, Vancouver, BC</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <svg className="w-12 h-12 mx-auto mb-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Hours</h3>
                  <p className="text-gray-600">Available for bookings 7 days a week</p>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-2xl font-light page-heading mb-4">Ready to request your dates?</h3>
              <p className="text-lg mb-2 text-gray-300">
                Book directly through our online scheduling page, or email{' '}
                <a href="mailto:info@reelroom.ca" className="text-brand-gold hover:underline">info@reelroom.ca</a>{' '}
                if you have questions first.
              </p>
              <p className="text-sm text-gray-400 mb-6">Either option works—we&apos;ll confirm availability and follow up with next steps.</p>
              <CalendlyPopupLink 
                text="Or Book Now Directly" 
                className="inline-block px-8 py-4 bg-brand-gold text-black rounded-md hover:bg-brand-cream transition-colors text-lg font-medium"
              />
              <p className="text-xs text-gray-500 mt-3">Opens our online booking page</p>
            </div>
          </div>
        </main>

        <ReelRoomFooter />
      </div>
    </>
  );
} 