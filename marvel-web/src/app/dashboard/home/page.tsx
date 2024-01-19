import Navbar from "../../ui/Components/Navbar/Navbar";
import "../../ui/globals.css";
import { Metadata } from "next";
import MapSuperCard from "@/app/ui/Components/MapSuperCards/MapSuperCards";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  
  return (
    <div>
      <h1>Home</h1>
      <MapSuperCard />
    </div>
  );
}
