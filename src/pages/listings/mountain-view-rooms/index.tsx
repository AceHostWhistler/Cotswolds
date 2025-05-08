import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AceCascadeNavigation from "@/components/AceCascadeNavigation";
import AceCascadeFooter from "@/components/AceCascadeFooter";

const MountainViewRooms = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  const photos = [
    "/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02345.jpg",
    "/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02242.jpg",
    "/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02250.jpg",
    "/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02256.jpg",
    "/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02264.jpg",
    "/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02277.jpg",
    "/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02293-Edit.jpg",
    "/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02303.jpg",
    "/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02318.jpg",
    "/photos/listings/Mountain View Cascade/20240621 A7M3 03 A1_02335.jpg",
    // Cascade Exterior Photos
    "/photos/listings/Cascade Exterior/1 (1).jpg",
    "/photos/listings/Cascade Exterior/9-2.jpg",
    "/photos/listings/Cascade Exterior/DSC_3404-2.jpg",
    "/photos/listings/Cascade Exterior/DSC_3410-2.jpg",
    "/photos/listings/Cascade Exterior/DSC_3410-22.jpg",
    "/photos/listings/Cascade Exterior/DSC_3419-2.jpg",
    "/photos/listings/Cascade Exterior/IMG_8493-HDR.jpg",
    "/photos/listings/Cascade Exterior/IMG_8523.jpg",
    "/photos/listings/Cascade Exterior/IMG_8587.jpg",
    "/photos/listings/Cascade Exterior/IMG_8867.jpg",
    "/photos/listings/Cascade Exterior/Patio View (5).jpg",
  ];

  const handlePhotoClick = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhotoIndex === null) return;

    if (direction === "prev") {
      setSelectedPhotoIndex(
        selectedPhotoIndex === 0 ? photos.length - 1 : selectedPhotoIndex - 1
      );
    } else {
      setSelectedPhotoIndex(
        selectedPhotoIndex === photos.length - 1 ? 0 : selectedPhotoIndex + 1
      );
    }
  };

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  return (
    <>
      <Head>
        <title>Mountain View Rooms | Ace Cascade Lodge Hotel</title>
        <meta
          name="description"
          content="Enjoy beautiful mountain views from our comfortable one-bedroom, one-bathroom hotel units in the center of Whistler Village."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <div className="min-h-screen bg-white">
        <AceCascadeNavigation />

        <main className="pt-20">
          {/* Header with Property Info */}
          <div className="max-w-7xl mx-auto px-4 pt-8">
            <div className="flex justify-center mb-6">
              <div className="bg-[#0066CC] text-white rounded-full py-3 px-6 inline-block">
                4 guests | From $289 per night
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Mountain View Rooms
            </h1>

            {/* Pricing Information */}
            <div className="flex flex-col items-center mb-8 space-y-2">
              <div className="bg-gray-100 rounded-lg px-6 py-4 max-w-2xl w-full">
                <div className="space-y-2">
                  <p className="text-gray-800 text-center font-medium">
                    From $289 per night
                  </p>
                  <p className="text-gray-800 text-center">
                    Queen bed | Kitchenette | Mountain views
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={() => setShowAllPhotos(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#0066CC] hover:bg-[#004C99] text-white rounded font-medium text-sm sm:text-base"
              >
                More Photos
              </button>
              <Link
                href="#details"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#0066CC] hover:bg-[#004C99] text-white rounded font-medium text-sm sm:text-base"
              >
                Details
              </Link>
              <Link
                href="https://www.airbnb.ca/rooms/1142301968081447021?guests=1&adults=1&s=67&unique_share_id=090dd316-32ed-46cd-9900-8d295c47ec4e"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#0066CC] hover:bg-[#004C99] text-white rounded font-medium text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
              {photos.slice(0, 6).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Mountain View Room ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 4}
                  />
                  {index === 5 && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <span className="text-white text-lg font-medium">+{photos.length - 6} photos</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAllPhotos(true)}
                className="px-6 py-3 bg-[#0066CC] hover:bg-[#004C99] text-white rounded-md shadow-md font-medium transition duration-300 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View all {photos.length} photos
              </button>
            </div>
          </div>

          {/* Property Description */}
          <div className="max-w-6xl mx-auto px-4 mb-16" id="details">
            <p className="text-gray-800 text-lg mb-8 max-w-4xl">
              Experience breathtaking mountain views from our beautiful one-bedroom, one-bathroom hotel units in the heart of Whistler Village.
            </p>

            {/* Unit Description Section with Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-2/3 p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Unit Description</h2>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-4">
                      Our comfortable queen beds are fitted with premium linens and pillows, providing the perfect place to rest after a day of adventure. The well-equipped kitchenettes include a two-burner cooktop, dishwasher, microwave, kettle, toaster, Nespresso and drip coffee machine, and mini fridge - everything you need for a pleasant stay.
                    </p>
                    <p className="mb-4">
                      The bathrooms feature high-quality toiletries and a shower/tub combination for your comfort. Each unit offers stunning views of Whistler's mountains, creating a peaceful atmosphere for your mountain getaway.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 relative min-h-[300px]">
                  <Image
                    src="/photos/listings/Cascade Exterior/Patio View (5).jpg"
                    alt="Patio View of Cascade Lodge"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* The Space Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Space</h2>
                <h3 className="text-xl font-semibold mb-3">Each suite has been thoughtfully designed to offer self-sufficiency and utmost comfort.</h3>
                
                <div className="md:flex items-center gap-8 mb-6">
                  <div className="md:w-1/3 relative h-[250px] rounded-lg overflow-hidden shadow-md mb-4 md:mb-0">
                    <Image
                      src="/photos/listings/Cascade Exterior/IMG_8523.jpg"
                      alt="Cascade Lodge Exterior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 prose max-w-none text-gray-700">
                    <p className="mb-4">
                      Embrace modern conveniences such as AC, central heating, Smart TV, and complimentary Wi-Fi available in all units.
                    </p>
                    <p className="mb-4">
                      Our well-equipped kitchenettes are stocked with everything you need to prepare delicious meals in the privacy of your own suite. All dishes, silverware, cooking utensils and salt and pepper are also provided, enjoy a delightful dining experience with a dining table provided for your convenience.
                    </p>
                  </div>
                </div>

                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Take advantage of generous clothing storage with an iron and hangers provided, ensuring that your belongings stay organized and easily accessible throughout your stay.
                  </p>
                  <p className="mb-4">
                    <strong>Toiletries:</strong> Our bright and pristine bathrooms, come complete with complimentary luxury shampoo, conditioner, body wash, and hand soap. A hair dryer is also provided for your convenience, allowing you to unwind and relax without a worry.
                  </p>
                </div>
              </div>
            </div>

            {/* Resort-style Living Section with Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/2 p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Resort-style Living</h2>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-4">
                      At Cascade Lodge, luxury extends beyond the walls of your condo. Delight in the heated outdoor pool, rejuvenating hot tubs, and soothing saunas, offering the perfect respite for relaxation.
                    </p>
                    <p className="mb-4">
                      Stay active in the fitness room or take advantage of the ski valet in the lobby for seamless access to the slopes. Enjoy the convenience of the Avis Car Rental in the lobby for all your transportation needs. Hot tub towels can be picked up from the front desk located in the main entrance lobby.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 relative min-h-[350px]">
                  <Image
                    src="/photos/listings/Cascade Exterior/DSC_3404-2.jpg"
                    alt="Cascade Lodge Amenities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Location Section with Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-2/3 p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
                  <div className="prose max-w-none text-gray-700">
                    <p className="mb-4">
                      The Cascade Lodge is a prime location located at the gateway to Whistler Village, providing easy access to all the excitement the area has to offer.
                    </p>
                    <p className="mb-4">
                      Hop on the local shuttle bus or take a leisurely stroll to the nearby ski lifts, just a half-mile away. In the summer months, tee off at the Whistler Golf Club just a five minute walk away.
                    </p>
                    <p className="mb-4">
                      Just moments away from the lifts, and restaurants, and attractions of Whistler Village, these well-appointed condos promise a perfect blend of comfort and convenience.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 relative min-h-[350px]">
                  <Image
                    src="/photos/listings/Cascade Exterior/1 (1).jpg"
                    alt="Cascade Lodge Location"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Check-in & Concierge Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Check-in & Concierge</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Enjoy a hassle-free check-in experience as our friendly front desk staff will assist you with checking into your suite and provide you with your key card for a smooth and effortless stay.
                  </p>
                  <p className="mb-4">
                    The dedicated front desk team is here to cater to your needs, offering valuable tips and helpful information to enhance your Whistler experience. Don't hesitate to ask any questions or seek recommendations—they're here to ensure you make the most out of your stay with us.
                  </p>
                </div>
              </div>
            </div>

            {/* Other Listings Section */}
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Other Listings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/listings/mountain-view---top-floor" className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:shadow-lg">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/photos/listings/Mountain View Top Floor/20240621 A7M3 05 A1_02388.jpg"
                        alt="Mountain View - Top Floor"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Mountain View - Top Floor</h3>
                    </div>
                  </div>
                </Link>
                
                <Link href="/listings/forest-view-cascade-room" className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:shadow-lg">
                    <div className="relative h-48 w-full">
                      <Image
                        src="/photos/listings/Forest View Cascade/20240621 A7M3 01 A1_01907.jpg"
                        alt="Forest View Cascade Rooms"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Forest View Cascade Rooms</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Book Your Stay?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Experience the perfect Whistler getaway at Ace Cascade Lodge Hotel.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="https://www.airbnb.ca/rooms/1142301968081447021?guests=1&adults=1&s=67&unique_share_id=090dd316-32ed-46cd-9900-8d295c47ec4e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#0066CC] hover:bg-[#004C99] text-white rounded font-medium text-base sm:text-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Full Screen Photo Modal */}
        {selectedPhotoIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={closeFullScreenPhoto}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              aria-label="Close photo view"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button
              onClick={() => navigatePhoto("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              aria-label="Previous photo"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => navigatePhoto("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              aria-label="Next photo"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="relative h-[80vh] w-[80vw]">
              <Image
                src={photos[selectedPhotoIndex]}
                alt={`Mountain View Room ${selectedPhotoIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Photo Gallery Modal */}
        {showAllPhotos && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="sticky top-0 bg-white shadow-md z-10 px-4 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Mountain View Rooms Photos</h2>
              <button
                onClick={closeAllPhotos}
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Close gallery"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] relative cursor-pointer"
                    onClick={() => handlePhotoClick(index)}
                  >
                    <Image
                      src={photo}
                      alt={`Mountain View Room ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <AceCascadeFooter />
      </div>
    </>
  );
};

export default MountainViewRooms;