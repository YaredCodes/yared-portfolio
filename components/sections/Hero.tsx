"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 sm:px-8 md:px-12 lg:px-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-600px w-600px -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/2.5 blur-[140px]" />

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full"
      >
        {/* Eyebrow */}
        <motion.div variants={heroItem} className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
            Yared Abebe — Software Engineer
          </p>
        </motion.div>

        {/* Main Heading */}
        <div className="max-w-7xl">
          <motion.h1
            variants={heroItem}
            className="text-[clamp(3.5rem,10vw,9rem)] font-medium leading-[0.88] tracking-[-0.06em] text-white"
          >
            I build
            <br />
            <span className="text-neutral-500">digital</span>
            <br />
            experiences.
          </motion.h1>
        </div>

        {/* Bottom Content */}
        <motion.div
          variants={heroItem}
          className="mt-12 flex flex-col gap-10 sm:mt-16 md:flex-row md:items-end md:justify-between"
        >
          {/* Description */}
          <p className="max-w-md text-base leading-relaxed text-neutral-400 sm:text-lg">
            Computer Science graduate focused on building modern,
            user-centered web applications and solving real-world problems
            through software.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              View my work

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-neutral-300 transition-colors duration-300 hover:border-white/30 hover:text-white"
            >
              Contact me
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          variants={heroItem}
          href="#about"
          className="group absolute -bottom-7.5 right-0 hidden items-center gap-3 text-neutral-600 transition-colors hover:text-white md:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Scroll to explore
          </span>

          <ArrowDown
            size={15}
            className="animate-bounce transition-transform duration-300 group-hover:translate-y-1"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}