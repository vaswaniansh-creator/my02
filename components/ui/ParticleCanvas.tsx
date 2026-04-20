"use client";
import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface P {
      x: number; y: number; r: number;
      vx: number; vy: number; alpha: number;
      color: string; life: number; maxLife: number;
    }

    const colors = ["0,212,255", "255,107,53", "248,250,251"];
    const particles: P[] = [];

    const spawn = (): P => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.2,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 200 + 100,
    });

    for (let i = 0; i < 150; i++) {
      const p = spawn();
      p.life = Math.random() * p.maxLife;
      p.alpha = Math.random() * 0.35;
      particles.push(p);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.life++;
        p.x += p.vx; p.y += p.vy;
        if (p.life < 30) p.alpha = (p.life / 30) * 0.35;
        else if (p.life > p.maxLife - 30) p.alpha = ((p.maxLife - p.life) / 30) * 0.35;
        if (p.life >= p.maxLife) Object.assign(p, spawn());
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
