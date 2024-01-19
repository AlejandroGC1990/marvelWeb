import React, { FC } from "react";
import "./SuperCard.css";
import { Character } from "@/app/types/marvels";
import Image from "next/image";
import Link from "next/link";

interface SuperCardProps {
  character: Character;
}

const SuperCard: FC<SuperCardProps> = ({ character }) => {
  return (
    <div className="card-container">
      <div className="card-container-image">
        <Image
          className="card-image"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={`${character.name}`}
          width={200}
          height={300}
        />
      </div>
      <div className="card-content">
        <div className="card-actions">
          <div className="card-title">{character.name}</div>
          {/* <p>{character.description}</p> */}
          <Link href={`/dashboard/heroDetail/${character.id}`} className="btn">
            Detail {character.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuperCard;
