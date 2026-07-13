import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, FileText, ArrowLeft } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Confidentiality | Rizki Wulandari",
  description: "Comprehensive data governance, GDPR compliance, and NDA confidentiality protocols for remote administrative support.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-12">
      
      {/* Top Navigation */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors group mb-8"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Landing</span>
        </Link>
        
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Enterprise Data Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark dark:text-white tracking-tight leading-tight">
            Privacy Policy & Confidentiality SOP.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Effective Date: January 1, 2025. This document outlines the rigorous data security, non-disclosure (NDA), and GDPR/HIPAA compliance protocols enforced during all virtual administrative engagements.
          </p>
        </div>
      </div>

      {/* Main Policy Content */}
      <div className="saas-card p-8 sm:p-12 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-dark dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
            <Lock className="w-5 h-5 text-brand-primary" />
            <span>1. Strict Non-Disclosure & Confidentiality Guarantee</span>
          </h2>
          <p>
            As a Senior Data Entry Specialist and Administrative Assistant, I acknowledge that during the course of contract engagements, I may be granted access to proprietary corporate information, employee payroll databases, B2B customer CRM contact lists, and financial transaction records.
          </p>
          <p>
            <strong>I guarantee 100% confidentiality.</strong> No client data, database schemas, or internal communications are ever shared, sold, copied, or stored on personal unencrypted devices outside the active scope of service delivery.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-dark dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span>2. Technical Cybersecurity Hygiene</span>
          </h2>
          <p>
            To protect global employers against unauthorized interception or data corruption, all administrative workflows adhere to the following mandatory cybersecurity SOPs:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Full-Disk Encryption:</strong> All workstations utilized for service delivery utilize BitLocker/FileVault 256-bit encryption.</li>
            <li><strong>Zero-Knowledge Password Management:</strong> Client access credentials are managed exclusively via enterprise vaults (1Password/Bitwarden) with hardware-based Two-Factor Authentication (2FA).</li>
            <li><strong>Secure Network Protocols:</strong> All administrative tasks are conducted over encrypted WPA3 wireless networks paired with enterprise-grade VPN tunnels when accessing external client databases.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-dark dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
            <EyeOff className="w-5 h-5 text-amber-500" />
            <span>3. GDPR & PII Handling Procedures</span>
          </h2>
          <p>
            When processing European Union (GDPR) or healthcare (HIPAA) datasets, data minimization principles are strictly enforced. Working temporary spreadsheets containing Personally Identifiable Information (PII) are automatically purged using secure 7-pass wiping algorithms within 48 hours of project completion or data ingestion into the client&apos;s primary HRIS/CRM platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-brand-dark dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
            <FileText className="w-5 h-5 text-brand-primary" />
            <span>4. Website Cookie & Analytics Policy</span>
          </h2>
          <p>
            This portfolio website (rizkiwulandari.dev) is engineered for minimal data footprint. We do not utilize intrusive third-party advertising cookies or cross-site behavioral trackers. Basic anonymized server telemetry is collected solely to monitor Lighthouse web vitals and prevent automated DDoS scraping.
          </p>
        </section>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <span>Document Ref: SOP-GOV-2025-PRIVACY-v1.0</span>
          <span>Inquiries: {PERSONAL_INFO.email}</span>
        </div>
      </div>
    </div>
  );
};