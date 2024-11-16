import React from "react";

const BookingSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-neutral-900 text-white">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Book an Appointment
      </h2>
      <div className="w-full h-[800px]">
        <iframe
          src="https://booksy.com/en-us/676526_brandoblends_barber-shop_15999_davenport#ba_s=seo"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default BookingSection;
