import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '../components/ReelRoomNavigation';
import ReelRoomFooter from '../components/ReelRoomFooter';
import ResponsivePhoto from '../components/ResponsivePhoto';
import { optimizedPhotoSrc } from '@/utils/responsivePhotos';
import { scrollToTop } from '@/utils/scrollUtils';
import SEO from '@/components/SEO';
import { buildFaqPageSchema, buildWebPageSchema, SITE_URL } from '@/utils/seo';
import { galleryImages } from '@/utils/galleryImages';

// Type for FAQ sections
interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSections {
  general: FaqItem[];
  booking: FaqItem[];
  services: FaqItem[];
  technical: FaqItem[];
  [key: string]: FaqItem[];
}

export default function Media() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('gallery'); // Changed default to gallery
  const [activeFaqSection, setActiveFaqSection] = useState('general');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12; // Reduced to 12 images per page for better performance
  
  useEffect(() => {
    setIsPageLoaded(true);
    
    // Ensure page starts from the top
    scrollToTop();
  }, []);

  useEffect(() => {
    setOpenFaqIndex(0);
  }, [activeFaqSection]);
  
  // Curated gallery — studio and event photos interleaved (see galleryImages.ts)
  
  // Calculate current images to display
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);
  
  // Calculate total number of pages
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  const renderGallerySection = () => (
    <div>
      <div className="mb-8 text-center">
        <span className="section-eyebrow">Step inside</span>
        <h2 className="text-3xl font-light heading-font mb-4">Explore Our Space</h2>
        <p className="section-tagline mb-4">
          Gold accents, velvet seating, cinema-scale picture—the kind of room that makes your content look even better.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Showing {indexOfFirstImage + 1}-{Math.min(indexOfLastImage, galleryImages.length)} of {galleryImages.length} images
        </p>
      </div>
      
      {/* Simple Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((image) => (
          <div 
            key={image.src} 
            className="gallery-item"
          >
            <ResponsivePhoto
              src={image.src}
              alt={image.alt}
              className="w-full h-full"
              imgClassName="gallery-image"
              loading="lazy"
              layout="gallery"
            />
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <nav className="pagination-nav" aria-label="Pagination">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`pagination-button ${currentPage === 1 ? 'pagination-disabled' : ''}`}
            >
              &larr; Prev
            </button>
            
            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`pagination-number ${currentPage === number ? 'pagination-active' : ''}`}
              >
                {number}
              </button>
            ))}
            
            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`pagination-button ${currentPage === totalPages ? 'pagination-disabled' : ''}`}
            >
              Next &rarr;
            </button>
          </nav>
        </div>
      )}
    </div>
  );
  
  const renderVideosSection = () => (
    <div>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold heading-font mb-4">Featured Videos</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          See Reel Room in action through featured videos of premieres, reference playback, and studio configurations.
        </p>
      </div>
      
      <div className="video-grid">
        {/* Film Release Video */}
        <div className="video-card">
          <div className="video-container">
            <button 
              onClick={() => {
                const iframe = document.createElement('iframe');
                iframe.src = "https://player.vimeo.com/video/1027464900?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1";
                iframe.allow = "autoplay; fullscreen; picture-in-picture";
                iframe.style.position = "absolute";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.border = "none";
                
                const modal = document.createElement('div');
                modal.style.position = "fixed";
                modal.style.top = "0";
                modal.style.left = "0";
                modal.style.width = "100%";
                modal.style.height = "100%";
                modal.style.backgroundColor = "rgba(0,0,0,0.9)";
                modal.style.zIndex = "9999";
                modal.style.display = "flex";
                modal.style.alignItems = "center";
                modal.style.justifyContent = "center";
                
                const container = document.createElement('div');
                container.style.width = "90%";
                container.style.maxWidth = "800px";
                container.style.aspectRatio = "16/9";
                container.style.position = "relative";
                
                const closeBtn = document.createElement('button');
                closeBtn.innerHTML = "×";
                closeBtn.style.position = "absolute";
                closeBtn.style.top = "-40px";
                closeBtn.style.right = "0";
                closeBtn.style.fontSize = "30px";
                closeBtn.style.color = "white";
                closeBtn.style.background = "none";
                closeBtn.style.border = "none";
                closeBtn.style.cursor = "pointer";
                closeBtn.onclick = () => {
                  document.body.removeChild(modal);
                  document.body.style.overflow = "auto";
                };
                
                container.appendChild(iframe);
                container.appendChild(closeBtn);
                modal.appendChild(container);
                
                document.body.appendChild(modal);
                document.body.style.overflow = "hidden";
              }}
              className="video-link"
            >
              <ResponsivePhoto
                src="/photos/originals/homepage/DSC03066-Enhanced-NR.jpg"
                alt="Film Release Video Thumbnail"
                className="video-thumbnail"
                imgClassName="video-thumbnail"
                layout="content"
              />
              <div className="video-play-overlay">
                <div className="video-play-button">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <div className="video-info">
            <h3 className="video-title">Film premieres &amp; DCP screenings</h3>
            <p className="video-description">
              Reference-grade playback for filmmakers presenting work to cast, crew, investors, and press in a private cinema environment.
            </p>
          </div>
        </div>
        
        {/* Reference playback video */}
        <div className="video-card">
          <div className="video-container">
            <button 
              onClick={() => {
                const iframe = document.createElement('iframe');
                iframe.src = "https://player.vimeo.com/video/1082926490?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1";
                iframe.allow = "autoplay; fullscreen; picture-in-picture";
                iframe.style.position = "absolute";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.border = "none";
                
                const modal = document.createElement('div');
                modal.style.position = "fixed";
                modal.style.top = "0";
                modal.style.left = "0";
                modal.style.width = "100%";
                modal.style.height = "100%";
                modal.style.backgroundColor = "rgba(0,0,0,0.9)";
                modal.style.zIndex = "9999";
                modal.style.display = "flex";
                modal.style.alignItems = "center";
                modal.style.justifyContent = "center";
                
                const container = document.createElement('div');
                container.style.width = "90%";
                container.style.maxWidth = "800px";
                container.style.aspectRatio = "16/9";
                container.style.position = "relative";
                
                const closeBtn = document.createElement('button');
                closeBtn.innerHTML = "×";
                closeBtn.style.position = "absolute";
                closeBtn.style.top = "-40px";
                closeBtn.style.right = "0";
                closeBtn.style.fontSize = "30px";
                closeBtn.style.color = "white";
                closeBtn.style.background = "none";
                closeBtn.style.border = "none";
                closeBtn.style.cursor = "pointer";
                closeBtn.onclick = () => {
                  document.body.removeChild(modal);
                  document.body.style.overflow = "auto";
                };
                
                container.appendChild(iframe);
                container.appendChild(closeBtn);
                modal.appendChild(container);
                
                document.body.appendChild(modal);
                document.body.style.overflow = "hidden";
              }}
              className="video-link"
            >
              <ResponsivePhoto
                src="/photos/originals/homepage/DSC03110-Enhanced-NR.jpg"
                alt="Reference playback video thumbnail"
                className="video-thumbnail"
                imgClassName="video-thumbnail"
                layout="content"
              />
              <div className="video-play-overlay">
                <div className="video-play-button">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="play-icon">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </button>
          </div>
          <div className="video-info">
            <h3 className="video-title">Production studio events: reference playback</h3>
            <p className="video-description">
              Rent the screen room for client reviews and finishing playbacks—AV-first, with hospitality scoped to your rental block.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
  const faqSections: FaqSections = {
    general: [
      {
        question: "What does \"private-use studio\" mean at The Reel Room?",
        answer: "The Reel Room is offered as a private-use screening and production studio, not a public venue, nightclub, or open party space. Bookings are for professional and technical work—screenings, reviews, shoots, and corporate content playback—under a rental agreement, with access and run-of-show controlled by the production and facility staff."
      },
      {
        question: "Where is The Reel Room located?",
        answer: "The Reel Room is located in the Mount Pleasant neighborhood of Vancouver, BC, just minutes away from downtown."
      },
      {
        question: "What is the capacity of The Reel Room?",
        answer: "The facility comfortably accommodates roughly 5 to 150+ attendees depending on layout. The screen room seats about 40–44, the lounge with bar and a 70\" display holds about 60+, and an additional floor (elevator or stairs) can hold 40+—often used for secondary bar service on larger rentals."
      },
      {
        question: "Do you provide parking?",
        answer: "While we don't have our own parking lot, there is ample street parking and several paid parking lots within a short walking distance."
      },
      {
        question: "Is the facility wheelchair accessible?",
        answer: "Yes you can enter through the main door which offers access via stair case or via elevator!"
      },
      {
        question: "What are your operating hours?",
        answer: "The Reel Room is available for bookings 7 days a week. Standard rental windows are between 10am and 12am, with extensions possible by arrangement."
      }
    ],
    booking: [
      {
        question: "How far in advance should I book my rental?",
        answer: "We recommend booking at least 4–6 weeks in advance for peak weekend slots and 2–4 weeks for weekdays to secure technical prep time."
      },
      {
        question: "What is your cancellation policy?",
        answer: "Cancellations made 14 days or more before the rental date will receive a full refund of the deposit. Cancellations made less than 14 days before will forfeit the deposit."
      },
      {
        question: "Can I visit the space before booking?",
        answer: "Yes! We encourage potential clients to schedule a tour of the studio. Please contact us at info@reelroom.ca to arrange a viewing."
      },
      {
        question: "Is a deposit required to secure a booking?",
        answer: "Yes, a 50% deposit is required to secure your reservation. The remaining balance is due 7 days before your rental."
      }
    ],
    services: [
      {
        question: "What audio-visual equipment is available?",
        answer: "We provide state-of-the-art projection, sound systems, microphones, and lighting. Our technical team can help set up and manage any special AV requirements."
      },
      {
        question: "Can I bring my own decoration?",
        answer: "Yes, you are welcome to bring your own set dressing. It must be easily removable and must not damage the facility."
      }
    ],
    technical: [
      {
        question: "What file formats do you support for screenings?",
        answer: "We support most common video formats including MP4, MOV, and DCP. We recommend discussing technical requirements with our team in advance."
      },
      {
        question: "Can I connect my laptop or device to your system?",
        answer: "Yes, our system supports HDMI, DisplayPort, and wireless connections for most devices. We can assist with setup and testing prior to your rental block."
      },
      {
        question: "Do you offer live streaming capabilities?",
        answer: "Yes, we can set up professional live streaming for your production to platforms like YouTube, Vimeo, Facebook, and others."
      },
      {
        question: "What is the quality of your projection system?",
        answer: "We feature a high-definition 4K projection system with professional-grade sound, providing an immersive viewing experience."
      }
    ]
  };
  
  const renderFaqSection = () => (
    <div className="space-y-8">
      <div className="text-center mb-4">
        <span className="section-eyebrow">Got questions?</span>
        <p className="section-tagline">Everything from parking to popcorn—well, the bar part at least.</p>
      </div>
      {/* FAQ Navigation */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {Object.keys(faqSections).map((section) => (
          <button
            key={section}
            onClick={() => setActiveFaqSection(section)}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeFaqSection === section
                ? 'bg-brand-gold text-black font-medium'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      
      {/* FAQ Questions and Answers */}
      <div className="space-y-3 max-w-4xl mx-auto">
        {faqSections[activeFaqSection].map((faq, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <div
              key={faq.question}
              className={`faq-accordion-item${isOpen ? ' is-open' : ''}`}
            >
              <button
                type="button"
                className="faq-accordion-trigger"
                onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <svg className="faq-accordion-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>
              {isOpen && (
                <div className="faq-accordion-panel">{faq.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
  
  const allFaqs = Object.values(faqSections).flat();

  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <SEO
        title="Media, Gallery &amp; FAQs"
        description="Photo gallery, facility videos, and FAQs for The Reel Room—private screening room and production studio rental in Mount Pleasant, Vancouver, BC."
        canonical={`${SITE_URL}/media`}
        ogImage={optimizedPhotoSrc('DSC03113-Enhanced-NR', 1280)}
        keywords="Reel Room gallery, Vancouver studio photos, private cinema FAQ, DCP screening Vancouver, production studio Mount Pleasant"
        structuredData={[
          buildWebPageSchema({
            name: 'Media, Gallery & FAQs | The Reel Room Vancouver',
            description:
              'Explore The Reel Room gallery and frequently asked questions about studio rental in Vancouver.',
            url: `${SITE_URL}/media`,
          }),
          buildFaqPageSchema(allFaqs),
        ]}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <style>{`
          /* Basic reset for iOS */
          * {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-text-size-adjust: 100%;
          }
          
          img {
            max-width: 100%;
            height: auto;
            display: block;
          }
          
          /* Gallery Styles */
          .gallery-item {
            background-color: #000;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            aspect-ratio: 1/1;
            position: relative;
          }
          
          .gallery-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
          }
          
          /* Pagination Styles */
          .pagination-nav {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 4px;
          }
          
          .pagination-button, .pagination-number {
            padding: 8px 12px;
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            font-size: 14px;
            cursor: pointer;
          }
          
          .pagination-active {
            background: black;
            color: white;
            border-color: black;
          }
          
          .pagination-disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          
          /* Video Styles */
          .video-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          @media (min-width: 768px) {
            .video-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
          
          .video-card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
          }
          
          .video-container {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            height: 0;
            overflow: hidden;
          }
          
          .video-link {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
          
          .video-thumbnail {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
          }
          
          .video-play-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .video-play-button {
            width: 80px;
            height: 80px;
            background: rgba(255,255,255,0.9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .play-icon {
            width: 40px;
            height: 40px;
            color: black;
          }
          
          .video-info {
            padding: 20px;
            border-top: 2px solid #ba9765;
          }
          
          .video-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
            color: black;
          }
          
          .video-description {
            color: #4b5563;
            line-height: 1.5;
          }
          
          /* iOS specific fixes */
          @supports (-webkit-touch-callout: none) {
            .gallery-item {
              display: block !important;
              height: 0 !important;
              padding-bottom: 100% !important;
              position: relative !important;
            }
            
            .gallery-image {
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              height: 100% !important;
              object-fit: cover !important;
            }
            
            .video-container {
              display: block !important;
              height: 0 !important;
              padding-bottom: 56.25% !important;
              position: relative !important;
              overflow: hidden !important;
            }
            
            .video-thumbnail {
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              height: 100% !important;
              object-fit: cover !important;
            }
            
            .video-play-button {
              width: 80px !important;
              height: 80px !important;
              background-color: rgba(255, 255, 255, 0.9) !important;
              border-radius: 50% !important;
            }
            
            .play-icon {
              width: 40px !important;
              height: 40px !important;
              color: black !important;
            }
          }
        `}</style>
      </Head>
      
      <ReelRoomNavigation />
      
      <main className="pt-20 pb-20 md:pb-0">
        {/* Hero Section — taller band (~1.5in more) to reveal more of the cover photo */}
        <div className="relative h-[34rem] overflow-hidden">
          <div className="absolute inset-0">
            <ResponsivePhoto
              src="/photos/originals/homepage/DSC03113-Enhanced-NR.jpg"
              alt="Reel Room Media"
              className="absolute inset-0 w-full h-full"
              imgClassName="w-full h-full object-cover brightness-75"
              loading="eager"
              layout="hero"
              style={{ display: 'block' }}
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-light page-heading mb-4">Media & FAQs</h1>
                <p className="text-xl mb-2 section-tagline section-tagline--light">
                  Explore our space through photos and videos—and get the answers you need.
                </p>
                <p className="text-lg italic text-brand-cream/70">
                  Peek inside before you book. No spoiler alerts.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Media Tabs */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`py-4 px-6 border-b-2 font-medium text-lg transition-all duration-300 ${
                  activeTab === 'gallery'
                    ? 'border-brand-gold text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Photo Gallery
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`py-4 px-6 border-b-2 font-medium text-lg transition-all duration-300 ${
                  activeTab === 'videos'
                    ? 'border-brand-gold text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Videos
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`py-4 px-6 border-b-2 font-medium text-lg transition-all duration-300 ${
                  activeTab === 'faq'
                    ? 'border-brand-gold text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                FAQs
              </button>
            </div>
            
            {/* Active Tab Content */}
            <div className="py-4">
              {activeTab === 'gallery' && renderGallerySection()}
              {activeTab === 'videos' && renderVideosSection()}
              {activeTab === 'faq' && renderFaqSection()}
            </div>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="py-16 bg-black text-white cta-spotlight relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="cta-spotlight__eyebrow">We&apos;re real people</span>
            <h2 className="text-3xl font-light page-heading mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-2 section-tagline section-tagline--light">
              Didn&apos;t find what you need? Drop us a line—we love talking shop.
            </p>
            <div className="fun-divider" aria-hidden="true"><span className="fun-divider__gem" /></div>
            
            <Link
              href="/book-now"
              className="inline-block mt-8 border border-white text-white px-8 py-3 uppercase tracking-widest text-sm font-light hover:bg-white/10 transition-colors"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </main>
      
      <ReelRoomFooter />
    </div>
  );
} 