"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function HeroAnimation() {
  const shouldReduceMotion = useReducedMotion(); // detects OS motion setting
  const [stars, setStars] = useState([]);

  // 🧠 Generate stars only once (memoized for performance)
  useEffect(() => {
    if (shouldReduceMotion) return; // skip if user prefers less motion
    const newStars = Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random(),
    }));
    setStars(newStars);
  }, [shouldReduceMotion]);

  // 🧠 Precomputed random orb positions
  const orbs = useMemo(
    () =>
      [...Array(5)].map(() => ({
        size: 150 + Math.random() * 150,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      })),
    []
  );

  return (
    <>
      {/* === Background Gradients === */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-sky-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:60px_60px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />

      {/* === Floating Orbs (only if motion allowed) === */}
      {!shouldReduceMotion &&
        orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-sky-400/20 blur-3xl will-change-transform"
            style={{
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: orb.left,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}

      {/* === Stars === */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-70 will-change-transform"
              initial={{ x: star.x, y: star.y, scale: star.scale }}
              animate={{
                y: [star.y, Math.random() * window.innerHeight],
                opacity: [0.7, 0.2, 0.7],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
