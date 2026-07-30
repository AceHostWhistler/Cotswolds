import type { GetServerSideProps } from 'next';

const { ACECASCADE_BLOG_REDIRECTS } = require('../../../redirects/legacy-seo-redirects');

export default function LegacyBlogRedirect() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const destination = ACECASCADE_BLOG_REDIRECTS[slug];

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
