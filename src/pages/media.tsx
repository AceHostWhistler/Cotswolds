import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '../components/ReelRoomNavigation';
import ReelRoomFooter from '../components/ReelRoomFooter';
import OptimizedImage from '../components/OptimizedImage';
import Image from 'next/image';

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
  const [activeTab, setActiveTab] = useState('videos');
  const [activeFaqSection, setActiveFaqSection] = useState('general');
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 30; // Increased from 12 to 30 images per page
  
  useEffect(() => {
    setIsPageLoaded(true);
    
    // Load Vimeo script for the iframe embeds
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  
  // Complete list of all photos from the homepage-originals folder
  const galleryImages = [
    'DSC03747-Enhanced-NR.jpg',
    'DSC03747-Enhanced-NR-1.jpg',
    'DSC03720-Enhanced-NR.jpg',
    'DSC03705-Enhanced-NR.jpg',
    'DSC03696-Enhanced-NR.jpg',
    'DSC03692-Enhanced-NR.jpg',
    'DSC03687-Enhanced-NR.jpg',
    'DSC03683-Enhanced-NR.jpg',
    'DSC03682-Enhanced-NR.jpg',
    'DSC03676-Enhanced-NR.jpg',
    'DSC03672-Enhanced-NR.jpg',
    'DSC03666-Enhanced-NR.jpg',
    'DSC03663-Enhanced-NR.jpg',
    'DSC03659-Enhanced-NR.jpg',
    'DSC03644-Enhanced-NR.jpg',
    'DSC03643-Enhanced-NR.jpg',
    'DSC03640-Enhanced-NR.jpg',
    'DSC03634-Enhanced-NR.jpg',
    'DSC03633-Enhanced-NR.jpg',
    'DSC03571-Enhanced-NR.jpg',
    'DSC03554-Enhanced-NR.jpg',
    'DSC03549-Enhanced-NR.jpg',
    'DSC03546-Enhanced-NR.jpg',
    'DSC03535-Enhanced-NR.jpg',
    'DSC03533-Enhanced-NR.jpg',
    'DSC03531-Enhanced-NR.jpg',
    'DSC03530-Enhanced-NR.jpg',
    'DSC03529-Enhanced-NR.jpg',
    'DSC03527-Enhanced-NR.jpg',
    'DSC03523-Enhanced-NR.jpg',
    'DSC03522-Enhanced-NR.jpg',
    'DSC03521-Enhanced-NR.jpg',
    'DSC03509-Enhanced-NR.jpg',
    'DSC03507-Enhanced-NR.jpg',
    'DSC03505-Enhanced-NR.jpg',
    'DSC03476-Enhanced-NR.jpg',
    'DSC03472-Enhanced-NR.jpg',
    'DSC03469-Enhanced-NR.jpg',
    'DSC03464-Enhanced-NR.jpg',
    'DSC03459.jpg',
    'DSC03459-Enhanced-NR.jpg',
    'DSC03459-Enhanced-NR-1.jpg',
    'DSC03459-2.jpg',
    'DSC03439-Enhanced-NR.jpg',
    'DSC03436-Enhanced-NR.jpg',
    'DSC03432-Enhanced-NR.jpg',
    'DSC03428-Enhanced-NR.jpg',
    'DSC03424-Enhanced-NR.jpg',
    'DSC03420-Enhanced-NR.jpg',
    'DSC03413-Enhanced-NR.jpg',
    'DSC03411-Enhanced-NR.jpg',
    'DSC03406-Enhanced-NR.jpg',
    'DSC03401-Enhanced-NR.jpg',
    'DSC03399-Enhanced-NR.jpg',
    'DSC03395-Enhanced-NR.jpg',
    'DSC03393-Enhanced-NR.jpg',
    'DSC03389-Enhanced-NR.jpg',
    'DSC03388-Enhanced-NR.jpg',
    'DSC03369-Enhanced-NR.jpg',
    'DSC03365-Enhanced-NR.jpg',
    'DSC03360.jpg',
    'DSC03360-Enhanced-NR.jpg',
    'DSC03344-Enhanced-NR.jpg',
    'DSC03341-Enhanced-NR.jpg',
    'DSC03339.jpg',
    'DSC03339-Enhanced-NR.jpg',
    'DSC03335-Enhanced-NR.jpg',
    'DSC03332-Enhanced-NR.jpg',
    'DSC03331-Enhanced-NR.jpg',
    'DSC03329-Enhanced-NR.jpg',
    'DSC03327-Enhanced-NR.jpg',
    'DSC03326.jpg',
    'DSC03326-Enhanced-NR.jpg',
    'DSC03321-Enhanced-NR.jpg',
    'DSC03318-Enhanced-NR.jpg',
    'DSC03316-Enhanced-NR.jpg',
    'DSC03315-Enhanced-NR.jpg',
    'DSC03313-Enhanced-NR.jpg',
    'DSC03308-Enhanced-NR.jpg',
    'DSC03301-Enhanced-NR.jpg',
    'DSC03297.jpg',
    'DSC03297-Enhanced-NR.jpg',
    'DSC03296-Enhanced-NR.jpg',
    'DSC03289-Enhanced-NR.jpg',
    'DSC03287-Enhanced-NR.jpg',
    'DSC03279-Enhanced-NR.jpg',
    'DSC03275-Enhanced-NR.jpg',
    'DSC03273-Enhanced-NR.jpg',
    'DSC03272-Enhanced-NR.jpg',
    'DSC03264.jpg',
    'DSC03264-Enhanced-NR.jpg',
    'DSC03262-Enhanced-NR.jpg',
    'DSC03261-Enhanced-NR.jpg',
    'DSC03260-Enhanced-NR.jpg',
    'DSC03259.jpg',
    'DSC03259-Enhanced-NR.jpg',
    'DSC03259-Enhanced-NR-1.jpg',
    'DSC03259-2.jpg',
    'DSC03256-Enhanced-NR.jpg'
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
      
      {/* Gallery with consistent sizing */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentImages.map((img, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="h-52 md:h-64">
              <img 
                src={`/photos/homepage-originals/${img}`} 
                alt={`The Reel Room Gallery Image ${indexOfFirstImage + index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span className="sr-only">Previous</span>
              &larr; Prev
            </button>
            
            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                  currentPage === number
                    ? 'z-10 bg-black text-white border-black'
                    : 'bg-white text-gray-500 hover:bg-gray-50'
                }`}
              >
                {number}
              </button>
            ))}
            
            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span className="sr-only">Next</span>
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
          See The Reel Room in action through our featured video content showcasing various events and experiences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Film Release Video */}
        <div className="space-y-6 group">
          <div className="rounded-lg overflow-hidden border border-brand-gold/30 shadow-lg transition-all duration-300 group-hover:shadow-xl">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe 
                src="https://player.vimeo.com/video/1027464900?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="Film Release/Launch Parties at The Reel Room Vancouver"
                className="vimeo-player"
              ></iframe>
            </div>
          </div>
          <div className="text-center border-b-2 border-brand-gold pb-3 bg-black/5 pt-3 rounded-t-lg">
            <h3 className="heading-font text-2xl font-bold mt-2 text-brand-gold">Film Release Event Parties</h3>
          </div>
          <p className="body-font text-gray-600">
            Experience the elegance of The Reel Room's film premiere events. Our venue provides filmmakers with a sophisticated setting to showcase their work to cast, crew, investors, and special guests. Complete with state-of-the-art projection and sound equipment, our space elevates any film screening to a memorable occasion.
          </p>
        </div>
        
        {/* Halloween/Sports Video */}
        <div className="space-y-6 group">
          <div className="rounded-lg overflow-hidden border border-brand-gold/30 shadow-lg transition-all duration-300 group-hover:shadow-xl">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe 
                src="https://player.vimeo.com/video/1082926490?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                title="Reel Room Events | Halloween, Sports Games"
                className="vimeo-player"
              ></iframe>
            </div>
          </div>
          <div className="text-center border-b-2 border-brand-gold pb-3 bg-black/5 pt-3 rounded-t-lg">
            <h3 className="heading-font text-2xl font-bold mt-2 text-brand-gold">General Parties & Sporting Event Venue</h3>
          </div>
          <p className="body-font text-gray-600">
            From themed celebrations to sports viewing parties, The Reel Room transforms any occasion into an extraordinary experience. Our versatile space accommodates various events with customizable lighting, sound, and catering options. Whether it's a championship game or a holiday gathering, we provide an atmosphere that can't be replicated at home.
          </p>
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
        answer: "Our venue comfortably accommodates up to 85-95+ guests, with a theatre area and a lounge & bar area with a mounted 70\" TV."
      },
      {
        question: "Do you provide parking?",
        answer: "While we don't have our own parking lot, there is ample street parking and several paid parking lots within a short walking distance."
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
        <title>Media & FAQs | The Reel Room</title>
        <meta name="description" content="Explore our photo gallery, videos, and find answers to frequently asked questions about The Reel Room in Vancouver, BC." />
      </Head>
      
      <ReelRoomNavigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/photos/homepage-originals/DSC03659-Enhanced-NR.jpg"
              alt="The Reel Room Media"
              className="w-full h-full object-cover brightness-75"
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
              href="/reservations"
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