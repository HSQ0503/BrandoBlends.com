import React from "react";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-[#0d0d0d]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Bg/blackBG.png"
          alt="Background Texture"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-4xl font-bold mb-6 merriweather text-white">
            About Brando Blends
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Brando is an expert barber with a decade of experience, crafting
            precise and stylish looks for a confident you. Known for exceptional
            attention to detail, Brando ensures every client leaves feeling
            their best.
          </p>

          {/* Location Information */}
          <div className="flex items-center mt-6 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <a
              target="_blank"
              href="https://www.google.com/maps?daddr=28.34641615547212,-81.6660523337053&amp;ll"
              className="text-gray-300 hover:underline transition duration-300 ease-in-out"
            >
              160 Kersey St, Davenport, 33897
            </a>
          </div>

          {/* Call to Action */}
          <a
            href="/galllery"
            className="inline-flex items-center px-6 py-3 mt-6 bg-[#000080] text-white font-semibold hover:bg-blue-500 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            View Gallery
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 lg:w-2/3">
          <div className="relative w-full h-auto">
            <Image
              src="/Images/AboutPhoto.jpeg"
              alt="Brando Blends Cutting Hair"
              width={750}
              height={500}
              layout="intrinsic"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
