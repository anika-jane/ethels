import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import Image from "next/image";

export const NavBar = () => {
  return (
    <>
      <div className={styles["Main-Nav"]}>
        <div className={styles["Header-Logo"]}>
          <Image
            src="/Assets/Logo/ethels-logo.png"
            width={274}
            height={141}
            alt="Ethel's Lounge 30th Anniversary Logo"
          />
        </div>
        <div className={styles["Navigation"]}>
          <Link className={styles["Nav-Link"]} href="/">
            Menu
          </Link>
          <Link className={styles["Nav-Link"]} href="#Specials">
            Specials
          </Link>
          <Link
            className={styles["Nav-Link"]}
            href="https://order2.silverwarepos.com/app/EthelsLounge#!/menu"
            target="_blank"
          >
            Order
          </Link>
          <Link className={styles["Nav-Link"]} href="#Hours">
            About
          </Link>
          <Link className={styles["Nav-Link"]} href="/">
            Events
          </Link>
        </div>
      </div>
    </>
  );
};
