"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";

function My3DModel() {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  return (
    <Center>
      <primitive object={scene} scale={2} />
    </Center>
  );
}

export default function Hero3D() {
  return (
    <div className="w-[340px] h-[340px]">
      <Canvas camera={{ position: [3, 3, 4], fov: 100 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <My3DModel />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}
