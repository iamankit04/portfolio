"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const MouseGlow = () => {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useSpring(0, { stiffness: 120, damping: 24 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 24 });

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-0 h-[500px] w-[500px] rounded-full opacity-15 blur-[120px] dark:opacity-20"
      style={{
        x: mouseX,
        y: mouseY,
        background: "radial-gradient(circle, var(--color-brand) 0%, transparent 70%)",
      }}
    />
  );
};
