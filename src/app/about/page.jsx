"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const images = [
  "https://i.ibb.co.com/rGzT45Zc/rafi1.jpg",
"https://i.ibb.co.com/RTHK74g2/rafi4.jpg",
"https://i.ibb.co.com/G4bsX8rw/rafi2.jpg",
"https://i.ibb.co.com/d4rVDMS9/rafi3.jpg"
];

export default function AboutPage() {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: "easeOut" } },
  });

  return (
    <section className="relative min-h-screen text-white overflow-hidden flex flex-col items-center justify-center bg-[#050011]">
      {/* === Animated Background === */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b001f] via-[#130033] to-[#1b004d]" />
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#ff00ff33] blur-[180px]"
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-[#00ffff33] blur-[220px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-70"
          animate={{
            y: [0, Math.random() * 20 - 10, 0],
            x: [0, Math.random() * 15 - 7, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 w-full flex flex-col items-center pt-24 pb-16 px-5 md:px-16">
        {/* ===== Coverflow Slider ===== */}
        <div className="w-full md:w-[70%] mb-16">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.2} // Mobile default
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[Autoplay, EffectCoverflow]}
            className="mySwiper"
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={img}
                  alt={`slide-${i}`}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ===== About Me ===== */}
        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-8 md:p-12 shadow-lg max-w-3xl text-center mb-20"
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
          variants={fadeIn(0.4)}
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
              {
                title: "HSC in Science",
                institute: "Civil Aviation School and College, Kurmitola",
                year: "2024 – Present",
              },
              {
                title: "SSC in Science",
                institute: "Ruppur High School",
                year: "2019 – 2024",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeIn(i * 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-[0_0_20px_#ffffff20] border border-white/10 hover:border-pink-400 transition"
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
          variants={fadeIn(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-[0_0_30px_#ff00ff20]"
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
