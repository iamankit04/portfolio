"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { skills, type SkillItem } from "@/lib/data";
import { motion } from "framer-motion";
import { Wrench, CheckCircle } from "lucide-react";

export const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-mono tracking-[0.2em] text-accent uppercase">
            <Wrench className="h-3.5 w-3.5" />
            Skills
          </div>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Technical toolkit
          </h2>
          <div className="section-rule mt-5" />
          <p className="mt-5 text-lg text-muted">
            Modern tools, infrastructure platforms, and languages applied across production builds.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <SkillCategory title="Languages" items={skills.languages} />
          <SkillCategory
            title="Frameworks & Libraries"
            items={skills.frameworks}
          />
          <SkillCategory title="Databases" items={skills.databases} />
          <SkillCategory title="Tools" items={skills.tools} />
          <SkillCategory title="DevOps" items={skills.devops} />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="border border-border/70 bg-surface-elevated p-6 shadow-sm">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              Core CS Foundations
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {skills.coreConcepts.map((concept) => (
                <li
                  key={concept}
                  className="flex items-center gap-2.5 text-xs font-medium text-foreground/90"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                  <span>{concept}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border/70 bg-surface-elevated p-6 shadow-sm">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              AI &amp; Modern Practices
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {skills.aiPractices.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-xs font-medium text-foreground/90"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const SkillCategory = ({
  title,
  items,
}: {
  title: string;
  items: SkillItem[];
}) => {
  return (
    <div>
      <h3 className="mb-4 font-mono text-xs tracking-[0.18em] text-muted uppercase font-medium">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group flex items-center gap-3 border border-border bg-surface-elevated px-3 py-3 transition-all duration-200 hover:border-accent/60 hover:shadow-md hover:shadow-accent/5 cursor-default"
            >
              <Icon className="h-5 w-5 shrink-0 text-muted transition-colors duration-200 group-hover:text-accent" />
              <span className="font-mono text-xs font-medium text-foreground transition-colors group-hover:text-foreground">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
