"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import GlassCard from "../ui/GlassCard";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionLabel label="Projects" />
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-text-hi">
            Things I&apos;ve built.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index === 0 ? "md:col-span-2" : "col-span-1"}
            >
              <GlassCard className="p-8 h-full flex flex-col group overflow-hidden relative">
                {/* Top border accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <h3 className="font-syne text-2xl font-bold text-text-hi mb-1">
                  {project.name}
                </h3>
                <p className="font-mono text-xs text-text-lo uppercase tracking-widest mb-6">
                  {project.organization}
                </p>

                <ul className="flex flex-col gap-2 mb-8 flex-grow">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex items-start text-text-lo text-sm leading-relaxed">
                      <span className="text-accent mr-3 mt-1.5 opacity-50 text-[10px]">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-accent-dim text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
