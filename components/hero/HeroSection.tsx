"use client";

import { useCallback, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import MagneticButton from "../ui/MagneticButton";
import { personalInfo } from "@/lib/data";

const VRUSHAL_LETTERS = "VRUSHAL".split("");
const PATIL_LETTERS = "PATIL".split("");

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Spotlight follows mouse
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!spotlightRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(194,94,26,0.08) 0%, transparent 60%)`;
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Scroll-driven parallax for the text
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center relative pt-20 overflow-hidden"
    >
      {/* Spotlight overlay */}
      <div
        ref={spotlightRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          transition: "background 0.05s linear",
        }}
      />

      {/* Depth fade vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 120%, transparent 0%, var(--bg) 80%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full" style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
        >
          <div style={{ display: "flex", flexDirection: "column", perspective: "1000px" }}>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionLabel label="AI & Systems Developer" />
            </motion.div>

            {/* Seamless unified name: VRUSHAL -> PATIL emergence */}
            <h1
              className="font-syne font-black uppercase"
              style={{
                fontSize: "clamp(3rem, 11vw, 9.5rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
                display: "flex",
                flexDirection: "column",
                transformStyle: "preserve-3d",
              }}
            >
              {/* VRUSHAL — letter-by-letter 3D tilt roll */}
              <span
                style={{
                  display: "inline-flex",
                  color: "var(--text-hi)",
                  textShadow:
                    "0 2px 20px rgba(140,115,90,0.12), 0 1px 3px rgba(28,25,23,0.08)",
                  perspective: "1000px",
                }}
              >
                {VRUSHAL_LETTERS.map((char, i) => (
                  <motion.span
                    key={`v-${i}`}
                    initial={{ opacity: 0, y: 32, rotateX: 65, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.55,
                      delay: 0.12 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      display: "inline-block",
                      transformOrigin: "50% 80%",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>

              {/* PATIL — buttery de-blur slide down emergence */}
              <span
                style={{
                  display: "inline-flex",
                  WebkitTextStroke: "2px var(--text-hi)",
                  color: "rgba(194, 94, 26, 0.07)",
                  textShadow: "0 8px 30px rgba(194,94,26,0.18)",
                  perspective: "1000px",
                }}
              >
                {PATIL_LETTERS.map((char, i) => (
                  <motion.span
                    key={`p-${i}`}
                    initial={{ opacity: 0, y: -22, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.65,
                      delay: 0.6 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      display: "inline-block",
                      transformOrigin: "50% 20%",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="text-text-lo text-lg md:text-xl max-w-lg"
              style={{ marginBottom: "2.5rem", lineHeight: 1.6 }}
            >
              Building the future with code, one algorithm at a time. Designing
              scalable AI systems and resilient architectures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
            >
              <MagneticButton className="bg-accent text-white font-bold px-8 py-3 rounded-full hover:bg-accent/90 shadow-[0_4px_16px_rgba(194,94,26,0.25)] transition-all">
                <a href="#projects">View Work</a>
              </MagneticButton>
              <MagneticButton className="bg-surface/80 border border-border text-text-hi px-8 py-3 rounded-full hover:bg-surface transition-all shadow-[0_2px_8px_rgba(140,115,90,0.06)]">
                <a href="#contact">Get In Touch</a>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--text-lo)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "32px",
            background: "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
