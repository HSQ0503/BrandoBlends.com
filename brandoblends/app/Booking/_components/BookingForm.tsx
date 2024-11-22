"use client";

import React, { useEffect, useState } from "react";

const BookingSection = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(true);

  useEffect(() => {
    // Dynamically add the Booksy widget script to the specific div
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://booksy.com/widget/code.js?id=676526&country=us&lang=en-US";
    script.async = true;

    // Event listener for successful load
    script.onload = () => {
      console.log("Booksy widget script loaded successfully.");
    };

    // Event listener for error loading the script
    script.onerror = () => {
      console.error("Failed to load the Booksy widget script.");
      setWidgetLoaded(false); // Show fallback options
    };

    const widgetDiv = document.getElementById("booksy-widget");
    if (widgetDiv) {
      widgetDiv.appendChild(script);
    }

    return () => {
      // Cleanup the script when the component unmounts
      if (widgetDiv) {
        widgetDiv.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Book an Appointment</h2>
        <p className="text-lg mb-8">
          Click the button below to secure your next visit with Brando Blends.
        </p>

        {/* Booking Widget or Fallback */}
        <div
          id="booksy-widget"
          className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden"
        >
          {widgetLoaded ? (
            // The Booksy widget will be loaded here by the script
            null
          ) : (
            // Fallback content if the widget fails to load
            <div className="py-8">
              <p className="text-xl mb-4 font-semibold">
                We're sorry, but the booking widget failed to load.
              </p>
              <p className="text-lg mb-6">
                Please use one of the options below to book your appointment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="tel:+6312908994"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                >
                  📞 Call to Book
                </a>
                <a
                  target="_blank"
                  href="https://booksy.com/en-us/676526_brandoblends_barber-shop_15999_davenport#ba_s=seo"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                >
                  ✨ Visit Booksy
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Include custom styles */}
        <style jsx global>{`
          /* Apply styles to the Booksy widget */
          #booksy-widget {
            background-color: transparent !important;
            color: white !important;
          }
          #booksy-widget * {
            background-color: transparent !important;
            color: white !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default BookingSection;
