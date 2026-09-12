"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionLabel from "../ui/SectionLabel";
import { projects } from "@/lib/data";
import { use3DScroll } from "@/lib/use3DScroll";

export default function ProjectsSection() {
  const { ref, rotateX, translateY, opacity, scale } = use3DScroll({ initialRotateX: 9, initialY: 55 });

  // When odd count (e.g. 1, 3, 5, 7): the flagship first project spans full width (md:col-span-2)
  // with a specialized balanced 2-column internal layout, leaving remaining cards in perfect pairs.
  // When even count (e.g. 2, 4, 6, 8): all cards are md:col-span-1 for a completely uniform, balanced grid.
  const isOdd = projects.length % 2 !== 0;

  return (
    <motion.section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 relative"
      style={{ rotateX, y: translateY, opacity, scale }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel label="Projects" />
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-text-hi">
            Things I&apos;ve built.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isFeatured = isOdd && index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotateX: 8, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{}}
                className={`h-full flex flex-col ${isFeatured ? "md:col-span-2" : "col-span-1"}`}
              >
                <GlassCard className="p-8 h-full flex flex-col group overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {isFeatured ? (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 flex-grow">
                      <div className="md:col-span-5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-accent bg-accent-dim px-2.5 py-0.5 rounded-full border border-accent/20">
                              Featured Project
                            </span>
                          </div>
                          <h3 className="font-syne text-2xl md:text-3xl font-bold text-text-hi mb-2">
                            {project.name}
                          </h3>
                          <p className="font-mono text-xs text-text-lo uppercase tracking-widest">
                            {project.organization}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-6">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-accent-dim text-accent"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-7 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8">
                        <ul className="flex flex-col gap-3">
                          {project.description.map((item, i) => (
                            <li key={i} className="flex items-start text-text-lo text-sm leading-relaxed">
                              <span className="text-accent mr-3 mt-1.5 opacity-60 text-[10px]">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <h3 className="font-syne text-2xl font-bold text-text-hi mb-1">
                        {project.name}
                      </h3>
                      <p className="font-mono text-xs text-text-lo uppercase tracking-widest mb-6">
                        {project.organization}
                      </p>

                      <ul className="flex flex-col gap-2.5 mb-8 flex-grow">
                        {project.description.map((item, i) => (
                          <li key={i} className="flex items-start text-text-lo text-sm leading-relaxed">
                            <span className="text-accent mr-3 mt-1.5 opacity-50 text-[10px]">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-auto pt-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-accent-dim text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
