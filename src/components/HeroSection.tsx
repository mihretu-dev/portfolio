"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FaReact, FaJava, FaPython, FaAndroid } from "react-icons/fa";
import { SiNextdotjs, SiMysql } from "react-icons/si";
import {
  ArrowRight,
  FileDown,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import TypewriterSubtitle from "@/components/TypewriterSubtitle";

const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const techStack = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "Android", icon: FaAndroid },
  { name: "MySQL", icon: SiMysql },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative space-y-8 md:pt-8 overflow-visible">
      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 md:gap-12"
      >
        {/* Left: Text Content */}
        <div className="space-y-7 max-w-3xl relative z-10 flex-1">
          {/* Main Name Heading & Subtitle */}
          <motion.div variants={heroItemVariants} className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950 dark:text-white">
              Mihretu Hizkel
            </h1>
            <TypewriterSubtitle />
          </motion.div>

          {/* Bio Text */}
          <motion.p variants={heroItemVariants} className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-normal">
            Engineering high-quality web solutions, software applications, and robust
            database systems. Focused on clean code, object-oriented architecture,
            and seamless AI integrations that drive real-world impact.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={heroItemVariants} className="pt-1 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              id="hero-view-projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md shadow-emerald-500/20"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href="/Mihretu_Hizkel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-view-resume"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all duration-200 group shadow-sm"
            >
              <FileDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
              View Resume/CV
            </motion.a>
            <motion.a
              href="#contact"
              id="hero-get-in-touch"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all duration-200 shadow-sm"
            >
              Get in Touch
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </motion.a>
          </motion.div>

          {/* Tech Stack Bar */}
          <motion.div variants={heroItemVariants} className="pt-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-1 font-semibold">
                Stack:
              </span>
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm cursor-default"
                  >
                    <Icon className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div variants={heroItemVariants} className="pt-4">
            <a
              href="#about"
              aria-label="Scroll down to About"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
            >
              <span>Scroll Down</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              </motion.div>
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Avatar */}
        <motion.div
          variants={heroItemVariants}
          className="relative shrink-0 flex justify-center md:justify-end"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
            {/* Glow ring behind avatar */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-indigo-500/30 blur-2xl scale-110 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-emerald-500/30 dark:border-emerald-500/40 shadow-xl shadow-emerald-500/10 dark:shadow-emerald-500/20 ring-1 ring-white/20 dark:ring-slate-800/40">
              <Image
                src="/avatar.jpg"
                alt="Mihretu Hizkel — Full-Stack Web & Android Developer"
                width={256}
                height={256}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
