import React from "react";
import styles from "./Legendary.module.css";

export const Legendary = () => {
  return (
    <section className={styles["LegendarySection"]}>
      <div className={styles["LegendaryText"]}>
        Legendary since 1994
        <br />
        <br />
        No Live Entertainment
        <br />
        <br />
        One TV <span className={styles["SmallText"]}>...well ok three TVs</span>
      </div>
    </section>
  );
};
