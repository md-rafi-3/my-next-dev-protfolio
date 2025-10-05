"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-gray-300 py-12 px-6 overflow-hidden border-t border-gray-800">
      {/* === Background Pattern === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none"></div>

      {/* === Shimmer Gradient Border (Top) === */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9b1743] via-[#6a0dad] to-[#00bfff] animate-[shimmer_4s_linear_infinite]" />

      {/* === Main Content === */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* === Left Side (Social + Info) === */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          {/* Developer Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Md Rafi Islam</h2>
            <p className="text-sm text-gray-400 mt-1">
              Passionate Full-Stack Developer from Dhaka, Bangladesh
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 ">
            {[
              {
                href: "https://github.com/md-rafi-3",
                icon: <FaGithub />,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/md-rafi-islam",
                icon: <FaLinkedin />,
                label: "LinkedIn",
              },
              {
                href: "https://facebook.com",
                icon: <FaFacebook />,
                label: "Facebook",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="relative text-xl text-gray-400 hover:text-white transition group"
                aria-label={item.label}
              >
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="flex items-center justify-center"
                >
                  {item.icon}
                </motion.span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#9b1743] to-[#6a0dad] opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* === Right Side === */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center md:text-right text-sm text-gray-400"
        >
          <p className="flex items-center justify-center md:justify-end gap-2">
            Made with <FaHeart className="text-red-500" /> by{" "}
            <span className="text-white font-medium">Rafi</span>
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.div>
      </div>

      {/* === Shimmer Animation Keyframes === */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </footer>
  );
}
