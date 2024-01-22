import React, { FC } from "react";
import "./Loading.css";

interface SuperCardSkeletonProps {}

const SkeletonCard = () => {
  return (
    <div className="skeleton-card-container">
      <div className="skeleton-card-container-image"></div>
      <div className="skeleton-card-content"></div>
    </div>
  );
};

const SuperCardSkeleton: FC<SuperCardSkeletonProps> = () => {
  return (
    <div className="skeleton-container">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default SuperCardSkeleton;
