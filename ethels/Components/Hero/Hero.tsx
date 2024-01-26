import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles["HeroSection"]}>
      <div className={styles["HeroImageContainerLarge"]}>
        <Image
          src="/Assets/HeroImage/image-hero-1280@2x.png"
          height={635}
          width={854}
          alt=""
          className={styles["HeroImageLarge"]}
        />
      </div>
      <div className={styles["HeroImageContainerMedium"]}>
        <Image
          src="/Assets/HeroImage/image-hero-768@2x.png"
          height={668}
          width={660}
          alt=""
          className={styles["HeroImageMedium"]}
        />
      </div>
      <div className={styles["HeroImageContainerSmall"]}>
        <Image
          src="/Assets/HeroImage/image-hero-mobile@2x.png"
          height={503}
          width={414}
          alt=""
          className={styles["HeroImageSmall"]}
        />
      </div>
    </section>
  );
};
