import React from 'react';
import ResponsivePhoto from '@/components/ResponsivePhoto';
import type { BlogSection } from '@/utils/blogPosts';

interface BlogArticleBodyProps {
  sections: BlogSection[];
}

export default function BlogArticleBody({ sections }: BlogArticleBodyProps) {
  return (
    <div className="blog-prose">
      {sections.map((section, index) => {
        switch (section.type) {
          case 'paragraph':
            return (
              <p key={index} className="blog-prose__paragraph">
                {section.content}
              </p>
            );
          case 'heading':
            return (
              <h2 key={index} className="blog-prose__heading">
                {section.content}
              </h2>
            );
          case 'list':
            return (
              <ul key={index} className="blog-prose__list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case 'quote':
            return (
              <blockquote key={index} className="blog-prose__quote">
                {section.content}
              </blockquote>
            );
          case 'image':
            return (
              <figure key={index} className="blog-prose__figure">
                <div className="blog-prose__figure-image">
                  <ResponsivePhoto
                    src={section.src}
                    alt={section.alt}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover"
                    layout="content"
                    loading="lazy"
                  />
                </div>
                {section.caption && (
                  <figcaption className="blog-prose__caption">{section.caption}</figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
