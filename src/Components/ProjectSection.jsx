"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard"; // age je card tumi use korocho
import { motion } from "framer-motion";
import Link from "next/link";
import GradientView from "./Gradient";
import useAxiosPublic from "@/Hooks/axiosPublic";
import Loader from "./loader";


export default function ProjectSection() {
  const [projects,setProjects]=useState([])
   const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axiosPublic.get("/projects");
        const allProjects = res.data;

        
        setProjects(allProjects.slice(0, 3));
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <Loader />;
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
