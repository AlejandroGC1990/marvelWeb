import Image from "next/image";
import Navbar from "./ui/Components/Navbar/Navbar";
import HeroCard from "./ui/Components/HeroCard/HeroCard";


export default function Home() {
  return (
    <main>
      <div className="app-container">
        <Navbar />
        <h1>Home</h1>
        <div>
          <HeroCard />
        </div>
      </div>
    </main>
  );
}
