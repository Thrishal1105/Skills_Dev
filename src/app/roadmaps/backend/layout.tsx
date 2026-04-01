import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backend Development Roadmap",
  description: "Learn how to build scalable servers, APIs, and databases. Follow our 12-week backend masterclass with AI integration.",
  openGraph: {
    title: "Backend Development Roadmap | Skills Dev",
    description: "Architect the future with our comprehensive backend learning path.",
  },
};

export default function BackendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
