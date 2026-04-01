import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI for Development Roadmap",
  description: "Leverage the power of AI as a developer. Master Prompt Engineering, AI tools, and advanced workflows in 12 weeks.",
  openGraph: {
    title: "AI for Development Roadmap | Skills Dev",
    description: "Accelerate your career with our AI developer tools masterclass.",
  },
};

export default function AIDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
