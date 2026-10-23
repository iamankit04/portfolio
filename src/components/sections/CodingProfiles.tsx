"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { codingProfiles, personalData } from "@/lib/data";
import { ExternalLink, Trophy, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const CodingProfiles = () => {
  return (
    <SectionWrapper id="coding-profiles">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-mono tracking-[0.2em] text-accent uppercase">
            <Trophy className="h-3.5 w-3.5" />
            Coding Stats
          </div>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Problem solving &amp; shipping
          </h2>
          <div className="section-rule mt-5" />
          <p className="mt-5 text-lg text-muted">
            <span className="font-semibold text-foreground">
              <AnimatedCounter value={personalData.stats.problemsSolved} />
            </span>{" "}
            problems solved across platforms ·{" "}
            <span className="font-semibold text-accent">
              <AnimatedCounter value={personalData.stats.leetcodeRating} />
            </span>{" "}
            contest rating
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted font-medium">
                Competitive Programming Platforms
              </h3>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] text-accent">
                <Flame className="h-3.5 w-3.5" />
                Active Solver
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {codingProfiles.problemSolving.map((profile, idx) => {
                const Icon = profile.icon;
                return (
                  <motion.div
                    key={profile.platform}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                  >
                    <a
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <SpotlightCard className="h-full p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
                            <Icon className="h-5 w-5" />
                          </div>
                          <ExternalLink className="h-4 w-4 shrink-0 text-muted opacity-40 transition-all duration-200 hover:text-accent hover:opacity-100" />
                        </div>
                        <h4 className="mt-3.5 font-semibold text-foreground transition-colors group-hover:text-accent">
                          {profile.platform}
                        </h4>
                        <p className="mt-1 font-mono text-xs text-muted">{profile.stats}</p>
                      </SpotlightCard>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-muted font-medium">
              Development Activity
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <a
                href={codingProfiles.development.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <SpotlightCard className="p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      {(() => {
                        const DevIcon = codingProfiles.development.icon;
                        return (
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors group-hover:border-accent/50 group-hover:text-accent">
                            <DevIcon className="h-6 w-6" />
                          </div>
                        );
                      })()}
                      <div>
                        <h4 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                          {codingProfiles.development.platform}
                        </h4>
                        <p className="font-mono text-xs text-muted">
                          @{codingProfiles.development.username}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6">
                    {codingProfiles.development.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display text-2xl font-semibold text-foreground">
                          <AnimatedCounter value={stat.value} />
                        </p>
                        <p className="mt-1 font-mono text-[11px] text-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
