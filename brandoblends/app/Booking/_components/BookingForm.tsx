"use client";

import React from "react";

const BookingSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Book an Appointment</h2>
        <p className="text-lg mb-8">
          Ready for your next look? Click the button below to book with Brando
          Blends on Booksy.
        </p>
        <a
          href="https://booksy.com/en-us/676526_brandoblends_barber-shop_15999_davenport#ba_s=seo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 font-semibold text-lg"
        >
          ✨ Book Now on Booksy
        </a>
      </div>
    </section>
  );
};

export default BookingSection;
