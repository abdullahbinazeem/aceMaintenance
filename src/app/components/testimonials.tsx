"use client";

import React from "react";
import Container from "./container";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

type Carousel = {
  url: string;
  name: string;
  description: string;
};

const carouselItems: Carousel[] = [
  {
    url: "Wall",
    name: "Abdullah Azeem",
    description:
      "These guys did an Amazing job. Great communication and affordable prices as compared to other cleaners.",
  },
  {
    url: "Wall",
    name: "John Smith",
    description:
      "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    url: "Wall",
    name: "John Smith",
    description:
      "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    url: "Wall",
    name: "John Smith",
    description:
      "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    url: "Wall",
    name: "John Smith",
    description:
      "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
  {
    url: "Wall",
    name: "John Smith",
    description:
      "Aliqua id fugiat nostrud irure ex duis ea quis quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.",
  },
];

const Testimonials = () => {
  return (
    <Container className="mt-28 mb-40">
      <h2 className="text-center text-primary text-medium sm:text-lg tracking-wider uppercase">
        Happy Customers
      </h2>
      <h1 className="text-center text-secondary text-3xl sm:text-4xl  font-bold mt-4 uppercase">
        What our customers say{" "}
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
        {carouselItems.map((item, i) => (
          <SwiperSlide className="py-10" key={item.url}>
            <div className="border text-center px-7 pt-16 pb-6 rounded-md relative">
              <div className="absolute w-20 h-20 rounded-full bg-gray-300 border-2 -top-10 left-0 right-0 m-auto"></div>
              <h3 className="text-[#292929] text-lg sm:text-xl font-semibold mb-1 sm:mb-4">
                {item.name}
              </h3>
              <p className="text-sm text-pretty">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
