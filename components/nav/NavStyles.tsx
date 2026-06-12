"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

// ─── Hook: mount only client-side ───────────────────────────────────────────
function usePortalMounted(delay = 0) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return mounted;
}

// ─── Vertical Side-Rail Nav ──────────────────────────────────────────────────

export function NavbarVertical({ activeSection }: { activeSection: string }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const mounted = usePortalMounted(1900);
  if (!mounted) return null;

  const content = (
    <>
      {/* Logo — top left */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
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
        }}
      >
        VP
      </motion.a>

      {/* Side rail */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Side navigation"
        style={{
          position: "fixed",
          left: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9990,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1.4rem",
        }}
      >
        {/* Vertical track */}
        <div
          style={{
            position: "absolute",
            left: "6px",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "rgba(255,255,255,0.12)",
            borderRadius: "1px",
          }}
        />

        {links.map((link, idx) => {
          const isActive = activeSection === link.href.substring(1);
          const isHovered = hoveredIdx === idx;

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
                gap: "0.75rem",
                textDecoration: "none",
                position: "relative",
              }}
            >
              {/* Dot */}
              <motion.div
                animate={{
                  scale: isActive ? 1.8 : isHovered ? 1.4 : 1,
                  backgroundColor: isActive
                    ? "var(--accent)"
                    : isHovered
                    ? "rgba(74,240,255,0.6)"
                    : "rgba(255,255,255,0.35)",
                  boxShadow: isActive
                    ? "0 0 10px 3px rgba(74,240,255,0.6)"
                    : "none",
                }}
                transition={{ duration: 0.2 }}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />

              {/* Label */}
              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.span
                    key="label"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: isActive ? "var(--accent)" : "var(--text-hi)",
                      whiteSpace: "nowrap",
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

      {/* Mobile — bottom pill (hidden on md+ via media query) */}
      <MobilePill activeSection={activeSection} />
    </>
  );

  return createPortal(content, document.body);
}

// ─── Top Horizontal Nav ──────────────────────────────────────────────────────

export function NavbarTop({
  activeSection,
  scrolled,
}: {
  activeSection: string;
  scrolled: boolean;
}) {
  const mounted = usePortalMounted(1900);
  if (!mounted) return null;

  const content = (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9990,
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        background: scrolled ? "rgba(6,6,8,0.75)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.05)"
          : "1px solid transparent",
        transition: "background 0.4s, backdrop-filter 0.4s, border-color 0.4s",
      }}
      aria-label="Top navigation"
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#home"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 900,
            fontSize: "1.1rem",
            letterSpacing: "-0.05em",
            color: "var(--accent)",
            textDecoration: "none",
          }}
        >
          VP
        </a>

        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--accent)" : "var(--text-lo)",
                  textDecoration: "none",
                  position: "relative",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.target as HTMLElement).style.color = "var(--text-hi)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.target as HTMLElement).style.color = "var(--text-lo)";
                }}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="top-nav-indicator"
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: "var(--accent)",
                      boxShadow: "0 0 6px var(--accent)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );

  return createPortal(content, document.body);
}

// ─── Mobile Bottom Pill ──────────────────────────────────────────────────────

function MobilePill({ activeSection }: { activeSection: string }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9990,
        background: "rgba(17,17,17,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "9999px",
        padding: "0.6rem 1.2rem",
        display: "flex",
        gap: "1.2rem",
        alignItems: "center",
      }}
      className="md:hidden"
    >
      {links.map((link) => {
        const isActive = activeSection === link.href.substring(1);
        return (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.name}
            style={{ display: "flex", alignItems: "center" }}
          >
            <motion.div
              animate={{
                scale: isActive ? 1.5 : 1,
                backgroundColor: isActive
                  ? "var(--accent)"
                  : "rgba(255,255,255,0.25)",
                boxShadow: isActive
                  ? "0 0 6px 2px rgba(74,240,255,0.4)"
                  : "none",
              }}
              transition={{ duration: 0.2 }}
              style={{ width: "6px", height: "6px", borderRadius: "50%" }}
            />
          </a>
        );
      })}
    </div>
  );
}
