import React from "react";
import Image from "next/image";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section id="About" className={styles["AboutSection"]}>
      <div className={styles["ImageSection"]}>
        <Image
          className={styles["Image"]}
          src="/Assets/Images/the-interior 2.png"
          height={515}
          width={599}
          alt="/"
        />
      </div>
      <div className={styles["AboutText"]}>
        <p className={styles["AboutParagraph"]}>
          Ethel's Lounge was originally a Black Rhythm & Blues and Soul Club in
          Eastside Detroit.
          <br />
          <br />
          Ethel, who ran the place, was a loan sharks's mistress who loved the
          music and ran the place with an iron fist.
          <br />
          <br />
          The Club closed in the late 1980's and the sign was liberated shortly
          thereafter.
          <br />
          <br />
          Ethel's menu today reflects some of the Soul side of Southern cooking,
          such as our famous Pulled Pork, Homemade Beans and Meatloaf.
          Everything is made from scratch.
          <br />
          <br />
          Drop in anytime and plunk yourself down at one of our slightly used
          kitchen tables.
          <br />
          <br />
          Your host Glenn will always be happy to sit at the end of the bar and
          swap lies with you.
        </p>
      </div>
    </section>
  );
};
