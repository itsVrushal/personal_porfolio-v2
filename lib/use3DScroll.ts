"use client";

import { useRef } from "react";
import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface Use3DScrollOptions {
  /** rotateX degrees at the start (before entering view). Default: 10 */
  initialRotateX?: number;
  /** translateY px at the start. Default: 60 */
  initialY?: number;
  /** Scroll range offset (start, end) as viewport fractions. Default: [0.05, 0.3] */
  range?: [number, number];
  /** Spring config for smoothing */
  spring?: { stiffness?: number; damping?: number };
}

export interface ScrollTransformValues {
  ref: React.RefObject<HTMLElement | null>;
  rotateX: MotionValue<number>;
  translateY: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

export function use3DScroll(options: Use3DScrollOptions = {}): ScrollTransformValues {
  const {
    initialRotateX = 10,
    initialY = 60,
    range = [0.05, 0.32],
    spring = { stiffness: 60, damping: 20 },
  } = options;

  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map [0..range[0]] -> initial values (entering)
  // [range[0]..0.75] -> fully visible
  // [0.75..1] -> exiting (flying towards screen)
  const rawRotateX = useTransform(
    scrollYProgress,
    [0, range[0], 0.75, 1],
    [initialRotateX, 0, 0, -8]
  );
  
  const rawTranslateY = useTransform(
    scrollYProgress,
    [0, range[0], 0.75, 1],
    [initialY, 0, 0, -100]
  );
  
  const rawOpacity = useTransform(
    scrollYProgress,
    [0, range[0], 0.7, 0.95],
    [0, 1, 1, 0]
  );
  
  const rawScale = useTransform(
    scrollYProgress,
    [0, range[0], 0.75, 1],
    [0.9, 1, 1, 1.3]
  );

  const rotateX = useSpring(rawRotateX, spring);
  const translateY = useSpring(rawTranslateY, spring);
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 25 });
  const scale = useSpring(rawScale, spring);

  return { ref, rotateX, translateY, opacity, scale };
}
