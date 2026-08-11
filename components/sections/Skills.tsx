"use client";

import Reveal from "@/components/effects/Reveal";
import { ArrowUpRight } from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive, modern interfaces with a focus on usability, performance, and clean component architecture.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Developing APIs and server-side applications that connect interfaces to data and business logic.",
    skills: [
      "Node.js",
      "REST APIs",
      "Express",
      "Authentication",
      "API Integration",
    ],
  },
  {
    number: "03",
    title: "Database",
    description:
      "Working with structured and application data while building systems that connect software to persistent storage.",
    skills: [
      "MySQL",
      "MongoDB",
      "Firebase",
      "Database Design",
      "SQL",
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description:
      "Using modern development tools to build, debug, manage, and maintain software projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "npm",
      "Postman",
      "Figma",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 md:px-12 lg:px-20 lg:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        {/* Label */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-600">
            04 — Skills
          </p>
        </div>

        {/* Content */}
        <div>
          <Reveal>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Tools I use
              <span className="text-neutral-500"> to build.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
              A growing technical toolkit built through professional
              experience, independent projects, and continuous learning.
            </p>
          </Reveal>

          {/* Skill Groups */}
          <div className="mt-16 sm:mt-20">
            {skillGroups.map((group, index) => (
              <Reveal
                key={group.number}
                y={35}
                delay={index * 0.08}
              >
                <article className="group border-t border-white/10 py-8 sm:py-10">
                  <div className="flex gap-5 sm:gap-8">
                    {/* Number */}
                    <span className="pt-1 font-mono text-xs text-neutral-700">
                      {group.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      {/* Header */}
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-2xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-neutral-300 sm:text-3xl">
                          {group.title}
                        </h3>

                        <ArrowUpRight
                          size={18}
                          className="hidden text-neutral-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white sm:block"
                        />
                      </div>

                      {/* Description */}
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                        {group.description}
                      </p>

                      {/* Skills */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-500 transition-all duration-300 group-hover:border-white/20 group-hover:text-neutral-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Bottom statement */}
          <Reveal delay={0.2}>
            <div className="border-t border-white/10 pt-8 sm:pt-10">
              <p className="max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
                I&apos;m not interested in collecting technologies. I&apos;m
                interested in understanding them well enough to build useful
                things.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}