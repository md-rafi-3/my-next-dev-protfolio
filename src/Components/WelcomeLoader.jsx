"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setLoading(true);
      sessionStorage.setItem("hasVisited", "true");
      const timer = setTimeout(() => setLoading(false), 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 z-[2000] flex flex-col items-center justify-center 
                     bg-gradient-to-br from-[#050505] via-[#0b001a] to-[#150030] overflow-hidden"
        >
          {/* Glow Ring Background */}
          <motion.div
            className="absolute w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] rounded-full 
                       bg-gradient-to-r from-[#ff00ff33] to-[#00ffff33] blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* Orbiting Dots */}
          <div className="relative w-40 h-40 sm:w-28 sm:h-28">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-[#ff00ff] to-[#00ffff] shadow-[0_0_12px_#ff00ff80]"
                style={{
                  top: "50%",
                  left: "50%",
                  margin: "-6px",
                }}
                animate={{
                  rotate: [0, 360],
                  x: [0, 65 * Math.cos((i / 8) * 2 * Math.PI), 0],
                  y: [0, 65 * Math.sin((i / 8) * 2 * Math.PI), 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.8 + i * 0.15,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Central Spinning Circle */}
          <motion.div
            className="absolute w-24 h-24 sm:w-16 sm:h-16 rounded-full 
                       border-[5px] sm:border-[3px] 
                       border-t-[#ff00ff] border-r-[#00ffff] border-b-[#ff00ff] border-l-[#00ffff] shadow-[0_0_25px_#ff00ff70]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          />

          {/* Welcome Text */}
          <motion.h1
            className="absolute mt-52 sm:mt-40 text-white text-4xl sm:text-2xl font-extrabold tracking-widest 
                       drop-shadow-[0_0_10px_#00ffff80]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="absolute mt-64 sm:mt-52 text-[#b3b3b3] text-lg sm:text-sm font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            Crafting Experiences with Code ✨
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
