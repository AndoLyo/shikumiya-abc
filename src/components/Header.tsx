"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Gallery", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.96)"
          : "rgba(255, 255, 255, 0.0)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 py-5">
        {/* Site name */}
        <a
          href="#"
          className="text-base sm:text-lg font-semibold tracking-[0.12em] transition-opacity hover:opacity-70"
          style={{ color: "var(--color-text)" }}
        >
          Lyo
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm tracking-[0.15em] transition-colors group"
              style={{ color: "var(--color-text-muted)" }}
            >
              {item.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-400 group-hover:w-full"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs tracking-[0.2em] px-5 py-2 rounded-full transition-colors duration-300 hover:opacity-80"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "#fff",
            }}
          >
            お問い合わせ
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden transition-opacity hover:opacity-60"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="メニューを開く"
          style={{ color: "var(--color-text)" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Bottom border line */}
      {scrolled && (
        <div
          className="h-px"
          style={{ backgroundColor: "var(--color-border)" }}
        />
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="fixed inset-0 top-[72px] z-40 flex flex-col px-8 py-10 md:hidden"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="py-5 text-2xl tracking-[0.15em] border-b"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text)",
                animationDelay: `${i * 80}ms`,
              }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-8 self-start text-sm tracking-[0.2em] px-6 py-3 rounded-full"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "#fff",
            }}
            onClick={() => setMobileOpen(false)}
          >
            お問い合わせ
          </a>
        </nav>
      )}
    </header>
  );
}
