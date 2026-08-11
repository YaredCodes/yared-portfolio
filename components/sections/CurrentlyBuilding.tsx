"use client";

import Reveal from "@/components/effects/Reveal";
import { ArrowUpRight, Sparkles } from "lucide-react";

const focusAreas = [
  {
    title: "Software Engineering",
    description:
      "Building production-style web applications and strengthening my skills across the full development lifecycle.",
  },
  {
    title: "Modern Web Development",
    description:
      "Working with React, Next.js, TypeScript, APIs, databases, and modern development workflows.",
  },
  {
    title: "Real-World Products",
    description:
      "Turning real problems into useful software instead of building projects that only exist as tutorials.",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section
      id="building"
      className="relative overflow-hidden border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 md:px-12 lg:px-20 lg:py-40"
    >
      {/* Background detail */}
      <div className="pointer-events-none absolute -right-45 top-1/2 h-100 w-100 -translate-y-1/2 rounded-full bg-white/2.5 blur-[120px]" />

      <div className="relative z-10 grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        {/* Label */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-600">
            05 — Currently Building
          </p>
        </div>

        {/* Content */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-30" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                Active
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-8 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Building my
              <span className="text-neutral-500"> next chapter.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
              I&apos;m focused on becoming a stronger software engineer by
              consistently building, learning, and working on problems that
              resemble the kind of work I want to do professionally.
            </p>
          </Reveal>

          {/* Focus Areas */}
          <div className="mt-16 sm:mt-20">
            {focusAreas.map((area, index) => (
              <Reveal
                key={area.title}
                y={35}
                delay={index * 0.08}
              >
                <article className="group border-t border-white/10 py-8 sm:py-10">
                  <div className="flex gap-5 sm:gap-8">
                    <div className="mt-1">
                      <Sparkles
                        size={16}
                        className="text-neutral-700 transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-neutral-300 sm:text-2xl">
                          {area.title}
                        </h3>

                        <ArrowUpRight
                          size={17}
                          className="mt-1 shrink-0 text-neutral-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                        />
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Closing statement */}
          <Reveal delay={0.2}>
            <div className="border-t border-white/10 pt-8 sm:pt-10">
              <p className="max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
                The goal isn&apos;t to know everything. It&apos;s to keep
                becoming the kind of engineer who can take an unfamiliar
                problem and figure it out.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}