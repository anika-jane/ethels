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

// Step 1: Define a custom style interface
interface CustomStyle extends React.CSSProperties {
  "--swiper-pagination-color"?: string;
  "--swiper-pagination-bullet-inactive-color"?: string;
  "--swiper-pagination-bullet-inactive-opacity"?: string;
  "--swiper-pagination-bullet-size"?: string;
  "--swiper-pagination-bullet-horizontal-gap"?: string;
  "--swiper-pagination-bottom"?: string;
}

export default function App() {
  // Step 2: Use the custom style type
  const customStyle: CustomStyle = {
    "--swiper-pagination-color": "#e14747",
    "--swiper-pagination-bullet-inactive-color": "#fac88d",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "12px",
    "--swiper-pagination-bullet-horizontal-gap": "4px",
    "--swiper-pagination-bottom": "37px",
  };

  return (
    <>
      <Swiper
        style={customStyle}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className={styles["SwiperContainer"]}
      >
        <SwiperSlide>
          <Image
            src="/Assets/Images/tray-race.jpeg"
            height={500}
            width={500}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Assets/Images/sign.jpeg"
            height={500}
            width={500}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Assets/Images/blatz.jpeg"
            height={500}
            width={500}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Assets/Images/mennonite.jpeg"
            height={500}
            width={500}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
