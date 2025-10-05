"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_sxyaf3i",         // Your Service ID
        "template_df1x899",        // Your Template ID
        form.current,
        "m5rJT5vqrxp5fZ4H2"       // Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          e.target.reset();

          confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
          setTimeout(() => setSent(false), 4000);
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setLoading(false);
        }
      );
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-16 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:40px_40px] animate-slowFade" />

      <h2 className="text-3xl font-bold text-center text-white mb-12 relative z-10">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {/* Left info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Let's Connect
          </h3>
          <p className="text-gray-400 mb-6">
            I'm open to new projects, collaborations, and freelance work. Reach
            me via email or send a message below.
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <MdEmail className="text-xl text-[#ff00ff]" />
              mdrafiislam9411@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl text-[#ff00ff]" />
              +8801618802042
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-xl text-[#ff00ff]" />
              +8801618802042
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] animate-border">
          <div className="bg-[#111111] p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Send a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              {/* Important: Name attributes must match EmailJS template */}
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="input input-bordered w-full bg-[#0d0d0d] text-white border-gray-700 placeholder-gray-400"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="input input-bordered w-full bg-[#0d0d0d] text-white border-gray-700 placeholder-gray-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="textarea textarea-bordered w-full h-32 bg-[#0d0d0d] text-white border-gray-700 placeholder-gray-400"
              ></textarea>

              {/* Button */}
              <div
                className="relative group"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className={`relative z-10 w-full py-3 font-semibold rounded-full overflow-hidden transition-all duration-300 text-white ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <span className="relative z-20">
                    {loading ? "Sending..." : "Send Message"}
                  </span>

                  <span
                    className="absolute inset-0 rounded-full transition duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.2), transparent 60%)`,
                    }}
                  ></span>

                  <span className="absolute inset-0 bg-gradient-to-r from-[#9b1743] via-[#ff00ff] to-[#6a0dad] rounded-full animate-gradient opacity-70"></span>
                </button>
              </div>

              {sent && (
                <p className="text-center text-green-400 mt-3">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes shimmerBorder {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes slowFade {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        .animate-border {
          background-size: 300% 300%;
          animation: shimmerBorder 8s linear infinite;
        }
        .animate-slowFade {
          animation: slowFade 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
