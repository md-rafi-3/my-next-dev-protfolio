import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md Rafi Islam || Full-Stack Web Developer",
  description:
    "I'm Md Rafi Islam, a passionate Full-Stack Web Developer from Dhaka, Bangladesh. I specialize in building modern, responsive, and user-friendly web applications using React, Node.js, Express, and MongoDB.",
  keywords: [
    "Md Rafi Islam",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Web Developer Bangladesh",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Md Rafi Islam" }],
  creator: "Md Rafi Islam",
  publisher: "Md Rafi Islam",
  icons: {
    icon: "/favIcon.png", // তোমার favicon এর path
  },
  openGraph: {
    title: "Md Rafi Islam || Full-Stack Web Developer",
    description:
      "Explore my portfolio showcasing creative and functional web applications built with the MERN stack, React, and Tailwind CSS.",
    url: "https://my-next-dev-protfolio.vercel.app/",
    siteName: "Md Rafi Islam Portfolio",
    images: [
      {
        width: 1200,
        height: 630,
        alt: "Md Rafi Islam Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Rafi Islam || Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer skilled in React, Node.js, Express, and MongoDB. Passionate about creating modern and scalable web applications.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212]`}
      >
        <Navbar></Navbar>
        {children}
        <SpeedInsights />
        <Analytics />

        <Footer></Footer>
      </body>
    </html>
  );
}
