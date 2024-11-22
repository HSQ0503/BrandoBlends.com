import React from "react";
import Link from "next/link";

const FinalCTA: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-black flex items-center justify-center"
      style={{
        backgroundImage: "url(/Images/CTAPHOTO.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative text-center z-10 text-white">
        <h1 className="text-gold font-extrabold text-4xl md:text-6xl mb-4">
          Elevate Your Style
        </h1>
        <div className="w-12 h-[1px] bg-gold mx-auto mb-6"></div>
        <Link href="/Booking" className="border-2 border-gold text-white font-bold px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-black transition">
          Make an Appointment
        </Link>
      </div>
    </div>
  );
};

export default FinalCTA;
