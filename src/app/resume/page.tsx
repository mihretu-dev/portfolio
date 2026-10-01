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
  ExternalLink,
  FileDown,
  Award,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "@/components/ThemeToggle";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 print:bg-white print:text-slate-950 print:min-h-0 transition-colors duration-300">
      {/* ── Top Bar (Screen Only) ── */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3.5 px-4 sm:px-8 print:hidden transition-colors duration-300">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href="/Mihretu_Hizkel_Resume.pdf"
              download="Mihretu_Hizkel_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20"
            >
              <FileDown className="w-4 h-4" />
              Download PDF
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-200 font-medium text-xs sm:text-sm transition-all shadow-sm"
            >
              <Printer className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Print Page
            </button>
          </div>
        </div>
      </header>

      {/* ── Screen View: Rich Interactive Layout (Screen Only) ── */}
      <main className="max-w-5xl mx-auto p-4 sm:p-8 md:p-12 print:hidden">
        <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-md shadow-lg dark:shadow-2xl space-y-8 transition-colors duration-300">
          
          {/* Header Banner */}
          <div className="border-b border-slate-200 dark:border-slate-800/80 pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>resume.config.ts</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white uppercase">
                  MIHRETU HIZKEL
                </h1>
                <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">
                  Full-Stack Web &amp; Native Android Developer
                </p>
              </div>

              {/* Quick Contact Links */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                <a
                  href="mailto:mihretuhizkel380@gmail.com"
                  className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  mihretuhizkel380@gmail.com
                </a>
                <a
                  href="tel:+251961402380"
                  className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  +251961402380
                </a>
                <a
                  href="https://portfolio-tan-one-84.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  portfolio-tan-one-84.vercel.app
                </a>
                <a
                  href="https://github.com/mihretu-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  github.com/mihretu-dev
                </a>
                <a
                  href="https://www.linkedin.com/in/mihretu-hizkel-734105260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  LinkedIn
                </a>
                <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Hawassa, Ethiopia
                </span>
              </div>
            </div>
          </div>

          {/* 2-Column Body Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* ── Left Sidebar (4 cols) ── */}
            <aside className="md:col-span-4 space-y-8 border-r-0 md:border-r border-slate-200 dark:border-slate-800/80 md:pr-6">
              
              {/* Technical Stack */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                  <Code2 className="w-4 h-4" />
                  <span>// Tech Stack</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-200">Languages &amp; Core:</span>
                    <p className="text-slate-600 dark:text-slate-400 font-mono text-[11px] mt-0.5">
                      Kotlin, Java, TypeScript, JavaScript, Python, C++, SQL
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-200">Frameworks &amp; Mobile:</span>
                    <p className="text-slate-600 dark:text-slate-400 font-mono text-[11px] mt-0.5">
                      Android SDK, Jetpack Compose, Room DB, Next.js (App Router), React, Node.js, Tailwind CSS
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-slate-200">Cloud &amp; DevOps:</span>
                    <p className="text-slate-600 dark:text-slate-400 font-mono text-[11px] mt-0.5">
                      Vercel, EthioDeploy, Git/GitHub Actions, MySQL, PostgreSQL
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-600 dark:text-teal-400 uppercase font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>// Education</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                    Hawassa University
                  </h4>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    B.S. in Information Systems
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    2023 – 2026 | Hawassa, Ethiopia
                  </p>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 text-xs font-mono text-slate-700 dark:text-slate-300">
                    GPA: <span className="font-bold text-emerald-600 dark:text-emerald-400">3.19 / 4.00</span> • Exit Exam: <span className="font-bold text-cyan-600 dark:text-cyan-400">85%</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-indigo-600 dark:text-indigo-400 uppercase font-bold">
                  <Award className="w-4 h-4" />
                  <span>// Certifications</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-1 shadow-sm">
                    <h5 className="font-bold text-slate-900 dark:text-white">
                      Agri-Tech Innovator: Beta Testing Specialist
                    </h5>
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      FarmVizion • Issued Sep 2026
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-1 shadow-sm">
                    <h5 className="font-bold text-slate-900 dark:text-white">
                      CS50x: Introduction to Computer Science
                    </h5>
                    <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
                      Harvard University / CS50 • Passed
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-1 shadow-sm">
                    <h5 className="font-bold text-slate-900 dark:text-white">
                      B.S. in Information Systems
                    </h5>
                    <p className="text-[11px] text-teal-600 dark:text-teal-400 font-medium">
                      Hawassa University • Class of 2026
                    </p>
                  </div>
                </div>
              </div>

            </aside>

            {/* ── Main Content (8 cols) ── */}
            <main className="md:col-span-8 space-y-8">
              
              {/* Professional Summary */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                  <Terminal className="w-4 h-4" />
                  <span>// Professional Summary</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Information Systems graduate and Full-Stack &amp; Native Android Developer focused on building high-performance mobile applications (Kotlin, Jetpack Compose, Room DB) and scalable web platforms (Next.js, React, TypeScript). Experienced in pre-production QA, international beta testing for voice AI, and database-driven system architectures.
                </p>
              </div>

              {/* Work Experience */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                  <Briefcase className="w-4 h-4" />
                  <span>// Work Experience</span>
                </div>

                <div className="space-y-4">
                  {/* 1. AgriMocks */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h4 className="text-base font-bold text-slate-950 dark:text-white">
                          Sales and Marketing Intern
                        </h4>
                        <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          AgriMocks • Remote
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        Sep 2026 – Present
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                      Digital marketing campaigns, agricultural demographic engagement, international market research, and user acquisition strategies.
                    </p>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 pl-4 list-disc">
                      <li>Drive targeted digital marketing campaigns engaging diverse agricultural demographics and agri-tech user segments.</li>
                      <li>Conduct international market research and demographic analysis to optimize product positioning and user acquisition funnels.</li>
                      <li>Implement community outreach initiatives and data-informed growth strategies.</li>
                    </ul>
                  </div>

                  {/* 2. FarmVizion */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h4 className="text-base font-bold text-slate-950 dark:text-white">
                          Software Quality Assurance Tester
                        </h4>
                        <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                          FarmVizion • Remote
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        Sep 2026 – Present
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                      Pre-production QA, beta testing, and stability analysis for the FarmVizion Android app &amp; AIVA voice assistant across 176 countries; usability bug reporting and friction-point documentation.
                    </p>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 pl-4 list-disc">
                      <li>Execute pre-production QA cycles, stress testing, and stability audits for the FarmVizion Native Android app.</li>
                      <li>Evaluate AIVA voice assistant intent accuracy, latency, and reliability across user scenarios in 176 countries.</li>
                      <li>Identify UI/UX friction points, document reproduction steps for edge-case defects, and collaborate closely with engineering.</li>
                    </ul>
                  </div>

                  {/* 3. Freelance / Self-Employed */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h4 className="text-base font-bold text-slate-950 dark:text-white">
                          Full-Stack &amp; Native Android Developer
                        </h4>
                        <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                          Freelance / Self-Employed • Hybrid
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        Jan 2025 – Present
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                      Building offline-first Android apps with Kotlin, Jetpack Compose, Coroutines, and Room DB; developing high-performance full-stack web platforms using Next.js, React, TypeScript, Node.js, and Tailwind CSS.
                    </p>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 pl-4 list-disc">
                      <li>Architect offline-first Native Android apps leveraging Kotlin, Jetpack Compose, Room DB, and reactive StateFlow (MH WiFi Manager, TrainingHub).</li>
                      <li>Develop high-performance full-stack web platforms using Next.js (App Router), React, TypeScript, and Tailwind CSS.</li>
                      <li>Deploy production-ready solutions with CI/CD automation and direct APK release distribution.</li>
                    </ul>
                  </div>

                  {/* 4. South Ethiopia Finance Institute */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h4 className="text-base font-bold text-slate-950 dark:text-white">
                          Network Administrator Intern
                        </h4>
                        <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                          South Ethiopia Finance Institute ICT Sector • On-site
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        Jul 2025 – Sep 2025
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                      Network infrastructure support, database administration routines, and system maintenance.
                    </p>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 pl-4 list-disc">
                      <li>Provided ICT infrastructure administration, local router/switch diagnostics, and secure network provisioning.</li>
                      <li>Maintained routine database backups, MySQL integrity audits, and user access management.</li>
                      <li>Engineered an internal web portal to onboard and mentor incoming interns across the department.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Featured Projects */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                  <Briefcase className="w-4 h-4" />
                  <span>// Key Featured Projects</span>
                </div>

                <div className="space-y-4">
                  {/* BirrVoice Ledger */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-slate-950 dark:text-white flex items-center gap-2">
                          BirrVoice Ledger - Voice-First Financial Assistant
                          <a
                            href="https://sme-voice-assistant.ethiodeploy.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 font-mono"
                          >
                            [Demo] <ExternalLink className="w-3 h-3" />
                          </a>
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 shrink-0">
                        Next.js • Voice AI • Amharic NLP • EthioDeploy
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Voice-first financial ledger and inventory platform for Ethiopian shopkeepers. Translates spoken natural Amharic/English into structured transaction records and live cash-margin analytics.
                    </p>
                  </div>

                  {/* MH WiFi Manager */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-slate-950 dark:text-white flex items-center gap-2">
                          MH WiFi Manager - Local Device Governance App
                          <a
                            href="https://github.com/mihretu-dev/Wi-Fi-Device-Manager/releases/tag/v1.0.0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1 font-mono"
                          >
                            [APK] <ExternalLink className="w-3 h-3" />
                          </a>
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 shrink-0">
                        Kotlin • Jetpack Compose • Biometrics • APK
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Native Android network utility with biometric login, real-time client discovery, scheduled device blocking, and bandwidth speed testing.
                    </p>
                  </div>
                </div>
              </div>

            </main>

          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 text-center text-xs font-mono text-slate-500">
            Mihretu Hizkel — Developer Resume • Built with Next.js &amp; Tailwind CSS
          </div>

        </div>
      </main>

      {/* ── ATS-Friendly Print View (Exact Clean Resume Match) ── */}
      <div className="hidden print:block text-black font-sans text-[10px] leading-tight space-y-2.5 p-1">
        
        {/* Header */}
        <div className="space-y-1 border-b-2 border-black pb-2">
          <h1 className="text-2xl font-black uppercase tracking-tight text-black">
            MIHRETU HIZKEL
          </h1>
          <p className="text-[11px] font-bold text-black">
            Full-Stack Web &amp; Native Android Developer
          </p>
          <div className="text-[9.5px] text-slate-900 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 font-normal">
            <a href="mailto:mihretuhizkel380@gmail.com" className="text-black hover:underline">
              mihretuhizkel380@gmail.com
            </a>
            <span>+251961402380</span>
            <span>Hawassa, Ethiopia</span>
            <a href="https://portfolio-tan-one-84.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              portfolio-tan-one-84.vercel.app
            </a>
            <a href="https://github.com/mihretu-dev" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              github.com/mihretu-dev
            </a>
            <a href="https://www.linkedin.com/in/mihretu-hizkel-734105260/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              linkedin.com/in/mihretu-hizkel-734105260
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-0.5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-0.5">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-[9.5px] text-slate-900 leading-normal">
            Information Systems graduate and Full-Stack &amp; Native Android Developer focused on building high-performance mobile applications (Kotlin, Jetpack Compose, Room DB) and scalable web platforms (Next.js, React, TypeScript). Experienced in pre-production QA, international beta testing for voice AI, and database-driven system architectures.
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-1.5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-0.5">
            WORK EXPERIENCE
          </h2>

          {/* 1. AgriMocks */}
          <div>
            <div className="flex justify-between items-baseline text-[10px]">
              <strong className="text-black font-bold">
                Sales and Marketing Intern | AgriMocks (Remote)
              </strong>
              <span className="text-black font-semibold text-[9px]">
                Sep 2026 – Present
              </span>
            </div>
            <ul className="list-disc pl-4 text-[9.5px] text-slate-900 mt-0.5 space-y-0.5">
              <li>Drive digital marketing campaigns targeting agricultural demographics and user acquisition strategies.</li>
              <li>Conduct international market research to optimize product positioning and consumer outreach.</li>
            </ul>
          </div>

          {/* 2. FarmVizion */}
          <div>
            <div className="flex justify-between items-baseline text-[10px]">
              <strong className="text-black font-bold">
                Software Quality Assurance Tester | FarmVizion (Remote)
              </strong>
              <span className="text-black font-semibold text-[9px]">
                Sep 2026 – Present
              </span>
            </div>
            <ul className="list-disc pl-4 text-[9.5px] text-slate-900 mt-0.5 space-y-0.5">
              <li>Execute pre-production QA, beta testing, and stability audits for the FarmVizion Android app &amp; AIVA voice assistant across 176 countries.</li>
              <li>Document usability bug reports, reproduction steps, and stability analysis for engineering teams.</li>
            </ul>
          </div>

          {/* 3. Freelance */}
          <div>
            <div className="flex justify-between items-baseline text-[10px]">
              <strong className="text-black font-bold">
                Full-Stack &amp; Native Android Developer | Freelance / Self-Employed (Hybrid)
              </strong>
              <span className="text-black font-semibold text-[9px]">
                Jan 2025 – Present
              </span>
            </div>
            <ul className="list-disc pl-4 text-[9.5px] text-slate-900 mt-0.5 space-y-0.5">
              <li>Architect offline-first Native Android apps with Kotlin, Jetpack Compose, Coroutines, and Room DB.</li>
              <li>Develop high-performance full-stack web applications using Next.js, React, TypeScript, and Node.js.</li>
            </ul>
          </div>

          {/* 4. South Ethiopia Finance Institute */}
          <div>
            <div className="flex justify-between items-baseline text-[10px]">
              <strong className="text-black font-bold">
                Network Administrator Intern | South Ethiopia Finance Institute ICT Sector (On-site)
              </strong>
              <span className="text-black font-semibold text-[9px]">
                Jul 2025 – Sep 2025
              </span>
            </div>
            <ul className="list-disc pl-4 text-[9.5px] text-slate-900 mt-0.5 space-y-0.5">
              <li>Provided ICT network infrastructure support, database administration routines, and system maintenance.</li>
              <li>Developed an internal web portal to onboard and mentor incoming interns.</li>
            </ul>
          </div>
        </div>

        {/* Certifications & Credentials */}
        <div className="space-y-1">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-0.5">
            CERTIFICATIONS &amp; CREDENTIALS
          </h2>
          <div className="space-y-0.5 text-[9.5px]">
            <p>
              <strong className="text-black font-bold">Agri-Tech Innovator: Beta Testing Specialist</strong> — FarmVizion (Issued Sep 2026)
            </p>
            <p>
              <strong className="text-black font-bold">CS50x: Introduction to Computer Science</strong> — Harvard University / CS50 (Passed)
            </p>
            <p>
              <strong className="text-black font-bold">B.S. in Information Systems</strong> — Hawassa University (Graduated Class of 2026)
            </p>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-1">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-0.5">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-0.5 text-[9.5px]">
            <p>
              <strong className="text-black font-bold">Languages &amp; Core:</strong> Kotlin, Java, TypeScript, JavaScript, Python, C++, SQL
            </p>
            <p>
              <strong className="text-black font-bold">Frameworks &amp; Mobile:</strong> Android SDK, Jetpack Compose, Room DB, Next.js, React, Node.js, Tailwind CSS
            </p>
            <p>
              <strong className="text-black font-bold">Cloud &amp; Databases:</strong> Vercel, EthioDeploy, Git/GitHub Actions, MySQL, PostgreSQL
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-0.5">
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black border-b border-slate-300 pb-0.5">
            EDUCATION
          </h2>
          <div>
            <div className="flex justify-between items-baseline text-[10px]">
              <strong className="text-black font-bold">
                Hawassa University — Bachelor of Science in Information Systems
              </strong>
              <span className="text-black font-semibold text-[9.5px]">
                2023 – 2026 | Hawassa, Ethiopia
              </span>
            </div>
            <p className="text-[9.5px] text-slate-900 mt-0.5">
              Graduated Class of 2026 • Cumulative GPA: 3.19 / 4.00 • National Exit Exam Score: 85%
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
