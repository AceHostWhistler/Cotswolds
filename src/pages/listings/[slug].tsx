import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '@/components/ReelRoomNavigation';
import ReelRoomFooter from '@/components/ReelRoomFooter';

const {
  ACEHOST_LISTING_GONE,
  ACEHOST_LISTING_REDIRECTS,
} = require('../../../redirects/legacy-seo-redirects');

type PageProps = {
  gone?: boolean;
};

export default function LegacyListingRoute({ gone }: PageProps) {
  if (!gone) return null;

  return (
    <>
      <Head>
        <title>Page Removed | The Reel Room Vancouver</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="min-h-screen bg-white">
        <ReelRoomNavigation />
        <main className="pt-32 pb-20 px-4 text-center max-w-xl mx-auto">
          <h1 className="text-3xl font-light page-heading mb-4">This page has been removed</h1>
          <p className="text-gray-600 body-font mb-8">
            This listing is no longer available on reelroom.ca.
          </p>
          <Link
            href="/"
            className="inline-block border border-brand-gold text-brand-gold px-6 py-3 uppercase tracking-widest text-sm font-light hover:bg-brand-gold/10 transition-colors"
          >
            Back to The Reel Room
          </Link>
        </main>
        <ReelRoomFooter />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ params, res }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : '';

  if (ACEHOST_LISTING_GONE.has(slug)) {
    res.statusCode = 410;
    return { props: { gone: true } };
  }

  const destination = ACEHOST_LISTING_REDIRECTS[slug];
  if (destination) {
    return {
      redirect: {
        destination,
        permanent: true,
      },
    };
  }

  return { notFound: true };
};
