import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/data";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | AI, Data Engineering & Cloud Solutions`,
    template: `%s | ${site.name}`,
  },
  description:
    "Karsient is an AI and Data Engineering company helping enterprises modernize data platforms, build production AI, and engineer intelligent enterprise solutions across cloud, Lakehouse, RAG and Agentic AI.",
  keywords: [
    "Karsient",
    "Karsient AI",
    "Karsient Data Engineering",
    "Databricks consulting",
    "data engineering",
    "AI consulting",
    "Agentic AI",
    "enterprise RAG",
    "cloud migration",
    "data governance",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    title: `${site.name} | Engineering Tomorrow's Intelligent Enterprises`,
    description:
      "Karsient is an AI and Data Engineering company helping enterprises modernize data platforms, build production AI, and engineer intelligent enterprise solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Engineering Tomorrow's Intelligent Enterprises`,
    description:
      "Karsient is an AI and Data Engineering company helping enterprises modernize data platforms, build production AI, and engineer intelligent enterprise solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} dark`}>
      <body className="min-h-screen bg-ink font-body text-white antialiased">
        <StructuredData />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-signal focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
