"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { education, highlights } from "@/lib/data";

export const Timeline = () => {
  return (
    <SectionWrapper id="timeline" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Timeline
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Education &amp; achievements
          </h2>
          <div className="section-rule mt-5" />
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-lg font-semibold">Education</h3>
            <ol className="relative space-y-0 border-l border-border">
              {education.map((item) => (
                <li key={item.institution} className="relative pb-10 pl-8 last:pb-0">
                  <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 bg-accent" />
                  <p className="font-mono text-xs tracking-wide text-accent">
                    {item.period}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-foreground">
                    {item.degree}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.institution}
                  </p>
                  <p className="mt-3 inline-block font-mono text-xs text-foreground">
                    {item.score}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-8 text-lg font-semibold">Highlights</h3>
            <div className="space-y-8">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="border-t border-border pt-6">
                  <h4 className="text-base font-semibold">{highlight.title}</h4>
                  <ul className="mt-4 space-y-3">
                    {highlight.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
