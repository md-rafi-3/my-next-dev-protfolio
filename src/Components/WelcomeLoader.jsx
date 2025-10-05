"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeLoader() {
  const [loading, setLoading] = useState(false); // initially false

  useEffect(() => {
    // check if first visit
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setLoading(true); // show loader
      sessionStorage.setItem("hasVisited", "true"); // mark as visited

      const timer = setTimeout(() => setLoading(false), 3000); // 3 second loader
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
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]"
        >
          {/* Orbiting dots */}
          <div className="relative w-36 h-36">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-[#ff00ff] rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  margin: "-2px",
                }}
                animate={{
                  rotate: [0, 360],
                  x: [0, 60 * Math.cos((i / 6) * 2 * Math.PI), 0],
                  y: [0, 60 * Math.sin((i / 6) * 2 * Math.PI), 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + i * 0.2,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Main spinning circle */}
          <motion.div
            className="absolute w-20 h-20 rounded-full border-4 border-t-[#ff00ff] border-r-[#00ffff] border-b-[#ff00ff] border-l-[#00ffff]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />

          {/* Welcome Text */}
          <motion.h1
            className="absolute text-white text-3xl font-bold mt-48 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
