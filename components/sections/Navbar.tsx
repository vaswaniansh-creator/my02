"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const shadow = useTransform(scrollY, [0, 80], ["0 0 0 rgba(0,0,0,0)", "0 1px 0 rgba(0,0,0,0.08)"]);
  const bg = useTransform(scrollY, [0, 60], ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]);
  const blur = useTransform(scrollY, [0, 60], ["blur(0px)", "blur(16px)"]);

  return (
    <motion.nav
      style={{ backgroundColor: bg, backdropFilter: blur, boxShadow: shadow }}
      className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-5 flex items-center justify-between"
    >
      <a href="#" className="font-display font-extrabold text-2xl tracking-tight text-[#0A0F1E]">
        My<span className="glow-text">O</span><span className="glow-text" style={{ fontSize: "0.65em", verticalAlign: "super", lineHeight: 0 }}>2</span>
      </a>

      <ul className="hidden md:flex items-center gap-10">
        {["Problem", "Product", "Science", "Reviews"].map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-[#64748B] hover:text-[#0A0F1E] transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <span className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-red-500 bg-red-50 border border-red-100 rounded-full px-3 py-1.5">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          Delhi AQI: 387
        </span>
        <a href="#cta" className="btn-primary text-sm py-2.5 px-5">Shop Now →</a>
      </div>
    </motion.nav>
  );
}
