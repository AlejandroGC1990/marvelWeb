import React from "react";
import "./MapSuperCards.css";
import { getSuper } from "../../../../utils/api";
import SuperCard from "../SuperCard/SuperCard";

export default async function MapSuperCard() {
  const hero = await getSuper();

  return (
    <div className="container-map-supercard">
      {hero.results.map((character) => (
        <SuperCard key={character.id} character={character} />
      ))}
    </div>
  );
};