"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionLabel from "../ui/SectionLabel";
import { achievements } from "@/lib/data";
import { use3DScroll } from "@/lib/use3DScroll";

function MilestoneIcon({ index }: { index: number }) {
  switch (index % 4) {
    case 0:
      // Hackathon Runner-up / Distinction
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    case 1:
      // Springer Publication / Academic Paper
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M8 7h8" />
          <path d="M8 11h8" />
          <path d="M8 15h5" />
        </svg>
      );
    case 2:
      // Patent / Innovation / Shield
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 3:
    default:
      // Leadership / Mentorship
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
  }
}

export default function AchievementsSection() {
  const { ref, rotateX, translateY, opacity, scale } = use3DScroll({ initialRotateX: 9, initialY: 50 });

  return (
    <motion.section
      id="recognition"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 relative"
      style={{ rotateX, y: translateY, opacity, scale }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel label="Recognition" />
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-text-hi">
            Milestones.
          </h2>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar md:grid md:grid-cols-2 gap-6 pb-8 md:pb-0 snap-x snap-mandatory">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: 8, scale: 0.95 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{}}
              className="min-w-[85vw] md:min-w-0 snap-center h-full flex flex-col"
            >
              <GlassCard className="p-6 md:p-7 h-full flex items-center gap-5 group overflow-hidden relative">
                <div className="w-11 h-11 rounded-xl bg-accent-dim border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 shadow-sm group-hover:scale-105 group-hover:border-accent/40 transition-all duration-300">
                  <MilestoneIcon index={index} />
                </div>
                <div className="flex-grow">
                  <p className="text-text-hi font-medium leading-relaxed text-sm md:text-base">
                    {item}
                  </p>
                </div>
                <span className="font-mono text-xs text-text-lo tracking-widest uppercase opacity-40 flex-shrink-0">
                  0{index + 1}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
