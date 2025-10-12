"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import dynamic from "next/dynamic";
import CanvasLoader from "./CanvasLoader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* 🌤 Ambient light - overall scene brightness */}
      <ambientLight intensity={0.5} />

      {/* 🌈 Hemisphere light - soft sky-to-ground light gradient */}
      <hemisphereLight intensity={0.35} groundColor="black" color="#ffffff" />

      {/* 💡 Stronger spotlight for focus */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={0.8}
        intensity={1.8}
        castShadow
        shadow-mapSize={2048}
        color="#ffffff"
      />

      {/* 🔆 Point light for extra front glow */}
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#f5f5f5" />

      {/* ☀ Directional light for natural warm tone */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        color="#ffdcb0"
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="cursor-grab"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default dynamic(() => Promise.resolve(ComputersCanvas), {
  ssr: false,
});
