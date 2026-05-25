"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "../ui/SectionLabel";
import { skills } from "@/lib/data";

export default function StackSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const skillGroups = [
    { label: "Languages", items: skills.languages },
    { label: "AI / LLM", items: skills.ai_llm },
    { label: "Backend & Data", items: skills.backend_data },
    { label: "ML / CV", items: skills.ml_cv },
    { label: "DevOps", items: skills.devops },
  ];

  return (
    <section id="stack" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionLabel label="Tech Stack" />
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-text-hi">
            Tools I think in.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start"
            >
              <div className="font-mono text-sm tracking-widest uppercase text-text-lo md:pt-2">
                {group.label}
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-3"
              >
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="border border-white/[0.07] bg-surface text-text-lo font-mono text-xs px-4 py-2 rounded-full transition-colors duration-300 hover:border-accent hover:text-accent cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
