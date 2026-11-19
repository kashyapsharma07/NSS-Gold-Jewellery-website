import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Our Heritage & Craftsmanship",
  description: `The story of ${siteConfig.name}, founded by ${siteConfig.founders.join(" and ")} in Sonifalia, Surat. Generational master karigari and 100% BIS Hallmarked fine jewellery.`,
};

const CRAFTSMANSHIP_TECHNIQUES = [
  {
    title: "Nakshi & Deep Relief Embossing",
    subtitle: "Sacred Iconography",
    description: "Our artisans meticulously chisel fine 22KT gold sheets from the reverse, producing three-dimensional temple deities, sacred lotuses, and royal peacocks with lifelike depth.",
  },
  {
    title: "Bikaneri & Surat Meenakari",
    subtitle: "Vibrant Vitreous Enamelling",
    description: "Mineral-rich jewel colors fused into intricate gold grooves at high temperatures. Even unseen reverses of our ornaments are treated as canvases of delicate art.",
  },
  {
    title: "Rawa & Granulation Art",
    subtitle: "Precision Gold Geometry",
    description: "Tiny, microscopic spheres of solid gold hand-soldered one by one across kadas and choker borders, creating a shimmering, tactile heritage texture.",
  },
  {
    title: "Syndicate Jadau & Polki Setting",
    subtitle: "Natural Brilliance",
    description: "Pure gold foil (daak) hand-burnished beneath natural uncut polki diamonds, capturing and reflecting candlelight and ballroom chandeliers with royal warmth.",
  },
];

const HERITAGE_TIMELINE = [
  {
    era: "The Inception",
    title: "Roots in Historical Sonifalia",
    description: `Founders ${siteConfig.founders.join(" and ")} established the atelier on Sonifalia Main Road, the historic gold capital of Surat, with an uncompromising pledge of pure weights and authentic karigari.`,
  },
  {
    era: "Generational Trust",
    title: "Crafting for Family Vivahs",
    description: "From grandfather to son to granddaughter, Surat families have returned to our counter for their most sacred wedding suites, mangalsutras, and birth celebrations.",
  },
  {
    era: "Hallmarking Pioneer",
    title: "100% Certified Purity",
    description: "As modern standards evolved, our commitment remained absolute: every single creation is tested, stamped, and certified by the Bureau of Indian Standards (BIS).",
  },
  {
    era: "Today & Beyond",
    title: "Contemporary Bespoke Luxury",
    description: "Preserving antique artisan secrets while tailoring lightweight modern fine jewelry for today's dynamic generation, customized to every client's dream.",
  },
];

