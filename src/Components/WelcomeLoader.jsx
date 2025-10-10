"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setLoading(true);
      sessionStorage.setItem("hasVisited", "true");
      const timer = setTimeout(() => setLoading(false), 2500); // slightly faster
      return () => clearTimeout(timer);
    }
  }, []);

  // Precompute orbit positions
  const orbitDots = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const angle = (i / 6) * 2 * Math.PI;
      return { x: Math.cos(angle) * 40, y: Math.sin(angle) * 40 };
    });
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[2000] flex flex-col items-center justify-center 
                     bg-gradient-to-br from-[#050505] via-[#0b001a] to-[#150030] overflow-hidden"
        >
          {/* Soft Glow Circle */}
          <motion.div
            className="absolute w-48 h-48 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-[#ff00ff55] to-[#00ffff55] blur-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* Orbiting Dots */}
          {orbitDots.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff]"
              animate={{
                x: [0, pos.x, 0],
                y: [0, pos.y, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Central Spinning Ring */}
          <motion.div
            className="absolute w-16 h-16 sm:w-14 sm:h-14 rounded-full border-4 border-t-[#ff00ff] border-r-[#00ffff] border-b-[#ff00ff] border-l-[#00ffff]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />

          {/* Welcome Text */}
          <motion.h1
            className="absolute mt-44 sm:mt-36 text-white text-3xl sm:text-4xl font-bold tracking-widest text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hey there!
          </motion.h1>

          <motion.p
            className="absolute mt-56 sm:mt-48 text-gray-300 text-sm sm:text-base text-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Let’s create something amazing together ✨
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
