"use client";

const cities = [
  { name: "Delhi", aqi: 387, level: "Hazardous", color: "#ef4444" },
  { name: "Patna", aqi: 412, level: "Hazardous", color: "#ef4444" },
  { name: "Kolkata", aqi: 244, level: "Very Unhealthy", color: "#a855f7" },
  { name: "Mumbai", aqi: 178, level: "Unhealthy", color: "#FF6B35" },
  { name: "Lucknow", aqi: 298, level: "Very Unhealthy", color: "#a855f7" },
  { name: "Kanpur", aqi: 356, level: "Hazardous", color: "#ef4444" },
  { name: "Hyderabad", aqi: 142, level: "Sensitive Groups", color: "#f59e0b" },
  { name: "Varanasi", aqi: 321, level: "Hazardous", color: "#ef4444" },
  { name: "Bangalore", aqi: 124, level: "Unhealthy for Sensitive", color: "#f59e0b" },
  { name: "Ahmedabad", aqi: 193, level: "Unhealthy", color: "#FF6B35" },
];

const items = [...cities, ...cities];

export default function AQITicker() {
  return (
    <div className="relative py-3.5 overflow-hidden border-y border-slate-200 bg-slate-50">
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #f8fafc, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #f8fafc, transparent)" }} />

      <div className="flex animate-ticker whitespace-nowrap" style={{ width: "max-content" }}>
        {items.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-8 text-xs font-semibold font-display">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.color }} />
            <span className="text-[#0A0F1E]">{c.name}:</span>
            <span style={{ color: c.color }}>AQI {c.aqi}</span>
            <span className="text-[#94A3B8]">— {c.level}</span>
            <span className="text-[#cbd5e1] mx-1">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
