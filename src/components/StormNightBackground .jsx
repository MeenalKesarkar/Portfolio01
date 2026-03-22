import React, { useEffect, useState } from "react";

export const StormNightBackground  = () => {
  const [stars, setStars] = useState([]);
  const [clouds, setClouds] = useState([]);

  useEffect(() => {

    const starList = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5
    }));

    const cloudList = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      top: Math.random() * 40,
      delay: Math.random() * 15,
      size: Math.random() * 300 + 250
    }));

    setStars(starList);
    setClouds(cloudList);

  }, []);

  return (
    <div className="storm-night-scene">

      {/* Moon */}
      <div className="moon"></div>

      {/* Lightning */}
      <div className="lightning"></div>

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}

      {/* Clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud"
          style={{
            top: `${cloud.top}%`,
            width: `${cloud.size}px`,
            height: `${cloud.size/2}px`,
            animationDelay: `${cloud.delay}s`
          }}
        />
      ))}

      {/* Fog */}
      <div className="fog"></div>

      {/* Forest */}
      <div className="forest"></div>

    </div>
  );
};