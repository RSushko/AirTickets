"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import CardArticle from "@/cardArticle/CardArticle";

type Props = {
  value: [];
};

const Slider = ({ value }: Props) => {
  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        400: {
          slidesPerView: 1.5,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 2.2,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2.2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3.2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 15,
        },
      }}
      modules={[Pagination]}
    >
      {value.map((el, i) => {
        return (
          <SwiperSlide key={i}>
            <CardArticle key={i} info={el} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
