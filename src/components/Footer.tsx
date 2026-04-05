"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-8 sm:px-12 pt-10 pb-8"
      style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: site name */}
        <div className="flex items-center gap-3">
          <p
            className="text-sm font-semibold tracking-[0.1em]"
            style={{ color: "var(--color-text)" }}
          >
            Lyo
          </p>
          <p
            className="text-[10px] tracking-[0.2em]"
            style={{ color: "var(--color-text-muted)" }}
          >
            Art Portfolio
          </p>
        </div>

        {/* Center: nav links */}
        <nav className="flex gap-8">
          {[
            { label: "Gallery", href: "#works" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs tracking-[0.2em] transition-opacity hover:opacity-50"
              style={{ color: "var(--color-text-muted)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: copyright */}
        <p
          className="text-[11px] tracking-[0.1em]"
          style={{ color: "var(--color-text-muted)" }}
        >
          &copy; {year} Lyo
        </p>
      </div>
    </footer>
  );
}
