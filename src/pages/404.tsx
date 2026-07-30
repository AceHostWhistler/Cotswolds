import Link from 'next/link';
import Head from 'next/head';
import ReelRoomNavigation from '@/components/ReelRoomNavigation';
import ReelRoomFooter from '@/components/ReelRoomFooter';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | The Reel Room Vancouver</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Visit The Reel Room homepage to book Vancouver's private screening room and production studio."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="min-h-screen bg-white flex flex-col">
        <ReelRoomNavigation />

        <main className="flex-grow flex flex-col items-center justify-center px-4 py-16 pt-32">
          <div className="max-w-2xl w-full text-center">
            <span className="section-eyebrow">404</span>
            <h1 className="text-4xl sm:text-5xl font-light page-heading mb-6">Page Not Found</h1>
            <p className="text-lg text-gray-600 body-font mb-8">
              This page doesn&apos;t exist or has been removed from reelroom.ca.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/experiences"
                className="px-6 py-3 border border-brand-gold text-brand-gold rounded-md hover:bg-brand-gold/10 transition-colors"
              >
                Studio &amp; Pricing
              </Link>
              <Link
                href="/book-now"
                className="px-6 py-3 border border-brand-gold text-brand-gold rounded-md hover:bg-brand-gold/10 transition-colors"
              >
                Book Now
              </Link>
              <Link
                href="/media"
                className="px-6 py-3 border border-brand-gold text-brand-gold rounded-md hover:bg-brand-gold/10 transition-colors"
              >
                Media &amp; FAQs
              </Link>
            </div>
          </div>
        </main>

        <ReelRoomFooter />
      </div>
    </>
  );
}
