"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const reviews = [
  {
    name: "Arjun Mehta",
    role: "Marathon Runner",
    city: "Delhi",
    tag: "🏃 Athlete",
    tagColor: "#FF6B35",
    stars: 5,
    text: "I ran my first sub-4-hour marathon after adding MyO2 Sport to my training. The Delhi winter smog was brutal this year — AQI was 350+ on race day. I used MyO2 right before the gun and mid-race. The difference was real. My lungs didn't give up. My legs did, but that's another story.",
    emoji: "🏅",
  },
  {
    name: "Priya Sharma",
    role: "Solo Trekker",
    city: "Manali",
    tag: "🏔️ Trekker",
    tagColor: "#16a34a",
    stars: 5,
    text: "Altitude sickness nearly ended my Kedarnath trek at Gaurikund. A fellow trekker had MyO2 Summit. Within 60 seconds of using it, the pounding headache eased and I could breathe again. I finished the trek. I'm now never going above 2,000m without it. Non-negotiable.",
    emoji: "⛰️",
  },
  {
    name: "Fatima Khan",
    role: "Teacher & Mother",
    city: "Mumbai",
    tag: "😮‍💨 Asthma",
    tagColor: "#7c3aed",
    stars: 5,
    text: "My asthma attacks were getting more frequent with Mumbai's worsening air. My doctor suggested supplemental oxygen as a complementary aid. MyO2 Pure became part of my daily routine. I keep one in my bag, one at home. It's not medication — it's confidence. I haven't missed a day of school since.",
    emoji: "💜",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const r = reviews[active];

  return (
    <section id="reviews" className="section-pad px-8 md:px-16 relative" style={{ background: "#f8fafc" }}>
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-4">
          <SectionLabel color="cyan">💬 Real Stories</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight tracking-tight text-[#0A0F1E] mt-4">
            India Is Already<br />
            <span className="glow-text">Breathing Better</span>
          </h2>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 mb-8 relative overflow-hidden shadow-sm"
          >
            <div className="absolute top-0 right-0 w-48 h-48 opacity-5 pointer-events-none"
              style={{ background: `radial-gradient(circle, ${r.tagColor}, transparent)` }} />

            <div className="flex gap-1 mb-6">
              {Array(r.stars).fill(0).map((_, i) => (
                <motion.span key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }} className="text-xl">⭐</motion.span>
              ))}
            </div>

            <p className="text-[#475569] text-lg md:text-xl leading-relaxed italic mb-8">
              &ldquo;{r.text}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ background: `${r.tagColor}12`, border: `2px solid ${r.tagColor}30` }}>
                {r.emoji}
              </div>
              <div>
                <p className="font-bold font-display text-[#0A0F1E]">{r.name}</p>
                <p className="text-sm text-[#94A3B8]">{r.role} · {r.city}</p>
              </div>
              <span className="ml-auto text-xs font-bold px-3 py-1.5 rounded-full font-display"
                style={{ color: r.tagColor, background: `${r.tagColor}10`, border: `1px solid ${r.tagColor}25` }}>
                {r.tag}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3">
          {reviews.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.3 }}
              className="rounded-full transition-all"
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                background: i === active ? "#0099CC" : "#e2e8f0",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
