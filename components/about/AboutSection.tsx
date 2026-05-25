"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionLabel from "../ui/SectionLabel";
import GlassCard from "../ui/GlassCard";
import { personalInfo, education } from "@/lib/data";

function Counter({ from = 0, to, duration = 1.2 }: { from?: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      const currentCount = progress * (to - from) + from;
      // If we are dealing with decimals like CGPA, we don't round to int
      setCount(to % 1 !== 0 ? Number(currentCount.toFixed(2)) : Math.floor(currentCount));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-12">
            <div className="font-syne text-6xl lg:text-8xl font-bold text-text-hi">
              <Counter to={parseFloat(education.cgpa)} />
            </div>
            <div className="font-mono text-sm tracking-widest uppercase text-accent mt-2">
              Cumulative GPA
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="font-syne text-4xl lg:text-5xl font-bold text-text-hi">
                <Counter to={2} />
              </div>
              <div className="font-mono text-xs tracking-widest uppercase text-text-lo mt-2">
                Internships / Roles
              </div>
            </div>
            <div>
              <div className="font-syne text-4xl lg:text-5xl font-bold text-text-hi">
                <Counter to={5} />+
              </div>
              <div className="font-mono text-xs tracking-widest uppercase text-text-lo mt-2">
                Major Projects
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio & Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionLabel label="About" />
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-text-hi mb-6">
            Building systems that think.
          </h2>
          <p className="text-text-lo text-base leading-relaxed mb-8">
            {personalInfo.tagline} I am an AI & Systems Developer driven by the challenge of
            creating intelligent solutions that bridge complex backend infrastructures and scalable machine learning models.
            Currently pursuing my B.Tech in Artificial Intelligence and Data Science at {education.institution}.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {["AI/ML", "Systems Design", "Backend", "Cloud"].map((chip) => (
              <span
                key={chip}
                className="font-mono text-xs px-3 py-1 rounded-full border border-white/[0.05] bg-surface text-text-hi"
              >
                {chip}
              </span>
            ))}
          </div>

          <GlassCard className="p-6">
            <div className="font-mono text-[10px] tracking-widest text-accent uppercase mb-2">
              Education
            </div>
            <h3 className="font-syne text-lg font-bold text-text-hi mb-1">
              {education.institution}
            </h3>
            <p className="text-text-lo text-sm mb-4">{education.degree}</p>
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-text-lo">{education.period}</span>
              <span className="text-accent bg-accent-dim px-2 py-0.5 rounded">
                CGPA: {education.cgpa}
              </span>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
}
