"use client";

import React from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  description: string;
};

const galleryImages: GalleryImage[] = [
  { src: "/Images/gallery/cut1.png", description: "Classic Fade with Beard Trim" },
  { src: "/Images/gallery/cut2.png", description: "Modern Crop with Textured Top" },
  { src: "/Images/gallery/cut3.png", description: "Skin Fade with Line-Up" },
  { src: "/Images/gallery/cut4.png", description: "Curly Top with Mid Fade" },
  { src: "/Images/gallery/cut5.png", description: "Pompadour with Tapered Sides" },
  { src: "/Images/gallery/cut6.png", description: "Undercut with Slick Back" },
  { src: "/Images/gallery/cut7.png", description: "Curly Top with Mid Fade" },
  { src: "/Images/gallery/cut8.png", description: "Pompadour with Tapered Sides" },
  { src: "/Images/gallery/cut9.png", description: "Undercut with Slick Back" },
];

const GallerySection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Brando&apos;s Gallery
        </h2>
        <p className="text-center text-white mb-12">
          Check out Brando&apos;s amazing cuts for his clients. Each style is crafted
          with precision and care!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src={image.src}
                alt={image.description}
                layout="responsive"
                width={400}
                height={600}
                unoptimized
                className="transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold text-center px-4">
                  {image.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
