"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { education, highlights } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";

export const Timeline = () => {
  return (
    <SectionWrapper id="timeline" className="bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Journey & <span className="text-accent">Milestones</span>.
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl text-accent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {education.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Icon marker */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background group-hover:border-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                  </div>
                  
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex flex-col mb-2">
                      <span className="text-accent font-mono text-sm mb-1">{item.period}</span>
                      <h4 className="text-lg font-bold text-white">{item.degree}</h4>
                    </div>
                    <p className="text-sm text-foreground/70 mb-2 leading-relaxed">
                      {item.institution}
                    </p>
                    <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/80">
                      {item.score}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/5 rounded-xl text-accent">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Highlights</h3>
            </div>
            
            <div className="space-y-6">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white/[0.02] border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-4 pb-4 border-b border-white/5">{highlight.title}</h4>
                  <ul className="space-y-3">
                    {highlight.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/80 text-sm">
                        <span className="text-accent mt-0.5">✦</span>
                        <span className="leading-relaxed">{item}</span>
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
