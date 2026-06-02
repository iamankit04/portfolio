"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { personalData } from "@/lib/data";
import { User, Cpu, Database, Server } from "lucide-react";

export const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-accent">Me</span>.
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
            <p>
              I am a <strong className="text-foreground font-medium">B.Tech CSE student</strong> at G.L. Bajaj Institute of Technology and Management, deeply passionate about software engineering and problem-solving.
            </p>
            <p>
              My journey in tech revolves around building robust, scalable web applications using the <strong className="text-foreground font-medium">MERN stack</strong> and <strong className="text-foreground font-medium">Next.js</strong>. I don't just write code; I architect solutions that are clean, maintainable, and performant.
            </p>
            <p>
              Beyond development, I have a strong foundation in <strong className="text-foreground font-medium">Competitive Programming</strong> and <strong className="text-foreground font-medium">Data Structures & Algorithms</strong>. Solving complex logical puzzles helps me write more optimized and efficient code in real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-black/[0.04] dark:bg-white/[0.04] transition-colors">
              <Cpu className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-foreground font-semibold mb-2">Frontend</h3>
              <p className="text-sm text-foreground/60">React, Next.js, Tailwind CSS, TypeScript, building interactive UIs.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-black/[0.04] dark:bg-white/[0.04] transition-colors">
              <Server className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-foreground font-semibold mb-2">Backend</h3>
              <p className="text-sm text-foreground/60">Node.js, Express, RESTful APIs, NextAuth.js, server-side logic.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-black/[0.04] dark:bg-white/[0.04] transition-colors">
              <Database className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-foreground font-semibold mb-2">Database</h3>
              <p className="text-sm text-foreground/60">MongoDB, Mongoose, data modeling, aggregation, caching.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:bg-black/[0.04] dark:bg-white/[0.04] transition-colors">
              <User className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-foreground font-semibold mb-2">Architecture</h3>
              <p className="text-sm text-foreground/60">System Design, OOP, clean code, scalable infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
