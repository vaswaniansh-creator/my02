"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const faqs = [
  {
    q: "Is supplemental oxygen safe to use?",
    a: "Yes. MyO2 contains 95%+ pure oxygen with no propellants, additives, or chemicals. It has been used safely by athletes, mountaineers, and emergency responders worldwide for decades. It is not a drug and requires no prescription. If you have a serious medical condition, consult your physician.",
  },
  {
    q: "How many uses do I get per canister?",
    a: "Each MyO2 10L canister provides approximately 100–150 uses depending on inhalation depth and duration. For short 2–3 second inhalations (typical urban use), expect 120+ uses. For deeper 5-second altitude breaths, closer to 80–100 uses.",
  },
  {
    q: "Is it allowed on flights, in gyms, or at altitude?",
    a: "Gyms: Yes, universally permitted. Altitude/trekking: Yes, no restrictions. Flights: Carry-on policies vary by airline — always check with your carrier before flying. MyO2 is not classified as a hazardous material in standard quantities.",
  },
  {
    q: "Can kids and elderly people use it?",
    a: "MyO2 is suitable for healthy adults and seniors. For children under 12, we recommend parental supervision. Elderly users with COPD or cardiac conditions should consult their doctor — while supplemental oxygen can be beneficial, professional guidance is always best.",
  },
  {
    q: "How is MyO2 different from a medical oxygen cylinder?",
    a: "Medical oxygen cylinders are high-pressure, require prescription, and aren't portable. MyO2 is consumer-grade supplemental oxygen — lightweight, pocket-friendly, and designed for everyday performance and pollution protection, not clinical treatment.",
  },
  {
    q: "Does it actually help with Delhi/Mumbai pollution?",
    a: "When you're in a high-AQI environment, your blood oxygen saturation drops. Supplemental oxygen counteracts this — helping your body function at a higher baseline despite the polluted air around you. It doesn't filter the air; it gives your body the oxygen it's not getting from it.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad px-8 md:px-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-4">
          <SectionLabel color="cyan">❓ FAQ</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight tracking-tight text-[#0A0F1E] mt-4">
            Questions? <span className="glow-text">Answered.</span>
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <motion.div
                className="rounded-2xl border overflow-hidden bg-white"
                animate={{ borderColor: open === i ? "#0099CC40" : "#e2e8f0" }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display font-bold text-[#0A0F1E] pr-4">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#0099CC] text-2xl flex-shrink-0 font-light"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    >
                      <div className="px-6 pb-6 text-[#64748B] text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
