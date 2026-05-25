"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function OrbMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Slow Y-axis rotation and gentle float
    meshRef.current.rotation.y += 0.003;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;

    // Mouse parallax tilt
    const { pointer } = state;
    targetRotation.current.x = (pointer.y * Math.PI) / 6;
    targetRotation.current.y = (pointer.x * Math.PI) / 6;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRotation.current.x,
      0.05
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      -targetRotation.current.y,
      0.05
    );
  });

  return (
    <Icosahedron ref={meshRef} args={[2, 1]}>
      <meshStandardMaterial
        color="#0a1a2a"
        metalness={0.9}
        roughness={0.1}
        wireframe={false}
      />
    </Icosahedron>
  );
}

export default function FloatingOrb() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,240,255,0.08) 0%, transparent 70%)",
        }}
      />
      <Canvas dpr={[1, 1]} camera={{ position: [0, 0, 6], fov: 45 }}>
        <pointLight color="#4af0ff" intensity={2} position={[3, 3, 3]} />
        <ambientLight intensity={0.1} />
        <pointLight color="#ffffff" intensity={0.5} position={[-3, -3, -3]} />
        <OrbMesh />
      </Canvas>
    </div>
  );
}
