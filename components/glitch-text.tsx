"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  return (
    <motion.h1
      className={`relative ${className}`}
      animate={{
        textShadow: [
          "0 0 0 transparent",
          "2px 2px 0 rgba(0,255,159,0.5), -2px -2px 0 rgba(138,43,226,0.5)",
          "0 0 0 transparent",
        ],
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.h1>
  );
}
