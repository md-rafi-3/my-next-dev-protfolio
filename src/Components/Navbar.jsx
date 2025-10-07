"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDownload } from "react-icons/ai";
import { FaCode, FaDownload } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navLinks = ["Home", "About", "Projects", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      const handleSectionScroll = () => {
        const scrollPos = window.scrollY + 120;
        let current = "home";
        navLinks.forEach((link) => {
          const section = document.getElementById(link.toLowerCase());
          if (section && scrollPos >= section.offsetTop) current = link.toLowerCase();
        });
        setActiveSection(current);
      };
      window.addEventListener("scroll", handleSectionScroll);
      return () => window.removeEventListener("scroll", handleSectionScroll);
    } else {
      setActiveSection(pathname.replace("/", "") || "home");
    }
  }, [pathname]);

  const getLinkHref = (link) => (link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`);
  const isActive = (link) =>
    pathname === "/" ? activeSection === link.toLowerCase() : pathname === getLinkHref(link);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-[1000] transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/40" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between z-[1000] relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 z-[1000]"
        >
          <h1 className="text-2xl font-bold text-[#ffae00] flex items-center gap-1">
            <FaCode /> Rafi
          </h1>
        </motion.div>

        {/* Desktop Menu + Resume Button aligned to right */}
        <div className="hidden md:flex items-center gap-8 z-[1000] ml-auto">
          <ul className="flex items-center gap-8 text-sm text-gray-300">
            {navLinks.map((link, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={getLinkHref(link)}
                  className={`hover:text-[#0abdfc] transition-colors ${
                    isActive(link) ? "text-[#0abdfc] font-semibold" : ""
                  }`}
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Resume Button with download icon */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="https://drive.google.com/file/d/12FoThFh-WzU8_8KZwz3FcaDfLQOVyHfp/view?usp=sharing" // এখানে তোমার resume file path বসাও
              target="#"
              className="px-5 py-2 rounded-full bg-gradient-to-r  from-[#0abdfc] to-[#00a2ff] text-black font-semibold hover:opacity-90 transition flex items-center gap-2"
            >
             <FaDownload />
 Resume 
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center z-[1000]">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineClose size={28} color="#0abdfc" /> : <AiOutlineMenu size={28} color="#0abdfc" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black z-[900]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 h-screen bg-black bg-opacity-95 flex flex-col items-start px-8 py-10 gap-6 text-gray-300 z-[1000]"
            >
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={getLinkHref(link)}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg hover:text-[#0abdfc] transition ${
                    isActive(link) ? "text-[#0abdfc] font-semibold" : ""
                  }`}
                >
                  {link}
                </Link>
              ))}
              <Link
                href="https://drive.google.com/file/d/12FoThFh-WzU8_8KZwz3FcaDfLQOVyHfp/view?usp=sharing"
                target="#"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#0abdfc] to-[#00a2ff] text-black font-semibold hover:opacity-90 transition flex items-center gap-2"
              >
                <FaDownload />
Resume
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
