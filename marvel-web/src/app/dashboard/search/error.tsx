"use client";

import { FC } from "react";
import "../../ui/error.css";

interface errorProps {
  error: Error;
  reset: () => void;
}

const error: FC<errorProps> = ({ error, reset }) => {
  return (
    <div className="error-container">
      <h2 className="error-text">Something went wrong!</h2>
      <button onClick={() => reset()} className="error-btn">
        Try Again
      </button>
    </div>
  );
};

export default error;
