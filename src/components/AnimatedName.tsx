"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedName() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Loop animation every 5.0 seconds (2.0s line draw + 0.5s fill + 2.5s hold pause)
    const interval = setInterval(() => {
      setAnimKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative inline-block w-full max-w-3xl py-1 select-none overflow-visible"
    >
      <svg
        key={animKey}
        viewBox="0 0 760 100"
        className="w-full h-auto max-h-[110px] overflow-visible"
        aria-label="Mihretu Hizkel"
      >
        <defs>
          {/* Animated Stroke Gradient */}
          <linearGradient id="name-stroke-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" /> {/* emerald-400 */}
            <stop offset="50%" stopColor="#22d3ee" /> {/* cyan-400 */}
            <stop offset="100%" stopColor="#818cf8" /> {/* indigo-400 */}
          </linearGradient>

          {/* Solid White/Slate Fill Gradient */}
          <linearGradient id="name-fill-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>

          {/* Cyan Glow Filter */}
          <filter id="name-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Background Outline Ghost Stroke */}
        <text
          x="0"
          y="72"
          fontSize="68"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          letterSpacing="-1.5"
          fill="none"
          stroke="#1e293b"
          strokeWidth="3"
        >
          Mihretu Hizkel
        </text>

        {/* 2. Soft Glowing Outer Stroke */}
        <motion.text
          x="0"
          y="72"
          fontSize="68"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          letterSpacing="-1.5"
          fill="none"
          stroke="url(#name-stroke-grad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#name-glow)"
          initial={{ strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0.8 }}
          animate={{ strokeDashoffset: 0, opacity: 1 }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
        >
          Mihretu Hizkel
        </motion.text>

        {/* 3. Sharp Foreground Line Drawing Stroke */}
        <motion.text
          x="0"
          y="72"
          fontSize="68"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          letterSpacing="-1.5"
          fill="none"
          stroke="url(#name-stroke-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
        >
          Mihretu Hizkel
        </motion.text>

        {/* 4. Solid Fill Reveal on Draw Completion */}
        <motion.text
          x="0"
          y="72"
          fontSize="68"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          letterSpacing="-1.5"
          fill="url(#name-fill-grad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
        >
          Mihretu Hizkel
        </motion.text>
      </svg>
    </div>
  );
}
