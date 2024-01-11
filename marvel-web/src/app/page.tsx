import Navbar from "./ui/Components/Navbar/Navbar";
import HeroCard from "./ui/Components/HeroCard/HeroCard";
import { getHero } from "../../src/utils/api";
import "./ui/globals.css";

export default async function Home() {
  const hero = await getHero();
  console.log(hero)
  return (
    <main>
      <div className="app-container">
        <Navbar />
        <h1>Home</h1>
        <div className="hero-card-container">
          {hero.results.map(character => (
            <HeroCard key={character.id} character={character}/>
          ))}
        </div>
      </div>
    </main>
  );
}
