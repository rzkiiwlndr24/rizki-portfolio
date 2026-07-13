"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ARTICLES } from "@/data/portfolioData";
import { BookOpen, Search, Clock, ArrowRight } from "lucide-react";

const BLOG_CATEGORIES = [
  "All",
  "Excel Tips",
  "Google Sheets",
  "Google Workspace",
  "Remote Work",
  "Virtual Assistant",
  "Data Entry Tips",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary dark:text-brand-accent text-xs font-bold uppercase">
          <BookOpen className="w-4 h-4" />
          <span>Operational Knowledge Base</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark dark:text-white tracking-tight">
          SOP Guides & Administrative Tutorials.
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base lg:text-lg leading-relaxed">
          Deep-dive technical articles on advanced Excel Power Query workflows, Google Sheets REGEX validation, and asynchronous remote executive communication.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
          {BLOG_CATEGORIES.map((cat) => (
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

        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search Excel formulas, SOPs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-brand-dark dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((art) => (
          <Link
            key={art.id}
            href={`/blog/${art.slug}`}
            className="saas-card group flex flex-col justify-between bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-brand-primary/40"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-semibold">
                <span className="px-2.5 py-0.5 rounded-md bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20 dark:text-brand-accent">
                  {art.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {art.readTime}
                </span>
              </div>

              <h3 className="font-bold text-lg lg:text-xl text-brand-dark dark:text-white group-hover:text-brand-primary transition-colors mb-3 leading-snug">
                {art.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-4 mb-6">
                {art.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-brand-primary dark:text-brand-accent">
              <span>Read SOP Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};