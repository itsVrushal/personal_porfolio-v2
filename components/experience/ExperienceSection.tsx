"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import GlassCard from "../ui/GlassCard";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="experience" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel label="Experience" />
        </motion.div>

        <div className="relative border-l border-white/[0.05] ml-4 md:ml-0 md:border-none flex flex-col gap-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline dot for mobile */}
              <div className="md:hidden absolute w-3 h-3 bg-surface border border-accent rounded-full -left-[1.35rem] top-6" />

              <GlassCard className="p-8 group relative overflow-hidden">
                {/* Subtle left border highlight on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-syne text-2xl font-bold text-text-hi mb-1">
                      {exp.company}
                    </h3>
                    <h4 className="text-text-lo font-mono text-sm uppercase tracking-wider">
                      {exp.role}
                    </h4>
                  </div>
                  <div className="font-mono text-xs font-medium text-accent bg-accent-dim px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </div>
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
    </section>
  );
}
