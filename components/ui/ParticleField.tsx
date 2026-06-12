"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 600 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Build geometry once
  const [positions, randoms] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const rnd = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      rnd[i * 3 + 0] = Math.random() * Math.PI * 2;
      rnd[i * 3 + 1] = Math.random() * 0.5 + 0.2;
      rnd[i * 3 + 2] = Math.random() * 0.3 + 0.05;
    }
    return [pos, rnd];
  }, [count]);

  // Track mouse
  if (typeof window !== "undefined") {
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    // Assign once (this runs in useMemo-equivalent context; fine for event listeners)
    if (!mouse.current) {
      window.addEventListener("mousemove", handleMouse);
    }
  }

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    const geo = mesh.current.geometry as THREE.BufferGeometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    const original = positions;

    for (let i = 0; i < count; i++) {
      const phase = randoms[i * 3 + 0];
      const amp = randoms[i * 3 + 1] * 0.08;
      const freq = randoms[i * 3 + 2];

      arr[i * 3 + 0] = original[i * 3 + 0] + Math.sin(t * freq + phase) * amp;
      arr[i * 3 + 1] = original[i * 3 + 1] + Math.cos(t * freq + phase * 1.3) * amp;
    }
    posAttr.needsUpdate = true;

    // Subtle mouse parallax rotation
    mesh.current.rotation.y += (mouse.current.x * 0.03 - mesh.current.rotation.y) * 0.04;
    mesh.current.rotation.x += (mouse.current.y * 0.015 - mesh.current.rotation.x) * 0.04;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.slice(), 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#4af0ff"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.85,
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <Particles count={600} />
      </Canvas>
    </div>
  );
}
