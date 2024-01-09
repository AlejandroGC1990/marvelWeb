import React, { FC } from "react";
import "./HeroCard.css";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const HeroCard: FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeroCard;