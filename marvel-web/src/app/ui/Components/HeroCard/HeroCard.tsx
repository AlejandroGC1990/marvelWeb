import React, { FC } from "react";
import "./HeroCard.css";
import { Character } from "@/app/types/marvels";
import Image from "next/image";
import Link from "next/link";

interface HeroCardProps {
  character: Character;
};

const HeroCard: FC<HeroCardProps> = ({ character }) => {

  return (
    <div className="card-container">
      <div className="card-image">
        <Image 
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={`${character.name}`} 
          width={500}
          height={400}
          />
      </div>
      <div className="card-content">
        <h3>{character.name}</h3> 
        <p>{character.description}</p>
        <Link href={`/dashboard/heroDetail/${character.id}`}  className="btn btn-primary">Detail {character.name}</Link>
      </div>
    </div>
  );
};

export default HeroCard;