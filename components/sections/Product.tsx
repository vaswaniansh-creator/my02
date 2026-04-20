"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const products = [
  {
    id: "sport", name: "MyO2 Sport", tag: "Pre-workout & Athletic",
    benefit: "Push harder. Recover faster.",
    desc: "Engineered for athletes, gym warriors, and runners. Supercharge your VO₂ max and cut recovery time in half.",
    color: "#FF6B35", bg: "#fff7f5", border: "#ffe0d6",
    features: ["Pre-workout oxygen boost", "Post-exercise recovery", "High altitude training"],
    badge: "⚡ Performance",
    canColor: "#FF6B35",
  },
  {
    id: "pure", name: "MyO2 Pure", tag: "Everyday Urban Use",
    benefit: "Breathe clean. Live sharp.",
    desc: "Your daily defence against polluted city air. Perfect for commuters, office workers, and anyone living in high-AQI cities.",
    color: "#0099CC", bg: "#f0fbff", border: "#bae8f7",
    features: ["Daily commute shield", "Mental clarity boost", "Anti-pollution defence"],
    badge: "🌟 Most Popular",
    popular: true,
    canColor: "#1a4a9e",
  },
  {
    id: "summit", name: "MyO2 Summit", tag: "Altitude & Trekking",
    benefit: "Reach the summit. Every time.",
    desc: "Built for the Himalayas. From Kedarnath at 3,584m to Ladakh at 5,000m+ — Summit keeps you going.",
    color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0",
    features: ["Himalayan trekking", "Altitude sickness aid", "Emergency oxygen reserve"],
    badge: "🏔️ Altitude Pro",
    canColor: "#1a5c2a",
  },
];

const colours = [
  { name: "Deep Blue", color: "#1a4a9e" },
  { name: "Sky Blue", color: "#5b8dd9" },
  { name: "Forest Green", color: "#1a5c2a" },
  { name: "Matte Black", color: "#222" },
  { name: "Silver", color: "#9ca3af" },
  { name: "Rose Gold", color: "#d4a0a0" },
  { name: "Purple", color: "#7c3aed" },
];

export default function Product() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);

  return (
    <section id="product" className="section-pad px-8 md:px-16" style={{ background: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn className="text-center mb-5">
          <SectionLabel color="cyan">🛒 Products</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl md:text-[3.25rem] leading-tight tracking-tight text-[#0A0F1E] mt-4">
            Pure Oxygen, Built<br /><span className="glow-text">For Every Indian</span>
          </h2>
          <p className="mt-5 text-[#64748B] text-lg max-w-xl mx-auto">
            Three variants. One mission — give every Indian the right to clean air.
          </p>
        </FadeIn>

        {/* Product showcase — full-width image with perspective */}
        <FadeIn delay={0.15} className="mb-6">
          <div ref={ref} className="relative">
            {/* Background gradient */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: "linear-gradient(135deg, #e0f7ff 0%, #f0fdf4 50%, #fff7f5 100%)" }} />

            <motion.div
              style={{ y, rotateX, transformPerspective: 1200 }}
              className="relative z-10 p-6 md:p-10"
            >
              <Image
                src="/images/product-lineup.jpg"
                alt="MyO2 Oxygen Canisters — All 7 Colours"
                width={1200}
                height={560}
                className="w-full object-contain rounded-2xl"
                style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.12))" }}
                priority
              />
            </motion.div>

            {/* Colour swatches */}
            <div className="relative z-10 pb-7 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 md:px-10">
              <p className="font-display font-bold text-[#0A0F1E] text-sm">
                Available in {colours.length} premium colours
              </p>
              <div className="flex gap-2.5 flex-wrap justify-center">
                {colours.map((c) => (
                  <motion.div key={c.name} whileHover={{ scale: 1.3, y: -3 }}
                    title={c.name}
                    className="w-6 h-6 rounded-full border-2 border-white shadow-md cursor-pointer"
                    style={{ background: c.color }} />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* SKU cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {products.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6, boxShadow: `0 20px 60px ${p.color}18, 0 4px 16px rgba(0,0,0,0.06)` }}
                className="rounded-2xl border p-8 h-full bg-white transition-all cursor-pointer relative flex flex-col"
                style={{ borderColor: p.border }}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A0F1E] text-white text-xs font-bold font-display px-4 py-1.5 rounded-full whitespace-nowrap">
                    ✦ Most Popular
                  </div>
                )}

                {/* Can colour chip */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full shadow-sm flex-shrink-0"
                    style={{ background: p.canColor, border: "3px solid white", boxShadow: `0 0 0 2px ${p.color}40` }} />
                  <span className="text-xs font-bold tracking-wider font-display px-3 py-1.5 rounded-full"
                    style={{ color: p.color, background: `${p.color}10`, border: `1px solid ${p.color}30` }}>
                    {p.badge}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-[#0A0F1E] mb-1">{p.name}</h3>
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-3">{p.tag}</p>
                <p className="font-bold text-base mb-3" style={{ color: p.color }}>{p.benefit}</p>
                <p className="text-[#64748B] text-sm leading-relaxed mb-5">{p.desc}</p>

                <div className="flex items-center gap-2 mb-5 p-3 rounded-xl"
                  style={{ background: p.bg, border: `1px solid ${p.border}` }}>
                  <span>🧪</span>
                  <span className="text-xs font-bold text-[#0A0F1E]">95%+ Pure Medical-Grade Oxygen</span>
                </div>

                <ul className="space-y-2 mb-7 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#475569]">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{ background: `${p.color}12`, color: p.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl font-bold font-display text-sm text-white mt-auto"
                  style={{ background: p.popular ? "#0A0F1E" : p.color }}>
                  Add to Cart →
                </motion.button>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
