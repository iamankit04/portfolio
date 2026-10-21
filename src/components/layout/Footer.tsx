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
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="font-display text-xl font-semibold tracking-tight">
            {personalData.name}
          </p>
          <p className="max-w-xs text-center text-sm text-muted md:text-left">
            {personalData.title}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={copyEmail}
            className={cn(
              "border px-4 py-2 font-mono text-sm transition-colors",
              copied
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-surface-elevated text-muted hover:border-accent hover:text-foreground"
            )}
          >
            {copied ? "Email Copied!" : personalData.contact.email}
          </button>
          <div className="flex items-center gap-2">
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="inline-flex h-10 w-10 items-center justify-center text-muted transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <button
            onClick={scrollToTop}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          <p className="font-mono text-xs text-muted">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
