"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/data";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
      id="hero"
    >
      <div className="hero-atmosphere absolute inset-0" />
      <div className="hero-grid absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 font-mono text-sm tracking-[0.18em] text-accent uppercase"
        >
          {personalData.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {personalData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
        >
          {personalData.shortIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:gap-3 hover:brightness-110"
          >
            View Work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border-strong bg-surface-elevated px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent"
          >
            Contact Me
          </a>
          <a
            href={personalData.resumePath}
            download="Ankit_Kumar_Gupta_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-muted underline decoration-border-strong underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};
