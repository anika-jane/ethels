import React from "react";
import Image from "next/image";
import styles from "./Upcoming.module.css";

export const Upcoming = () => {
  return (
    <section id="Events" className={styles["UpcomingEventsSection"]}>
      <div className={styles["UEText"]}>
        <h3 className={styles["UEHeader"]}>Upcoming Events</h3>
      </div>
      <div className={styles["Cards"]}>
        <div className={styles["EventCard"]}>
          <div className={styles["ImageContainer"]}>
            <Image
              src="/Assets/Events/tray-race-notfinal.jpg"
              height={166}
              width={255}
              alt=""
              className={styles["EventImage"]}
            />
          </div>
          <div className={styles["CardText"]}>
            <div className={styles["EventInfo"]}>
              <p className={styles["EventName"]}>Tray Race</p>
              <p className={styles["EventDate"]}>August 2023</p>
            </div>
            <div className={styles["CardBody"]}>
              <p className={styles["EventDescription"]}>
                For about 25 years, the annual Ethel’s tray race has been
                raising funds for local charities. In 2023, 22 teams
                participated and battled it out in the gruelling event in which
                teams must balance water bottles on a tray while taking part in
                a relay race. Two-thousand dollars was donated to Dog Pound
                Rescue, a foster home-based rescue serving Waterloo Region.
              </p>
            </div>
          </div>
        </div>
        <div className={styles["EventCard"]}>
          <div className={styles["ImageContainer"]}>
            <Image
              src="/Assets/Events/tray-race-notfinal.jpg"
              height={166}
              width={255}
              alt=""
              className={styles["EventImage"]}
            />
          </div>
          <div className={styles["CardText"]}>
            <div className={styles["EventInfo"]}>
              <p className={styles["EventName"]}>Event Name</p>
              <p className={styles["EventDate"]}>Event Date</p>
            </div>
            <div className={styles["CardBody"]}>
              <p className={styles["EventDescription"]}>
                For about 25 years, the annual Ethel’s tray race has been
                raising funds for local charities. In 2023, 22 teams
                participated and battled it out in the gruelling event in which
                teams must balance water bottles on a tray while taking part in
                a relay race. Two-thousand dollars was donated to Dog Pound
                Rescue, a foster home-based rescue serving Waterloo Region.
              </p>
            </div>
          </div>
        </div>
        <div className={styles["EventCard"]}>
          <div className={styles["ImageContainer"]}>
            <Image
              src="/Assets/Events/tray-race-notfinal.jpg"
              height={166}
              width={255}
              alt=""
              className={styles["EventImage"]}
            />
          </div>
          <div className={styles["CardText"]}>
            <div className={styles["EventInfo"]}>
              <p className={styles["EventName"]}>Event Name</p>
              <p className={styles["EventDate"]}>Event Date</p>
            </div>
            <div className={styles["CardBody"]}>
              <p className={styles["EventDescription"]}>
                For about 25 years, the annual Ethel’s tray race has been
                raising funds for local charities. In 2023, 22 teams
                participated and battled it out in the gruelling event in which
                teams must balance water bottles on a tray while taking part in
                a relay race. Two-thousand dollars was donated to Dog Pound
                Rescue, a foster home-based rescue serving Waterloo Region.
              </p>
            </div>
          </div>
        </div>
        <div className={styles["EventCard"]}>
          <div className={styles["ImageContainer"]}>
            <Image
              src="/Assets/Events/tray-race-notfinal.jpg"
              height={166}
              width={255}
              alt=""
              className={styles["EventImage"]}
            />
          </div>
          <div className={styles["CardText"]}>
            <div className={styles["EventInfo"]}>
              <p className={styles["EventName"]}>Event Name</p>
              <p className={styles["EventDate"]}>Event Date</p>
            </div>
            <div className={styles["CardBody"]}>
              <p className={styles["EventDescription"]}>
                For about 25 years, the annual Ethel’s tray race has been
                raising funds for local charities. In 2023, 22 teams
                participated and battled it out in the gruelling event in which
                teams must balance water bottles on a tray while taking part in
                a relay race. Two-thousand dollars was donated to Dog Pound
                Rescue, a foster home-based rescue serving Waterloo Region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
