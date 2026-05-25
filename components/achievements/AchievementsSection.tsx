"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import GlassCard from "../ui/GlassCard";
import { achievements } from "@/lib/data";

const icons = ["🥈", "📄", "⚖️", "🏆"];

export default function AchievementsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="recognition" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel label="Recognition" />
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-text-hi">
            Milestones.
          </h2>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-6 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="min-w-[85vw] md:min-w-0 snap-center"
            >
              <GlassCard className="p-8 h-full flex flex-col justify-center gap-4">
                <div className="text-4xl">{icons[index % icons.length]}</div>
                <p className="text-text-hi font-medium leading-relaxed">
                  {item}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
