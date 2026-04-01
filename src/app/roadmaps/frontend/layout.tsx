import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Development Roadmap",
  description: "Master modern frontend development with our 12-week interactive roadmap. Learn React, Tailwind CSS, and Next.js through AI-powered guidance.",
  openGraph: {
    title: "Frontend Development Roadmap | Skills Dev",
    description: "Start your journey to becoming a Master Frontend Engineer.",
  },
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
