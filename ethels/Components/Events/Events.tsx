"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Events.module.css";

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

export const Event = () => {
  const customStyle: CustomStyle = {
    "--swiper-pagination-color": "#e14747",
    "--swiper-pagination-bullet-inactive-color": "#fac88d",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "12px",
    "--swiper-pagination-bullet-horizontal-gap": "4px",
    "--swiper-pagination-bottom": "-5px",
  };

  return (
    <>
      <section id="Events" className={styles["EventSection"]}>
        <div className={styles["EventText"]}>
          <h2 className={styles["EventTitle"]}>Events</h2>
          <p className={styles["EventName"]}>Ethel&apos;s Tray Race</p>
          <p className={styles["EventDate"]}>August 21, 2023</p>
        </div>
        <div className={styles["SwipeContainer"]}>
          <Swiper
            style={customStyle}
            cssMode={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            modules={[Pagination, Mousewheel, Keyboard]}
            className={styles["mySwiper"]}
          >
            <SwiperSlide>
              <Image
                src="/Assets/Images/blatz-profile.jpeg"
                height={600}
                width={820}
                alt=""
                className={styles["swiperImage"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Assets/Images/pinball.jpeg"
                height={600}
                width={820}
                alt=""
                className={styles["swiperImage"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Assets/Images/stool.jpeg"
                height={600}
                width={820}
                alt=""
                className={styles["swiperImage"]}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <p className={styles["EventDescription"]}>
          For about 25 years, the annual Ethel&apos;s tray race has been raising
          funds for local charities. In 2023, 22 teams participated and battled
          it out in the gruelling event in which teams must balance water
          bottles on a tray while taking part in a relay race. Two-thousand
          dollars was donated to Dog Pound Rescue, a foster home-based rescue
          serving Waterloo Region.
        </p>
      </section>
    </>
  );
};
