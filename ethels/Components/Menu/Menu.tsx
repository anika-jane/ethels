"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Menu.module.css";
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

export default function Menu() {
  const customStyle: CustomStyle = {
    "--swiper-pagination-color": "#e14747",
    "--swiper-pagination-bullet-inactive-color": "#fbe4c9",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "12px",
    "--swiper-pagination-bullet-horizontal-gap": "4px",
    "--swiper-pagination-bottom": "4px",
  };

  return (
    <section id="Menu" className={styles["MenuSection"]}>
      <div className={styles["TitleContainer"]}>
        <Image
          src="/Assets/Titles/title-menu@2x.png"
          height={117}
          width={188}
          alt=""
          className={styles["MenuTitle"]}
        />
      </div>
      <div className={styles["MenuContainer"]}>
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
            <Link href="https://ethelslounge.com/Menu.pdf" target="_blank">
              <Image
                src="/Assets/Menu768/Ethels-Menu-Spring-2023-01-768.jpg"
                height={820}
                width={600}
                alt=""
                className={styles["swiperImage"]}
              />
              <Image
                src="/Assets/Menu768/Ethels-Menu-Spring-2023-01-768.jpg"
                height={461}
                width={337}
                alt=""
                className={styles["swiperImage-small"]}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://ethelslounge.com/Menu.pdf" target="_blank">
              <Image
                src="/Assets/Menu768/Ethels-Menu-Spring-2023-02-768.jpg"
                height={820}
                width={600}
                alt=""
                className={styles["swiperImage"]}
              />
              <Image
                src="/Assets/Menu768/Ethels-Menu-Spring-2023-02-768.jpg"
                height={461}
                width={337}
                alt=""
                className={styles["swiperImage-small"]}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://ethelslounge.com/Menu.pdf" target="_blank">
              <Image
                src="/Assets/Menu768/Ethels-Menu-Spring-2023-03-768.jpg"
                height={820}
                width={600}
                alt=""
                className={styles["swiperImage"]}
              />
              <Image
                src="/Assets/Menu768/Ethels-Menu-Spring-2023-03-768.jpg"
                height={461}
                width={337}
                alt=""
                className={styles["swiperImage-small"]}
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://ethelslounge.com/Menu.pdf" target="_blank">
              <Image
                src="/Assets/Menu768/Ethels-Menu-Spring-2023-04-768.jpg"
                height={820}
                width={600}
                alt=""
                className={styles["swiperImage"]}
              />
              <Image
                src="/Assets/Menu768/Ethels-Menu-Spring-2023-04-768.jpg"
                height={461}
                width={337}
                alt=""
                className={styles["swiperImage-small"]}
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
