"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  Trophy, 
  Share2, 
  PartyPopper, 
  X,
  ArrowRight,
  TrendingUp
} from "lucide-react";

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  roadmapTitle: string;
}

export default function CelebrationModal({ isOpen, onClose, roadmapTitle }: CelebrationModalProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isOpen && isClient) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        confetti({ 
          ...defaults, 
          particleCount, 
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
        });
        confetti({ 
          ...defaults, 
          particleCount, 
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isOpen, isClient]);

  if (!isClient) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass-card rounded-[3rem] border border-brand-primary/30 p-10 text-center space-y-8 overflow-hidden shadow-[0_0_100px_rgba(60,162,250,0.2)]"
          >
            {/* Success Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] -z-10" />

            <div className="flex justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, times: [0, 0.7, 1] }}
                className="w-24 h-24 rounded-3xl bg-brand-primary flex items-center justify-center text-white shadow-[0_0_40px_rgba(60,162,250,0.5)]"
              >
                <Trophy size={48} strokeWidth={2.5} />
              </motion.div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Congratulations!
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed px-4">
                You've successfully mastered the entire <span className="text-white font-bold">{roadmapTitle}</span>!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-brand-primary flex justify-center mb-1">
                  <TrendingUp size={20} />
                </div>
                <div className="text-xl font-bold text-white">100%</div>
                <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Complete</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-emerald-400 flex justify-center mb-1">
                  <PartyPopper size={20} />
                </div>
                <div className="text-xl font-bold text-white">Path Found</div>
                <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Success</div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <button
                onClick={onClose}
                className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-zinc-400 font-bold hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
              >
                <span>Continue Learning</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Close button top right */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-zinc-500 transition-all"
            >
              <X size={20} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
