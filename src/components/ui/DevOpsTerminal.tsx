"use client";

import { useState, useEffect } from "react";
import { Terminal, Copy, Check, Play, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const terminalLines = [
  { type: "cmd", text: "$ docker build -t rydex-platform:v2.4 ." },
  { type: "out", text: "  ✔ Turbopack compiled production assets" },
  { type: "out", text: "  ✔ Docker container optimized [Size: 184MB]" },
  { type: "cmd", text: "$ terraform apply -auto-approve" },
  { type: "out", text: "  ✔ AWS EKS Cluster, VPC & RDS connected" },
  { type: "cmd", text: "$ kubectl rollout status deployment/rydex" },
  { type: "out", text: "  ✔ Deployment rydex successfully rolled out" },
  { type: "status", text: "  🟢 ALL SYSTEMS OPERATIONAL • 99.98% UPTIME" },
];

export const DevOpsTerminal = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (visibleCount < terminalLines.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  const restart = () => {
    setVisibleCount(0);
  };

  const copyLog = () => {
    const text = terminalLines.map((l) => l.text).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border/80 bg-[#0d1117] text-gray-200 shadow-2xl backdrop-blur-xl">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#161b22] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-mono text-xs text-gray-400">
            ankit@cloud-sde: ~/infrastructure
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={restart}
            className="rounded p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            title="Re-run pipeline"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={copyLog}
            className="rounded p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            title="Copy logs"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-[12px] sm:text-xs leading-relaxed space-y-1.5 min-h-[190px]">
        {terminalLines.slice(0, visibleCount).map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={
              line.type === "cmd"
                ? "text-emerald-400 font-semibold"
                : line.type === "status"
                ? "text-emerald-300 font-bold tracking-wide mt-2 pt-2 border-t border-white/10"
                : "text-gray-300 pl-2"
            }
          >
            {line.text}
          </motion.div>
        ))}

        {visibleCount < terminalLines.length ? (
          <div className="inline-block h-3.5 w-2 bg-emerald-400 animate-blink align-middle ml-1" />
        ) : (
          <div className="flex items-center gap-2 pt-2 text-[11px] text-gray-500">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Ready for deployment commands</span>
          </div>
        )}
      </div>
    </div>
  );
};
