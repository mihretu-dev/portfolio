"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Terminal,
} from "lucide-react";
import {
  experiences,
  certifications,
  educationInfo,
} from "@/data/journey";

export default function JourneySection() {
  const [activeTab, setActiveTab] = useState<"experience" | "credentials" | "all">("all");

  return (
    <motion.section
      id="journey"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-12 scroll-mt-20"
    >
      {/* Section Header with Category Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-2"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career &amp; Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Experience &amp; Milestones
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Professional roles, verified certifications, and academic background in software engineering.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium self-start md:self-end">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "all"
                ? "bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-sm font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            All Overview
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "experience"
                ? "bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-sm font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            Experience ({experiences.length})
          </button>
          <button
            onClick={() => setActiveTab("credentials")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "credentials"
                ? "bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-sm font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            Certifications ({certifications.length})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Education & Certifications Highlight */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Featured Academic Education Card */}
          {(activeTab === "all" || activeTab === "credentials") && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm space-y-5 relative overflow-hidden shadow-sm dark:shadow-xl"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none select-none">
                <GraduationCap className="w-40 h-40 text-emerald-500 dark:text-emerald-300" />
              </div>
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

              <div className="flex items-center justify-between gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
                  {educationInfo.status}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  {educationInfo.degree}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <span>{educationInfo.institution}</span>
                  <span>•</span>
                  <span className="text-xs font-mono">{educationInfo.location}</span>
                </p>
              </div>

              {/* Academic Performance Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Cumulative CGPA
                  </span>
                  <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                    {educationInfo.gpa}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    National Exit Exam
                  </span>
                  <span className="text-base font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
                    {educationInfo.exitExamScore}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800/60">
                <div className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">
                  Key Coursework &amp; Topics
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {educationInfo.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Certifications Card Group */}
          {(activeTab === "all" || activeTab === "credentials") && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-indigo-600 dark:text-indigo-400 uppercase font-bold px-1">
                <Award className="w-4 h-4" />
                <span>Certifications &amp; Credentials</span>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => {
                  const CertIcon = cert.icon;
                  return (
                    <div
                      key={cert.id}
                      className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-2 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className={`p-2 rounded-xl border ${cert.accent}`}>
                            <CertIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-950 dark:text-white leading-snug">
                              {cert.title}
                            </h4>
                            <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 shrink-0">
                          {cert.issued}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-10">
                        {cert.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

        </div>

        {/* Right Column: Work Experience Timeline */}
        <div
          className={`${
            activeTab === "experience"
              ? "lg:col-span-12"
              : activeTab === "credentials"
              ? "hidden"
              : "lg:col-span-7"
          } space-y-5 relative pl-4 sm:pl-6 border-l border-slate-200 dark:border-slate-800/80 ml-2 sm:ml-4`}
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase font-bold mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Professional Work Experience</span>
          </div>

          {experiences.map((exp, idx) => {
            const ExpIcon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group space-y-3 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm dark:shadow-md"
              >
                {/* Timeline Node Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-2 border-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-500/50 group-hover:scale-125 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                </div>

                {/* Header: Company & Mode Badge */}
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-xl border ${exp.accent}`}>
                      <ExpIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span className="text-slate-500 dark:text-slate-400 font-normal">{exp.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${exp.badgeColor} font-semibold`}>
                      {exp.workMode}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Focus summary */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-1 sm:pl-2 font-medium">
                  {exp.focus}
                </p>

                {/* Detailed Highlights */}
                <ul className="space-y-1.5 pl-1 sm:pl-2 pt-1 border-t border-slate-100 dark:border-slate-800/60">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-1 text-emerald-500 shrink-0 text-[10px]">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pl-1 sm:pl-2 pt-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-[10px] font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
