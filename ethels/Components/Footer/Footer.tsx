import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <section className={styles["FooterSection"]}>
      <p className={styles["FooterText"]}>© 2024 | Ethel&apos;s Lounge</p>
    </section>
  );
};
