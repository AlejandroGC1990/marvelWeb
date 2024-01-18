import Navbar from "../../ui/Components/Navbar/Navbar";
import SuperCard from "../../ui/Components/SuperCard/SuperCard";
import { getSuper } from "../../../utils/api";
import "../../ui/globals.css";

export default async function Home() {
  const hero = await getSuper();
  
  return (
    <div className="app-container">
      <Navbar />
      <h1>Home</h1>
      <div className="hero-card-container">
        {hero.results.map((character) => (
          <SuperCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
