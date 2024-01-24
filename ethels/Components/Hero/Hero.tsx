import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles["HeroSection"]}>
      <div className={styles["HeroImageContainer"]}></div>
    </section>
  );
};
