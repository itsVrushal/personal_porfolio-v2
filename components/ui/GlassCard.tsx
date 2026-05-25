import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`relative rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl transition-all duration-300 hover:border-accent/25 hover:bg-white/[0.055] hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
