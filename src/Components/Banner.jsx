"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import MorphingView from "./Morphing";
import HeroAnimation from "./HeroAnimation";
import { FaArrowRight } from "react-icons/fa";

const ComputersCanvas = dynamic(() => import("./ComputersCanvas"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* === Background Animation Layer === */}
      <HeroAnimation />

      {/* === Hero Content === */}
      <div
        className="
          relative z-10 w-full max-w-7xl mx-auto
          flex flex-col md:flex-row items-center justify-between
          gap-10 px-6 md:px-12 
          py-20 md:py-28
        "
      >
        {/* === Left Column === */}
        <div
          className="
            flex-1 flex flex-col 
            justify-center  md:justify-start
            text-left
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-extrabold leading-tight text-white
            "
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
            className="
              mt-6 text-base sm:text-lg text-gray-300 
              max-w-xl leading-relaxed
            "
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
            className="mt-8 flex flex-wrap justify-start gap-4"
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

        {/* === Right Column (3D Model) === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div
            className="
              w-[300px] sm:w-[380px] md:w-[460px] lg:w-[500px]
              h-[320px] sm:h-[420px] md:h-[480px] lg:h-[500px]
              flex items-center justify-center
              translate-y-[-60px] md:translate-y-[-90px] lg:translate-y-[-70px]
            "
          >
            <ComputersCanvas />
          </div>
        </motion.div>
      </div>

      {/* === Scroll Indicator === */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
