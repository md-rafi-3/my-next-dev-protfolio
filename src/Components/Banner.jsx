"use client";
import { motion } from "framer-motion";
import MorphingView from "./Morphing";
// import Hero3D from "./RotatingCube";
import { FaArrowRight } from "react-icons/fa";
import HeroAnimation from "./HeroAnimation";
import dynamic from "next/dynamic";

export default function HeroSection() {
  
  // Client-only Hero3D
const Hero3D = dynamic(() => import("./RotatingCube"), { ssr: false });


  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      
      <HeroAnimation></HeroAnimation>
    

      {/* === Hero Content === */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 py-24 md:py-36 items-center">
        {/* Left Column */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white"
          >
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              Md Rafi Islam
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed"
          >
            I'm a <MorphingView /> <br />
            who loves crafting modern, responsive, and user-friendly web
            applications. I focus on clean code, smooth UI, and full-stack
            integration to bring ideas to life.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-black font-semibold rounded-full transition flex items-center gap-2"
            >
              View My Projects <FaArrowRight />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/30 hover:bg-white/10 text-white rounded-full transition"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center relative"
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}
