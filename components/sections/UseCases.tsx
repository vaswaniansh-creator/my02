"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const cases = [
  {
    emoji: "🏙️",
    title: "The Urban Commuter",
    location: "Mumbai / Delhi",
    quote: "2-hour commutes in smog shouldn't cost you your lungs.",
    desc: "Every day, millions board packed local trains and ride through some of the world's most polluted air. MyO2 Pure is your shield.",
    color: "#0099CC",
    bg: "#f0fbff",
    border: "#bae8f7",
  },
  {
    emoji: "🏔️",
    title: "The Summit Seeker",
    location: "Kedarnath — 3,584m",
    quote: "At altitude, every breath counts. Make it count.",
    desc: "When thin air slows your climb and altitude threatens to end your trek, MyO2 Summit is your lifeline on the mountain.",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    emoji: "🏋️",
    title: "The Gym Warrior",
    location: "Everywhere",
    quote: "Push harder. Recover faster. Outperform.",
    desc: "Oxygenate your muscles before your toughest sets. Slash your recovery time post-workout. Legal, safe, and devastatingly effective.",
    color: "#FF6B35",
    bg: "#fff7f5",
    border: "#ffe0d6",
  },
  {
    emoji: "😮‍💨",
    title: "The Asthma Fighter",
    location: "1 in 8 Indians",
    quote: "Breathe without fear. Live without limits.",
    desc: "For the 150+ million Indians with respiratory conditions, pollution is a daily battle. MyO2 gives you back control of your breath.",
    color: "#7c3aed",
    bg: "#faf5ff",
    border: "#e9d5ff",
  },
];

export default function UseCases() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-pad px-0 relative overflow-hidden bg-white">
      <div className="px-8 md:px-16 mb-12">
        <FadeIn className="mb-4">
          <SectionLabel color="cyan">👥 Who It&apos;s For</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-tight tracking-tight text-[#0A0F1E] mt-4">
            Built for <span className="glow-text">Every Indian</span><br />Who Breathes
          </h2>
        </FadeIn>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-6 px-8 md:px-16 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {cases.map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, boxShadow: `0 20px 60px ${c.color}18, 0 4px 16px rgba(0,0,0,0.06)` }}
              className="flex-shrink-0 w-72 md:w-80 snap-start rounded-2xl overflow-hidden border cursor-pointer"
              style={{ background: c.bg, borderColor: c.border, minHeight: "400px" }}
            >
              <div className="p-8 h-full flex flex-col">
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut" }}
                >
                  {c.emoji}
                </motion.div>

                <span className="text-xs font-bold tracking-wider font-display px-3 py-1 rounded-full w-fit mb-4"
                  style={{ color: c.color, background: "white", border: `1px solid ${c.color}30` }}>
                  📍 {c.location}
                </span>

                <h3 className="font-display font-extrabold text-xl text-[#0A0F1E] mb-3">{c.title}</h3>

                <p className="text-base font-bold mb-3 leading-snug" style={{ color: c.color }}>
                  &ldquo;{c.quote}&rdquo;
                </p>

                <p className="text-[#64748B] text-sm leading-relaxed flex-1">{c.desc}</p>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 w-full py-3 rounded-xl text-sm font-bold font-display text-white"
                  style={{ background: c.color }}
                >
                  Shop for {c.title.split(" ").slice(-1)[0]} →
                </motion.button>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <p className="text-center text-xs text-[#94A3B8] mt-4">← Scroll to explore →</p>
    </section>
  );
}
