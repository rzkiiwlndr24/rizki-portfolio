"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, ShieldCheck, FileText, Briefcase, Award, BookOpen, Mail, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/", icon: Home },
  { name: "Case Studies", href: "/projects", icon: Briefcase },
  { name: "Certificates", href: "/certificates", icon: Award },
  { name: "Interactive CV", href: "/cv", icon: FileText },
  { name: "SOP Insights", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
];

/**
 * Responsive Sticky Glassmorphism Navigation Bar.
 * Features mobile drawer, active route indicators, and direct CTA.
 */
export const GlassNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              RW
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base lg:text-lg text-brand-dark dark:text-white tracking-tight leading-none group-hover:text-brand-primary transition-colors">
                Rizki Wulandari
              </span>
              <span className="text-[11px] font-semibold text-brand-gray dark:text-slate-400 mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span>Verified Data Specialist</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 relative",
                    isActive
                      ? "text-brand-primary dark:text-brand-accent font-bold bg-brand-primary/10 dark:bg-brand-primary/20"
                      : "text-slate-600 dark:text-slate-300 hover:text-brand-primary dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60"
                  )}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-brand-primary hover:bg-brand-secondary shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Hire Me Now
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-semibold transition-colors",
                      isActive
                        ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20 font-bold"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-base font-bold text-white bg-brand-primary hover:bg-brand-secondary shadow-md"
                >
                  <span>Initiate Onboarding</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};