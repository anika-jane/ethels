"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./Instagram.module.css";
import Image from "next/image";

// Correctly typed parameters for the custom loader function
const customLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number; // Make quality optional
}): string => {
  // Implement your custom logic here
  return `/Assets/Logo${src}?w=${width}&q=${quality || 75}`;
};

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
            loader={customLoader}
            src="/icon-insta.svg"
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
            loader={customLoader}
            src="/icon-facebook.svg"
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
            loader={customLoader}
            src="/icon-x.svg"
            width={24}
            height={24}
            alt="Link to Ethel's Lounge X (Twitter) Page"
          />
        </Link>
      </div>
    </section>
  );
};
