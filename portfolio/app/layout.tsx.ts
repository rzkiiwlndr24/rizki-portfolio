import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { MegaFooter } from "@/components/layout/MegaFooter";
import { BackToTop } from "@/components/ui/BackToTop";
import { PERSONAL_INFO } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | Senior Data Entry Specialist & Administrative Assistant`,
  description: PERSONAL_INFO.bio,
  keywords: [
    "Data Entry Specialist",
    "Administrative Assistant",
    "Virtual Assistant Indonesia",
    "Excel Power Query",
    "Data Cleaning",
    "Remote Operations Assistant",
    "Google Workspace Administrator",
    "SOP Development",
    "HR Recruiter VA",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: "https://rizkiwulandari.dev" }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rizkiwulandari.dev",
    title: `${PERSONAL_INFO.name} | Professional Administrative Portfolio`,
    description: "Building trust within 10 seconds. View 8 comprehensive administrative case studies and verified operational metrics.",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Senior Data Entry & Operations Specialist`,
    description: "100% verified data accuracy. Discover how I streamline executive workflows and enterprise database migrations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-brand-background dark:bg-brand-dark text-brand-dark dark:text-brand-white">
        <GlassNavbar />
        <main className="flex-grow">{children}</main>
        <MegaFooter />
        <BackToTop />
      </body>
    </html>
  );
};