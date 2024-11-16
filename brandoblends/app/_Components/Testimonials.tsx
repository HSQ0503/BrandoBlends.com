"use client";

import React, { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

type Testimonial = {
  name: string;
  review: string;
  rating: number;
};

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    { name: "Christopher R.", review: "Been going here for over a year and each time he blesses me up", rating: 5 },
    { name: "Robert P.", review: "He the goat fr", rating: 5 },
    { name: "Saif T.", review: "Blessed me up, coming back for sure!", rating: 5 },
    { name: "Michael N.", review: "Went once and just kept coming back, best barber hands down", rating: 5 },
    { name: "Arlette G.", review: "He&apos;s great at what he does, he never fails to impress me with his work. Best barber out there!", rating: 5 },
    { name: "Gustavo Q.", review: "Cuts with passion and is very chill with everyone.", rating: 5 },
    { name: "Nicholas F.", review: "Best barber in Florida.", rating: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextTestimonial = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

  const renderStars = (rating: number) => (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-6 h-6 ${index < rating ? "text-yellow-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09L6.245 11.5 1.49 6.91l6.561-.955L10 0l1.949 5.955 6.561.955-4.755 4.59 1.123 6.635z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section
      className="py-16 px-4"
      style={{
        background: "linear-gradient(to bottom, #0d0d0d, #1a1a1a)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 merriweather text-white">What Clients Say</h2>
        <p className="text-gray-400 text-lg mb-12">
          Real testimonials from trusted clients
        </p>

        <div className="relative bg-neutral-800 text-white p-8 rounded-lg shadow-lg">
          {/* Stars */}
          {renderStars(testimonials[currentIndex].rating)}

          {/* Review */}
          <p className="text-xl italic mb-6">&quot;{testimonials[currentIndex].review}&quot;</p>

          {/* Name */}
          <p className="font-bold text-lg text-gray-300">- {testimonials[currentIndex].name}</p>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-neutral-700 hover:bg-neutral-600 transition"
              aria-label="Previous testimonial"
            >
              <FaLongArrowAltLeft className="text-white text-2xl" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-neutral-700 hover:bg-neutral-600 transition"
              aria-label="Next testimonial"
            >
              <FaLongArrowAltRight className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
