"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "/collections", label: "Collections" },
  { href: "/heritage", label: "Heritage" },
  { href: "/#craftsmanship", label: "Bespoke & Craft" },
  { href: "/#visit", label: "Visit Showroom" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-champagne/40 transition-colors">
      {/* Top micro-bar for showroom info & direct contact */}
      <div className="hidden sm:block border-b border-champagne/30 bg-pearl/40 text-xs text-olive tracking-wider py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold" />
            <span>Sonifalia, Surat &bull; Mon–Sun {siteConfig.hours}</span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phones[0]}`}
              className="hover:text-obsidian transition-colors"
            >
              Call: {siteConfig.phones[0]}
            </a>
            <span className="text-champagne">&bull;</span>
            <a
              href={buildWhatsAppLink("Hello, I would like to enquire about your jewellery collections.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors font-medium"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-2xl sm:text-3xl font-normal tracking-wide text-obsidian group-hover:text-gold transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-olive font-sans">
            Fine Heritage Jewellers &bull; Surat
          </span>
        </Link>

        {/* Desktop navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-obsidian/80 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={buildWhatsAppLink("Hello, I would like to book an appointment or view your collection.")}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold text-obsidian hover:bg-gold hover:text-ivory px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition-all duration-300"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile menu hamburger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-obsidian hover:text-gold focus:outline-none"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-champagne/40 bg-ivory px-6 py-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-obsidian hover:text-gold py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-champagne/40 flex flex-col gap-3">
            <a
              href={buildWhatsAppLink("Hello, I would like to enquire about your jewellery.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center border border-gold bg-gold text-ivory py-2.5 text-xs uppercase tracking-[0.15em]"
            >
              Enquire on WhatsApp
            </a>
            <p className="text-center text-xs text-olive">
              Showroom: {siteConfig.hours}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
