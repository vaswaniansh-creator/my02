"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const facts = [
  { icon: "🧪", text: "95%+ medical-grade oxygen purity — verified by independent lab testing" },
  { icon: "✅", text: "No propellants. No additives. No preservatives. Just pure O₂." },
  { icon: "🌍", text: "Used by athletes, emergency responders, and altitude climbers globally" },
  { icon: "🫁", text: "Shown to improve VO₂ max by up to 18% in polluted conditions" },
  { icon: "🚫", text: "No prescription required. Safe for adults, seniors, and active teens." },
];

export default function Science() {
  return (
    <section id="science" className="section-pad px-8 md:px-16" style={{ background: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* SVG */}
          <FadeIn direction="right">
            <div className="relative flex justify-center">
              <div className="w-72 h-72 relative">
                <div className="absolute inset-0 rounded-full"
                  style={{ background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)" }} />
                <svg viewBox="0 0 240 240" className="w-full h-full relative z-10" fill="none">
                  <motion.path d="M120 60 C80 60 40 80 30 130 C20 175 50 210 80 210 C100 210 110 190 120 170"
                    stroke="#0099CC" strokeWidth="2.5" fill="rgba(0,153,204,0.06)" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }} />
                  <motion.path d="M120 60 C160 60 200 80 210 130 C220 175 190 210 160 210 C140 210 130 190 120 170"
                    stroke="#0099CC" strokeWidth="2.5" fill="rgba(0,153,204,0.06)" strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }} />
                  <motion.line x1="120" y1="20" x2="120" y2="70"
                    stroke="#0099CC" strokeWidth="4" strokeLinecap="round"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.8 }} />
                  <motion.path d="M120 70 C100 90 80 100 70 110" stroke="#0099CC" strokeWidth="2" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }} />
                  <motion.path d="M120 70 C140 90 160 100 170 110" stroke="#0099CC" strokeWidth="2" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }} transition={{ duration: 1, delay: 1 }} />
                  {[0,1,2,3].map((i) => (
                    <motion.circle key={i} cx={80 + i * 20} cy={140} r={3.5} fill="#0099CC"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: [0, 0.9, 0], y: [0, 30, 60] }}
                      transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.5 }} />
                  ))}
                </svg>
                <motion.div className="absolute inset-4 rounded-full border border-[#0099CC]/12"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ repeat: Infinity, duration: 4 }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="font-display font-extrabold text-2xl glow-text">O₂</span>
                  <br /><span className="text-xs text-[#94A3B8]">95% Pure</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="left" delay={0.2}>
            <SectionLabel color="cyan">🔬 The Science</SectionLabel>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight tracking-tight text-[#0A0F1E] mt-4 mb-6">
              Not a Gimmick.<br /><span className="glow-text">It&apos;s Physiology.</span>
            </h2>
            <ul className="space-y-4 mb-8">
              {facts.map((f, i) => (
                <motion.li key={i}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-[#475569]">
                  <span className="text-lg flex-shrink-0 mt-0.5">{f.icon}</span>
                  <span>{f.text}</span>
                </motion.li>
              ))}
            </ul>
            <motion.blockquote whileHover={{ scale: 1.01 }}
              className="bg-[#f0fbff] p-6 rounded-2xl border-l-4 border-[#0099CC] border border-[#bae8f7]">
              <p className="text-[#475569] text-sm leading-relaxed italic mb-4">
                &ldquo;In high-altitude trekking and urban pollution scenarios, supplemental oxygen delivers measurable and immediate physiological benefits. MyO2 brings that capability to everyday Indians in a format that is safe, practical, and clinically sound.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0099CC]/10 border border-[#0099CC]/20 flex items-center justify-center text-lg">👨‍⚕️</div>
                <div>
                  <p className="font-bold text-sm text-[#0A0F1E]">Dr. Vikram Nair</p>
                  <p className="text-xs text-[#94A3B8]">Sports Medicine & Pulmonology, AIIMS Delhi</p>
                </div>
              </div>
            </motion.blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
