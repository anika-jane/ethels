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
              src="/Assets/Images/MardiGras.jpeg"
              height={166}
              width={255}
              alt=""
              className={styles["EventImage"]}
            />
          </div>
          <div className={styles["CardText"]}>
            <div className={styles["EventInfo"]}>
              <p className={styles["EventName"]}>Mardi Gras Menu</p>
              <p className={styles["EventDate"]}>Feb 13-17</p>
            </div>
            <div className={styles["CardBody"]}>
              <p className={styles["EventDescription"]}>
                <p className={styles["FeatureName"]}>
                  Gumbo &#160;&#160;&#160;$6/$8
                </p>
                <p className={styles["FeatureDes"]}>
                  {" "}
                  Made with smoked kielbasa, shrimp and braised chicken. This
                  spicy creole dish features the iconic flavours of sweet
                  peppers and okra. Served over dirty rice with a side of
                  cornbread.
                </p>

                <br />
                <p className={styles["FeatureName"]}>
                  Muffuletta Sandwich &#160;&#160;&#160;$14
                </p>
                <p className={styles["FeatureDes"]}>
                  Layers of sliced soppressata, mortadella, capicola and
                  provolone cheese, served on a fresh focaccia bun, topped with
                  giardiniera + olive spread. Served with cajun potato wedges.
                </p>
                <br />
                <p className={styles["FeatureName"]}>
                  Roast Beef Po'Boy &#160;&#160;&#160;$15
                </p>
                <p className={styles["FeatureDes"]}>
                  A New Orleans classic. Slow roasted beef chuck, shredded
                  lettuce, tomato, dill pickle + mayonnaise served on a french
                  style loaf.
                </p>
                <br />
                <p className={styles["FeatureName"]}>
                  Jambalaya &#160;&#160;&#160;$16
                </p>
                <p className={styles["FeatureDes"]}>
                  Smoked turkey and kielbasa, braised with sweet bell pepper,
                  tomato + onions. Served over dirty rice with a side of
                  cornbread.
                </p>
                <br />
                <p className={styles["FeatureName"]}>
                  Bread Pudding &#160;&#160;&#160;$8
                </p>
                <p className={styles["FeatureDes"]}>
                  A rich and decadent bread pudding, topped with raisin rum
                  custard cream and served with a scoop of vanilla ice cream.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className={styles["EventCard"]}>
          <div className={styles["ImageContainer"]}>
            <Image
              src="/Assets/Images/Screenshot 2024-02-07 at 11.50.30.png"
              height={166}
              width={255}
              alt=""
              className={styles["EventImage"]}
            />
          </div>
          <div className={styles["CardText"]}>
            <div className={styles["EventInfo"]}>
              <p className={styles["EventName"]}>Maple Leaf Suitcase Party</p>
              <p className={styles["EventDate"]}>March 16</p>
            </div>
            <div className={styles["CardBody"]}>
              <p className={styles["EventDescription"]}>
                Head on over to Ethel's for your chance to win 2 tickets and
                travel expenses to see the Toronto Maple Leafs vs. Caroline
                Hurricanes on March 16th.
                <br />1 ticket per entry
                <br /> Must be present to win, and ready to go!
                <br />
                Draw at 3:00pm
              </p>
            </div>
          </div>
        </div>
        <div className={styles["EventCard"]}>
          <div className={styles["ImageContainer"]}>
            <Image
              src="/Assets/Images/FishFry.png"
              height={166}
              width={255}
              alt=""
              className={styles["EventImage"]}
            />
          </div>
          <div className={styles["CardText"]}>
            <div className={styles["EventInfo"]}>
              <p className={styles["EventName"]}>Good Friday Fish Fry</p>
              <p className={styles["EventDate"]}>March 29</p>
            </div>
            <div className={styles["CardBody"]}>
              <p className={styles["EventDescription"]}>
                Ethel's Good Friday Fish Fry, enjoy 2 5oz pieces of haddock,
                potato wedges, slaw and tartar sauce for $21! Dine-in or place
                your order for take-out{" "}
                <a
                  href="https://order2.silverwarepos.com/app/EthelsLounge#!/menu"
                  target="_blank"
                  className={styles["FryLink"]}
                >
                  online.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles["EventCard"]}>
          <div className={styles["ImageContainer"]}>
            <Image
              src="/Assets/Images/FishTaco.jpeg"
              height={166}
              width={255}
              alt=""
              className={styles["EventImage"]}
            />
          </div>
          <div className={styles["CardText"]}>
            <div className={styles["EventInfo"]}>
              <p className={styles["EventName"]}>Cinco de Mayo Menu</p>
              <p className={styles["EventDate"]}>May 1-5</p>
            </div>
            <div className={styles["CardBody"]}>
              <p className={styles["EventDescription"]}>
                Get ready for everyone's favourite menu of the year!
                <br />
                Drool worthy details coming soon.
              </p>
            </div>
          </div>
        </div>
        <div className={styles["EventCard"]}>
          <div className={styles["ImageContainer"]}>
            <Image
              src="/Assets/Images/Hosebagen.jpg"
              height={166}
              width={255}
              alt=""
              className={styles["EventImage"]}
            />
          </div>
          <div className={styles["CardText"]}>
            <div className={styles["EventInfo"]}>
              <p className={styles["EventName"]}>Oktoberfest Menu</p>
              <p className={styles["EventDate"]}>Oct 8-13</p>
            </div>
            <div className={styles["CardBody"]}>
              <p className={styles["EventDescription"]}>
                Zigge Zagge, Zigge Zagge, Yum Yum Yum!
                <br />
                Check back to see what Bavarian delights Ethel cooks up this
                year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
