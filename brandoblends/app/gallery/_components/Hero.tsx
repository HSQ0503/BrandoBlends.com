import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      <Image
        src="/Images/Bg/Banner.png"
        alt="Brando Blends"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="opacity-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white merriweather font-[800] text-5xl sm:text-6xl md:text-6xl lg:text-4xl xl:text-[5rem] mb-2">
          Bando's Gallery
        </h1>
        <div className="flex items-center mt-4 mb-6">
          <span className="h-[1px] w-12 bg-white mr-3"></span>
          <p className="text-white source-sans-3 text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl">
            Previous Cuts
          </p>
          <span className="h-[1px] w-12 bg-white ml-3"></span>
        </div>
        <Link href="#about" scroll={true} className="border-2 border-blue-600 text-white font-bold px-6 py-3 uppercase tracking-wider hover:bg-blue-500 hover:text-white transition">
          View Photos
        </Link>
      </div>
    </div>
  );
};
