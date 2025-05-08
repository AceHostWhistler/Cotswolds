import React, { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Card from "./Card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marissa Charles",
      role: "Guest",
      text: "We had an incredible experience staying at the home! Everything was coordinated perfectly. They got us extra gondola badges and stocked all our groceries and responded very quickly to our requests. I could not recommend the company and the house more highly!",
      date: "20 Mar 2024",
      hasImage: false,
    },
    {
      name: "Tyler Bacon",
      role: "Guest",
      text: "Great hosts! And the house was spectacular!",
      date: "9 weeks ago",
      hasImage: false,
    },
    {
      name: "Mike Sill",
      role: "Guest",
      text: "Wow, absolutely stunned by the service and property itself. Ben and his team are masterminds at making you feel ultra VIP when you book through him. We arrived at the modern yet traditional feeling compound and were immediately greeted by their team who helped us unload everything and get settled. Every room was sparkling clean and there was nothing we lacked. Ben and his team were constantly a text away if we needed anything. From the hot tub, to the steam room, to the ski boot warming machine… no detail was left out. Couldn't recommend booking here more. 10/10 stars. ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ Sidenote: special shoutout to Hannah, she's a real one.",
      date: "9 weeks ago",
      hasImage: false,
    },
    {
      name: "Zain Rasul",
      role: "Guest",
      text: "Had a great stay here, we were able to have a private chef and bartender assist at the home with dinners and drinks, will definitely be back in the future!",
      date: "48 weeks ago",
      hasImage: false,
    },
    {
      name: "Aran Seaman",
      role: "Guest",
      text: "Such a great team to work with. A real dedication to guest satisfaction & wellbeing. Amazing attention to detail. Highly recommend!",
      date: "38 weeks ago",
      hasImage: false,
    },
    {
      name: "Karen Thompson",
      role: "Guest",
      text: "We enjoyed our stay at this beautiful home in Whistler! Our family was well taken care of by Ben and his AceHost team. Ben's professionalism and attention to detail ensured our family could focus on spending time together and not worrying about the many details of a family holiday. Ben made recommendations and reservations to wonderful restaurants, the spa and other interesting places to go. We strongly recommend AceHost to anyone who wants to enjoy a fun holiday with an attentive concierge that can plan an exceptional experience for you.",
      date: "50 weeks ago",
      hasImage: false,
    },
    {
      name: "Isabel Salgar",
      role: "Guest",
      text: "I would not think twice about using this fantastic group. The concierge service is amazing! They literally take care of everything!!! The group is very professional and super diligent. Always available. They helped us with, car rentals, restaurant reservations, meals at the house, literally anything can think of! They even sat a table for us at Apres skiing while we got there! Never experienced such a professional group before and we rent worldwide. Don't miss out on this amazing group at Whistler.",
      date: "52 weeks ago",
      hasImage: false,
    },
    {
      name: "Andres Posada",
      role: "Guest",
      text: "The team is awesome. Went above and beyond to make our stay incredible.",
      date: "10 Apr 2024",
      hasImage: false,
    },
    {
      name: "Brad Schwartzberg",
      role: "Guest",
      text: "We just returned from a wonderful family vacation in Whistler. We stayed at Chalet La Forja in Kadenwood. The property was magnificent, but as nice as the property was (and it was fantastic), the 'around-the-clock' service provided by AceHost was even better. There was literally not one single thing that we asked for that they did not provide.",
      date: "35 weeks ago",
      hasImage: false,
    },
    {
      name: "Saul Kahn",
      role: "Property Owner",
      text: "AceHost has done a great job managing my Whistler rentals for the past two years. I would recommend them to anyone needing rental management in the Whistler area.",
      date: "38 weeks ago",
      hasImage: false,
    },
    {
      name: "Courtney Holliday",
      role: "Guest",
      text: "My husband and I recently booked a home in Kadenwood for our friends and family to enjoy a vacation getaway and WOW!!!! The home was absolutely stunning! So cozy and beautiful, with unbelievable views. But, AceHost was the star of the show! We all had such an amazing experience and truly felt like we were in the best of hands.",
      date: "7 weeks ago",
      hasImage: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const reviewsToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= testimonials.length - (reviewsToShow.desktop - 1)
        ? 0
        : nextIndex;
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  }, [testimonials.length, isAnimating, reviewsToShow.desktop]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - reviewsToShow.desktop
        : prevIndex - 1
    );
    setIsAutoPlaying(false);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  }, [testimonials.length, isAnimating, reviewsToShow.desktop]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, handleNext]);

  return (
    <section className="py-24 px-5 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-5 tracking-tight">
            Guest Experiences
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover what our guests have to say about their stays with AceHost
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / reviewsToShow.desktop)
                }%)`,
              }}
            >
              {testimonials.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="w-full min-w-full md:w-1/2 md:min-w-[50%] lg:w-1/3 lg:min-w-[33.333%] px-4"
                >
                  <Card className="bg-white backdrop-blur-sm p-8 h-full rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col h-full">
                      {/* Star Rating */}
                      <div className="mb-6 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-yellow-500 fill-yellow-500 mr-0.5"
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-400">
                          {review.date}
                        </span>
                      </div>

                      {/* Review Text */}
                      <blockquote className="flex-grow mb-6">
                        <p className="text-gray-700 leading-relaxed text-sm">
                          "{review.text}"
                        </p>
                      </blockquote>

                      {/* Reviewer Info */}
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                          <span className="text-base font-medium text-gray-500">
                            {review.name[0]}
                          </span>
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900">{review.name}</p>
                          <p className="text-xs text-gray-500">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {[...Array(testimonials.length - 2)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`p-3 flex items-center justify-center ${
                  currentIndex === idx
                    ? "min-w-[44px] min-h-[44px]"
                    : "min-w-[44px] min-h-[44px]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span 
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "bg-gray-800 w-6 h-3"
                      : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-5 bg-white w-10 h-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-5 bg-white w-10 h-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Google Review Link */}
        <div className="text-center mt-14">
          <a
            href="https://g.co/kgs/EjNxVSa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-800 hover:text-black transition-colors px-6 py-3 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-sm"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              className="mr-1"
              fill="currentColor"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
            </svg>
            View all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
