"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./Instagram.module.css";
import Image from "next/image";

export const Instagram = () => {
  // Dynamically add the external script on the client side
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://w.behold.so/widget.js";
    script.async = true;
    script.type = "module";
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={styles["InstagramSection"]}>
      <h2 className={styles["InstagramHeader"]}>From Instagram</h2>
      <div className={styles["InstagramImages"]}>
        <figure data-behold-id="TrBS0U9NkqvnZfQ5tdvV"></figure>
      </div>
      <div className={styles["SocialLinks"]}>
        <Link
          href="https://www.instagram.com/ethelslounge/?hl=en"
          target="_blank"
          className={styles["ILink"]}
        >
          <Image
            src="/Assets/Logo/icon-insta.svg"
            width={24}
            height={24}
            alt="Link to Ethel's Lounge Instagram Page"
          />
        </Link>
        <Link
          href="https://www.facebook.com/EthelsLounge/"
          target="_blank"
          className={styles["FBLink"]}
        >
          <Image
            src="/Assets/Logo/icon-facebook.svg"
            width={24}
            height={24}
            alt="Link to Ethel's Lounge Facebook Page"
          />
        </Link>
        <Link
          href="https://twitter.com/EthelsLounge/"
          target="_blank"
          className={styles["XLink"]}
        >
          <Image
            src="/Assets/Logo/icon-x.svg"
            width={24}
            height={24}
            alt="Link to Ethel's Lounge X (Twitter) Page"
          />
        </Link>
      </div>
    </section>
  );
};
