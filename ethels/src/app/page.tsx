import Image from "next/image";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Legendary } from "../../Components/Legendary/Legendary";
import { Hours } from "../../Components/Hours/Hours";

export default function Home() {
  return (
    <>
      <NavBar />
      <Legendary />
      <Hours />
    </>
  );
}
