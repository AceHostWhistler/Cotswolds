import type { GetServerSideProps } from 'next';

export default function ContactRedirect() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: '/book-now',
    permanent: true,
  },
});
