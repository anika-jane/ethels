"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./About.module.css";

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

export const About = () => {
  const customStyle: CustomStyle = {
    "--swiper-pagination-color": "#e14747",
    "--swiper-pagination-bullet-inactive-color": "#ffedd3",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "12px",
    "--swiper-pagination-bullet-horizontal-gap": "4px",
    "--swiper-pagination-bottom": "-5px",
  };

  return (
    <>
      <section id="About" className={styles["About"]}>
        <div className={styles["TitleContainer"]}>
          <Image
            src="/Assets/Titles/title-about.svg"
            height={117}
            width={188}
            alt=""
            className={styles["AboutTitle"]}
          />
        </div>
        <div className={styles["AboutSection"]}>
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
                  src="/Assets/Images/barblatz.jpg"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Assets/Images/outFront-lighttrail.png"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Assets/Images/ethels-sign.jpg"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Assets/Images/backbar.png"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Assets/Images/stools.jpg"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Assets/Images/tacosandnachos.png"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Assets/Images/patio.png"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles["DescriptionSection"]}>
            <p className={styles["AboutDescription"]}>
              Ethel&apos;s Lounge was originally a Black Rhythm & Blues and Soul
              Club in Eastside Detroit.
              <br />
              <br />
              Ethel, who ran the place, was a loan shark&apos;s mistress who
              loved the music and ran the place with an iron fist. The Club
              closed in the late 1980&apos;s and the sign was liberated shortly
              thereafter.
              <br />
              <br />
              Ethel&apos;s menu today reflects some of the Soul side of Southern
              cooking, such as our famous Pulled Pork, Homemade Beans and
              Meatloaf. Everything is made from scratch.
              <br />
              <br />
              Drop in anytime and plunk yourself down at one of our slightly
              used kitchen tables. Your host Glenn will always be happy to sit
              at the end of the bar and swap lies with you.
            </p>
          </div>
        </div>

        <div className={styles["AboutSectionSmall"]}>
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
                  src="/Assets/Images/barblatz.jpg"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Assets/Images/outFront-lighttrail.png"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Assets/Images/ethels-sign.jpg"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Assets/Images/backbar.png"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Assets/Images/stools.jpg"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Assets/Images/tacosandnachos.png"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/Assets/Images/patio.png"
                  height={600}
                  width={820}
                  alt=""
                  className={styles["swiperImage"]}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <p className={styles["AboutDescription"]}>
            Ethel&apos;s Lounge was originally a Black Rhythm & Blues and Soul
            Club in Eastside Detroit.
            <br />
            <br />
            Ethel, who ran the place, was a loan shark&apos;s mistress who loved
            the music and ran the place with an iron fist. The Club closed in
            the late 1980&apos;s and the sign was liberated shortly thereafter.
            <br />
            <br />
            Ethel&apos;s menu today reflects some of the Soul side of Southern
            cooking, such as our famous Pulled Pork, Homemade Beans and
            Meatloaf. Everything is made from scratch.
            <br />
            <br />
            Drop in anytime and plunk yourself down at one of our slightly used
            kitchen tables. Your host Glenn will always be happy to sit at the
            end of the bar and swap lies with you.
          </p>
        </div>
      </section>
    </>
  );
};
