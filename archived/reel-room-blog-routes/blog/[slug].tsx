import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
}

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Blog posts data
  const blogPosts: Record<string, BlogPost> = {
    'dcp-movie-premieres': {
      id: 1,
      title: "DCP and Movie Premieres at The Reel Room Private Screening Studio",
      slug: "dcp-movie-premieres",
      excerpt: "Learn about DCP (Digital Cinema Package) and how The Reel Room supports premium premiere screenings with professional playback.",
      image: "/photos/homepage/DSC03396-Enhanced-NR.jpg",
      content: (
        <>
          <p className="mb-5">
            When it comes to presenting a movie premiere, projection quality is everything. At The Reel Room, we understand the importance of showcasing your film in the best possible format.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">What is DCP?</h3>
          <p className="mb-5">
            DCP (Digital Cinema Package) is the standard format used in professional commercial cinemas worldwide. It provides the highest quality digital projection with superior color accuracy, contrast, and resolution compared to consumer formats like MP4 or MOV.
          </p>
          
          <p className="mb-5">
            Our state-of-the-art projection system at The Reel Room supports DCP playback, ensuring your film is presented exactly as intended, with the same quality you'd expect in a commercial cinema.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">The Perfect Premiere Experience</h3>
          <p className="mb-5">
            Booking a premiere screening at The Reel Room offers numerous advantages:
          </p>
          
          <ul className="list-disc pl-5 mb-5">
            <li className="mb-2">Professional-grade DCP projection capabilities</li>
            <li className="mb-2">Intimate screen room setting with comfortable seating for up to 70 guests</li>
            <li className="mb-2">Premium sound system for immersive audio experience</li>
            <li className="mb-2">Elegant lounge area for pre and post-screening mingling</li>
            <li className="mb-2">Customizable food and beverage options</li>
            <li className="mb-2">Full technical support from our experienced staff</li>
          </ul>
          
          <p className="mb-5">
            Whether you're premiering a feature film, documentary, short film, or any other cinematic work, The Reel Room provides the perfect blend of technical excellence and sophisticated ambiance.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Planning Your Premiere</h3>
          <p className="mb-5">
            Our team works closely with filmmakers to ensure every detail of your premiere is perfect. From testing your DCP file in advance to arranging the ideal seating configuration, we handle the technical aspects so you can focus on the work on screen.
          </p>
          
          <p className="mb-5">
            Ready to book a premiere screening at Vancouver&apos;s private cinema facility? Contact us today to discuss technical requirements and reserve your dates.
          </p>
        </>
      )
    },
    'welcome-to-reel-room': {
      id: 2,
      title: "Lights, Camera, Action! Welcome to Reel Room: Vancouver's Private screen room Studio",
      slug: "welcome-to-reel-room",
      excerpt: "Discover Vancouver's private cinema facility for film screenings, corporate productions, and studio rental.",
      image: "/photos/homepage/DSC03672-Enhanced-NR.jpg",
      content: (
        <>
          <p className="mb-5">
            We&apos;re thrilled to introduce The Reel Room to Vancouver&apos;s production community—a private cinema built for critical viewing, corporate playback, and controlled studio rental.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">A production-first screening room</h3>
          <p className="mb-5">
            Located in Mount Pleasant, The Reel Room pairs a luxury cinema environment with flexible studio rental. The facility is designed for filmmakers, agencies, and corporate content teams who need reliable picture, sound, and schedule discipline.
          </p>
          
          <p className="mb-5">
            The centerpiece is a state-of-the-art screen room with professional-grade projection and sound, plus a lounge and bar zone for notes, interviews, or secondary playback.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Typical bookings</h3>
          <p className="mb-5">
            The Reel Room supports a focused set of rental uses:
          </p>
          
          <ul className="list-disc pl-5 mb-5">
            <li className="mb-2">Film premieres and DCP reviews</li>
            <li className="mb-2">Corporate presentations, launches, and shareholder streams</li>
            <li className="mb-2">Reference playback, colour reviews, and client sign-offs</li>
            <li className="mb-2">Press or stakeholder playbacks under your direction</li>
            <li className="mb-2">Branded content playbacks and staged technical runs</li>
            <li className="mb-2">Photo or video shoots requiring a cinema set</li>
          </ul>
          
          <h3 className="heading-font text-xl font-medium mb-4">Built around your run-of-show</h3>
          <p className="mb-5">
            Every rental is scoped to your technical brief and timeline. The space can be configured for roughly 70 seated attendees in the screen room, with additional lounge capacity as needed. Catering partners are available when food service supports the production day.
          </p>
          
          <p className="mb-5">
            Our team prioritizes signal path, calibration, and staffing so your crew can stay focused on the work.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Book a tour</h3>
          <p className="mb-5">
            Ready to walk the room? Schedule a tour and we&apos;ll map the facility to your next screening or shoot.
          </p>
          
          <p className="mb-5">
            Contact us today to learn more about availability, pricing, and custom packages. We look forward to welcoming you to The Reel Room soon!
          </p>
        </>
      )
    },
    'corporate-events': {
      id: 3,
      title: "Corporate Productions at The Reel Room",
      slug: "corporate-events",
      excerpt: "Elevate your next corporate screening or presentation with our private cinema studio and broadcast-style AV.",
      image: "/photos/homepage/DSC03507-Enhanced-NR.jpg",
      content: (
        <>
          <p className="mb-5">
            Corporate storytelling deserves a picture-first room. The Reel Room combines presentation-grade AV with the impact of a true cinema environment—built for leadership keynotes, launch films, and stakeholder reviews.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Beyond hotel ballrooms</h3>
          <p className="mb-5">
            Skip the folding screens. Our cinema layout keeps attention on your content while lounges support breakout conversations and hospitality that follows your schedule.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Built for professional playback</h3>
          <p className="mb-5">
            Typical corporate rentals include:
          </p>
          
          <ul className="list-disc pl-5 mb-5">
            <li className="mb-2">Product launches and demo reels</li>
            <li className="mb-2">Quarterly reviews and company announcements</li>
            <li className="mb-2">Client and partner screenings</li>
            <li className="mb-2">Training modules and compliance playback</li>
            <li className="mb-2">Team screenings tied to culture initiatives</li>
            <li className="mb-2">Annual meetings and investor presentations</li>
          </ul>
          
          <h3 className="heading-font text-xl font-medium mb-4">State-of-the-Art Technology</h3>
          <p className="mb-5">
            The Reel Room features professional-grade audio-visual equipment that ensures your presentations look and sound their best. Our 4K projection system, premium sound system, and flexible connectivity options accommodate all your technical requirements.
          </p>
          
          <p className="mb-5">
            Our technicians assist with setup and stay available through your rental block to keep playback and switching on schedule.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Corporate rental packages</h3>
          <p className="mb-5">
            We tailor quotes around production needs, including:
          </p>
          
          <ul className="list-disc pl-5 mb-5">
            <li className="mb-2">Half-day and full-day studio rental</li>
            <li className="mb-2">Catering services with breakfast, lunch, and dinner options</li>
            <li className="mb-2">Beverage service including premium coffee, tea, and refreshments</li>
            <li className="mb-2">Lounge hospitality timed to your rental when required</li>
            <li className="mb-2">Technical support for presentations and streaming</li>
            <li className="mb-2">Custom branding placements approved with facilities</li>
          </ul>
          
          <p className="mb-5">
            Contact our team to align The Reel Room with your next corporate screening, launch, or internal production day.
          </p>
        </>
      )
    },
    'milestone-film-screenings': {
      id: 4,
      title: "Legacy & Long-Form Master Playback (Studio Rental)",
      slug: "milestone-film-screenings",
      excerpt: "Screen anniversary edits, memorial films, and legacy archives in a calibrated private cinema—booked as studio rental with technical support.",
      image: "/photos/homepage/DSC03369-Enhanced-NR.jpg",
      content: (
        <>
          <p className="mb-5">
            Long-form personal masters deserve a proper screening room. The Reel Room is rented as a private cinema for playback of legacy documentaries, memorial films, anniversary edits, and family archives—with calibrated picture and sound instead of a laptop in a multipurpose room.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Why screen in a cinema environment</h3>
          <p className="mb-5">
            Personal and legacy films are often finished in surround and wide colour—viewing them on small devices leaves detail on the table. Booking the screen room lets viewers experience the master the way your editor intended.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Common closed playback rentals</h3>
          <p className="mb-5">
            Typical studio bookings in this category include:
          </p>
          
          <ul className="list-disc pl-5 mb-5">
            <li className="mb-2">Post-production reviews of long-form personal films for small groups</li>
            <li className="mb-2">Anniversary or milestone edit playbacks</li>
            <li className="mb-2">Montage and chapter reviews for multi-year projects</li>
            <li className="mb-2">Director or editor notes sessions on near-final masters</li>
            <li className="mb-2">Heritage and archive nights with controlled attendance</li>
            <li className="mb-2">Memorial films presented as closed technical playbacks</li>
          </ul>
          
          <h3 className="heading-font text-xl font-medium mb-4">How the rental is structured</h3>
          <p className="mb-5">
            Your booking is a studio rental with technical support:
          </p>
          
          <p className="mb-5">
            The screen room seats up to roughly 70 for focused viewing, with a lounge for pre- or post-playback discussion. Food and beverage are optional add-ons scheduled around your approved run-of-show.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Technical Excellence</h3>
          <p className="mb-5">
            Our state-of-the-art projection and sound systems ensure your videos and slideshows are presented with exceptional clarity and audio quality. Our technical team can work with various media formats and will ensure your content looks and sounds its best.
          </p>
          
          <p className="mb-5">
            Contact us to book a private screening block and confirm format, runtime, and staffing for your playback day.
          </p>
        </>
      )
    }
  };
  
  const post = slug ? blogPosts[slug as string] : null;
  
  if (!post && slug) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center text-white">
          <h1 className="heading-font text-3xl font-light mb-4">Blog Post Not Found</h1>
          <p className="body-font mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="inline-block bg-brand-gold text-black px-6 py-3 rounded-md transition-colors hover:bg-brand-cream">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  if (!post) {
    return null; // Return null during initial load when slug is undefined
  }
  
  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <Head>
        <title>{post.title} | The Reel Room Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Top Navigation Bar */}
      <div className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="/brand/primary-logo.svg" alt="Reel Room" className="h-12 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/experiences" className="heading-font uppercase tracking-widest text-sm font-light hover:text-brand-gold transition-colors">
              Experiences & Pricing
            </Link>
            <Link href="/reservations" className="heading-font uppercase tracking-widest text-sm font-light hover:text-brand-gold transition-colors">
              Reservations
            </Link>
            <Link href="/media" className="heading-font uppercase tracking-widest text-sm font-light hover:text-brand-gold transition-colors">
              Media & FAQs
            </Link>
            <Link href="/blog" className="heading-font uppercase tracking-widest text-sm font-light text-brand-gold border-b border-brand-gold pb-1">
              Reel Room Blog
            </Link>
            <Link href="/contact" className="heading-font uppercase tracking-widest text-sm font-light hover:text-brand-gold transition-colors">
              Contact Us
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-brand-gold" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Blog Post Header */}
      <div className="relative h-96 overflow-hidden">
        <OptimizedImage
          src={post.image}
          alt={post.title}
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="heading-font text-4xl md:text-5xl font-light tracking-wide max-w-4xl mx-auto">
              {post.title}
            </h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
          </div>
        </div>
      </div>
      
      {/* Blog Post Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto">
              {post.content}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                href="/blog"
                className="heading-font inline-block uppercase tracking-widest text-sm border-b border-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
              >
                &larr; Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Posts */}
      <section className="py-16 bg-brand-cream">
        <div className="container mx-auto px-4">
          <h2 className="heading-font text-3xl font-light text-center mb-12">More Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(blogPosts)
              .filter(relatedPost => relatedPost.slug !== post.slug)
              .slice(0, 3)
              .map(relatedPost => (
                <div key={relatedPost.id} className="bg-white shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <OptimizedImage
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="heading-font text-xl font-light mb-3">{relatedPost.title}</h3>
                    <p className="body-font text-gray-600 text-sm mb-4">{relatedPost.excerpt}</p>
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="heading-font inline-block uppercase tracking-widest text-xs border-b border-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors"
                    >
                      Read article
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* Bottom Navigation Links */}
      <section className="py-12 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 uppercase tracking-widest text-sm font-light">
            <Link href="/experiences" className="heading-font hover:text-brand-gold transition-colors">
              experiences
            </Link>
            <Link href="/media" className="heading-font hover:text-brand-gold transition-colors">
              media & faqs
            </Link>
            <Link href="/reservations" className="heading-font hover:text-brand-gold transition-colors">
              reservations
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-black text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          <p className="body-font text-white text-opacity-60">Reel Room 2024</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="/privacy-policy" className="body-font text-white text-opacity-60 hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal-disclaimer" className="body-font text-white text-opacity-60 hover:text-brand-gold transition-colors">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </footer>
      
      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-90 z-50 transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="h-full flex flex-col items-center justify-center text-white space-y-8">
          <Link href="/" className="heading-font text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors">
            Home
          </Link>
          <Link href="/experiences" className="heading-font text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors">
            Experiences & Pricing
          </Link>
          <Link href="/reservations" className="heading-font text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors">
            Reservations
          </Link>
          <Link href="/media" className="heading-font text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors">
            Media & FAQs
          </Link>
          <Link href="/blog" className="heading-font text-2xl uppercase tracking-widest font-light text-brand-gold">
            Reel Room Blog
          </Link>
          <Link href="/videos" className="heading-font text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors">
            Videos
          </Link>
          <Link href="/contact" className="heading-font text-2xl uppercase tracking-widest font-light hover:text-brand-gold transition-colors">
            Contact Us
          </Link>
        </div>
        
        <button className="absolute top-8 right-8 text-brand-gold" onClick={toggleMenu}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
} 