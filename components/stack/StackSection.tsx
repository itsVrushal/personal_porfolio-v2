"use client";

import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import { skills } from "@/lib/data";
import { use3DScroll } from "@/lib/use3DScroll";

export default function StackSection() {
  const { ref, rotateX, translateY, opacity, scale } = use3DScroll({ initialRotateX: 8, initialY: 50 });

  const skillGroups = [
    { label: "Languages", items: skills.languages },
    { label: "AI / LLM", items: skills.ai_llm },
    { label: "Backend & Data", items: skills.backend_data },
    { label: "ML / CV", items: skills.ml_cv },
    { label: "DevOps", items: skills.devops },
  ];

  return (
    <motion.section
      id="stack"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 relative"
      style={{ rotateX, y: translateY, opacity, scale }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionLabel label="Tech Stack" />
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-text-hi">
            Tools I think in.
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start"
            >
              <div className="font-mono text-sm tracking-widest uppercase text-text-lo md:pt-2">
                {group.label}
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8, scale: 0.92 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05 + skillIdx * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border border-white/[0.07] bg-surface text-text-lo font-mono text-xs px-4 py-2 rounded-full transition-colors duration-300 hover:border-accent hover:text-accent cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
