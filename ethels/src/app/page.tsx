import Image from "next/image";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Legendary } from "../../Components/Legendary/Legendary";
import { Hours } from "../../Components/Hours/Hours";
import { Specials } from "../../Components/Specials/Specials";
import { About } from "../../Components/About/About";
import { Instagram } from "../../Components/Instagram/Instagram";
import { Event } from "../../Components/Events/Events";

// import App from "../../Components/Carousel/Carousel";
// import Menu from "../../Components/Menu/Menu";
// import { Hero } from "../../Components/Hero/Hero";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* <Hero /> */}
      {/* <App /> */}
      <Legendary />
      <Instagram />
      {/* <Menu /> */}
      <Specials />
      <Event />
      <About />
      <Hours />
    </>
  );
}
