import { getDetailSuper } from "../../../../utils/api";
import Image from "next/image";
import { FC } from "react";
import "./heroDetail.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero Detail Page",
};

interface HeroDetailProps {
  params: {
    id: string;
  };
}

const HeroDetail: FC<HeroDetailProps> = async ({ params }) => {
  const { id } = params;
  const character = await getDetailSuper(id);
  const { thumbnail, name, description } = character.results[0];

  return (
    <div className="container">
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
        width={500}
        height={400}
        className="character-image"
      />
      <div className="heroDetails">
        <h1 className="text">{name}</h1>
        {description ? (
          <p className="text">{description}</p>
        ) : (
          <p className="text">At this time we haven´t this information.</p>
        )}
      </div>
    </div>
  );
};

export default HeroDetail;
