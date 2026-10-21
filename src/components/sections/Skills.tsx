"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { skills, type SkillItem } from "@/lib/data";

export const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Skills
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Technical toolkit
          </h2>
          <div className="section-rule mt-5" />
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

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold">Core CS Concepts</h3>
            <ul className="mt-4 space-y-3">
              {skills.coreConcepts.map((concept) => (
                <li
                  key={concept}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <span className="h-1.5 w-1.5 bg-accent" />
                  {concept}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-semibold">AI & Practices</h3>
            <ul className="mt-4 space-y-3">
              {skills.aiPractices.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <span className="h-1.5 w-1.5 bg-accent" />
                  {item}
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
      <h3 className="mb-4 font-mono text-xs tracking-[0.18em] text-muted uppercase">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="flex items-center gap-3 border border-border bg-surface-elevated px-3 py-3 transition-colors hover:border-accent/50"
            >
              <Icon className="h-5 w-5 shrink-0 text-muted" />
              <span className="font-mono text-xs font-medium text-foreground">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
