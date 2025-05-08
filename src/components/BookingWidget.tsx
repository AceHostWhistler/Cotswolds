import Link from 'next/link';

export default function BookingWidget() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Book Your Stay</h3>
      <p className="text-gray-600 mb-6">
        For reservations, please call our front desk directly or book through our partner websites.
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
          <svg className="h-5 w-5 text-[#0066CC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Call: (XXX) XXX-XXXX</span>
        </div>
      </div>
      <div className="mt-6">
        <Link 
          href="/listings"
          className="block w-full bg-[#0066CC] hover:bg-[#004C99] text-white py-3 rounded text-center font-medium transition-colors"
        >
          View Available Rooms
        </Link>
      </div>
    </div>
  );
} 