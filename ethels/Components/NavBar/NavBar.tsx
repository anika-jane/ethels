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

        <div className={styles["LinkContainer"]}>
          <Image
            src="/Assets/Logo/ethels-logo.png"
            width={274}
            height={141}
            alt="Ethel's Lounge 30th Anniversary Logo"
            className={styles["logo"]}
          />
          <Link className={styles["Link"]} href="#Menu">
            Menu
          </Link>
          <Link className={styles["Link"]} href="#Specials">
            Specials
          </Link>
          <Link
            className={styles["Link"]}
            href="https://order2.silverwarepos.com/app/EthelsLounge#!/menu"
            target="_blank"
          >
            Order
          </Link>
          <Link className={styles["Link"]} href="#Events">
            Events
          </Link>

          <Link className={styles["Link"]} href="#About">
            About
          </Link>
        </div>
      </div>
    </>
  );
};
