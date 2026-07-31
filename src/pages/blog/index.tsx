import React, { useEffect } from 'react';
import Link from 'next/link';
import ReelRoomNavigation from '@/components/ReelRoomNavigation';
import ReelRoomFooter from '@/components/ReelRoomFooter';
import ResponsivePhoto from '@/components/ResponsivePhoto';
import SEO from '@/components/SEO';
import { buildWebPageSchema, SITE_URL } from '@/utils/seo';
import { blogPosts } from '@/utils/blogPosts';
import { scrollToTop } from '@/utils/scrollUtils';

function formatDate(dateString: string) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogIndex() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <SEO
        title="Blog"
        description="Insights on DCP screening, reference playback, and private cinema rental in Vancouver from The Reel Room—Mount Pleasant's production screening studio."
        canonical={`${SITE_URL}/blog`}
        ogImage="/photos/optimized/DSC03125-Enhanced-NR-1280.jpg"
        keywords="Reel Room blog, DCP screening Vancouver, private cinema rental, film premiere venue, reference playback Vancouver, Mount Pleasant studio"
        structuredData={buildWebPageSchema({
          name: 'Blog | The Reel Room Vancouver',
          description: 'Articles on DCP screening and private cinema rental in Vancouver.',
          url: `${SITE_URL}/blog`,
        })}
      />

      <div className="min-h-screen bg-white pb-20 md:pb-0">
        <ReelRoomNavigation />

        <main>
          <div className="relative bg-black">
            <ResponsivePhoto
              src="/photos/originals/homepage/DSC03264-Enhanced-NR.jpg"
              alt="The Reel Room blog"
              className="w-full"
              imgClassName="w-full h-auto object-contain"
              loading="eager"
              fetchPriority="high"
              layout="hero"
            />
            <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
              <div className="text-center px-4 max-w-3xl">
                <span className="section-eyebrow text-brand-gold">From the screening room</span>
                <h1 className="text-4xl md:text-5xl font-light page-heading text-white mt-3 mb-3">
                  Blog
                </h1>
                <p className="text-lg text-brand-cream/90 italic">
                  DCP playback, reference reviews, and why Vancouver teams rent a room built for picture-first work.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="blog-card group"
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="blog-card__image">
                      <ResponsivePhoto
                        src={post.heroImage}
                        alt={post.title}
                        className="w-full h-full"
                        imgClassName="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        layout="content"
                        loading="lazy"
                      />
                    </div>
                    <div className="blog-card__body">
                      <p className="blog-card__meta">
                        {formatDate(post.publishedAt)} · {post.readTimeMinutes} min read
                      </p>
                      <h2 className="blog-card__title">{post.title}</h2>
                      <p className="blog-card__excerpt">{post.excerpt}</p>
                      <span className="blog-card__link">Read article →</span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </main>

        <ReelRoomFooter />
      </div>
    </>
  );
}
