import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/portfolioData";
import { ArrowLeft, CheckCircle2, Download, ExternalLink, ShieldCheck, Cpu, Database, Award, ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Case Study by Rizki Wulandari`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Find 2 related projects in same category or fallback
  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id && (p.category === project.category || p.featured)).slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-16">
      
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio Grid</span>
        </Link>
        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          Verified Case Study
        </span>
      </div>

      {/* Hero Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20 dark:text-brand-accent">
            {project.category}
          </span>
          <span className="text-sm font-medium text-slate-500">{project.date}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark dark:text-white tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
          {project.summary}
        </p>

        {/* Top KPI Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {project.kpis.map((kpi, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{kpi.label}</span>
              <div className="text-3xl lg:text-4xl font-extrabold font-mono text-brand-accent mb-1">{kpi.value}</div>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> {kpi.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Narrative Content (8 cols) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Executive Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-dark dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Executive Overview
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {project.overview}
            </p>
          </section>

          {/* Problem Statement vs Objective */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/30 space-y-2">
              <h3 className="font-extrabold text-rose-700 dark:text-rose-400 text-sm uppercase tracking-wider">
                The Operational Challenge
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/30 space-y-2">
              <h3 className="font-extrabold text-emerald-700 dark:text-emerald-400 text-sm uppercase tracking-wider">
                The Strategic Objective
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.objective}
              </p>
            </div>
          </section>

          {/* Step-by-Step Workflow Execution Architecture */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              4-Step Workflow Execution Architecture
            </h2>
            <div className="space-y-4">
              {project.workflow.map((step) => (
                <div key={step.step} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-2xl bg-brand-primary text-white font-extrabold flex items-center justify-center flex-shrink-0 font-mono shadow-md">
                    0{step.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-brand-dark dark:text-white">{step.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Before & After Comparison Table */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-dark dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Verified Before vs. After Operational Metrics
            </h2>
            <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold uppercase text-xs">
                    <th className="p-4 border-b border-slate-200 dark:border-slate-700">Operational Metric</th>
                    <th className="p-4 border-b border-slate-200 dark:border-slate-700 text-rose-600 dark:text-rose-400">Before Intervention</th>
                    <th className="p-4 border-b border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400">After Standardizing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900/60 font-medium">
                  {project.beforeAfter.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="p-4 text-brand-dark dark:text-white font-semibold">{item.metric}</td>
                      <td className="p-4 text-slate-500 line-through font-mono">{item.before}</td>
                      <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold font-mono">{item.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Learnings & SOP Takeaways */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-dark dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
              Key Administrative & Governance Learnings
            </h2>
            <ul className="space-y-3">
              {project.lessonsLearned.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{lesson}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Sidebar Metadata & Tools (4 cols) */}
        <div className="lg:col-span-4 space-y-8 sticky top-28">
          
          {/* Tools & Software Stack Box */}
          <div className="saas-card p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-md">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-400 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <Cpu className="w-4 h-4 text-brand-primary" />
              <span>Technology Stack Used</span>
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Simulated Deliverable Download Card */}
          <div className="saas-card p-6 bg-gradient-to-br from-brand-primary to-brand-secondary text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <Database className="w-8 h-8 text-brand-accent" />
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/20 uppercase">Simulated Asset</span>
            </div>
            <div>
              <h3 className="font-extrabold text-lg">Sanitized Sample Workbook</h3>
              <p className="text-xs text-white/80 mt-1 leading-relaxed">
                Download an anonymized, macro-enabled Excel Power Query template demonstrating the exact data cleansing logic utilized in this project.
              </p>
            </div>
            <button
              onClick={() => alert("Simulated Download: In a live enterprise environment, this triggers an instant PDF or Excel template download without PII exposure.")}
              className="w-full py-3 rounded-xl bg-white text-brand-dark font-extrabold text-xs shadow-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-brand-primary" />
              <span>Download Sanitized Sample (.xlsx)</span>
            </button>
          </div>

          {/* Direct Onboarding Callout */}
          <div className="p-6 rounded-3xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-3">
            <ShieldCheck className="w-8 h-8 text-emerald-500 mx-auto" />
            <h3 className="font-bold text-sm text-brand-dark dark:text-white">Need Similar Operational Results?</h3>
            <p className="text-xs text-slate-500">I can deploy this exact verification and cleaning framework for your organization within 48 hours.</p>
            <Link
              href="/contact"
              className="block w-full py-2.5 rounded-xl bg-brand-dark dark:bg-brand-primary text-white font-bold text-xs hover:opacity-90 transition-opacity"
            >
              Request Custom Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Related Projects Section */}
      <section className="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
        <h2 className="text-2xl font-bold text-brand-dark dark:text-white">
          Related Administrative Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedProjects.map((rel, idx) => (
            <Link
              key={rel.id}
              href={`/projects/${rel.slug}`}
              className="saas-card group p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-primary/40 flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-brand-primary block mb-1">{rel.category}</span>
                <h3 className="font-bold text-base sm:text-lg text-brand-dark dark:text-white group-hover:text-brand-primary transition-colors">
                  {rel.title}
                </h3>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};