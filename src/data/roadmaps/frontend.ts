import { 
  Code, 
  Layout, 
  Smartphone, 
  Zap, 
  Globe, 
  ExternalLink, 
  FileCode, 
  Palette, 
  Database, 
  Bot, 
  Brain,
  Layers,
  Container,
  GitBranch,
  Terminal,
  ShieldCheck,
  Briefcase
} from "lucide-react";
import { Roadmap } from "@/types/roadmap";

export const frontendRoadmap: Roadmap = {
  id: "frontend",
  title: "Frontend Development",
  subtitle: "Learning Path",
  badge: "12-Week Intensive Program",
  description: "From zero to job-ready frontend developer. Master HTML, CSS, JavaScript, React, and build stunning web applications in 12 weeks.",
  stats: {
    duration: "12 Weeks",
    focus: "Responsive Design",
    level: "React Expert"
  },
  modules: [
    {
      week: 1,
      id: "html-css-basics",
      title: "HTML & CSS Fundamentals",
      duration: "7 days",
      icon: Code,
      color: "bg-orange-500",
      topics: [
        "HTML5 Document Structure",
        "Semantic HTML Tags",
        "Headings, Paragraphs, Links",
        "Images, Lists, Tables",
        "Forms & Input Elements",
        "CSS Syntax & Selectors",
        "Colors, Fonts, Typography",
        "Box Model (Margin, Padding, Border)"
      ],
      projects: ["Build a personal profile page", "Create a simple landing page"],
      resources: [
        { label: "MDN Web Docs - HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { label: "CSS Diner Game", href: "https://flukeout.github.io/" }
      ],
      outcome: "Create basic web pages with styling"
    },
    {
      week: 2,
      id: "advanced-css",
      title: "Advanced CSS & Responsive Design",
      duration: "7 days",
      icon: Smartphone,
      color: "bg-emerald-500",
      topics: [
        "Flexbox Layouts",
        "CSS Grid Masterclass",
        "Responsive Design & Media Queries",
        "CSS Transitions & Animations",
        "CSS Variables (Custom Properties)",
        "SASS/SCSS Basics",
        "Mobile-First Approach",
        "Tailwind CSS Introduction"
      ],
      projects: ["Responsive Portfolio Website", "Complex Grid Layout Dashboard"],
      resources: [
        { label: "Flexbox Froggy", href: "https://flexboxfroggy.com/" },
        { label: "Grid Garden", href: "https://cssgridgarden.com/" }
      ],
      outcome: "Build fully responsive, animated user interfaces"
    },
    {
      week: 3,
      id: "js-basics",
      title: "JavaScript Fundamentals",
      duration: "7 days",
      icon: FileCode,
      color: "bg-yellow-500",
      topics: [
        "Variables & Data Types",
        "Operators & Expressions",
        "Conditional Logic (if/else, switch)",
        "Loops (for, while, forEach)",
        "Function Declarations vs Expressions",
        "Arrow Functions",
        "Objects & Arrays basics",
        "Scope & Closures"
      ],
      projects: ["Interactive Quiz App", "To-Do List with local storage"],
      resources: [
        { label: "JavaScript.info", href: "https://javascript.info/" },
        { label: "Eloquent JavaScript", href: "https://eloquentjavascript.net/" }
      ],
      outcome: "Master the core programming logic of JavaScript"
    },
    {
      week: 4,
      id: "advanced-js",
      title: "Advanced JavaScript (ES6+)",
      duration: "7 days",
      icon: Zap,
      color: "bg-purple-500",
      topics: [
        "Asynchronous JS (Promises, Async/Await)",
        "Fetch API & Error Handling",
        "Destructuring & Spread/Rest operators",
        "Modules (Import/Export)",
        "Classes & Prototype Inheritance",
        "Higher-Order Functions (Map, Filter, Reduce)",
        "Regular Expressions",
        "Web APIs (LocalStorage, Geolocation)"
      ],
      projects: ["Weather Application with API", "Recipe Finder App"],
      resources: [
        { label: "Web Dev Simplified - Promises", href: "https://youtube.com/webdevsimplified" },
        { label: "FreeCodeCamp JS Algorithms", href: "https://freecodecamp.org" }
      ],
      outcome: "Handle complex data and asynchronous operations"
    },
    {
      week: 5,
      id: "dom-manipulation",
      title: "DOM Manipulation & Events",
      duration: "7 days",
      icon: Layers,
      color: "bg-blue-500",
      topics: [
        "Selecting & Modifying Elements",
        "Event Listeners & Event Bubbling",
        "Creating & Removing DOM Nodes",
        "Manipulating CSS Classes & Styles",
        "Form Validation & Submission",
        "Working with Data Attributes",
        "Keyboard & Mouse Events",
        "Intersection Observer API"
      ],
      projects: ["Drag & Drop Task Board", "Modal Gallery with filtered search"],
      resources: [
        { label: "DOM Enlightenment", href: "http://domenlightenment.com/" }
      ],
      outcome: "Build interactive browser-based experiences"
    },
    {
      week: 6,
      id: "api-integration",
      title: "API Integration",
      duration: "7 days",
      icon: Database,
      color: "bg-cyan-500",
      topics: [
        "RESTful API Concepts",
        "JSON Data Format",
        "HTTP Methods (GET, POST, PUT, DELETE)",
        "Authentication with JWT/API Keys",
        "Environment Variables",
        "Handling Loading & Error States",
        "Pagination & Sorting from API",
        "CORS & Browser Security"
      ],
      projects: ["Crypto Tracker Dashboard", "GitHub User Search Engine"],
      resources: [
        { label: "Public APIs List", href: "https://github.com/public-apis/public-apis" }
      ],
      outcome: "Connect frontend apps to real-world data sources"
    },
    {
      week: 7,
      id: "react-basics",
      title: "React Fundamentals",
      duration: "7 days",
      icon: Globe,
      color: "bg-sky-500",
      topics: [
        "JSX Syntax & Rules",
        "Components (Functional vs Class)",
        "Props & State Management",
        "The Component Lifecycle",
        "Conditional Rendering",
        "Rendering Lists & Keys",
        "Handling Events in React",
        "React Developer Tools"
      ],
      projects: ["Personal Blog with React", "Product Catalog Page"],
      resources: [
        { label: "React Official Tutorial", href: "https://react.dev/learn" }
      ],
      outcome: "Understand the component-based architecture of React"
    },
    {
      week: 8,
      id: "advanced-react",
      title: "Advanced React (Hooks)",
      duration: "7 days",
      icon: Zap,
      color: "bg-indigo-500",
      topics: [
        "useState & useEffect Deep Dive",
        "useContext for Prop Drilling solutions",
        "useRef for accessing DOM",
        "useMemo & useCallback for Performance",
        "Building Custom Hooks",
        "useReducer for complex state",
        "React Portals",
        "React Fragments & Strict Mode"
      ],
      projects: ["Multi-Step Checkout Form", "Advanced Dashboard with Filters"],
      resources: [
        { label: "Custom Hooks Guide", href: "https://usehooks.com/" }
      ],
      outcome: "Master state management and performance in React"
    },
    {
      week: 9,
      id: "react-ecosystem",
      title: "React Ecosystem & Router",
      duration: "7 days",
      icon: Layout,
      color: "bg-pink-500",
      topics: [
        "React Router v6 setup",
        "Dynamic Routes & URLParams",
        "Nested Layouts & Outlets",
        "Protected Routes (Auth)",
        "Redux Toolkit Fundamentals",
        "Async Thunks & RTK Query",
        "Zustand/Context API comparison",
        "Formik or React Hook Form"
      ],
      projects: ["E-commerce App with Cart features", "Social Media Feed Clone"],
      resources: [
        { label: "React Router Docs", href: "https://reactrouter.com" },
        { label: "Redux Fundamentals", href: "https://redux.js.org" }
      ],
      outcome: "Build complex, multi-page web applications"
    },
    {
      week: 10,
      id: "git-github",
      title: "Git & GitHub Collaboration",
      duration: "7 days",
      icon: GitBranch,
      color: "bg-zinc-700",
      topics: [
        "Git Core Concepts (Add, Commit, Push)",
        "Branching & Merging Strategies",
        "Handling Merge Conflicts",
        "Pull Requests & Code Reviews",
        "GitHub Actions basics (CI/CD)",
        "Collaborative Workflows",
        "Git Rebase vs Merge",
        "Stashing & Amend"
      ],
      projects: ["Group Project on GitHub", "Open Source Contribution Fix"],
      resources: [
        { label: "OhlshitGit!", href: "https://ohshitgit.com/" }
      ],
      outcome: "Collaborate effectively in a professional dev environment"
    },
    {
      week: 11,
      id: "testing",
      title: "Testing Fundamentals",
      duration: "7 days",
      icon: ShieldCheck,
      color: "bg-violet-500",
      topics: [
        "Types of Testing (Unit, Integration, E2E)",
        "Jest Framework Setup",
        "React Testing Library basics",
        "Mocking APIs & Functions",
        "Testing Hooks & Context",
        "Snapshots Testing",
        "Cypress or Playwright for E2E",
        "TDD (Test Driven Development) basics"
      ],
      projects: ["Test Suite for a React App", "E2E User Flow Tests"],
      resources: [
        { label: "Testing JavaScript", href: "https://testingjavascript.com/" }
      ],
      outcome: "Ensure code quality and reliability through testing"
    },
    {
      week: 12,
      id: "fullstack-project",
      title: "Fullstack Project & Portfolio",
      duration: "7 days",
      icon: Briefcase,
      color: "bg-rose-500",
      topics: [
        "Fullstack Architecture with Next.js",
        "Server-Side Rendering (SSR)",
        "Static Site Generation (SSG)",
        "API Routes in Next.js",
        "Database Integration (Vercel Postgres/Prisma)",
        "Production Deployment on Vercel",
        "SEO Optimization basics",
        "Preparing a Professional Portfolio"
      ],
      projects: ["Capstone Fullstack Project", "Launch Professional Portfolio"],
      resources: [
        { label: "Vercel Deployment Guide", href: "https://vercel.com/docs" }
      ],
      outcome: "Deploy a production-ready application and portfolio"
    }
  ]
};
