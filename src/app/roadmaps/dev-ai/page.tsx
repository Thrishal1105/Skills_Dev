"use client";

import React, { useState, useEffect } from "react";
import RoadmapHero from "@/components/roadmap/RoadmapHero";
import TimelineProgress from "@/components/roadmap/TimelineProgress";
import ModuleAccordion from "@/components/roadmap/ModuleAccordion";
import CelebrationModal from "@/components/roadmap/CelebrationModal";
import { devAiRoadmap } from "@/data/roadmaps/dev-ai";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function DevAIRoadmapPage() {
  const [completedWeeks, setCompletedWeeks] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeWeek, setActiveWeek] = useState<number | null>(1);
  const [isCelebrationOpen, setIsCelebrationOpen] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem("roadmap-dev-ai-progress");
    if (savedProgress) {
      try {
        setCompletedWeeks(JSON.parse(savedProgress));
      } catch (err) {
        console.error("Failed to load progress:", err);
      }
    }
    setIsLoaded(true);
  }, []);

  // Trigger celebration when all modules complete
  useEffect(() => {
    if (isLoaded && completedWeeks.length === devAiRoadmap.modules.length) {
      const hasCelebrated = sessionStorage.getItem("roadmap-dev-ai-celebrated");
      if (!hasCelebrated) {
        setIsCelebrationOpen(true);
        sessionStorage.setItem("roadmap-dev-ai-celebrated", "true");
      }
    }
  }, [completedWeeks.length, isLoaded]);

  // Save progress to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("roadmap-dev-ai-progress", JSON.stringify(completedWeeks));
    }
  }, [completedWeeks, isLoaded]);

  const toggleWeekComplete = (week: number) => {
    setCompletedWeeks(prev => 
      prev.includes(week) 
        ? prev.filter(w => w !== week) 
        : [...prev, week].sort((a, b) => a - b)
    );
  };

  if (!isLoaded) return null;

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-brand-primary/30">
      <Navbar />
      
      <RoadmapHero 
        roadmap={devAiRoadmap} 
        completedCount={completedWeeks.length}
        totalCount={devAiRoadmap.modules.length}
      />

      <TimelineProgress 
        totalWeeks={devAiRoadmap.modules.length}
        completedWeeks={completedWeeks}
      />

      <section className="max-w-5xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">AI for Developer Roadmap</h2>
            
          </div>

          <div className="space-y-6">
            {devAiRoadmap.modules.map((module) => (
              <ModuleAccordion 
                key={module.id}
                module={module}
                isCompleted={completedWeeks.includes(module.week)}
                isExpanded={activeWeek === module.week}
                onToggle={() => setActiveWeek(activeWeek === module.week ? null : module.week)}
                onToggleComplete={toggleWeekComplete}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <CelebrationModal 
        isOpen={isCelebrationOpen}
        onClose={() => setIsCelebrationOpen(false)}
        roadmapTitle="AI for Developer Roadmap"
      />
    </main>
  );
}
