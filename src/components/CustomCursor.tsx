"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth trailing spring values for outer ring
  const springConfig = { damping: 28, stiffness: 280, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Mobile/touch guard: disable on coarse pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.getAttribute("role") === "button";

      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block" aria-hidden="true">
      {/* Outer Spring Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-50 shadow-lg"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 54 : 36,
          height: isHovered ? 54 : 36,
          borderColor: isHovered ? "rgba(52, 211, 153, 0.8)" : "rgba(34, 211, 238, 0.6)",
          backgroundColor: isHovered ? "rgba(52, 211, 153, 0.15)" : "rgba(34, 211, 238, 0.08)",
          boxShadow: isHovered
            ? "0 0 20px rgba(52, 211, 153, 0.5)"
            : "0 0 12px rgba(34, 211, 238, 0.4)",
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
      />

      {/* Inner Dot (Instant follower) */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? "#34d399" : "#22d3ee",
          boxShadow: isHovered
            ? "0 0 10px rgba(52, 211, 153, 0.9)"
            : "0 0 8px rgba(34, 211, 238, 0.8)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </div>
  );
}
