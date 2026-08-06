"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaReact, FaJava, FaPython, FaAndroid } from "react-icons/fa";
import { SiNextdotjs, SiMysql } from "react-icons/si";
import React, { useState, type FormEvent } from "react";
import { motion, AnimatePresence, useScroll, useSpring, type Variants } from "framer-motion";
import Link from "next/link";
import Starfield from "@/components/Starfield";
import CustomCursor from "@/components/CustomCursor";
import AnimatedName from "@/components/AnimatedName";
import TechMarquee from "@/components/TechMarquee";
import TypewriterSubtitle from "@/components/TypewriterSubtitle";
import {
  Code2,
  Cpu,
  Database,
  Sparkles,
  Mail,
  ExternalLink,
  ArrowRight,
  Check,
  Copy,
  Terminal,
  Layers,
  Briefcase,
  ChevronRight,
  ChevronDown,
  Send,
  User,
  Users,
  MessageSquare,
  AlertCircle,
  Loader2,
  FileDown,
  Smartphone,
  GraduationCap,
  BookOpen,
  Compass,
  X,
  Maximize2,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const disciplines = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building responsive, high-performance web applications with modern frontend frameworks and scalable Node.js backend services.",
    icon: Code2,
    tech: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    accent: "from-emerald-500/20 to-teal-500/10",
    borderGlow: "group-hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    iconGlow: "group-hover:shadow-emerald-500/20",
  },
  {
    title: "Software & Systems Engineering",
    description:
      "Architecting robust object-oriented systems with strong emphasis on design patterns, performance, and clean code principles.",
    icon: Cpu,
    tech: ["Java", "C++", "OOP", "Systems Design"],
    accent: "from-blue-500/20 to-cyan-500/10",
    borderGlow: "group-hover:border-blue-500/50",
    iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    iconGlow: "group-hover:shadow-blue-500/20",
  },
  {
    title: "Database Architecture",
    description:
      "Designing relational schemas, optimizing complex queries, and ensuring data integrity across all application tiers.",
    icon: Database,
    tech: ["MySQL", "Relational Database Design"],
    accent: "from-indigo-500/20 to-purple-500/10",
    borderGlow: "group-hover:border-indigo-500/50",
    iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    iconGlow: "group-hover:shadow-indigo-500/20",
  },
  {
    title: "AI Integration & Workflows",
    description:
      "Integrating modern AI APIs, crafting efficient prompt pipelines, and automating intelligent developer workflows with Python.",
    icon: Sparkles,
    tech: ["Python", "AI APIs", "Prompt Engineering"],
    accent: "from-purple-500/20 to-pink-500/10",
    borderGlow: "group-hover:border-purple-500/50",
    iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    iconGlow: "group-hover:shadow-purple-500/20",
  },
  {
    title: "Android / Mobile Development",
    description:
      "Developing native and cross-platform mobile applications with emphasis on responsive UI layouts, efficient lifecycle management, and REST API integration.",
    icon: Smartphone,
    tech: ["Android SDK", "Java", "Kotlin", "Mobile UI", "REST APIs"],
    accent: "from-amber-500/20 to-emerald-500/10",
    borderGlow: "group-hover:border-amber-500/50",
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    iconGlow: "group-hover:shadow-amber-500/20",
  },
];

