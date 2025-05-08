import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Custom404() {
  const router = useRouter();
  const [suggestedPath, setSuggestedPath] = useState<string | null>(null);
  
  // This effect runs when the component mounts and attempts to suggest an alternative path
  useEffect(() => {
    if (!router.isReady) return;
    
    const path = router.asPath;
    
    // Clean up the path
    const cleanPath = path.split('?')[0].toLowerCase();
    
    // Handle common redirects
    if (cleanPath.includes('blog') && !cleanPath.includes('blogs')) {
      setSuggestedPath('/blogs');
    } else if (cleanPath.includes('about')) {
      setSuggestedPath('/our-story');
    } else if (cleanPath.includes('properties') && cleanPath.length > 11) {
      // If it's a specific property that doesn't exist, suggest the main properties page
      setSuggestedPath('/properties');
    } else if (cleanPath.includes('listing') && !cleanPath.includes('listings')) {
      // If it's a single "listing" (not plural), suggest the proper "listings" path
      const propertySlug = cleanPath.split('/').pop();
      setSuggestedPath(`/listings/${propertySlug}`);
    }
  }, [router.isReady, router.asPath]);

  return (
    <>
      <Head>
        <title>Page Not Found | AceHost Whistler</title>
        <meta name="description" content="The page you are looking for doesn't exist. Let us help you find what you're looking for." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navigation transparent={false} />
        
        <main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
          <div className="max-w-2xl w-full text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              We're sorry, but the page you're looking for doesn't exist or has been moved.
            </p>
            
            {suggestedPath && (
              <div className="bg-blue-50 p-4 rounded-lg mb-8 border border-blue-200">
                <p className="text-blue-800 mb-2">Did you mean to visit:</p>
                <Link 
                  href={suggestedPath}
                  className="text-blue-600 underline font-medium hover:text-blue-800"
                >
                  {suggestedPath}
                </Link>
              </div>
            )}
            
            <div className="space-y-4">
              <p className="font-medium text-gray-700">Here are some helpful links:</p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/"
                  className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  href="/properties"
                  className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Properties
                </Link>
                <Link 
                  href="/blogs"
                  className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Blog
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
} 