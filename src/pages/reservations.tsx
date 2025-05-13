import * as React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReelRoomNavigation from '../components/ReelRoomNavigation';
import ReelRoomFooter from '../components/ReelRoomFooter';
import OptimizedImage from '../components/OptimizedImage';

// Define form data interface
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  showingTime: string;
  guestCount: string;
  preferredDate: string;
  bookingDetails: string;
}

export default function Reservations() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    showingTime: '',
    guestCount: '',
    preferredDate: '',
    bookingDetails: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    try {
      // Simulate form submission
      setFormSubmitted(true);
      setFormError(false);
      // Reset form after submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        showingTime: '',
        guestCount: '',
        preferredDate: '',
        bookingDetails: ''
      });
    } catch (error) {
      setFormError(true);
    }
  };
  
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);
  
  return (
    <div className={`min-h-screen ${!isPageLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}>
      <Head>
        <title>Book an Experience | The Reel Room</title>
        <meta name="description" content="Book your event at The Reel Room. Fill out our reservation form to secure your date for film screenings, private parties, or corporate events." />
      </Head>
      
      <ReelRoomNavigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <OptimizedImage
            src="/photos/homepage-originals/DSC03406-Enhanced-NR.jpg"
            alt="The Reel Room Reservations"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Experience</h1>
                <p className="text-xl mb-8">
                  Create unforgettable memories at The Reel Room, Vancouver's premier private theatre venue.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reservation Form Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Form Column */}
              <div>
                <h2 className="text-3xl font-semibold heading-font mb-6">Get in contact with us</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-none border-gray-300 shadow-sm p-3 border focus:border-black focus:ring-black"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-none border-gray-300 shadow-sm p-3 border focus:border-black focus:ring-black"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-none border-gray-300 shadow-sm p-3 border focus:border-black focus:ring-black"
                    />
                  </div>
                  
                  {/* Showing Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Showing time
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Showing time slots are a minimum of 4 hours long and need to start 4 hours before the slot ends.
                    </p>
                    <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="showingTime"
                          value="lunch"
                          checked={formData.showingTime === 'lunch'}
                          onChange={handleChange}
                          className="h-4 w-4 text-black focus:ring-black border-gray-300"
                        />
                        <span className="ml-2">Lunch (8am - 3pm)</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="showingTime"
                          value="dinner"
                          checked={formData.showingTime === 'dinner'}
                          onChange={handleChange}
                          className="h-4 w-4 text-black focus:ring-black border-gray-300"
                        />
                        <span className="ml-2">Dinner (3pm - 11pm)</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Guest Count */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      # of Guests
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['5-12', '13-25', '25-45', '45-75', '75-100', '100+'].map((option) => (
                        <label key={option} className="inline-flex items-center">
                          <input
                            type="radio"
                            name="guestCount"
                            value={option}
                            checked={formData.guestCount === option}
                            onChange={handleChange}
                            className="h-4 w-4 text-black focus:ring-black border-gray-300"
                          />
                          <span className="ml-2">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Preferred Date & Time */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date & Time
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      4+ hour time slots
                    </p>
                    <input
                      type="text"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="block w-full rounded-none border-gray-300 shadow-sm p-3 border focus:border-black focus:ring-black"
                      placeholder="e.g., July 15th, 6:00 PM"
                    />
                  </div>
                  
                  {/* Booking Details */}
                  <div>
                    <label htmlFor="bookingDetails" className="block text-sm font-medium text-gray-700 mb-1">
                      Booking details
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Let us know the purpose of your booking and any specifications you require or would like to learn more about. We are here to help you every step of the way.
                    </p>
                    <textarea
                      id="bookingDetails"
                      name="bookingDetails"
                      value={formData.bookingDetails}
                      onChange={handleChange}
                      rows={6}
                      className="block w-full rounded-none border-gray-300 shadow-sm p-3 border focus:border-black focus:ring-black"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm"
                    >
                      Submit
                    </button>
                  </div>
                  
                  {/* Form Submission Messages */}
                  {formSubmitted && !formError && (
                    <div className="p-4 bg-green-50 text-green-800 rounded-md">
                      Thank you! Your submission has been received!
                    </div>
                  )}
                  
                  {formError && (
                    <div className="p-4 bg-red-50 text-red-800 rounded-md">
                      Oops! Something went wrong while submitting the form.
                    </div>
                  )}
                </form>
              </div>
              
              {/* Info Column */}
              <div>
                <div className="mb-12">
                  <h2 className="text-3xl font-semibold heading-font mb-6">Food & Drink Experiences | Pricing</h2>
                  <p className="text-lg mb-6">
                    At the Reel Room, we are flexible with pricing and we work our events in order to cater to our guest budgets and plans.
                  </p>
                  
                  <p className="text-lg mb-6">
                    <strong>Pricing:</strong> All in for staff, food, and alcohol, depends on a lot of factors and requests, but you can expect to pay between $1500 on the lower end, to $6000+, depending on your budget, # of guests, food/alcohol choices & quantity, any extra staffing required, etc...
                  </p>
                  
                  <p className="text-lg mb-6">
                    <strong>Menu:</strong> Our experienced team will create a custom food + drink menu for your event based on your suggestions and requests.
                  </p>
                  
                  <p className="text-lg mb-6">
                    If you have any questions feel free to connect with our staff <a href="mailto:info@reelroom.ca" className="text-black underline">info@reelroom.ca</a>
                  </p>
                  
                  <div className="text-sm text-gray-500 space-y-2 mt-8">
                    <p>*Allergies and dietary requests available.</p>
                    <p>*Request for higher venue pricing for holiday dates: December 24th, 25th, 31st. + Peak Sports dates ex. Super bowl, Grand Slam Finals, Stanley Cup Finals, Oscars, etc...</p>
                    <p>*No BYOB allowed to abide by regulations.</p>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden mb-8">
                  <OptimizedImage
                    src="/photos/homepage-originals/DSC03078-Enhanced-NR.jpg"
                    alt="Reel Room dining space"
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className="w-full h-64 object-cover"
                  />
                  <p className="mt-2 text-sm text-gray-500 text-center">Reel Room dining space</p>
                </div>
                
                <div className="bg-gray-50 p-8">
                  <h3 className="text-2xl font-semibold heading-font mb-6">Hours & Contact</h3>
                  
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <React.Fragment key={day}>
                        <div className="font-medium">{day}</div>
                        <div>8 am - 1 am</div>
                      </React.Fragment>
                    ))}
                  </div>
                  
                  <div className="space-y-2 mt-8">
                    <p>
                      <span className="font-semibold">Email:</span>{' '}
                      <a href="mailto:info@reelroom.ca" className="text-black hover:underline">
                        info@reelroom.ca
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Location:</span>{' '}
                      <span>Mount Pleasant, Vancouver, BC</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <ReelRoomFooter />
    </div>
  );
} 