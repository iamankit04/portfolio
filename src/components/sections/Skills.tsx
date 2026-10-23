"use client";

import { useState } from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { skills, type SkillItem } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, CheckCircle, Sparkles, Filter } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

type SkillTab = "all" | "devops" | "languages" | "frameworks" | "databases" | "tools";

const tabs: { id: SkillTab; label: string }[] = [
  { id: "all", label: "All Skills" },
  { id: "devops", label: "DevOps & Cloud" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools" },
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<SkillTab>("all");

  const filterCategory = (tab: SkillTab) => {
    switch (tab) {
      case "devops":
        return [{ title: "DevOps & Infrastructure", items: skills.devops }];
      case "languages":
        return [{ title: "Programming Languages", items: skills.languages }];
      case "frameworks":
        return [{ title: "Frameworks & Libraries", items: skills.frameworks }];
      case "databases":
        return [{ title: "Databases & Storage", items: skills.databases }];
      case "tools":
        return [{ title: "Developer Tools", items: skills.tools }];
      case "all":
      default:
        return [
          { title: "DevOps & Cloud", items: skills.devops },
          { title: "Languages", items: skills.languages },
          { title: "Frameworks & Libraries", items: skills.frameworks },
          { title: "Databases", items: skills.databases },
          { title: "Tools", items: skills.tools },
        ];
    }
  };

  const currentCategories = filterCategory(activeTab);

  return (
    <SectionWrapper id="skills" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
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

          {/* Interactive Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-border/70 bg-surface-elevated p-1.5 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-lg bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <motion.div layout className="mt-12 grid gap-8 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {currentCategories.map((category) => (
              <motion.div
                key={category.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mb-4 font-mono text-xs tracking-[0.18em] text-muted uppercase font-medium">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {category.items.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <SpotlightCard
                        key={item.name}
                        className="p-3 transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 cursor-default"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 shrink-0 text-muted transition-colors duration-200 group-hover:text-accent" />
                          <span className="font-mono text-xs font-medium text-foreground">
                            {item.name}
                          </span>
                        </div>
                      </SpotlightCard>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Core CS and AI Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <SpotlightCard className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                Core CS Foundations
              </h3>
              <Sparkles className="h-4 w-4 text-accent/60" />
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
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
          </SpotlightCard>

          <SpotlightCard className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                AI &amp; Modern Practices
              </h3>
              <Sparkles className="h-4 w-4 text-accent/60" />
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
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
          </SpotlightCard>
        </div>
      </div>
    </SectionWrapper>
  );
};
