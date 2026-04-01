"use client";

import React, { useState, useEffect } from "react";
import RoadmapHero from "@/components/roadmap/RoadmapHero";
import TimelineProgress from "@/components/roadmap/TimelineProgress";
import ModuleAccordion from "@/components/roadmap/ModuleAccordion";
import CelebrationModal from "@/components/roadmap/CelebrationModal";
import { frontendRoadmap } from "@/data/roadmaps/frontend";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function FrontendRoadmapPage() {
  const [completedWeeks, setCompletedWeeks] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeWeek, setActiveWeek] = useState<number | null>(1);
  const [isCelebrationOpen, setIsCelebrationOpen] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem("roadmap-frontend-progress");
    if (savedProgress) {
      try {
        setCompletedWeeks(JSON.parse(savedProgress));
      } catch (err) {
        console.error("Failed to load progress:", err);
      }
    }
    setIsLoaded(true);
  }, []);

  // Trigger celebration when all weeks complete
  useEffect(() => {
    if (isLoaded && completedWeeks.length === frontendRoadmap.modules.length) {
      // Check if we already celebrated to avoid repeating on every load
      const hasCelebrated = sessionStorage.getItem("roadmap-frontend-celebrated");
      if (!hasCelebrated) {
        setIsCelebrationOpen(true);
        sessionStorage.setItem("roadmap-frontend-celebrated", "true");
      }
    }
  }, [completedWeeks.length, isLoaded]);

  // Save progress to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("roadmap-frontend-progress", JSON.stringify(completedWeeks));
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
        roadmap={frontendRoadmap} 
        completedCount={completedWeeks.length}
        totalCount={frontendRoadmap.modules.length}
      />

      <TimelineProgress 
        totalWeeks={frontendRoadmap.modules.length}
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
            <h2 className="text-3xl font-bold tracking-tight">Your 12-Week Learning Journey</h2>
            
          </div>

          <div className="space-y-6">
            {frontendRoadmap.modules.map((module, index) => (
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
        roadmapTitle="Frontend Development Roadmap"
      />
    </main>
  );
}
