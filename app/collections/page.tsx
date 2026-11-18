import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { CollectionsGallery } from "@/components/CollectionsGallery";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fine Jewellery Collections",
  description: `Explore bridal jewellery, antique gold, polki, daily ornaments, and bullion coins from ${siteConfig.name}, Sonifalia, Surat.`,
};

export default function CollectionsPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="bg-radial from-pearl/60 via-ivory to-ivory py-16 sm:py-24 border-b border-champagne/30 text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <nav className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest text-olive">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-obsidian">Collections</span>
          </nav>
          
          <h1 className="font-display text-4xl sm:text-6xl font-light text-obsidian tracking-tight mb-4">
            Our Fine Jewellery Collections
          </h1>

          <div className="flex items-center justify-center gap-3 my-2">
            <span className="h-px w-12 bg-gold/40" />
            <span className="text-gold text-xs">✦</span>
            <span className="h-px w-12 bg-gold/40" />
          </div>

          <p className="text-base sm:text-lg text-obsidian/75 font-light max-w-2xl leading-relaxed mt-4">
            Handcrafted with generational Gujarati karigari and stamped with 100% BIS Hallmarked purity. Select any ornament to enquire directly with our showroom team on WhatsApp.
          </p>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <CollectionsGallery />
        </div>
      </section>
    </main>
  );
}
