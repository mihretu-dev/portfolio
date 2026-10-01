import {
  Sparkles,
  Terminal,
  Briefcase,
  Users,
  Cpu,
  Smartphone,
  Mic,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  liveDemo?: string;
  apkDownload?: string;
  image: string;
  icon: LucideIcon;
  accentColor: string;
  spotlightGlow: string;
  hoverBorder: string;
  badgeColor: string;
}

export const projects: Project[] = [
  {
    title: "BirrVoice Ledger",
    tagline: "Voice-First Financial Ledger for Ethiopian Shopkeepers",
    description:
      "An intelligent, voice-first bookkeeping and inventory management web application tailored for Ethiopian SMEs and local retailers. Shopkeepers speak natural Amharic or English commands to effortlessly record sales transactions, track daily expenses, and manage stock levels in real time.",
    highlights: [
      "Powered by Voxide Speech AI for natural Amharic and English voice transcription and intent parsing.",
      "Converts spoken voice commands into structured JSON transactional entries and automatic ledger balancing.",
      "Live daily inflow/outflow monitoring, net cash margin calculations, and inventory status alerts.",
      "Deployed and hosted with high availability on EthioDeploy cloud infrastructure.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Voice AI", "Amharic NLP", "EthioDeploy"],
    github: "https://github.com/mihretu-dev/sme-voice-assistant",
    liveDemo: "https://sme-voice-assistant.ethiodeploy.com/",
    image: "/projects/sme-voice-assistant.png",
    icon: Mic,
    accentColor: "emerald",
    spotlightGlow: "rgba(16, 185, 129, 0.25), rgba(6, 182, 212, 0.08)",
    hoverBorder: "hover:border-emerald-500/50",
    badgeColor: "text-emerald-500 dark:text-emerald-400",
  },
  {
    title: "MH WiFi Manager",
    tagline: "Smart & Secure Local WiFi Management Android App",
    description:
      "A feature-rich native Android application designed for streamlined local router administration and connected device governance. Features biometric authentication, real-time connected host discovery, scheduled client blocking, and low-latency network speed testing.",
    highlights: [
      "Biometric fingerprint authentication for frictionless, secure router admin sign-in.",
      "Live connected device scanner displaying hostnames, IP/MAC addresses, signal strength (dBm), and lease duration.",
      "Automated scheduled blocking engine with an intuitive custom clock picker to enforce parental or business network access windows.",
      "Integrated ping latency and throughput speed test suite with reactive Jetpack Compose UI.",
      "Production-ready v1.0.0 APK release binary available for direct Android installation.",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Android SDK", "Biometrics", "Network Security", "APK Released"],
    github: "https://github.com/mihretu-dev/Wi-Fi-Device-Manager",
    apkDownload: "https://github.com/mihretu-dev/Wi-Fi-Device-Manager/releases/tag/v1.0.0",
    image: "/projects/wifi-device-manager.png",
    icon: Wifi,
    accentColor: "cyan",
    spotlightGlow: "rgba(6, 182, 212, 0.25), rgba(59, 130, 246, 0.08)",
    hoverBorder: "hover:border-cyan-500/50",
    badgeColor: "text-cyan-500 dark:text-cyan-400",
  },
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
    badgeColor: "text-emerald-500 dark:text-emerald-400",
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
    badgeColor: "text-blue-500 dark:text-blue-400",
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
    badgeColor: "text-purple-500 dark:text-purple-400",
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
      "Official TrainingHub APK release binary available for direct download.",
    ],
    tech: ["Kotlin", "Jetpack Compose", "Room DB", "APK Released"],
    github: "https://github.com/mihretu-dev/HomeWorkoutApp",
    liveDemo: undefined,
    apkDownload: "https://github.com/mihretu-dev/HomeWorkoutApp/releases/latest/download/TrainingHub.apk",
    image: "/projects/home-workout.png",
    icon: Smartphone,
    accentColor: "emerald",
    spotlightGlow: "rgba(34, 197, 94, 0.22), rgba(20, 184, 166, 0.08)",
    hoverBorder: "hover:border-green-500/50",
    badgeColor: "text-green-500 dark:text-green-400",
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
    badgeColor: "text-amber-500 dark:text-amber-400",
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
    badgeColor: "text-pink-500 dark:text-pink-400",
  },
];
