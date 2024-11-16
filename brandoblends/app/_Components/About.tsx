import React from 'react';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 lg:w-2/3 md:pr-10 mt-8 md:mt-0">
          <h2 className="text-5xl font-bold mb-6 merriweather">About Brando Blends</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Brando is a passionate barber with over a decade of experience in the industry. Known for his precision,
            attention to detail, and ability to create styles that bring out confidence, Brando has built a loyal
            clientele that trusts him for his expertise. At Brando Blends, he combines his love for the craft with
            a commitment to providing each client with a tailored, professional experience.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Whether you're looking for a clean cut, a stylish fade, or a bold new look, Brando's skill and dedication
            will ensure you leave the chair looking your best. Experience style and confidence with every cut at
            Brando Blends.
          </p>
          {/* Gallery Button */}
          <a
            href="#gallery"
            className="inline-flex items-center mt-4 px-6 py-3 bg-[#000080] text-white font-semibold hover:bg-blue-400 transition duration-300"
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

        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="relative w-full h-0 pb-[100%]">
            <Image
              src="/Images/BRANDOBLENDS.jpg" 
              alt="Brando Blends"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
