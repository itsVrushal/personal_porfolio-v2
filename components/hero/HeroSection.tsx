"use client";

import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import MagneticButton from "../ui/MagneticButton";
import { personalInfo } from "@/lib/data";

const FloatingOrb = dynamic(() => import("./FloatingOrb"), {
  ssr: false,
});

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col z-10"
        >
          <motion.div variants={itemVariants}>
            <SectionLabel label="AI & Systems Developer" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="flex flex-col font-syne text-[clamp(4rem,10vw,9rem)] font-black leading-[0.9] tracking-tighter uppercase mb-6"
          >
            <span className="text-text-hi">VRUSHAL</span>
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px var(--color-text-hi)" }}
            >
              PATIL
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-text-lo text-lg md:text-xl max-w-lg mb-10"
          >
            Building the future with code, one algorithm at a time. Designing scalable AI systems and resilient architectures.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <MagneticButton className="bg-accent text-[#080808] font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
              <a href="#projects">View Work</a>
            </MagneticButton>
            <MagneticButton className="bg-transparent border border-white/[0.1] text-text-hi px-8 py-3 rounded-full hover:bg-white/[0.05] transition-colors">
              <a href="#contact">Get In Touch</a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* 3D Canvas */}
        <div className="h-[50vh] lg:h-[80vh] w-full relative z-0">
          <FloatingOrb />
        </div>
      </div>
    </section>
  );
}
