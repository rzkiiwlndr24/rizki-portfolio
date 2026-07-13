"use client";

import React from "react";
import { PERSONAL_INFO, EXPERIENCES, CORE_SKILLS, CERTIFICATES } from "@/data/portfolioData";
import { Download, Printer, ShieldCheck, Mail, Phone, MapPin, Linkedin, Github, CheckCircle2, Award, Briefcase, Cpu } from "lucide-react";

/**
 * Interactive ATS-Friendly Resume Page.
 * Styled with explicit print media queries (@media print) to generate flawless physical PDFs
 * when triggering window.print().
 */
export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadSimulation = () => {
    alert("Simulated PDF Download: In production, this triggers the direct download of 'Rizki_Wulandari_Senior_Data_Specialist_CV.pdf'. You can also use the 'Print / Save as PDF' button.");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-8">
      
      {/* Top Interactive Action Bar (Hidden when printing) */}
      <div className="print:hidden flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 text-white shadow-xl">
        <div>
          <h1 className="text-xl font-bold">ATS-Optimized Interactive Resume</h1>
          <p className="text-xs text-slate-400 mt-0.5">Formatted for instant machine parsing by global HR recruitment platforms.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 border border-white/10 transition-colors"
          >
            <Printer className="w-4 h-4 text-brand-accent" />
            <span>Print / Save to PDF</span>
          </button>
          <button
            onClick={handleDownloadSimulation}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-soft transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Master PDF</span>
          </button>
        </div>
      </div>

      {/* THE ATS RESUME CONTAINER (Print Target) */}
      <div className="bg-white text-slate-900 p-8 sm:p-12 lg:p-16 rounded-3xl shadow-soft border border-slate-200 print:shadow-none print:border-none print:p-0 print:rounded-none space-y-10">
        
        {/* 1. CV Header */}
        <header className="border-b-2 border-slate-900 pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-brand-primary mt-1">
                {PERSONAL_INFO.title}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>99.99% Verified Data Accuracy</span>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-600 pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" /> {PERSONAL_INFO.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-slate-400" /> {PERSONAL_INFO.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-slate-400" /> {PERSONAL_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Linkedin className="w-4 h-4 text-slate-400" /> linkedin.com/in/rizki-wulandari
            </span>
          </div>
        </header>

        {/* 2. Professional Summary */}
        <section className="space-y-3">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 border-l-4 border-brand-primary pl-3">
            Executive Summary
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 font-normal">
            {PERSONAL_INFO.bio}
          </p>
        </section>

        {/* 3. Core Competencies & Skills Grid */}
        <section className="space-y-3">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 border-l-4 border-brand-primary pl-3">
            Core Administrative & Technical Competencies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
            {CORE_SKILLS.map((skill, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Professional Experience */}
        <section className="space-y-6">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 border-l-4 border-brand-primary pl-3">
            Professional Experience & Accomplishments
          </h2>
          
          <div className="space-y-8 pl-1">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-extrabold text-base text-slate-900">{exp.role}</h3>
                  <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs font-bold text-brand-primary">
                  {exp.company} &bull; <span className="text-slate-500 font-medium">{exp.location}</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Key Projects Highlight */}
        <section className="space-y-4">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 border-l-4 border-brand-primary pl-3">
            Notable Administrative Case Studies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-brand-primary uppercase">HRIS Database Migration</span>
              <h3 className="font-bold text-slate-900 text-sm">Enterprise Employee Records Standardizing</h3>
              <p className="text-slate-600 leading-relaxed">Standardized 15,420 employee records across 4 regional databases using Power Query. Reduced duplicate rate from 14.2% to 0% with zero migration errors.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-brand-primary uppercase">CRM Deduplication</span>
              <h3 className="font-bold text-slate-900 text-sm">B2B Customer CRM Deduping Engine</h3>
              <p className="text-slate-600 leading-relaxed">Audited 45,000+ HubSpot contacts, cross-referencing firmographic metadata to reduce email marketing bounce rates from 18.2% down to 1.4%.</p>
            </div>
          </div>
        </section>

        {/* 6. Education & Certifications */}
        <section className="space-y-4">
          <h2 className="text-sm font-extrabold uppercase tracking-widest text-slate-900 border-l-4 border-brand-primary pl-3">
            Professional Certifications & Credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {CERTIFICATES.map((cert) => (
              <div key={cert.id} className="p-3 rounded-xl border border-slate-200 flex items-start gap-2.5">
                <Award className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">{cert.title}</h4>
                  <span className="text-slate-500 block mt-0.5">{cert.issuer} &bull; {cert.issueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Print Note */}
        <div className="pt-6 border-t border-slate-200 text-center text-[10px] text-slate-400 print:block hidden">
          Rizki Wulandari &bull; Verified Data Entry Specialist & Administrative Support &bull; Online Portfolio: rizkiwulandari.dev
        </div>
      </div>
    </div>
  );
};