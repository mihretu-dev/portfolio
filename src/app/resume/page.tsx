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
            Print / Save ATS PDF
          </button>
        </div>
      </header>

      {/* ── Screen View: Rich Interactive Dark Layout (Screen Only) ── */}
      <main className="max-w-5xl mx-auto p-4 sm:p-8 md:p-12 print:hidden">
        <div className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-md shadow-2xl space-y-8">
          
          {/* Header Banner */}
          <div className="border-b border-slate-800/80 pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>resume.config.ts</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                  Mihretu Hizkel
                </h1>
                <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  Full-Stack Web &amp; Software Developer
                </p>
              </div>

              {/* Quick Contact Links */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-400">
                <a
                  href="mailto:mihretuhizkel380@gmail.com"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  mihretuhizkel380@gmail.com
                </a>
                <a
                  href="https://github.com/mihretu-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5 text-cyan-400" />
                  github.com/mihretu-dev
                </a>
                <a
                  href="https://www.linkedin.com/in/mihretu-hizkel-734105260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-cyan-400" />
                  LinkedIn
                </a>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Ethiopia
                </span>
              </div>
            </div>
          </div>

          {/* 2-Column Body Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* ── Left Sidebar (4 cols) ── */}
            <aside className="md:col-span-4 space-y-8 border-r-0 md:border-r border-slate-800/80 md:pr-6">
              
              {/* Technical Stack */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
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
                      className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs font-mono font-medium text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>// Education</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <h4 className="text-sm font-bold text-white">
                    B.S. in Information Systems
                  </h4>
                  <p className="text-xs font-medium text-emerald-400">
                    Hawassa University
                  </p>
                  <p className="text-[11px] font-mono text-slate-400">
                    Graduated Class of 2026
                  </p>
                </div>
              </div>

              {/* Core Disciplines */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold">
                  <Layers className="w-4 h-4" />
                  <span>// Core Focus</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Full-Stack Web Engineering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Native Android Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>Relational Database Architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>AI Integrations &amp; Automation</span>
                  </li>
                </ul>
              </div>

            </aside>

            {/* ── Main Content (8 cols) ── */}
            <main className="md:col-span-8 space-y-8">
              
              {/* Professional Summary */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold">
                  <Terminal className="w-4 h-4" />
                  <span>// Professional Summary</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Passionate Information Systems graduate and Full-Stack Software Developer focused on building high-performance web applications, native Android tools, and enterprise database systems. Adept in modern JavaScript/TypeScript ecosystems, Java OOP architecture, and clean RESTful API integration.
                </p>
              </div>

              {/* Selected Projects */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
                  <Briefcase className="w-4 h-4" />
                  <span>// Featured Projects</span>
                </div>

                <div className="space-y-4">
                  
                  {/* 1. Java HR System */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white">
                          Java HR System
                        </h4>
                        <p className="text-xs font-medium text-emerald-400">
                          Java-based Human Resource Management Application
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 shrink-0">
                        Java / MySQL
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Comprehensive enterprise system built with pure Java OOP principles for employee record management, payroll processing, department hierarchies, and relational MySQL persistence.
                    </p>
                  </div>

                  {/* 2. GPA Calculator */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white">
                          GPA Calculator
                        </h4>
                        <p className="text-xs font-medium text-cyan-400">
                          Academic Performance &amp; Grade Simulation Tool
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 shrink-0">
                        Next.js / Vercel Live
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Interactive web app designed for students to calculate course grades, simulate cumulative GPA scenarios, and visualize semester progression. Deployed live on Vercel.
                    </p>
                  </div>

                  {/* 3. AI Resume Builder */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white">
                          AI Resume Builder
                        </h4>
                        <p className="text-xs font-medium text-purple-400">
                          AI-Powered Career &amp; Resume Generator
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 shrink-0">
                        Next.js / LLM APIs
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Intelligent web app that parses raw developer experience text, optimizes content using LLM APIs, formats tailored PDF resumes, and exports structured JSON portfolio schemas.
                    </p>
                  </div>

                  {/* 4. Home Workout Android App */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white">
                          Home Workout Android App
                        </h4>
                        <p className="text-xs font-medium text-green-400">
                          Offline-First Fitness &amp; Custom Workout Tracker
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 shrink-0">
                        Kotlin / Jetpack Compose
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Modern, offline-first Android fitness application featuring custom exercise routine builders, local data persistence via Room DB, and reactive Jetpack Compose UI.
                    </p>
                  </div>

                  {/* 5. QR Hotel Menu System */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white">
                          QR Hotel Menu &amp; Ordering System
                        </h4>
                        <p className="text-xs font-medium text-amber-400">
                          Contactless Restaurant Ordering Platform
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 shrink-0">
                        React / Node.js / MySQL
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Web platform enabling guests to scan table QR codes, browse dynamic menus, customize orders, and transmit tickets directly to the kitchen dashboard.
                    </p>
                  </div>

                  {/* 6. Instagram Follower Analyzer */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white">
                          Instagram Follower Analyzer
                        </h4>
                        <p className="text-xs font-medium text-pink-400">
                          Client-Side Connection &amp; Follower Analytics Tool
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 shrink-0">
                        React / Tailwind CSS
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Sleek, private, 100% client-side Instagram follower analyzer &amp; connection timeline tool. Track unfollowers, mutual connections, and follow history with zero login credentials required.
                    </p>
                  </div>

                </div>
              </div>

            </main>

          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t border-slate-800/80 text-center text-xs font-mono text-slate-500">
            Mihretu Hizkel — Developer Resume • Built with Next.js &amp; Tailwind CSS
          </div>

        </div>
      </main>

      {/* ── ATS-Friendly Print View (Print Only: Single-Column, Clean, 1-Page Fit) ── */}
      <div className="hidden print:block text-black font-sans text-[10.5px] leading-tight space-y-2.5 p-2">
        
        {/* Header */}
        <div className="text-center space-y-0.5 border-b border-black pb-1.5">
          <h1 className="text-xl font-extrabold uppercase tracking-tight text-black">
            Mihretu Hizkel
          </h1>
          <p className="text-[11px] font-semibold text-slate-800">
            Full-Stack Web &amp; Software Developer
          </p>
          <div className="text-[10px] text-slate-700 flex flex-wrap justify-center items-center gap-x-2 gap-y-0.5 font-normal">
            <span>mihretuhizkel380@gmail.com</span>
            <span>•</span>
            <span>github.com/mihretu-dev</span>
            <span>•</span>
            <span>linkedin.com/in/mihretu-hizkel-734105260</span>
            <span>•</span>
            <span>Ethiopia</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-0.5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-400 pb-0.5">
            Professional Summary
          </h2>
          <p className="text-[10px] text-slate-800 leading-normal">
            Information Systems graduate and Full-Stack Software Developer focused on building high-performance web applications, native Android tools, and enterprise database systems. Skilled in TypeScript, React, Next.js, Java OOP architecture, Kotlin/Android, and RESTful API integration.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-0.5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-400 pb-0.5">
            Technical Skills
          </h2>
          <div className="space-y-0.5 text-[10px]">
            <p>
              <strong className="text-black">Languages:</strong> Java, Python, JavaScript, TypeScript, Kotlin, C++, SQL
            </p>
            <p>
              <strong className="text-black">Frameworks &amp; Tools:</strong> Next.js, React, Node.js, Android SDK, Jetpack Compose, Tailwind CSS, Git
            </p>
            <p>
              <strong className="text-black">Databases &amp; Architecture:</strong> MySQL, Room DB, Relational Schema Design, RESTful APIs, OOP Architecture
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-0.5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-400 pb-0.5">
            Education
          </h2>
          <div className="flex justify-between items-baseline text-[10px]">
            <div>
              <strong className="text-black">Bachelor of Science in Information Systems</strong>
              <span className="text-slate-700"> — Hawassa University</span>
            </div>
            <span className="text-slate-600 font-mono text-[9.5px]">Graduated Class of 2026</span>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-1.5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-400 pb-0.5">
            Featured Projects
          </h2>
          <div className="space-y-1.5">
            
            <div>
              <div className="flex justify-between items-baseline text-[10px]">
                <strong className="text-black">Home Workout Android App</strong>
                <span className="text-slate-600 font-mono text-[9.5px]">Kotlin, Jetpack Compose, Room DB</span>
              </div>
              <p className="text-[9.5px] text-slate-800 leading-snug">
                Offline-first Android fitness application featuring custom exercise routine builders, local Room DB persistence, and reactive Jetpack Compose UI. Released v1.0.0 production APK.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline text-[10px]">
                <strong className="text-black">AI Resume Builder</strong>
                <span className="text-slate-600 font-mono text-[9.5px]">Next.js, TypeScript, LLM APIs</span>
              </div>
              <p className="text-[9.5px] text-slate-800 leading-snug">
                Intelligent web app that parses developer experience text, optimizes content using LLM APIs, and formats tailored PDF resumes and structured portfolio schemas.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline text-[10px]">
                <strong className="text-black">Java HR System</strong>
                <span className="text-slate-600 font-mono text-[9.5px]">Java, MySQL</span>
              </div>
              <p className="text-[9.5px] text-slate-800 leading-snug">
                Enterprise human resource management application built with Java OOP principles for employee payroll processing, department management, and relational database persistence.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline text-[10px]">
                <strong className="text-black">Instagram Follower Analyzer</strong>
                <span className="text-slate-600 font-mono text-[9.5px]">React, JavaScript, Tailwind CSS</span>
              </div>
              <p className="text-[9.5px] text-slate-800 leading-snug">
                100% client-side Instagram connection &amp; follower analytics tool tracking unfollowers, mutual connections, and follow history with zero server data uploads.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline text-[10.5px]">
                <strong className="text-black">QR Hotel Menu &amp; Ordering System</strong>
                <span className="text-slate-600 font-mono text-[9.5px]">React, Node.js, MySQL</span>
              </div>
              <p className="text-[9.5px] text-slate-800 leading-snug">
                Contactless digital menu and order management platform enabling table QR code scanning and direct kitchen ticket transmission.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline text-[10px]">
                <strong className="text-black">MH GPA Calculator v2</strong>
                <span className="text-slate-600 font-mono text-[9.5px]">Next.js, Vercel Live</span>
              </div>
              <p className="text-[9.5px] text-slate-800 leading-snug">
                Interactive web application for calculating course grades, simulating cumulative CGPA scenarios, and tracking semester progression. Deployed live on Vercel.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
