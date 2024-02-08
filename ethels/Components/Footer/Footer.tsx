import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <section className={styles["FooterSection"]}>
      <div className={styles["FooterText"]}>© 2024 | Ethel&apos;s Lounge</div>
      <div className={styles["FooterAttribute"]}>
        Ethel&apos;s Lounge illustration by Trevor Clare{" "}
        <a
          href="https://www.instagram.com/trevorclareart/?hl=en"
          className={styles["AttributeLink"]}
          target="_blank"
        >
          @trevorclareart
        </a>
      </div>
    </section>
  );
};
