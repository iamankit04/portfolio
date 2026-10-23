"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/data";
import { ArrowRight, Download, Terminal, Layers, Cloud, Sparkles } from "lucide-react";
import { DevOpsTerminal } from "@/components/ui/DevOpsTerminal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
      id="hero"
    >
      <div className="hero-atmosphere absolute inset-0" />
      <div className="hero-grid absolute inset-0" />

      {/* Ambient floating glow elements */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[450px] w-[450px] rounded-full bg-accent/15 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/3 -right-28 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-3xl animate-float" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Hero Copy */}
          <div>
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface-elevated/80 px-4 py-1.5 text-xs font-mono text-foreground/80 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for SDE &amp; DevOps Opportunities</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-3 font-mono text-xs sm:text-sm tracking-[0.2em] text-accent uppercase font-medium"
            >
              {personalData.title}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="font-display max-w-2xl text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="shimmer-text">{personalData.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {personalData.shortIntro}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:brightness-110"
              >
                <span>View Featured Work</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 border border-border-strong bg-surface-elevated/90 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-accent"
              >
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={personalData.resumePath}
                download="Ankit_Kumar_Gupta_Resume.pdf"
                className="inline-flex items-center gap-2 px-3 py-3.5 text-sm font-medium text-muted underline decoration-border-strong underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
              >
                <Download className="h-4 w-4" />
                Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Interactive Terminal Simulator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full"
          >
            <DevOpsTerminal />
          </motion.div>
        </div>

        {/* Quick Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38 }}
          className="mt-14 grid grid-cols-2 gap-3 border-t border-border/80 pt-8 sm:grid-cols-4 sm:gap-4"
        >
          <SpotlightCard className="p-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5">
            <div className="flex items-center gap-2 text-accent">
              <Terminal className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider">DSA Stats</span>
            </div>
            <p className="font-display mt-2 text-2xl font-semibold text-foreground">
              <AnimatedCounter value={personalData.stats.problemsSolved} />
            </p>
            <p className="mt-0.5 text-xs text-muted">Problems Solved</p>
          </SpotlightCard>

          <SpotlightCard className="p-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5">
            <div className="flex items-center gap-2 text-accent">
              <Sparkles className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider">LeetCode</span>
            </div>
            <p className="font-display mt-2 text-2xl font-semibold text-foreground">
              <AnimatedCounter value={personalData.stats.leetcodeRating} />
            </p>
            <p className="mt-0.5 text-xs text-muted">Contest Rating</p>
          </SpotlightCard>

          <SpotlightCard className="p-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5">
            <div className="flex items-center gap-2 text-accent">
              <Cloud className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider">DevOps</span>
            </div>
            <p className="font-display mt-2 text-base font-semibold text-foreground truncate">
              K8s · Docker
            </p>
            <p className="mt-0.5 text-xs text-muted">Terraform &amp; AWS</p>
          </SpotlightCard>

          <SpotlightCard className="p-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5">
            <div className="flex items-center gap-2 text-accent">
              <Layers className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider">Full Stack</span>
            </div>
            <p className="font-display mt-2 text-base font-semibold text-foreground truncate">
              Next.js · TS
            </p>
            <p className="mt-0.5 text-xs text-muted">Node.js &amp; Mongo</p>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};
