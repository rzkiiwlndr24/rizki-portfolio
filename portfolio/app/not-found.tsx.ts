import React from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Home, Search } from "lucide-react";

/**
 * Custom 404 Error Landing Page.
 * Maintains SaaS aesthetic with actionable search and navigation recovery.
 */
export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-8">
        
        {/* Animated Error Icon */}
        <div className="w-24 h-24 rounded-3xl bg-rose-500/10 dark:bg-rose-500/20 text-rose-500 mx-auto flex items-center justify-center shadow-inner">
          <AlertCircle className="w-12 h-12 animate-pulse" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            Error 404 &bull; Record Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-white tracking-tight">
            Administrative File Missing.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            The page or case study you are attempting to access has either been re-indexed, archived to cold storage, or moved during our latest folder taxonomy audit.
          </p>
        </div>

        {/* Action Recovery Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-brand-primary text-white font-bold text-sm shadow-soft hover:bg-brand-secondary transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Landing</span>
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Browse Case Studies</span>
          </Link>
        </div>
      </div>
    </div>
  );
};