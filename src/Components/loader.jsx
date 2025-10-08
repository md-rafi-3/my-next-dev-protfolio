"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#050011] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b001f] via-[#130033] to-[#1b004d]" />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-[#ff00ff33] blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#00ffff33] blur-[160px]"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      {/* Loader Animation */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="w-20 h-20 border-4 border-transparent border-t-purple-500 border-b-sky-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-300 mt-6 text-lg tracking-wide"
        >
          Loading<span className="animate-pulse">...</span>
        </motion.p>
      </div>
    </section>
  );
}
