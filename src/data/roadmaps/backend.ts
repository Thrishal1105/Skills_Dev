import { Roadmap } from "@/types/roadmap";
import { 
  Code, 
  Terminal, 
  Globe, 
  Server, 
  Layers, 
  Database, 
  Link, 
  ShieldCheck, 
  GitBranch, 
  Cloud, 
  Cpu, 
  PlaneTakeoff 
} from "lucide-react";

export const backendRoadmap: Roadmap = {
  id: "backend-roadmap",
  title: "Backend Development",
  subtitle: "Learning Path",
  badge: "12-Week Intensive Program",
  description: "Master server-side architecture, databases, APIs, and scalable systems.",
  stats: {
    duration: "12 Weeks",
    focus: "Server Architecture",
    level: "Backend Expert"
  },
  modules: [
    {
      id: "b1",
      week: 1,
      title: "Programming Fundamentals",
      duration: "7 days",
      icon: Code,
      color: "bg-blue-500",
      topics: [
        "Variables, Data Types, and Operators",
        "Control Flow: If/Else, Switch, Loops",
        "Functions and Scope",
        "Arrays and Objects Manipulation",
        "Basic Algorithms and Problem Solving",
        "ES6+ Features",
        "Writing Clean and Modular Code"
      ],
      projects: ["Build a CLI-based Task Manager using pure JavaScript/Node."],
      resources: [
        { label: "MDN JS Guide", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
        { label: "Eloquent JavaScript", href: "https://eloquentjavascript.net/" }
      ],
      outcome: "write core logic and modular programs in JavaScript"
    },
    {
      id: "b2",
      week: 2,
      title: "Advanced JavaScript Concepts",
      duration: "7 days",
      icon: Terminal,
      color: "bg-purple-500",
      topics: [
        "Asynchronous Programming (Promises, Async/Await)",
        "The Event Loop & Callbacks",
        "Closures and Higher-Order Functions",
        "Prototypal Inheritance & Classes",
        "Error Handling & Try/Catch",
        "Modules (CommonJS vs ESM)",
        "Working with External APIs (Fetch/Axios)"
      ],
      projects: ["Build an asynchronous Data Fetcher with retry logic."],
      resources: [
        { label: "You Don't Know JS", href: "https://github.com/getify/You-Dont-Know-JS" },
        { label: "Node.js Event Loop", href: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" }
      ],
      outcome: "master asynchronous operations and advanced closures"
    },
    {
      id: "b3",
      week: 3,
      title: "Web Fundamentals",
      duration: "7 days",
      icon: Globe,
      color: "bg-emerald-500",
      topics: [
        "HTTP/HTTPS Protocols & Status Codes",
        "Request/Response Lifecycle",
        "RESTful API Principles",
        "Headers, Query Params, and Body",
        "JSON Data Interchange Format",
        "Working with Postman/Insomnia",
        "Web Servers Basics"
      ],
      projects: ["Design a RESTful API specification for a Bookstore."],
      resources: [
        { label: "RESTful API Tutorial", href: "https://restfulapi.net/" },
        { label: "MDN HTTP Overview", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" }
      ],
      outcome: "understand the underlying protocols of the web"
    },
    {
      id: "b4",
      week: 4,
      title: "Node.js Fundamentals",
      duration: "7 days",
      icon: Layers,
      color: "bg-orange-500",
      topics: [
        "Node.js Runtime Environment",
        "NPM (Node Package Manager)",
        "File System Module (fs)",
        "Path & OS Modules",
        "EventEmitter Pattern",
        "Streams and Buffers",
        "Built-in Modules Overview"
      ],
      projects: ["Create a Log Management CLI tool that reads/writes files."],
      resources: [
        { label: "Node.js Official Docs", href: "https://nodejs.org/dist/latest-v18.x/docs/api/" },
        { label: "Intro to Node", href: "https://nodejs.dev/en/learn/" }
      ],
      outcome: "build server-side tools using Node.js core modules"
    },
    {
      id: "b5",
      week: 5,
      title: "Express.js Framework",
      duration: "7 days",
      icon: Server,
      color: "bg-pink-500",
      topics: [
        "Setting up an Express Server",
        "Routing and Route Parameters",
        "Middleware: Built-in and Custom",
        "Request/Response Objects",
        "Handling JSON and Form Data",
        "Static Files Serving",
        "Express Generator vs Manual Setup"
      ],
      projects: ["Build a multi-route Express server for a Product Catalog."],
      resources: [
        { label: "Express Guide", href: "https://expressjs.com/en/guide/routing.html" },
        { label: "Middleware Deep Dive", href: "https://expressjs.com/en/guide/using-middleware.html" }
      ],
      outcome: "architect scalable APIs with Express.js"
    },
    {
      id: "b6",
      week: 6,
      title: "Databases (SQL)",
      duration: "7 days",
      icon: Database,
      color: "bg-teal-500",
      topics: [
        "Relational Database Concepts",
        "Introduction to PostgreSQL",
        "SQL Basics: SELECT, INSERT, UPDATE, DELETE",
        "Joins and Relationships",
        "Schema Design and Normalization",
        "Indexing for Performance",
        "Constraints and Transactions"
      ],
      projects: ["Design a relational schema for a User/Post/Comment system."],
      resources: [
        { label: "PostgreSQL Tutorial", href: "https://www.postgresqltutorial.com/" },
        { label: "SQL Constraints", href: "https://www.w3schools.com/sql/sql_constraints.asp" }
      ],
      outcome: "design and query relational databases with SQL"
    },
    {
      id: "b7",
      week: 7,
      title: "Database Integration",
      duration: "7 days",
      icon: Link,
      color: "bg-indigo-500",
      topics: [
        "Connecting Node.js to PostgreSQL (pg)",
        "Using ORMs vs Query Builders (Prisma/Sequelize)",
        "Schema Migrations",
        "CRUD Operations with Database",
        "Query Optimization",
        "Connection Pooling",
        "Environment Variables for DB Config"
      ],
      projects: ["Migrate your Product Catalog to store data in PostgreSQL using Prisma."],
      resources: [
        { label: "Prisma Documentation", href: "https://www.prisma.io/docs/" },
        { label: "Node-Postgres Guide", href: "https://node-postgres.com/" }
      ],
      outcome: "integrate persistent storage into your backend apps"
    },
    {
      id: "b8",
      week: 8,
      title: "Authentication & Security",
      duration: "7 days",
      icon: ShieldCheck,
      color: "bg-rose-500",
      topics: [
        "Password Hashing (Bcrypt)",
        "JSON Web Tokens (JWT)",
        "Session vs Token Based Auth",
        "CORS and Security Headers",
        "Input Validation and Sanitization",
        "Environment Secret Management",
        "OAuth 2.0 Basics"
      ],
      projects: ["Implement a Secure Login/Signup system with JWT."],
      resources: [
        { label: "JWT.io", href: "https://jwt.io/introduction" },
        { label: "OWASP Top Ten", href: "https://owasp.org/www-project-top-ten/" }
      ],
      outcome: "secure your applications with professional authentication"
    },
    {
      id: "b9",
      week: 9,
      title: "Advanced API Features",
      duration: "7 days",
      icon: GitBranch,
      color: "bg-amber-500",
      topics: [
        "Pagination, Filtering, and Sorting",
        "File Structure & MVC Architecture",
        "Custom Error Handling Middleware",
        "Rate Limiting and Throttling",
        "API Documentation (Swagger)",
        "Webhooks and External Integrations",
        "Versioning APIs"
      ],
      projects: ["Add Pagination and Filtering to your Bookstore API."],
      resources: [
        { label: "API Design Best Practices", href: "https://github.com/Microsoft/api-guidelines" },
        { label: "Swagger Stats", href: "https://swagger.io/" }
      ],
      outcome: "build feature-rich and production-ready APIs"
    },
    {
      id: "b10",
      week: 10,
      title: "File Upload & Storage",
      duration: "7 days",
      icon: Cloud,
      color: "bg-cyan-500",
      topics: [
        "Handling Multipart/Form-data (Multer)",
        "Buffer vs Disk Storage",
        "Image Processing (Sharp)",
        "Cloud Storage (AWS S3/Cloudinary)",
        "Signed URLs and Private Access",
        "Handling Large File Streams",
        "Validating File Types and Sizes"
      ],
      projects: ["Build an Image Upload service that scales images upon upload."],
      resources: [
        { label: "Multer Docs", href: "https://github.com/expressjs/multer" },
        { label: "Cloudinary Node SDK", href: "https://cloudinary.com/documentation/node_integration" }
      ],
      outcome: "manage file uploads and cloud storage efficiently"
    },
    {
      id: "b11",
      week: 11,
      title: "Performance & Production",
      duration: "7 days",
      icon: Cpu,
      color: "bg-violet-500",
      topics: [
        "Caching and Redis",
        "Unit and Integration Testing (Jest)",
        "Load Balancing and Clustering",
        "PM2 Process Management",
        "Logging and Monitoring (Winston/Datadog)",
        "CI/CD Pipelines",
        "Dockerizing Backend Apps"
      ],
      projects: ["Dockerize your Express application and add Redis caching."],
      resources: [
        { label: "Jest Testing", href: "https://jestjs.io/" },
        { label: "Docker Docs", href: "https://docs.docker.com/" }
      ],
      outcome: "optimize and test your apps for professional performance"
    },
    {
      id: "b12",
      week: 12,
      title: "Deployment",
      duration: "7 days",
      icon: PlaneTakeoff,
      color: "bg-zinc-700",
      topics: [
        "Deploying to Vercel/Railway/Render",
        "Database Deployment (Neon/ElephantSQL)",
        "Domain Configuration and SSL",
        "Production Environment Variables",
        "Scaling Considerations",
        "Maintenance & Backups",
        "Project Presentation"
      ],
      projects: ["Deploy your full-stack Backend system to a live server."],
      resources: [
        { label: "Vercel Serverless Functions", href: "https://vercel.com/docs/concepts/functions/serverless-functions" },
        { label: "Railway Startup Guide", href: "https://docs.railway.app/" }
      ],
      outcome: "launch production applications to the cloud"
    }
  ]
};
