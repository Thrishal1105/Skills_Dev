"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  ChevronDown, 
  BookOpen, 
  Lightbulb, 
  ExternalLink,
  Target,
  Trophy,
  ArrowRight
} from "lucide-react";
import { RoadmapModule } from "@/types/roadmap";
import { cn } from "@/lib/utils";

interface ModuleAccordionProps {
  module: RoadmapModule;
  isCompleted: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  onToggleComplete: (week: number) => void;
}

export default function ModuleAccordion({ 
  module, 
  isCompleted, 
  isExpanded,
  onToggle,
  onToggleComplete 
}: ModuleAccordionProps) {

  return (
    <div 
      className={cn(
        "group relative glass-card rounded-[2rem] border transition-all duration-500 overflow-hidden",
        isExpanded ? "border-brand-primary/30 ring-1 ring-brand-primary/10 shadow-[0_0_40px_rgba(60,162,250,0.1)]" : "border-white/5 hover:border-white/10",
        isCompleted && !isExpanded && "border-emerald-500/20 bg-emerald-500/5"
      )}
    >
      {/* Header */}
      <div 
        className="p-6 md:p-8 flex items-center justify-between cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center space-x-6">
          <div className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110",
            module.color,
            isCompleted && "bg-emerald-500 shadow-emerald-500/20"
          )}>
            {isCompleted ? <Check size={28} strokeWidth={3} /> : <module.icon size={28} />}
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center space-x-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Week {module.week} • {module.duration}
              </span>
              {isCompleted && (
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                  Completed
                </span>
              )}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {module.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleComplete(module.week);
            }}
            className={cn(
              "hidden md:flex items-center px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300",
              isCompleted 
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white"
                : "bg-white/5 text-zinc-400 border border-white/10 hover:bg-white hover:text-black hover:border-white"
            )}
          >
            {isCompleted ? "Completed" : "Mark Complete"}
          </button>
          
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-6 md:px-8 pb-10 pt-4 border-t border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                
                {/* Topics Covered */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-brand-primary">
                    <BookOpen size={18} />
                    <h4 className="font-bold text-sm uppercase tracking-widest">Topics Covered</h4>
                  </div>
                  <ul className="grid grid-cols-1 gap-3">
                    {module.topics.map((topic, index) => (
                      <li key={index} className="flex items-start space-x-3 group/item">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary/40 group-hover/item:bg-brand-primary transition-colors" />
                        <span className="text-zinc-400 text-sm leading-relaxed group-hover/item:text-zinc-200 transition-colors">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practice Projects */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-emerald-400">
                    <Target size={18} />
                    <h4 className="font-bold text-sm uppercase tracking-widest">Practice Projects</h4>
                  </div>
                  <ul className="space-y-4">
                    {module.projects.map((project, index) => (
                      <li key={index} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-400/30 transition-all group/project cursor-default">
                        <p className="text-zinc-300 text-sm font-medium group-hover/project:text-emerald-400 transition-colors">
                          {project}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources & Outcome */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 text-brand-primary">
                      <ExternalLink size={18} />
                      <h4 className="font-bold text-sm uppercase tracking-widest">Resources</h4>
                    </div>
                    <ul className="space-y-3">
                      {module.resources.map((resource, index) => (
                        <li key={index}>
                          <a 
                            href={resource.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 rounded-xl bg-brand-primary/5 border border-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white transition-all group/link"
                          >
                            <span className="text-sm font-medium">{resource.label}</span>
                            <ChevronDown size={14} className="-rotate-90 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 space-y-3">
                    <div className="flex items-center space-x-2 text-brand-primary">
                      <Trophy size={18} />
                      <span className="text-xs font-bold uppercase tracking-widest italic">Learning Outcome</span>
                    </div>
                    <p className="text-zinc-200 text-sm italic leading-relaxed">
                      "By the end of this week, you'll be able to {module.outcome}."
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Complete Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleComplete(module.week);
                  onToggle();
                }}
                className={cn(
                  "mt-10 w-full md:hidden flex items-center justify-center space-x-2 py-4 rounded-2xl text-sm font-bold transition-all duration-300",
                  isCompleted 
                    ? "bg-emerald-500 text-white"
                    : "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                )}
              >
                {isCompleted ? <Check size={20} /> : null}
                <span>{isCompleted ? "Mission Accomplished!" : "Mark as Completed"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
