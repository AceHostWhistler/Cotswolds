import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '../components/ReelRoomNavigation';
import ReelRoomFooter from '../components/ReelRoomFooter';
import { scrollToTop } from '@/utils/scrollUtils';

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
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12; // Reduced to 12 images per page for better performance
  
  useEffect(() => {
    setIsPageLoaded(true);
    
    // Ensure page starts from the top
    scrollToTop();
  }, []);
  
  // Complete list of all photos from the homepage-originals folder - reduced for better performance
  const galleryImages = [
    'DSC03060-Enhanced-NR.jpg',
    'DSC03061-Enhanced-NR.jpg',
    'DSC03063-Enhanced-NR.jpg',
    'DSC03064-Enhanced-NR.jpg',
    'DSC03066-Enhanced-NR.jpg',
    'DSC03070-Enhanced-NR.jpg',
    'DSC03073-Enhanced-NR.jpg',
    'DSC03078-Enhanced-NR.jpg',
    'DSC03081-Enhanced-NR.jpg',
    'DSC03086-Enhanced-NR.jpg',
    'DSC03088-Enhanced-NR.jpg',
    'DSC03092-Enhanced-NR.jpg',
    'DSC03095-Enhanced-NR.jpg',
    'DSC03096-Enhanced-NR.jpg',
    'DSC03097-Enhanced-NR.jpg',
    'DSC03099-Enhanced-NR.jpg',
    'DSC03101-Enhanced-NR.jpg',
    'DSC03102-Enhanced-NR.jpg',
    'DSC03104-Enhanced-NR.jpg',
    'DSC03106-Enhanced-NR.jpg',
    'DSC03110-Enhanced-NR.jpg',
    'DSC03113-Enhanced-NR.jpg',
    'DSC03125-Enhanced-NR.jpg',
    'DSC03127-Enhanced-NR.jpg',
    'DSC03131-Enhanced-NR.jpg',
    'DSC03138-Enhanced-NR.jpg',
    'DSC03159-Enhanced-NR.jpg',
    'DSC03166-Enhanced-NR.jpg',
    'DSC03167-Enhanced-NR.jpg',
    'DSC03172-Enhanced-NR.jpg',
    'DSC03192-Enhanced-NR-Edit.jpg',
    'DSC03198-Enhanced-NR.jpg',
    'DSC03199-Enhanced-NR.jpg',
    'DSC03217-Enhanced-NR.jpg',
    'DSC03222-Enhanced-NR.jpg',
    'DSC03223-Enhanced-NR.jpg'
  ];
  
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
        <h2 className="text-3xl font-semibold heading-font mb-4">Explore Our Space</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Browse our gallery showcasing The Reel Room's elegant interior, versatile event space, and premium amenities.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Showing {indexOfFirstImage + 1}-{Math.min(indexOfLastImage, galleryImages.length)} of {galleryImages.length} images
        </p>
      </div>
      
      {/* Simple Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((img, index) => (
          <div 
            key={index} 
            className="gallery-item"
          >
            <img 
              src={`/photos/homepage-originals/${img}`} 
              alt={`Reel Room Gallery Image ${indexOfFirstImage + index + 1}`}
              className="gallery-image"
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
          See Reel Room in action through our featured video content showcasing various events and experiences.
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
              <img 
                src="/photos/homepage-originals/DSC03066-Enhanced-NR.jpg"
                alt="Film Release Video Thumbnail"
                className="video-thumbnail"
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
            <h3 className="video-title">Film Release Event Parties</h3>
            <p className="video-description">
              Experience the elegance of Reel Room's film premiere events. Our venue provides filmmakers with a sophisticated setting to showcase their work to cast, crew, investors, and special guests.
            </p>
          </div>
        </div>
        
        {/* Halloween/Sports Video */}
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
              <img 
                src="/photos/homepage-originals/DSC03110-Enhanced-NR.jpg"
                alt="Sports Events Video Thumbnail"
                className="video-thumbnail"
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
            <h3 className="video-title">General Parties & Sporting Event Venue</h3>
            <p className="video-description">
              From themed celebrations to sports viewing parties, Reel Room transforms any occasion into an extraordinary experience. Our versatile space accommodates various events with customizable options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
  const faqSections: FaqSections = {
    general: [
      {
        question: "Where is The Reel Room located?",
        answer: "The Reel Room is located in the Mount Pleasant neighborhood of Vancouver, BC, just minutes away from downtown."
      },
      {
        question: "What is the capacity of The Reel Room?",
        answer: "Our venue comfortably accommodates anywhere between 5 and 150+ guests. The theatre comfortably sits between 40 and 44 guests, while the lounge which offers the bar area offers a mounted 70\" TV and speakers, which can hold about 60+ people confortably. There is an additional floor with elevator or stair access, that can hold 40+ people, where past groups often set up a bartender here for larger bookings."
      },
      {
        question: "Do you provide parking?",
        answer: "While we don't have our own parking lot, there is ample street parking and several paid parking lots within a short walking distance."
      },
      {
        question: "Is the venue wheelchair accessible?",
        answer: "Yes you can enter through the main door which offers access via stair case or via elevator!"
      },
      {
        question: "What are your operating hours?",
        answer: "The Reel Room is available for bookings 7 days a week. Our standard event times are between 10am and 12am, but we can accommodate special requests outside these hours."
      }
    ],
    booking: [
      {
        question: "How far in advance should I book my event?",
        answer: "We recommend booking at least 4-6 weeks in advance for weekend events and 2-4 weeks for weekday events to ensure availability."
      },
      {
        question: "What is your cancellation policy?",
        answer: "Cancellations made 14 days or more before the event date will receive a full refund of the deposit. Cancellations made less than 14 days before will forfeit the deposit."
      },
      {
        question: "Can I visit the space before booking?",
        answer: "Yes! We encourage potential clients to schedule a tour of our venue. Please contact us at info@reelroom.ca to arrange a viewing."
      },
      {
        question: "Is a deposit required to secure a booking?",
        answer: "Yes, a 50% deposit is required to secure your reservation. The remaining balance is due 7 days before your event."
      }
    ],
    services: [
      {
        question: "Can you accommodate my own catering?",
        answer: "While we have preferred catering partners, we can discuss accommodating outside catering for special dietary needs or cultural preferences."
      },
      {
        question: "Do you provide alcohol service?",
        answer: "Yes, we offer a full bar service with a selection of premium spirits, wines, beers, and custom cocktails. We have the appropriate licenses and trained staff."
      },
      {
        question: "What audio-visual equipment is available?",
        answer: "We provide state-of-the-art projection, sound systems, microphones, and lighting. Our technical team can help set up and manage any special AV requirements."
      },
      {
        question: "Can I bring my own decoration?",
        answer: "Yes, you are welcome to bring your own decorations. Please note that they must be easily removable and not cause any damage to the venue."
      }
    ],
    technical: [
      {
        question: "What file formats do you support for screenings?",
        answer: "We support most common video formats including MP4, MOV, and DCP. We recommend discussing technical requirements with our team in advance."
      },
      {
        question: "Can I connect my laptop or device to your system?",
        answer: "Yes, our system supports HDMI, DisplayPort, and wireless connections for most devices. We can assist with setup and testing prior to your event."
      },
      {
        question: "Do you offer live streaming capabilities?",
        answer: "Yes, we can set up professional live streaming for your event to platforms like YouTube, Vimeo, Facebook, and others."
      },
      {
        question: "What is the quality of your projection system?",
        answer: "We feature a high-definition 4K projection system with professional-grade sound, providing an immersive viewing experience."
      }
    ]
  };
  
  const renderFaqSection = () => (
    <div className="space-y-8">
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
      <div className="space-y-6 max-w-4xl mx-auto">
        {faqSections[activeFaqSection].map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 hover:border-brand-gold/30 transition-colors duration-300">
            <h3 className="text-xl font-semibold mb-3 text-black">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <Head>
        <title>Media & FAQs | Reel Room</title>
        <meta name="description" content="Explore our photo gallery, videos, and find answers to frequently asked questions about Reel Room in Vancouver, BC." />
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
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/photos/originals/homepage/DSC03659-Enhanced-NR.jpg"
              alt="Reel Room Media"
              className="w-full h-full object-cover brightness-75"
              loading="eager"
              style={{display: 'block'}}
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Media & FAQs</h1>
                <p className="text-xl mb-8">
                  Explore our space through photos and videos, and find answers to common questions.
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
        <div className="py-16 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              If you couldn't find the information you were looking for, please don't hesitate to contact us directly.
            </p>
            
            <Link
              href="/book-now"
              className="inline-block border border-white text-white px-8 py-3 uppercase tracking-widest text-sm font-light hover:bg-white/10 transition-colors"
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