import Link from 'next/link';
import { FC } from 'react';

const ListingPage: FC = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Interested in this listing?</h3>
      <p className="mb-4">Please contact our front desk for availability and booking information.</p>
      <div className="flex items-center mb-4">
        <svg className="h-5 w-5 text-[#0066CC] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>Call: (XXX) XXX-XXXX</span>
      </div>
      <Link 
        href="/listings"
        className="inline-block bg-[#0066CC] hover:bg-[#004C99] text-white px-6 py-2 rounded transition-colors"
      >
        View All Listings
      </Link>
    </div>
  );
};

export default ListingPage; 