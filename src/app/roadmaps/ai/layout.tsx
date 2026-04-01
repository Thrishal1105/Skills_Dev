import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration Roadmap",
  description: "Learn to build AI-first applications. Master chatbot integration, LLMs, and automation in our 12-week specialized roadmap.",
  openGraph: {
    title: "AI Integration Roadmap | Skills Dev",
    description: "Build the future of intelligence with our AI integration guide.",
  },
};

export default function AIIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
