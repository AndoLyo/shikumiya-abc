"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/site.config";

export default function WorksSection() {
  const works = siteConfig.gallery.works;

  return (
    <section
      id="works"
      className="py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      {/* Section header */}
      <div className="mx-auto max-w-6xl px-8 sm:px-12 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Selected Works
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold tracking-[0.05em]"
            style={{ color: "var(--color-text)" }}
          >
            作品一覧
          </h2>
          <div
            className="mt-3 w-16 h-px"
            style={{ background: "linear-gradient(90deg, var(--color-accent), var(--color-accent-secondary))" }}
          />
        </motion.div>
      </div>

      {/* Grid gallery */}
      <div className="mx-auto max-w-6xl px-8 sm:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {works.map((work, i) => (
            <motion.div
              key={work.src}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              style={{ aspectRatio: "1/1" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            >
              <Image
                src={work.src}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)" }}
              >
                <span className="text-white text-sm tracking-wider">
                  {work.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
