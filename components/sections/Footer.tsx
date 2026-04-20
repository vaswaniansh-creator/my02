"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [tooltip, setTooltip] = useState(false);

  return (
    <>
      <footer className="border-t border-slate-200 px-8 md:px-16 py-16 relative bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="font-display font-extrabold text-3xl tracking-tight mb-3 text-[#0A0F1E]">
                My<span className="glow-text">O</span><span className="glow-text" style={{ fontSize: "0.65em", verticalAlign: "super", lineHeight: 0 }}>2</span>
              </div>
              <p className="text-[#64748B] text-sm leading-relaxed max-w-sm mb-5">
                India&apos;s first portable supplemental oxygen brand. Built for the urban warrior, the mountain climber, and every Indian who refuses to breathe dirty.
              </p>
              <p className="font-display font-bold text-[#0099CC] text-sm italic">
                &ldquo;Breathe on Your Terms&rdquo;
              </p>

              <div className="mt-6">
                <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-3 font-display">Get AQI Alerts + Offers</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2.5 text-sm rounded-xl outline-none text-[#0A0F1E]"
                    style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2.5 rounded-xl text-sm font-bold text-white"
                    style={{ background: "#0099CC" }}
                  >
                    →
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <p className="font-display font-bold text-[#0A0F1E] text-sm mb-4 uppercase tracking-wider">Product</p>
              <ul className="space-y-2.5">
                {["MyO2 Sport", "MyO2 Pure", "MyO2 Summit", "All Colours", "Bundle Packs"].map((l) => (
                  <li key={l}><a href="#" className="text-sm text-[#64748B] hover:text-[#0A0F1E] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display font-bold text-[#0A0F1E] text-sm mb-4 uppercase tracking-wider">Company</p>
              <ul className="space-y-2.5">
                {["About Us", "The Science", "Blog", "Press Kit", "Contact"].map((l) => (
                  <li key={l}><a href="#" className="text-sm text-[#64748B] hover:text-[#0A0F1E] transition-colors">{l}</a></li>
                ))}
              </ul>

              <p className="font-display font-bold text-[#0A0F1E] text-sm mt-6 mb-3 uppercase tracking-wider">Follow</p>
              <div className="flex gap-3">
                {[
                  { icon: "📸", label: "Instagram" },
                  { icon: "▶️", label: "YouTube" },
                  { icon: "💬", label: "WhatsApp" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href="#"
                    whileHover={{ scale: 1.2, y: -2 }}
                    title={s.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#94A3B8]">© 2025 MyO2 India. All rights reserved.</p>
            <p className="text-xs text-[#94A3B8] text-center max-w-md">
              MyO2 is not a medical device. It is a supplemental oxygen product for general wellness. Consult a physician for medical conditions.
            </p>
            <div className="flex gap-4">
              {["Privacy", "Terms", "Shipping"].map((l) => (
                <a key={l} href="#" className="text-xs text-[#94A3B8] hover:text-[#0A0F1E] transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {tooltip && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              className="absolute bottom-16 right-0 bg-[#0A0F1E] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap"
            >
              💬 Chat with us on WhatsApp
              <div className="absolute bottom-[-5px] right-5 w-2.5 h-2.5 bg-[#0A0F1E] rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ boxShadow: ["0 0 0 0 rgba(37,211,102,0.4)", "0 0 0 12px rgba(37,211,102,0)", "0 0 0 0 rgba(37,211,102,0)"] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl"
          style={{ background: "#25D366" }}
        >
          💬
        </motion.a>
      </div>
    </>
  );
}
