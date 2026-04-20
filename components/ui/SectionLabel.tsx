export default function SectionLabel({
  children,
  color = "cyan",
}: {
  children: React.ReactNode;
  color?: "cyan" | "amber" | "red";
}) {
  const colors = {
    cyan: "text-[#00D4FF] border-[#00D4FF]/30 bg-[#00D4FF]/08",
    amber: "text-[#FF6B35] border-[#FF6B35]/30 bg-[#FF6B35]/08",
    red: "text-red-400 border-red-400/30 bg-red-400/08",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase font-display ${colors[color]}`}
      style={{ background: color === "cyan" ? "rgba(0,212,255,0.06)" : color === "amber" ? "rgba(255,107,53,0.06)" : "rgba(239,68,68,0.06)" }}
    >
      {children}
    </span>
  );
}
