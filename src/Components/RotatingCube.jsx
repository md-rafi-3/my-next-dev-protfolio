"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";

// 3D Model Component
function My3DModel() {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  return (
    <Center>
      <primitive object={scene} scale={1.8} />
    </Center>
  );
}

// Small fallback loader
function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#888" transparent opacity={0.3} />
    </mesh>
  );
}

export default function Hero3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensure client-side only
  }, []);

  if (!mounted) return null; // prevent SSR flash

  return (
    <div className="w-[350px] h-[350px] sm:w-[280px] sm:h-[280px] flex-shrink-0">
      <Canvas camera={{ position: [3, 3, 4], fov: 75 }} shadows>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <My3DModel />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} enablePan={false} />
      </Canvas>
    </div>
  );
}
