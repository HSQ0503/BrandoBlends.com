"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LuRefreshCw } from "react-icons/lu";

type GalleryItem = {
  before: string;
  after: string;
};

const FlipCard: React.FC<{ item: GalleryItem; index: number }> = ({ item, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        role="button"
        aria-label="Flip Card"
        className="relative w-full aspect-[3/4] cursor-pointer [perspective:1000px] hover:scale-105 transition-transform duration-300"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front side (Before) */}
          <div className="absolute w-full h-full rounded-lg shadow-lg border border-gray-700 overflow-hidden [backface-visibility:hidden]">
            <Image
              src={item.before}
              alt="Before"
              layout="fill"
              objectFit="cover"
            />
            <span className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-3 py-1 text-sm rounded-lg shadow-md">
              Before
            </span>
            {!flipped && index === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                <LuRefreshCw className="h-12 w-12 mb-2" />
                <span className="text-lg font-semibold">Click to Flip</span>
              </div>
            )}
          </div>

          {/* Back side (After) */}
          <div className="absolute w-full h-full rounded-lg shadow-lg border border-gray-700 overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <Image
              src={item.after}
              alt="After"
              layout="fill"
              objectFit="cover"
            />
            <span className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-3 py-1 text-sm rounded-lg shadow-md">
              After
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfter: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      before: "/Images/galllery/IMG_9076 2.JPEG",
      after: "/Images/galllery/IMG_9077 2.JPEG",
    },
    {
      before: "/Images/galllery/IMG_9056 2.JPEG",
      after: "/Images/galllery/IMG_9057 2.JPEG",
    },
    {
      before: "/Images/galllery/IMG_9060 2.JPEG",
      after: "/Images/galllery/IMG_9061 2.JPEG",
    },
  ];

  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-24 bg-black bg-cover bg-center md:bg-[url('/Images/Bg/blackBG.png')]"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Before & After
        </h2>
        <p className="text-center text-white mb-12">
          Click on the images below to see the transformation!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item, index) => (
            <FlipCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
