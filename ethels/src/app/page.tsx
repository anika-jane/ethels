import Image from "next/image";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Legendary } from "../../Components/Legendary/Legendary";
import { Hours } from "../../Components/Hours/Hours";
import { Specials } from "../../Components/Specials/Specials";
import { About } from "../../Components/About/About";
import { Instagram } from "../../Components/Instagram/Instagram";
import { Menu } from "../../Components/Menu/Menu";

export default function Home() {
  return (
    <>
      <NavBar />
      <Legendary />
      <Instagram />
      <Menu />
      <Specials />
      <About />
      <Hours />
    </>
  );
}
