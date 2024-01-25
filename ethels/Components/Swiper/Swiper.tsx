"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Swiper.module.css";

import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

register();

interface CustomStyle extends React.CSSProperties {
  "--swiper-pagination-color"?: string;
  "--swiper-pagination-bullet-inactive-color"?: string;
  "--swiper-pagination-bullet-inactive-opacity"?: string;
  "--swiper-pagination-bullet-size"?: string;
  "--swiper-pagination-bullet-horizontal-gap"?: string;
  "--swiper-pagination-bottom"?: string;
}

export default function SwipeElement() {
  const customStyle: CustomStyle = {
    "--swiper-pagination-color": "#e14747",
    "--swiper-pagination-bullet-inactive-color": "#fac88d",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "12px",
    "--swiper-pagination-bullet-horizontal-gap": "4px",
    "--swiper-pagination-bottom": "4px",
  };

  return (
    <>
      <Swiper
        style={customStyle}
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard]}
        className={styles["mySwiper"]}
      >
        <SwiperSlide>
          <Image
            src="/Assets/Images/blatz-profile.jpeg"
            height={515}
            width={600}
            alt=""
            className={styles["swiperImage"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Assets/Images/pinball.jpeg"
            height={515}
            width={600}
            alt=""
            className={styles["swiperImage"]}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Assets/Images/stool.jpeg"
            height={515}
            width={600}
            alt=""
            className={styles["swiperImage"]}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
