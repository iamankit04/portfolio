"use client";

import { useState } from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { personalData } from "@/lib/data";
import { Send, CheckCircle2, AlertCircle, Copy, Check, Mail, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "204f5ad0-efe8-4398-9c0a-12090a9641f7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setStatusMessage("Message sent successfully! I will get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Form error:", data);
        setSubmitStatus("error");
        setStatusMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setStatusMessage(
        "Failed to send message. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-mono tracking-[0.2em] text-accent uppercase">
              <MessageSquare className="h-3.5 w-3.5" />
              Contact
            </div>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Let&apos;s build something useful
            </h2>
            <div className="section-rule mt-5" />
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Have a role, project, or collaboration in mind? Reach out and I
              will respond promptly.
            </p>

            <div className="mt-8 space-y-4">
              <div className="group relative flex items-center justify-between border border-border bg-surface-elevated p-4 transition-colors hover:border-accent">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${personalData.contact.email}`}
                      className="font-medium text-foreground hover:text-accent transition-colors text-sm"
                    >
                      {personalData.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded border border-border bg-surface px-2.5 py-1 text-xs font-mono text-muted transition-colors hover:border-accent hover:text-foreground"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-accent" />
                      <span className="text-accent">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 border border-border bg-surface-elevated p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-accent">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    Phone
                  </p>
                  <p className="font-medium text-foreground text-sm">
                    +91 {personalData.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border bg-surface-elevated px-4 py-2 font-mono text-xs font-medium text-foreground transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border bg-surface-elevated px-4 py-2 font-mono text-xs font-medium text-foreground transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
                >
                  GitHub ↗
                </a>
                <a
                  href={personalData.resumePath}
                  download="Ankit_Kumar_Gupta_Resume.pdf"
                  className="border border-border bg-surface-elevated px-4 py-2 font-mono text-xs font-medium text-foreground transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
                >
                  Resume PDF ↗
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-border bg-surface-elevated p-6 md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
                placeholder="Hi Ankit, I would like to talk about..."
              />
            </div>

            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-sm font-medium text-accent">
                  <CheckCircle2 className="h-4 w-4" /> {statusMessage}
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
                  <AlertCircle className="h-4 w-4" /> {statusMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};
