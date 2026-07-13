"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PERSONAL_INFO, PROJECTS, CERTIFICATES, EXPERIENCES, CORE_SKILLS, ARTICLES } from "@/data/portfolioData";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { ShieldCheck, Download, ArrowRight, CheckCircle2, Star, Quote, Award, Sparkles, FileSpreadsheet, Database, Cpu, Lock } from "lucide-react";

export default function Home() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-24 lg:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 lg:pt-24 pb-16 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-primary/10 dark:bg-brand-primary/20 rounded-full blur-3xl -z-10 animate-float" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-accent/10 dark:bg-brand-accent/15 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 border border-brand-primary/20 text-brand-primary dark:text-brand-accent text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Available for Immediate Remote Onboarding</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark dark:text-white leading-none">
                Flawless Data Integrity. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
                  {PERSONAL_INFO.taglines[taglineIndex]}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-brand-gray dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                I help international corporations, virtual assistant agencies, and HR recruiters eliminate operational chaos through <strong>99.99% verified data accuracy</strong>, Excel Power Query automation, and ISO-compliant document governance.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Transcription Errors
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Strict GDPR & HIPAA Hygiene
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Multi-Timezone Available
                </span>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-primary text-white font-bold text-base shadow-soft hover:bg-brand-secondary hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span>Initiate Onboarding</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/cv"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-slate-800 text-brand-dark dark:text-white font-bold text-base border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5 text-brand-primary" />
                  <span>Inspect ATS Resume</span>
                </Link>
              </div>
            </div>

            {/* Right SaaS Visual Hero Card */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto max-w-md lg:max-w-none"
              >
                {/* Decorative Frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-primary to-brand-accent rounded-[32px] blur-lg opacity-30 dark:opacity-50" />
                
                {/* Main Visual Card */}
                <div className="relative glass-panel p-6 sm:p-8 bg-white/90 dark:bg-slate-900/90 shadow-2xl border border-white/40 dark:border-slate-700">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 dark:bg-brand-primary/20 flex items-center justify-center text-brand-primary dark:text-brand-accent font-extrabold text-xl font-mono">
                        99.9%
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-brand-dark dark:text-white">Live Data Accuracy Audit</h3>
                        <p className="text-[11px] text-slate-400">Automated Power Query & Regex Verification</p>
                      </div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  </div>

                  {/* Simulated Administrative Workflow Status */}
                  <div className="space-y-3.5 mb-6 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                        <FileSpreadsheet className="w-4 h-4 text-emerald-500" />
                        <span>Records_Cleansed_2025.csv</span>
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">VERIFIED (15,420 rows)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                        <Database className="w-4 h-4 text-brand-primary" />
                        <span>CRM_Deduplication_Engine</span>
                      </span>
                      <span className="text-brand-primary dark:text-brand-accent font-bold">0 DUPLICATES</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
                      <span className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-amber-500" />
                        <span>Zapier_Onboarding_Webhook</span>
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">ACTIVE (0.4s latency)</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-brand-primary" /> 256-Bit Encrypted Environment
                    </span>
                    <span className="text-brand-primary dark:text-brand-accent font-bold">ISO 9001 Compliant</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATISTICS COUNTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              value={stat.numericValue}
              label={stat.label}
              suffix={stat.label.includes("Rate") ? "%" : "+"}
              decimals={stat.label.includes("Rate") ? 1 : 0}
            />
          ))}
        </div>
      </section>

      {/* 3. ABOUT & TIMELINE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Operational Value Proposition */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary dark:text-brand-accent">
              Operational Excellence
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark dark:text-white tracking-tight leading-tight">
              Why Global HR Recruiters Rely on My Workflow Discipline.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              In remote administrative support, technical speed is nothing without uncompromising precision. I bridge the gap between traditional clerical data entry and modern systems engineering.
            </p>

            {/* Core Competencies Progress Bars */}
            <div className="space-y-4 pt-4">
              {CORE_SKILLS.slice(0, 4).map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200">
                    <span>{skill.name}</span>
                    <span className="font-mono text-brand-primary dark:text-brand-accent">{skill.level}% Proficiency</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Professional Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-brand-dark dark:text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-primary" />
              <span>Verified Operational Track Record</span>
            </h3>
            
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-4 space-y-10 pl-6 md:pl-8">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-brand-primary group-hover:scale-125 transition-transform" />

                  <div className="saas-card p-6 bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="text-lg font-bold text-brand-dark dark:text-white group-hover:text-brand-primary transition-colors">
                        {exp.role}
                      </h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-brand-primary dark:text-brand-accent mb-4">
                      {exp.company} &bull; <span className="text-slate-400">{exp.location}</span>
                    </div>

                    <ul className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-brand-primary/5 dark:bg-brand-primary/10 text-brand-primary dark:text-brand-accent">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CASE STUDIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary dark:text-brand-accent">
              Operational Case Studies
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark dark:text-white tracking-tight mt-1">
              Verified Administrative & Data Solutions.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-bold text-brand-primary dark:text-brand-accent hover:underline text-sm sm:text-base group"
          >
            <span>Explore All 8 Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.filter((p) => p.featured).slice(0, 3).map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* 5. CERTIFICATES PREVIEW CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 lg:p-12 bg-gradient-to-r from-slate-900 via-slate-900 to-brand-dark text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 -mt-10 -mr-10 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 text-brand-accent text-xs font-bold uppercase">
                <Award className="w-4 h-4" />
                <span>Verified Credentials</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                Accredited in Microsoft Office & Google Workspace Mastery.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                My work is backed by rigorous certifications from Microsoft, Certiport, Google Cloud, and the International Association of Administrative Professionals (IAAP).
              </p>
              <Link
                href="/certificates"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white font-bold text-sm shadow-lg transition-all duration-200"
              >
                <span>Verify All 6 Credentials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Badges Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              {CERTIFICATES.slice(0, 4).map((cert, idx) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3 hover:border-brand-accent/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-accent font-bold flex-shrink-0">
                    #{idx + 1}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-bold text-white truncate">{cert.title.split(":" )[0]}</h4>
                    <span className="text-[10px] text-slate-400 block">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. LATEST SOP & OPERATIONAL ARTICLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary dark:text-brand-accent">
              Operational Insights
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark dark:text-white tracking-tight mt-1">
              Latest Administrative SOPs & Tutorials.
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-bold text-brand-primary hover:underline hidden sm:block">
            View All 10 Articles &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.slice(0, 3).map((art) => (
            <Link
              key={art.id}
              href={`/blog/${art.slug}`}
              className="saas-card group flex flex-col justify-between bg-white dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800 hover:border-brand-primary/40"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-semibold">
                  <span>{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="font-bold text-lg text-brand-dark dark:text-white group-hover:text-brand-primary transition-colors mb-2 line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                  {art.excerpt}
                </p>
              </div>
              <span className="text-xs font-bold text-brand-primary dark:text-brand-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100 dark:border-slate-800">
                Read SOP Guide &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. DUMMY TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-primary dark:text-brand-accent">
            Endorsements
          </span>
          <h2 className="text-3xl font-extrabold text-brand-dark dark:text-white tracking-tight mt-1">
            What Global Operations Directors Say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "Rizki standardized over 15,000 employee files for our HRIS migration without a single formatting error. Her Excel Power Query skills saved our HR team weeks of manual transcription.",
              author: "Marcus Vance",
              role: "VP of People Operations",
              company: "RemoteScale Global (USA)",
            },
            {
              quote: "As an executive director managing 4 time zones, Rizki's asynchronous communication and calendar discipline have been game-changing. She operates with true systems-level autonomy.",
              author: "Elena Rostova",
              role: "Executive Director",
              company: "APAC Non-Profit Alliance",
            },
            {
              quote: "Our HubSpot CRM was plagued with 18% email bounce rates before Rizki's data verification sweep. She cleaned 45,000 accounts and restored our domain reputation in just 3 weeks.",
              author: "David Chen",
              role: "Head of Growth Marketing",
              company: "SaaSify Technologies (Singapore)",
            },
          ].map((item, idx) => (
            <div key={idx} className="saas-card p-6 lg:p-8 bg-white dark:bg-slate-900/50 flex flex-col justify-between relative">
              <Quote className="w-8 h-8 text-brand-primary/20 absolute top-6 right-6" />
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-sm text-brand-dark dark:text-white">{item.author}</h4>
                <p className="text-xs text-slate-400 font-medium">{item.role} &bull; {item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white text-center rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Ready to Eliminate Administrative Friction?
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Whether you need enterprise data cleansing, automated spreadsheet reporting, or reliable executive virtual assistance, let us discuss how I can streamline your operations immediately.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-brand-dark font-extrabold text-base shadow-xl hover:bg-slate-100 hover:scale-105 transition-all duration-200"
              >
                Initiate Onboarding Interview
              </Link>
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/40 border border-white/20 text-white font-bold text-base hover:bg-slate-900/60 transition-all duration-200"
              >
                Instant WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};