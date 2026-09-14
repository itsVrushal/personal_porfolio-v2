"use client";

import dynamic from "next/dynamic";

const ParticleCanvas = dynamic(
  () => import("@/components/ui/ParticleField"),
  { ssr: false }
);

export default function BackgroundParticles() {
  return <ParticleCanvas />;
}
