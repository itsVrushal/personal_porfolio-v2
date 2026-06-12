"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionLabel from "../ui/SectionLabel";
import { experience } from "@/lib/data";
import { use3DScroll } from "@/lib/use3DScroll";

export default function ExperienceSection() {
  const { ref, rotateX, translateY, opacity, scale } = use3DScroll({ initialRotateX: 10, initialY: 60 });

  return (
    <motion.section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 relative"
      style={{ rotateX, y: translateY, opacity, scale }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel label="Experience" />
        </div>

        <div className="flex flex-col gap-10">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ }}
            >
              <GlassCard className="p-8 group relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-syne text-2xl font-bold text-text-hi mb-1">
                      {exp.company}
                    </h3>
                    <h4 className="text-text-lo font-mono text-sm uppercase tracking-wider">
                      {exp.role}
                    </h4>
                  </div>
                  {exp.period && (
                    <div className="font-mono text-xs font-medium text-accent bg-accent-dim px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </div>
                  )}
                </div>

                <ul className="flex flex-col gap-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-text-lo text-sm leading-relaxed">
                      <span className="text-accent mr-3 mt-1.5 opacity-50 text-[10px]">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
