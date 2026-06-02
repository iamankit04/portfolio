"use client";

import { motion } from "framer-motion";
import { personalData } from "@/lib/data";
import { ArrowRight, Code, Trophy, TerminalSquare, Download } from "lucide-react";
import { useState, useEffect } from "react";

const TypewriterText = () => {
  const texts = ["Hello World!", "I'm Ankit", "Full Stack Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;
    
    const timeout = setTimeout(() => {
      const currentFullText = texts[textIndex];
      
      if (!isDeleting) {
        setText(currentFullText.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        if (charIndex === currentFullText.length) {
          setIsDeleting(true);
          setTimeout(() => {}, pauseTime); // Wait before deleting
        }
      } else {
        setText(currentFullText.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting && charIndex === 0 ? 500 : typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="inline-block min-h-[4rem] text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-1 h-8 bg-accent ml-1 align-middle"
      />
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 flex items-center gap-2 text-sm font-mono text-accent">
              <TerminalSquare className="w-4 h-4" />
              <span>Available for new opportunities</span>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 font-sans leading-tight">
            <TypewriterText />
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-10 leading-relaxed"
          >
            {personalData.shortIntro}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-accent text-black font-semibold flex items-center gap-2 hover:bg-accent/90 transition-all hover:gap-3 group"
            >
              View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground font-medium flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1TcGZGj3yoyYNJ4MPlHcyHMVyekVmon5T/view?usp=drive_link"
              target="_blank"
              className="px-6 py-3 rounded-full text-foreground/80 font-medium flex items-center gap-2 hover:text-foreground transition-all underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:decoration-accent"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-sm flex items-center gap-4 hover:border-accent/30 transition-colors group">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-foreground">{personalData.stats.problemsSolved}</p>
                <p className="text-xs text-foreground/50 uppercase tracking-wider">Problems Solved</p>
              </div>
            </div>
            
            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 backdrop-blur-sm flex items-center gap-4 hover:border-accent/30 transition-colors group">
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <p className="font-mono text-2xl font-bold text-foreground">{personalData.stats.leetcodeRating}</p>
                <p className="text-xs text-foreground/50 uppercase tracking-wider">LeetCode Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[150px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
    </section>
  );
};
