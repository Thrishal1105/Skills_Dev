"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineProgressProps {
  totalWeeks: number;
  completedWeeks: number[];
}

export default function TimelineProgress({ 
  totalWeeks, 
  completedWeeks 
}: TimelineProgressProps) {
  const percentage = Math.round((completedWeeks.length / totalWeeks) * 100);

  return (
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <div className="p-8 glass-card rounded-[2.5rem] border border-white/10 space-y-10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-brand-primary/5 blur-[80px] -z-10" />

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Check size={16} />
              </div>
              <span className="text-zinc-400 text-sm">
                <span className="text-white font-bold">{completedWeeks.length}</span> Weeks Done
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <Star size={16} />
              </div>
              <span className="text-zinc-400 text-sm">
                <span className="text-white font-bold">Job Ready</span>
              </span>
            </div>
          </div>
        </div>

        {/* Timeline Bar Wrapper */}
        <div className="relative pt-10 pb-4 overflow-x-auto scrollbar-hide">
          <div className="min-w-[750px] md:min-w-full relative px-2">
            {/* Main Progress Bar Background */}
            <div className="absolute top-[54px] left-0 w-full h-[2px] bg-white/5" />
            
            {/* Animated Progress Bar Fill */}
            <motion.div 
              className="absolute top-[54px] left-0 h-[2px] bg-gradient-to-r from-brand-primary to-purple-500 shadow-[0_0_10px_rgba(60,162,250,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
  
            {/* Week Dots */}
            <div className="relative flex justify-between">
              {Array.from({ length: totalWeeks }).map((_, i) => {
                const weekNum = i + 1;
                const isCompleted = completedWeeks.includes(weekNum);
                const isCurrent = completedWeeks.length + 1 === weekNum;
  
                return (
                  <div key={weekNum} className="flex flex-col items-center group">
                    <motion.div
                      animate={{
                        scale: isCurrent ? 1.1 : 1,
                        borderColor: isCompleted ? "#3ca2fa" : isCurrent ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)",
                        backgroundColor: isCompleted ? "#3ca2fa" : "transparent"
                      }}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-300 z-10 
                        ${isCompleted ? "text-white" : isCurrent ? "text-white" : "text-zinc-600"}`}
                    >
                      {isCompleted ? <Check size={18} /> : weekNum}
                    </motion.div>
                    <span 
                      className={`mt-4 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300
                        ${isCompleted || isCurrent ? "text-white" : "text-zinc-600"}`}
                    >
                      {/* Simplified labels for space */}
                      {i === 0 ? "HTML" : i === 6 ? "React" : i === 11 ? "Project" : ""}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
