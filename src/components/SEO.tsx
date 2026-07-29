import Head from 'next/head';
import { useRouter } from 'next/router';
import { SITE_URL, normalizeStructuredData, type StructuredData } from '@/utils/seo';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
  structuredData?: StructuredData;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = '/reel-room-logo.png',
  ogType = 'website',
  keywords = 'private screen room, production rental, studio rental, Vancouver, film screenings, DCP, corporate productions, Mount Pleasant',
  noindex = false,
  structuredData,
}) => {
  const router = useRouter();
  const canonicalPath = canonical || `${SITE_URL}${router.asPath.split('?')[0]}`;
  const formattedTitle = `${title} | The Reel Room Vancouver`;
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
  const schemaBlocks = normalizeStructuredData(structuredData);

  return (
    <Head>
      <title>{formattedTitle}</title>
      <meta name="title" content={formattedTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="canonical" href={canonicalPath} />
      <link rel="alternate" type="text/plain" href={`${SITE_URL}/llms.txt`} title="LLMs.txt" />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalPath} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:site_name" content="The Reel Room Vancouver" />
      <meta property="og:locale" content="en_CA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalPath} />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:site" content="@reelroomvancouver" />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}

      {schemaBlocks.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
};

export default SEO;
