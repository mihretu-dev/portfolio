import {
  BookOpen,
  Terminal,
  Smartphone,
  Compass,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Milestone {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  accent: string;
  tech: string[];
}

export const milestones: Milestone[] = [
  {
    title: "B.S. in Information Systems",
    subtitle: "Hawassa University • Class of 2026",
    description:
      "Core CS/IS principles, OOP architecture, and database design.",
    tag: "Academic Milestone",
    icon: BookOpen,
    accent: "border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
    tech: ["Java", "C++", "MySQL", "OOP", "Systems Analysis"],
  },
  {
    title: "Applied Engineering & Enterprise Projects",
    subtitle: "Full-Stack Platforms",
    description:
      "Development of full-stack platforms (QR Hotel Menu, AI Resume Builder, Java HR System).",
    tag: "Full-Stack Development",
    icon: Terminal,
    accent: "border-indigo-500/40 text-indigo-600 dark:text-indigo-400 bg-indigo-500/10",
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Mobile App Execution & Production",
    subtitle: "MH Training Hub Release",
    description:
      "Development and release of 'MH Training Hub' (Offline-first Android fitness app with Jetpack Compose & Room DB).",
    tag: "Mobile Production",
    icon: Smartphone,
    accent: "border-purple-500/40 text-purple-600 dark:text-purple-400 bg-purple-500/10",
    tech: ["Kotlin", "Jetpack Compose", "Room DB", "WorkManager", "Android SDK"],
  },
  {
    title: "Ready for Impact & Open to Roles",
    subtitle: "Software Engineering & Native Android Focus",
    description:
      "B.S. Information Systems Graduate from Hawassa University. Currently focused on building high-performance Native Android apps (Kotlin, Jetpack Compose, Room DB) and scalable full-stack web solutions. Open for full-time and remote roles.",
    tag: "Ready to Impact",
    icon: Compass,
    accent: "border-amber-500/40 text-amber-600 dark:text-amber-400 bg-amber-500/10",
    tech: ["Full-Time", "Remote Roles", "Android / Web"],
  },
];
