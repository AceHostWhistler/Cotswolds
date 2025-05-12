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
      title: "DCP and Movie Premieres at The Reel Room Private Event Space",
      slug: "dcp-movie-premieres",
      excerpt: "Learn about DCP (Digital Cinema Package) format and how The Reel Room can host your premium movie premiere events with professional screening capabilities.",
      image: "/photos/homepage/DSC03396-Enhanced-NR.jpg",
      content: (
        <>
          <p className="mb-5">
            When it comes to hosting a movie premiere, the quality of your projection system matters. At The Reel Room, we understand the importance of showcasing your film in the best possible format.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">What is DCP?</h3>
          <p className="mb-5">
            DCP (Digital Cinema Package) is the standard format used in professional movie theaters worldwide. It provides the highest quality digital projection with superior color accuracy, contrast, and resolution compared to consumer formats like MP4 or MOV.
          </p>
          
          <p className="mb-5">
            Our state-of-the-art projection system at The Reel Room supports DCP playback, ensuring your film is presented exactly as intended, with the same quality you'd expect in a commercial cinema.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">The Perfect Premiere Experience</h3>
          <p className="mb-5">
            Hosting your film premiere at The Reel Room offers numerous advantages:
          </p>
          
          <ul className="list-disc pl-5 mb-5">
            <li className="mb-2">Professional-grade DCP projection capabilities</li>
            <li className="mb-2">Intimate theatre setting with comfortable seating for up to 70 guests</li>
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
            Our team works closely with filmmakers to ensure every detail of your premiere is perfect. From testing your DCP file in advance to arranging the ideal seating configuration, we handle the technical aspects so you can focus on celebrating your achievement.
          </p>
          
          <p className="mb-5">
            Ready to host your film premiere at Vancouver's premiere private theatre venue? Contact us today to discuss your event requirements and book your preferred date.
          </p>
        </>
      )
    },
    'welcome-to-reel-room': {
      id: 2,
      title: "Lights, Camera, Action! Welcome to Reel Room: Vancouver's Hottest Private Theatre Event Space!",
      slug: "welcome-to-reel-room",
      excerpt: "Discover Vancouver's most exclusive private theatre venue for film screenings, corporate events, and special celebrations.",
      image: "/photos/homepage/DSC03672-Enhanced-NR.jpg",
      content: (
        <>
          <p className="mb-5">
            We're thrilled to officially introduce The Reel Room to Vancouver's vibrant event scene! As the city's premier private theatre venue, we offer a unique setting where cinematic magic meets elegant event hosting.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">A New Kind of Event Space</h3>
          <p className="mb-5">
            Located in the heart of Mount Pleasant, The Reel Room combines the immersive experience of a luxury cinema with the versatility of a premium event venue. Our space was designed with filmmakers, corporate clients, and private celebrations in mind.
          </p>
          
          <p className="mb-5">
            The centerpiece of our venue is a state-of-the-art theatre featuring professional-grade projection and sound systems, complemented by an elegant lounge and bar area perfect for networking, dining, and socializing.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Perfect For Any Occasion</h3>
          <p className="mb-5">
            The Reel Room is ideal for a wide range of events:
          </p>
          
          <ul className="list-disc pl-5 mb-5">
            <li className="mb-2">Film premieres and screenings</li>
            <li className="mb-2">Corporate presentations and product launches</li>
            <li className="mb-2">Private viewing parties for sports events or award shows</li>
            <li className="mb-2">Milestone celebrations</li>
            <li className="mb-2">Networking events</li>
            <li className="mb-2">Brand activations and influencer events</li>
          </ul>
          
          <h3 className="heading-font text-xl font-medium mb-4">Customized For You</h3>
          <p className="mb-5">
            Every event at The Reel Room is tailored to your vision. Our flexible space can be configured to accommodate up to 70 guests, while our partnerships with top local caterers and beverage providers ensure a delicious culinary experience.
          </p>
          
          <p className="mb-5">
            Our dedicated team handles every detail, from technical setup to food and beverage service, creating a seamless experience for you and your guests.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Book Your Experience</h3>
          <p className="mb-5">
            Ready to host an unforgettable event? We invite you to schedule a tour of The Reel Room and discuss how we can bring your vision to life.
          </p>
          
          <p className="mb-5">
            Contact us today to learn more about availability, pricing, and custom packages. We look forward to welcoming you to The Reel Room soon!
          </p>
        </>
      )
    },
    'corporate-events': {
      id: 3,
      title: "Host Your Corporate Event at The Reel Room",
      slug: "corporate-events",
      excerpt: "Elevate your next corporate gathering with our premium private theatre venue offering state-of-the-art technology and sophisticated ambiance.",
      image: "/photos/homepage/DSC03507-Enhanced-NR.jpg",
      content: (
        <>
          <p className="mb-5">
            Corporate events deserve a venue that makes a lasting impression. The Reel Room provides a unique setting that combines professional presentation capabilities with an atmosphere of elegance and exclusivity.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Beyond Traditional Corporate Venues</h3>
          <p className="mb-5">
            Step away from conventional hotel conference rooms and banquet halls. The Reel Room offers a refreshing alternative with our cinema-inspired venue that immediately engages attendees and creates a memorable experience.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Perfect for Professional Presentations</h3>
          <p className="mb-5">
            Our venue is ideally suited for a variety of corporate functions:
          </p>
          
          <ul className="list-disc pl-5 mb-5">
            <li className="mb-2">Product launches and demonstrations</li>
            <li className="mb-2">Quarterly reviews and company announcements</li>
            <li className="mb-2">Client appreciation events</li>
            <li className="mb-2">Training sessions and workshops</li>
            <li className="mb-2">Team building film screenings</li>
            <li className="mb-2">Annual meetings and investor presentations</li>
          </ul>
          
          <h3 className="heading-font text-xl font-medium mb-4">State-of-the-Art Technology</h3>
          <p className="mb-5">
            The Reel Room features professional-grade audio-visual equipment that ensures your presentations look and sound their best. Our 4K projection system, premium sound system, and flexible connectivity options accommodate all your technical requirements.
          </p>
          
          <p className="mb-5">
            Our in-house technicians can assist with setup and remain on hand throughout your event to ensure everything runs smoothly.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Customized Corporate Packages</h3>
          <p className="mb-5">
            We offer tailored packages designed specifically for corporate clients, including:
          </p>
          
          <ul className="list-disc pl-5 mb-5">
            <li className="mb-2">Half-day and full-day rental options</li>
            <li className="mb-2">Catering services with breakfast, lunch, and dinner options</li>
            <li className="mb-2">Beverage service including premium coffee, tea, and refreshments</li>
            <li className="mb-2">Cocktail reception add-ons for networking events</li>
            <li className="mb-2">Technical support for presentations</li>
            <li className="mb-2">Custom branding opportunities throughout the venue</li>
          </ul>
          
          <p className="mb-5">
            Contact our corporate events team today to discuss how The Reel Room can elevate your next business gathering and leave a lasting impression on your team or clients.
          </p>
        </>
      )
    },
    'wedding-screenings': {
      id: 4,
      title: "Wedding Screenings & Special Celebrations",
      slug: "wedding-screenings",
      excerpt: "Create unforgettable moments by showcasing your wedding videos or anniversary montages in our luxurious private cinema setting.",
      image: "/photos/homepage/DSC03369-Enhanced-NR.jpg",
      content: (
        <>
          <p className="mb-5">
            Special life moments deserve special celebrations. The Reel Room offers a unique and intimate venue for screening wedding videos, anniversary montages, and other milestone celebration media in a setting that elevates the experience beyond the ordinary.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">A Cinematic Approach to Wedding Celebrations</h3>
          <p className="mb-5">
            Many couples invest significantly in wedding videography, yet often these beautiful films are only viewed casually on small screens. The Reel Room provides an opportunity to showcase your wedding film in a true cinema environment, allowing you and your loved ones to experience the magic of your special day in magnificent detail.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Perfect for Multiple Celebrations</h3>
          <p className="mb-5">
            Our venue is ideal for various special occasions:
          </p>
          
          <ul className="list-disc pl-5 mb-5">
            <li className="mb-2">Post-wedding screenings for couples and their families</li>
            <li className="mb-2">First anniversary celebrations with friends who couldn't attend the wedding</li>
            <li className="mb-2">Milestone anniversary parties featuring a montage of memories</li>
            <li className="mb-2">Engagement celebrations with a customized film about the couple</li>
            <li className="mb-2">Family reunion screenings of heritage videos and photo collections</li>
            <li className="mb-2">Memorial celebrations honoring loved ones</li>
          </ul>
          
          <h3 className="heading-font text-xl font-medium mb-4">The Complete Experience</h3>
          <p className="mb-5">
            At The Reel Room, we create a comprehensive celebration experience:
          </p>
          
          <p className="mb-5">
            Our intimate theatre features comfortable seating for up to 70 guests, creating the perfect environment for sharing these precious moments. The adjacent lounge area provides an elegant space for pre or post-screening gatherings, with customizable food and beverage options available to complete the experience.
          </p>
          
          <h3 className="heading-font text-xl font-medium mb-4">Technical Excellence</h3>
          <p className="mb-5">
            Our state-of-the-art projection and sound systems ensure your videos and slideshows are presented with exceptional clarity and audio quality. Our technical team can work with various media formats and will ensure your content looks and sounds its best.
          </p>
          
          <p className="mb-5">
            Contact us today to discuss how The Reel Room can help you celebrate life's special moments in a truly memorable way.
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