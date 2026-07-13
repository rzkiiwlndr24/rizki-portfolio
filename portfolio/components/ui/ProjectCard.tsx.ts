"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { IProject } from "@/types/portfolio";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: IProject;
  index: number;
}

/**
 * Premium SaaS-style card component showcasing administrative workflows.
 * Emphasizes measurable KPIs over raw technical descriptions.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="saas-card group flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-900/80"
    >
      {/* Top Category Badge & Date */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20 dark:text-brand-accent border border-brand-primary/20">
            {project.category}
          </span>
          <span className="text-xs font-medium text-brand-gray dark:text-slate-400">
            {project.date}
          </span>
        </div>

        {/* Title & Summary */}
        <Link href={`/projects/${project.slug}`} className="block group-hover:text-brand-primary transition-colors">
          <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-brand-dark dark:text-white mb-3 line-clamp-2">
            {project.title}
          </h3>
        </Link>
        <p className="text-brand-gray dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.summary}
        </p>

        {/* Highlighted KPI Bar */}
        <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
          {project.kpis.slice(0, 2).map((kpi, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gray dark:text-slate-400">
                {kpi.label}
              </span>
              <span className="text-lg font-extrabold text-brand-primary dark:text-brand-accent font-mono">
                {kpi.value}
              </span>
            </div>
          ))}
        </div>

        {/* Tools Used Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.toolsUsed.slice(0, 3).map((tool, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200/50 dark:border-slate-700/50"
            >
              {tool}
            </span>
          ))}
          {project.toolsUsed.length > 3 && (
            <span className="px-2 py-1 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-brand-primary dark:text-brand-accent rounded-lg">
              +{project.toolsUsed.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4" />
          <span>100% Verified Accuracy</span>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary dark:text-brand-accent group-hover:translate-x-1 transition-transform"
        >
          <span>Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};