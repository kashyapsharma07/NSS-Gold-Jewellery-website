"use client";

import { useState } from "react";
import { CATEGORIES, JEWELLERY_CATALOG, JewelleryItem } from "@/data/catalog";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function CollectionsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredItems =
    selectedCategory === "all"
      ? JEWELLERY_CATALOG
      : JEWELLERY_CATALOG.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-pearl/40 border border-champagne/60 rounded-full max-w-full">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-obsidian text-ivory shadow-sm font-medium"
                    : "text-obsidian/70 hover:text-obsidian hover:bg-ivory/60"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Catalog Count Indicator */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-olive font-light">
          Showing {filteredItems.length} Masterpiece{filteredItems.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col justify-between border border-champagne/60 bg-pearl/20 p-8 transition-all duration-300 hover:border-gold hover:shadow-xl hover:shadow-gold/5"
          >
            <div>
              {/* Top Tag & Purity Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold border border-gold/40 px-2.5 py-1 bg-ivory">
                  {item.tag}
                </span>
                <span className="text-xs text-olive/80 font-mono tracking-wider">
                  {item.purity}
                </span>
              </div>

              {/* Title & Category */}
              <h3 className="font-display text-2xl font-normal text-obsidian group-hover:text-gold transition-colors leading-snug mb-2">
                {item.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.16em] text-olive font-light mb-4">
                {item.categoryLabel}
              </p>

              {/* Description */}
              <p className="text-sm text-obsidian/75 font-light leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Craftsmanship Note */}
              <div className="bg-ivory/70 border border-champagne/40 p-3 rounded-none mb-6">
                <p className="text-[11px] text-olive leading-normal font-light">
                  ✦ {item.details}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-champagne/40 flex flex-col gap-2.5">
              <a
                href={buildWhatsAppLink(
                  `Hello Nathubhai Soni & Sons, I would like to enquire about the "${item.name}" (${item.purity}) from your collection.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 bg-obsidian text-ivory text-xs uppercase tracking-[0.18em] hover:bg-gold hover:text-obsidian transition-colors font-medium flex items-center justify-center gap-2"
              >
                <span>Enquire on WhatsApp</span>
                <span>&rarr;</span>
              </a>
              <p className="text-center text-[10px] uppercase tracking-widest text-olive/60">
                100% BIS Hallmarked &bull; Showroom in Sonifalia
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Bespoke Custom Design Banner */}
      <div className="mt-16 bg-pearl/40 border border-gold/40 p-8 sm:p-12 text-center flex flex-col items-center">
        <span className="text-gold text-lg mb-2">✦</span>
        <h3 className="font-display text-2xl sm:text-3xl text-obsidian font-normal mb-3">
          Looking for a Custom Weight, Karatage, or Unique Design?
        </h3>
        <p className="text-sm text-obsidian/75 max-w-xl font-light leading-relaxed mb-6">
          Our Surat master karigars create bespoke ornaments sculpted to your budget and exact design references.
        </p>
        <a
          href={buildWhatsAppLink("Hello, I would like to consult with your master karigars for a custom jewellery order.")}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gold bg-ivory text-obsidian hover:bg-gold hover:text-ivory px-8 py-3 text-xs uppercase tracking-[0.2em] transition-colors"
        >
          Consult for Custom Design
        </a>
      </div>
    </div>
  );
}
