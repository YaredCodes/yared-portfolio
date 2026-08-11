"use client";

import Reveal from "@/components/effects/Reveal";

const softwareSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "REST APIs",
  "Git",
];

const itSkills = [
  "Network Management",
  "Wi-Fi",
  "CCTV",
  "Hardware",
  "Troubleshooting",
  "IT Support",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 md:px-12 lg:px-20 lg:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        {/* Section Label */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-600">
            02 — Experience
          </p>
        </div>

        {/* Content */}
        <div>
          {/* Heading */}
          <Reveal>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Where I&apos;ve
              <span className="text-neutral-500"> worked.</span>
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
              A combination of hands-on IT experience and continuous software
              development, giving me both practical technical experience and
              a strong foundation in building software.
            </p>
          </Reveal>

          {/* Experience Timeline */}
          <div className="mt-16 sm:mt-20">
            {/* Software Development */}
            <Reveal y={40}>
              <article className="group border-t border-white/10 py-8 sm:py-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                      Software Development
                    </p>

                    <h3 className="mt-2 text-2xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-neutral-300 sm:text-3xl">
                      Software Engineering Projects
                    </h3>

                    <p className="mt-1 text-sm text-neutral-500">
                      Personal &amp; Independent Development
                    </p>
                  </div>

                  <p className="font-mono text-xs text-neutral-600">
                    Ongoing
                  </p>
                </div>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-500">
                  Developing modern web applications and software projects
                  while transitioning into professional software engineering.
                  My work includes responsive interfaces, full-stack
                  applications, API integration, database-driven systems, and
                  practical digital products.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {softwareSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-500 transition-colors duration-300 group-hover:border-white/20 group-hover:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>

            {/* IT Support */}
            <Reveal y={40} delay={0.1}>
              <article className="group border-t border-white/10 py-8 sm:py-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                      IT / Technology
                    </p>

                    <h3 className="mt-2 text-2xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-neutral-300 sm:text-3xl">
                      IT Support
                    </h3>

                    <p className="mt-1 text-sm text-neutral-500">
                      Yohannes Guest House &amp; Apartments
                    </p>
                  </div>

                  <p className="font-mono text-xs text-neutral-600">
                    2025 — Present
                  </p>
                </div>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-500">
                  Managing day-to-day IT operations across the property,
                  including network infrastructure, Wi-Fi systems, CCTV,
                  printers, hardware, software, and technical troubleshooting.
                  Working as the primary IT resource has given me direct
                  responsibility for keeping critical technology systems
                  operational.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {itSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-500 transition-colors duration-300 group-hover:border-white/20 group-hover:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>

            {/* Education */}
            <Reveal y={40} delay={0.2}>
              <article className="group border-t border-white/10 py-8 sm:py-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                      Education
                    </p>

                    <h3 className="mt-2 text-2xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-neutral-300 sm:text-3xl">
                      B.Sc. Computer Science
                    </h3>

                    <p className="mt-1 text-sm text-neutral-500">
                      Unity University
                    </p>
                  </div>

                  <p className="font-mono text-xs text-neutral-600">
                    2025
                  </p>
                </div>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-500">
                  Computer Science graduate with a foundation in programming,
                  software development, databases, algorithms, and computer
                  systems.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}