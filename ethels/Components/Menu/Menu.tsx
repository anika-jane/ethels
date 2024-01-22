import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <section className={styles["MenuSection"]}>
      <div className={styles["MenuBackground"]}>
        <Link
          href="https://ethelslounge.com/EthelsMenu.pdf"
          target="_blank"
          className={styles["MenuLink"]}
        >
          <Image
            src="/Assets/Menu/Menu-768-page-01@2x.jpg"
            height={500}
            width={500}
            alt=""
            className={styles["MenuImage"]}
          />
        </Link>
      </div>
    </section>
  );
};