const projects = [
  {
    title: "HR System",
    tagline: "Java-based Human Resource Management Application",
    description:
      "A comprehensive enterprise system designed for managing employee records, payroll calculation, department hierarchies, and role-based access control — built from the ground up with Java OOP principles.",
    highlights: [
      "Architected with pure Java using OOP design patterns and modular separation of concerns.",
      "Integrated relational database persistence layer with optimized MySQL queries.",
      "Features automated salary reporting, attendance tracking, and full audit logging.",
    ],
    tech: ["Java", "OOP", "MySQL", "Systems Design"],
    github: "https://github.com/mihretu-dev/HRSystem",
    liveDemo: undefined,
    image: "/projects/hr-system.png",
    icon: Briefcase,
    accentColor: "emerald",
    spotlightGlow: "rgba(52, 211, 153, 0.22), rgba(16, 185, 129, 0.08)",
    hoverBorder: "hover:border-emerald-500/50",
    badgeColor: "text-emerald-400",
  },
  {
    title: "GPA Calculator",
    tagline: "Academic Performance & GPA Tracking Tool",
    description:
      "An intuitive web utility designed for students to track course grades, simulate cumulative GPA scenarios, and visualize semester academic progression in real time.",
    highlights: [
      "Real-time weighted credit calculation and dynamic target GPA forecasting.",
      "Clean, distraction-free interface built with Next.js and Tailwind CSS.",
      "Local state persistence for instant session saving and quick updates.",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/mihretu-dev/GPA_Calculator",
    liveDemo: "https://gpa-calculator-nu-nine.vercel.app/",
    image: "/projects/gpa-calculator.png",
    icon: Terminal,
    accentColor: "blue",
    spotlightGlow: "rgba(59, 130, 246, 0.22), rgba(14, 165, 233, 0.08)",
    hoverBorder: "hover:border-blue-500/50",
    badgeColor: "text-blue-400",
  },
  {
    title: "AI Resume Builder",
    tagline: "AI-Powered Career & Resume Generator",
    description:
      "An intelligent web app that parses raw developer experience, formats tailored PDF resumes, and outputs custom JSON portfolio schemas using LLM APIs.",
    highlights: [
      "LLM-driven resume optimization and automated skill extraction from raw text.",
      "Real-time PDF document rendering with customizable minimalist themes.",
      "Structured JSON schema export for seamless personal portfolio synchronization.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI APIs"],
    github: "https://github.com/mihretu-dev/ai-resume-builder",
    liveDemo: "https://ai-resume-builder-wr7g.vercel.app/",
    image: "/projects/ai-resume-builder.png",
    icon: Sparkles,
    accentColor: "purple",
    spotlightGlow: "rgba(168, 85, 247, 0.25), rgba(236, 72, 153, 0.08)",
    hoverBorder: "hover:border-purple-500/50",
    badgeColor: "text-purple-400",
  },
  {
    title: "Home Workout Android App",
    tagline: "Offline-First Fitness & Custom Workout Tracker",
    description:
      "A modern, offline-first Android fitness and custom workout tracking application built with Jetpack Compose, Room DB, and clean MVVM architecture.",
    highlights: [
      "Built with Jetpack Compose for modern reactive UI and Jetpack Room for offline-first data persistence.",
      "Custom workout routine builder with exercise logging and progress tracking.",
      "Structured MVVM architecture using Kotlin Coroutines, StateFlow, and ViewModel.",
      "Official v1.0.0 Android APK release binary available for direct download.",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Room DB", "v1.0.0 APK Released"],
    github: "https://github.com/mihretu-dev/HomeWorkoutApp",
    liveDemo: undefined,
    apkDownload: "https://github.com/mihretu-dev/HomeWorkoutApp/releases/download/v1.0.0/app-production-release-unsigned.apk",
    image: "/projects/home-workout.png",
    icon: Smartphone,
    accentColor: "emerald",
    spotlightGlow: "rgba(34, 197, 94, 0.22), rgba(20, 184, 166, 0.08)",
    hoverBorder: "hover:border-green-500/50",
    badgeColor: "text-green-400",
  },
  {
    title: "QR Hotel Menu & Ordering System",
    tagline: "Contactless Restaurant Ordering Platform",
    description:
      "A web platform enabling hotel guests to scan table QR codes, browse dynamic digital menus, customize orders, and transmit tickets directly to the kitchen.",
    highlights: [
      "Dynamic table-specific QR code scanning for instant contactless menu access.",
      "Real-time kitchen order management dashboard with status tracking.",
      "Role-based administrative control for menu pricing, availability, and categories.",
    ],
    tech: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com/mihretu-dev/qr-hotel-menu",
    liveDemo: "https://qr-hotel-menu-cyan.vercel.app/",
    image: "/projects/qr-hotel-menu.png",
    icon: Cpu,
    accentColor: "amber",
    spotlightGlow: "rgba(245, 158, 11, 0.25), rgba(239, 68, 68, 0.08)",
    hoverBorder: "hover:border-amber-500/50",
    badgeColor: "text-amber-400",
  },
  {
    title: "Instagram Follower Analyzer",
    tagline: "Client-Side Connection & Follower Analytics Tool",
    description:
      "A sleek, private, 100% client-side Instagram follower analyzer & connection timeline tool built with React JS. Track unfollowers, fans, mutual connections, and follow history with zero data uploads or login required.",
    highlights: [
      "100% client-side data parsing — zero login credentials or server uploads required for complete privacy.",
      "Comprehensive analytics for unfollowers, non-followers, mutual connections, and account fans.",
      "Interactive follow timeline and engagement analytics built with React and Tailwind CSS.",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Analytics"],
    github: "https://github.com/mihretu-dev/Insta_analyzer",
    liveDemo: "https://insta-analyzer-rho.vercel.app/",
    image: "/projects/insta-analyzer.png",
    icon: Users,
    accentColor: "pink",
    spotlightGlow: "rgba(236, 72, 153, 0.25), rgba(244, 63, 94, 0.08)",
    hoverBorder: "hover:border-pink-500/50",
    badgeColor: "text-pink-400",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

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

// ─── Component ───────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  const [copied, setCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const email = "mihretuhizkel380@gmail.com";

  // Lock body scroll & Escape key modal dismiss
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Card Mouse Spotlight Tracker
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--spotlight-x", `${x}px`);
    e.currentTarget.style.setProperty("--spotlight-y", `${y}px`);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "6e277c6d-b945-4716-a5c7-6ab58ca409e0",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 4000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 4000);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">

      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500 z-50 origin-left shadow-sm shadow-emerald-500/50"
        style={{ scaleX }}
      />

      {/* ── Ambient Radial Background ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-slate-950" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#0f172a_0%,#020617_100%)] opacity-90" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-slate-900/30 blur-3xl pointer-events-none rounded-full" />
      </div>

      {/* ── Navigation ── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/75 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="Home">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold transition-colors group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50">
              MH
            </div>
            <span className="hidden sm:block text-sm font-semibold tracking-widest text-slate-300 group-hover:text-white transition-colors">
              MIHRETU HIZKEL
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
            {["Disciplines", "Projects", "Journey", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-slate-100 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-emerald-400 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/mihretu-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 rounded-lg border border-transparent hover:border-slate-700/60 transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mihretu-hizkel-734105260/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/80 rounded-lg border border-transparent hover:border-slate-700/60 transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/mh_mire_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-pink-400 hover:bg-slate-800/80 rounded-lg border border-transparent hover:border-slate-700/60 transition-all"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/Mihretu_H"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/80 rounded-lg border border-transparent hover:border-slate-700/60 transition-all"
              aria-label="Telegram Profile"
            >
              <FaTelegram className="w-4 h-4" />
            </a>
            <Link
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-full transition-all"
              aria-label="View Resume/CV"
            >
              <FileDown className="w-3.5 h-3.5" />
              Resume/CV
            </Link>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-full transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-24 md:space-y-32">

        {/* ═══ HERO ═══════════════════════════════════════════════════════ */}
        <section id="hero" className="relative space-y-8 md:pt-8 overflow-visible">

          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="show"
            className="space-y-7 max-w-3xl relative z-10"
          >
            {/* Developer Status Meta Line */}
            <motion.div variants={heroItemVariants}>
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800/80 text-xs font-mono text-slate-400 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>location: Hawassa, ET</span>
                <span className="text-slate-700">•</span>
                <span>focus: Full-Stack &amp; Native Android</span>
              </div>
            </motion.div>

            {/* Main Name Heading & Subtitle */}
            <motion.div variants={heroItemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                Mihretu Hizkel
              </h1>
              <TypewriterSubtitle />
            </motion.div>

            {/* 4. Bio Text Paragraph */}
            <motion.p variants={heroItemVariants} className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
              Engineering high-quality web solutions, software applications, and robust
              database systems. Focused on clean code, object-oriented architecture,
              and seamless AI integrations that drive real-world impact.
            </motion.p>

            {/* 5. Action Buttons */}
            <motion.div variants={heroItemVariants} className="pt-1 flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                id="hero-view-projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
              <motion.a
                href="/Mihretu_Hizkel_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Mihretu_Hizkel_Resume.pdf"
                id="hero-view-resume"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium text-sm transition-all duration-200 group"
              >
                <FileDown className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
                View Resume/CV
              </motion.a>
              <motion.a
                href="#contact"
                id="hero-get-in-touch"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium text-sm transition-all duration-200"
              >
                Get in Touch
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </motion.a>
            </motion.div>

            {/* 6. Clean Horizontal Tech Stack Bar */}
            <motion.div variants={heroItemVariants} className="pt-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-1 font-semibold">
                  Stack:
                </span>
                {[
                  { name: "React", icon: FaReact },
                  { name: "Next.js", icon: SiNextdotjs },
                  { name: "Java", icon: FaJava },
                  { name: "Python", icon: FaPython },
                  { name: "Android", icon: FaAndroid },
                  { name: "MySQL", icon: SiMysql },
                ].map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 text-xs font-mono font-medium hover:border-slate-700 hover:text-white transition-all shadow-sm cursor-default"
                    >
                      <Icon className="w-3.5 h-3.5 text-slate-400" />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Bouncing Scroll Down Indicator */}
            <motion.div variants={heroItemVariants} className="pt-4">
              <a
                href="#disciplines"
                aria-label="Scroll down to Disciplines"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-emerald-400 transition-colors group"
              >
                <span>Scroll Down</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-4 h-4 text-emerald-400" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══ TECH STACK MARQUEE ═══════════════════════════════════════════ */}
        <TechMarquee />

        {/* ═══ DISCIPLINES ═════════════════════════════════════════════════ */}
        <motion.section
          id="disciplines"
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
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Disciplines &amp; Expertise
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              Core focus areas spanning full-stack web applications, systems engineering,
              data architecture, and AI-driven automation workflows.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {disciplines.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  onMouseMove={handleCardMouseMove}
                  className={`group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 ${item.borderGlow} backdrop-blur-sm transition-all duration-300 shadow-lg cursor-default overflow-hidden`}
                >
                  {/* Interactive Mouse Spotlight Layer */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{
                      background: `radial-gradient(450px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(34, 211, 238, 0.14), rgba(168, 85, 247, 0.08), transparent 80%)`,
                    }}
                  />

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />

                  <div className="relative z-10 space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 shadow-lg ${item.iconBg} ${item.iconGlow} transition-shadow duration-300`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-slate-600 group-hover:text-slate-500 transition-colors mt-1">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 group-hover:text-slate-400 leading-relaxed transition-colors">
                        {item.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/70 border border-slate-700/50 text-xs font-medium text-slate-300 group-hover:border-slate-600/80 group-hover:text-slate-200 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ═══ FEATURED PROJECTS ════════════════════════════════════════════ */}
        <motion.section
          id="projects"
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
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              A selection of projects demonstrating enterprise system design, clean UI
              development, and algorithmic problem solving.
            </p>
          </motion.div>

          {/* Responsive Compact Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => {
              const ProjectIcon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  onClick={() => setSelectedProject(project)}
                  onMouseMove={handleCardMouseMove}
                  className={`group relative flex flex-col justify-between p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 ${project.hoverBorder} backdrop-blur-sm transition-all duration-300 shadow-xl cursor-pointer overflow-hidden`}
                >
                  {/* Interactive Mouse Spotlight Layer with Custom Flash Color */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{
                      background: `radial-gradient(450px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), ${project.spotlightGlow}, transparent 80%)`,
                    }}
                  />

                  {/* Thumbnail Browser Frame */}
                  <div className="relative z-10 space-y-4">
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950/90 shadow-md group-hover:border-slate-700 transition-colors">
                      <div className="px-3 py-1.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                          <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 truncate">
                          {project.title.toLowerCase().replace(/\s+/g, "")}.demo
                        </span>
                      </div>
                      <div className="relative aspect-video overflow-hidden bg-slate-950">
                        <img
                          src={project.image}
                          alt={`${project.title} Preview`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <ProjectIcon className={`w-4 h-4 ${project.badgeColor} shrink-0`} />
                        <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors truncate">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400 font-medium line-clamp-1">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Tech Badges & View Details */}
                  <div className="relative z-10 pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5 min-w-0">
                      {project.tech.slice(0, 4).map((t) => {
                        const isApkBadge = t.includes("APK");
                        return (
                          <span
                            key={t}
                            className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${
                              isApkBadge
                                ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold"
                                : "bg-slate-800/80 border border-slate-700/50 text-slate-300"
                            }`}
                          >
                            {t}
                          </span>
                        );
                      })}
                      {project.tech.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-slate-800/40 text-[10px] font-medium text-slate-500">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <span className={`inline-flex items-center gap-1 text-xs font-semibold ${project.badgeColor} shrink-0`}>
                      View
                      <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Expanded Project Detail Modal */}
          <AnimatePresence>
            {selectedProject && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="fixed inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
                />

                {/* Modal Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 scrollbar-thin"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 text-slate-400 hover:text-white transition-all z-20"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Screenshot Browser Header */}
                  <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
                    <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-xs font-mono text-slate-500">
                        https://{selectedProject.title.toLowerCase().replace(/\s+/g, "")}.demo
                      </span>
                    </div>
                    <div className="relative aspect-video max-h-[360px] overflow-hidden bg-slate-950">
                      <img
                        src={selectedProject.image}
                        alt={`${selectedProject.title} Full Preview`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content & Actions */}
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {selectedProject.title}
                        </h3>
                        <p className="text-sm font-medium text-emerald-400">
                          {selectedProject.tagline}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap">
                        {"apkDownload" in selectedProject && selectedProject.apkDownload && (
                          <a
                            href={selectedProject.apkDownload as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20"
                          >
                            <FileDown className="w-4 h-4" />
                            Download APK
                          </a>
                        )}
                        {selectedProject.liveDemo && (
                          <a
                            href={selectedProject.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-all"
                          >
                            <FaGithub className="w-4 h-4" />
                            View Source
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold">
                        Key Features &amp; Highlights
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.highlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <span className="mt-0.5 text-emerald-400 shrink-0 font-bold">▸</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* ═══ EDUCATION & JOURNEY ═══════════════════════════════════════════ */}
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
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Background &amp; Growth</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Education &amp; Journey
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              My academic background and path in software engineering &amp; web development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* ── Left Column: Featured Education Card (lg:col-span-5) ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-6 relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.04] pointer-events-none select-none">
                <GraduationCap className="w-40 h-40 text-emerald-300" />
              </div>
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

              <div className="flex items-center justify-between gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono font-medium text-emerald-400">
                  Graduated Class of 2026
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">
                  B.S. in Information Systems
                </h3>
                <p className="text-sm font-medium text-slate-400 flex items-center gap-2">
                  <span>Hawassa University</span>
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800/60">
                <div className="text-xs font-mono tracking-widest text-slate-400 uppercase">
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
                      className="px-2.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs font-medium text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Right Column: Timeline Milestones (lg:col-span-7) ── */}
            <div className="lg:col-span-7 space-y-5 relative pl-4 sm:pl-6 border-l border-slate-800/80 ml-2 sm:ml-4">
              {[
                {
                  title: "B.S. in Information Systems",
                  subtitle: "Hawassa University • Class of 2026",
                  description:
                    "Core CS/IS principles, OOP architecture, and database design.",
                  tag: "Academic Milestone",
                  icon: BookOpen,
                  accent: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
                  tech: ["Java", "C++", "MySQL", "OOP", "Systems Analysis"],
                },
                {
                  title: "Applied Engineering & Enterprise Projects",
                  subtitle: "Full-Stack Platforms",
                  description:
                    "Development of full-stack platforms (QR Hotel Menu, AI Resume Builder, Java HR System).",
                  tag: "Full-Stack Development",
                  icon: Terminal,
                  accent: "border-indigo-500/40 text-indigo-400 bg-indigo-500/10",
                  tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion"],
                },
                {
                  title: "Mobile App Execution & Production",
                  subtitle: "MH Training Hub Release",
                  description:
                    "Development and release of 'MH Training Hub' (Offline-first Android fitness app with Jetpack Compose & Room DB).",
                  tag: "Mobile Production",
                  icon: Smartphone,
                  accent: "border-purple-500/40 text-purple-400 bg-purple-500/10",
                  tech: ["Kotlin", "Jetpack Compose", "Room DB", "WorkManager", "Android SDK"],
                },
                {
                  title: "Ready for Impact & Open to Roles",
                  subtitle: "Software Engineering & Native Android Focus",
                  description:
                    "B.S. Information Systems Graduate from Hawassa University. Currently focused on building high-performance Native Android apps (Kotlin, Jetpack Compose, Room DB) and scalable full-stack web solutions. Open for full-time and remote roles.",
                  tag: "Ready to Impact",
                  icon: Compass,
                  accent: "border-amber-500/40 text-amber-400 bg-amber-500/10",
                  tech: ["Full-Time", "Remote Roles", "Android / Web"],
                },
              ].map((milestone, idx) => {
                const MilestoneIcon = milestone.icon;
                return (
                  <motion.div
                    key={milestone.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="relative group space-y-2 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all shadow-md"
                  >
                    {/* Timeline Node Bullet */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-500/50 group-hover:scale-125 transition-transform">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>

                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg border ${milestone.accent}`}>
                          <MilestoneIcon className="w-4 h-4" />
                        </div>
                        <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {milestone.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-slate-400">
                        {milestone.tag}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-slate-400 pl-8">
                      {milestone.subtitle}
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed pl-8">
                      {milestone.description}
                    </p>

                    {/* Tech Badges */}
                    {milestone.tech && milestone.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pl-8 pt-2">
                        {milestone.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[10px] font-medium text-emerald-400"
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

        {/* ═══ CONTACT ══════════════════════════════════════════════════════ */}
        <motion.section
          id="contact"
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
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
              <Mail className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Get In Touch
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              Whether you have an open role, a project inquiry, or simply want to connect — feel free to reach out directly.
            </p>
          </motion.div>

          {/* 2 Separate Standalone Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* ── CARD 1: Direct Contact Form (Left) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 relative p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Card Ambient Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Send className="w-4 h-4 text-emerald-400" />
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Fill out the fields below and I&apos;ll respond directly to your inbox.
                  </p>
                </div>

                <form
                  id="contact-form"
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                >
                  {/* Name & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        <User className="w-3 h-3 text-emerald-400" /> Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/60 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        <Mail className="w-3 h-3 text-emerald-400" /> Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/60 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      <Briefcase className="w-3 h-3 text-emerald-400" /> Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleFormChange}
                      placeholder="Project inquiry, job opportunity, etc."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/60 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      <MessageSquare className="w-3 h-3 text-emerald-400" /> Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell me about your project or how I can help..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/60 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button + Status */}
                  <div className="flex items-center gap-4 pt-1">
                    <motion.button
                      type="submit"
                      disabled={formStatus === "sending"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-500/60 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 disabled:shadow-none disabled:cursor-not-allowed"
                    >
                      {formStatus === "sending" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <AnimatePresence>
                      {formStatus === "sent" && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-1.5 text-sm font-medium text-emerald-400"
                        >
                          <Check className="w-4 h-4" />
                          Message sent successfully!
                        </motion.span>
                      )}
                      {formStatus === "error" && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-1.5 text-sm font-medium text-red-400"
                        >
                          <AlertCircle className="w-4 h-4" />
                          Something went wrong. Try again.
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* ── CARD 2: Direct Reach & Social Channels (Right) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 relative p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm shadow-xl flex flex-col justify-between overflow-hidden space-y-6"
            >
              {/* Card Ambient Glow */}
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-emerald-400" />
                    Direct Reach &amp; Socials
                  </h3>
                  <p className="text-xs text-slate-400">
                    Connect via direct email or messaging apps across these platforms.
                  </p>
                </div>

                {/* Direct Email Card */}
                <button
                  id="contact-copy-email"
                  onClick={handleCopyEmail}
                  className="group relative p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 text-left transition-all duration-200 flex items-center justify-between gap-4 shadow-md w-full"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Mail className="w-[18px] h-[18px]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                        Direct Email
                      </div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate transition-colors">
                        {email}
                      </div>
                    </div>
                  </div>
                  <span className={`shrink-0 transition-all duration-200 ${copied ? "text-emerald-400" : "text-slate-600 group-hover:text-slate-400"}`}>
                    {copied ? (
                      <span className="flex items-center gap-1 text-xs font-medium text-emerald-400">
                        <Check className="w-3.5 h-3.5" /> Copied!
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {/* Social Profiles Grid */}
                <div className="space-y-3 pt-2">
                  <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase px-1">
                    Social Channels
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* GitHub */}
                    <a
                      id="contact-github"
                      href="https://github.com/mihretu-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-slate-700 text-left transition-all duration-200 flex items-center justify-between gap-2 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                          <FaGithub className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                            GitHub
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            @mihretu-dev
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 shrink-0" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      id="contact-linkedin"
                      href="https://www.linkedin.com/in/mihretu-hizkel-734105260/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-blue-500/40 text-left transition-all duration-200 flex items-center justify-between gap-2 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                          <FaLinkedin className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                            LinkedIn
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            Mihretu Hizkel
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 shrink-0" />
                    </a>

                    {/* Instagram */}
                    <a
                      id="contact-instagram"
                      href="https://www.instagram.com/mh_mire_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-pink-500/40 text-left transition-all duration-200 flex items-center justify-between gap-2 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                          <FaInstagram className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                            Instagram
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            @mh_mire_
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 shrink-0" />
                    </a>

                    {/* Telegram */}
                    <a
                      id="contact-telegram"
                      href="https://t.me/Mihretu_H"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-sky-500/40 text-left transition-all duration-200 flex items-center justify-between gap-2 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                          <FaTelegram className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                            Telegram
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            @Mihretu_H
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 shrink-0" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </motion.section>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 mt-8 border-t border-slate-800/60 py-8 bg-slate-950/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-mono text-slate-400 font-bold">MH.dev</span>
            <span>— Built with Next.js, Tailwind CSS &amp; Framer Motion</span>
          </div>
          <div>© {new Date().getFullYear()} Mihretu Hizkel. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
