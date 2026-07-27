"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  dx: number;
  dy: number;
  opacity: number;
  active: boolean;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Color palette for stars
    const colors = [
      "rgba(255, 255, 255, ",
      "rgba(167, 243, 208, ", // emerald-200
      "rgba(165, 243, 252, ", // cyan-200
      "rgba(199, 210, 254, ", // indigo-200
    ];

    // Generate ~80 stars
    const starCount = 80;
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 1.2,
      baseOpacity: Math.random() * 0.5 + 0.35,
      twinkleSpeed: Math.random() * 0.025 + 0.008,
      twinklePhase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // Shooting Stars (Comets)
    const shootingStars: ShootingStar[] = Array.from({ length: 2 }, () => ({
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      dx: 0,
      dy: 0,
      opacity: 0,
      active: false,
    }));

    const resetShootingStar = (s: ShootingStar) => {
      s.x = Math.random() * width * 0.8;
      s.y = Math.random() * (height * 0.4);
      s.length = Math.random() * 80 + 70; // Trail length
      s.speed = Math.random() * 8 + 8; // Speed
      const angle = (Math.random() * 15 + 30) * (Math.PI / 180); // ~30-45 deg diagonal
      s.dx = Math.cos(angle);
      s.dy = Math.sin(angle);
      s.opacity = 1;
      s.active = true;
    };

    let nextSpawnTime = Date.now() + Math.random() * 3000 + 2000;
    let time = 0;

    const render = () => {
      time += 0.016;

      // Mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      const parallaxX = (mouseX - width / 2) * -0.08;
      const parallaxY = (mouseY - height / 2) * -0.08;

      ctx.clearRect(0, 0, width, height);

      // Pre-calculate current positions for constellation connections
      const drawPositions: { x: number; y: number }[] = [];

      // ── 1. Draw Constellations (Connecting Lines) ──
      const maxConnDist = 110;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move star
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        const posX = star.x + parallaxX * (star.size / 2);
        const posY = star.y + parallaxY * (star.size / 2);
        drawPositions.push({ x: posX, y: posY });
      }

      // Render faint constellation lines between nearby stars
      ctx.lineWidth = 0.6;
      for (let i = 0; i < drawPositions.length; i++) {
        for (let j = i + 1; j < drawPositions.length; j++) {
          const dx = drawPositions[i].x - drawPositions[j].x;
          const dy = drawPositions[i].y - drawPositions[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnDist) {
            const lineOpacity = (1 - dist / maxConnDist) * 0.14;
            ctx.beginPath();
            ctx.moveTo(drawPositions[i].x, drawPositions[i].y);
            ctx.lineTo(drawPositions[j].x, drawPositions[j].y);
            ctx.strokeStyle = `rgba(165, 243, 252, ${lineOpacity})`;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      // ── 2. Draw Stars ──
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const pos = drawPositions[i];

        const opacity = Math.min(
          0.9,
          Math.max(
            0.2,
            star.baseOpacity + Math.sin(time * 3 * star.twinkleSpeed * 100 + star.twinklePhase) * 0.3
          )
        );

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${opacity})`;

        if (star.size > 1.8) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = "rgba(165, 243, 252, 0.7)";
        } else {
          ctx.shadowBlur = 2;
          ctx.shadowColor = "rgba(255, 255, 255, 0.3)";
        }

        ctx.fill();
      }

      // ── 3. Handle & Draw Shooting Stars ──
      const now = Date.now();
      if (now > nextSpawnTime) {
        const inactive = shootingStars.find((s) => !s.active);
        if (inactive) {
          resetShootingStar(inactive);
          nextSpawnTime = now + Math.random() * 4000 + 3000; // Next comet in 3-7s
        }
      }

      shootingStars.forEach((star) => {
        if (!star.active) return;

        // Move shooting star
        star.x += star.dx * star.speed;
        star.y += star.dy * star.speed;
        star.opacity -= 0.012; // Fade out slowly

        if (
          star.opacity <= 0 ||
          star.x > width + star.length ||
          star.y > height + star.length
        ) {
          star.active = false;
          return;
        }

        const tailX = star.x - star.dx * star.length;
        const tailY = star.y - star.dy * star.length;

        const grad = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        grad.addColorStop(0.3, `rgba(165, 243, 252, ${star.opacity * 0.7})`);
        grad.addColorStop(1, `rgba(165, 243, 252, 0)`);

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.2;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(165, 243, 252, 0.8)";
        ctx.stroke();

        // Bright comet head dot
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffffff";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
