"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

const images = [
  "https://i.ibb.co/rGzT45Zc/rafi1.jpg",
  "https://i.ibb.co/RTHK74g2/rafi4.jpg",
  "https://i.ibb.co/G4bsX8rw/rafi2.jpg",
  "https://i.ibb.co/d4rVDMS9/rafi3.jpg",
];

export default function AboutPage() {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: "easeOut" } },
  });

  // Memoized particles for performance
  const particles = useMemo(
    () => Array.from({ length: 8 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 2,
      duration: 4 + Math.random() * 3,
    })),
    []
  );

  return (
    <section className="relative min-h-screen text-white overflow-hidden flex flex-col items-center justify-center bg-[#050011]">

      {/* === Animated Background === */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b001f] via-[#130033] to-[#1b004d]" />

      {/* Soft colored blurs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#ff00ff33] blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00ffff33] blur-[150px]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-70 will-change-transform"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left }}
          animate={{
            y: [0, Math.random() * 10 - 5, 0],
            x: [0, Math.random() * 5 - 2.5, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 w-full flex flex-col items-center pt-24 pb-16 px-5 md:px-16">

        {/* ===== Slider ===== */}
        <div className="w-full md:w-[70%] mb-16">
          <Swiper
            grabCursor
            centeredSlides
            slidesPerView={1.2}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={img}
                  alt={`slide-${i}`}
                  width={600}
                  height={400}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-2xl"
                  priority={i === 0} // Preload first image
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ===== About Me ===== */}
        <motion.div
          variants={fadeIn(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-md max-w-3xl text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Hi, I’m <span className="text-pink-400 font-semibold">Md Rafi</span> — a passionate Full Stack Web Developer
            who loves bringing creative ideas to life through clean code and beautiful interfaces.
          </p>
        </motion.div>

        {/* ===== Education ===== */}
        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 w-full max-w-3xl"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            {[
              { title: "HSC in Science", institute: "Civil Aviation School and College, Kurmitola", year: "2024 – Present" },
              { title: "SSC in Science", institute: "Ruppur High School", year: "2019 – 2024" },
            ].map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeIn(i * 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/10 hover:border-pink-400 transition"
              >
                <h3 className="text-xl font-semibold text-pink-400">{edu.title}</h3>
                <p className="text-gray-300">{edu.institute}</p>
                <p className="text-gray-400 text-sm">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===== Future Goals ===== */}
        <motion.div
          variants={fadeIn(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-md"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Future Goals
          </h2>
          <p className="text-gray-300 leading-relaxed">
            My goal is to become a world-class full-stack developer who builds scalable and impactful applications.
            I want to contribute to open-source, master AI integrations, and create digital solutions that make people’s lives easier.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
