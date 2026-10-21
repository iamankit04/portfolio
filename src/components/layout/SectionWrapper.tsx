"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  id: string;
}

export const SectionWrapper = ({
  children,
  id,
  className,
  ...props
}: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn("scroll-mt-24 py-20 md:py-28", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
};
