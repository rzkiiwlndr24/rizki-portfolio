"use client";

import React, { useState } from "react";
import { CERTIFICATES } from "@/data/portfolioData";
import { ICertificate } from "@/types/portfolio";
import { CertificateModal } from "@/components/ui/CertificateModal";
import { Award, Search, ExternalLink, ShieldCheck, Download, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CERT_CATEGORIES = [
  "All",
  "Microsoft Office",
  "Google Workspace",
  "Data Governance",
  "Administration",
];

export default function CertificatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalCert, setActiveModalCert] = useState<ICertificate | null>(null);

  const filteredCerts = CERTIFICATES.filter((cert) => {
    const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary dark:text-brand-accent text-xs font-bold uppercase">
          <Award className="w-4 h-4" />
          <span>Accredited Expertise</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark dark:text-white tracking-tight">
          Verified Credentials & Industry Certifications.
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base lg:text-lg leading-relaxed">
          My operational capabilities are rigorously tested and accredited by global standards bodies including Microsoft, Certiport, Google Cloud, and IAAP.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
          {CERT_CATEGORIES.map((cat) => (
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
            placeholder="Search issuer, skill, or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-brand-dark dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
      </div>

      {/* Certificates Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="saas-card flex flex-col justify-between bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 relative group overflow-hidden"
            >
              {/* Top Decorative Banner */}
              <div className="w-full h-2 rounded-t-3xl bg-gradient-to-r from-brand-primary to-brand-accent absolute top-0 left-0" />

              <div className="pt-2">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {cert.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 font-mono">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="font-extrabold text-lg lg:text-xl text-brand-dark dark:text-white mb-2 leading-snug group-hover:text-brand-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-brand-accent mb-4">
                  Issued By: {cert.issuer}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Action Toolbar */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 font-mono text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="truncate max-w-[120px]">{cert.credentialId}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalCert(cert)}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-primary hover:text-white transition-colors"
                    title="Inspect Credential Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20 dark:text-brand-accent hover:bg-brand-primary hover:text-white transition-colors"
                    title="Verify Online Registry"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Modal Component */}
      <CertificateModal
        certificate={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />
    </div>
  );
};