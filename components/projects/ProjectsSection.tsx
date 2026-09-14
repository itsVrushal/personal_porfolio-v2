"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionLabel from "../ui/SectionLabel";
import { projects, Project } from "@/lib/data";
import { use3DScroll } from "@/lib/use3DScroll";

const CATEGORIES = ["All", "Computer Vision", "Deep Learning & AI", "Agentic & Systems"] as const;
type Category = (typeof CATEGORIES)[number];

function ColabLink({ url, projectName }: { url: string; projectName: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${projectName} notebook in Google Colab`}
      className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 border border-amber-700/30 hover:bg-amber-500/20 hover:border-amber-700/50 hover:shadow-[0_0_15px_rgba(180,83,9,0.2)] transition-all duration-300 group/colab flex-shrink-0"
      title={`Open ${projectName} in Google Colab`}
    >
      <svg className="w-3.5 h-3.5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.9 14.1c1.3-1.3 2.1-3.1 2.1-5.1 0-4-3.2-7.2-7.2-7.2-2 0-3.8.8-5.1 2.1l1.7 1.7c.9-.9 2.1-1.4 3.4-1.4 2.7 0 4.8 2.2 4.8 4.8 0 1.3-.5 2.5-1.4 3.4l1.7 1.7z" />
        <path d="M7.1 9.9C5.8 11.2 5 13 5 15c0 4 3.2 7.2 7.2 7.2 2 0 3.8-.8 5.1-2.1l-1.7-1.7c-.9.9-2.1 1.4-3.4 1.4-2.7 0-4.8-2.2-4.8-4.8 0-1.3.5-2.5 1.4-3.4L7.1 9.9z" />
        <circle cx="15.5" cy="8.5" r="1.5" />
        <circle cx="8.5" cy="15.5" r="1.5" />
      </svg>
      <span>Colab</span>
      <span className="text-[10px] group-hover/colab:translate-x-0.5 group-hover/colab:-translate-y-0.5 transition-transform duration-200" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default function ProjectsSection() {
  const { ref, rotateX, translateY, opacity, scale } = use3DScroll({ initialRotateX: 9, initialY: 55 });
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const isOdd = filteredProjects.length % 2 !== 0;

  return (
    <motion.section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 relative"
      style={{ rotateX, y: translateY, opacity, scale }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <SectionLabel label="Projects" />
            <h2 className="font-syne text-3xl md:text-4xl font-bold text-text-hi">
              Things I&apos;ve built.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-mono text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-accent text-white font-semibold shadow-[0_4px_16px_rgba(168,67,8,0.25)]"
                      : "bg-surface text-text-hi hover:bg-surface/80 border border-border"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white font-bold" : "bg-border/40 text-text-hi font-medium"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, index: number) => {
              const isFeatured = activeCategory === "All" && isOdd && index === 0;

              return (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 6) * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`h-full flex flex-col ${isFeatured ? "md:col-span-2" : "col-span-1"}`}
                >
                  <GlassCard className="p-8 h-full flex flex-col group overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {isFeatured ? (
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 flex-grow">
                        <div className="md:col-span-5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-3 mb-3">
                              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-accent bg-accent-dim px-2.5 py-0.5 rounded-full border border-accent/25">
                                Featured Project
                              </span>
                              {project.colab && <ColabLink url={project.colab} projectName={project.name} />}
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
                                className="font-mono text-[10px] font-semibold px-2.5 py-1 rounded-full bg-accent-dim text-accent border border-accent/15"
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
                                <span className="text-accent mr-3 mt-1.5 opacity-60 text-[10px]" aria-hidden="true">▹</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-syne text-2xl font-bold text-text-hi mb-1 flex-grow">
                            {project.name}
                          </h3>
                          {project.colab && <ColabLink url={project.colab} projectName={project.name} />}
                        </div>

                        <p className="font-mono text-xs text-text-lo uppercase tracking-widest mb-6">
                          {project.organization}
                        </p>

                        <ul className="flex flex-col gap-2.5 mb-8 flex-grow">
                          {project.description.map((item, i) => (
                            <li key={i} className="flex items-start text-text-lo text-sm leading-relaxed">
                              <span className="text-accent mr-3 mt-1.5 opacity-50 text-[10px]" aria-hidden="true">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-auto pt-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="font-mono text-[10px] font-semibold px-2.5 py-1 rounded-full bg-accent-dim text-accent border border-accent/15"
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
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
