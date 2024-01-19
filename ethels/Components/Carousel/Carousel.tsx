import React from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import Link from "next/link";

export const Carousel = () => {
  return (
    <section className={styles["CarouselContainer"]}>
      <div className="slider">
        <div className="slides">
          <div id="slide-1">1</div>
          <div id="slide-2">2</div>
          <div id="slide-3">3</div>
          <div id="slide-4">4</div>
          <div id="slide-5">5</div>
        </div>
        <Link href="#slide-1">1</Link>
        <Link href="#slide-2">2</Link>
        <Link href="#slide-3">3</Link>
        <Link href="#slide-4">4</Link>
        <Link href="#slide-5">5</Link>
      </div>
    </section>
  );
};
