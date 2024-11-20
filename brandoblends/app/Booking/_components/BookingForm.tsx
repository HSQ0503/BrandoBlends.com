import React from "react";

const BookingSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Book an Appointment
        </h2>
        <p className="text-lg mb-8">
          Use the form below to secure your next visit with Brando Blends.
        </p>

        {/* Booking Iframe */}
        <div className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://booksy.com/en-us/676526_brandoblends_barber-shop_15999_davenport#ba_s=seo"
            width="100%"
            height="800px"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
            title="Booksy Booking"
          ></iframe>
        </div>

        {/* Fallback Options */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="tel:+6312908994"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Call to Book
          </a>
          <a
            target="_blank"
            href="https://booksy.com/en-us/676526_brandoblends_barber-shop_15999_davenport"
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
          >
            Booksy
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
