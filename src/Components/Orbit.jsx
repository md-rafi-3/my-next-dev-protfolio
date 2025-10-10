"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiJsonwebtokens,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import GradientView from "./Gradient";

const missions = [
  {
    id: 1,
    title: "HTML & CSS Master",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    skills: ["HTML Semantic Tags", "Responsive CSS Design", "Flexbox & Grid Layout"],
  },
  {
    id: 2,
    title: "Tailwind CSS Pro",
    icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    skills: ["Utility-first Styling", "Dark Mode Setup", "Responsive Components"],
  },
  {
    id: 3,
    title: "JavaScript Wizard",
    icon: <SiJavascript className="text-yellow-400 text-4xl" />,
    skills: ["ES6+ Features", "DOM Manipulation", "Async/Await & Fetch API"],
  },
  {
    id: 4,
    title: "React.js Developer",
    icon: <FaReact className="text-cyan-400 text-4xl" />,
    skills: ["Hooks & State", "React Router", "Component Reusability"],
  },
  {
    id: 5,
    title: "Node.js & Express.js Backend",
    icon: <FaNodeJs className="text-green-400 text-4xl" />,
    skills: ["Express Routing", "REST API Design", "Middleware & Error Handling"],
  },
  {
    id: 6,
    title: "MongoDB & MySQL Database",
    icon: <SiMongodb className="text-emerald-500 text-4xl" />,
    skills: ["CRUD Operations", "Mongoose ORM", "MySQL Joins & Queries"],
  },
  {
    id: 7,
    title: "Firebase & JWT Authentication",
    icon: <SiFirebase className="text-amber-400 text-4xl" />,
    skills: ["Firebase Auth & Hosting", "JWT Token Auth", "User Role Management"],
  },
  {
    id: 8,
    title: "Deployment & Version Control",
    icon: <SiVercel className="text-white text-4xl" />,
    skills: ["Netlify & Vercel Deployment", "GitHub CI/CD", "Project Versioning"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function SkillsPathTimeline() {
  return (
    <section className=" text-white py-20 mt-20 flex flex-col items-center overflow-hidden">
      <div className="mb-7">
        <GradientView text={"My Skill Set"} />
      </div>

      <div className="relative w-full max-w-5xl">
        {/* Dotted vertical line (always center) */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] border-l-2 border-dotted border-gray-600 transform -translate-x-1/2"></div>

        <div className="flex flex-col space-y-16">
          {missions.map((mission, i) => (
            <motion.div
              key={mission.id}
              className={`relative flex items-center w-full ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } justify-center`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              {/* Card */}
              <div
                className={`bg-[#141422] border border-gray-700 hover:border-cyan-500 transition-all duration-300 rounded-2xl p-6 w-[85%] md:w-[45%] shadow-lg ${
                  i % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
                }`}
              >
              
                <div className="flex items-center gap-3 mt-4">
                  {mission.icon}
                  <h3 className="text-lg font-semibold">{mission.title}</h3>
                </div>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                  {mission.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Dot connector */}
              <div
                className="absolute left-1/2 hidden md:block w-5 h-5 bg-cyan-400 rounded-full border-4 border-[#0b0b15] transform -translate-x-1/2"
                style={{ top: "50%" }}
              ></div>
            </motion.div>
          ))}
        </div>

      </div>

     
    </section>
  );
}
