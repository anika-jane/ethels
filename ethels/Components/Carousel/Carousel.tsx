"use client";
import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Carousel.module.css";

import { Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";

register();

export default function App() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#e14747",
          "--swiper-pagination-bullet-inactive-color": "#fac88d",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "4px",
        }}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className={styles["SwiperContainer"]}
      >
        <SwiperSlide>
          <Image
            src="/Assets/Images/the-interior 2.png"
            className={styles["SwiperImage"]}
            height={500}
            width={500}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
