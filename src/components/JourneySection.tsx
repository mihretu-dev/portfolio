"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { milestones } from "@/data/journey";

export default function JourneySection() {
  return (
    <motion.section
      id="journey"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-10 scroll-mt-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-2"
      >
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Background &amp; Growth</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
          Education &amp; Journey
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
          My academic background and path in software engineering &amp; web development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Featured Education Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm space-y-6 relative overflow-hidden shadow-sm dark:shadow-xl"
        >
          <div className="absolute top-0 right-0 p-6 opacity-[0.04] pointer-events-none select-none">
            <GraduationCap className="w-40 h-40 text-emerald-500 dark:text-emerald-300" />
          </div>
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

          <div className="flex items-center justify-between gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
              Graduated Class of 2026
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">
              B.S. in Information Systems
            </h3>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
              <span>Hawassa University</span>
            </p>
          </div>

          <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800/60">
            <div className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase">
              Highlights &amp; Coursework
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Object-Oriented Programming (Java/C++)",
                "Database Architecture (MySQL)",
                "Web & Mobile Application Development",
                "Systems Analysis & Design",
              ].map((course) => (
                <span
                  key={course}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Timeline Milestones */}
        <div className="lg:col-span-7 space-y-5 relative pl-4 sm:pl-6 border-l border-slate-200 dark:border-slate-800/80 ml-2 sm:ml-4">
          {milestones.map((milestone, idx) => {
            const MilestoneIcon = milestone.icon;
            return (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative group space-y-2 p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all shadow-sm dark:shadow-md"
              >
                {/* Timeline Node Bullet */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-2 border-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-500/50 group-hover:scale-125 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                </div>

                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg border ${milestone.accent}`}>
                      <MilestoneIcon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                      {milestone.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400">
                    {milestone.tag}
                  </span>
                </div>

                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 pl-8">
                  {milestone.subtitle}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-8">
                  {milestone.description}
                </p>

                {/* Tech Badges */}
                {milestone.tech && milestone.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pl-8 pt-2">
                    {milestone.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-[10px] font-medium text-emerald-600 dark:text-emerald-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
