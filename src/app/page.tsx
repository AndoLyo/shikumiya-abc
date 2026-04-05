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
        "--color-bg": "#F5F0E8",
        "--color-surface": "#FEFCF7",
        "--color-text": "#2C2C2C",
        "--color-text-muted": "#8B8578",
        "--color-accent": "#C73E3A",
        "--color-accent-secondary": "#3D6B5E",
        "--color-border": "#D5CBBB",
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "'Hiragino Mincho ProN', 'Yu Mincho', 'YuMincho', 'Noto Serif JP', Georgia, serif",
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
