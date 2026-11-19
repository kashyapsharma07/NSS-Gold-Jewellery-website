"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // 1. Ensure page always scrolls to the very top upon refresh or initial visit
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // 2. Display the elegant luxury spinner for a brief moment then fade out smoothly
    const timer = setTimeout(() => {
      setLoading(false);
      // Remove from DOM after fade-out transition finishes
      const removeTimer = setTimeout(() => {
        setShouldRender(false);
      }, 500);
      return () => clearTimeout(removeTimer);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory transition-opacity duration-500 ease-out ${
        loading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!loading}
    >
      <div className="flex flex-col items-center">
        {/* Luxury Gold Dual-Ring Spinner */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-6">
          {/* Subtle Outer Track */}
          <div className="absolute inset-0 rounded-full border border-champagne/40" />
          
          {/* Outer Rotating Arc */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold border-r-gold/50 animate-spin" />
          
          {/* Inner Counter-Rotating Arc */}
          <div
            className="absolute inset-2 rounded-full border border-transparent border-b-gold border-l-gold/40 animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.2s" }}
          />

          {/* Center Royal Monogram / Emblem */}
          <span className="font-display text-sm sm:text-base font-light text-gold tracking-widest">
            NS
          </span>
        </div>

        {/* Brand Name & Hallmark Note */}
        <span className="font-display text-xl sm:text-2xl font-light tracking-wide text-obsidian mb-1">
          {siteConfig.name}
        </span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-olive font-sans">
          Sonifalia &bull; Surat
        </span>
      </div>
    </div>
  );
}
