"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { codingProfiles, personalData } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export const CodingProfiles = () => {
  return (
    <SectionWrapper id="coding-profiles">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Coding Stats
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Problem solving &amp; shipping
          </h2>
          <div className="section-rule mt-5" />
          <p className="mt-5 text-lg text-muted">
            {personalData.stats.problemsSolved} problems solved ·{" "}
            {personalData.stats.leetcodeRating} LeetCode rating
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="mb-5 text-lg font-semibold">Problem Solving</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {codingProfiles.problemSolving.map((profile) => {
                const Icon = profile.icon;
                return (
                  <a
                    key={profile.platform}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 border border-border bg-surface-elevated p-5 transition-colors hover:border-accent"
                  >
                    <div>
                      <Icon className="mb-3 h-6 w-6 text-muted transition-colors group-hover:text-accent" />
                      <h4 className="font-semibold text-foreground">
                        {profile.platform}
                      </h4>
                      <p className="mt-1 text-sm text-muted">{profile.stats}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Development</h3>
            <a
              href={codingProfiles.development.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-border bg-surface p-7 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {(() => {
                    const DevIcon = codingProfiles.development.icon;
                    return (
                      <DevIcon className="h-8 w-8 text-muted transition-colors group-hover:text-accent" />
                    );
                  })()}
                  <div>
                    <h4 className="text-xl font-semibold">
                      {codingProfiles.development.platform}
                    </h4>
                    <p className="font-mono text-sm text-muted">
                      @{codingProfiles.development.username}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted" />
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6">
                {codingProfiles.development.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-semibold">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
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
