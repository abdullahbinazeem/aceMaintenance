import React from "react";
import Container from "./container";

import Image from "next/image";

const services = [
  {
    title: "Pressure Washing",
    description:
      "Revamp your property with our top-notch pressure washing service.",
    icon: "pressurewasher",
  },
  {
    title: "Window Cleaning ",
    description:
      "Let us brighten your view with our exceptional window cleaning service.",
    icon: "window",
  },
  {
    title: "Drive Way & Balcony",
    description:
      "Elevate your outdoor space with our thorough driveway and balcony cleaning service.",
    icon: "balcony",
  },
  {
    title: "Exterior",
    description:
      "Revitalize your property's exterior with our expert cleaning service, giving it a fresh, polished look.",
    icon: "exterior",
  },
];

const Services = () => {
  return (
    <Container className="mt-28 mb-40">
      <h2 className="text-center text-primary text-medium sm:text-lg tracking-wider uppercase">
        OUR SERVICES
      </h2>
      <h1 className="text-center text-secondary text-3xl sm:text-4xl font-bold mt-4">
        WHAT WE ARE OFFERING
      </h1>
      <div className="mt-24 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6 gap-y-16 sm:gap-y-20">
        {services.map((item, index) => (
          <div
            className="border text-center px-6 pt-16 pb-6 rounded-md relative"
            key={index}
          >
            <h3 className="text-primary text-lg sm:text-xl font-medium mb-1 sm:mb-4">
              {item.title}
            </h3>
            <p className="text-sm">{item.description}</p>
            <div className="absolute w-20 h-20 rounded-full bg-white border -top-10 left-0 right-0 m-auto">
              <Image
                src={`/assets/icons/${item.icon}.svg`}
                alt={item.icon}
                fill
                className="p-4"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Services;
