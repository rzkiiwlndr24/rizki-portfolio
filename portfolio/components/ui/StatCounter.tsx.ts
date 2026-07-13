"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

/**
 * Animated statistics counter component that triggers when scrolling into viewport.
 * Simulates high-precision administrative KPI reporting.
 */
export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  suffix = "",
  prefix = "",
  decimals = 0,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-panel p-6 lg:p-8 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-brand-primary/40 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="text-3xl lg:text-5xl font-extrabold text-brand-primary dark:text-brand-accent tracking-tight mb-2 font-mono">
        {prefix}
        {displayValue.toFixed(decimals)}
        {suffix}
      </div>
      <p className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-brand-gray dark:text-slate-400">
        {label}
      </p>
    </motion.div>
  );
};