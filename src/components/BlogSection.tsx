import Link from 'next/link';
import { useState } from 'react';
import BlogImg from './BlogImg';

const fallbackImg = '/photos/Blogs/677abbfa808496676931dd85_whistlerolympicpeakview-p-1080.jpg';

const blogPosts = [
  {
    id: 'snow-conditions',
    title: 'Current Whistler Snow Conditions: Why Whistler Is the Perfect Spot for Skiing',
    excerpt: '5 min read',
    image: '/photos/Blogs/677abbfa808496676931dd85_whistlerolympicpeakview-p-1080.jpg',
    link: '/blog-articles/current-whistler-snow-conditions'
  },
  {
    id: 'winter-retreat',
    title: 'Discover Whistler Cascade Lodge: Your Perfect Winter Retreat in Whistler Village',
    excerpt: '5 min read',
    image: '/photos/Blogs/67732501c19e6210e1b83821_Village-Lights_TW_MikeCrane_2000-x-1154-p-1080.jpeg',
    link: '/blog-articles/discover-whistler-cascade-lodge'
  },
  {
    id: 'activities',
    title: 'Read up about activities and fun things to do in Whistler when staying at the Cascade Lodge Hotel.',
    excerpt: '5 min read',
    image: '/photos/Blogs/660c42f91c8fcfabf7188979_IMG_8587-p-1080.jpg',
    link: '/blog-articles/activities-in-whistler'
  },
  {
    id: 'amenities',
    title: 'Learn more about our favorite amenities and inclusions at the Cascade Lodge Hotel in Whistler.',
    excerpt: '5 min read',
    image: '/photos/Blogs/660c43b55eaead9fecc3d57e_pexels-oleksandr-p-376697-p-1080.jpg',
    link: '/blog-articles/amenities'
  },
  {
    id: 'why-whistler',
    title: 'Why visit Whistler, Canada? Easy Answer!',
    excerpt: '5 min read',
    image: '/photos/Blogs/660c438b0e0ac1f271306bb9_pexels-pixabay-260922-p-1080.jpg',
    link: '/blog-articles/why-whistler'
  }
];

export default function BlogSection() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  
  const handleImageError = (id: string) => {
    setImgErrors(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Blog Posts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest news, travel tips, and insights about Whistler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <Link href={post.link}>
                <div className="relative w-full h-48">
                  <BlogImg
                    src={imgErrors[post.id] ? fallbackImg : post.image}
                    alt={post.title}
                    priority={post.id === 'snow-conditions'}
                    onError={() => handleImageError(post.id)}
                  />
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-[#0066CC] transition-colors">
                  <Link href={post.link}>{post.title}</Link>
                </h3>
                <p className="text-gray-500 mb-4">{post.excerpt}</p>
                <Link href={post.link} className="text-[#0066CC] font-medium hover:text-[#004C99] inline-flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blogs" className="inline-block bg-[#0066CC] text-white px-6 py-3 rounded-md hover:bg-[#004C99] transition-colors">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
} 