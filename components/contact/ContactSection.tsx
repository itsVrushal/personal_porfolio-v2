"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import SectionLabel from "../ui/SectionLabel";
import MagneticButton from "../ui/MagneticButton";
import { personalInfo } from "@/lib/data";
import { use3DScroll } from "@/lib/use3DScroll";

export default function ContactSection() {
  const { ref, rotateX, translateY, opacity, scale } = use3DScroll({
    initialRotateX: 6,
    initialY: 40,
    range: [0.05, 0.25],
  });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 relative"
      style={{ rotateX, y: translateY, opacity, scale }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center mb-6">
            <SectionLabel label="Contact" />
          </div>
          <h2 className="font-syne text-5xl md:text-7xl font-bold text-text-hi mb-6 tracking-tighter">
            Let&apos;s build something.
          </h2>
          <p className="text-text-lo text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Open to collaborations, and solving real-world problems.
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <MagneticButton
                onClick={handleCopyEmail}
                className="font-mono text-lg md:text-2xl text-accent border-b border-accent pb-1 hover:text-white hover:border-white transition-colors"
              >
                {personalInfo.email}
              </MagneticButton>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface border border-white/[0.1] text-text-hi text-xs py-1 px-3 rounded-full font-mono"
                >
                  Copied!
                </motion.div>
              )}
            </div>

            <div className="flex gap-6 mt-8">
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-lo hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-lo hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center font-mono text-[10px] text-text-lo tracking-widest uppercase">
        &copy; {new Date().getFullYear()} {personalInfo.name} &middot; Made in Pune
      </div>
    </motion.section>
  );
}
