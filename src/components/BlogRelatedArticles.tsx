import Link from 'next/link';
import Image from 'next/image';
import { getRelatedArticles, Article } from '../utils/blogArticles';
import { ArrowRight } from 'lucide-react';

interface BlogRelatedArticlesProps {
  currentArticleLink: string;
  count?: number;
}

export default function BlogRelatedArticles({ currentArticleLink, count = 3 }: BlogRelatedArticlesProps) {
  const relatedArticles = getRelatedArticles(currentArticleLink, count);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">More Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((article, index) => (
            <Link key={index} href={article.link} className="group">
              <div className="bg-white overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col transform group-hover:translate-y-[-4px]">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  {article.description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {article.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-500">
                      {article.readTime}
                    </span>
                    <span className="inline-flex items-center text-blue-600 font-medium text-sm transition-all group-hover:translate-x-1">
                      Read article
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 