import React, { useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Home,
  Bed,
  Users,
  Bath,
  DollarSign,
  Calendar,
  ImagePlus,
  MapPin,
  Tag,
  FileText,
} from "lucide-react";
import { useRouter } from "next/router";

// Define a type for the form data
interface PropertyFormData {
  name: string;
  location: string;
  description: string;
  guests: string;
  bedrooms: string;
  beds: string;
  bathrooms: string;
  priceStandard: string;
  priceWinter: string;
  priceHoliday: string;
  minStay: string;
  airbnbLink: string;
  propertyCategory: string;
  amenities: {
    hotTub: boolean;
    pool: boolean;
    sauna: boolean;
    skiInOut: boolean;
    fireplace: boolean;
    petFriendly: boolean;
    chefKitchen: boolean;
    butler: boolean;
    views: boolean;
    parking: boolean;
  };
  images: File[];
}

const PropertyUpload = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<PropertyFormData>({
    name: "",
    location: "",
    description: "",
    guests: "",
    bedrooms: "",
    beds: "",
    bathrooms: "",
    priceStandard: "",
    priceWinter: "",
    priceHoliday: "",
    minStay: "",
    airbnbLink: "",
    propertyCategory: "",
    amenities: {
      hotTub: false,
      pool: false,
      sauna: false,
      skiInOut: false,
      fireplace: false,
      petFriendly: false,
      chefKitchen: false,
      butler: false,
      views: false,
      parking: false,
    },
    images: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAmenitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      amenities: {
        ...formData.amenities,
        [name]: checked,
      },
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Convert FileList to array and store
      setFormData({
        ...formData,
        images: [...formData.images, ...Array.from(files)],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Format property slug
      const propertySlug = formData.name
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");

      // Here you would typically create the property in the database
      // This is a simplified example
      console.log("Submitting property:", formData);

      // In a real application, you would send this data to your backend API
      // const response = await fetch('/api/properties', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     ...formData,
      //     slug: propertySlug,
      //   }),
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to create property');
      // }

      // For demo purposes, we'll just show an alert and redirect
      alert(
        "Property submitted successfully! Redirecting to the new property page."
      );

      // Redirect to the new property page
      router.push(`/properties/${propertySlug}`);
    } catch (error) {
      console.error("Error submitting property:", error);
      alert("There was an error submitting the property. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Upload Property | AceHost</title>
        <meta
          name="description"
          content="Upload a new luxury property to the AceHost catalog"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Upload a New Property
              </h1>
              <p className="text-lg text-gray-600">
                Complete the form below to add a new luxury property to our
                catalog.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Home className="mr-2" />
                  Basic Property Information
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Property Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Altitude Retreat | Kadenwood"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Whistler Village, Creekside"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="propertyCategory"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Property Category
                    </label>
                    <select
                      id="propertyCategory"
                      name="propertyCategory"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.propertyCategory}
                      onChange={handleChange}
                    >
                      <option value="">Select a category</option>
                      <option value="whistler">Whistler Properties</option>
                      <option value="vancouver">Vancouver Properties</option>
                      <option value="worldwide">Worldwide</option>
                      <option value="pets-allowed">Pets Allowed</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="airbnbLink"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Airbnb Link
                    </label>
                    <input
                      type="url"
                      id="airbnbLink"
                      name="airbnbLink"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.airbnbLink}
                      onChange={handleChange}
                      placeholder="e.g. https://airbnb.com/rooms/123456"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Property Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe the property, its unique features, and amenities..."
                    />
                  </div>
                </div>
              </div>

              {/* Capacity and Layout */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Users className="mr-2" />
                  Capacity and Layout
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Max Guests
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      required
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.guests}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bedrooms"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      id="bedrooms"
                      name="bedrooms"
                      required
                      min="1"
                      step="0.5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.bedrooms}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="beds"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Beds
                    </label>
                    <input
                      type="number"
                      id="beds"
                      name="beds"
                      required
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.beds}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bathrooms"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      id="bathrooms"
                      name="bathrooms"
                      required
                      min="1"
                      step="0.5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.bathrooms}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="mr-2" />
                  Pricing Information
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div>
                    <label
                      htmlFor="priceStandard"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Standard Price Range (CAD)
                    </label>
                    <input
                      type="text"
                      id="priceStandard"
                      name="priceStandard"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.priceStandard}
                      onChange={handleChange}
                      placeholder="e.g. $500-$2,000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="priceWinter"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Winter Season Price (CAD)
                    </label>
                    <input
                      type="text"
                      id="priceWinter"
                      name="priceWinter"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.priceWinter}
                      onChange={handleChange}
                      placeholder="e.g. $4,500-$6,500+"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="priceHoliday"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Holiday Season Price (CAD)
                    </label>
                    <input
                      type="text"
                      id="priceHoliday"
                      name="priceHoliday"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.priceHoliday}
                      onChange={handleChange}
                      placeholder="e.g. $10,000+ Nightly"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="minStay"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Minimum Stay (Nights)
                    </label>
                    <input
                      type="number"
                      id="minStay"
                      name="minStay"
                      required
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.minStay}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Tag className="mr-2" />
                  Amenities
                </h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hotTub"
                      name="hotTub"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.amenities.hotTub}
                      onChange={handleAmenitiesChange}
                    />
                    <label
                      htmlFor="hotTub"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Hot Tub
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="pool"
                      name="pool"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.amenities.pool}
                      onChange={handleAmenitiesChange}
                    />
                    <label
                      htmlFor="pool"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Swimming Pool
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="sauna"
                      name="sauna"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.amenities.sauna}
                      onChange={handleAmenitiesChange}
                    />
                    <label
                      htmlFor="sauna"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Sauna/Steam Room
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="skiInOut"
                      name="skiInOut"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.amenities.skiInOut}
                      onChange={handleAmenitiesChange}
                    />
                    <label
                      htmlFor="skiInOut"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Ski In/Ski Out
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="fireplace"
                      name="fireplace"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.amenities.fireplace}
                      onChange={handleAmenitiesChange}
                    />
                    <label
                      htmlFor="fireplace"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Fireplace
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="petFriendly"
                      name="petFriendly"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.amenities.petFriendly}
                      onChange={handleAmenitiesChange}
                    />
                    <label
                      htmlFor="petFriendly"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Pet Friendly
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="chefKitchen"
                      name="chefKitchen"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.amenities.chefKitchen}
                      onChange={handleAmenitiesChange}
                    />
                    <label
                      htmlFor="chefKitchen"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Gourmet Chef Kitchen
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="butler"
                      name="butler"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.amenities.butler}
                      onChange={handleAmenitiesChange}
                    />
                    <label
                      htmlFor="butler"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Private Butler
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="views"
                      name="views"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.amenities.views}
                      onChange={handleAmenitiesChange}
                    />
                    <label
                      htmlFor="views"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Mountain/Lake Views
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="parking"
                      name="parking"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      checked={formData.amenities.parking}
                      onChange={handleAmenitiesChange}
                    />
                    <label
                      htmlFor="parking"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Private Parking
                    </label>
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <ImagePlus className="mr-2" />
                  Property Images
                </h2>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Property Photos (maximum 10)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="images"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                        >
                          <span>Upload images</span>
                          <input
                            id="images"
                            name="images"
                            type="file"
                            multiple
                            accept="image/*"
                            className="sr-only"
                            onChange={handleImageUpload}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB each
                      </p>
                    </div>
                  </div>
                </div>

                {formData.images.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Selected Images:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Array.from(formData.images).map((image, index) => (
                        <div
                          key={index}
                          className="relative h-24 bg-gray-100 rounded-md overflow-hidden"
                        >
                          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                            {image.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Submit Property
                </button>
              </div>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default PropertyUpload;
