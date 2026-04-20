import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyO2 — Breathe on Your Terms | India's Pure Oxygen Brand",
  description: "MyO2 gives you 95%+ pure portable oxygen for India's polluted cities, high-altitude trekking, and athletic performance. Breathe on your terms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
