"use client";

import React from "react";
import Link from "next/link";
import {
  Printer,
  ArrowLeft,
  Mail,
  MapPin,
  GraduationCap,
  Code2,
  Terminal,
  Briefcase,
  Layers,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 print:bg-white print:text-slate-950 print:min-h-0">
      {/* ── Top Bar (Screen Only) ── */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3.5 px-4 sm:px-8 print:hidden">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35"
          >
            <Printer className="w-4 h-4" />
            Print / Save PDF
          </button>
        </div>
      </header>

      {/* ── Main Resume Document ── */}
      <main className="max-w-5xl mx-auto p-4 sm:p-8 md:p-12 print:p-0 print:max-w-none">
        <div className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-md shadow-2xl space-y-8 print:bg-white print:border-none print:shadow-none print:p-0 print:text-slate-900">
          
          {/* Header Banner */}
          <div className="border-b border-slate-800/80 print:border-slate-300 pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 print:text-cyan-800">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>resume.config.ts</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white print:text-slate-950">
                  Mihretu Hizkel
                </h1>
                <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent print:text-cyan-800">
                  Full-Stack Web &amp; Software Developer
                </p>
              </div>

              {/* Quick Contact Links */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-400 print:text-slate-700">
                <a
                  href="mailto:mihretuhizkel380@gmail.com"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-slate-950" />
                  mihretuhizkel380@gmail.com
                </a>
                <a
                  href="https://github.com/mihretu-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5 text-cyan-400 print:text-slate-950" />
                  github.com/mihretu-dev
                </a>
                <a
                  href="https://www.linkedin.com/in/mihretu-hizkel-734105260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-cyan-400 print:text-slate-950" />
                  LinkedIn
                </a>
                <span className="flex items-center gap-1.5 text-slate-400 print:text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-slate-950" />
                  Ethiopia
                </span>
              </div>
            </div>
          </div>

          {/* 2-Column Body Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 print:grid-cols-12">
            
            {/* ── Left Sidebar (4 cols) ── */}
            <aside className="md:col-span-4 space-y-8 border-r-0 md:border-r border-slate-800/80 print:border-slate-300 md:pr-6 print:col-span-4">
              
              {/* Technical Stack */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 print:text-emerald-800 uppercase font-bold">
                  <Code2 className="w-4 h-4" />
                  <span>// Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Java",
                    "Python",
                    "JavaScript",
                    "TypeScript",
                    "Kotlin",
                    "C++",
                    "Next.js",
                    "React",
                    "Node.js",
                    "Android SDK",
                    "MySQL",
                    "Tailwind CSS",
                    "Git",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-mono font-medium text-slate-200 print:bg-slate-100 print:border-slate-300 print:text-slate-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-indigo-400 print:text-indigo-800 uppercase font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>// Education</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 print:bg-slate-50 print:border-slate-200 space-y-1">
                  <h4 className="text-sm font-bold text-white print:text-slate-950">
                    B.S. in Information Systems
                  </h4>
                  <p className="text-xs font-medium text-emerald-400 print:text-emerald-800">
                    Hawassa University
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 print:text-slate-600">
                    Graduated Class of 2026
                  </p>
                </div>
              </div>

              {/* Core Disciplines */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 print:text-cyan-800 uppercase font-bold">
                  <Layers className="w-4 h-4" />
                  <span>// Core Focus</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300 print:text-slate-800">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 print:bg-emerald-600" />
                    <span>Full-Stack Web Engineering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 print:bg-cyan-600" />
                    <span>Native Android Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 print:bg-indigo-600" />
                    <span>Relational Database Architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 print:bg-purple-600" />
                    <span>AI Integrations &amp; Automation</span>
                  </li>
                </ul>
              </div>

            </aside>

            {/* ── Main Content (8 cols) ── */}
            <main className="md:col-span-8 space-y-8 print:col-span-8">
              
              {/* Professional Summary */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 print:text-cyan-800 uppercase font-bold">
                  <Terminal className="w-4 h-4" />
                  <span>// Professional Summary</span>
                </div>
                <p className="text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                  Passionate Information Systems graduate and Full-Stack Software Developer focused on building high-performance web applications, native Android tools, and enterprise database systems. Adept in modern JavaScript/TypeScript ecosystems, Java OOP architecture, and clean RESTful API integration.
                </p>
              </div>

              {/* Selected Projects */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 print:text-emerald-800 uppercase font-bold">
                  <Briefcase className="w-4 h-4" />
                  <span>// Featured Projects</span>
                </div>

                <div className="space-y-4">
                  
                  {/* 1. Java HR System */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 print:bg-slate-50 print:border-slate-200 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white print:text-slate-950">
                          Java HR System
                        </h4>
                        <p className="text-xs font-medium text-emerald-400 print:text-emerald-800">
                          Java-based Human Resource Management Application
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 print:bg-slate-200 text-slate-300 print:text-slate-800 shrink-0">
                        Java / MySQL
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                      Comprehensive enterprise system built with pure Java OOP principles for employee record management, payroll processing, department hierarchies, and relational MySQL persistence.
                    </p>
                  </div>

                  {/* 2. GPA Calculator */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 print:bg-slate-50 print:border-slate-200 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white print:text-slate-950">
                          GPA Calculator
                        </h4>
                        <p className="text-xs font-medium text-cyan-400 print:text-cyan-800">
                          Academic Performance &amp; Grade Simulation Tool
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 print:bg-slate-200 text-slate-300 print:text-slate-800 shrink-0">
                        Next.js / Netlify Live
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                      Interactive web app designed for students to calculate course grades, simulate cumulative GPA scenarios, and visualize semester progression. Deployed live on Netlify.
                    </p>
                  </div>

                  {/* 3. AI Resume Builder */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 print:bg-slate-50 print:border-slate-200 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white print:text-slate-950">
                          AI Resume Builder
                        </h4>
                        <p className="text-xs font-medium text-purple-400 print:text-purple-800">
                          AI-Powered Career &amp; Resume Generator
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 print:bg-slate-200 text-slate-300 print:text-slate-800 shrink-0">
                        Next.js / LLM APIs
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                      Intelligent web app that parses raw developer experience text, optimizes content using LLM APIs, formats tailored PDF resumes, and exports structured JSON portfolio schemas.
                    </p>
                  </div>

                  {/* 4. Campus Companion Android App */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 print:bg-slate-50 print:border-slate-200 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white print:text-slate-950">
                          Campus Companion Android App
                        </h4>
                        <p className="text-xs font-medium text-green-400 print:text-green-800">
                          Native Mobile Academic &amp; Schedule Tracker
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 print:bg-slate-200 text-slate-300 print:text-slate-800 shrink-0">
                        Kotlin / Room DB
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                      Native Android application featuring offline-first local storage via Room DB, course grade simulation, and push notifications for university class schedules.
                    </p>
                  </div>

                  {/* 5. QR Hotel Menu System */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 print:bg-slate-50 print:border-slate-200 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white print:text-slate-950">
                          QR Hotel Menu &amp; Ordering System
                        </h4>
                        <p className="text-xs font-medium text-amber-400 print:text-amber-800">
                          Contactless Restaurant Ordering Platform
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 print:bg-slate-200 text-slate-300 print:text-slate-800 shrink-0">
                        React / Node.js / MySQL
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">
                      Web platform enabling guests to scan table QR codes, browse dynamic menus, customize orders, and transmit tickets directly to the kitchen dashboard.
                    </p>
                  </div>

                </div>
              </div>

            </main>

          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t border-slate-800/80 print:border-slate-300 text-center text-xs font-mono text-slate-500 print:text-slate-600">
            Mihretu Hizkel — Developer Resume • Built with Next.js &amp; Tailwind CSS
          </div>

        </div>
      </main>
    </div>
  );
}
