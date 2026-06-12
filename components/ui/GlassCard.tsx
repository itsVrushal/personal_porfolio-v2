"use client";

import { ReactNode, useRef, useCallback } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tiltStrength?: number;
}

export default function GlassCard({
  children,
  className = "",
  tiltStrength = 8,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const rotY = x * tiltStrength;
        const rotX = -y * tiltStrength;
        cardRef.current.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(4px)`;
        // Shift the inner highlight
        cardRef.current.style.backgroundImage = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(74,240,255,0.05) 0%, transparent 60%)`;
      });
    },
    [tiltStrength]
  );

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(frameRef.current);
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    cardRef.current.style.backgroundImage = "none";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-accent/25 hover:shadow-[0_0_30px_rgba(74,240,255,0.06)] ${className}`}
      style={{
        willChange: "transform",
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      {children}
    </div>
  );
}
