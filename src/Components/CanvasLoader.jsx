"use client";

import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "transparent",
      }}
    >
      {/* Loading spinner */}
      <span
        className="canvas-loader"
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid rgba(255,255,255,0.3)",
          borderTop: "4px solid #00C6FF",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      {/* Loading percentage */}
      <p
        style={{
          fontSize: "14px",
          color: "#F1F1F1",
          fontWeight: "700",
          marginTop: "12px",
          letterSpacing: "1px",
        }}
      >
        {progress.toFixed(0)}%
      </p>

      {/* Custom inline keyframes (to avoid external CSS dependency) */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Html>
  );
};

export default CanvasLoader;
