"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaRocket,
  FaSearch,
  FaPalette,
  FaTools,
} from "react-icons/fa";
import GradientView from "./Gradient";

const services = [
  {
    title: "Custom Web Development",
    icon: <FaCode />,
    description:
      "Building fast, responsive web apps with modern technologies and best practices.",
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    description:
      "Engineering robust server-side solutions and scalable APIs that power modern web applications.",
  },
  {
    title: "Performance Optimization",
    icon: <FaRocket />,
    description:
      "Supercharging web applications for lightning-fast performance and optimal search engine rankings.",
  },
  {
    title: "SEO Optimization",
    icon: <FaSearch />,
    description:
      "Improve your website’s visibility with our SEO strategies, ensuring higher rankings and organic traffic growth.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPalette />,
    description:
      "Crafting beautiful, intuitive interfaces that deliver exceptional user experiences and drive engagement.",
  },
  {
    title: "Technical Consulting",
    icon: <FaTools />,
    description:
      "Guiding technical decisions with expert insights on architecture, tech stack, and development strategy.",
  },
];

const ServicesSection = () => {
  return (
    <section
      className="min-h-screen w-full bg-black relative py-20 px-6"
      id="services"
    >
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#000000",
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.12) 1.4px, transparent 1.4px)
          `,
          backgroundSize: "28px 28px",
          backgroundPosition: "center",
          maskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 60%, transparent 100%)",
        }}
      />

      {/* Optional center glow behind content */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-[500px] h-[500px] bg-purple-500 blur-3xl opacity-10 rounded-full" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">
          <GradientView text={" Your Ideas, Built with Code"}></GradientView>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            I craft fast, scalable, and secure digital products tailored to your business goals.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--x", `${x}px`);
                card.style.setProperty("--y", `${y}px`);
              }}
              className="relative p-6 bg-[#111] rounded-xl shadow-lg border border-gray-800 group overflow-hidden cursor-pointer transition-all duration-300"
            >
              {/* Cursor-Following Gradient Light */}
              <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div
                  className="absolute w-60 h-60 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-2xl"
                  style={{
                    left: "var(--x)",
                    top: "var(--y)",
                    background:
                      "radial-gradient(circle at center, rgba(147, 51, 234, 0.5), transparent 70%)",
                  }}
                ></div>
              </div>

              {/* Top Gradient Glow Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="text-3xl text-white mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
