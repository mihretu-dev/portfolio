"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface TypewriterSubtitleProps {
  text?: string;
  speed?: number;
  pauseDuration?: number;
}

export default function TypewriterSubtitle({
  text = "Full-Stack Web & Android Developer",
  speed = 50,
  pauseDuration = 2500,
}: TypewriterSubtitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setDisplayedText("");
      setIsDeleting(false);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < text.length) {
      // Type out character
      timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
    } else if (!isDeleting && displayedText.length === text.length) {
      // Pause on full text for 2.5 seconds before deleting
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayedText.length > 0) {
      // Rapid backspace character
      timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, 25);
    } else if (isDeleting && displayedText.length === 0) {
      // Short rest before re-typing loop
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
      }, 400);
    }

    return () => clearTimeout(timeoutId);
  }, [isInView, displayedText, isDeleting, text, speed, pauseDuration]);

  return (
    <div
      ref={containerRef}
      className="min-h-[2.25rem] sm:min-h-[2.75rem] md:min-h-[3.25rem] flex items-center select-none"
    >
      <p className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 dark:from-emerald-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent inline-flex items-center">
        <span>{displayedText}</span>
        <span className="inline-block w-[2px] h-[0.9em] ml-1 bg-cyan-400 animate-pulse rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
      </p>
    </div>
  );
}
