"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

function CountUp({ target }: { target: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = target / 70;
    const t = setInterval(() => {
      s += step;
      if (s >= target) { s = target; clearInterval(t); }
      setVal(Math.round(s));
    }, 16);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span ref={ref}>{val}</span>;
}

const stats = [
  {
    num: 9, suffix: " of 10",
    label: "Most Polluted Cities in the World",
    desc: "India holds 9 of the world's 10 most polluted cities. Breathing Delhi air is equivalent to smoking 49 cigarettes daily.",
    color: "#FF6B35", bg: "#fff7f5", border: "#ffe0d6", icon: "🏙️",
  },
  {
    num: 150, suffix: "M+",
    label: "Indians with Respiratory Disease",
    desc: "Over 150 million Indians suffer from asthma, COPD, or pollution-induced respiratory conditions. 1 in 8 Indians.",
    color: "#0099CC", bg: "#f0fbff", border: "#bae8f7", icon: "🫁",
  },
  {
    num: 18, suffix: "%",
    label: "Athletic Performance Lost",
    desc: "Athletes competing or training in high-AQI conditions lose up to 18% of their VO₂ max and endurance capacity.",
    color: "#7c3aed", bg: "#faf5ff", border: "#e9d5ff", icon: "🏃",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section-pad px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-5">
          <SectionLabel color="amber">⚠️ The Crisis</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-[3.25rem] leading-tight tracking-tight text-[#0A0F1E] mt-4">
            The Air Around You Is<br />
            <span className="glow-amber">Killing Your Performance</span>
          </h2>
          <p className="mt-5 text-[#64748B] text-lg max-w-xl mx-auto">
            This isn&apos;t alarmism. These are peer-reviewed facts about India&apos;s air quality emergency.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6, boxShadow: `0 20px 60px ${s.color}18` }}
                className="rounded-2xl p-8 h-full border transition-all"
                style={{ background: s.bg, borderColor: s.border }}
              >
                <div className="text-4xl mb-5">{s.icon}</div>
                <div className="font-display font-extrabold text-5xl mb-1 leading-none" style={{ color: s.color }}>
                  <CountUp target={s.num} />{s.suffix}
                </div>
                <div className="font-display font-bold text-[#0A0F1E] text-sm mb-3 mt-2">{s.label}</div>
                <p className="text-[#64748B] text-sm leading-relaxed">{s.desc}</p>
                <motion.div className="mt-6 h-1 rounded-full overflow-hidden bg-white/60">
                  <motion.div className="h-full rounded-full"
                    style={{ background: s.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  />
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
