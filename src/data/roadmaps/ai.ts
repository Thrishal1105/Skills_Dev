import { Roadmap } from "@/types/roadmap";
import { 
  Brain, 
  Sparkles, 
  Code, 
  MessageSquare, 
  Layers, 
  Database, 
  Bot, 
  Rocket 
} from "lucide-react";

export const aiRoadmap: Roadmap = {
  id: "ai-integration",
  title: "AI Integration",
  subtitle: "Learning Path",
  badge: "8-Week Mastery Program",
  description: "Master the integration of Artificial Intelligence into modern applications. From LLM basics to autonomous agents.",
  stats: {
    duration: "8 Weeks",
    focus: "AI Engineering",
    level: "Advanced"
  },
  modules: [
    {
      id: "ai1",
      week: 1,
      title: "AI Basics",
      duration: "7 days",
      icon: Brain,
      color: "bg-purple-500",
      topics: [
        "History of AI and Machine Learning",
        "Introduction to Large Language Models (LLMs)",
        "How Transform Architecture Works",
        "Tokens, Context Windows, and Temperature",
        "Deterministic vs Probabilistic AI",
        "State of the Art Models (GPT-4, Claude 3, Gemini)",
        "Ethical Considerations and AI Safety"
      ],
      projects: ["Analyze LLM responses across different temperatures."],
      resources: [
        { label: "OpenAI: What are LLMs?", href: "https://openai.com/blog/better-language-models" },
        { label: "Andrej Karpathy: Intro to LLMs", href: "https://www.youtube.com/watch?v=zjkBMFhNj_g" }
      ],
      outcome: "understand the core mechanics and limitations of modern AI"
    },
    {
      id: "ai2",
      week: 2,
      title: "AI Tools for Developers",
      duration: "7 days",
      icon: Sparkles,
      color: "bg-blue-400",
      topics: [
        "GitHub Copilot Mastery",
        "Cursor: The AI-First Code Editor",
        "ChatGPT and Claude for Code Generation",
        "AI-Powered Unit Testing",
        "Automating Documentation with AI",
        "Code Review and Debugging with LLMs",
        "Maximizing Developer Productivity"
      ],
      projects: ["Refactor a legacy codebase using Cursor and Copilot."],
      resources: [
        { label: "GitHub Copilot Docs", href: "https://docs.github.com/en/copilot" },
        { label: "Cursor Editor Guide", href: "https://cursor.sh/docs" }
      ],
      outcome: "exponentially increase your coding speed using AI tools"
    },
    {
      id: "ai3",
      week: 3,
      title: "AI APIs",
      duration: "7 days",
      icon: Code,
      color: "bg-emerald-500",
      topics: [
        "OpenAI API Fundamentals",
        "Anthropic Claude API Integration",
        "Google Gemini API Setup",
        "Streaming Responses (SSE)",
        "Rate Limiting and Error Handling",
        "Token Usage Optimization",
        "Function Calling Basics"
      ],
      projects: ["Build a Multi-Model Chat Interface (GPT & Claude)."],
      resources: [
        { label: "OpenAI API Reference", href: "https://platform.openai.com/docs/api-reference" },
        { label: "Anthropic API Docs", href: "https://docs.anthropic.com/claude/reference" }
      ],
      outcome: "programmatically interact with the world's most powerful AI models"
    },
    {
      id: "ai4",
      week: 4,
      title: "Prompt Engineering",
      duration: "7 days",
      icon: MessageSquare,
      color: "bg-orange-500",
      topics: [
        "The Art of the System Prompt",
        "Zero-Shot vs Few-Shot Prompting",
        "Chain of Thought (CoT) Techniques",
        "Output Structuring (JSON Mode)",
        "Prompt Versioning and Evaluation",
        "Preventing Prompt Injection",
        "Iterative Prompt Development"
      ],
      projects: ["Design a prompt library for specific business use cases."],
      resources: [
        { label: "Prompt Engineering Guide", href: "https://www.promptingguide.ai/" },
        { label: "Learn Prompting", href: "https://learnprompting.org/" }
      ],
      outcome: "craft highly effective prompts for predictable AI behavior"
    },
    {
      id: "ai5",
      week: 5,
      title: "AI Frameworks",
      duration: "7 days",
      icon: Layers,
      color: "bg-indigo-500",
      topics: [
        "Vercel AI SDK (React/Next.js)",
        "LangChain Fundamentals",
        "Chains and Components",
        "Memory and State Management",
        "LlamaIndex for Data Connection",
        "Building Chatbots with Next.js",
        "Model Agnostic Development"
      ],
      projects: ["Build an AI Chatbot using Vercel AI SDK and Next.js."],
      resources: [
        { label: "Vercel AI SDK Docs", href: "https://sdk.vercel.ai/docs" },
        { label: "LangChain.js Guide", href: "https://js.langchain.com/docs/" }
      ],
      outcome: "leverage industry-standard frameworks to build AI apps fast"
    },
    {
      id: "ai6",
      week: 6,
      title: "Working With Your Own Data",
      duration: "7 days",
      icon: Database,
      color: "bg-cyan-500",
      topics: [
        "Vector Databases Fundamentals",
        "Embeddings: Turning Text into Math",
        "Retrieval Augmented Generation (RAG)",
        "Pinecone and ChromaDB Setup",
        "Semantic Search Implementation",
        "Chunking Strategies for Large Docs",
        "Hybrid Search (Keyword + Semantic)"
      ],
      projects: ["Build a 'Chat with your PDF' RAG application."],
      resources: [
        { label: "Pinecone: What is Vector Search?", href: "https://www.pinecone.io/learn/vector-database/" },
        { label: "RAG Explained", href: "https://aws.amazon.com/what-is/retrieval-augmented-generation/" }
      ],
      outcome: "create AI that knows your specific data and documents"
    },
    {
      id: "ai7",
      week: 7,
      title: "AI Agents",
      duration: "7 days",
      icon: Bot,
      color: "bg-red-500",
      topics: [
        "What are Autonomous AI Agents?",
        "Reasoning Loop (ReAct Pattern)",
        "Defining Tools for Agents",
        "Multi-Agent Collaboration",
        "Agent Error Handling and Loops",
        "Human-in-the-loop Systems",
        "AutoGPT and BabyAGI Concepts"
      ],
      projects: ["Build an AI Agent that can browse the web and save notes."],
      resources: [
        { label: "AutoGPT GitHub", href: "https://github.com/Significant-Gravitas/AutoGPT" },
        { label: "LangChain Agents", href: "https://js.langchain.com/docs/modules/agents/" }
      ],
      outcome: "build systems that can reason and take actions autonomously"
    },
    {
      id: "ai8",
      week: 8,
      title: "AI Projects & Portfolio",
      duration: "7 days",
      icon: Rocket,
      color: "bg-pink-500",
      topics: [
        "AI SaaS Architecture",
        "Handling High Costs and Billing",
        "Model Fine-Tuning Basics",
        "Deployment Strategies for AI Apps",
        "AI Performance Monitoring",
        "Building a Standout AI Portfolio",
        "Future Trends in AI Engineering"
      ],
      projects: ["Launch a complete AI-powered SaaS MVP."],
      resources: [
        { label: "Fine-Tuning Guide", href: "https://platform.openai.com/docs/guides/fine-tuning" },
        { label: "Deploying AI Apps", href: "https://vercel.com/templates?framework=next.js&category=ai" }
      ],
      outcome: "launch professional-grade AI products to the world"
    }
  ]
};
