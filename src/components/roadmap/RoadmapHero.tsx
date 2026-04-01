"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Target, 
  Award, 
  Clock, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Roadmap } from "@/types/roadmap";

interface RoadmapHeroProps {
  roadmap: Roadmap;
  completedCount: number;
  totalCount: number;
}

export default function RoadmapHero({ roadmap, completedCount, totalCount }: RoadmapHeroProps) {
  const percentage = Math.round((completedCount / totalCount) * 100);
  
  // For the circular progress
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative pt-24 md:pt-32 pb-16 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left: Content */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-primary uppercase tracking-widest"
          >
            <Sparkles size={14} />
            <span>{roadmap.badge}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              {roadmap.title} <br />
              <span className="text-gradient">{roadmap.subtitle}</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              {roadmap.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-sm">
              <Calendar size={16} className="text-brand-primary" />
              <span>{roadmap.stats.duration}</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-sm">
              <Target size={16} className="text-emerald-400" />
              <span>{roadmap.stats.focus}</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-sm">
              <Award size={16} className="text-purple-400" />
              <span>{roadmap.stats.level}</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Progress Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group lg:justify-self-end w-full flex justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-purple-500/20 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50" />
          <div className="relative w-full max-w-[320px] p-8 glass-card rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center space-y-6">
            <span className="text-zinc-400 font-medium text-sm">Your Progress</span>
            
            {/* Circular Progress */}
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                {/* Background Circle */}
                <circle
                  cx="88"
                  cy="88"
                  r={radius}
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="10"
                  className="text-white/5"
                />
                {/* Progress Circle */}
                <motion.circle
                  cx="88"
                  cy="88"
                  r={radius}
                  fill="transparent"
                  stroke={percentage === 100 ? "#10b981" : "#3ca2fa"}
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white">{percentage}%</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Complete</span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-zinc-400 text-sm">
                <span className="text-white font-bold">{completedCount}</span> of {totalCount} weeks completed
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
