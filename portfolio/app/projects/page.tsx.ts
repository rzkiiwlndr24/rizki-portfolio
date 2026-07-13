"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Briefcase, Search, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  "All",
  "Data Entry",
  "Data Cleaning",
  "Dashboard Reporting",
  "Automation",
  "Document Management",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.toolsUsed.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-12">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary dark:text-brand-accent text-xs font-bold uppercase">
          <Briefcase className="w-4 h-4" />
          <span>Operational Portfolio</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark dark:text-white tracking-tight">
          Verified Administrative & Data Case Studies.
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base lg:text-lg leading-relaxed">
          Explore 8 comprehensive, real-world case studies detailing how I execute complex database cleanups, automate executive KPI dashboards, and enforce strict SOP governance.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search tools, formulas, or metrics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-brand-dark dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
      </div>

      {/* Grid Display */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800">
          <Filter className="w-10 h-10 text-slate-400 mx-auto mb-3 animate-bounce" />
          <h3 className="text-lg font-bold text-brand-dark dark:text-white">No Matching Case Studies Found</h3>
          <p className="text-sm text-slate-500 mt-1">Try adjusting your category filter or search keywords.</p>
          <button
            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
            className="mt-4 px-4 py-2 rounded-xl bg-brand-primary text-white font-bold text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};