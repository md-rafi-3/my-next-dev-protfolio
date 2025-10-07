"use client";
import React from "react";
import ProjectCard from "./ProjectCard"; // age je card tumi use korocho
import { motion } from "framer-motion";
import Link from "next/link";
import GradientView from "./Gradient";

// Sample project data
const projects = [
  {
    title: "Unity Force",
    description:
      "Volunteer management app for coordinating community projects and events easily.",
    tech: ["React", "Firebase", "Tailwind CSS", "React Router"],
    image: "/projects/unity-force.png",
    demo: "https://unity-force-demo.com",
    repo: "https://github.com/md-rafi-3/unity-force",
  },
  {
    title: "Blood Donation App",
    description:
      "A platform connecting donors and volunteers to manage blood donation requests.",
    tech: ["MERN", "JWT", "Stripe", "Tailwind CSS"],
    image: "/projects/blood-donation.png",
    demo: "https://blood-donation-demo.com",
    repo: "https://github.com/md-rafi-3/blood-donation-app",
  },
  {
    title: "Gardening Hub",
    description:
      "Community platform for gardeners to share tips, events, and resources.",
    tech: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    image: "/projects/gardening-hub.png",
    demo: "https://gardening-hub-demo.com",
    repo: "https://github.com/md-rafi-3/gardening-hub",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="min-h-screen bg-[#0a0a0a] py-20 px-5 md:px-16">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-10 text-center"
      >
        <GradientView text={"My Projects"}></GradientView>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/all-projects" // sob projects page er link
            className="inline-block bg-gradient-to-r from-[#9b1743] to-[#6a0dad] text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 hover:from-[#b81d54] hover:to-[#7a19d1]"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
