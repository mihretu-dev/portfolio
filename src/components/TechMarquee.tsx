"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaPython, FaAndroid, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiCplusplus,
  SiFramer,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: FaReact, color: "text-cyan-500 dark:text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900 dark:text-slate-100" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500 dark:text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500 dark:text-sky-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-500 dark:text-emerald-400" },
  { name: "Java", icon: FaJava, color: "text-amber-500 dark:text-amber-400" },
  { name: "Python", icon: FaPython, color: "text-yellow-500 dark:text-yellow-400" },
  { name: "Android / Kotlin", icon: FaAndroid, color: "text-emerald-500 dark:text-emerald-400" },
  { name: "MySQL", icon: SiMysql, color: "text-indigo-500 dark:text-indigo-400" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-600 dark:text-blue-500" },
  { name: "Framer Motion", icon: SiFramer, color: "text-pink-500 dark:text-pink-400" },
  { name: "Git", icon: FaGitAlt, color: "text-rose-500 dark:text-rose-400" },
];

export default function TechMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  // Quadruple items for 100% seamless infinite loop on any screen width
  const quadrupledStack = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-slate-200 dark:border-slate-800/60 bg-slate-50/60 dark:bg-slate-950/40 backdrop-blur-sm select-none">
      {/* Side Fade Mask Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-20" />

      {/* Animated Marquee Container */}
      <div
        className="flex overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-4 shrink-0"
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 32,
            repeat: Infinity,
          }}
        >
          {quadrupledStack.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${idx}`}
                className="group flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 dark:hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-default shrink-0 shadow-sm"
              >
                <Icon className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white font-mono tracking-wide">
                  {item.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
