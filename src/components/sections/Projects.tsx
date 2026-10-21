"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { projects } from "@/lib/data";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="projects">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Projects
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Featured work
          </h2>
          <div className="section-rule mt-5" />
          <p className="mt-5 text-lg text-muted">
            Production-minded platforms built for multi-role workflows, payments,
            and real-time experiences.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              layout
              className="group border border-border bg-surface-elevated transition-colors hover:border-accent/40"
            >
              <div className="grid gap-0 lg:grid-cols-[1.4fr_0.8fr]">
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs tracking-widest text-muted uppercase">
                        0{idx + 1}
                      </p>
                      <h3 className="font-display mt-2 text-3xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 items-center gap-2 border border-accent bg-accent px-4 text-sm font-semibold text-white transition-all hover:brightness-110"
                        aria-label={`${project.title} live demo`}
                      >
                        Live
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border px-3 py-1 font-mono text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === idx ? null : idx)
                    }
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
                  >
                    {expandedIndex === idx
                      ? "Hide details"
                      : "View engineering details"}
                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform ${
                        expandedIndex === idx ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 border-t border-border pt-6">
                          <p className="text-sm leading-relaxed text-muted">
                            {project.longDescription}
                          </p>
                          <ul className="mt-4 space-y-2">
                            {project.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3 text-sm text-foreground/85"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex min-h-[180px] flex-col justify-end border-t border-border bg-ink-soft p-8 lg:border-t-0 lg:border-l">
                  <p className="font-mono text-xs tracking-widest text-muted uppercase">
                    Stack focus
                  </p>
                  <p className="font-display mt-3 text-2xl font-semibold leading-snug">
                    {project.techStack.slice(0, 3).join(" · ")}
                  </p>
                  <p className="mt-4 text-sm text-muted">
                    Full-stack TypeScript delivery with auth, payments, and
                    role-aware UX.
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
