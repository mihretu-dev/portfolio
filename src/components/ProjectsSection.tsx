"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, Maximize2 } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--spotlight-x", `${x}px`);
    e.currentTarget.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
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
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
          <Terminal className="w-3.5 h-3.5" />
          <span>Selected Work</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
          A selection of projects demonstrating enterprise system design, clean UI
          development, and algorithmic problem solving.
        </p>
      </motion.div>

      {/* Project Cards Grid */}
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
              className={`group relative flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 ${project.hoverBorder} backdrop-blur-sm transition-all duration-300 shadow-sm dark:shadow-xl cursor-pointer overflow-hidden`}
            >
              {/* Interactive Mouse Spotlight Layer */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: `radial-gradient(450px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), ${project.spotlightGlow}, transparent 80%)`,
                }}
              />

              {/* Thumbnail Browser Frame */}
              <div className="relative z-10 space-y-4">
                <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950/90 shadow-sm group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors">
                  <div className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 truncate">
                      {project.title.toLowerCase().replace(/\s+/g, "")}.demo
                    </span>
                  </div>
                  <div className="relative w-full aspect-video overflow-hidden bg-slate-950">
                    <Image
                      src={project.image}
                      alt={`${project.title} Preview screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ProjectIcon className={`w-4 h-4 ${project.badgeColor} shrink-0`} />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-slate-100 transition-colors truncate">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium line-clamp-1">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Card Footer: Tech Badges & View Details */}
              <div className="relative z-10 pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5 min-w-0">
                  {project.tech.slice(0, 4).map((t) => {
                    const isApkBadge = t.includes("APK");
                    return (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${
                          isApkBadge
                            ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-semibold"
                            : "bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {t}
                      </span>
                    );
                  })}
                  {project.tech.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/40 text-[10px] font-medium text-slate-500">
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

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
  );
}
