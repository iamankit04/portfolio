"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { education, highlights } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export const Timeline = () => {
  return (
    <SectionWrapper id="timeline" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-mono tracking-[0.2em] text-accent uppercase">
            <GraduationCap className="h-3.5 w-3.5" />
            Timeline
          </div>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Education &amp; achievements
          </h2>
          <div className="section-rule mt-5" />
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted font-medium">
              Academic Background
            </h3>
            <ol className="relative space-y-0 border-l-2 border-border/80 ml-3">
              {education.map((item, idx) => (
                <motion.li
                  key={item.institution}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative pb-10 pl-8 last:pb-0"
                >
                  {/* Glowing Node */}
                  <span className="absolute top-1.5 -left-[7px] flex h-3 w-3 items-center justify-center">
                    {idx === 0 && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    )}
                    <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
                  </span>
                  
                  <div className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-accent">
                    {item.period}
                  </div>
                  <h4 className="mt-2 text-lg font-semibold text-foreground">
                    {item.degree}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.institution}
                  </p>
                  <p className="mt-3 inline-block border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs text-foreground font-medium">
                    {item.score}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted font-medium">
              Key Highlights &amp; Honors
            </h3>
            <div className="space-y-6">
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="border border-border bg-surface-elevated p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-md hover:shadow-accent/5"
                >
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-accent" />
                    <h4 className="text-base font-semibold text-foreground">
                      {highlight.title}
                    </h4>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {highlight.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
