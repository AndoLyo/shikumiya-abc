"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-8 sm:px-12"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Contact
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-[0.06em] mb-6"
            style={{ color: "var(--color-text)" }}
          >
            お問い合わせ
          </h2>
          <p
            className="text-sm leading-loose max-w-md mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            お仕事のご依頼・コラボレーション・ご質問は
            <br />
            お気軽にどうぞ。
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="mailto:ryoya112@outlook.com"
            className="group inline-flex items-center gap-3 text-sm tracking-[0.15em] px-10 py-4 rounded-full transition-all duration-300 hover:opacity-80"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "#fff",
            }}
          >
            <Mail size={16} strokeWidth={1.5} />
            <span>ryoya112@outlook.com</span>
          </a>
        </motion.div>

        {/* Thin divider */}
        <motion.div
          className="flex items-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <div className="flex-1 h-px" style={{ backgroundColor: "var(--color-border)" }} />
          <span
            className="text-xs tracking-[0.25em] flex-shrink-0"
            style={{ color: "var(--color-text-muted)" }}
          >
            SNS
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "var(--color-border)" }} />
        </motion.div>

        {/* Social links — X only */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <a
            href="https://x.com/tohkaai?s=21&t=X2NTXj7ncxDYhkSWUJ_dig"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 transition-opacity hover:opacity-60"
            aria-label="X (Twitter)"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)",
              }}
            >
              <span className="text-sm font-semibold">𝕏</span>
            </div>
            <span
              className="text-xs tracking-[0.15em]"
              style={{ color: "var(--color-text-muted)" }}
            >
              @tohkaai
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
