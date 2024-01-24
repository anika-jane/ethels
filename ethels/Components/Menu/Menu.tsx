"use client";
import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

import styles from "./Menu.module.css";

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

export default function Menu() {
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
          {/* <Link
            href="https://ethelslounge.com/EthelsMenu.pdf"
            target="_blank"
            className={styles["MenuLink"]}
          > */}
          <Image
            src="/Assets/Menu/Menu-1.jpg"
            height={500}
            width={500}
            alt=""
            className={styles["MenuImage"]}
          />
          {/* </Link> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <Link
            href="https://ethelslounge.com/EthelsMenu.pdf"
            target="_blank"
            className={styles["MenuLink"]}
          > */}
          <Image
            src="/Assets/Menu/Menu-2.jpg"
            height={500}
            width={500}
            alt=""
            className={styles["MenuImage"]}
          />
          {/* </Link> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <Link
            href="https://ethelslounge.com/EthelsMenu.pdf"
            target="_blank"
            className={styles["MenuLink"]}
          > */}
          <Image
            src="/Assets/Menu/Menu-3.jpg"
            height={500}
            width={500}
            alt=""
            className={styles["MenuImage"]}
          />
          {/* </Link> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <Link
            href="https://ethelslounge.com/EthelsMenu.pdf"
            target="_blank"
            className={styles["MenuLink"]}
          > */}
          <Image
            src="/Assets/Menu/Menu-4.jpg"
            height={820}
            width={600}
            alt=""
            className={styles["MenuImage"]}
          />
          {/* </Link> */}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
