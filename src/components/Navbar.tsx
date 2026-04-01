"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, Database, Sparkles, Bot } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLink {
  name: string;
  href: string;
  icon: any;
  primary?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Frontend", href: "/roadmaps/frontend", icon: Code },
  { name: "Backend", href: "/roadmaps/backend", icon: Database },
  { name: "AI", href: "/roadmaps/dev-ai", icon: Bot },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 py-2 transition-all duration-300",
        isScrolled ? "glass rounded-full shadow-2xl py-2" : "bg-transparent"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 relative group-hover:scale-110 transition-transform duration-300">
            <img 
              src="/logo.png" 
              alt="Skills Dev Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-brand-primary transition-colors">SKILLS DEV</span>
        </Link>

        {/* Desktop Nav - Hidden on Tablet/Mobile */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-primary flex items-center gap-2",
                link.primary 
                  ? "bg-brand-primary text-white px-5 py-2.5 rounded-full hover:bg-brand-primary/90 hover:scale-105 active:scale-95 transition-all"
                  : "text-zinc-400"
              )}
            >
              {!link.primary && <link.icon size={16} />}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass rounded-3xl p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium flex items-center gap-3",
                    link.primary 
                      ? "bg-brand-primary text-white p-4 rounded-2xl justify-center text-center"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  <link.icon size={20} />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
