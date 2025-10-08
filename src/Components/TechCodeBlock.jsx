"use client";

import { useState, useEffect } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import html from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiFirebase } from "react-icons/si";

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

  useEffect(() => {
    let cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    setTypedCode(""); // reset typing on tab change
    const code = codeSnippets[activeTab];
    let index = 0;

    const type = () => {
      if (index <= code.length) {
        setTypedCode(code.slice(0, index));
        index++;
        setTimeout(type, 15);
      }
    };

    const typingTimeout = setTimeout(type, 300);
    return () => clearTimeout(typingTimeout);
  }, [activeTab]);

  const activeLang = tabs.find((tab) => tab.name === activeTab)?.lang || "javascript";

  return (
    <div className="bg-[#0d1117] rounded-xl border border-[#30363d] shadow-lg w-full max-w-5xl mx-auto overflow-hidden">
      
      {/* Toolbar */}
      <div className="flex items-center px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="flex-1"></div>
        <span className="text-sm text-gray-400 font-medium ml-auto">{activeTab.toUpperCase()}</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-4 py-2 bg-[#161b22] border-b border-[#30363d] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.name
                ? "bg-[#0d1117] border border-gray-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-[#1e232a]"
            }`}
          >
            {tab.icon} {tab.name.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Code Area with Syntax Highlight */}
      <div className="px-4 py-4 h-[360px] overflow-auto">
        <SyntaxHighlighter
          language={activeLang}
          style={atomOneDark}
          showLineNumbers
          wrapLines
          lineProps={{ style: { wordBreak: "break-word", whiteSpace: "pre-wrap" } }}
        >
          {typedCode + (cursorVisible ? "|" : "")}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
