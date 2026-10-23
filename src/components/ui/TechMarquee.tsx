"use client";

import {
  SiCplusplus,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiMongodb,
  SiGit,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const marqueeItems = [
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

export const TechMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-border/70 bg-surface/60 py-4 backdrop-blur-sm">
      {/* Side fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="marquee-track flex gap-8">
        {[...marqueeItems, ...marqueeItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-surface-elevated px-4 py-2 text-xs font-mono font-medium text-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:scale-105"
            >
              <Icon className="h-4 w-4" style={{ color: item.color }} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
