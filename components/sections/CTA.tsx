"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section id="cta" className="section-pad px-8 md:px-16 relative" style={{ background: "#f8fafc" }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <motion.div
            whileHover={{ boxShadow: "0 0 60px rgba(0,153,204,0.1)" }}
            className="bg-white rounded-3xl border border-slate-200 p-10 md:p-16 text-center relative overflow-hidden shadow-sm"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(0,153,204,0.05) 0%, transparent 70%)" }} />

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-6xl mb-6"
            >
              🌬️
            </motion.div>

            <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight tracking-tight text-[#0A0F1E] mb-4">
              Don&apos;t Wait for a<br />
              <span className="glow-text">Good Air Day.</span>
            </h2>
            <p className="text-[#64748B] text-lg mb-10 max-w-xl mx-auto">
              Join 50,000+ Indians on the MyO2 waitlist. Be the first to breathe better when we launch in your city.
            </p>

            {!done ? (
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto flex-wrap justify-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-5 py-3.5 rounded-xl text-sm font-body outline-none transition-all text-[#0A0F1E]"
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    minWidth: "220px",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#0099CC"}
                  onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
                />
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(0,153,204,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="px-6 py-3.5 rounded-xl font-bold font-display text-sm text-white"
                  style={{ background: "#0A0F1E" }}
                >
                  Join Waitlist →
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <span className="text-3xl">✅</span>
                <p className="font-display font-bold text-[#0099CC] mt-2 text-lg">You&apos;re on the list!</p>
                <p className="text-[#64748B] text-sm mt-1">We&apos;ll notify you the moment MyO2 lands in your city.</p>
              </motion.div>
            )}

            <p className="text-xs text-[#94A3B8] mt-5">
              No spam. No nonsense. Just clean air updates. Unsubscribe anytime.
            </p>

            <div className="flex justify-center gap-6 mt-8 flex-wrap">
              {["🔒 Secure & Private", "🇮🇳 Made for India", "🧪 Lab Certified"].map((b) => (
                <span key={b} className="text-xs text-[#64748B] font-medium">{b}</span>
              ))}
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
