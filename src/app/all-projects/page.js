"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/Components/ProjectCard";
import useAxiosPublic from "@/Hooks/axiosPublic";
import Loader from "@/Components/loader";
import GradientView from "@/Components/Gradient";

// Sob projects data
const allProjects = [
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
  // Add more projects here if you have
];

export default function AllProjectsPage() {
   const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axiosPublic.get("/all-projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <Loader />;
  return (
    <section className="min-h-screen bg-[#0a0a0a] py-20 px-5 md:px-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
       <GradientView text={'All Projects'}></GradientView>
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
