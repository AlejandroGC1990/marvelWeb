import React, { FC } from "react";
import "./Loading.css";

interface SuperCardSkeletonProps {}

const SuperCardSkeleton: FC<SuperCardSkeletonProps> = () => {
  return (
    <div className="card-skeleton">
      <div className="image-skeleton"></div>
      <div className="content-skeleton">
        <div className="text-skeleton"></div>
        <div className="text-skeleton"></div>
        <div className="text-skeleton"></div>
        <div className="text-skeleton"></div>
        <div className="text-skeleton"></div>
        <div className="text-skeleton"></div>
        <div className="text-skeleton"></div>
        <div className="text-skeleton"></div>
      </div>
    </div>
  );
};

export default SuperCardSkeleton;