export default function HeritagePage() {
  return (
    <main className="flex-1">
      {/* 1. HERO HEADER */}
      <section className="bg-radial from-pearl/60 via-ivory to-ivory py-20 sm:py-28 border-b border-champagne/30 text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <nav className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest text-olive">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-obsidian">Heritage</span>
          </nav>

          <span className="text-[11px] uppercase tracking-[0.25em] text-olive font-medium mb-3">
            Since Generations in Sonifalia, Surat
          </span>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-obsidian tracking-tight leading-[1.15]">
            The Soul of Gujarati <span className="italic font-normal text-gold">Karigari</span>
          </h1>

          <div className="flex items-center justify-center gap-3 my-6">
            <span className="h-px w-12 bg-gold/40" />
            <span className="text-gold text-xs">✦</span>
            <span className="h-px w-12 bg-gold/40" />
          </div>

          <p className="text-base sm:text-lg text-obsidian/75 font-light max-w-2xl leading-relaxed">
            Founded by <strong>{siteConfig.founders.join(" & ")}</strong>, {siteConfig.name} is an enduring family legacy built on pure gold, sacred design, and deep customer trust.
          </p>
        </div>
      </section>

      {/* 2. THE FOUNDING STORY */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-champagne/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story text */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.25em] text-olive font-medium">
                Our Genesis
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-obsidian leading-tight">
                Where Family Traditions Are Preserved in Pure Gold
              </h2>
              <div className="h-px w-16 bg-gold" />
              <p className="text-sm sm:text-base text-obsidian/80 font-light leading-relaxed">
                For decades, the narrow, energetic alleyways of Sonifalia in Surat have resonated with the gentle tapping of gold hammers and the glow of master artisans melting precious metals.
              </p>
              <p className="text-sm sm:text-base text-obsidian/80 font-light leading-relaxed">
                It was in this revered sanctuary of craftsmanship that <strong>{siteConfig.founders.join(" and ")}</strong> began crafting jewellery with a singular devotion: that jewellery is not simply an investment or adornment, but an emotional heirloom carrying the blessing of ancestors.
              </p>
              <p className="text-sm sm:text-base text-obsidian/80 font-light leading-relaxed">
                From our showroom near Bombay House Apartment in Pani ni Bhit, our counters continue to welcome families who value genuine warmth, transparent weighing, and ornaments sculpted with love.
              </p>
            </div>

            {/* Heritage Emblem Box */}
            <div className="lg:col-span-5 bg-pearl/30 border border-champagne/60 p-8 sm:p-12 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center mb-6 bg-ivory shadow-xs">
                <span className="font-display text-2xl text-gold font-light">NS</span>
              </div>
              <h3 className="font-display text-2xl text-obsidian font-normal mb-2">
                {siteConfig.name}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-olive mb-6">
                Sonifalia, Surat &bull; Gujarat
              </p>
              <div className="h-px w-24 bg-gold/40 mb-6" />
              <p className="text-xs text-obsidian/70 font-light leading-relaxed max-w-xs mb-6">
                &ldquo;Purity in every gram, devotion in every design, and integrity in every transaction.&rdquo;
              </p>
              <span className="text-[10px] uppercase tracking-widest text-gold font-mono border border-gold/40 px-3 py-1 bg-ivory">
                100% BIS Hallmarked
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GENERATIONAL TIMELINE */}
      <section className="py-20 sm:py-28 bg-pearl/20 border-b border-champagne/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-olive font-medium mb-3 block">
              The Journey
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-obsidian">
              Generations of Craft
            </h2>
            <div className="h-px w-16 bg-gold mx-auto my-5" />
            <p className="text-sm text-obsidian/70 font-light">
              Milestones that shaped our heritage and ongoing commitment to our patrons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {HERITAGE_TIMELINE.map((step, idx) => (
              <div
                key={step.title}
                className="bg-ivory border border-champagne/60 p-8 flex flex-col justify-between transition-all duration-300 hover:border-gold hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold border border-gold/40 px-2.5 py-1 bg-pearl/30">
                      {step.era}
                    </span>
                    <span className="font-display text-2xl text-champagne/80 font-light">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-obsidian font-normal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-obsidian/75 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MASTER KARIGARI TECHNIQUES */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-champagne/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-olive font-medium mb-3 block">
              Artisan Techniques
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-obsidian">
              The Art of Surat Karigari
            </h2>
            <div className="h-px w-16 bg-gold mx-auto my-5" />
            <p className="text-sm text-obsidian/70 font-light">
              Centuries-old metalworking techniques alive in every ornament we craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CRAFTSMANSHIP_TECHNIQUES.map((tech) => (
              <div
                key={tech.title}
                className="border border-champagne/60 bg-pearl/20 p-8 sm:p-10 flex flex-col justify-between transition-colors hover:border-gold"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium mb-2 block">
                    {tech.subtitle}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-obsidian font-normal mb-4">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-obsidian/75 font-light leading-relaxed">
                    {tech.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-champagne/40">
                  <span className="text-xs text-olive font-light">
                    ✦ Handcrafted in 22KT / 18KT Certified Gold
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PURITY PLEDGE & INVITATION */}
      <section className="py-20 bg-obsidian text-pearl">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium mb-3">
            The Purity Promise
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-ivory tracking-tight mb-6">
            100% BIS Hallmarked. Guaranteed Buyback & Purity.
          </h2>
          <p className="text-sm sm:text-base text-pearl/75 font-light max-w-2xl leading-relaxed mb-8">
            Every piece crafted at {siteConfig.name} carries the official hallmark emblem of the Bureau of Indian Standards, certifying its exact karatage with complete transparency.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/collections"
              className="px-8 py-3.5 bg-gold text-obsidian text-xs uppercase tracking-[0.2em] font-medium hover:bg-ivory transition-colors"
            >
              Explore Collections
            </Link>
            <a
              href={buildWhatsAppLink("Hello! I would like to learn more about your heritage and bespoke custom jewellery services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-pearl/30 text-pearl text-xs uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors"
            >
              Consult with Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
