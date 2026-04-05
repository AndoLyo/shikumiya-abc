"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Soft pastel gradient orbs */}
      <div
        className="pointer-events-none absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(135,206,250,0.4) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(200,170,255,0.4) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl w-full px-8 sm:px-12 pt-36 pb-24 flex flex-col items-center text-center">
        <motion.p
          className="text-xs tracking-[0.35em] uppercase mb-6"
          style={{ color: "var(--color-accent)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Art Portfolio
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6 tracking-wide"
          style={{ color: "var(--color-text)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          人と人を繋ぐ
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base leading-loose mb-10 max-w-md"
          style={{ color: "var(--color-text-muted)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          AI画像生成初めて約3年経ったけど、全然うまくいかない
        </motion.p>

        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <a
            href="#works"
            className="text-sm tracking-[0.2em] px-8 py-3 rounded-full transition-all duration-300 hover:opacity-80"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "#fff",
            }}
          >
            作品を見る
          </a>
          <a
            href="#about"
            className="text-sm tracking-[0.15em] transition-opacity hover:opacity-60"
            style={{ color: "var(--color-text-muted)" }}
          >
            紹介 →
          </a>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-20 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
    </section>
  );
}
