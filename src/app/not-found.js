"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#050011] text-center overflow-hidden">
      {/* === Background Gradient + Glows === */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b001f] via-[#130033] to-[#1b004d]" />
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#ff00ff33] blur-[160px]"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00ffff33] blur-[200px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />

      {/* === Content === */}
      <div className="relative z-10 px-6 md:px-10">
        {/* 404 Animation */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[8rem] sm:text-[10rem] font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_#ff00ff60]"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl sm:text-3xl font-semibold text-white mb-3"
        >
          Oops! Page Not Found 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-300 max-w-xl mx-auto mb-8"
        >
          The page you’re looking for might have been moved, deleted, 
          or doesn’t exist. Let’s get you back to home base 🌍
        </motion.p>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 
                       text-black font-semibold rounded-full shadow-[0_0_20px_#ff00ff80] hover:scale-105 transition"
          >
            <FaHome /> Back to Home
          </Link>
        </motion.div>
      </div>

      {/* === Decorative Floating Particles === */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-70"
          animate={{
            y: [0, Math.random() * 20 - 10, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
}
