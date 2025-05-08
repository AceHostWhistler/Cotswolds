import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    id: 'ski-rentals',
    question: 'Where can I get my ski & snowboard rentals when I check into Cascade?',
    answer: 'Located right inside the Cascade Lodge, you will find Premium Ski Rentals, offering top-of-the-line gear and personalized service. They\'ll take care of all your ski and snowboard needs, from expert fittings to equipment tuning. With their high-quality rentals, you\'ll be ready to hit the slopes with confidence and style.'
  },
  {
    id: 'storage',
    question: 'Where can I leave my skis & snowboards overnight?',
    answer: 'Ace Cascade Lodge Hotel offers free Ski and Snowboard "Valet" for guests, which is essentially a secure storage room for your skis and snowboards. This room is located just in front of the elevators on the ground level at the Cascade Lodge. No need to bring your skis and snowboards to the room.'
  },
  {
    id: 'parking',
    question: 'Where can I park at Ace Cascade?',
    answer: 'Underground parking is available for $26/day. This is one of, if not the most competitive hotel parking rate in Whistler Village. Guests checking in at the front desk at Ace Cascade can register their car for parking and receive the parking lot code upon arrival.'
  },
  {
    id: 'restaurants',
    question: 'Am I close to restaurants and cafes?',
    answer: 'Yes! Guests staying with Ace Cascade are walking distance from the best restaurants in Whistler. Some of our favourite restaurants are Brickworks, Caramba, El Furniture Warehouse, and Quattro, which are all within a 5-minute walk. The best coffee shops nearby Ace Cascade are Moguls, Provisions, Mount Currie, and Alta Cafe. For a nightlife experience or Après, we recommend the Raven Room, Tapley\'s, Joe Fortes, and Longhorns.'
  },
  {
    id: 'gondolas',
    question: 'Am I close to the Whistler and Blackcomb Gondolas?',
    answer: 'Guests staying at Ace Cascade are just a less than 10-minute walk to both the Whistler and Blackcomb Gondolas in Whistler Village. No need to get into a vehicle or look for parking to get close to the slopes.'
  },
  {
    id: 'grocery',
    question: 'Are there any grocery stores or pharmacies nearby?',
    answer: 'The closest grocery store is Fresh Street Market, which is a short 4-minute walk from Ace Cascade. Also found in the same Marketplace is the Rexall Drug Store, which is across the parking lot from Fresh Street Market. Enjoy the mini fridge for groceries needing to keep cool.'
  },
  {
    id: 'checkin',
    question: 'What time is check-in and check-out?',
    answer: 'Standard check-in time is 4:00pm and checkout time is 10:00am'
  },
  {
    id: 'amenities',
    question: 'What amenities are offered at Ace Cascade?',
    answer: '- Complimentary Wi-Fi\n- Complimentary Ski Valet\n- Access to 2 shared hot tubs\n- Pool Access\n- Sauna\n- Change room and showers located by the pool\n- Gym'
  }
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  
  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
          Frequently Asked Questions | Ace Cascade Lodge Whistler
        </h2>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Here we answer our most Frequently Asked Questions about anything and everything to do with our luxury-boutique, 
          yet affordable hotel in Whistler. Find out more about our close to the village & ski slopes location, 
          included amenities, operations, nearby activities, and more!
        </p>
        
        <div className="mb-8">
          <Link href="/listings" className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300">
            View Listings
          </Link>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex justify-between items-center w-full text-left p-5 focus:outline-none"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span className={`transform transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-[#0066CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openFaq === faq.id && (
                <div className="p-4 border-t border-gray-200 bg-white">
                  <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 