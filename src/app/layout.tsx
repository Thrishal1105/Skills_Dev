import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skills-dev-care.vercel.app"),
  title: {
    template: "%s | Skills Dev",
    default: "Skills Dev | Master the Art of AI-Driven Engineering",
  },
  description: "Transform your career with AI-driven insights, personalized roadmaps, and elite skill mapping for modern engineers.",
  keywords: ["AI Engineering", "Frontend Roadmap", "Backend Roadmap", "Fullstack Developer", "Skill Mapping", "AI Integrated Learning", "Software Career Growth"],
  authors: [{ name: "Dharshanoj Thrishal" }],
  creator: "Dharshanoj Thrishal",
  publisher: "Skills Dev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Skills Dev | Master Your Potential",
    description: "Elite AI-powered learning paths for modern software engineers.",
    url: "https://skills-dev.vercel.app",
    siteName: "Skills Dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills Dev | Master Your Potential",
    description: "Elite AI-powered learning paths for modern software engineers.",
    creator: "@thrishal",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col scroll-smooth">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
