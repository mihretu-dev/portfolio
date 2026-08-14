import {
  Code2,
  Cpu,
  Database,
  Sparkles,
  Smartphone,
} from "lucide-react";

export interface Discipline {
  title: string;
  description: string;
  icon: typeof Code2;
  tech: string[];
  accent: string;
  borderGlow: string;
  iconBg: string;
  iconGlow: string;
}

export const disciplines: Discipline[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building responsive, high-performance web applications with modern frontend frameworks and scalable Node.js backend services.",
    icon: Code2,
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "group-hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    iconGlow: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]",
  },
  {
    title: "Native Android Development",
    description:
      "Developing native Android applications with Kotlin, modern Jetpack Compose declarative UI, and offline-first Room databases.",
    icon: Smartphone,
    tech: ["Kotlin", "Jetpack Compose", "Room DB", "MVVM", "Coroutines"],
    accent: "from-green-500/20 via-emerald-500/10 to-transparent",
    borderGlow: "group-hover:border-green-500/50",
    iconBg: "bg-green-500/10 border-green-500/20 text-green-400",
    iconGlow: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
  },
  {
    title: "Systems Engineering (Java/OOP)",
    description:
      "Architecting enterprise desktop systems and backend services using object-oriented principles, design patterns, and clean code standards.",
    icon: Cpu,
    tech: ["Java", "OOP Design", "C++", "Architecture", "Design Patterns"],
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderGlow: "group-hover:border-cyan-500/50",
    iconBg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    iconGlow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
  },
  {
    title: "Database Design & Optimization",
    description:
      "Designing normalized relational schemas, writing complex SQL queries, and optimizing database performance for high-throughput applications.",
    icon: Database,
    tech: ["MySQL", "Schema Design", "Query Optimization", "Relational Modeling"],
    accent: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderGlow: "group-hover:border-blue-500/50",
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    iconGlow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
  },
  {
    title: "AI Integrations & Workflow Automation",
    description:
      "Integrating large language models and AI APIs into production workflows to automate business processes and enhance user capabilities.",
    icon: Sparkles,
    tech: ["Gemini API", "LLM Pipelines", "Prompt Engineering", "Automation"],
    accent: "from-purple-500/20 via-pink-500/10 to-transparent",
    borderGlow: "group-hover:border-purple-500/50",
    iconBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    iconGlow: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  },
];
