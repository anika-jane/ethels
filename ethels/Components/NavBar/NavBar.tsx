"use client";
import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import Image from "next/image";

export const NavBar = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    const targetSection = document.getElementById(targetId.substring(1));

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

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

          <a
            href="#Menu"
            className={styles["Link"]}
            onClick={(e) => handleScroll(e, "#Menu")}
          >
            Menu
          </a>
          <a
            href="#Specials"
            className={styles["Link"]}
            onClick={(e) => handleScroll(e, "#Specials")}
          >
            Specials
          </a>
          {/* External Link remains unchanged */}
          <Link
            className={styles["Link"]}
            href="https://order2.silverwarepos.com/app/EthelsLounge#!/menu"
            target="_blank"
          >
            Order
          </Link>
          <a
            href="#Events"
            className={styles["Link"]}
            onClick={(e) => handleScroll(e, "#Events")}
          >
            Events
          </a>
          <a
            href="#About"
            className={styles["Link"]}
            onClick={(e) => handleScroll(e, "#About")}
          >
            About
          </a>
        </div>
      </div>
    </>
  );
};
