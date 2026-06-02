"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { projects } from "@/lib/data";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="projects" className="bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-accent">Work</span>.
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-8" />
          <p className="text-foreground/70 text-lg">
            Real-world applications built to solve complex problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              layout
              className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden group hover:border-accent/40 transition-colors"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/5 rounded-xl text-accent">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors text-accent"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-mono text-foreground/70 group-hover:border-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                  className="text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                >
                  {expandedIndex === idx ? "Hide Details" : "View Core Engineering Features"}
                </button>

                <AnimatePresence>
                  {expandedIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-white/10">
                        <p className="text-sm text-foreground/70 mb-4">
                          {project.longDescription}
                        </p>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                              <span className="text-accent mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
