
import React, { useEffect, useRef, useState } from 'react';

const StarryBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState<any[]>([]);

  useEffect(() => {
    // Generate stars once
    const newStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      delay: `${Math.random() * 5}s`,
    }));
    setStars(newStars);

    // Interval to add shooting stars randomly
    const interval = setInterval(() => {
      const id = Date.now();
      const newShooting = {
        id,
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 60}%`,
      };
      setShootingStars((prev) => [...prev, newShooting]);

      // Remove after animation
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s.id !== id));
      }, 1000);
    }, Math.random() * 3000 + 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Stars */}
      <div ref={containerRef} className="absolute inset-0">
        {stars.map((star: any) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-star-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: `rgba(255,255,255,${star.opacity})`,
              animationDelay: star.delay,
            }}
          />
        ))}

        {shootingStars.map((star) => (
          <div
            key={star.id}
            className="absolute w-[2px] h-[80px] bg-white opacity-80 rotate-45 animate-shooting-star"
            style={{
              left: star.left,
              top: star.top,
            }}
          />
        ))}
      </div>

      {/* Optional background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: 'url("/lovable-uploads/d960fb8a-1f59-48a1-b331-5d43dac97b64.png")',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
    </div>
  );
};

export default StarryBackground;
