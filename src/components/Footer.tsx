"use client";
import React from "react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative h-fit rounded-[3rem] overflow-hidden m-4 md:m-12 bg-zinc-950/95 border border-white/10 pb-12">
      <div className="max-w-7xl mx-auto px-8 md:px-14 z-10 relative">
        {/* Text hover effect - Main visual element */}
        <div className="flex h-[12rem] md:h-[25rem] lg:h-[30rem] -mt-6 md:-mt-20 opacity-60 hover:opacity-100 transition-opacity duration-700">
          <TextHoverEffect text="SKILLS" className="z-20" />
        </div>

        {/* Footer bottom with credits */}
        <div className="flex flex-col items-center justify-center text-sm space-y-4 pt-8 border-t border-white/5">
          {/* User Credits */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-zinc-500 font-medium text-base">
              Created with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
              <span className="text-white hover:text-brand-primary transition-colors cursor-default tracking-wide">
                Dharshanoj Thrishal
              </span>
            </p>
            <p className="text-zinc-600 text-xs tracking-widest uppercase">
              &copy; {new Date().getFullYear()} Skills Dev. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default Footer;
