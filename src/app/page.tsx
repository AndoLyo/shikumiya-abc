"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function InkWashPage() {
  return (
    <div
      className="ink-wash-template"
      style={{
        "--color-bg": "#FFFFFF",
        "--color-surface": "#F8FAFF",
        "--color-text": "#3A3A4A",
        "--color-text-muted": "#8E8EA0",
        "--color-accent": "#7EC8E3",
        "--color-accent-secondary": "#C4A8E0",
        "--color-border": "#E8E0F0",
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        minHeight: "100vh",
      } as React.CSSProperties}
    >
      <Header />
      <main>
        <HeroSection />
        <WorksSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
