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
};

const carouselItems: Carousel[] = [
  {
    url: "Wall",
  },
  {
    url: "Backyard",
  },
  {
    url: "Window",
  },
];

const Portfolio = () => {
  return (
    <Container className="mt-28 mb-40">
      <h2 className="text-center text-primary text-medium sm:text-lg tracking-wider uppercase">
        OUR PORTFOLIO
      </h2>
      <h1 className="text-center text-secondary text-3xl sm:text-4xl  font-bold mt-4">
        RECENT WORK SHOWCASE{" "}
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
          <SwiperSlide key={i}>
            <div className="relative aspect-[7/5] w-full bg-[#FFC48D] ">
              <Image
                fill
                alt={item.url}
                src={`/assets/works/${item.url}.jpg`}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Portfolio;
