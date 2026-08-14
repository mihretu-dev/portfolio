"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { FileDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

const navItems = ["About", "Disciplines", "Projects", "Journey", "Contact"];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scrollspy with IntersectionObserver
  useEffect(() => {
    const sectionIds = ["hero", "about", "disciplines", "projects", "journey", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Scroll shadow tracker
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500 z-50 origin-left shadow-sm shadow-emerald-500/50"
        style={{ scaleX }}
      />

      {/* Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 dark:bg-slate-950/85 border-b border-slate-200 dark:border-slate-800 shadow-md shadow-slate-950/5 dark:shadow-slate-950/40"
            : "bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/60 dark:border-slate-800/40"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="Home">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold transition-colors group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50">
              MH
            </div>
            <span className="hidden sm:block text-sm font-semibold tracking-widest text-slate-800 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
              MIHRETU HIZKEL
            </span>
          </a>

          {/* Nav Links (Desktop) with Active Scrollspy Highlight */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  className={`relative py-1 text-sm font-medium transition-all ${
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-100"
                  }`}
                >
                  {item}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 dark:bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Social Icons (Desktop) */}
            <div className="hidden sm:flex items-center gap-1">
              <a
                href="https://github.com/mihretu-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60 transition-all"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mihretu-hizkel-734105260/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60 transition-all"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mh_mire_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60 transition-all"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/Mihretu_H"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700/60 transition-all"
                aria-label="Telegram Profile"
              >
                <FaTelegram className="w-4 h-4" />
              </a>
            </div>

            {/* Resume Button */}
            <a
              href="/Mihretu_Hizkel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-full transition-all"
              aria-label="View Resume/CV"
            >
              <FileDown className="w-3.5 h-3.5" />
              Resume/CV
            </a>

            {/* Get in Touch (Desktop) */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-full transition-all"
            >
              Get in Touch
            </a>

            <ThemeToggle />
            <MobileNav activeSection={activeSection} />
          </div>
        </div>
      </header>
    </>
  );
}
