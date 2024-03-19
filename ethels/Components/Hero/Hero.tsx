"use client";
import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

// Correctly typed parameters for the custom loader function
const customLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number; // Make quality optional
}): string => {
  // Implement your custom logic here
  return `/Assets/HeroImage${src}?w=${width}&q=${quality || 75}`;
};

export const Hero = () => {
  return (
    <section className={styles["HeroSection"]}>
      <div className={styles["HeroImageContainerLarge"]}>
        <Image
          loader={customLoader}
          src="/image-hero-1280@2x.png"
          height={635}
          width={854}
          alt=""
          className={styles["HeroImageLarge"]}
        />
      </div>
      <div className={styles["HeroImageContainerMedium"]}>
        <Image
          loader={customLoader}
          src="/image-hero-768@2x.png"
          height={668}
          width={660}
          alt=""
          className={styles["HeroImageMedium"]}
        />
      </div>
      <div className={styles["HeroImageContainerSmall"]}>
        <Image
          loader={customLoader}
          src="/image-hero-mobile@2x.png"
          height={503}
          width={414}
          alt=""
          className={styles["HeroImageSmall"]}
        />
      </div>
    </section>
  );
};
