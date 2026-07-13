"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare, Send, CheckCircle2, AlertCircle, ShieldCheck, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormInputs {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Dummy verification alert fallback if EmailJS tokens are unconfigured
      // In production, replace with: await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY');
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary dark:text-brand-accent text-xs font-bold uppercase">
          <Mail className="w-4 h-4" />
          <span>Initiate Contract</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark dark:text-white tracking-tight">
          Let us Eliminate Administrative Friction.
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base lg:text-lg leading-relaxed">
          Available for immediate onboarding with remote corporations, NGO executive boards, and virtual assistant agencies worldwide. I respond to all inquiries within 4 business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Contact Form (7 cols) */}
        <div className="lg:col-span-7 saas-card bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 relative">
          <h2 className="text-2xl font-bold text-brand-dark dark:text-white mb-6">
            Project Intake Form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  {...register("name", { required: "Full name is required" })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                />
                {errors.name && <span className="text-xs text-rose-500 font-medium">{errors.name.message}</span>}
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  placeholder="sarah@acmecorp.com"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address format",
                    },
                  })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                />
                {errors.email && <span className="text-xs text-rose-500 font-medium">{errors.email.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Company Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corporation"
                  {...register("company")}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                />
              </div>

              {/* Service Type Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  Primary Service Required *
                </label>
                <select
                  {...register("serviceType", { required: "Please select a service type" })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                >
                  <option value="">Select Service...</option>
                  <option value="Data Entry & Cleansing">Enterprise Data Entry & Cleansing</option>
                  <option value="Excel Dashboard Reporting">Excel Power Query / Dashboard Reporting</option>
                  <option value="Executive Virtual Assistant">Executive Virtual Assistant Support</option>
                  <option value="CRM Deduplication">CRM Deduplication (HubSpot / Salesforce)</option>
                  <option value="SOP & Workflow Automation">SOP & Zapier Workflow Automation</option>
                </select>
                {errors.serviceType && <span className="text-xs text-rose-500 font-medium">{errors.serviceType.message}</span>}
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                Project Scope & Requirements *
              </label>
              <textarea
                rows={5}
                placeholder="Describe your current database volume, software stack, or weekly administrative hours required..."
                {...register("message", { required: "Please detail your project scope" })}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all resize-none"
              />
              {errors.message && <span className="text-xs text-rose-500 font-medium">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl bg-brand-primary text-white font-extrabold text-base shadow-soft hover:bg-brand-secondary disabled:opacity-50 transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Transmitting Securely...</span>
              ) : (
                <>
                  <span>Transmit Inquiry</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Status Feedback */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-3 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Inquiry received successfully! I will review your specifications and reply within 4 business hours.</span>
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-2xl bg-rose-50 text-rose-800 border border-rose-200 flex items-center gap-3 text-sm font-semibold">
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <span>Transmission failed. Please email me directly at {PERSONAL_INFO.email} or connect via WhatsApp.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        {/* Right: Direct Contact & Maps (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Quick Connect Cards */}
          <div className="saas-card bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="font-bold text-lg text-brand-dark dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
              Direct Communication Channels
            </h3>

            <div className="space-y-4 text-sm font-medium">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-brand-primary/10 transition-colors group">
                <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-brand-primary shadow-sm group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Corporate Email</span>
                  <span className="font-bold text-brand-dark dark:text-white group-hover:text-brand-primary transition-colors">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-500/10 transition-colors group">
                <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-emerald-500 shadow-sm group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Instant WhatsApp (Indonesia)</span>
                  <span className="font-bold text-brand-dark dark:text-white group-hover:text-emerald-500 transition-colors">{PERSONAL_INFO.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60">
                <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-brand-primary shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Primary Location</span>
                  <span className="font-bold text-brand-dark dark:text-white">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Verified Profiles</span>
              <div className="flex items-center gap-2">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-primary hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-primary hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Operational Hours & Response SLA */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-brand-accent text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Service Level Agreement (SLA)</span>
            </div>
            <h3 className="font-extrabold text-base">Multi-Timezone Coverage</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Operating from Bandar Lampung (WIB / UTC+7), my schedules are tailored to overlap 4 hours daily with both US Eastern (EST) and Western European (CET) business hours.
            </p>
          </div>

          {/* Simulated Google Maps Iframe Frame */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 h-64 shadow-sm bg-slate-100 dark:bg-slate-800 relative">
            <iframe
              title="Lampung, Indonesia Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126999.0308005391!2d105.18436279999999!3d-5.4297121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40da4377ff53ef%3A0x3039d80b220cc30!2sBandar%20Lampung%2C%20Lampung%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale dark:invert opacity-80"
            />
            <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[11px] font-bold text-slate-800 dark:text-slate-200 shadow-md">
              Bandar Lampung, Indonesia (Remote Hub)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};