"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { Cloud, Cpu, Server, Layers, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const focusAreas = [
  {
    icon: Cloud,
    title: "DevOps",
    badge: "Cloud-Native",
    description:
      "Docker, Kubernetes, Terraform, Jenkins, GitLab CI, and AWS for reliable cloud-native delivery.",
  },
  {
    icon: Server,
    title: "Backend",
    badge: "Scalable APIs",
    description:
      "Node.js, Express, REST APIs, and NextAuth.js with role-based access control.",
  },
  {
    icon: Cpu,
    title: "Frontend",
    badge: "Modern UI/UX",
    description:
      "React, Next.js, Tailwind CSS, and TypeScript for polished, accessible interfaces.",
  },
  {
    icon: Layers,
    title: "Systems",
    badge: "DSA & Core",
    description:
      "DSA, OOP, and practical system design for scalable multi-role platforms.",
  },
];

export const About = () => {
  return (
    <SectionWrapper id="about" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-mono tracking-[0.2em] text-accent uppercase">
            <Code2 className="h-3.5 w-3.5" />
            About
          </div>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Shipping software with DevOps at the core
          </h2>
          <div className="section-rule mt-5" />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              I am a{" "}
              <strong className="font-medium text-foreground">
                B.Tech CSE student
              </strong>{" "}
              at G.L. Bajaj Institute of Technology and Management, with a
              primary focus on{" "}
              <strong className="font-medium text-accent">DevOps</strong>,
              cloud infrastructure, and automated delivery pipelines.
            </p>
            <p>
              I work with{" "}
              <strong className="font-medium text-foreground">
                Docker, Kubernetes, Terraform, CI/CD, and AWS
              </strong>{" "}
              to containerize, orchestrate, and provision reliable environments.
              Full-stack delivery with{" "}
              <strong className="font-medium text-foreground">
                TypeScript and Next.js
              </strong>{" "}
              complements that infrastructure focus when building end-to-end
              products.
            </p>
            <p>
              Competitive programming and{" "}
              <strong className="font-medium text-foreground">
                Data Structures &amp; Algorithms
              </strong>{" "}
              sharpen how I approach complex logic and keep systems efficient
              under real-world load.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group relative border border-border bg-surface-elevated p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] text-muted uppercase tracking-wider">
                      {area.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
