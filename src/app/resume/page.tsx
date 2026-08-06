"use client";

import React from "react";
import Link from "next/link";
import {
  Printer,
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  Globe,
  GraduationCap,
  Code2,
  Terminal,
  Briefcase,
  Layers,
  ExternalLink,
  FileDown,
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

          <div className="flex items-center gap-3">
            <a
              href="/Mihretu_Hizkel_Resume.pdf"
              download="Mihretu_Hizkel_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20"
            >
              <FileDown className="w-4 h-4" />
              Download PDF
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium text-xs sm:text-sm transition-all"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              Print Page
            </button>
          </div>
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
                  MIHRETU HIZKEL
                </h1>
                <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  Full-Stack Web &amp; Android Developer
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
                  href="tel:+251961402380"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  +251961402380
                </a>
                <a
                  href="https://portfolio-tan-one-84.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  portfolio-tan-one-84.vercel.app
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
                  Hawassa, Ethiopia
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
                <div className="space-y-2 text-xs text-slate-300">
                  <div>
                    <span className="font-bold text-slate-200">Languages &amp; Core:</span>
                    <p className="text-slate-400 font-mono text-[11px] mt-0.5">
                      Java, Kotlin, TypeScript, JavaScript, Python, C++, SQL
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-200">Frameworks &amp; Libraries:</span>
                    <p className="text-slate-400 font-mono text-[11px] mt-0.5">
                      Next.js, React, Node.js, Android SDK, Jetpack Compose, Tailwind CSS
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-200">Cloud &amp; DevOps:</span>
                    <p className="text-slate-400 font-mono text-[11px] mt-0.5">
                      Vercel, Git/GitHub Actions, PostgreSQL
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Academic Metrics */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>// Education</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <h4 className="text-sm font-bold text-white">
                    Hawassa University
                  </h4>
                  <p className="text-xs font-medium text-emerald-400">
                    Bachelor of Science in Information System
                  </p>
                  <p className="text-[11px] font-mono text-slate-400">
                    2023-03 — 2026-06 | Hawassa, Ethiopia
                  </p>
                  <div className="pt-2 border-t border-slate-800/80 text-xs font-mono text-slate-300">
                    GPA: <span className="font-bold text-emerald-400">3.19 / 4.00</span> With National Exit Exam Score of <span className="font-bold text-cyan-400">85%</span>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold">
                  <Briefcase className="w-4 h-4" />
                  <span>// Work Experience</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                  <h4 className="text-xs font-bold text-white">
                    ICT, Networking sector intern
                  </h4>
                  <p className="text-xs font-medium text-teal-400">
                    South Ethiopia Finance Bureau
                  </p>
                  <p className="text-[10px] font-mono text-slate-400">
                    2025-07 — 2025-09 (South, Ethiopia)
                  </p>
                  <p className="text-xs text-slate-300 pt-1">
                    • Made a website that mentors new interns in this sector
                  </p>
                </div>
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
                  Information Systems graduate and Full-Stack Software Developer focused on building high-performance web applications, native Android tools, and enterprise database systems. Skilled in Java, Kotlin, TypeScript, React, Next.js, Android SDK, and relational MySQL architecture.
                </p>
              </div>

              {/* Key Projects */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">
                  <Briefcase className="w-4 h-4" />
                  <span>// Key Projects</span>
                </div>

                <div className="space-y-4">
                  
                  {/* 1. GPA Calculator */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          GPA Calculator - Academic Performance Tool
                          <a
                            href="https://gpa-calculator-nu-nine.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-1 font-mono"
                          >
                            [Link] <ExternalLink className="w-3 h-3" />
                          </a>
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 shrink-0">
                        Next.js • TypeScript • Tailwind CSS • React
                      </span>
                    </div>
                    <p className="text-xs italic text-slate-400">
                      Interactive web app designed for students to calculate course grades, simulate cumulative GPA scenarios, and visualize semester progression. Deployed live on Vercel
                    </p>
                    <ul className="text-xs text-slate-300 space-y-1 pl-4 list-disc">
                      <li>Real-time weighted credit calculation and dynamic target GPA forecasting.</li>
                      <li>Clean, distraction-free interface built with Next.js and Tailwind CSS.</li>
                      <li>Local state persistence for instant session saving and quick updates.</li>
                    </ul>
                  </div>

                  {/* 2. AI Resume Builder */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          AI Resume Builder - AI-Powered Career &amp; Resume Generator
                          <a
                            href="https://github.com/mihretu-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-1 font-mono"
                          >
                            [Link] <ExternalLink className="w-3 h-3" />
                          </a>
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 shrink-0">
                        React • Next.js • Tailwind CSS • Gemini API
                      </span>
                    </div>
                    <p className="text-xs italic text-slate-400">
                      Intelligent web app that parses raw developer experience text, optimizes content using LLM APIs, formats tailored PDF resumes, and exports structured JSON portfolio schemas.
                    </p>
                    <ul className="text-xs text-slate-300 space-y-1 pl-4 list-disc">
                      <li>LLM-driven resume optimization and automated skill extraction from raw text.</li>
                      <li>Structured JSON schema export for seamless personal portfolio synchronization.</li>
                      <li>Real-time PDF document rendering with customizable minimalist themes.</li>
                    </ul>
                  </div>

                  {/* 3. Instagram Analyzer */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white flex items-center gap-2">
                          Instagram Analyzer - Client-Side Connection Analytics Tool
                          <a
                            href="https://insta-analyzer-rho.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-1 font-mono"
                          >
                            [Link] <ExternalLink className="w-3 h-3" />
                          </a>
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 shrink-0">
                        React • JavaScript • Tailwind CSS
                      </span>
                    </div>
                    <p className="text-xs italic text-slate-400">
                      Sleek, private, 100% client-side Instagram follower analyzer &amp; connection timeline tool. Track unfollowers, mutual connections, and follow history with zero login credentials required.
                    </p>
                    <ul className="text-xs text-slate-300 space-y-1 pl-4 list-disc">
                      <li>100% client-side data parsing — zero login credentials or server uploads required for complete privacy.</li>
                      <li>Comprehensive analytics for unfollowers, non-followers, mutual connections, and account fans.</li>
                      <li>Interactive follow timeline and engagement analytics built with React and Tailwind CSS.</li>
                    </ul>
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

      {/* ── ATS-Friendly Print View (Exact Template Match) ── */}
      <div className="hidden print:block text-black font-sans text-[10px] leading-tight space-y-2.5 p-1">
        
        {/* Header */}
        <div className="space-y-1 border-b-2 border-black pb-2">
          <h1 className="text-2xl font-black uppercase tracking-tight text-black">
            MIHRETU HIZKEL
          </h1>
          <p className="text-[11px] font-bold text-black">
            Full-Stack Web &amp; Android Developer
          </p>
          <div className="text-[9.5px] text-slate-900 flex flex-wrap items-center gap-x-2 gap-y-0.5 font-normal">
            <a href="mailto:mihretuhizkel380@gmail.com" className="text-black hover:underline">
              mihretuhizkel380@gmail.com
            </a>
            <span>+251961402380</span>
            <span>Hawassa, Ethiopia</span>
            <a href="https://portfolio-tan-one-84.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              portfolio-tan-one-84.vercel.app/
            </a>
            <a href="https://www.linkedin.com/in/mihretu-hizkel-734105260/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              www.linkedin.com/in/mihretu-hizkel-734105260/
            </a>
            <a href="https://github.com/mihretu-dev" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              github.com/mihretu-dev
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-1">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-0.5">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-[9.5px] text-slate-900 leading-normal">
            Information Systems graduate and Full-Stack Software Developer focused on building high-performance web applications, native Android tools, and enterprise database systems. Skilled in Java, Kotlin, TypeScript, React, Next.js, Android SDK, and relational MySQL architecture.
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-1">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-0.5">
            WORK EXPERIENCE
          </h2>
          <div>
            <div className="flex justify-between items-baseline text-[10px]">
              <strong className="text-black font-bold">
                ICT, Networking sector intern | South Ethiopia Finance Bureau
              </strong>
              <span className="text-black font-semibold text-[9.5px]">
                2025-07 — 2025-09 (South, Ethiopia)
              </span>
            </div>
            <ul className="list-disc pl-4 text-[9.5px] text-slate-900 mt-0.5">
              <li>Made a website that mentors new interns in this sector</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-1">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-0.5">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-0.5 text-[9.5px]">
            <p>
              <strong className="text-black font-bold">Languages &amp; Core:</strong> Java, Kotlin, TypeScript, JavaScript, Python, C++, SQL
            </p>
            <p>
              <strong className="text-black font-bold">Frameworks &amp; Libraries:</strong> Next.js, React, Node.js, Android SDK, Jetpack Compose, Tailwind CSS
            </p>
            <p>
              <strong className="text-black font-bold">Cloud &amp; DevOps:</strong> Vercel, Git/GitHub Actions, PostgreSQL
            </p>
          </div>
        </div>

        {/* Key Projects */}
        <div className="space-y-2">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-0.5">
            KEY PROJECTS
          </h2>
          <div className="space-y-2">
            
            {/* 1. GPA Calculator */}
            <div>
              <div className="flex justify-between items-baseline text-[10px]">
                <div>
                  <strong className="text-black font-bold">GPA Calculator - Academic Performance Tool</strong>{" "}
                  <a href="https://gpa-calculator-nu-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-[9px]">
                    [Link]
                  </a>
                </div>
                <span className="text-black text-[9px]">
                  Next.js • TypeScript • Tailwind CSS • React
                </span>
              </div>
              <p className="text-[9px] italic text-slate-800 mt-0.5">
                Interactive web app designed for students to calculate course grades, simulate cumulative GPA scenarios, and visualize semester progression. Deployed live on Vercel
              </p>
              <ul className="list-disc pl-4 text-[9px] text-slate-900 mt-0.5 space-y-0.5">
                <li>Real-time weighted credit calculation and dynamic target GPA forecasting.</li>
                <li>Clean, distraction-free interface built with Next.js and Tailwind CSS.</li>
                <li>Local state persistence for instant session saving and quick updates.</li>
              </ul>
            </div>

            {/* 2. AI Resume Builder */}
            <div>
              <div className="flex justify-between items-baseline text-[10px]">
                <div>
                  <strong className="text-black font-bold">AI Resume Builder - AI-Powered Career &amp; Resume Generator</strong>{" "}
                  <a href="https://github.com/mihretu-dev" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-[9px]">
                    [Link]
                  </a>
                </div>
                <span className="text-black text-[9px]">
                  React • Next.js • Tailwind CSS • Gemini API
                </span>
              </div>
              <p className="text-[9px] italic text-slate-800 mt-0.5">
                Intelligent web app that parses raw developer experience text, optimizes content using LLM APIs, formats tailored PDF resumes, and exports structured JSON portfolio schemas.
              </p>
              <ul className="list-disc pl-4 text-[9px] text-slate-900 mt-0.5 space-y-0.5">
                <li>LLM-driven resume optimization and automated skill extraction from raw text.</li>
                <li>Structured JSON schema export for seamless personal portfolio synchronization.</li>
                <li>Real-time PDF document rendering with customizable minimalist themes.</li>
              </ul>
            </div>

            {/* 3. Instagram Analyzer */}
            <div>
              <div className="flex justify-between items-baseline text-[10px]">
                <div>
                  <strong className="text-black font-bold">Instagram Analyzer - Client-Side Connection Analytics Tool</strong>{" "}
                  <a href="https://insta-analyzer-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-[9px]">
                    [Link]
                  </a>
                </div>
                <span className="text-black text-[9px]">
                  React • JavaScript • Tailwind CSS
                </span>
              </div>
              <p className="text-[9px] italic text-slate-800 mt-0.5">
                Sleek, private, 100% client-side Instagram follower analyzer &amp; connection timeline tool. Track unfollowers, mutual connections, and follow history with zero login credentials required.
              </p>
              <ul className="list-disc pl-4 text-[9px] text-slate-900 mt-0.5 space-y-0.5">
                <li>100% client-side data parsing — zero login credentials or server uploads required for complete privacy.</li>
                <li>Comprehensive analytics for unfollowers, non-followers, mutual connections, and account fans.</li>
                <li>Interactive follow timeline and engagement analytics built with React and Tailwind CSS.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Education */}
        <div className="space-y-1">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-0.5">
            EDUCATION
          </h2>
          <div>
            <div className="flex justify-between items-baseline text-[10px]">
              <strong className="text-black font-bold">
                Hawassa University — Bachelor of Science in Information System
              </strong>
              <span className="text-black font-semibold text-[9.5px]">
                2023-03 — 2026-06 | Hawassa, Ethiopia
              </span>
            </div>
            <p className="text-[9.5px] text-slate-900 mt-0.5">
              GPA: 3.19 / 4.00 With National Exit Exam Score of 85%
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
