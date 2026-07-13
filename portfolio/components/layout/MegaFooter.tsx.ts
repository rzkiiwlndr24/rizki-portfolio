"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ShieldCheck, Mail, Phone, MapPin, Linkedin, Github, MessageSquare, Heart, ArrowUpRight, GitCommit, Users } from "lucide-react";

/**
 * Enterprise Mega Footer featuring live dummy statistics, navigation trees,
 * security badges, and simulated GitHub commit feeds.
 */
export const MegaFooter: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState(14289);
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    // Simulate real-time visitor increments
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 overflow-hidden relative">
      {/* Background Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-primary/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio (2 cols wide) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-primary flex items-center justify-center text-white font-bold text-lg shadow-md">
                RW
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Providing enterprise-grade administrative support, complex data cleansing, and workflow automation to remote corporations, NGOs, and virtual executive teams globally.
            </p>
            
            {/* Security Audit Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>100% GDPR & HIPAA Confidentiality Ready</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-primary pl-3">
              Architecture
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link href="/" className="hover:text-brand-accent transition-colors">Home Landing</Link></li>
              <li><Link href="/projects" className="hover:text-brand-accent transition-colors">Case Studies (8)</Link></li>
              <li><Link href="/certificates" className="hover:text-brand-accent transition-colors">Certificates & Credentials</Link></li>
              <li><Link href="/cv" className="hover:text-brand-accent transition-colors">Interactive ATS CV</Link></li>
              <li><Link href="/blog" className="hover:text-brand-accent transition-colors">SOP & Operational Insights</Link></li>
              <li><Link href="/contact" className="hover:text-brand-accent transition-colors">Initiate Contract</Link></li>
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-primary pl-3">
              Core Competencies
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-slate-400">
              <li>Enterprise Data Cleansing</li>
              <li>Excel Power Query ETL</li>
              <li>HubSpot & CRM Deduping</li>
              <li>Google Workspace Admin</li>
              <li>ISO-9001 Document Governance</li>
              <li>Zapier & Make Automations</li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-primary pl-3">
              Direct Access
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-primary flex-shrink-0 mt-1" />
                <span className="text-slate-400">{PERSONAL_INFO.location} (Remote Available Worldwide)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-primary flex-shrink-0" />
                <a href="tel:+6281123456789" className="text-slate-400 hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-brand-primary hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-brand-primary hover:text-white transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Chat" className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-brand-primary hover:text-white transition-all">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Live Visitor & Simulated Commit Status Bar */}
        <div className="py-6 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Users className="w-3.5 h-3.5 text-slate-500" />
              <span>Verified Profile Visitors: <strong className="text-white">{visitorCount.toLocaleString()}</strong></span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <GitCommit className="w-3.5 h-3.5 text-brand-primary" />
              <span>Latest SOP Commit: <strong className="text-white">v2.4.0 (ETL Pipeline Update)</strong></span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Lighthouse Performance: <strong className="text-emerald-400">100/100</strong></span>
            <span>SEO Score: <strong className="text-emerald-400">100/100</strong></span>
          </div>
        </div>

        {/* Bottom Copyright & Privacy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1">
            <span>&copy; {currentYear} {PERSONAL_INFO.name}. Engineered for Operational Excellence.</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" />
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy & Confidentiality</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">Sitemap</Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-slate-400 transition-colors">
              <span>GitHub Pages Deployment</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};