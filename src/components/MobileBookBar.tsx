import React from 'react';
import Link from 'next/link';

export default function MobileBookBar() {
  return (
    <div className="mobile-book-bar md:hidden" aria-label="Quick booking actions">
      <a href="mailto:info@reelroom.ca" className="mobile-book-bar__email">
        Email
      </a>
      <Link href="/book-now" className="mobile-book-bar__cta">
        Book Now
      </Link>
    </div>
  );
}
