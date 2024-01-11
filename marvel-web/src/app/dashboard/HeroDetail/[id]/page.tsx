import { getDetailHero } from "@/utils/api";
import { FC } from "react";
import "./HeroDetail.css";
import Image from "next/image";

interface HeroDetailProps {
  params: {
    id: string;
  };
}

const HeroDetail: FC<HeroDetailProps> = async ({ params }) => {
  const { id } = params;
  const character = await getDetailHero(id);
  const { thumbnail, name, description } = character.results[0];

  return (
    <div className="container">
      <div className="card-image">
        <Image
          src={`${character.results[0].thumbnail.path}.${character.results[0].thumbnail.extension}`}
          alt={name}
          width={500}
          height={400}
        />
      </div>
      <div className="heroDetails">
        <h1>{name}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default HeroDetail;
