import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ARTICLES } from "@/data/portfolioData";
import { ArrowLeft, Clock, Calendar, Share2, BookmarkCheck, BookOpen } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);
  if (!article) return {};
  return {
    title: `${article.title} | SOP Insights by Rizki Wulandari`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-12">
      
      {/* Top Breadcrumb */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-white transition-colors group mb-8"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Knowledge Base</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20 dark:text-brand-accent font-bold">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {article.publishedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark dark:text-white tracking-tight leading-tight">
            {article.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-brand-primary pl-4 py-1">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Article Body Content */}
      <article className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-base lg:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        {article.content.map((paragraph, idx) => {
          if (paragraph.startsWith("### ")) {
            return (
              <h3 key={idx} className="text-xl sm:text-2xl font-bold text-brand-dark dark:text-white pt-6 border-b border-slate-100 dark:border-slate-800 pb-2">
                {paragraph.replace("### ", "")}
              </h3>
            );
          }
          if (paragraph.startsWith("1. ") || paragraph.startsWith("2. ") || paragraph.startsWith("3. ") || paragraph.startsWith("4. ") || paragraph.startsWith("* ")) {
            return (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-sm sm:text-base font-medium">
                {paragraph}
              </div>
            );
          }
          if (paragraph.startsWith("```")) {
            return (
              <pre key={idx} className="p-4 rounded-2xl bg-slate-900 text-emerald-400 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800">
                {paragraph.replace(/```/g, "")}
              </pre>
            );
          }
          return <p key={idx}>{paragraph}</p>;
        })}
      </article>

      {/* Author Handoff Card */}
      <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center gap-6 shadow-xl mt-16 border border-slate-800">
        <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center text-white font-extrabold text-2xl flex-shrink-0 shadow-lg">
          RW
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-extrabold text-lg">Authored by Rizki Wulandari</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Senior Data Entry Specialist & Administrative Assistant dedicated to helping global teams eliminate operational friction. Want to implement these SOPs in your organization?
          </p>
          <Link href="/contact" className="inline-block text-xs font-bold text-brand-accent hover:underline pt-1">
            Initiate Onboarding Interview &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};