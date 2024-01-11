import Navbar from "./ui/Components/Navbar/Navbar";
import HeroCard from "./ui/Components/HeroCard/HeroCard";
import { getCharacters } from "../../src/utils/api";

export default async function Home() {
  const characters = await getCharacters();
  console.log(characters)
  return (
    <main>
      <div className="app-container">
        <Navbar />
        <h1>Home</h1>
        <div>
          {characters.results.map(character => (
            <HeroCard key={character.id} character={character}/>
          ))}
        </div>
      </div>
    </main>
  );
}
