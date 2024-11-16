import React from "react";
import Image from "next/image";

const GallerySection: React.FC = () => {
  const galleryItems = [
    {
      before: "/Images/gallery/IMG_9076 2.JPEG",
      after: "/Images/gallery/IMG_9077 2.JPEG",
      description: "Classic fade transformation.",
    },
    {
      before: "/Images/gallery/before2.jpg",
      after: "/Images/gallery/after2.jpg",
      description: "Beard trim and style upgrade.",
    },
    {
      before: "/Images/gallery/before3.jpg",
      after: "/Images/gallery/after3.jpg",
      description: "Sharp haircut for a fresh look.",
    },
  ];

  return (
    <section
      className="py-16 px-6 md:px-12 lg:px-24"
      style={{
        background: "linear-gradient(to bottom, #0d0d0d, #1a1a1a)",
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Before & After
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Before Photo */}
              <div className="relative w-full aspect-[3/4] mb-4">
                <Image
                  src={item.before}
                  alt="Before"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
                <span className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 text-sm rounded">
                  Before
                </span>
              </div>

              {/* After Photo */}
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={item.after}
                  alt="After"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
                <span className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 text-sm rounded">
                  After
                </span>
              </div>

              {/* Description */}
              <p className="text-center text-gray-300 mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
