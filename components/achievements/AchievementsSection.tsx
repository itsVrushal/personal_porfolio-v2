"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionLabel from "../ui/SectionLabel";
import { achievements } from "@/lib/data";
import { use3DScroll } from "@/lib/use3DScroll";

const icons = ["🥈", "📄", "⚖️", "🏆"];

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

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 gap-6 pb-8 md:pb-0 snap-x snap-mandatory">
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
              style={{ }}
              className="min-w-[85vw] md:min-w-0 snap-center"
            >
              <GlassCard className="p-8 h-full flex flex-col justify-center gap-4">
                <div className="text-4xl">{icons[index % icons.length]}</div>
                <p className="text-text-hi font-medium leading-relaxed">{item}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
