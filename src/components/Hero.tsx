"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Code,
  Database,
  Bot,
  Brain,
  ChevronRight
} from "lucide-react";
import Hls from "hls.js";
import Link from "next/link";
import { cn } from "@/lib/utils";

const VIDEO_SRC = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";

const roadmaps = [
  {
    title: "Frontend Development Roadmap",
    description: "Build modern responsive UIs using HTML, CSS, JavaScript, and React.",
    icon: Code,
    color: "text-blue-400"
  },
  {
    title: "Backend Development Roadmap",
    description: "Build APIs, servers, and scalable backend systems.",
    icon: Database,
    color: "text-emerald-400"
  },
  {
    title: "AI Integration Roadmap",
    description: "Integrate chatbots, automation, and AI features into apps.",
    icon: Bot,
    color: "text-brand-primary"
  },
  {
    title: "AI for Development",
    description: "Understand AI concepts and tools used in modern applications.",
    icon: Brain,
    color: "text-purple-400"
  }
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let hls: Hls | null = null;

    if (videoRef.current) {
      const video = videoRef.current;

      const startPlayback = () => {
        video.play().catch(err => console.debug("Autoplay blocked:", err));
      };

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = VIDEO_SRC;
        video.onloadedmetadata = startPlayback;
      } else if (Hls.isSupported()) {
        hls = new Hls({
          capLevelToPlayerSize: true,
          autoStartLoad: true,
        });
        hls.loadSource(VIDEO_SRC);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, startPlayback);
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-24 md:pt-32 pb-20 overflow-hidden bg-zinc-950">
      {/* Background Video Layer */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 grayscale contrast-125 brightness-50"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950 backdrop-blur-[1px]" />

      <div className="max-w-6xl mx-auto px-6 text-center z-20 relative">
        {/* Breadcrumb-style Flow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 mb-8 text-[10px] md:text-xs font-medium uppercase tracking-widest text-zinc-500 px-2"
        >
          <span>Frontend</span>
          <ChevronRight size={12} className="shrink-0" />
          <span>Backend</span>
          <ChevronRight size={12} className="shrink-0" />
          <span>Testing</span>
          <ChevronRight size={12} className="shrink-0" />
          <span>Deployment</span>
          <ChevronRight size={12} className="shrink-0" />
          <span className="text-brand-primary/80">AI Integration</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 px-2 text-white"
        >
          Architecting the Future with <span className="text-gradient"> AI Intelligence </span> 🚀
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-zinc-400 max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Master your potential and elevate your career with our specialized,
          AI-powered learning paths designed for the modern engineer.
        </motion.p>

        {/* Roadmap Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left px-4 md:px-0">
          {roadmaps.map((card, index) => {
            let href = "#";
            if (card.title.toLowerCase().includes("frontend")) href = "/roadmaps/frontend";
            if (card.title.toLowerCase().includes("backend")) href = "/roadmaps/backend";
            if (card.title.toLowerCase().includes("ai integration")) href = "/roadmaps/ai";
            if (card.title.toLowerCase().includes("ai for development")) href = "/roadmaps/dev-ai";

            return (
              <Link key={card.title} href={href} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group p-8 glass-card rounded-[2rem] overflow-hidden flex flex-col justify-between h-full transition-all hover:-translate-y-2 cursor-pointer relative"
                >
                  {/* Glass highlight effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div>
                    <div className={cn("p-4 rounded-2xl bg-white/5 w-fit mb-6 transition-all group-hover:scale-110", card.color)}>
                      <card.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-brand-primary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                    <span>Explore Path</span>
                    <ArrowRight size={14} className="ml-2" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
