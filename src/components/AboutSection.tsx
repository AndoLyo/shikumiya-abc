"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 px-8 sm:px-12"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left — photo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[320px]">
              <div
                className="relative z-10 overflow-hidden rounded-2xl"
                style={{
                  aspectRatio: "1/1",
                  backgroundColor: "var(--color-border)",
                }}
              >
                <Image
                  src="/images/about.webp"
                  alt="Lyo"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
              {/* Decorative pastel shape behind */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl -z-0"
                style={{ backgroundColor: "var(--color-accent-secondary)", opacity: 0.15 }}
              />
            </div>
          </motion.div>

          {/* Right — text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            <p
              className="text-xs tracking-[0.35em] uppercase mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              About
            </p>
            <h2
              className="text-2xl sm:text-3xl font-semibold tracking-[0.04em] mb-6 leading-snug"
              style={{ color: "var(--color-text)" }}
            >
              はじめまして、
              <br />
              <span style={{ color: "var(--color-accent)" }}>
                Lyo
              </span>
              です。
            </h2>

            <p
              className="text-sm leading-loose mb-5"
              style={{ color: "var(--color-text-muted)" }}
            >
              AI画像生成初めて約3年経ったけど、全然うまくいかない
            </p>

            {/* Quote */}
            <div
              className="border-l-2 pl-5 py-2 mb-8"
              style={{ borderColor: "var(--color-accent)" }}
            >
              <p
                className="text-sm italic leading-relaxed"
                style={{ color: "var(--color-text)" }}
              >
                &ldquo;人と人を繋ぐ&rdquo;
              </p>
            </div>

            {/* Divider */}
            <div
              className="w-16 h-px"
              style={{ background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-secondary))" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
