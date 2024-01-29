import React from "react";
import styles from "./Hours.module.css";
import Link from "next/link";

export const Hours = () => {
  return (
    <section id="Hours" className={styles["HoursSection"]}>
      <h2 className={styles["HoursHeading"]}>Hours & Contact </h2>
      <div className={styles["HoursListing"]}>
        <div className={styles["Days"]}>
          <p className={styles["Day"]}>Sunday</p>
          <p className={styles["Day"]}>Monday</p>
          <p className={styles["Day"]}>Tuesday</p>
          <p className={styles["Day"]}>Wednesday</p>
          <p className={styles["Day"]}>Thursday</p>
          <p className={styles["Day"]}>Friday</p>
          <p className={styles["Day"]}>Saturday</p>
        </div>
        <div className={styles["Hours"]}>
          <p className={styles["Hour"]}>11:00am-12:00am</p>
          <p className={styles["Hour"]}>11:00am-12:00am</p>
          <p className={styles["Hour"]}>11:00am-1:00am</p>
          <p className={styles["Hour"]}>11:00am-1:00am</p>
          <p className={styles["Hour"]}>11:00am-1:00am</p>
          <p className={styles["Hour"]}>11:00am-2:00am</p>
          <p className={styles["Hour"]}>11:00am-2:00am</p>
        </div>
      </div>
      <div className={styles["Location"]}>
        <Link
          href="https://maps.app.goo.gl/L6VCNKtnfdw846qo6"
          target="blank"
          className={styles["LocationHeading"]}
        >
          114 King Street North, Waterloo
        </Link>
        <p className={styles["LocationClick"]}>click for directions</p>

        <Link href="tel:519-725-2361">
          <p className={styles["Phone"]}>519-725-2361</p>
        </Link>
      </div>
    </section>
  );
};
