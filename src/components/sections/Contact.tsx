"use client";

import { useState } from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Send, Mail, MessageSquare, User, CheckCircle2, AlertCircle } from "lucide-react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    // IMPORTANT: Replace this placeholder with your actual Web3Forms access key
    // You can get one for free at https://web3forms.com/
    formData.append("access_key", "204f5ad0-efe8-4398-9c0a-12090a9641f7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Form error:", data);
        setSubmitStatus("error");
        setStatusMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Get in <span className="text-accent">Touch</span>.
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-foreground/70 text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                  <User className="w-4 h-4 text-accent" /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-accent" /> Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                placeholder="Hi Ankit, I'd like to talk about..."
              />
            </div>

            {/* Hidden field for Web3Forms to prevent spam */}
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-accent text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-all hover:gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-green-400 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4" /> {statusMessage}
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-red-400 font-medium text-sm">
                  <AlertCircle className="w-4 h-4" /> {statusMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};
