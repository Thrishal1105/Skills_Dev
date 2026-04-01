import { Roadmap } from "@/types/roadmap";
import { 
  Brain, 
  Globe, 
  Code, 
  MessageSquare, 
  Layers, 
  Database, 
  Search, 
  Bot, 
  Rocket 
} from "lucide-react";

export const devAiRoadmap: Roadmap = {
  id: "ai-for-development",
  title: "AI for Development",
  subtitle: "Expert Learning Path",
  badge: "Advanced Engineering Track",
  description: "A deep dive into building production-grade AI applications, focusing on RAG, Agents, and Orchestration.",
  stats: {
    duration: "14 Weeks",
    focus: "AI Application Building",
    level: "Expert"
  },
  modules: [
    {
      id: "da1",
      week: 1,
      title: "AI Fundamentals",
      duration: "1 week",
      icon: Brain,
      color: "bg-purple-500",
      topics: [
        "Modern Transformer Architecture",
        "Attention Mechanisms & Self-Attention",
        "LLM Training: Pre-training vs Fine-tuning",
        "Tokenization & Embedding Vectors",
        "Foundational Models Comparison",
        "Understanding Context Window Scaling",
        "Hardware for AI: GPUs/TPUs Overview"
      ],
      projects: ["Build a visualization of how Transformer Attention works."],
      resources: [
        { label: "Attention Is All You Need", href: "https://arxiv.org/abs/1706.03762" },
        { label: "Hugging Face Course", href: "https://huggingface.co/learn/nlp-course" }
      ],
      outcome: "grasp the mathematical and architectural foundations of LLMs"
    },
    {
      id: "da2",
      week: 2,
      title: "AI Tools & Platforms",
      duration: "1 week",
      icon: Globe,
      color: "bg-blue-500",
      topics: [
        "Cloud LLM Providers (AWS Bedrock, Vertex AI)",
        "Local LLM Hosting (Ollama, LM Studio)",
        "AI Deployment Platforms (Together AI, Replicate)",
        "Monitoring AI Performance (LangSmith)",
        "Benchmarking Model Speed and Accuracy",
        "Cost Analysis and Optimization",
        "Security in AI Platform Integration"
      ],
      projects: ["Deploy a locally hosted LLM and benchmark it against GPT-4."],
      resources: [
        { label: "Ollama Documentation", href: "https://ollama.com/library" },
        { label: "LangSmith Guide", href: "https://docs.smith.langchain.com/" }
      ],
      outcome: "efficiently deploy and monitor AI models across various platforms"
    },
    {
      id: "da3",
      week: 3,
      title: "AI APIs in Web Applications",
      duration: "1.5 weeks",
      icon: Code,
      color: "bg-emerald-500",
      topics: [
        "Next.js AI Integration Patterns",
        "Server-Sent Events (SSE) for Real-time Streaming",
        "Optimistic UI Updates for AI Responses",
        "Handling Large Payloads and Timeouts",
        "Streaming with Vercel AI SDK",
        "Edge Functions vs Serverless for AI",
        "Stateful Chat UI Implementation"
      ],
      projects: ["Build a real-time streaming chat app with optimistic UI."],
      resources: [
        { label: "Vercel AI SDK Core", href: "https://sdk.vercel.ai/docs/core" },
        { label: "Next.js Streaming Guide", href: "https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming" }
      ],
      outcome: "architect highly responsive, streaming-first AI web apps"
    },
    {
      id: "da4",
      week: 4,
      title: "Advanced Prompt Engineering",
      duration: "1 week",
      icon: MessageSquare,
      color: "bg-orange-500",
      topics: [
        "Programmatic Prompting (DSPy)",
        "Dynamic Prompt Templates",
        "Few-shot CoT and ReAct Prompting",
        "Metaprompting for Self-Correction",
        "Prompt Decomposition for Complex Reasoning",
        "Evaluating Prompt Reliability",
        "Automating Prompt Generation"
      ],
      projects: ["Build an automated prompt evaluation suite using DSPy."],
      resources: [
        { label: "DSPy Documentation", href: "https://dspy-docs.vercel.app/" },
        { label: "OpenAI Cookbook: Prompting", href: "https://github.com/openai/openai-cookbook" }
      ],
      outcome: "master the science of robust and automated prompt engineering"
    },
    {
      id: "da5",
      week: 5,
      title: "AI Frameworks & Orchestration",
      duration: "1.5 weeks",
      icon: Layers,
      color: "bg-indigo-500",
      topics: [
        "LangGraph for Cyclic AI Flows",
        "Complex Orchestration with LangChain",
        "Tool Calling and Tool Integration",
        "Building Modular AI Chains",
        "Handling State in Long-running AI Task",
        "Visual Orchestration with Flowise",
        "Model Routing Logic"
      ],
      projects: ["Build a complex multi-step AI workflow using LangGraph."],
      resources: [
        { label: "LangGraph JS Guide", href: "https://langchain-ai.github.io/langgraphjs/" },
        { label: "Flowise AI Documentation", href: "https://docs.flowiseai.com/" }
      ],
      outcome: "orchestrate sophisticated AI behaviors through advanced frameworks"
    },
    {
      id: "da6",
      week: 6,
      title: "Vector Databases & Embeddings",
      duration: "1.5 weeks",
      icon: Database,
      color: "bg-cyan-500",
      topics: [
        "Embedding Model Selection",
        "Vector Indexing Algorithms (HNSW, Flat)",
        "Metadata Filtering and Scalar Search",
        "Supabase Vector (pgvector) Integration",
        "Comparing Pinecone, Chroma, and MongoDB Vector",
        "Optimizing Vector Search Performance",
        "Embedding Dimensionality and Storage"
      ],
      projects: ["Build a high-performance semantic search engine using pgvector."],
      resources: [
        { label: "Pinecone Vector Learning", href: "https://www.pinecone.io/learn/vector-database/" },
        { label: "Supabase Vector Docs", href: "https://supabase.com/docs/guides/ai/vector-columns" }
      ],
      outcome: "store and retrieve large-scale semantic data with vector DBs"
    },
    {
      id: "da7",
      week: 7,
      title: "Retrieval-Augmented Generation (RAG)",
      duration: "2 weeks",
      icon: Search,
      color: "bg-pink-500",
      topics: [
        "Advanced RAG: Query Expansion",
        "Self-RAG and Adaptive Retrieval",
        "Citation Logic and Source Attributions",
        "Handling Context Window Overload",
        "Evaluating RAG Quality (RAGAS)",
        "Reranking for Higher Accuracy",
        "Multi-Stage Information Retrieval"
      ],
      projects: ["Develop an Enterprise Document QA system with Citations."],
      resources: [
        { label: "RAG Evaluation with RAGAS", href: "https://docs.ragas.io/en/stable/" },
        { label: "Advanced RAG Techniques", href: "https://github.com/FullStackRetrieval-com/RetrievalTutorials" }
      ],
      outcome: "implement industry-leading RAG patterns for accurate AI knowledge"
    },
    {
      id: "da8",
      week: 8,
      title: "AI Agents & Automation",
      duration: "1.5 weeks",
      icon: Bot,
      color: "bg-red-500",
      topics: [
        "Building Tool-Using Agents",
        "Autonomous Agentic Reasoning loops",
        "Multi-Agent Design (CrewAI/LangGraph)",
        "Function Calling and External Tools",
        "Agent Error Recovery Strategies",
        "Designing Agent Workflows for Automation",
        "Agentic Task Prioritization"
      ],
      projects: ["Architect a CrewAI-style multi-agent content research system."],
      resources: [
        { label: "CrewAI Documentation", href: "https://docs.crewai.com/" },
        { label: "LangChain Tool Calling", href: "https://js.langchain.com/docs/modules/agents/tools/" }
      ],
      outcome: "create intelligent agents capable of autonomous task execution"
    },
    {
      id: "da9",
      week: 9,
      title: "AI Application Projects",
      duration: "2 weeks",
      icon: Rocket,
      color: "bg-rose-500",
      topics: [
        "End-to-End AI SaaS Architecture",
        "Monetizing AI: Token Billing and Usage",
        "Scalable AI Deployment Patterns",
        "Advanced Monitoring and Tracing",
        "UX Design for AI Feedback Loops",
        "Handling Complex Failures gracefully",
        "Portfolio Presentation and Showcase"
      ],
      projects: ["Build and Deploy a production-ready AI Code Reviewer SaaS."],
      resources: [
        { label: "OpenAI SaaS Starter", href: "https://github.com/openai/openai-saas-starter" },
        { label: "Building AI SaaS", href: "https://vercel.com/blog/building-ai-applications-with-nextjs" }
      ],
      outcome: "launch a production-grade multi-agent AI SaaS application"
    }
  ]
};
