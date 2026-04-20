"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  { num: "01", icon: "🏙️", title: "Inhale Pollution", color: "#FF6B35", bg: "#fff7f5", border: "#ffe0d6",
    desc: "You step outside in Delhi, Mumbai, or Kolkata. The air is thick with PM2.5, NO₂, and toxic particles — your lungs take the hit.", detail: "AQI 387 detected" },
  { num: "02", icon: "💨", title: "Grab MyO2", color: "#0099CC", bg: "#f0fbff", border: "#bae8f7",
    desc: "Twist open your MyO2 canister. Press the mask to your face. One breath floods your system with 95%+ pure oxygen.", detail: "95% pure O₂" },
  { num: "03", icon: "🫁", title: "Feel It in Seconds", color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0",
    desc: "Within seconds, mental fog clears. Your muscles energise. Breathlessness fades. Because physiology doesn't lie.", detail: "Results in ~10s" },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad px-8 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-5">
          <SectionLabel color="cyan">⚙️ How It Works</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-[3.25rem] leading-tight tracking-tight text-[#0A0F1E] mt-4">
            Simple. Fast.<br /><span className="glow-text">Life-Changing.</span>
          </h2>
        </FadeIn>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[22%] right-[22%] h-px bg-slate-200">
            <motion.div className="h-full bg-gradient-to-r from-[#FF6B35] via-[#0099CC] to-[#16a34a]"
              style={{ originX: 0 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} />
          </div>

          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.15}>
              <motion.div whileHover={{ y: -5 }}
                className="rounded-2xl border p-8 text-center transition-all"
                style={{ background: s.bg, borderColor: s.border }}>
                <motion.div
                  whileInView={{ scale: [0, 1.15, 1] }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center font-display font-extrabold text-base mx-auto mb-6 relative z-10"
                  style={{ background: s.color, color: "white" }}>
                  {s.num}
                </motion.div>

                <motion.div className="text-5xl mb-5"
                  animate={s.num === "03" ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
                  {s.icon}
                </motion.div>

                <h3 className="font-display font-extrabold text-lg text-[#0A0F1E] mb-3">{s.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-5">{s.desc}</p>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full font-display"
                  style={{ color: s.color, background: "white", border: `1px solid ${s.color}30` }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: s.color }} />
                  {s.detail}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
