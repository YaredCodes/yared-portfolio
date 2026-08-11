"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      id="about"
     initial={{
  opacity: 0,
  y: 40,
}}
whileInView={{
  opacity: 1,
  y: 0,
}}
      viewport={{
        once: true,
        amount: 0.1,
      }}
     transition={{
  duration: 0.8,
  ease: "easeOut",
}}
      className="relative overflow-hidden border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 md:px-12 lg:px-20 lg:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-600">
            01 — About
          </p>
        </div>

        <div>
          <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            A developer who
            <span className="text-neutral-500">
              {" "}
              likes solving real problems.
            </span>
          </h2>

          <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-neutral-400 sm:text-lg">
            <p>
              I&apos;m Yared Abebe, a Computer Science graduate focused on
              becoming a software engineer.
            </p>

            <p>
              My background in IT support has given me hands-on experience
              solving real technical problems, working with networks,
              hardware, systems, and users. Now I&apos;m taking that
              problem-solving mindset deeper into software development.
            </p>

            <p>
              I enjoy building practical applications, learning modern
              technologies, and turning ideas into software that people can
              actually use.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}