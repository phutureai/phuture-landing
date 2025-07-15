import React from "react";
import ShootingStar from "./shootingStar";

const Sky = ({ numberOfStars, className = "" }: { numberOfStars: number, className?: string}) => {
  const stars = Array.from({ length: numberOfStars }).map((_, index) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;

    return (
      <div
        key={index}
        className="absolute size-px rounded-full bg-white"
        style={{
          top: `${top}%`,
          left: `${left}%`,
        }}
      />
    );
  });

  return (
    <div className={`${className}`}>
      {stars}
      <ShootingStar />
    </div>
  );
};

export default Sky;