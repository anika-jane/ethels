import React from "react";
import Image from "next/image";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section id="About" className={styles["AboutSection"]}>
      <div className={styles["Image Section"]}>
        <Image
          className={styles["Image"]}
          src="/"
          height={200}
          width={200}
          alt="/"
        />
        <div className={styles["Layers"]}>
          <div className={styles["Layer2"]}></div>
          <div className={styles["Layer3"]}></div>
        </div>
      </div>
    </section>
  );
};
