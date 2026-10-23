"use client";

import Image from "next/image";
import { SectionWrapper } from "../layout/SectionWrapper";
import { projects } from "@/lib/data";
import { ExternalLink, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="projects">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-mono tracking-[0.2em] text-accent uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            Projects
          </div>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Featured work
          </h2>
          <div className="section-rule mt-5" />
          <p className="mt-5 text-lg text-muted">
            Production-minded platforms built for multi-role workflows, payments,
            and real-time experiences.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden border border-border bg-surface-elevated transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5"
            >
              <div className="grid gap-0 lg:grid-cols-[1.25fr_0.95fr]">
                {/* Left: Project Details */}
                <div className="flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
                            0{idx + 1}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-border" />
                          <span className="font-mono text-xs text-muted">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="font-display mt-2 text-3xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-10 w-10 items-center justify-center border border-border bg-surface text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                          aria-label={`${project.title} GitHub`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-10 items-center gap-2 border border-accent bg-accent px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                          aria-label={`${project.title} live demo`}
                        >
                          Live
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>

                    <p className="mt-5 text-base leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-border/80 bg-surface/80 px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() =>
                        setExpandedIndex(expandedIndex === idx ? null : idx)
                      }
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
                    >
                      {expandedIndex === idx
                        ? "Hide details"
                        : "View engineering details"}
                      <ArrowUpRight
                        className={`h-4 w-4 transition-transform duration-300 ${
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
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 border-t border-border pt-6">
                            <p className="text-sm leading-relaxed text-muted">
                              {project.longDescription}
                            </p>
                            <ul className="mt-4 space-y-2.5">
                              {project.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-start gap-3 text-sm text-foreground/85"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right: Project Image & Showcase Panel */}
                <div className="flex flex-col justify-between border-t border-border bg-ink-soft/60 p-6 md:p-8 lg:border-t-0 lg:border-l">
                  {/* Top Image Frame */}
                  <div>
                    <div className="mb-3 flex items-center justify-between text-xs">
                      <span className="font-mono tracking-wider text-muted uppercase">
                        Preview &amp; Identity
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {project.roles}
                      </span>
                    </div>

                    {project.imageType === "banner" ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="group/preview relative block aspect-[16/9] w-full overflow-hidden border border-border/80 bg-black shadow-md transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/10"
                      >
                        <Image
                          src={project.image}
                          alt={`${project.title} Preview Banner`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 420px"
                          className="object-contain p-2 transition-transform duration-700 ease-out group-hover/preview:scale-105"
                          priority={idx === 0}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Top-left status pill */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/75 px-2.5 py-1 text-[11px] font-medium text-emerald-400 backdrop-blur-md border border-white/10">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                          </span>
                          Live Platform
                        </div>

                        {/* Hover action overlay */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 font-mono text-xs font-semibold text-black shadow-lg backdrop-blur-md transition-all duration-300 group-hover/preview:bg-accent group-hover/preview:text-white group-hover/preview:scale-105">
                          <span>Live Demo</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      </a>
                    ) : (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="group/preview relative flex aspect-[16/9] w-full flex-col items-center justify-center overflow-hidden border border-border/80 bg-gradient-to-br from-surface-elevated via-surface to-background p-6 shadow-md transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/10"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-soft),transparent_70%)] opacity-80" />

                        <div className="relative z-10 flex flex-col items-center text-center">
                          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-border/80 bg-surface-elevated/90 p-3 shadow-xl backdrop-blur-md transition-all duration-500 group-hover/preview:scale-110 group-hover/preview:border-accent/60">
                            <Image
                              src={project.image}
                              alt={`${project.title} Logo`}
                              width={68}
                              height={68}
                              className="rounded-lg object-contain drop-shadow"
                            />
                          </div>
                          <p className="font-display mt-3 text-lg font-semibold tracking-tight text-foreground">
                            MultiCart
                          </p>
                          <span className="font-mono text-[11px] tracking-wider text-accent uppercase">
                            Multi-Vendor Marketplace
                          </span>
                        </div>

                        {/* Top-left status pill */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-surface-elevated/90 px-2.5 py-1 text-[11px] font-medium text-emerald-500 backdrop-blur-md border border-border">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                          </span>
                          Live Platform
                        </div>

                        {/* Hover action overlay */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-surface-elevated/95 px-3 py-1 font-mono text-xs font-semibold text-foreground shadow-md backdrop-blur-md transition-all duration-300 group-hover/preview:bg-accent group-hover/preview:text-white group-hover/preview:scale-105 border border-border">
                          <span>Live Demo</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      </a>
                    )}
                  </div>

                  {/* Bottom: Stack Focus & Architecture Summary */}
                  <div className="mt-6 border-t border-border pt-5">
                    <p className="font-mono text-xs tracking-widest text-muted uppercase">
                      Stack focus
                    </p>
                    <p className="font-display mt-2 text-xl font-semibold leading-snug text-foreground">
                      {project.techStack.slice(0, 3).join(" · ")}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 border border-accent/20 bg-accent/5 px-2 py-0.5 font-mono text-[11px] font-medium text-accent"
                        >
                          <span className="h-1 w-1 bg-accent" />
                          {h}
                        </span>
                      ))}
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-muted">
                      Full-stack delivery with authentication, integrated payments,
                      and role-aware access controls.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
