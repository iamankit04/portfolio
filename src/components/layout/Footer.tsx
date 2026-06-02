"use client";

import { personalData } from "@/lib/data";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-mono text-xl font-bold tracking-tighter">
            {personalData.name}
          </p>
          <p className="text-sm text-foreground/60 max-w-xs text-center md:text-left">
            {personalData.title}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={copyEmail}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-mono border transition-all duration-300",
              copied
                ? "bg-accent/20 border-accent/50 text-accent"
                : "bg-white/5 border-white/10 text-foreground/80 hover:bg-white/10 hover:text-white"
            )}
          >
            {copied ? "Email Copied!" : personalData.contact.email}
          </button>
          <div className="flex items-center gap-4">
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/60 hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="text-foreground/60 hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/60 hover:text-accent hover:bg-white/10 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
          <p className="text-xs text-foreground/40 font-mono">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </footer>
  );
};
