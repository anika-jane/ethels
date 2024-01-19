import React from "react";
import styles from "./Specials.module.css";
import Image from "next/image";

export const Specials = () => {
  return (
    <section id="Specials" className={styles["SpecialsSection"]}>
      <h2 className={styles["SpecialsHeader"]}>Specials</h2>
      <div className={styles["AllSpecials-Wide"]}>
        <div className={styles["WideWidthLeft"]}>
          <div className={styles["DailySpecial"]}>
            <div className={styles["Day"]}>Sunday</div>
            <div className={styles["Special"]}>Pulled Pork</div>
            <div className={styles["Price"]}>$11.00</div>
            <div className={styles["Description"]}>
              Our famous pulled pork. Get it piled high and baked on our cheese
              nachos with green onions and BBQ sauce, or served on a kaiser bun
              toped with creamy slaw and jalapeño.
            </div>
            <div className={styles["When"]}>Available at 5pm</div>
          </div>

          <div className={styles["DailySpecial"]}>
            <div className={styles["Day"]}>Tuesday</div>
            <div className={styles["Special"]}>Taco Tuesday</div>
            <div className={styles["Price"]}>$3.33</div>
            <div className={styles["Description"]}>
              Four hard shell beef tacos with lettuce and cheese. With choice of
              fresh salsa, sour cream or guacamole.
              <br />
              <span className={styles["bold"]}>Add refried beans $5.</span>
              <br />
              <span className={styles["bold"]}>Additional sides for $2.</span>
            </div>
            <div className={styles["When"]}>
              After 4pm with a drink purchase
            </div>
          </div>

          <div className={styles["DailySpecial"]}>
            <div className={styles["Day"]}>Thursday</div>
            <div className={styles["Special"]}>Meatloaf</div>
            <div className={styles["Price"]}>Lunch $14.00, Dinner $18.00</div>
            <div className={styles["Description"]}>
              Better than your mom'&apos;'s, but don'&apos;'t tell her! Served
              with mashed potatoes and beef mushroom gravy.
            </div>
            <div className={styles["When"]}>Served all day</div>
          </div>
        </div>

        <div className={styles["WideWidthRight"]}>
          <div className={styles["DailySpecial"]}>
            <div className={styles["Day"]}>Monday</div>
            <div className={styles["Special"]}>Burger Monday</div>
            <div className={styles["Price"]}>$10.00</div>
            <div className={styles["Description"]}>
              Jr. Ethel, Black Bean, Smoked Portabella or make your burger Funky
              for only $2.
            </div>
            <div className={styles["When"]}>All day with drink purchase</div>
          </div>

          <div className={styles["DailySpecial"]}>
            <div className={styles["Day"]}>Wednesday</div>
            <div className={styles["Special"]}>Wing Ding Wednesday</div>
            <div className={styles["Price"]}>$11.00</div>
            <div className={styles["Description"]}>
              BBQed and never fried. Tossed in choice of sauce and finished on
              the grill. Sauces: Mild, Medium, Hot, Suicide, Honey Garlic, Sweet
              Chili, Dry Cajun, Honey Hot, Buffalo, Salt & Pepper.
              <br />
              <span className={styles["bold"]}>Add veg & dip $3.50.</span>
              <br />
              <span className={styles["bold"]}>
                Add blue cheese or ranch 50¢.
              </span>
            </div>
            <div className={styles["When"]}>
              After 4pm with a drink purchase
            </div>
          </div>

          <div className={styles["DailySpecial"]}>
            <div className={styles["Day"]}>Friday</div>
            <div className={styles["Special"]}>Wildcard Friday</div>
            <div className={styles["Description"]}>
              Check out our Instagram page @ethelslounge or ask your server to
              see what we'&apos;'re serving up each week.
            </div>
            <div className={styles["When"]}>
              All day until it'&apos;'s gone!
            </div>
          </div>
        </div>
      </div>
      <div className={styles["AllSpecials-Long"]}>
        <div className={styles["DailySpecial"]}>
          <div className={styles["Day"]}>Sunday</div>
          <div className={styles["Special"]}>Pulled Pork</div>
          <div className={styles["Price"]}>$11.00</div>
          <div className={styles["Description"]}>
            Our famous pulled pork. Get it piled high and baked on our cheese
            nachos with green onions and BBQ sauce, or served on a kaiser bun
            toped with creamy slaw and jalapeño.
          </div>
          <div className={styles["When"]}>Available at 5pm</div>
        </div>

        <div className={styles["DailySpecial"]}>
          <div className={styles["Day"]}>Monday</div>
          <div className={styles["Special"]}>Burger Monday</div>
          <div className={styles["Price"]}>$10.00</div>
          <div className={styles["Description"]}>
            Jr. Ethel, Black Bean, Smoked Portabella or make your burger Funky
            for only $2.
          </div>
          <div className={styles["When"]}>All day with drink purchase</div>
        </div>

        <div className={styles["DailySpecial"]}>
          <div className={styles["Day"]}>Tuesday</div>
          <div className={styles["Special"]}>Taco Tuesday</div>
          <div className={styles["Price"]}>$3.33</div>
          <div className={styles["Description"]}>
            Four hard shell beef tacos with lettuce and cheese. With choice of
            fresh salsa, sour cream or guacamole.
            <br />
            <span className={styles["bold"]}>Add refried beans $5.</span>
            <br />
            <span className={styles["bold"]}>Additional sides for $2.</span>
          </div>
          <div className={styles["When"]}>After 4pm with a drink purchase</div>
        </div>

        <div className={styles["DailySpecial"]}>
          <div className={styles["Day"]}>Wednesday</div>
          <div className={styles["Special"]}>Wing Ding Wednesday</div>
          <div className={styles["Price"]}>$11.00</div>
          <div className={styles["Description"]}>
            BBQed and never fried. Tossed in choice of sauce and finished on the
            grill. Sauces: Mild, Medium, Hot, Suicide, Honey Garlic, Sweet
            Chili, Dry Cajun, Honey Hot, Buffalo, Salt & Pepper.
            <br />
            <span className={styles["bold"]}>Add veg & dip $3.50.</span>
            <br />
            <span className={styles["bold"]}>
              Add blue cheese or ranch 50¢.
            </span>
          </div>
          <div className={styles["When"]}>After 4pm with a drink purchase</div>
        </div>

        <div className={styles["DailySpecial"]}>
          <div className={styles["Day"]}>Thursday</div>
          <div className={styles["Special"]}>Meatloaf</div>
          <div className={styles["Price"]}>Lunch $14.00, Dinner $18.00</div>
          <div className={styles["Description"]}>
            Better than your mom'&apos;'s, but don'&apos;'t tell her! Served
            with mashed potatoes and beef mushroom gravy.
          </div>
          <div className={styles["When"]}>Served all day</div>
        </div>
        <div className={styles["DailySpecial"]}>
          <div className={styles["Day"]}>Friday</div>
          <div className={styles["Special"]}>Wildcard Friday</div>
          <div className={styles["Description"]}>
            Check out our Instagram page @ethelslounge or ask your server to see
            what we'&apos;'re serving up each week.
          </div>
          <div className={styles["When"]}>All day until it'&apos;'s gone!</div>
        </div>
      </div>
    </section>
  );
};
