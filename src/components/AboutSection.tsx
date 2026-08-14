"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Heart, Sparkles, Smartphone, Code2 } from "lucide-react";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-20"
    >
      <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm shadow-sm dark:shadow-lg overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          {/* Section label */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            <Heart className="w-3.5 h-3.5" />
            <span>Who I Am</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
            About Me
          </h2>

          {/* Bio paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
            <p>
              I&apos;ve been deeply fascinated by software engineering ever since I was young. 
              My journey into programming truly ignited during the COVID-19 pandemic when a close 
              friend and I began experimenting and building Android apps from scratch. That early 
              curiosity quickly evolved into a dedicated passion for creating high-performance, 
              user-centric digital solutions.
            </p>
            <p>
              I earned my B.S. in Information Systems from Hawassa University, solidifying my foundations 
              in object-oriented programming, data structures, and database architecture. Today, I build 
              modern, offline-first Native Android applications with Kotlin and Jetpack Compose, as well as 
              scalable full-stack web platforms using Next.js, React, TypeScript, and Node.js. 
              I care deeply about clean code design, responsive aesthetics, and engineering software 
              that solves real-world challenges.
            </p>
          </div>

          {/* Quick facts */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs font-medium text-slate-600 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              Hawassa, Ethiopia
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs font-medium text-slate-600 dark:text-slate-400">
              <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
              Android &amp; Mobile
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 text-xs font-medium text-slate-600 dark:text-slate-400">
              <Code2 className="w-3.5 h-3.5 text-emerald-500" />
              Full-Stack Web
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
