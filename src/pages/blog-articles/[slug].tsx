import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ReelRoomNavigation from '@/components/ReelRoomNavigation';
import ReelRoomFooter from '@/components/ReelRoomFooter';
import { useRouter } from 'next/router';

const BlogArticle = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Blog Article | The Reel Room</title>
        <meta
          name="description"
          content="Read our latest blog articles about The Reel Room venue, events, and special offerings."
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <ReelRoomNavigation />
        
        <main className="pt-20">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
              <Link
                href="/blog"
                className="text-brand-gold hover:text-brand-cream font-medium inline-flex items-center"
              >
                ← Back to Blog
              </Link>
            </div>

            <div className="prose prose-lg max-w-none prose-invert">
              <h1 className="text-4xl font-bold mb-6 heading-font">Loading Article...</h1>
              <div className="relative h-96 mb-8">
                <div className="w-full h-full bg-gray-800 rounded-lg animate-pulse"></div>
              </div>
              <div className="text-gray-400 mb-8">
                <p>Please navigate to a specific blog article. This is a fallback page.</p>
                <p>Our blog articles are located in individual folders for better organization.</p>
              </div>
              
              <div className="mt-8 p-6 border border-brand-gold rounded-lg">
                <h3 className="text-xl font-bold mb-4 heading-font">Check out our available articles:</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog-articles/dcp-and-movie-premieres-at-the-reel-room" className="text-brand-gold hover:underline">
                      DCP and Movie Premieres at The Reel Room
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-articles/lights-camera-action-welcome-to-reel-room" className="text-brand-gold hover:underline">
                      Lights, Camera, Action! Welcome to Reel Room
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-articles/canucks-hockey-games-at-the-reel-room" className="text-brand-gold hover:underline">
                      The Ultimate Canucks Game Day Experience
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </main>

        <ReelRoomFooter />
      </div>
    </>
  );
};

export default BlogArticle; 