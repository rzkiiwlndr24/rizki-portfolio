"use client";

import React, { useEffect } from "react";
import { ICertificate } from "@/types/portfolio";
import { X, Award, ExternalLink, ShieldCheck, Calendar, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CertificateModalProps {
  certificate: ICertificate | null;
  onClose: () => void;
}

/**
 * Accessible Modal displaying detailed verification metadata for professional certificates.
 * Implements keyboard Escape trapping and backdrop clicking.
 */
export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 lg:p-8 z-10 overflow-hidden"
          >
            {/* Header Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="flex items-start gap-4 mb-6 mt-2">
              <div className="p-3.5 rounded-2xl bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary dark:text-brand-accent flex-shrink-0">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mb-2">
                  {certificate.category}
                </span>
                <h3 className="text-xl lg:text-2xl font-extrabold text-brand-dark dark:text-white leading-tight">
                  {certificate.title}
                </h3>
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-y border-slate-100 dark:border-slate-800 mb-6 text-sm">
              <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
                <Building2 className="w-4 h-4 text-brand-primary" />
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase">Issuer</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{certificate.issuer}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
                <Calendar className="w-4 h-4 text-brand-primary" />
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase">Issue Date</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{certificate.issueDate}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400 md:col-span-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase">Credential ID</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{certificate.credentialId}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Competency & Skills Verified
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {certificate.description}
              </p>
            </div>

            {/* Footer Action */}
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Close Preview
              </button>
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-brand-primary text-white hover:bg-brand-secondary shadow-soft transition-all duration-200"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};