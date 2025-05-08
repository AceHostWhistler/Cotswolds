import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import AceCascadeNavigation from '@/components/AceCascadeNavigation';
import AceCascadeFooter from '@/components/AceCascadeFooter';
import { useRouter } from 'next/router';

const BlogArticle = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Blog Article | Ace Cascade Lodge</title>
        <meta
          name="description"
          content="Read our latest blog articles about Whistler's attractions, events, and seasonal activities."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <AceCascadeNavigation />
        
        <main className="pt-20">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
              <Link
                href="/blogs"
                className="text-[#0066CC] hover:text-[#004C99] font-medium inline-flex items-center"
              >
                ← Back to Blog
              </Link>
            </div>

            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-6">Blog Article Title</h1>
              <div className="relative h-96 mb-8">
                <Image
                  src="/photos/Blogs/677abbfa808496676931dd85_whistlerolympicpeakview-p-1080.jpg"
                  alt="Blog Featured Image"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div className="text-gray-600 mb-8">
                <p>Blog content goes here...</p>
              </div>
            </div>

            <div className="mt-12 border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <button className="text-[#0066CC] hover:text-[#004C99]">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </main>

        <AceCascadeFooter />
      </div>
    </>
  );
};

export default BlogArticle; 