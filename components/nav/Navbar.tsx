"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const links = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects",   href: "#projects" },
  { name: "Stack",      href: "#stack" },
  { name: "Contact",    href: "#contact" },
];

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);
  return activeSection;
}

function useMounted(delay = 0) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return mounted;
}

// Spring configs
const dotSpring   = { type: "spring", stiffness: 380, damping: 22, mass: 0.8 } as const;
const labelSpring = { type: "spring", stiffness: 300, damping: 24, mass: 0.6 } as const;

export default function Navbar() {
  const activeSection = useActiveSection();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const mounted = useMounted(1900);

  if (!mounted) return null;

  const content = (
    <>
      {/* ── Logo ─────────────────────────────────────────────── */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: "1.5rem",
          left: "1.5rem",
          zIndex: 9990,
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 900,
          fontSize: "1.1rem",
          letterSpacing: "-0.05em",
          color: "var(--accent)",
          textDecoration: "none",
          lineHeight: 1,
        }}
      >
        VP
      </motion.a>

      {/* ── Side Rail ────────────────────────────────────────────
          Wrapper div owns the fixed+centering so framer-motion's
          own transform on motion.nav never clobbers translateY(-50%).
      ─────────────────────────────────────────────────────────── */}
      <div
        className="hidden md:block"
        style={{
          position: "fixed",
          left: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9990,
        }}
      >
        <motion.nav
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Side navigation"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1.5rem",
            position: "relative",
          }}
        >
          {/* track line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "5px",
              top: "-0.5rem",
              bottom: "-0.5rem",
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.14) 20%, rgba(255,255,255,0.14) 80%, transparent)",
              borderRadius: "1px",
            }}
          />

          {links.map((link, idx) => {
            const isActive = activeSection === link.href.substring(1);
            const isHovered = hoveredIdx === idx;
            const showLabel = isActive || isHovered;

            return (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                aria-label={link.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  textDecoration: "none",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                {/* ── Dot ── */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.75 : isHovered ? 1.35 : 1,
                    backgroundColor: isActive
                      ? "var(--accent)"
                      : isHovered
                      ? "rgba(74,240,255,0.55)"
                      : "rgba(255,255,255,0.32)",
                    boxShadow: isActive
                      ? "0 0 10px 4px rgba(74,240,255,0.55)"
                      : "none",
                  }}
                  transition={dotSpring}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    willChange: "transform",
                  }}
                />

                {/* ── Label ── */}
                <AnimatePresence mode="wait">
                  {showLabel && (
                    <motion.span
                      key={link.name}
                      initial={{ opacity: 0, x: -10, scale: 0.88 }}
                      animate={{ opacity: 1, x: 0,   scale: 1    }}
                      exit={{    opacity: 0, x: -8,   scale: 0.92 }}
                      transition={labelSpring}
                      style={{
                        fontFamily:    "var(--font-mono), monospace",
                        fontSize:      "0.6rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color:         isActive ? "var(--accent)" : "var(--text-hi)",
                        whiteSpace:    "nowrap",
                        willChange:    "transform, opacity",
                      }}
                    >
                      {link.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </motion.nav>
      </div>
    </>
  );

  return createPortal(content, document.body);
}
