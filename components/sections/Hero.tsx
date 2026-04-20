"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={ref} id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 pt-28 pb-16 gap-12 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #ffffff 0%, #f0f9ff 60%, #e0f5ff 100%)" }}>

      {/* Subtle grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #0A0F1E 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Left: text */}
      <motion.div variants={container} initial="hidden" animate="show"
        className="relative z-10 max-w-xl lg:max-w-2xl flex-1">

        {/* AQI badge */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold tracking-wide font-display">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            🔴 Delhi AQI Today: 387 — HAZARDOUS
          </span>
        </motion.div>

        <motion.h1 variants={item}
          className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.03] tracking-tight text-[#0A0F1E] mb-6">
          India Breathes<br />
          <span className="glow-amber">Dirty.</span>{" "}
          <span className="glow-text">You Don&apos;t</span><br />
          Have To.
        </motion.h1>

        <motion.p variants={item}
          className="text-lg text-[#475569] leading-relaxed mb-10 max-w-lg">
          With avg AQI of <strong className="text-[#FF6B35]">150+</strong> across major Indian cities,
          <strong className="text-[#0A0F1E]"> MyO2</strong> gives you pure, portable oxygen —
          anywhere, anytime.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 mb-14">
          <a href="#product" className="btn-cyan">🛒 Shop Now</a>
          <a href="#how" className="btn-ghost">See How It Works ↓</a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="flex gap-8 flex-wrap">
          {[
            { num: "95%+", label: "Pure Oxygen" },
            { num: "10L", label: "Per Canister" },
            { num: "~100", label: "Uses Per Can" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-extrabold text-2xl text-[#0A0F1E]">{s.num}</div>
              <div className="text-xs text-[#94A3B8] mt-0.5 font-medium">{s.label}</div>
            </div>
          ))}
          <div className="w-px bg-[#e2e8f0] self-stretch hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["🏃","🏔️","😮‍💨","🏋️"].map((e,i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center text-sm">{e}</div>
              ))}
            </div>
            <div>
              <div className="text-xs font-bold text-[#0A0F1E]">50,000+ on waitlist</div>
              <div className="text-xs text-[#94A3B8]">across India</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right: product image */}
      <motion.div
        style={{ y: imgY }}
        className="relative flex-1 flex justify-center items-center lg:justify-end z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        {/* Glow behind product */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,212,255,0.12) 0%, transparent 70%)" }} />

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <Image
            src="/images/product-lineup.jpg"
            alt="MyO2 Oxygen Canisters — 7 Colours"
            width={680}
            height={400}
            priority
            className="object-contain drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 40px 60px rgba(0,212,255,0.15))" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
