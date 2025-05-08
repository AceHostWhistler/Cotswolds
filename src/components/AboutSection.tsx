import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Luxury and Affordable Hotel Accommodation in the heart of Whistler Village, BC Canada</h2>
        
        <p className="text-lg text-gray-700 mb-8">
          Welcome to the Ace Cascade Lodge Hotel. Our affordable yet luxurious hotel units are available all year round. 
          Delight in the heated outdoor pool, rejuvenating hot tubs, and soothing saunas, offering the perfect respite for relaxation. 
          Stay active in the fitness room or take advantage of the free ski concierge in the lobby for seamless access to the slopes.
        </p>
        
        <div className="flex justify-center space-x-4">
          <Link href="/listings" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
            Our Hotel Listings
          </Link>
        </div>
      </div>
    </section>
  );
} 