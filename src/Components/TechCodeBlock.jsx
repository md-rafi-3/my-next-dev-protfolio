"use client";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
} from "react-icons/si";

const tabs = [
  { name: "html", icon: <SiHtml5 size={18} color="#E74433" /> },
  { name: "css", icon: <SiCss3 size={18} color="#1572B6" /> },
  { name: "tailwind", icon: <SiTailwindcss size={18} color="#38BDF8" /> },
  { name: "react", icon: <SiReact size={18} color="#61DAFB" /> },
  { name: "nextjs", icon: <SiNextdotjs size={18} color="#ffffff" /> },
  { name: "nodejs", icon: <SiNodedotjs size={18} color="#339933" /> },
  { name: "express", icon: <SiExpress size={18} color="#ffffff" /> },
  { name: "mongodb", icon: <SiMongodb size={18} color="#4DB33D" /> },
  { name: "mysql", icon: <SiMysql size={18} color="#4479A1" /> },
  { name: "firebase", icon: <SiFirebase size={18} color="#FFCA28" /> },
];

const codeSnippets = {
  html: `<!-- HTML Full Example -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Md Rafi | Portfolio</title>
  </head>
  <body>
    <h1>Hello, I'm Md Rafi</h1>
    <p>Full Stack Developer 🚀</p>
  </body>
</html>`,

  css: `/* CSS Full Example */
body {
  background-color: #0d1117;
  color: #ffffff;
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.2rem;
  color: #58a6ff;
}`,

  tailwind: `<!-- Tailwind Example -->
<div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
  <h1 class="text-3xl font-bold">Hello Tailwind CSS!</h1>
  <p class="mt-2 text-lg">Modern styling made easy</p>
  <button class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">
    Get Started
  </button>
</div>`,

  react: `// React Example with State
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello React</h1>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}`,

  nextjs: `// Next.js Page Example
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Md Rafi | Home</title>
      </Head>
      <main className="p-4">
        <h1>Welcome to my Next.js site</h1>
      </main>
    </>
  );
}`,

  nodejs: `// Node.js Server Example
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js Server');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`,

  express: `// Express.js API Example
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Express!');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});`,

  mongodb: `// MongoDB Connection Example
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('portfolio');
    const collection = db.collection('projects');
    const projects = await collection.find().toArray();
    console.log(projects);
  } finally {
    await client.close();
  }
}

run().catch(console.error);`,

  mysql: `-- MySQL Setup Example
CREATE DATABASE portfolio;
USE portfolio;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO users (name, email)
VALUES ('Md Rafi', 'rafi@example.com');`,

  firebase: `// Firebase Setup Example
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "my-app.firebaseapp.com",
  projectId: "my-app",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);`,
};

export default function TechCodeBlock() {
  const [activeTab, setActiveTab] = useState("html");
  const [typeSpeed, setTypeSpeed] = useState(20);

  useEffect(() => {
    const w = window.innerWidth;
    setTypeSpeed(w < 640 ? 10 : 20);
  }, []);

  const code = codeSnippets[activeTab];

  return (
    <div className="bg-[#0d1117] text-gray-200 rounded-xl border border-[#30363d] shadow-lg w-full max-w-5xl mx-auto overflow-hidden">
      
      {/* Toolbar / Title Bar */}
      <div className="flex items-center px-4 py-2 bg-[#161b22] border-b border-[#30363d] relative">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        <div className="flex-1"></div>

        {/* Active Tab Name on Right Side */}
        <span className="text-sm text-gray-400 font-medium ml-auto">
          {activeTab.toUpperCase()} 
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-4 py-2 bg-[#161b22] border-b border-[#30363d] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === tab.name
                ? "bg-[#0d1117] border border-gray-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-[#1e232a]"
            }`}
          >
            {tab.icon}
            {tab.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Code Area with Typewriter */}
      <div className="px-4 py-4 font-mono text-sm sm:text-base whitespace-pre-wrap text-gray-100 h-[360px] overflow-auto">
        <Typewriter
          words={[code]}
          loop={false}
          typeSpeed={typeSpeed}
          cursor
          cursorStyle="_"
        />
      </div>
    </div>
  );
}
