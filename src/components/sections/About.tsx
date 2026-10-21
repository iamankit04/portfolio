"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { Cloud, Cpu, Server, Layers } from "lucide-react";

const focusAreas = [
  {
    icon: Cloud,
    title: "DevOps",
    description:
      "Docker, Kubernetes, Terraform, Jenkins, GitLab CI, and AWS for reliable cloud-native delivery.",
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "Node.js, Express, REST APIs, and NextAuth.js with role-based access control.",
  },
  {
    icon: Cpu,
    title: "Frontend",
    description:
      "React, Next.js, Tailwind CSS, and TypeScript for polished, accessible interfaces.",
  },
  {
    icon: Layers,
    title: "Systems",
    description:
      "DSA, OOP, and practical system design for scalable multi-role platforms.",
  },
];

export const About = () => {
  return (
    <SectionWrapper id="about" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            About
          </p>
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
              <strong className="font-medium text-foreground">DevOps</strong>,
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

          <div className="grid gap-6 sm:grid-cols-2">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="border-t border-border pt-5">
                  <Icon className="mb-3 h-5 w-5 text-accent" />
                  <h3 className="text-base font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
