"use client";
import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Events.module.css";

import { Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";

register();

interface CustomStyle extends React.CSSProperties {
  "--swiper-pagination-color"?: string;
  "--swiper-pagination-bullet-inactive-color"?: string;
  "--swiper-pagination-bullet-inactive-opacity"?: string;
  "--swiper-pagination-bullet-size"?: string;
  "--swiper-pagination-bullet-horizontal-gap"?: string;
  "--swiper-pagination-bottom"?: string;
}

export const Event = () => {
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
      <section className={styles["EventSection"]}>
        <div className={styles["EventText"]}>
          <h2 className={styles["EventTitle"]}>Events</h2>
          <p className={styles["EventName"]}>Ethel&apos;s Tray Race</p>
          <p className={styles["EventDate"]}>August 21, 2023</p>
        </div>
        <div className={styles["SwiperContainer"]}>
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
                src="/Assets/Images/the-interior 2.png"
                height={540}
                width={800}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
        <p className={styles["EventDescription"]}>
          For about 25 years, the annual Ethel&apos;s tray race has been raising
          funds for local charities. in 2023, 22 teams participated and battled
          it out in the gruelling event in which teams must balance water
          bottles on a tray while taking part in a relay race. Two-thousand
          dollars was donated to Pound Dog Rescue, a faster home-based rescue
          serving Waterloo.
        </p>
      </section>
    </>
  );
};
