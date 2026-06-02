"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { skills } from "@/lib/data";

export const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Tech <span className="text-accent">Stack</span>.
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-8" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-8">
            <SkillCategory title="Languages" items={skills.languages} />
            <SkillCategory title="Tools & Version Control" items={skills.tools} />
          </div>
          <div className="space-y-8">
            <SkillCategory title="Frameworks & Libraries" items={skills.frameworks} />
            <SkillCategory title="Databases" items={skills.databases} />
          </div>
          <div className="space-y-8">
            <div className="rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 p-8 h-full">
              <h3 className="text-xl font-bold text-foreground mb-6">Core CS Concepts</h3>
              <ul className="space-y-4">
                {skills.coreConcepts.map((concept, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-foreground/80">{concept}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const SkillCategory = ({ title, items }: { title: string, items: any[] }) => {
  return (
    <div className="rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 p-8">
      <h3 className="text-xl font-bold text-foreground mb-6">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-accent/40 hover:bg-white/10 transition-all group">
              <Icon className="w-8 h-8 text-foreground/50 group-hover:text-accent mb-3 transition-colors" />
              <span className="text-xs font-mono font-medium text-foreground/80 group-hover:text-foreground transition-colors">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
