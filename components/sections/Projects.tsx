"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/effects/Reveal";

const projects = [
  {
    number: "01",
    title: "Yohannes Guest House Platform",
    category: "Hospitality / Web Platform",
    description:
      "A modern digital platform for a real hospitality business, designed to improve the online guest experience and present the property, rooms, and services professionally.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "In Development",
    featured: true,
  },
  {
    number: "02",
    title: "Multi-Vendor E-Commerce Platform",
    category: "E-Commerce / Web Application",
    description:
      "A marketplace concept designed around vendors, products, customers, and administrative management.",
    technologies: ["JavaScript", "PHP", "MySQL"],
    status: "Completed",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 md:px-12 lg:px-20 lg:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        {/* Section Label */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-600">
            03 — Selected Work
          </p>
        </div>

        {/* Content */}
        <div>
          {/* Heading */}
         <Reveal>
  <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
    Things I&apos;ve
    <span className="text-neutral-500"> built.</span>
  </h2>
</Reveal>

          <Reveal delay={0.1}>
  <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
    A selection of projects where I&apos;ve turned ideas, problems,
    and requirements into working software.
  </p>
</Reveal>

          {/* Projects */}
          <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-24">
            {projects.map((project) => (
              <Reveal key={project.number} y={50}>
  <article className="group border-t border-white/10 py-10 sm:py-14">
                  {/* Project Number */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-xs text-neutral-600">
                      {project.number}
                    </span>

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                      {project.status}
                    </span>
                  </div>

                  {/* Visual */}
                  <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                    {/* Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                          Project Preview
                        </p>

                        <p className="mt-3 text-xl font-medium text-neutral-500 sm:text-3xl">
                          {project.title}
                        </p>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                    {/* View Button */}
                    <div className="absolute bottom-5 right-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Information */}
                  <div className="mt-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                      {project.category}
                    </p>

                    <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-3xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-neutral-300 sm:text-4xl">
                        {project.title}
                      </h3>
                    </div>

                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-500">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-500 transition-colors duration-300 group-hover:border-white/20 group-hover:text-neutral-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}