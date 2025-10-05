"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex-1 bg-[#0d0d0d]  rounded-2xl overflow-hidden shadow-md flex flex-col"
    >
      {/* === Touch Light Effect (only on hover) === */}
      {hover && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent 80%)`,
          }}
        />
      )}

      {/* === Content Overlay === */}
      <div className="relative z-10 border-2 border-[#0d0d0d] rounded-2xl flex flex-col h-full">
        {/* Thumbnail */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5">
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-[#1a1a1a] border border-gray-700 px-3 py-1 rounded-full text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-auto">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#9b1743] to-[#6a0dad] hover:from-[#b81d54] hover:to-[#7a19d1] text-white font-medium py-2 px-4 rounded-xl transition-all duration-300"
            >
              <FiExternalLink /> Live
            </a>

            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-gray-400 hover:text-white border border-gray-700 hover:border-white py-2 px-3 rounded-xl transition-all duration-300"
            >
              <FiGithub /> Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
