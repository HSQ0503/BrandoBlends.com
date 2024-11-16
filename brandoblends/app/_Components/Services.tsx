import Image from "next/image";
import React from "react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Haircut",
      price: "$65",
    },
    {
      title: "Haircut + Beard",
      price: "$75",
    },
    {
      title: "Haircut + Design",
      price: "$75+",
    },
  ];

  return (
    <section className="bg-black relative text-black py-16 px-6 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Bg/ServicesBG.png"
          alt="Background Texture"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-80"
        />
      </div>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 border-dotted pb-4"
            >
              <span className="text-lg font-bold">{service.title}</span>
              <span className="text-lg font-bold">{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
