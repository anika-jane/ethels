import React from "react";
import styles from "./Carousel.module.css";

export const Carousel = () => {
  return (
    <>
      <section className={styles["Image-Slider"]}>
        <div className={styles["Slider"]}>
          <div className={styles["Image-Container"]}>
            <div className={styles["Image"]}></div>
            <div className={styles["Image"]}></div>
            <div className={styles["Image"]}></div>
          </div>
        </div>
        <div className={styles["Pagination"]}>
          <span className={styles["active"]}></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  );
};
