import {
  Briefcase,
  Award,
  GraduationCap,
  Sparkles,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  workMode: "Remote" | "Hybrid" | "On-site";
  focus: string;
  bullets: string[];
  tech: string[];
  icon: LucideIcon;
  accent: string;
  badgeColor: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  status: "Issued" | "Passed" | "Graduated";
  description: string;
  icon: LucideIcon;
  badgeColor: string;
  accent: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa: string;
  exitExamScore: string;
  status: string;
  coursework: string[];
}

export const educationInfo: EducationInfo = {
  degree: "B.S. in Information Systems",
  institution: "Hawassa University",
  period: "2023 – 2026",
  location: "Hawassa, Ethiopia",
  gpa: "3.19 / 4.00",
  exitExamScore: "85%",
  status: "Graduated Class of 2026",
  coursework: [
    "Object-Oriented Programming (Java / C++)",
    "Database Architecture & MySQL",
    "Web & Mobile Application Development",
    "Systems Analysis & Software Engineering",
    "Data Structures & Algorithms",
    "Information Security & Networks",
  ],
};

export const experiences: Experience[] = [
  {
    id: "agrimocks",
    company: "AgriMocks",
    role: "Sales and Marketing Intern",
    period: "Sep 2026 – Present",
    location: "Remote",
    workMode: "Remote",
    focus:
      "Digital marketing campaigns, agricultural demographic engagement, international market research, and user acquisition strategies.",
    bullets: [
      "Drive targeted digital marketing campaigns engaging diverse agricultural demographics and agri-tech user segments.",
      "Conduct international market research and demographic analysis to optimize product positioning and user acquisition funnels.",
      "Implement community outreach initiatives and data-informed growth strategies.",
    ],
    tech: [
      "Digital Marketing",
      "User Acquisition",
      "Market Research",
      "Agri-Tech",
      "Growth Strategy",
    ],
    icon: TrendingUp,
    accent: "border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
    badgeColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
  },
  {
    id: "farmvizion",
    company: "FarmVizion",
    role: "Software Quality Assurance Tester",
    period: "Sep 2026 – Present",
    location: "Remote",
    workMode: "Remote",
    focus:
      "Pre-production QA, beta testing, and stability analysis for the FarmVizion Android app & AIVA voice assistant across 176 countries; usability bug reporting and friction-point documentation.",
    bullets: [
      "Execute rigorous pre-production QA cycles, stress testing, and stability audits for the FarmVizion Native Android app.",
      "Evaluate the AIVA voice assistant for intent recognition accuracy, latency, and conversational flow across users in 176 countries.",
      "Identify UI/UX friction points, file reproduction steps for edge-case defects, and collaborate closely with developers to ensure release readiness.",
    ],
    tech: [
      "Software QA",
      "Android Beta Testing",
      "AIVA Voice Assistant",
      "Stability Analysis",
      "Bug Reporting",
    ],
    icon: ShieldCheck,
    accent: "border-cyan-500/40 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10",
    badgeColor: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
  },
  {
    id: "freelance",
    company: "Freelance / Self-Employed",
    role: "Full-Stack & Native Android Developer",
    period: "Jan 2025 – Present",
    location: "Hawassa, Ethiopia",
    workMode: "Hybrid",
    focus:
      "Building offline-first Android apps with Kotlin, Jetpack Compose, Coroutines, and Room DB; developing high-performance full-stack web platforms using Next.js, React, TypeScript, Node.js, and Tailwind CSS.",
    bullets: [
      "Architect offline-first Android applications leveraging Kotlin, Jetpack Compose, Room DB, and reactive StateFlow patterns (e.g. MH WiFi Manager, TrainingHub).",
      "Build dynamic full-stack web applications and AI-integrated tools using Next.js (App Router), React, TypeScript, and modern styling.",
      "Ship production-ready releases with automated builds, high-availability deployments, and APK binaries.",
    ],
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Room DB",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
    ],
    icon: Smartphone,
    accent: "border-purple-500/40 text-purple-600 dark:text-purple-400 bg-purple-500/10",
    badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30",
  },
  {
    id: "south-ethiopia-finance",
    company: "South Ethiopia Finance Institute",
    role: "Network Administrator Intern",
    period: "Jul 2025 – Sep 2025",
    location: "Hawassa, Ethiopia",
    workMode: "On-site",
    focus:
      "Network infrastructure support, database administration routines, and system maintenance.",
    bullets: [
      "Provided on-site ICT network infrastructure administration, router/switch diagnostics, and secure LAN provisioning.",
      "Managed routine database backups, MySQL integrity checks, and user permission management.",
      "Built an internal web portal to onboard, guide, and mentor incoming ICT interns.",
    ],
    tech: [
      "Network Administration",
      "Infrastructure",
      "MySQL",
      "LAN/WLAN",
      "System Maintenance",
    ],
    icon: Terminal,
    accent: "border-amber-500/40 text-amber-600 dark:text-amber-400 bg-amber-500/10",
    badgeColor: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30",
  },
];

export const certifications: Certification[] = [
  {
    id: "farmvizion-specialist",
    title: "Agri-Tech Innovator: Beta Testing Specialist",
    issuer: "FarmVizion",
    issued: "Sep 2026",
    status: "Issued",
    description:
      "Awarded for outstanding contribution to mobile application QA, global beta testing across 176 countries, and conversational voice AI stability evaluation.",
    icon: Award,
    badgeColor: "text-emerald-500 dark:text-emerald-400",
    accent: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "harvard-cs50x",
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University / CS50",
    issued: "Passed",
    status: "Passed",
    description:
      "Comprehensive computer science curriculum spanning C memory management, algorithms, data structures, Python, SQL, and modern web application development.",
    icon: CheckCircle2,
    badgeColor: "text-indigo-500 dark:text-indigo-400",
    accent: "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "hawassa-bs-is",
    title: "B.S. in Information Systems",
    issuer: "Hawassa University",
    issued: "Class of 2026",
    status: "Graduated",
    description:
      "Graduated with 3.19 / 4.00 CGPA and National Exit Exam score of 85%. In-depth focus on OOP architecture, database management, and enterprise software design.",
    icon: GraduationCap,
    badgeColor: "text-teal-500 dark:text-teal-400",
    accent: "border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400",
  },
];

// Backwards compatibility alias
export const milestones = experiences.map((exp) => ({
  title: `${exp.role} • ${exp.company}`,
  subtitle: `${exp.period} (${exp.workMode})`,
  description: exp.focus,
  tag: exp.workMode,
  icon: exp.icon,
  accent: exp.accent,
  tech: exp.tech,
}));
