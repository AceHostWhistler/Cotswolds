import React, { useEffect } from 'react';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import ReelRoomNavigation from '@/components/ReelRoomNavigation';
import ReelRoomFooter from '@/components/ReelRoomFooter';
import ResponsivePhoto from '@/components/ResponsivePhoto';
import BlogArticleBody from '@/components/BlogArticleBody';
import CalendlyPopupLink from '@/components/CalendlyPopupLink';
import SEO from '@/components/SEO';
import { buildArticleSchema, buildWebPageSchema, SITE_URL } from '@/utils/seo';
import { blogPosts, getAllBlogSlugs, getBlogPost, type BlogPost } from '@/utils/blogPosts';
import { scrollToTop } from '@/utils/scrollUtils';

interface BlogPostPageProps {
  post: BlogPost;
}

function formatDate(dateString: string) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const otherPosts = blogPosts.filter((entry) => entry.slug !== post.slug);

  useEffect(() => {
    scrollToTop();
  }, [post.slug]);

  const articleUrl = `${SITE_URL}/blog/${post.slug}`;

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        canonical={articleUrl}
        ogImage={post.ogImage}
        ogType="article"
        keywords={post.keywords}
        structuredData={[
          buildWebPageSchema({
            name: `${post.title} | The Reel Room Vancouver`,
            description: post.description,
            url: articleUrl,
          }),
          buildArticleSchema({
            headline: post.title,
            description: post.description,
            url: articleUrl,
            image: post.ogImage,
            datePublished: post.publishedAt,
          }),
        ]}
      />

      <div className="min-h-screen bg-white pb-20 md:pb-0">
        <ReelRoomNavigation />

        <main>
          <div className="relative bg-black">
            <ResponsivePhoto
              src={post.heroImage}
              alt={post.title}
              className="w-full"
              imgClassName="w-full h-auto object-contain"
              loading="eager"
              fetchPriority="high"
              layout="hero"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex items-end">
              <div className="max-w-4xl mx-auto px-4 pb-10 w-full">
                <Link
                  href="/blog"
                  className="text-brand-gold text-sm hover:text-brand-cream transition-colors mb-4 inline-block"
                >
                  ← Back to Blog
                </Link>
                <p className="text-brand-cream/80 text-sm mb-3">
                  {formatDate(post.publishedAt)} · {post.readTimeMinutes} min read
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light page-heading text-white leading-tight">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>

          <article className="max-w-3xl mx-auto px-4 py-12">
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10 border-l-4 border-brand-gold pl-5">
              {post.excerpt}
            </p>

            <BlogArticleBody sections={post.sections} />

            <div className="mt-14 p-8 bg-black text-white rounded-lg text-center">
              <h2 className="text-2xl font-light page-heading mb-3">Ready to book the room?</h2>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                Email{' '}
                <a href="mailto:info@reelroom.ca" className="text-brand-gold hover:underline">
                  info@reelroom.ca
                </a>{' '}
                with your dates and brief, or request a booking online.
              </p>
              <CalendlyPopupLink
                text="Or Book Now Directly"
                className="inline-block px-8 py-4 bg-brand-gold text-black rounded-md font-medium hover:bg-brand-cream transition-colors"
              />
            </div>
          </article>

          {otherPosts.length > 0 && (
            <section className="bg-gray-50 py-14">
              <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl font-light page-heading text-center mb-8">More from the blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="blog-card blog-card--compact group"
                    >
                      <div className="blog-card__image blog-card__image--compact">
                        <ResponsivePhoto
                          src={related.heroImage}
                          alt={related.title}
                          className="w-full h-full"
                          imgClassName="w-full h-auto object-contain"
                          layout="gallery"
                          loading="lazy"
                        />
                      </div>
                      <div className="blog-card__body">
                        <h3 className="blog-card__title blog-card__title--compact">{related.title}</h3>
                        <span className="blog-card__link">Read article →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>

        <ReelRoomFooter />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllBlogSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getBlogPost(slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
};
