import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import AceCascadeNavigation from '../components/AceCascadeNavigation';
import AceCascadeFooter from '../components/AceCascadeFooter';
import Link from 'next/link';

const benefits = [
  {
    title: 'Maximum Occupancy',
    description: 'Our marketing strategies and platform partnerships ensure your property maintains high occupancy rates year-round.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: 'Premium Pricing',
    description: 'We position your property to attract guests willing to pay for quality, maximizing your revenue potential.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Professional Management',
    description: 'Our experienced team handles everything from guest communications to maintenance, ensuring a seamless experience.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Property Care',
    description: 'We treat your property as our own, with regular maintenance checks and immediate attention to any issues.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Marketing Expertise',
    description: 'Professional photography, compelling listings, and strategic online presence to showcase your property at its best.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  },
  {
    title: 'Guest Screening',
    description: 'Rigorous screening process ensures only respectful, reliable guests stay in your property.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Lowest Management Fee',
    description: 'We charge a 20% management fee on profit, which is far less than any competitor in the building and nearby.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function ListWithUs() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    bedrooms: '',
    location: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formState);
    alert('Thank you for your interest! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>List Your Property With Us | Ace Cascade Lodge Hotel</title>
        <meta name="description" content="Partner with Ace Cascade to maximize your property's potential. Our property management services ensure high occupancy, premium pricing, and professional care." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AceCascadeNavigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/photos/property-management.jpg"
              alt="Property Management"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">List Your Property With Ace Cascade</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Maximize your property's potential with our professional management services
            </p>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why List With Us?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our team of Whistler experts brings years of property management experience to ensure your investment reaches its full potential.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Simple Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Getting started with Ace Cascade is straightforward and hassle-free.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-600">We'll discuss your property, goals, and expectations to create a tailored management plan.</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Onboarding</h3>
                <p className="text-gray-600">Our team handles property assessment, professional photography, and listing creation.</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Management</h3>
                <p className="text-gray-600">We take care of everything while you enjoy reliable income and peace of mind.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
            
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg p-8 shadow-sm">
              <p className="text-xl text-gray-700 mb-8">
                Our property management specialists are ready to help maximize your property's potential. 
                Contact us to discuss how we can work together to achieve your goals.
              </p>
              
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-start">
                  <svg className="h-6 w-6 mr-3 text-[#0066CC] mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="text-left">
                    <p className="font-medium">Email us at:</p>
                    <a href="mailto:info@acecascade.ca" className="text-[#0066CC] hover:text-[#004C99]">
                      info@acecascade.ca
                    </a>
                  </div>
                </div>
                
                <Link
                  href="/listings"
                  className="inline-block bg-[#0066CC] hover:bg-[#004C99] text-white px-8 py-3 rounded-md font-medium transition-colors"
                >
                  View Our Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <AceCascadeFooter />
    </div>
  );
} 