import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import AQITicker from "@/components/sections/AQITicker";
import Problem from "@/components/sections/Problem";
import Product from "@/components/sections/Product";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCases from "@/components/sections/UseCases";
import Science from "@/components/sections/Science";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AQITicker />
      <Problem />
      <Product />
      <HowItWorks />
      <UseCases />
      <Science />

      {/* AQI Warning Strip */}
      <div className="py-5 px-8 md:px-16 text-center border-y border-red-100"
        style={{ background: "linear-gradient(135deg, #fff5f5, #fff7f5)" }}>
        <p className="font-display font-bold text-[#0A0F1E] text-sm md:text-base">
          🚨 <span className="text-red-500">Don&apos;t wait for a good air day.</span>{" "}
          India&apos;s air won&apos;t fix itself overnight.{" "}
          <a href="#cta" className="text-[#0099CC] underline underline-offset-2 hover:no-underline font-semibold">
            Start breathing better today →
          </a>
        </p>
      </div>

      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
