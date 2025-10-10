"use client";

import { useState, useEffect } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import html from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
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

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("html", html);
SyntaxHighlighter.registerLanguage("css", css);

const tabs = [
  { name: "html", icon: <SiHtml5 size={18} color="#E74433" />, lang: "html" },
  { name: "css", icon: <SiCss3 size={18} color="#1572B6" />, lang: "css" },
  { name: "tailwind", icon: <SiTailwindcss size={18} color="#38BDF8" />, lang: "html" },
  { name: "react", icon: <SiReact size={18} color="#61DAFB" />, lang: "javascript" },
  { name: "nextjs", icon: <SiNextdotjs size={18} color="#ffffff" />, lang: "javascript" },
  { name: "nodejs", icon: <SiNodedotjs size={18} color="#339933" />, lang: "javascript" },
  { name: "express", icon: <SiExpress size={18} color="#ffffff" />, lang: "javascript" },
  { name: "mongodb", icon: <SiMongodb size={18} color="#4DB33D" />, lang: "javascript" },
  { name: "mysql", icon: <SiMysql size={18} color="#4479A1" />, lang: "sql" },
  { name: "firebase", icon: <SiFirebase size={18} color="#FFCA28" />, lang: "javascript" },
];

const codeSnippets = {
  html: `<html>
  <head><title>Md Rafi</title></head>
  <body>
    <h1>Hello, I'm Md Rafi</h1>
    <p>Full Stack Developer 🚀</p>
  </body>
</html>`,

  css: `body {
  background-color: #0d1117;
  color: #ffffff;
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
}

h1 { font-size: 2.5rem; }

p { color: #58a6ff; }`,

  tailwind: `<div class="min-h-screen bg-gray-900 flex items-center justify-center text-white">
  <h1 class="text-3xl font-bold">Hello Tailwind!</h1>
</div>`,

  react: `import { useState } from 'react';
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
};

export default function TechCodeBlock() {
  const [activeTab, setActiveTab] = useState("html");
  const [typedCode, setTypedCode] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    setTypedCode("");
    const code = codeSnippets[activeTab];
    let i = 0;
    const type = () => {
      if (i <= code.length) {
        setTypedCode(code.slice(0, i));
        i++;
        setTimeout(type, 10);
      }
    };
    const timeout = setTimeout(type, 300);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const activeLang = tabs.find((tab) => tab.name === activeTab)?.lang || "javascript";

  return (
    <div className="w-full max-w-6xl mx-auto px-3 md:px-8">
      <div className="bg-[#0d1117]/80 backdrop-blur-xl rounded-2xl border border-[#30363d]/60 shadow-[0_0_25px_#00000060] overflow-hidden">
        
        {/* Toolbar */}
        <div className="flex items-center px-5 py-3 bg-[#161b22]/70 border-b border-[#30363d]/70">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full shadow-md"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full shadow-md"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full shadow-md"></span>
          </div>
          <div className="flex-1"></div>
          <span className="text-xs sm:text-sm text-gray-400 tracking-wider font-semibold">
            {activeTab.toUpperCase()}
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-3 py-3 bg-[#161b22]/80 border-b border-[#30363d]/60 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-300 whitespace-nowrap 
              ${activeTab === tab.name
                ? "bg-[#0d1117] border border-gray-600 text-white scale-105 shadow-md"
                : "text-gray-400 hover:text-white hover:bg-[#1e232a]"
              }`}
            >
              {tab.icon} {tab.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Code Area */}
        <div className="px-2 sm:px-4 py-3 sm:py-5 h-[300px] sm:h-[380px] overflow-auto scrollbar-thin scrollbar-thumb-[#30363d] scrollbar-track-transparent">
          <SyntaxHighlighter
            language={activeLang}
            style={atomOneDark}
            showLineNumbers
            wrapLines
            customStyle={{
              background: "transparent",
              fontSize: "0.9rem",
              lineHeight: "1.6",
              fontFamily: "JetBrains Mono, monospace",
            }}
            lineProps={{ style: { wordBreak: "break-word", whiteSpace: "pre-wrap" } }}
          >
            {typedCode + (cursorVisible ? "|" : "")}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
