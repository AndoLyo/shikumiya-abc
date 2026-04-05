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
        "--color-surface": "#F5F8FD",
        "--color-text": "#4A4A60",
        "--color-text-muted": "#9DA0B8",
        "--color-accent": "#8DC8E8",
        "--color-accent-secondary": "#C4B5E0",
        "--color-border": "#E6E0F2",
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif",
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
