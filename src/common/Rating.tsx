import React from "react";

const Rating = ({ rating }: { rating: number }) => {
  // (rating:number )랑 무슨차이?

  const rendering = () => {
    const start = [];
    for (let i = 0; i <= rating; i++) {
      start.push(<span key={i}> ⭐️</span>);
    }
    return start;
  };

  return <>{rendering()}</>;
};

export default Rating;
