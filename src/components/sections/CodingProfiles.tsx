"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { codingProfiles } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export const CodingProfiles = () => {
  return (
    <SectionWrapper id="coding-profiles">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Coding <span className="text-accent">Stats</span>.
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Problem Solving Stats */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              Problem Solving
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {codingProfiles.problemSolving.map((profile, idx) => {
                const Icon = profile.icon;
                return (
                  <a
                    key={idx}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-6 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 hover:border-accent/40 hover:bg-black/5 dark:hover:bg-white/5 transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-foreground/50" />
                    </div>
                    <Icon className="w-8 h-8 text-foreground/50 group-hover:text-accent mb-4 transition-colors" />
                    <h4 className="text-lg font-bold text-foreground mb-1">{profile.platform}</h4>
                    <p className="text-sm font-medium text-foreground/60">{profile.stats}</p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Development Status */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              Development Status
            </h3>
            <a
              href={codingProfiles.development.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 hover:border-accent/40 hover:bg-black/5 dark:hover:bg-white/5 transition-all group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  {(() => {
                    const DevIcon = codingProfiles.development.icon;
                    return <DevIcon className="w-10 h-10 text-foreground/50 group-hover:text-accent transition-colors" />;
                  })()}
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{codingProfiles.development.platform}</h4>
                    <p className="text-sm text-foreground/60">@{codingProfiles.development.username}</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-foreground/30 group-hover:text-foreground/70 transition-colors" />
              </div>
              
              {/* GitHub Custom Stats */}
              <div className="w-full grid grid-cols-3 gap-4 mt-8">
                {codingProfiles.development.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                    <span className="text-2xl font-bold text-foreground mb-1">{stat.value}</span>
                    <span className="text-xs font-medium text-foreground/60 text-center">{stat.label}</span>
                  </div>
                ))}
              </div>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
